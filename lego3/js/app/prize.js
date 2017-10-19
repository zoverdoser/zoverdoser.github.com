var Loading = require("../components/loading.js");
var MsgBox = require("../components/msgbox.js");
var weixin = require("../libs/weixin.js");

var shareObj = {
    title: "为乐高英雄助力，送丰厚大奖啦！", // 分享标题
    desc: '每天助力乐高英雄，天天赠送“乐高颗粒”，月末还能抽大奖哦～',
    link: serverPath + "lego20170726",
    imgUrl: serverPath + "html/compaign/lego20170726/images/share.jpg",
};
var winCode;
weixin.init().done(() => {
    weixin.share(shareObj, shareObj);
});

openPrize();
bindEvents();

function openPrize() {
    Loading.show();
    $.getJSON(serverPath + 'lego20170726/api/prize-list?callback=?').done((data) => {
        Loading.hide();
        console.log(data);
        if(data.success) {
            let list = data.result.list,
                prizes = $(".prizeList li");
            for(let i = 0; i < list.length; i++) {
                let giftID = list[i].luckydraw_gift_id,
                    code = list[i].win_code;
                    
                prizes.filter('[data-id="' + giftID + '"]').addClass('on').data('code', code);
                if(giftID == "298" || giftID == "302") {
                    if(list[i].info) {
                        prizes.filter('[data-id="' + giftID + '"]').addClass('get');
                    }
                    if(list[i].virtual_gift_code_shop) {
                        prizes.filter('[data-id="' + giftID + '"]').addClass('got');
                    }
                } else {
                    if(list[i].info) {
                        prizes.filter('[data-id="' + giftID + '"]').addClass('got');
                    }
                }
            }
        } else {
            MsgBox.alert(data.msg);
        }
    });
}

function bindEvents() {
    $(".pop .close, .pop .closeBtn").on("click", function() {
        $(this).parent().parent().hide();
    });

    $(".siteBtn, .pop.submitShop .submitShopPop .close, .pop.submitExpress .submitExpressPop .close, .pop.blocks .close, .pop.finish .close").on("click", function() {
        window.location.href = serverPath + "brands/lego";
    });

    // $(".prizeList li:nth-child(1) .btn").on("click", function() {
    //     window.location.href = 'http://r.intonead.com/card/coupons';
    // });

    $(".pop.express .expressPop .submitBtn").on("click", submitExpress);

    $(".pop.shop .shopPop .submitBtn").on("click", submitShop);

    $(".prizeList li .btn").on("click", function() {
        let giftID = String($(this).parent().data('id'));

        if(!$(this).parent().hasClass('got') && $(this).parent().hasClass('on')) {
            if(~giftID.indexOf('277')) {
                window.location.href = 'http://r.intonead.com/card/coupons';
            } else {

                winCode = $(this).parent().data('code');
                if(~giftID.indexOf('298') || ~giftID.indexOf('302')) {
                    if($(this).parent().hasClass('get')) {
                        window.location.href = serverPath + 'lego20170726/exchange';
                    } else {
                        $(".pop").hide().siblings(".pop.shop").fadeIn();
                    }
                } else {
                    if(!$(this).parent().hasClass('got')) {
                        $(".pop").hide().siblings(".pop.express").fadeIn();
                    }
                }
            }
        }
    });

    bindAddress();
}

function submitExpress() {
    let name = $("#nameExpressIpt").val().trim(),
        mobile = $("#mobileExpressIpt").val().trim(),
        address = $("#addressExpressIpt").val().trim();
    if(!name ||!address || !/^(13|14|15|18|17)\d{9}$/.test(mobile)) {
        MsgBox.alert("请填写正确的领奖信息");
        return;
    }
    Loading.show();
    $.getJSON(serverPath + 'lego20170726/api/info?callback=?', {
        name: name,
        mobile: mobile,
        address: address,
        winCode: winCode
    }).always(() => {
        Loading.hide();
    }).fail(() => {
        MsgBox.alert("网络错误 请重试");
    }).done((data) => {
        console.log(data);
        if(data.success) {
            $(".pop").hide().siblings(".pop.submitExpress").fadeIn();
        } else {
            MsgBox.alert(data.msg);
        }
    });
}

function submitShop() {
    let name = $("#nameShopIpt").val().trim(),
        mobile = $("#mobileShopIpt").val().trim(),
        address = $("#shopIpt option:selected").val();
    if(!name ||!address || address == '请选择门店' || !/^(13|14|15|18|17)\d{9}$/.test(mobile)) {
        MsgBox.alert("请填写正确的领奖信息");
        return;
    }
    Loading.show();
    $.getJSON(serverPath + 'lego20170726/api/info?callback=?', {
        name: name,
        mobile: mobile,
        address: address,
        winCode: winCode
    }).always(() => {
        Loading.hide();
    }).fail(() => {
        MsgBox.alert("网络错误 请重试");
    }).done((data) => {
        console.log(data);
        if(data.success) {
            $(".pop").hide().siblings(".pop.submitShop").fadeIn();
        } else {
            MsgBox.alert(data.msg);
        }
    });
}

function bindAddress() {
    let cities = [];
    let cityIpt = $("#cityIpt"), html = '<option disabled selected>请选择城市</option>';
    let shopIpt = $("#shopIpt"), shopHTML = '<option disabled selected>请选择门店</option>';

    $.getJSON(serverPath + 'shop/city?callback=?').done((data) => {
        for(let i = 0; i < data.result.list.length; i++) {
            cities.push(data.result.list);
            html += '<option value="' + data.result.list[i].city + '">' + data.result.list[i].city + '</option>';
        }
        cityIpt.append(html);
        shopIpt.html(shopHTML);
    });

    cityIpt.on("change", function() {
        Loading.show();
        let city = cityIpt.find("option:selected").text();
        $.getJSON(serverPath + 'shop/list?callback=?', {city: city}).done((data) => {
            Loading.hide();
            shopHTML = '<option disabled selected>请选择门店</option>';
            for(let i = 0; i < data.result.list.length; i++) {
                shopHTML += '<option value="' + data.result.list[i].name + ',' + data.result.list[i].shop_id + ',' + data.result.list[i].address + '">' + data.result.list[i].name + '</option>';
            }
            shopIpt.html(shopHTML);
        });
    });
}