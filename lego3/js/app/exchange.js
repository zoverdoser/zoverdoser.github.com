var Loading = require("../components/loading.js");
var MsgBox = require("../components/msgbox.js");
var weixin = require("../libs/weixin.js");

weixin.init().done(() => {
	weixin.hideOptionMenu();
});

var winCode = '';

openPrize();
bindEvents();

function bindEvents() {
	$("#exchange .submitBtn").on("click", exchange);
}

function openPrize() {
    Loading.show();
    $.getJSON(serverPath + 'lego20170726/api/prize-list?callback=?').done((data) => {
        Loading.hide();
        console.log(data);
        if(data.success) {
            let list = data.result.list;
            for(let i = 0; i < list.length; i++) {
                let giftID = list[i].luckydraw_gift_id;
                if(giftID == "273") {
                	winCode = list[i].win_code;
                }
            }
            $(".pop.prize").fadeIn();
        } else {
            MsgBox.alert(data.msg);
        }
    });
}

function exchange() {
	let code = $("#shopIpt").val();
    if(!code.length) {
        MsgBox.alert("请填写门店编号");
        return;
    }
    Loading.show();
    $.getJSON(serverPath + 'lego20170726/api/prize-get?callback=?', {
        winCode: winCode,
        shopID: code
    }).always(() => {
        Loading.hide();
    }).fail(() => {
        MsgBox.alert("网络错误 请重试");
    }).done((data) => {
        console.log(data);
        if(data.success) {
            MsgBox.alert('核销成功', function() {
            	window.location.href = serverPath + 'lego20170726';
            });
        } else {
            MsgBox.alert(data.msg);
        }
    });
}