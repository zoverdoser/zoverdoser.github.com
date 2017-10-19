var createjs=require('../libs/createjs-2015.05.21.min.js');
var buzz=require("../libs/buzz.min.js");
function Loader(cls,loaderNum,link=false){
    var self=this;
    var canvas;
    var images = images||{};
    var ss = ss||{};
    var lib=lib||{};
    var AdobeAn=AdobeAn||{};
    var canvasCls=cls;
    var dtd;
    var progress=0;
    var resArr=[];
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

        canvas(lib, images, createjs, ss,AdobeAn);
        
        resArr=lib.properties.manifest.filter(function(obj){
            var arr=obj.src.match(/[^\\?]*(png|jpg)/);
            var soundsArr=obj.src.split('.mp3');
            if(soundsArr.length>1){
                soundObj[obj.id]=new buzz.sound('./flash/'+soundsArr[0],opt);
            }
            if(arr&&arr.length>0){
                obj.src="../flash/"+arr[0];
                return obj;
            }
        });
        
        loadInt();
        return dtd.promise();
    }
    function loadInt(){
        resLength=resArr.length;
        progressObj.totalNum+=resLength;
        totalStep=Math.ceil(resLength/preloadNum);
        curStep=1;
        curLoadNum=0;
        if(resLength==0){
            handleComplete();
        }else{
            startLoad(0);
        }
        
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
                progressObj.loadNum+=1;
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
            imgObj.src=require("../../flash/images/"+tempURL);
            // imgObj.src="flash/"+resArr[i]['src'];
            
        }  
    }
    function handleComplete(){
        for(var i=0; i<lib.ssMetadata.length; i++) {
            var sName=lib.ssMetadata[i].name;
             ss[sName] = new createjs.SpriteSheet( {"images": [images[sName]], "frames": lib.ssMetadata[i].frames});
        }

        isComplete=true;
        var mc=new lib[canvasCls]();
        mc.pageName=canvasCls;
        if(lib['construct']){
            lib.construct(mc);
        }
        dtd.resolve(mc); 
    }
}
var isArray = function(obj) { 
    return Object.prototype.toString.call(obj) === '[object Array]'; 
} 
////////////////////////////////////////////
var loadScene=function(scene){
    if(!isArray(scene)){
        var promise=getScenePromise(scene['name'],scene['preloadNum'],scene['link']);
        return promise;
    }
    var tempArr=[];
    for(var i=0;i<scene.length;i++){
        var promise=getScenePromise(scene[i]['name'],scene[i]['preloadNum'],scene[i]['link']);  
        tempArr.push(promise);
    }
    return $.when.apply(this,tempArr);
}
function getScenePromise(scene,preloadNum,link){
    let promise;
    if(!loadPromiseObj[scene]){
        promise=new Loader(scene,preloadNum,link).init();
        loadPromiseObj[scene]=promise;
    }else{
        promise=loadPromiseObj[scene];
    }
    return promise;
}
/////////////////////////////////
var opt={
    formats: [ "mp3"],
    loop: false,
};
var soundObj={};
var loadPromiseObj=[];
var progressObj={
    'loadNum':0,
    'totalNum':0
}
var stage;
var middleContent=new createjs.Container();
var topContent=new createjs.Container();
var bottomContent=new createjs.Container();
var loadingContent=new createjs.Container();
var popMC=new createjs.Container();
var loadedPage={};
var pageOpt={};
var curPage;
function stageInit(){
    stage = new createjs.Stage(document.getElementById('indexCanvas'));
    createjs.Ticker.setFPS(25);
    createjs.Touch.enable(stage);
    createjs.Ticker.addEventListener("tick",stage);
    createjs.MotionGuidePlugin.install();
    stage.addChild(bottomContent,middleContent,topContent);//,loadingContent,popMC
}

window.playSound=function(id){
    if(soundObj[id]){
        soundObj[id].play();
    } 
}
window.stopSound=function(id){
    if(soundObj[id]){
        soundObj[id].stop();
    }
}
window.stopAllSound=function(){
    for(let i in soundObj){
        soundObj[i].stop();
    }
}
function loadInit(opt){
    pageOpt=opt;
    let loadArr=[opt['bottomLayer'],opt['topLayer']];
    opt.firstload.forEach(function(value){
        loadArr.push(opt['middleLayer'][value])
    });

    return loadScene(loadArr)
    .done(function(...list){
        list.forEach(function(mc){
            loadedPage[mc.pageName]=mc;
        });
        curPage=opt.firstPage;
        bottomContent.addChild(loadedPage['bg']);
        topContent.addChild(loadedPage['nav']);
        middleContent.addChild(loadedPage[opt.firstPage]);
        setTimeout(preloadPage,500,0);
    });
}
function preloadPage(id){
    let tempArr=pageOpt.preload.slice(id,id+pageOpt.preloadNum);
    let loadArr=tempArr.map(function(value){
        return pageOpt['middleLayer'][value];
    })
    loadScene(loadArr).done(function(){
        if(id+pageOpt.preloadNum<pageOpt.preload.length){
            preloadPage(id+pageOpt.preloadNum);
        }
    })
}
function goto(page,type,progressCb,completeCb){
    if(page==curPage){
        loadedPage[page].gotoAndPlay(0);
        return loadPromiseObj[curPage];
    }
    middleContent.removeAllChildren();
    if(loadedPage[page]){
        middleContent.addChild(loadedPage[page]);
        return loadPromiseObj[page];
    }

    return loadScene(pageOpt['middleLayer'][page])
            .done(function(pageMC){
                middleContent.addChild(pageMC);
                loadedPage[pageMC.pageName]=pageMC;
            });
}

function stopHandleTick() {
    createjs.Ticker.removeEventListener("tick",stage);
}

function startHandleTick() {
    createjs.Ticker.addEventListener("tick",stage);
}

stageInit();



module.exports.progress=progressObj;
module.exports.loadScene=loadScene;
module.exports.loadPromiseObj=loadPromiseObj;
module.exports.stage=stage;
module.exports.middleContent=middleContent;
module.exports.topContent=topContent;
module.exports.bottomContent=bottomContent;
module.exports.popMC=popMC;
module.exports.loadInit=loadInit;
module.exports.goto=goto;
module.exports.stopHandleTick=stopHandleTick;
module.exports.startHandleTick=startHandleTick;