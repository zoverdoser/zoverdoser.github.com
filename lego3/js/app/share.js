var Loading = require("../components/loading.js");
var MsgBox = require("../components/msgbox.js");
var weixin = require("../libs/weixin.js");

let shareID = query('id');

let shareObj = {
    title: "为乐高英雄助力，送丰厚大奖啦！", // 分享标题
    desc: '每天助力乐高英雄，天天赠送“乐高颗粒”，月末还能抽大奖哦～',
    link: serverPath + "lego20170726/share?id=" + shareID,
    imgUrl: serverPath + "html/compaign/lego20170726/images/share.jpg",
};

weixin.init().done(() => {
    weixin.share(shareObj, shareObj);
});

submitScore();

function submitScore(score, combo) {
    Loading.show();
    $.getJSON(serverPath + 'lego20170726/api/score?callback=?', {
        id: shareID
    }).done((data) => {
        Loading.hide();
        console.log(data);
        if(data.success) {
            $("#share .text .blocks").text(data.result.score);
            $("#share .text .percent ").text(data.result.per);
            $("#share .text .name ").text(data.result.nickname);
            if(data.result.isOnline != '1') {
            	$("#share .text").addClass('off');
            }
        } else {
            window.location.href = serverPath + 'lego20170726/';
        }
    });
}

function query(name) {
    return location.search.match(new RegExp('(?:\\?|&)' + name + '=(.*?)(?:$|&)', 'i')) ? decodeURIComponent(RegExp.$1) : '';
}