var _title,
    _desc,
    _link,
    _imgURL,
    _callBack,
    _cancelBack;

function weixinShare(title, desc, link, imgUrl, cb, cancel) {
    _title = title;
    _desc = desc;
    _link = link;
    _imgURL = imgUrl;
    _callBack = cb;
    _cancelBack = cancel;
    var _url = window.location.href;
    var appId, timestamp, nonceStr, signature;
    if(appId == undefined) {
        $.getJSON('http://weixinoauth.umaman.com/weixin/index/get-jssdk-info?jsonpcallback=?', {url: _url}, function(jsonp) {
            if(jsonp.success) {
                appId = jsonp.result.appId;
                timestamp = jsonp.result.timestamp;
                nonceStr = jsonp.result.nonceStr;
                signature = jsonp.result.signature;
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: appId, // 必填，公众号的唯一标识
                    timestamp: timestamp, // 必填，生成签名的时间戳
                    nonceStr: nonceStr, // 必填，生成签名的随机串
                    signature: signature, // 必填，签名，见附录1
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
                shareFun();
            } else {
                console.log("jsSDK启动失败！");
            }
        });
    } else {
        shareFun();
    }
}

// 朋友/朋友圈函数
function shareFun() {
    wx.ready(function() {
        wx.onMenuShareTimeline({
            title: _title, // 分享标题
            link: _link, // 分享链接
            imgUrl: _imgURL, // 分享图标
            success: function() {
                // 用户确认分享后执行的回调函数
                _callBack.call(null, "timeline");
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
                _cancelBack.call(null, "timeline");
            }
        });

        wx.onMenuShareAppMessage({
            title: _title, // 分享标题
            desc: _desc, //分享内容
            link: _link, // 分享链接
            imgUrl: _imgURL, // 分享图标
            success: function() {
                // 用户确认分享后执行的回调函数
                _callBack.call(null, "appMessage");
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
                _cancelBack.call(null, "appMessage");
            }
        });
    });
}
