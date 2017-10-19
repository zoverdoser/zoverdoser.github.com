import weixin from '../libs/Weixin.js';
require("../common/WeixinCommon.js");
var Loading = require("../components/loading.js");
import res from '../fla/res';
var Msgbox = require("../libs/msgbox.js");
var buzz = require("../libs/buzz.min.js");
var bgm = new buzz.sound( "sounds/bgm", {
    formats: ["mp3"],
    loop: true,
    autoplay: true
});
var firstCanvas = document.getElementById("firstCanvas"),
    canvas = document.getElementById("canvas"),
    firstStage = new createjs.Stage(firstCanvas, false, false),
    stage = new createjs.Stage(canvas, false, false),
    verticalSwipe,
    gameContainer = new createjs.Container(),
    loader,
    wxInited = false;

var pageObj = {},
    currentPage = 0;

var loadItems = [
    {name: 'p0', jsonNum: 8}
];

weixin.init().done(() => {
    wxInited = true;
});

createjs.MotionGuidePlugin.install();
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", firstStage);


initAnimation();
bindEvents();


function bindEvents() {
    $("#firstCanvas").on("click", function() {
        // if(+new Date() >= 1483200000000) {
        //     Msgbox.alert('活动已结束', function() {
        //         window.location.href = serverPath + "lego1208/index/prize";
        //     });
        // } else {
            window.location.href = window.location.origin + window.location.pathname + "game.html";
        // }
        
    });

    $(".pop .close, .pop .closeBtn").on("click", function() {
        $(this).parent().parent().hide();
    });

    $(".ruleBtn").on("click", function() {
        $(".pop.rule").fadeIn();
    });

    $(".myPrizeBtn").on("click", function() {
        window.location.href = serverPath + "lego1208/index/prize-list";
    });
}

function initAnimation() {
    Loading.show();
    $("#index").show();
    res.loadScene(loadItems[0]).done((indexLib) => {
        Loading.hide();
        pageObj['p0'] = new indexLib.p0();
        firstStage.addChild(pageObj['p0']);
        firstStage.update();
    });
}