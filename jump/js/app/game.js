import weixin from '../libs/Weixin.js';
require("../common/WeixinCommon.js");
var Loading = require("../components/loading.js");
import res from '../fla/res';
var Msgbox = require("../libs/msgbox.js");
var buzz = require("../libs/buzz.min.js");
// if(+new Date() >= 1483200000000) {
//     window.location.href = serverPath + "lego1208/index/prize";
// }
var bgm = new buzz.sound( "sounds/bgm", {
    formats: ["mp3"],
    loop: true,
    autoplay: false
});

if(!level) {
    level = 0;
}

// var scores = [25, 50, 80, 120, 170, 230, 300, 370, 450, 530, 610, 700, 790, 880, 980, 1080];
var scores = [50, 50, 80, 100, 120, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650];
var levelScoreArr = [50, 50, 50, 60, 60, 60, 70, 70, 70, 80, 80, 90, 90, 100, 100, 100];
var levelScoreObj = {};

var canvas = document.getElementById("canvas"),
    stage = new createjs.Stage(canvas, false, false),
    firstCanvas = document.getElementById("firstCanvas"),
    firstStage = new createjs.Stage(firstCanvas, false, false),
    unlockCanvas = document.getElementById("unlockCanvas"),
    unlockStage = new createjs.Stage(unlockCanvas, false, false),
    bgContainer = new createjs.Container(),
    gameContainer = new createjs.Container(),
    loader,
    wxInited = false,
    showPop = false,
    win_code = null,
    chosenIndex = 15;

var pageObj = null,
    unlockObj = null,
    loadImgs = 0,
    loadedScene = false,
    firstTry = true,
    loader = {
        doll0: {
            img: null,
            src: "images/doll0.png"
        },
        doll1: {
            img: null,
            src: "images/doll1.png"
        },
        doll2: {
            img: null,
            src: "images/doll2.png"
        },
        doll3: {
            img: null,
            src: "images/doll3.png"
        },
        doll4: {
            img: null,
            src: "images/doll4.png"
        },
        doll5: {
            img: null,
            src: "images/doll5.png"
        },
        doll6: {
            img: null,
            src: "images/doll6.png"
        },
        doll7: {
            img: null,
            src: "images/doll7.png"
        },
        doll8: {
            img: null,
            src: "images/doll8.png"
        },
        doll9: {
            img: null,
            src: "images/doll9.png"
        },
        doll10: {
            img: null,
            src: "images/doll10.png"
        },
        doll11: {
            img: null,
            src: "images/doll11.png"
        },
        doll12: {
            img: null,
            src: "images/doll12.png"
        },
        doll13: {
            img: null,
            src: "images/doll13.png"
        },
        doll14: {
            img: null,
            src: "images/doll14.png"
        },
        doll15: {
            img: null,
            src: "images/doll15.png"
        },
        cover: {
            img: null,
            src: "images/cover.png"
        },
        wrap: {
            img: null,
            src: "images/wrap.png"
        }
    };

var indexItem = {name: 'p0', jsonNum: 8},
    loadItems = [
        {name: 'p1', jsonNum: 7},
        {name: 'p2', jsonNum: 3},
        {name: 'p3', jsonNum: 3},
        {name: 'p4', jsonNum: 3}
    ],
    unlockItems = [
        {name: 'p5', jsonNum: 2},
        {name: 'p6', jsonNum: 2},
        {name: 'p7', jsonNum: 2},
        {name: 'p8', jsonNum: 2}
    ];

function levelSettings() {
    if(!levelScoreObj[DOLL.level]) {
       if(DOLL.level > 5) {
            if(DOLL.level >= 16){
                var score = 100 + ~~(Math.random() * 50); 
            } else {
                var score = levelScoreArr[DOLL.level] + ~~(Math.random() * 50); 
            }
            var time = 15;
        } else {
            var score = levelScoreArr[DOLL.level];
            var time = 10 + ~~(2 - Math.random() * 4);
        }
        levelScoreObj[DOLL.level] = {
            score: score,
            time: time
        };
    }
    return levelScoreObj[DOLL.level];
}

weixin.init().done(() => {
    wxInited = true;
});

createjs.MotionGuidePlugin.install();
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", tick);
stage.addChild(bgContainer);
stage.addChild(gameContainer);

if(level < 14 || ((level == 14 || level == 15)&& !isScan)) {
    loadSource(level);
} else if(level == 16 || !isScan) {
    showResult();
} else {
    $("#gamePop, #game").hide();
    $("#scan").show();
}

bindEvents();
initIndexBg();

function bindEvents() {
    $(".pop.share").on("click", function() {
        $(this).fadeOut();
    });

    $(".pop.infiniteEnd .shareBtn").on("click", function() {
        $(".pop.share").fadeIn();
    });

    $(".pop.infiniteEnd .closeEnd").on("click", function() {
        showResult();
    });

    $("#scan .back2AllBtn").on("click", function() {
        $("#scan, #game").hide();
        showResult();
    });

    $("#scan .scanBtn").on("click", function() {
        weixin.qr();
    });

    $(".userBox").css('background-image', 'url(' + headImgURL + ')').find('.name').text(name);

    $(".ruleBtn").on("click", function() {
        $(".pop.rule").fadeIn();
    });

    $(".myPrizeBtn").on("click", function() {
        window.location.href = serverPath + "lego1208/index/prize-list";
    });

    $(".pop.fail .retryBtn, .pop.infiniteEnd .retryBtn").on("click", function() {
        createjs.Ticker.addEventListener("tick", stage);
        DOLL.start();
        $(".pop.fail, .pop.infiniteEnd").hide();
    });

    $(".pop .close").on("click", function() {
        $(this).parent().parent().hide();
    });

    $("#gamePop .all .nextBtn").on("click", function() {
        DOLL.isInfinite = false;
        nextHandler();
    });

    $(document).on("NEXT", nextHandler);

    $(".indexBtn").on("click", function() {
        window.location.href = serverPath + "lego1208/index";
    });

    $(".pop.slot .retryBtn").on("click", function() {
        $(".pop.slot").hide().children().hide();
        showResult();
    });

    $(".siteBtn").on("click", function() {
        window.location.href = "http://r.intonead.com/site";
    });

    $("#gamePop .dollBox .doll").on("click", function() {
        if(level >= 14 && $(this).hasClass('on')) {
            DOLL.isInfinite = true;
            $("#game").css("opacity", 1).fadeIn();
            chosenIndex = $(this).index();
            loadSource(chosenIndex);
            $(".startHint").show();
            $(".canvasBox").one("touchstart", () => {
                DOLL.start();
                DOLL.rotate();
            });
        }
    });

    $(".pop.slot .allUnlock .slotBtn, .infiniteEndPop .slotBtn").on("click", slot);

    $(".pop.slot .streetView .getBtn").on("click", function() {
        $(".pop.slot .streetViewSubmit").fadeIn();
    });

    $(".pop.slot .block .getBtn").on("click", function() {
        $(".pop.slot .blockSubmit").fadeIn();
    });

    $(".pop.slot .streetViewSubmit .submitBtn").on("click", function() {
        submitInfo(true);
    });

    $(".pop.slot .blockSubmit .submitBtn").on("click", function() {
        submitInfo(false);
    });

    $(".success.pop .nextBtn").on("click", function() {
        let index = Number($(this).parent().parent().attr('index'));
        if(DOLL.isInfinite) {
            showResult();
        } else {
            showResult(index);
        }
    });

    adjustShop();
}

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

function submitInfo(needAddress) {
    let name, mobile, address = '';
    if(needAddress) {
        name = $("#nameIpt1").val().trim();
        mobile = $("#mobileIpt1").val().trim();
        address = $("#addressIpt1").val().trim();
    } else {
        name = $("#nameIpt2").val().trim();
        mobile = $("#mobileIpt2").val().trim();
        address = $("#provinceSlct").val() + ',' + $("#shopSlct > option:selected").attr('val');
    }
    if(!name.length || !/^((13|14|15|18|17)\d{9})|(170\d{8})$/.test(mobile) || (needAddress && !address.length)) {
        Msgbox.alert("请填写完整正确的领奖信息");
        return;
    }
    Loading.show();
    $.getJSON(serverPath + 'lego1208/index/user-info', {name: name, mobile: mobile, address: address, win_code: win_code}).done((res) => {
        Loading.hide();
        console.log(res);
        if(res.success) {
            Msgbox.alert("提交成功", function() {
                $(".pop.slot").hide().children().hide();
                $("#gamePop").fadeIn();
                showResult();
            });
        } else {
            alert(res.msg);
        }
    });
}

function slot() {
    Loading.show();
    $.getJSON(serverPath + 'lego1208/index/lottery', null).done((res) => {
        Loading.hide();
        console.log(res);
        if(res.success) {
            if(res.result.lotteryData != null) {
                let prizeID = res.result.lotteryData.gift.id;
                win_code = res.result.lotteryData.lottery.win_code;
                if(prizeID == '96') {
                    //拼砌包
                    $(".pop.infiniteEnd").hide();
                    $(".pop.slot").show().find(".allUnlock").hide().siblings(".block").fadeIn().find(".code").text("中奖编码: " + win_code);
                } else if(prizeID == '95') {
                    //街景
                    $(".pop.infiniteEnd").hide();
                    $(".pop.slot").show().find(".allUnlock").hide().siblings(".streetView").fadeIn().find(".code").text("中奖编码: " + win_code);
                }
            } else if(res.result.medal) {
                //互动徽章
                $(".pop.infiniteEnd").hide();
                $(".pop.slot").show().find(".allUnlock").hide().siblings(".medal").fadeIn();
            }
        } else {
            $(".pop.infiniteEnd").hide();
            $(".pop.slot").show().find(".allUnlock").hide().siblings(".none").show();
        }
    });
}

function nextHandler() {
    $(".unlock").hide();
    if(level < 14 || (isScan && (level == 14 || level == 15))) {
        $(".canvasBox").one("touchstart", () => {
            DOLL.start();
            DOLL.rotate();
        });
    }
    createjs.Ticker.removeEventListener("tick", unlockStage);
    if(level < 14) {
        showPop = false;
        $(".startHint").show();
        createjs.Ticker.addEventListener("tick", stage);
        $("#gamePop").hide();
        loadSource(level);
    } else if(level == 16) {
        $(".pop.slot").fadeIn().find(".allUnlock").show();
    } else {
        showPop = false;
        $("#gamePop, #game").hide();
        $("#scan").fadeIn();
    }
}

function tick() {
    if(showPop) {
        firstStage.update();
    }
}

function initAnimation(index) {
    Loading.show();
    res.loadScene(loadItems[index]).done((lib) => {
        Loading.hide();
        loadedScene = index;
        pageObj = new lib['p' + (1 + index)]();
        pageObj.display = pageObj;
        lib.construct(pageObj);
        bgContainer.removeAllChildren();
        pageObj.framerate = 24;
        bgContainer.addChild(pageObj);
        $("#game").css("opacity", 1);
    });
}

function initUnlock(index) {
    $(".unlock").show();
    Loading.show();
    unlockStage.removeAllChildren();
    res.loadScene(unlockItems[index]).done((lib) => {
        Loading.hide();
        unlockObj = new lib[unlockItems[index].name]();
        unlockObj.display = unlockObj;
        lib.construct(unlockObj);
        unlockObj.framerate = 24;
        unlockStage.addChild(unlockObj);
        createjs.Ticker.removeEventListener("tick", stage);
        createjs.Ticker.addEventListener("tick", unlockStage);
    });
}

function initIndexBg() {
    Loading.show();
    res.loadScene(indexItem).done((indexLib) => {
        Loading.hide();
        let bg = new indexLib.happy_267_1480581027138();
        bg.display = bg;
        indexLib.construct(bg);
        firstStage.addChild(bg);
    });
}

function loadSource(index) {
    let sceneIndex = ~~(index / 4);
    if(loadedScene !== sceneIndex) {
        initAnimation(sceneIndex);
    }
    Loading.show();
    loadImgs = {};
    let loaded = 0;
    loadImgs['doll' + index] = loader['doll' + index];
    loadImgs.cover = loader.cover;
    loadImgs.wrap = loader.wrap;
    for(let key in loadImgs) {
        loader[key].img = new Image();
        loader[key].img.onload = function() {
            loaded++
            if(loaded == 3) {
                Loading.hide();
                initGame(index);
                showPop = false;
                createjs.Ticker.removeEventListener("tick", firstStage);
                createjs.Ticker.addEventListener("tick", stage);
                $("#gamePop").hide();
            }
        };
        loader[key].img.src = loader[key].src;
    }
}

function initGame(index) {
    loadUI(index);
}

function loadUI(index) {
    DOLL.init(loader['doll' + index].img, index);
}

var Ease = {};
Ease.linear = function(t) { return t; };

var DOLL = {
    isInfinite: false,
    dollIndex: null,
    lowestPos: 610,
    highestPos: 140,
    bitmap: new createjs.Container(),
    cover: null,
    wrap: null,
    rotating: false,
    moveCount: 0,
    gravity: -0.004,
    initVelocity: 2,
    startTimeStamp: 0,
    slow: false,
    willSlow: false,
    isDouble: false,
    isFrozen: false,
    willFrozen: false,
    isImmortal: false,
    score: 0,
    alive: 1,
    loopTime: 120,
    level: 0,
    levelTime: 0,
    scoreBase: 0,
    isFirst: 0,
    landingTimer: null,

    init(img, index) {
        gameContainer.removeAllChildren();
        this.dollIndex = index;
        this.bitmap.removeAllChildren();
        this.bitmap.addChild(new createjs.Bitmap(img));
        this.bitmap.children[0].regX = img.width / 2;
        this.bitmap.children[0].regY = img.height / 2;
        this.cover = new createjs.Bitmap(loader.cover.img);
        this.bitmap.addChild(this.cover);
        this.cover.regX = loader.cover.img.width / 2;
        this.cover.regY = loader.cover.img.height / 2;
        this.cover.alpha = 0;
        this.wrap = new createjs.Bitmap(loader.wrap.img);
        this.bitmap.addChild(this.wrap);
        this.wrap.regX = loader.wrap.img.width / 2;
        this.wrap.regY = loader.wrap.img.height / 2;
        this.wrap.alpha = 0;
        this.bitmap.x = 250 + img.width / 2;
        this.bitmap.y = 610 + img.height / 2;
        this.lowestPos = 610 + img.height / 2;
        this.highestPos = 140 + img.height / 2;
        gameContainer.addChild(this.bitmap);
        $(".currentItem, .getItem").removeClass("double slow frozen immortal");
        $(".indicator .score").text(0);
        $("#game .indicator .timeBar .time").css("width", '100%');
        $("#game .indicator .processBar .process").css("width", '0');
        if(firstTry) {
            firstTry = false;
            DOLL.fistVisit();
        }
    },
    start() {
        levelScoreObj = {};
        bgm.play();
        createjs.Tween.removeAllTweens();
        DOLL.bitmap.children[0].rotation = 0;
        $(".currentItem, .getItem").removeClass("double slow frozen immortal");
        $(".indicator .score").text(0);
        $("#game .indicator .timeBar .time").css("width", '100%');
        $("#game .indicator .processBar .process").css("width", '0');
        this.rotating = false;
        this.alive = 1;
        this.level = 0;
        this.isImmortal = false;
        this.slow = false;
        this.willSlow = false;
        this.isDouble = false;
        this.willFrozen = false;
        this.isFrozen = false;
        this.score = 0;
        DOLL.scoreBase = 0;
        this.levelTime = +new Date();
        DOLL.cover.alpha = 0;
        DOLL.wrap.alpha = 0;
        this.startTimeStamp = +new Date();
        $("#canvas").on("touchstart", this.touchHandler);
        $("#canvas").on("touchmove", this.touchHandler);
        $("#canvas").on("touchend", this.touchendHandler);
        createjs.Ticker.addEventListener("tick", DOLL.move);
        clearTimeout(this.landingTimer);
        this.landingCallback(1000);
        $(".startHint").hide();
    },
    fistVisit() {
        this.score = -25;
        this.isFirst = true;
        $(".canvasBox").one("touchstart", () => {
            DOLL.start();
            DOLL.rotate();
        });
        $("#game .hand, #game .handWave").show();
        let pastTime = -DOLL.initVelocity / DOLL.gravity / 3;
        DOLL.bitmap.y = DOLL.lowestPos - (pastTime * DOLL.gravity + DOLL.initVelocity * 2) / 2 * pastTime;
    },
    landingCallback(timeout) {
        this.landingTimer = setTimeout(function() {
            if(DOLL.alive <= 0 || DOLL.isFirst) return;
            DOLL.getItem();
            DOLL.startTimeStamp = +new Date();
            $(document).trigger("jump");
            if(DOLL.rotating) {
                if(!DOLL.isImmortal) {
                    DOLL.alive--;
                }
                if(DOLL.alive <= 0) {
                    DOLL.stopMove(true, DOLL.bitmap.children[0].rotation);
                    return;
                }
            }
            if(DOLL.willSlow != DOLL.slow) {
                DOLL.slow = DOLL.willSlow;
                if(DOLL.slow) {
                    $(".currentItem, .getItem").removeClass("double slow frozen immortal").addClass("slow");
                } else {
                    $(".currentItem, .getItem").removeClass("slow");
                }
            }
            if(DOLL.willFrozen != DOLL.isFrozen) {
                DOLL.isFrozen = DOLL.willFrozen;
                if(DOLL.isFrozen) {
                    DOLL.cover.alpha = 1;
                    $(".currentItem, .getItem").removeClass("double slow frozen immortal").addClass("frozen");
                } else {
                    DOLL.cover.alpha = 0;
                    $(".currentItem, .getItem").removeClass("frozen");
                }
            }
            let next = DOLL.slow? 3000 : 1000;
            if(DOLL.alive > 0) {
                DOLL.landingCallback(next);
            }
        }, timeout)
    },
    move() {
        if(DOLL.alive <= 0) {
            createjs.Ticker.removeEventListener("tick", DOLL.move);
            return;
        }
        let pastTime, distance = 0;
        if(DOLL.slow) {
           pastTime = ((+new Date() - DOLL.startTimeStamp) % (-DOLL.initVelocity / DOLL.gravity * 6)) / 3;
        } else {
           pastTime = (+new Date() - DOLL.startTimeStamp) % (-DOLL.initVelocity / DOLL.gravity * 2);
        }
        if(DOLL.isFirst) {
            pastTime = -DOLL.initVelocity / DOLL.gravity / 3;
        }
        if(pastTime <= -DOLL.initVelocity / DOLL.gravity) {
            distance = (pastTime * DOLL.gravity + DOLL.initVelocity * 2) / 2 * pastTime;
        } else {
            distance = (-DOLL.initVelocity * DOLL.initVelocity / DOLL.gravity) / 2  + (pastTime + DOLL.initVelocity / DOLL.gravity) * (DOLL.initVelocity + pastTime * DOLL.gravity) / 2;
        }
        DOLL.bitmap.y = DOLL.lowestPos - distance;
        if(DOLL.isFirst) {
            return;
        }
        let levelPastTime = +new Date() - DOLL.levelTime,
            levelTime = levelSettings().time * 1000;
        $("#game .indicator .timeBar .time").css("width", (~~(levelTime - levelPastTime) / levelTime * 100) + '%');
        if(levelPastTime > levelTime && !DOLL.isImmortal) {
            DOLL.alive--;
            if(DOLL.alive <= 0) {
                DOLL.willFrozen = false;
                DOLL.frozen = false;
                DOLL.cover.alpha = 0;
                DOLL.stopMove(false, 0);
            }
        }
    },
    rotate() {
        if(DOLL.alive <= 0 || DOLL.isFrozen) return;
        DOLL.rotating = true;
        let deg = DOLL.bitmap.children[0].rotation;
        createjs.Tween.get(DOLL.bitmap.children[0], {loop: true, override: true}).to({rotation: deg-360}, DOLL.loopTime, Ease.linear).call(() => {
            let pastTime = (+new Date() - DOLL.startTimeStamp) % (-DOLL.initVelocity / DOLL.gravity * 2);
            if(!DOLL.isImmortal && 
                pastTime > -DOLL.initVelocity / DOLL.gravity && 
                (DOLL.lowestPos - DOLL.bitmap.y < 10 ||
                    (DOLL.rotating && 
                        (
                            !DOLL.slow && DOLL.lowestPos - DOLL.bitmap.y < (DOLL.loopTime * DOLL.initVelocity + DOLL.loopTime * DOLL.loopTime * DOLL.gravity / 2) ||
                            DOLL.slow && DOLL.lowestPos - DOLL.bitmap.y < (DOLL.loopTime / 3 * DOLL.initVelocity + DOLL.loopTime * DOLL.loopTime * DOLL.gravity / 6)
                        )
                    )
                )
            ) {
               DOLL.alive--;
            } else if(DOLL.isFirst) {
                DOLL.score += 2;
                $(".indicator .process").css("width", (~~DOLL.score / 25 * 100) + '%');
                if(DOLL.score >= 30) {
                    DOLL.score = 0;
                    DOLL.isFirst = false;
                    $("#game .hand, #game .handWave").hide();
                    $(".indicator .process").css("width", 0);
                    DOLL.rotating = false;
                    DOLL.levelTime = +new Date();
                }
            } else if(!DOLL.isFirst) {
                DOLL.score += 2;
                if(DOLL.isDouble) {
                    DOLL.score += 2;
                }
                let levelScore = levelSettings().score;
                if(DOLL.score > levelScore) {
                    DOLL.levelTime = +new Date();
                    DOLL.scoreBase += DOLL.score;
                    DOLL.score = 0;
                    DOLL.level++;
                    if(DOLL.isInfinite || (level < 16 && DOLL.scoreBase < scores[level])) {
                        //levelScore = levelSettings().score;
                    } else {
                        $(".indicator .score").text(DOLL.score + DOLL.scoreBase);
                        DOLL.alive = 0;
                        $("#canvas").off("touchstart", this.touchHandler);
                        $("#canvas").off("touchmove", this.touchHandler);
                        $("#canvas").off("touchend", this.touchendHandler);
                        setTimeout(function() {
                            endHandler(true, DOLL.dollIndex);
                        }, 500);
                        createjs.Tween.removeAllTweens();
                        return;
                    }
                }
                $(".indicator .process").css("width", (~~DOLL.score / levelScore * 100) + '%');
                $(".indicator .score").text(DOLL.score + DOLL.scoreBase);
            }
            if(DOLL.alive <= 0) {
                DOLL.stopMove(true, deg);
            } else if(!DOLL.rotating || DOLL.isFrozen) {
                DOLL.rotating = false;
                createjs.Tween.removeTweens(DOLL.bitmap.children[0]);
                DOLL.bitmap.children[0].rotation = 0;
            }
        });
    },
    stopMove(flag, deg) {
        DOLL.rotating = false;
        $("#canvas").off("touchstart", this.touchHandler);
        $("#canvas").off("touchmove", this.touchHandler);
        $("#canvas").off("touchend", this.touchendHandler);
        createjs.Tween.removeTweens(DOLL.bitmap.children[0]);
        if(!deg) {
            deg = 0;
        } else {
            deg = (~~(deg / 360)) * 360;
        }
        if(flag) {
            let time = (DOLL.lowestPos - DOLL.bitmap.y) / 2;
            createjs.Tween.get(DOLL.bitmap.children[0], {override: true}).to({rotation: deg - 180}, time);
            createjs.Tween.get(DOLL.bitmap).to({y: DOLL.lowestPos}, time).call(function() {
                $(document).trigger("jump");
            });
        }
        createjs.Ticker.removeEventListener("tick", DOLL.move);
        DOLL.rotating = false;
        setTimeout(function() {
            endHandler(false);
        }, 500);
    },
    getItem() {
        if(!DOLL.slow && !DOLL.willSlow && !DOLL.isDouble && !DOLL.isFrozen && !DOLL.willFrozen && !DOLL.isImmortal) {
            let random = Math.random() * 40;
            if(random <= 4) {
                if(random <= 1) {
                    DOLL.willSlow = true;
                    setTimeout(function() {
                        DOLL.willSlow = false;
                    }, 5000);
                } else if(random <= 2) {
                    DOLL.isDouble = true;
                    $(".currentItem, .getItem").removeClass("double slow frozen immortal").addClass("double");
                    setTimeout(function() {
                        $(".currentItem, .getItem").removeClass("double");
                        DOLL.isDouble = false;
                    }, 3000);
                } else if(random <= 3) {
                    DOLL.willFrozen = true;
                    setTimeout(function() {
                        DOLL.willFrozen = false;
                    }, 2000);
                } else if(random <= 4) {
                    setTimeout(function() {
                        DOLL.isImmortal = true;
                        DOLL.wrap.alpha = 1;
                        $(".currentItem, .getItem").removeClass("double slow frozen immortal").addClass("immortal");
                        setTimeout(function() {
                            $(".currentItem, .getItem").removeClass("immortal");
                            DOLL.wrap.alpha = 0;
                            DOLL.isImmortal = false;
                        }, 2000);
                    }, 500);
                }
            }
        }
    },
    touchHandler: (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(!DOLL.isFrozen) {
            DOLL.rotate();
        }
    },
    touchMoveHandler: (e) => {
        e.preventDefault();
        e.stopPropagation();
    },
    touchendHandler: (e) => {
        e.preventDefault();
        e.stopPropagation();
        DOLL.rotating = false;
        if(DOLL.isFirst && DOLL.score >= 25) {
            DOLL.isFirst = false;
            DOLL.score = 0;
            DOLL.levelTime = +new Date();
            $("#game .hand, #game .handWave").hide();
        }
    }
};

function endHandler(win, index) {
    bgm.stop();
    $(".currentItem, .getItem").removeClass("double slow frozen immortal");
    if(win) {
        $.getJSON(serverPath + 'lego1208/index/level', {level: ++level});
        $(".success.pop").fadeIn().attr('index', index).find(".score").text(DOLL.score + DOLL.scoreBase).siblings(".level").text(index+1);
    } else if(DOLL.isInfinite) {
        createjs.Ticker.removeEventListener("tick", stage);
        Loading.show();
        $.getJSON(serverPath + 'lego1208/index/score', {level: chosenIndex+1, score: DOLL.score + DOLL.scoreBase}).done(function(data) {
            Loading.hide();
            if(data.success) {
                weixin.share({
                    'title': "我在“翻滚吧乐高星人”中获得了" + (DOLL.score + DOLL.scoreBase) + "分，超越了" + data.result.per + "%的小伙伴！" ,
                    'desc': '',
                    'link': serverPath + "lego1208/index",
                    'imgUrl': serverPath + "compaign/lego20161208/images/share.jpg",
                }, {
                    'title': "我在“翻滚吧乐高星人”中获得了" + (DOLL.score + DOLL.scoreBase) + "分，超越了" + data.result.per + "%的小伙伴！" ,
                    'desc': "我在“翻滚吧乐高星人”中获得了" + (DOLL.score + DOLL.scoreBase) + "分，超越了" + data.result.per + "%的小伙伴！" ,
                    'link': serverPath + "lego1208/index",
                    'imgUrl': serverPath + "compaign/lego20161208/images/share.jpg",
                });
                if((DOLL.score + DOLL.scoreBase) >= 2000) {
                    if(level == 16) {
                        $(".infiniteEnd.pop .slotBtn").show();
                    } else {
                        $(".infiniteEnd.pop .slotBtn").hide();
                    }
                    $(".infiniteEnd.pop .infiniteEndPop").removeClass("lose").addClass("win").find(".score").text(DOLL.score + DOLL.scoreBase).siblings(".percent").text(data.result.per);
                } else {
                    $(".infiniteEnd.pop .slotBtn").hide();
                    $(".infiniteEnd.pop .infiniteEndPop").removeClass("win").addClass("lose").find(".score").text(DOLL.score + DOLL.scoreBase).siblings(".percent").text(data.result.per);
                }
                $(".infiniteEnd.pop").fadeIn();
            } else {
                alert(data.msg);
            }
        });
    } else {
        $(".fail.pop").fadeIn();
    }
}

function showResult(index) {
    $(".pop.success, .pop.fail, .pop.infiniteEnd").hide();
    if(level == 16) {
        $("#gamePop .nextBtn").hide().siblings(".pass").show();
    } else if(level >= 14) {
        $("#gamePop .nextBtn").show().siblings(".dollNote").show();
    }
    if(index == null || level % 4 != 0 || DOLL.isInfinite) {
        let dolls = $("#gamePop .all .allBox .dollBox .doll"),
            texts = $("#gamePop .all .allBox .textBox li");
        for(let i = 0; i < level; i++) {
            if(i == 16) break;
            dolls.eq(i).removeClass("current").addClass("on");
        }
        if(index === 0) {
            $("#gamePop .all .nextBtn").addClass('alt').siblings(".coupon").show();
        } else {
            $("#gamePop .all .nextBtn").removeClass('alt').siblings(".coupon").hide();
        }
        if(Number.isInteger(index)) {
            texts.removeClass("on").eq(index).addClass("on");
            dolls.eq(index).addClass("current");
        }
        showPop = true;
        createjs.Ticker.removeEventListener("tick", stage);
        $("#gamePop").fadeIn();
    } else {
        initUnlock((~~level/4) - 1);
    }
}