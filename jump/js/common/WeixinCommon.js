var Weixin=require("../libs/Weixin.js");
Weixin.init().done(function(){
	Weixin.share({
        'title': "还在拼爹拼颜值？LOW爆了，敢来跟我PK谁更会转吗？我在乐高，等你来战！",
        'desc': '',
        'link': serverPath + "lego1208/index",
        'imgUrl': serverPath + "compaign/lego20161208/images/share.jpg",
    }, {
        'title': "还在拼爹拼颜值？LOW爆了，敢来跟我PK谁更会转吗？我在乐高，等你来战！",
        'desc': '还在拼爹拼颜值？LOW爆了，敢来跟我PK谁更会转吗？我在乐高，等你来战！',
        'link': serverPath + "lego1208/index",
        'imgUrl': serverPath + "compaign/lego20161208/images/share.jpg",
    });
})