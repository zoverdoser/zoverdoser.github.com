var createjs=require('../libs/createjs-2015.05.21.min.js');
function Loader(cls,totalNum,loaderNum,link=false){
    var self=this;
    var canvas;
    var images = images||{};
    var ss = ss||{};
    var lib=lib||{};
    var canvasCls=cls;
    var dtd;
    var progress=0;
    var resArr=[];
    var totalJson=totalNum||0;
    var preloadNum=loaderNum||10;
    var totalStep=0;
    var curStep=0;
    var resLength;
    var curLoadNum=0;
    var isComplete=false;
    var mc;
    this.display=null;
    this.progress=function(){
        return progress;
    }
    this.init=function() {
        dtd = $.Deferred();
        canvas=require("../../flash/"+canvasCls+".js");
        if(!link){
            lib=require("./"+canvasCls+".js");
        }
        var ssName;
        var json;
        for(var i=0;i<totalJson;i++){
            ssName=(i==0)?"_atlas_":"_atlas_"+(i+1);  
            json = require("../../flash/images/"+canvasCls+"/"+canvasCls+ssName+".json");
            for(var j=0;j<json.images.length;j++){
                var imgSplit=json.images[j].split("../");
                json.images[j]=imgSplit.length>1?imgSplit[1]:imgSplit[0];
                resArr.push({"id":"json","src":json.images[j],"json":json});
                json.images[j]="flash/"+json.images[j]
            }
            ss[canvasCls+ssName] =new createjs.SpriteSheet(json);
        } 
        canvas(lib, images, createjs, ss);
        lib.properties.manifest=lib.properties.manifest.map(function(obj){
            var imgSplit=obj.src.split("../");
            obj.src=imgSplit.length>1?imgSplit[1]:imgSplit[0];
            return obj;
        })
        lib.properties.manifest=lib.properties.manifest.filter(function(obj){
            if(obj.src.indexOf(".jpg")!=-1||obj.src.indexOf(".png")!=-1){
                return obj;
            }
        })
        resArr=resArr.concat(lib.properties.manifest);

        loadInt();
        return dtd.promise();
    }
    function loadInt(){
        resLength=resArr.length;
        totalStep=Math.ceil(resLength/preloadNum);
        curStep=1;
        curLoadNum=0;
        startLoad(0);
    }
    function startLoad(id){
        var loadStepCount=0;
        for(let i=id;i<resLength&&i<id+preloadNum;i++){
            let imgObj=new Image();
            // console.log(i,resLength);
            imgObj.onload=function(){
                curLoadNum++;
                loadStepCount++;
                if(this.id!="json"){
                    images[this.id]=this;
                }
                progress=parseInt(curLoadNum/resLength*100)
                dtd.notify(progress);

                if(curLoadNum>=resLength){
                    if(!isComplete){
                        handleComplete();
                    }
                }else if(loadStepCount>=preloadNum){
                    startLoad(curLoadNum);
                    // setTimeout(startLoad,400,curLoadNum);
                }
               
            }
            // console.log(resArr[i]['src'])
            imgObj.id=resArr[i]['id'];
            var tempURL=resArr[i]['src'].split("images/")[1]
            // console.log(tempURL,resArr[i]['src'])
            // imgObj.src=require("../../flash/images/"+tempURL);
            imgObj.src="flash/"+resArr[i]['src'];
            
        }  
    }
    function handleComplete(){
        isComplete=true;
        // console.log('complete  '+ cls)
        // var exportRoot = new lib[canvasCls]();
        // self.display=exportRoot;
       
        var mc=new lib[canvasCls]();
        //if(lib['construct']){
        //    lib.construct(mc);
        //}
        // createjs.extend(mc,lib[canvasCls];
        dtd.resolve(lib); 
    }
}
var isArray = function(obj) { 
    return Object.prototype.toString.call(obj) === '[object Array]'; 
} 
var loadPromiseObj=[];
var loadScene=function(scene) {

    if(!isArray(scene)){
        var promise=(new Loader(scene['name'],scene['jsonNum'],scene['preloadNum'],scene['link'])).init();
        loadPromiseObj[scene['name']]=promise;
        return promise
    }
    var tempArr=[];
    for(var i=0;i<scene.length;i++){
        var loader=new Loader(scene[i]['name'],scene[i]['jsonNum'],scene[i]['preloadNum'],scene[i]['link']);
        var promise=loader.init();
        loadPromiseObj[scene[i]['name']]=promise;
        tempArr.push(promise);
    }
  
    return $.when.apply(this,tempArr);
}
module.exports.loadScene=loadScene;
module.exports.loadPromiseObj=loadPromiseObj;