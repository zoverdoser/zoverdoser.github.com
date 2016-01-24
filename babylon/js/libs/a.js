require("../app/jquery-message-min");
var createjs=require('../libs/createjs-2015.05.21.min.js');
var appLoader=require("./AppLoader.js");
var gameModel=require('./AppModel.js');
var Loading = require('../app/component-loading');
var canvas, stage, exportRoot;
var canvas = document.getElementById("canvas");

var weixin=require('../libs/icc-weixin.js');
var scene=require('./Scene.js');
var Swipe=require('../libs/component-verticalswipe.js');
var sharecommon = require("../libs/icc-weixinShare.js");

var needMask=true;
var verticalSwipe;
var pageIndex=0;
var ptn_mobi = /^1[3,4,5,7,8]{1}[0-9]{9}$/i;
var jobID=-1;
var foodID=-1;
var canJump=false;
var showJumpBack=false;

$('#container').on('click',function(){$(".n1").hide();});
$('.n1').on('click',function(){$(".n1").hide();});

var shareData = 
    {
        title: '新食安，新挑战、新机遇！',
        desc: '“最严”新食品安全法，对原料和供应链提出更高要求，如何应对？点我，立即看！',
        link: window.location.href,
        imgUrl: window.location.origin+'/'+'html/baipishu/images/share.jpg'
    };
    weixinShare(shareData['title'],shareData['desc'],shareData['link'],shareData['imgUrl']);
if($("meta[name='debug']").attr("content")=="true"){
	var debug=true;
}else{
	var debug=false;
}

// ajaxStart();
    
$.ajaxSetup({
        beforeSend: ajaxStart,
        complete: ajaxEnd,
        timeout:120000
    });

appLoader.init().done(function(value){
	$("#icc-preload").fadeOut(function(){
		$("#icc-preload").remove();
	})
	exportRoot=value;
	stage = new createjs.Stage(canvas);
	createjs.Ticker.setFPS(30);
	createjs.Touch.enable(stage);
	stage.addChild(exportRoot);
	//eventInit();
	stage.update();
	$(".backBtn").on("click",backBtnHandle);
	$(".touchMask").on("click",hideP2Mask);
    $('.province').on("change",selectProvince);

    $('.job li').on("click",function () {
        // console.log($(this).index());
        jobID = $(this).index();
        $('.job li').removeClass("current");
        $(this).addClass("current");
    })

    $('.foodType li').on("click",function () {
        // console.log($(this).index());
        foodID = $(this).index();
        $('.foodType li').removeClass("current");
        $(this).addClass("current");
    })

    $(".n1").on("click",function(){$(".n1").hide()});

    $('.commitBtn').on("click",uploadInfo);
    $('.jumpBack').on("click",function(){jumpToPage(5)});

    $('.q1').on("click",showQuestion);
    $('.q2').on("click",showQuestion);
    $('.q3').on("click",showQuestion);

    $('.j1').on("click",jumpHref);
    $('.j2').on("click",jumpHref);

    // alert("is_got"+is_got);
    if (is_got)
    {
        $('.q1').hide();
        $('.q2').hide();
        $('.q3').hide();
    }

	exportRoot.page2.p2mask.visible=false;
    exportRoot.page2.cBtn.addEventListener("click",hideP2Mask);
	exportRoot.page2.btn_0.addEventListener("click",function(e){jumpToPage(2);});
	exportRoot.page2.btn_1.addEventListener("click",function(e){jumpToPage(3);});
	exportRoot.page2.btn_2.addEventListener("click",function(e){jumpToPage(4);});
	exportRoot.page2.btn_3.addEventListener("click",function(e){jumpToPage(5);});
	exportRoot.page2.btn_4.addEventListener("click",function(e){jumpToPage(6);});
	exportRoot.page2.btn_5.addEventListener("click",function(e){jumpToPage(9);});
	exportRoot.page2.btn_6.addEventListener("click",function(e){jumpToPage(12);});
	exportRoot.page2.btn_7.addEventListener("click",function(e){jumpToPage(12);});

	exportRoot.page6.btn_0.addEventListener("click",function(e){showJumpBack = true;jumpToPage(6);});
	exportRoot.page6.btn_1.addEventListener("click",function(e){showJumpBack = true;jumpToPage(9);});

	createjs.Ticker.addEventListener("tick", tick);
	show();
});

$(window).on("resize",resize);
resize();

function jumpToPage(index)
{
    if(!canJump)
    {
        return;
    }
	pageIndex = index;
	verticalSwipe.slide(index,100);
	exportRoot.gotoAndStop(pageIndex);
    stage.update();
}

function jumpHref()
{
    window.location.href = "http://www.unileverfoodsolutions.com.cn/";
}

function backBtnHandle()
{

	jumpToPage(1);
	needMask=false;
}

function showMask()
{
	// $(".touchMask").show();
    canJump=false;
	exportRoot.page2.p2mask.visible=true;
}

function hideP2Mask()
{
	exportRoot.page2.p2mask.visible=false;
    canJump=true;
	$(".touchMask").hide();
}

function tick(){
	stage.update();
}

function show(){
    ajaxEnd();
    ajaxPost("/default/index/area",{},getAreaOK);
	$("#container").show();
		verticalSwipe = new Swipe(document.getElementById('container'), {
        continuous: false, // 是否循环滚动
        stopPropagation: true,
        callback:function(){
        	hideTable();
        },
        transitionEnd:function(index)
        { 

        	pageIndex = index;
        	console.log("pageIndex: "+pageIndex);
			hideTable();
			$(".touchMask").hide();
            $('.jumpBack').hide();
	       	switch(pageIndex)
        	{
        		case 1:
        			
        			if(needMask)
        			{
        				setTimeout(showMask,1000);
        			}
        			needMask=true;
        			break;
        		case 6:
        			$(".n1").css({ top: "115px"});
        			setTimeout(function(){$(".t1").show();$(".n1").show();},2300);
        			// setTimeout(function(){$(".n1").hide();},5300);
        			break;
        		case 7:
        			$(".n1").css({ top: "115px"});
        			setTimeout(function(){$(".t2").show();$(".n1").show();},1800);
        			// setTimeout(function(){$(".n1").hide();},4800);
        			break;
                case 8:
                    if(canJump)
                    {
                        $('.jumpBack').show();
                    }
                    break;
        		case 9:
        			$(".n1").css({ top: "115px"});
        			setTimeout(function(){$(".t3").show();$(".n1").show();},2300);
        			// setTimeout(function(){$(".n1").hide();},3300);
        			break;
                case 11:
                    if(canJump)
                    {
                        $('.jumpBack').show();
                    }
                    break;
        		case 13:
        			$(".n1").css({ top: "40px"});
        			setTimeout(function(){$(".t5").show();},1000);
        			// setTimeout(function(){$(".n1").hide();},4000);
        			break;
        		case 14:
        			$(".n1").css({ top: "40px"});
        			setTimeout(function(){$(".t6").show();},1000);
        			// setTimeout(function(){$(".n1").hide();},4000);
        			break;
        	}

        	$(".backBtn").hide();
        	$(".d3").hide();
            $(".q3").hide();
            if(pageIndex>0 && pageIndex<16)
            {
                $(".d3").show();
                if(!is_got)
                {
                    $(".q3").show();
                }
            }
        	if(pageIndex>1 && pageIndex<16)
        	{
        		$(".backBtn").show();
        	}
	        
	        exportRoot.gotoAndStop(pageIndex);
	        stage.update();
	        	$('#canvas').prependTo($('#container ul li:eq('+pageIndex+') .canvas'));
	        

        }
    });
    
}

function hideTable()
{
	$(".t1").hide();
	$(".t2").hide();
	$(".t3").hide();
	$(".t4").hide();
	$(".t5").hide();
	$(".t6").hide();
	$(".t7").hide();
	$(".t8").hide();
	$(".n1").hide();
}

function showQuestion()
{
    $('.question').show();
}

function getAreaOK(data)
{
    if(data.success)
    {
        var len = data.result.length;
        var pData="<option value='0'>省份</option>";
        for(var i=0;i<len;i++)
        {
            pData+="<option value=" +data.result[i]._id + ">" + data.result[i].name + "</option>";
        }
        $('.province').empty();
        $('.province').append(pData);
    }
    else
    {
        $.message.alert({tit:"",con:data.error_msg,zoom:2});
    }
}

function selectProvince()
{
    // console.log("选择了"+$('.province').val());
    // console.log($(".province").find("option:selected").text());
    if($('.province').val()==0)
    {
        return;
    }
    var sendData={
        parent:$('.province').val()
    }
    ajaxPost("/default/index/area",sendData,getCityOK);
}

function getCityOK(data)
{
    if(data.success)
    {
        var len = data.result.length;
        var pData="<option value='0'>城市</option>";
        for(var i=0;i<len;i++)
        {
            pData+="<option value=" +data.result[i]._id + ">" + data.result[i].name + "</option>";
        }
        $('.city').empty();
        $('.city').append(pData);
    }
    else
    {
        $.message.alert({tit:"",con:data.error_msg,zoom:2});
    }
}

function uploadInfo()
{
    if($('.inputName').val().length<=0)
    {
        $.message.alert({tit:"",con:"请输入姓名",zoom:2});
        return;
    }

    if($(".inputTelNum").val().length<=0)
    {
        $.message.alert({tit:"",con:"请输入手机号",zoom:2});
        return;
    }
    if($(".inputTelNum").val().length!=11)
    {
        $.message.alert({tit:"",con:"请输入完整的手机号码",zoom:2});
        return;
    }
    else
    {
        var num = $(".inputTelNum").val();
        
        var result=num.match(ptn_mobi);
        if(!result)
        {
            $.message.alert({tit:"",con:"请输入合法的手机号码",zoom:2});
            return
        }
    }
    if(jobID == -1)
    {
        $.message.alert({tit:"",con:"请选择你的职务",zoom:2});
        return;
    }

    if($('.province').val() == 0)
    {
        $.message.alert({tit:"",con:"请选择省份",zoom:2});
        return;
    }

    if($('.city').val() == 0)
    {
        $.message.alert({tit:"",con:"请选择城市",zoom:2});
        return;
    }

    if($('.inputRestaurant').val().length<=0)
    {
        $.message.alert({tit:"",con:"请输入餐馆名",zoom:2});
        return;
    }

    if(foodID == -1)
    {
        $.message.alert({tit:"",con:"请选择业务类型",zoom:2});
        return;
    }

    if($('.avgCost').val().length<=0 && $('.beerCost').val().length<=0)
    {
        $.message.alert({tit:"",con:"请输入人均消费或者热销啤酒价格",zoom:2});
        return;
    }

    var sendData={
        work:jobID+11,
        province:$(".province").find("option:selected").text(),
        city:$(".city").find("option:selected").text(),
        restaurant_name:$('.inputRestaurant').val(),
        type:foodID+1,
        price:$('.avgCost').val(),
        price1:$('.beerCost').val(),
        name:$('.inputName').val(),
        mobile:$(".inputTelNum").val(),
        otherType:""
    }

    if (jobID == 5)
    {
        sendData['work'] = 999;
    }

    if (foodID == 5)
    {
        sendData['otherType'] = $('.otherFoodType').val();
    }

    ajaxPost("/whitepaper/baipishu/finish",sendData,sendInfoOK);
}

function sendInfoOK(data)
{
    if(data.success)
    {
        $.message.alert({tit:"",con:"提交成功",zoom:2});
        $('.question').hide();
        $('.q1').hide();
        $('.q2').hide();
        $('.q3').hide();
        is_got = 1;
    }
    else
    {
        $.message.alert({tit:"",con:data.error_msg,zoom:2});
    }
}

function ajaxPost(url,data,callback){
        $.ajax({
            url: url,
            type: "post",
            dataType: 'json',
            data: data
        })
        .done(function(data) {
            console.log("success");
            callback(data);
        })
        .fail(function(data) {
            console.log("error");
            getDataError(data);
        })
        .always(function() {
            console.log("complete");
        });
    }
    function getDataError(data)
    {
        $.message.alert({tit:"",con:'网络繁忙，请稍后再试',zoom:2});
    }
    function ajaxStart(){
        Loading.show();
    }
    function ajaxEnd(){
        Loading.hide();
    }

function resize(){
	winH=$('body').height();
	if(winH<1008){
		var h=$("#canvas").height();
		var prop=h/1040;
		var w=640*prop;
		$("#canvas").width(w);
		$(".canvas").width(w);
	}else{
		$("#canvas").width(640);
		$(".canvas").width(640);
	}

}