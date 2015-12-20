;define(function(require, exports, module){
	var $ = require('jquery');
	var wx=require('http://res.wx.qq.com/open/js/jweixin-1.0.0.js');
	/**-微信jsSDK-**/ 
	/**--在需要调用JS接口的页面引入如下JS文件，（支持https）：http://res.wx.qq.com/open/js/jweixin-1.0.0.js--**/ 

	exports.weixinShare=function(title,desc,link,imgUrl){
		var _url=window.location.href;
		var appId,timestamp,nonceStr,signature;
		if( appId==undefined ){
			$.getJSON('http://weixinoauth.umaman.com/weixin/index/get-jssdk-info?jsonpcallback=?', { url:_url }, function(jsonp) {
				if( jsonp.success ){
					appId = jsonp.result.appId;
			    	timestamp = jsonp.result.timestamp;
				    nonceStr = jsonp.result.nonceStr;
				    signature = jsonp.result.signature;
				    wx.config({
				        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				        appId: appId, // 必填，公众号的唯一标识
				        timestamp: timestamp, // 必填，生成签名的时间戳
				        nonceStr: nonceStr, // 必填，生成签名的随机串
				        signature: signature,// 必填，签名，见附录1
				        jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				    });
				    shareFun(title,desc,link,imgUrl);
			    }else{
			    	alert("jsSDK启动失败！");
			    }
			});
		}else{
			shareFun(title,desc,link,imgUrl);
		}
	}
	// 朋友/朋友圈函数
	function shareFun(title,desc,link,imgUrl){
	    wx.ready(function () {
	        wx.onMenuShareTimeline({
	            title: desc, // 分享标题
	            link: link, // 分享链接
	            imgUrl: imgUrl, // 分享图标
	            success: function () { 
	                // 用户确认分享后执行的回调函数
	            },
	            cancel: function () { 
	                // 用户取消分享后执行的回调函数
	            }
	        });

	        wx.onMenuShareAppMessage({
	            title: title, // 分享标题
	            desc: desc, //分享内容
	            link: link, // 分享链接
	            imgUrl: imgUrl, // 分享图标
	            success: function () { 
	                // 用户确认分享后执行的回调函数
	            },
	            cancel: function () { 
	                // 用户取消分享后执行的回调函数
	            }
	        });
	    });
	}
});

