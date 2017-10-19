import weixin from '../libs/Weixin.js';
require("../common/WeixinCommon.js");
var Loading = require("../components/loading.js");
var Msgbox = require("../libs/msgbox.js");

let prizeCode = null;

adjustShop();

Loading.show();
$.getJSON(serverPath + 'lego1208/index/prize').done((res) => {
	Loading.hide();
    if(+new Date() >= 1483200000000) {
        Msgbox.alert('活动已结束');
    }
	console.log(res);
	if(res.success) {
		let prizes = res.result.prize;
		for(let i = 0; i < prizes.length; i++) {
			let prizeID = prizes[i].luckydraw_gift_id;
			if(prizeID == '96') {
				//拼砌包
                prizeCode = prizes[i].win_code;
				$(".prizeTicket").eq(2).addClass('on');
                $(".prizeTicket").eq(2).attr('filled', !!prizes[i].info? 1 : 0);
                if(!!prizes[i].virtual_gift_code_shop) {
                    $(".prizeTicket").eq(2).addClass('got');
                }
			} else if(prizeID == '95') {
				//街景
				$(".prizeTicket").eq(0).addClass('on');
                $(".prizeTicket").eq(0).attr('code', prizes[i].win_code);
				if(!!prizes[i].info) {
					$(".prizeTicket").eq(0).attr('info', prizes[i].info.name + '|' + prizes[i].info.mobile + '|' + prizes[i].info.address);
				}
			} else if(prizeID == '94') {
				//优惠券
				$(".prizeTicket").eq(1).addClass('on');
                $("#codeIpt").val(prizes[i].virtual_gift_code);
			}
		}
	} else {
		alert(res.msg);
	}
});

function adjustShop() {
    var provinceArr=[];
    $.getJSON(serverPath + "api/shop/province")
    .done(function(res){
        provinceArr=res.result;
        createSelect();
    });
    getList();

    function createSelect(){
        var str="<option selected disabled>请选择</option>"
        provinceArr.forEach(function(obj){
            str +="<option value='"+obj.province+"''>"+obj.province+"</option>";
        })
        $("#provinceSlct").append(str);
    }

    var province;
    $("#provinceSlct").on("change",function(){
        province=$("#provinceSlct").val();
        if(province!=""){
            getList();
        }
        
    })

    var shopArr;
    function getList(){
        Loading.show();
        $.getJSON(serverPath + "api/shop",{province:province})
        .done(function(res){
            shopArr=res.result;
            createList();
            Loading.hide();
        })
    }
    function createList(){
        $("#shopSlct").empty();
        var str="<option selected disabled>请选择门店</option>";
        shopArr.forEach(function(obj){
            str += "<option val='"+obj.shop_name+ ', ' + obj.city + ', '+ obj.shop_id + ', ' + obj.shop_address +"'>"+obj.shop_name+"</option>"
        })
        $("#shopSlct").append(str);
    }
}

$(".prizeTicket.coupon .siteBtn").on("click", function() {
    if($(this).parent().hasClass("on")) {
        window.location.href = 'http://r.intonead.com/site#!/coupon';
    }
});

$(".pop.code .codePop .close").on("click", function() {
    $(".pop.code").hide();
});

$(".prizeTicket.coupon .showCodeBtn").on("click", function() {
    if($(this).parent().hasClass("on")) {
        $(".pop.code").fadeIn();
    }
});

$(".prizeTicket.streetView").on("click", function() {
    if($(this).hasClass('on')) {
        if($(this).attr("info")) {
            let info = $(this).attr("info").split('|');
            $("#nameIpt1").val(info[0]);
            $("#mobileIpt1").val(info[1]);
            $("#addressIpt1").val(info[2]);
        }
        $(".pop.streetViewSubmit").fadeIn();
    }
});

$(".prizeTicket.block").on("click", function() {
    if($(this).hasClass('on') && !$(this).hasClass('got')) {
        let isFilled = Number($(this).attr('filled'));
        if(isFilled) {
            $(".pop.getBlock").fadeIn();
        } else {
            $(".pop.blockSubmit").fadeIn();
        }
    }
});

$(".pop.streetViewSubmit .submitBtn").on("click", function() {
    submitInfo(true);
});

$(".pop.blockSubmit .submitBtn").on("click", function() {
    submitInfo(false);
});

$(".getBtn").on("click", function() {
    let shop = $("#shopIpt").val();
    if(shop.length) {
        Loading.show();
        $.getJSON(serverPath + 'lego1208/index/prize-get', {win_code: prizeCode, shopID: shop}).done((res) => {
            Loading.hide();
            if(res.success) {
                $(".prizeTicket").eq(2).addClass('got');
                Msgbox.alert("兑换成功", function() {
                    $(".pop.getBlock").hide();
                });
            } else {
                alert(res.msg);
            }
        });
    }
});


function submitInfo(needAddress) {
    let name, mobile, address = '', province = '', shop = '', win_code;
    if(needAddress) {
        name = $("#nameIpt1").val().trim();
        mobile = $("#mobileIpt1").val().trim();
        address = $("#addressIpt1").val().trim();
        win_code = $(".prizeTicket").eq(0).attr("code");
    } else {
        name = $("#nameIpt2").val().trim();
        mobile = $("#mobileIpt2").val().trim();
        province = $("#provinceSlct").val();
        shop = $("#shopSlct").val();
        win_code = prizeCode;
        address = $("#provinceSlct").val() + ',' + $("#shopSlct > option:selected").attr('val');
    }
    if(!name.length || !/^((13|14|15|18|17)\d{9})|(170\d{8})$/.test(mobile) || (needAddress && !address.length)) {
        Msgbox.alert("请填写完整正确的领奖信息");
        return;
    }
    Loading.show();
    $.getJSON(serverPath + 'lego1208/index/user-info', {name: name, mobile: mobile, address: address, win_code: win_code}).done((res) => {
        Loading.hide();
        if(res.success) {
            Msgbox.alert("提交成功", function() {
                $(".pop.blockSubmit, .pop.streetViewSubmit").hide();
            });
        } else {
            alert(res.msg);
        }
    });
}