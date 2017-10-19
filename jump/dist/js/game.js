webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(createjs, $) {"use strict";
	
	var _isInteger = __webpack_require__(4);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _Weixin = __webpack_require__(14);
	
	var _Weixin2 = _interopRequireDefault(_Weixin);
	
	var _res = __webpack_require__(16);
	
	var _res2 = _interopRequireDefault(_res);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(70);
	var Loading = __webpack_require__(71);
	
	var Msgbox = __webpack_require__(72);
	var buzz = __webpack_require__(73);
	// if(+new Date() >= 1483200000000) {
	//     window.location.href = serverPath + "lego1208/index/prize";
	// }
	var bgm = new buzz.sound("sounds/bgm", {
	    formats: ["mp3"],
	    loop: true,
	    autoplay: false
	});
	
	if (!level) {
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
	
	var indexItem = { name: 'p0', jsonNum: 8 },
	    loadItems = [{ name: 'p1', jsonNum: 7 }, { name: 'p2', jsonNum: 3 }, { name: 'p3', jsonNum: 3 }, { name: 'p4', jsonNum: 3 }],
	    unlockItems = [{ name: 'p5', jsonNum: 2 }, { name: 'p6', jsonNum: 2 }, { name: 'p7', jsonNum: 2 }, { name: 'p8', jsonNum: 2 }];
	
	function levelSettings() {
	    if (!levelScoreObj[DOLL.level]) {
	        if (DOLL.level > 5) {
	            if (DOLL.level >= 16) {
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
	
	_Weixin2.default.init().done(function () {
	    wxInited = true;
	});
	
	createjs.MotionGuidePlugin.install();
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", tick);
	stage.addChild(bgContainer);
	stage.addChild(gameContainer);
	
	if (level < 14 || (level == 14 || level == 15) && !isScan) {
	    loadSource(level);
	} else if (level == 16 || !isScan) {
	    showResult();
	} else {
	    $("#gamePop, #game").hide();
	    $("#scan").show();
	}
	
	bindEvents();
	initIndexBg();
	
	function bindEvents() {
	    $(".pop.share").on("click", function () {
	        $(this).fadeOut();
	    });
	
	    $(".pop.infiniteEnd .shareBtn").on("click", function () {
	        $(".pop.share").fadeIn();
	    });
	
	    $(".pop.infiniteEnd .closeEnd").on("click", function () {
	        showResult();
	    });
	
	    $("#scan .back2AllBtn").on("click", function () {
	        $("#scan, #game").hide();
	        showResult();
	    });
	
	    $("#scan .scanBtn").on("click", function () {
	        _Weixin2.default.qr();
	    });
	
	    $(".userBox").css('background-image', 'url(' + headImgURL + ')').find('.name').text(name);
	
	    $(".ruleBtn").on("click", function () {
	        $(".pop.rule").fadeIn();
	    });
	
	    $(".myPrizeBtn").on("click", function () {
	        window.location.href = serverPath + "lego1208/index/prize-list";
	    });
	
	    $(".pop.fail .retryBtn, .pop.infiniteEnd .retryBtn").on("click", function () {
	        createjs.Ticker.addEventListener("tick", stage);
	        DOLL.start();
	        $(".pop.fail, .pop.infiniteEnd").hide();
	    });
	
	    $(".pop .close").on("click", function () {
	        $(this).parent().parent().hide();
	    });
	
	    $("#gamePop .all .nextBtn").on("click", function () {
	        DOLL.isInfinite = false;
	        nextHandler();
	    });
	
	    $(document).on("NEXT", nextHandler);
	
	    $(".indexBtn").on("click", function () {
	        window.location.href = serverPath + "lego1208/index";
	    });
	
	    $(".pop.slot .retryBtn").on("click", function () {
	        $(".pop.slot").hide().children().hide();
	        showResult();
	    });
	
	    $(".siteBtn").on("click", function () {
	        window.location.href = "http://r.intonead.com/site";
	    });
	
	    $("#gamePop .dollBox .doll").on("click", function () {
	        if (level >= 14 && $(this).hasClass('on')) {
	            DOLL.isInfinite = true;
	            $("#game").css("opacity", 1).fadeIn();
	            chosenIndex = $(this).index();
	            loadSource(chosenIndex);
	            $(".startHint").show();
	            $(".canvasBox").one("touchstart", function () {
	                DOLL.start();
	                DOLL.rotate();
	            });
	        }
	    });
	
	    $(".pop.slot .allUnlock .slotBtn, .infiniteEndPop .slotBtn").on("click", slot);
	
	    $(".pop.slot .streetView .getBtn").on("click", function () {
	        $(".pop.slot .streetViewSubmit").fadeIn();
	    });
	
	    $(".pop.slot .block .getBtn").on("click", function () {
	        $(".pop.slot .blockSubmit").fadeIn();
	    });
	
	    $(".pop.slot .streetViewSubmit .submitBtn").on("click", function () {
	        submitInfo(true);
	    });
	
	    $(".pop.slot .blockSubmit .submitBtn").on("click", function () {
	        submitInfo(false);
	    });
	
	    $(".success.pop .nextBtn").on("click", function () {
	        var index = Number($(this).parent().parent().attr('index'));
	        if (DOLL.isInfinite) {
	            showResult();
	        } else {
	            showResult(index);
	        }
	    });
	
	    adjustShop();
	}
	
	function adjustShop() {
	    var provinceArr = [];
	    $.getJSON(serverPath + "api/shop/province").done(function (res) {
	        provinceArr = res.result;
	        createSelect();
	    });
	    getList();
	
	    function createSelect() {
	        var str = "<option selected disabled>请选择</option>";
	        provinceArr.forEach(function (obj) {
	            str += "<option value='" + obj.province + "''>" + obj.province + "</option>";
	        });
	        $("#provinceSlct").append(str);
	    }
	
	    var province;
	    $("#provinceSlct").on("change", function () {
	        province = $("#provinceSlct").val();
	        if (province != "") {
	            getList();
	        }
	    });
	
	    var shopArr;
	    function getList() {
	        Loading.show();
	        $.getJSON(serverPath + "api/shop", { province: province }).done(function (res) {
	            shopArr = res.result;
	            createList();
	            Loading.hide();
	        });
	    }
	    function createList() {
	        $("#shopSlct").empty();
	        var str = "<option selected disabled>请选择门店</option>";
	        shopArr.forEach(function (obj) {
	            str += "<option val='" + obj.shop_name + ', ' + obj.city + ', ' + obj.shop_id + ', ' + obj.shop_address + "'>" + obj.shop_name + "</option>";
	        });
	        $("#shopSlct").append(str);
	    }
	}
	
	function submitInfo(needAddress) {
	    var name = void 0,
	        mobile = void 0,
	        address = '';
	    if (needAddress) {
	        name = $("#nameIpt1").val().trim();
	        mobile = $("#mobileIpt1").val().trim();
	        address = $("#addressIpt1").val().trim();
	    } else {
	        name = $("#nameIpt2").val().trim();
	        mobile = $("#mobileIpt2").val().trim();
	        address = $("#provinceSlct").val() + ',' + $("#shopSlct > option:selected").attr('val');
	    }
	    if (!name.length || !/^((13|14|15|18|17)\d{9})|(170\d{8})$/.test(mobile) || needAddress && !address.length) {
	        Msgbox.alert("请填写完整正确的领奖信息");
	        return;
	    }
	    Loading.show();
	    $.getJSON(serverPath + 'lego1208/index/user-info', { name: name, mobile: mobile, address: address, win_code: win_code }).done(function (res) {
	        Loading.hide();
	        console.log(res);
	        if (res.success) {
	            Msgbox.alert("提交成功", function () {
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
	    $.getJSON(serverPath + 'lego1208/index/lottery', null).done(function (res) {
	        Loading.hide();
	        console.log(res);
	        if (res.success) {
	            if (res.result.lotteryData != null) {
	                var prizeID = res.result.lotteryData.gift.id;
	                win_code = res.result.lotteryData.lottery.win_code;
	                if (prizeID == '96') {
	                    //拼砌包
	                    $(".pop.infiniteEnd").hide();
	                    $(".pop.slot").show().find(".allUnlock").hide().siblings(".block").fadeIn().find(".code").text("中奖编码: " + win_code);
	                } else if (prizeID == '95') {
	                    //街景
	                    $(".pop.infiniteEnd").hide();
	                    $(".pop.slot").show().find(".allUnlock").hide().siblings(".streetView").fadeIn().find(".code").text("中奖编码: " + win_code);
	                }
	            } else if (res.result.medal) {
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
	    if (level < 14 || isScan && (level == 14 || level == 15)) {
	        $(".canvasBox").one("touchstart", function () {
	            DOLL.start();
	            DOLL.rotate();
	        });
	    }
	    createjs.Ticker.removeEventListener("tick", unlockStage);
	    if (level < 14) {
	        showPop = false;
	        $(".startHint").show();
	        createjs.Ticker.addEventListener("tick", stage);
	        $("#gamePop").hide();
	        loadSource(level);
	    } else if (level == 16) {
	        $(".pop.slot").fadeIn().find(".allUnlock").show();
	    } else {
	        showPop = false;
	        $("#gamePop, #game").hide();
	        $("#scan").fadeIn();
	    }
	}
	
	function tick() {
	    if (showPop) {
	        firstStage.update();
	    }
	}
	
	function initAnimation(index) {
	    Loading.show();
	    _res2.default.loadScene(loadItems[index]).done(function (lib) {
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
	    _res2.default.loadScene(unlockItems[index]).done(function (lib) {
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
	    _res2.default.loadScene(indexItem).done(function (indexLib) {
	        Loading.hide();
	        var bg = new indexLib.happy_267_1480581027138();
	        bg.display = bg;
	        indexLib.construct(bg);
	        firstStage.addChild(bg);
	    });
	}
	
	function loadSource(index) {
	    var sceneIndex = ~~(index / 4);
	    if (loadedScene !== sceneIndex) {
	        initAnimation(sceneIndex);
	    }
	    Loading.show();
	    loadImgs = {};
	    var loaded = 0;
	    loadImgs['doll' + index] = loader['doll' + index];
	    loadImgs.cover = loader.cover;
	    loadImgs.wrap = loader.wrap;
	    for (var key in loadImgs) {
	        loader[key].img = new Image();
	        loader[key].img.onload = function () {
	            loaded++;
	            if (loaded == 3) {
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
	Ease.linear = function (t) {
	    return t;
	};
	
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
	
	    init: function init(img, index) {
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
	        if (firstTry) {
	            firstTry = false;
	            DOLL.fistVisit();
	        }
	    },
	    start: function start() {
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
	    fistVisit: function fistVisit() {
	        this.score = -25;
	        this.isFirst = true;
	        $(".canvasBox").one("touchstart", function () {
	            DOLL.start();
	            DOLL.rotate();
	        });
	        $("#game .hand, #game .handWave").show();
	        var pastTime = -DOLL.initVelocity / DOLL.gravity / 3;
	        DOLL.bitmap.y = DOLL.lowestPos - (pastTime * DOLL.gravity + DOLL.initVelocity * 2) / 2 * pastTime;
	    },
	    landingCallback: function landingCallback(timeout) {
	        this.landingTimer = setTimeout(function () {
	            if (DOLL.alive <= 0 || DOLL.isFirst) return;
	            DOLL.getItem();
	            DOLL.startTimeStamp = +new Date();
	            $(document).trigger("jump");
	            if (DOLL.rotating) {
	                if (!DOLL.isImmortal) {
	                    DOLL.alive--;
	                }
	                if (DOLL.alive <= 0) {
	                    DOLL.stopMove(true, DOLL.bitmap.children[0].rotation);
	                    return;
	                }
	            }
	            if (DOLL.willSlow != DOLL.slow) {
	                DOLL.slow = DOLL.willSlow;
	                if (DOLL.slow) {
	                    $(".currentItem, .getItem").removeClass("double slow frozen immortal").addClass("slow");
	                } else {
	                    $(".currentItem, .getItem").removeClass("slow");
	                }
	            }
	            if (DOLL.willFrozen != DOLL.isFrozen) {
	                DOLL.isFrozen = DOLL.willFrozen;
	                if (DOLL.isFrozen) {
	                    DOLL.cover.alpha = 1;
	                    $(".currentItem, .getItem").removeClass("double slow frozen immortal").addClass("frozen");
	                } else {
	                    DOLL.cover.alpha = 0;
	                    $(".currentItem, .getItem").removeClass("frozen");
	                }
	            }
	            var next = DOLL.slow ? 3000 : 1000;
	            if (DOLL.alive > 0) {
	                DOLL.landingCallback(next);
	            }
	        }, timeout);
	    },
	    move: function move() {
	        if (DOLL.alive <= 0) {
	            createjs.Ticker.removeEventListener("tick", DOLL.move);
	            return;
	        }
	        var pastTime = void 0,
	            distance = 0;
	        if (DOLL.slow) {
	            pastTime = (+new Date() - DOLL.startTimeStamp) % (-DOLL.initVelocity / DOLL.gravity * 6) / 3;
	        } else {
	            pastTime = (+new Date() - DOLL.startTimeStamp) % (-DOLL.initVelocity / DOLL.gravity * 2);
	        }
	        if (DOLL.isFirst) {
	            pastTime = -DOLL.initVelocity / DOLL.gravity / 3;
	        }
	        if (pastTime <= -DOLL.initVelocity / DOLL.gravity) {
	            distance = (pastTime * DOLL.gravity + DOLL.initVelocity * 2) / 2 * pastTime;
	        } else {
	            distance = -DOLL.initVelocity * DOLL.initVelocity / DOLL.gravity / 2 + (pastTime + DOLL.initVelocity / DOLL.gravity) * (DOLL.initVelocity + pastTime * DOLL.gravity) / 2;
	        }
	        DOLL.bitmap.y = DOLL.lowestPos - distance;
	        if (DOLL.isFirst) {
	            return;
	        }
	        var levelPastTime = +new Date() - DOLL.levelTime,
	            levelTime = levelSettings().time * 1000;
	        $("#game .indicator .timeBar .time").css("width", ~~(levelTime - levelPastTime) / levelTime * 100 + '%');
	        if (levelPastTime > levelTime && !DOLL.isImmortal) {
	            DOLL.alive--;
	            if (DOLL.alive <= 0) {
	                DOLL.willFrozen = false;
	                DOLL.frozen = false;
	                DOLL.cover.alpha = 0;
	                DOLL.stopMove(false, 0);
	            }
	        }
	    },
	    rotate: function rotate() {
	        var _this = this;
	
	        if (DOLL.alive <= 0 || DOLL.isFrozen) return;
	        DOLL.rotating = true;
	        var deg = DOLL.bitmap.children[0].rotation;
	        createjs.Tween.get(DOLL.bitmap.children[0], { loop: true, override: true }).to({ rotation: deg - 360 }, DOLL.loopTime, Ease.linear).call(function () {
	            var pastTime = (+new Date() - DOLL.startTimeStamp) % (-DOLL.initVelocity / DOLL.gravity * 2);
	            if (!DOLL.isImmortal && pastTime > -DOLL.initVelocity / DOLL.gravity && (DOLL.lowestPos - DOLL.bitmap.y < 10 || DOLL.rotating && (!DOLL.slow && DOLL.lowestPos - DOLL.bitmap.y < DOLL.loopTime * DOLL.initVelocity + DOLL.loopTime * DOLL.loopTime * DOLL.gravity / 2 || DOLL.slow && DOLL.lowestPos - DOLL.bitmap.y < DOLL.loopTime / 3 * DOLL.initVelocity + DOLL.loopTime * DOLL.loopTime * DOLL.gravity / 6))) {
	                DOLL.alive--;
	            } else if (DOLL.isFirst) {
	                DOLL.score += 2;
	                $(".indicator .process").css("width", ~~DOLL.score / 25 * 100 + '%');
	                if (DOLL.score >= 30) {
	                    DOLL.score = 0;
	                    DOLL.isFirst = false;
	                    $("#game .hand, #game .handWave").hide();
	                    $(".indicator .process").css("width", 0);
	                    DOLL.rotating = false;
	                    DOLL.levelTime = +new Date();
	                }
	            } else if (!DOLL.isFirst) {
	                DOLL.score += 2;
	                if (DOLL.isDouble) {
	                    DOLL.score += 2;
	                }
	                var levelScore = levelSettings().score;
	                if (DOLL.score > levelScore) {
	                    DOLL.levelTime = +new Date();
	                    DOLL.scoreBase += DOLL.score;
	                    DOLL.score = 0;
	                    DOLL.level++;
	                    if (DOLL.isInfinite || level < 16 && DOLL.scoreBase < scores[level]) {
	                        //levelScore = levelSettings().score;
	                    } else {
	                        $(".indicator .score").text(DOLL.score + DOLL.scoreBase);
	                        DOLL.alive = 0;
	                        $("#canvas").off("touchstart", _this.touchHandler);
	                        $("#canvas").off("touchmove", _this.touchHandler);
	                        $("#canvas").off("touchend", _this.touchendHandler);
	                        setTimeout(function () {
	                            endHandler(true, DOLL.dollIndex);
	                        }, 500);
	                        createjs.Tween.removeAllTweens();
	                        return;
	                    }
	                }
	                $(".indicator .process").css("width", ~~DOLL.score / levelScore * 100 + '%');
	                $(".indicator .score").text(DOLL.score + DOLL.scoreBase);
	            }
	            if (DOLL.alive <= 0) {
	                DOLL.stopMove(true, deg);
	            } else if (!DOLL.rotating || DOLL.isFrozen) {
	                DOLL.rotating = false;
	                createjs.Tween.removeTweens(DOLL.bitmap.children[0]);
	                DOLL.bitmap.children[0].rotation = 0;
	            }
	        });
	    },
	    stopMove: function stopMove(flag, deg) {
	        DOLL.rotating = false;
	        $("#canvas").off("touchstart", this.touchHandler);
	        $("#canvas").off("touchmove", this.touchHandler);
	        $("#canvas").off("touchend", this.touchendHandler);
	        createjs.Tween.removeTweens(DOLL.bitmap.children[0]);
	        if (!deg) {
	            deg = 0;
	        } else {
	            deg = ~~(deg / 360) * 360;
	        }
	        if (flag) {
	            var time = (DOLL.lowestPos - DOLL.bitmap.y) / 2;
	            createjs.Tween.get(DOLL.bitmap.children[0], { override: true }).to({ rotation: deg - 180 }, time);
	            createjs.Tween.get(DOLL.bitmap).to({ y: DOLL.lowestPos }, time).call(function () {
	                $(document).trigger("jump");
	            });
	        }
	        createjs.Ticker.removeEventListener("tick", DOLL.move);
	        DOLL.rotating = false;
	        setTimeout(function () {
	            endHandler(false);
	        }, 500);
	    },
	    getItem: function getItem() {
	        if (!DOLL.slow && !DOLL.willSlow && !DOLL.isDouble && !DOLL.isFrozen && !DOLL.willFrozen && !DOLL.isImmortal) {
	            var random = Math.random() * 40;
	            if (random <= 4) {
	                if (random <= 1) {
	                    DOLL.willSlow = true;
	                    setTimeout(function () {
	                        DOLL.willSlow = false;
	                    }, 5000);
	                } else if (random <= 2) {
	                    DOLL.isDouble = true;
	                    $(".currentItem, .getItem").removeClass("double slow frozen immortal").addClass("double");
	                    setTimeout(function () {
	                        $(".currentItem, .getItem").removeClass("double");
	                        DOLL.isDouble = false;
	                    }, 3000);
	                } else if (random <= 3) {
	                    DOLL.willFrozen = true;
	                    setTimeout(function () {
	                        DOLL.willFrozen = false;
	                    }, 2000);
	                } else if (random <= 4) {
	                    setTimeout(function () {
	                        DOLL.isImmortal = true;
	                        DOLL.wrap.alpha = 1;
	                        $(".currentItem, .getItem").removeClass("double slow frozen immortal").addClass("immortal");
	                        setTimeout(function () {
	                            $(".currentItem, .getItem").removeClass("immortal");
	                            DOLL.wrap.alpha = 0;
	                            DOLL.isImmortal = false;
	                        }, 2000);
	                    }, 500);
	                }
	            }
	        }
	    },
	
	    touchHandler: function touchHandler(e) {
	        e.preventDefault();
	        e.stopPropagation();
	        if (!DOLL.isFrozen) {
	            DOLL.rotate();
	        }
	    },
	    touchMoveHandler: function touchMoveHandler(e) {
	        e.preventDefault();
	        e.stopPropagation();
	    },
	    touchendHandler: function touchendHandler(e) {
	        e.preventDefault();
	        e.stopPropagation();
	        DOLL.rotating = false;
	        if (DOLL.isFirst && DOLL.score >= 25) {
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
	    if (win) {
	        $.getJSON(serverPath + 'lego1208/index/level', { level: ++level });
	        $(".success.pop").fadeIn().attr('index', index).find(".score").text(DOLL.score + DOLL.scoreBase).siblings(".level").text(index + 1);
	    } else if (DOLL.isInfinite) {
	        createjs.Ticker.removeEventListener("tick", stage);
	        Loading.show();
	        $.getJSON(serverPath + 'lego1208/index/score', { level: chosenIndex + 1, score: DOLL.score + DOLL.scoreBase }).done(function (data) {
	            Loading.hide();
	            if (data.success) {
	                _Weixin2.default.share({
	                    'title': "我在“翻滚吧乐高星人”中获得了" + (DOLL.score + DOLL.scoreBase) + "分，超越了" + data.result.per + "%的小伙伴！",
	                    'desc': '',
	                    'link': serverPath + "lego1208/index",
	                    'imgUrl': serverPath + "compaign/lego20161208/images/share.jpg"
	                }, {
	                    'title': "我在“翻滚吧乐高星人”中获得了" + (DOLL.score + DOLL.scoreBase) + "分，超越了" + data.result.per + "%的小伙伴！",
	                    'desc': "我在“翻滚吧乐高星人”中获得了" + (DOLL.score + DOLL.scoreBase) + "分，超越了" + data.result.per + "%的小伙伴！",
	                    'link': serverPath + "lego1208/index",
	                    'imgUrl': serverPath + "compaign/lego20161208/images/share.jpg"
	                });
	                if (DOLL.score + DOLL.scoreBase >= 2000) {
	                    if (level == 16) {
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
	    if (level == 16) {
	        $("#gamePop .nextBtn").hide().siblings(".pass").show();
	    } else if (level >= 14) {
	        $("#gamePop .nextBtn").show().siblings(".dollNote").show();
	    }
	    if (index == null || level % 4 != 0 || DOLL.isInfinite) {
	        var dolls = $("#gamePop .all .allBox .dollBox .doll"),
	            texts = $("#gamePop .all .allBox .textBox li");
	        for (var i = 0; i < level; i++) {
	            if (i == 16) break;
	            dolls.eq(i).removeClass("current").addClass("on");
	        }
	        if (index === 0) {
	            $("#gamePop .all .nextBtn").addClass('alt').siblings(".coupon").show();
	        } else {
	            $("#gamePop .all .nextBtn").removeClass('alt').siblings(".coupon").hide();
	        }
	        if ((0, _isInteger2.default)(index)) {
	            texts.removeClass("on").eq(index).addClass("on");
	            dolls.eq(index).addClass("current");
	        }
	        showPop = true;
	        createjs.Ticker.removeEventListener("tick", stage);
	        $("#gamePop").fadeIn();
	    } else {
	        initUnlock(~~level / 4 - 1);
	    }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(3)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	/*!
	* @license EaselJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	this.createjs=this.createjs||{};
	var createjs=this.createjs;
	/*!
	* @license EaselJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	this.createjs=this.createjs||{},createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var b=a.prototype;b.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},b.stopPropagation=function(){this.propagationStopped=!0},b.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},b.remove=function(){this.removed=!0},b.clone=function(){return new a(this.type,this.bubbles,this.cancelable)},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this._listeners=null,this._captureListeners=null}var b=a.prototype;a.initialize=function(a){a.addEventListener=b.addEventListener,a.on=b.on,a.removeEventListener=a.off=b.removeEventListener,a.removeAllEventListeners=b.removeAllEventListeners,a.hasEventListener=b.hasEventListener,a.dispatchEvent=b.dispatchEvent,a._dispatchEvent=b._dispatchEvent,a.willTrigger=b.willTrigger},b.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},b.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},b.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},b.off=b.removeEventListener,b.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},b.dispatchEvent=function(a,b,c){if("string"==typeof a){var d=this._listeners;if(!(b||d&&d[a]))return!0;a=new createjs.Event(a,b,c)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(e){}if(a.bubbles&&this.parent){for(var f=this,g=[f];f.parent;)g.push(f=f.parent);var h,i=g.length;for(h=i-1;h>=0&&!a.propagationStopped;h--)g[h]._dispatchEvent(a,1+(0==h));for(h=1;i>h&&!a.propagationStopped;h++)g[h]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return!a.defaultPrevented},b.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},b.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},b.toString=function(){return"[EventDispatcher]"},b._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;try{a.currentTarget=this}catch(f){}try{a.eventPhase=b}catch(f){}a.removed=!1,e=e.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=e[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}},createjs.EventDispatcher=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Ticker cannot be instantiated."}a.RAF_SYNCHED="synched",a.RAF="raf",a.TIMEOUT="timeout",a.useRAF=!1,a.timingMode=null,a.maxDelta=0,a.paused=!1,a.removeEventListener=null,a.removeAllEventListeners=null,a.dispatchEvent=null,a.hasEventListener=null,a._listeners=null,createjs.EventDispatcher.initialize(a),a._addEventListener=a.addEventListener,a.addEventListener=function(){return!a._inited&&a.init(),a._addEventListener.apply(a,arguments)},a._inited=!1,a._startTime=0,a._pausedTime=0,a._ticks=0,a._pausedTicks=0,a._interval=50,a._lastTime=0,a._times=null,a._tickTimes=null,a._timerId=null,a._raf=!0,a.setInterval=function(b){a._interval=b,a._inited&&a._setupTick()},a.getInterval=function(){return a._interval},a.setFPS=function(b){a.setInterval(1e3/b)},a.getFPS=function(){return 1e3/a._interval};try{Object.defineProperties(a,{interval:{get:a.getInterval,set:a.setInterval},framerate:{get:a.getFPS,set:a.setFPS}})}catch(b){console.log(b)}a.init=function(){a._inited||(a._inited=!0,a._times=[],a._tickTimes=[],a._startTime=a._getTime(),a._times.push(a._lastTime=0),a.interval=a._interval)},a.reset=function(){if(a._raf){var b=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame;b&&b(a._timerId)}else clearTimeout(a._timerId);a.removeAllEventListeners("tick"),a._timerId=a._times=a._tickTimes=null,a._startTime=a._lastTime=a._ticks=0,a._inited=!1},a.getMeasuredTickTime=function(b){var c=0,d=a._tickTimes;if(!d||d.length<1)return-1;b=Math.min(d.length,b||0|a.getFPS());for(var e=0;b>e;e++)c+=d[e];return c/b},a.getMeasuredFPS=function(b){var c=a._times;return!c||c.length<2?-1:(b=Math.min(c.length-1,b||0|a.getFPS()),1e3/((c[0]-c[b])/b))},a.setPaused=function(b){a.paused=b},a.getPaused=function(){return a.paused},a.getTime=function(b){return a._startTime?a._getTime()-(b?a._pausedTime:0):-1},a.getEventTime=function(b){return a._startTime?(a._lastTime||a._startTime)-(b?a._pausedTime:0):-1},a.getTicks=function(b){return a._ticks-(b?a._pausedTicks:0)},a._handleSynch=function(){a._timerId=null,a._setupTick(),a._getTime()-a._lastTime>=.97*(a._interval-1)&&a._tick()},a._handleRAF=function(){a._timerId=null,a._setupTick(),a._tick()},a._handleTimeout=function(){a._timerId=null,a._setupTick(),a._tick()},a._setupTick=function(){if(null==a._timerId){var b=a.timingMode||a.useRAF&&a.RAF_SYNCHED;if(b==a.RAF_SYNCHED||b==a.RAF){var c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(c)return a._timerId=c(b==a.RAF?a._handleRAF:a._handleSynch),void(a._raf=!0)}a._raf=!1,a._timerId=setTimeout(a._handleTimeout,a._interval)}},a._tick=function(){var b=a.paused,c=a._getTime(),d=c-a._lastTime;if(a._lastTime=c,a._ticks++,b&&(a._pausedTicks++,a._pausedTime+=d),a.hasEventListener("tick")){var e=new createjs.Event("tick"),f=a.maxDelta;e.delta=f&&d>f?f:d,e.paused=b,e.time=c,e.runTime=c-a._pausedTime,a.dispatchEvent(e)}for(a._tickTimes.unshift(a._getTime()-c);a._tickTimes.length>100;)a._tickTimes.pop();for(a._times.unshift(c);a._times.length>100;)a._times.pop()};var c=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);a._getTime=function(){return(c&&c.call(performance)||(new Date).getTime())-a._startTime},createjs.Ticker=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"UID cannot be instantiated"}a._nextID=0,a.get=function(){return a._nextID++},createjs.UID=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h,i,j,k){this.Event_constructor(a,b,c),this.stageX=d,this.stageY=e,this.rawX=null==i?d:i,this.rawY=null==j?e:j,this.nativeEvent=f,this.pointerID=g,this.primary=!!h,this.relatedTarget=k}var b=createjs.extend(a,createjs.Event);b._get_localX=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).x},b._get_localY=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).y},b._get_isTouch=function(){return-1!==this.pointerID};try{Object.defineProperties(b,{localX:{get:b._get_localX},localY:{get:b._get_localY},isTouch:{get:b._get_isTouch}})}catch(c){}b.clone=function(){return new a(this.type,this.bubbles,this.cancelable,this.stageX,this.stageY,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)},b.toString=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]"},createjs.MouseEvent=createjs.promote(a,"Event")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f){this.setValues(a,b,c,d,e,f)}var b=a.prototype;a.DEG_TO_RAD=Math.PI/180,a.identity=null,b.setValues=function(a,b,c,d,e,f){return this.a=null==a?1:a,this.b=b||0,this.c=c||0,this.d=null==d?1:d,this.tx=e||0,this.ty=f||0,this},b.append=function(a,b,c,d,e,f){var g=this.a,h=this.b,i=this.c,j=this.d;return(1!=a||0!=b||0!=c||1!=d)&&(this.a=g*a+i*b,this.b=h*a+j*b,this.c=g*c+i*d,this.d=h*c+j*d),this.tx=g*e+i*f+this.tx,this.ty=h*e+j*f+this.ty,this},b.prepend=function(a,b,c,d,e,f){var g=this.a,h=this.c,i=this.tx;return this.a=a*g+c*this.b,this.b=b*g+d*this.b,this.c=a*h+c*this.d,this.d=b*h+d*this.d,this.tx=a*i+c*this.ty+e,this.ty=b*i+d*this.ty+f,this},b.appendMatrix=function(a){return this.append(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.prependMatrix=function(a){return this.prepend(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.appendTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.append(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c),this.append(l*d,m*d,-m*e,l*e,0,0)):this.append(l*d,m*d,-m*e,l*e,b,c),(i||j)&&(this.tx-=i*this.a+j*this.c,this.ty-=i*this.b+j*this.d),this},b.prependTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return(i||j)&&(this.tx-=i,this.ty-=j),g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.prepend(l*d,m*d,-m*e,l*e,0,0),this.prepend(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c)):this.prepend(l*d,m*d,-m*e,l*e,b,c),this},b.rotate=function(b){b*=a.DEG_TO_RAD;var c=Math.cos(b),d=Math.sin(b),e=this.a,f=this.b;return this.a=e*c+this.c*d,this.b=f*c+this.d*d,this.c=-e*d+this.c*c,this.d=-f*d+this.d*c,this},b.skew=function(b,c){return b*=a.DEG_TO_RAD,c*=a.DEG_TO_RAD,this.append(Math.cos(c),Math.sin(c),-Math.sin(b),Math.cos(b),0,0),this},b.scale=function(a,b){return this.a*=a,this.b*=a,this.c*=b,this.d*=b,this},b.translate=function(a,b){return this.tx+=this.a*a+this.c*b,this.ty+=this.b*a+this.d*b,this},b.identity=function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},b.invert=function(){var a=this.a,b=this.b,c=this.c,d=this.d,e=this.tx,f=a*d-b*c;return this.a=d/f,this.b=-b/f,this.c=-c/f,this.d=a/f,this.tx=(c*this.ty-d*e)/f,this.ty=-(a*this.ty-b*e)/f,this},b.isIdentity=function(){return 0===this.tx&&0===this.ty&&1===this.a&&0===this.b&&0===this.c&&1===this.d},b.equals=function(a){return this.tx===a.tx&&this.ty===a.ty&&this.a===a.a&&this.b===a.b&&this.c===a.c&&this.d===a.d},b.transformPoint=function(a,b,c){return c=c||{},c.x=a*this.a+b*this.c+this.tx,c.y=a*this.b+b*this.d+this.ty,c},b.decompose=function(b){null==b&&(b={}),b.x=this.tx,b.y=this.ty,b.scaleX=Math.sqrt(this.a*this.a+this.b*this.b),b.scaleY=Math.sqrt(this.c*this.c+this.d*this.d);var c=Math.atan2(-this.c,this.d),d=Math.atan2(this.b,this.a),e=Math.abs(1-c/d);return 1e-5>e?(b.rotation=d/a.DEG_TO_RAD,this.a<0&&this.d>=0&&(b.rotation+=b.rotation<=0?180:-180),b.skewX=b.skewY=0):(b.skewX=c/a.DEG_TO_RAD,b.skewY=d/a.DEG_TO_RAD),b},b.copy=function(a){return this.setValues(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.clone=function(){return new a(this.a,this.b,this.c,this.d,this.tx,this.ty)},b.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"},a.identity=new a,createjs.Matrix2D=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e){this.setValues(a,b,c,d,e)}var b=a.prototype;b.setValues=function(a,b,c,d,e){return this.visible=null==a?!0:!!a,this.alpha=null==b?1:b,this.shadow=c,this.compositeOperation=d,this.matrix=e||this.matrix&&this.matrix.identity()||new createjs.Matrix2D,this},b.append=function(a,b,c,d,e){return this.alpha*=b,this.shadow=c||this.shadow,this.compositeOperation=d||this.compositeOperation,this.visible=this.visible&&a,e&&this.matrix.appendMatrix(e),this},b.prepend=function(a,b,c,d,e){return this.alpha*=b,this.shadow=this.shadow||c,this.compositeOperation=this.compositeOperation||d,this.visible=this.visible&&a,e&&this.matrix.prependMatrix(e),this},b.identity=function(){return this.visible=!0,this.alpha=1,this.shadow=this.compositeOperation=null,this.matrix.identity(),this},b.clone=function(){return new a(this.alpha,this.shadow,this.compositeOperation,this.visible,this.matrix.clone())},createjs.DisplayProps=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.setValues(a,b)}var b=a.prototype;b.setValues=function(a,b){return this.x=a||0,this.y=b||0,this},b.copy=function(a){return this.x=a.x,this.y=a.y,this},b.clone=function(){return new a(this.x,this.y)},b.toString=function(){return"[Point (x="+this.x+" y="+this.y+")]"},createjs.Point=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setValues(a,b,c,d)}var b=a.prototype;b.setValues=function(a,b,c,d){return this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0,this},b.extend=function(a,b,c,d){return c=c||0,d=d||0,a+c>this.x+this.width&&(this.width=a+c-this.x),b+d>this.y+this.height&&(this.height=b+d-this.y),a<this.x&&(this.width+=this.x-a,this.x=a),b<this.y&&(this.height+=this.y-b,this.y=b),this},b.pad=function(a,b,c,d){return this.x-=b,this.y-=a,this.width+=b+d,this.height+=a+c,this},b.copy=function(a){return this.setValues(a.x,a.y,a.width,a.height)},b.contains=function(a,b,c,d){return c=c||0,d=d||0,a>=this.x&&a+c<=this.x+this.width&&b>=this.y&&b+d<=this.y+this.height},b.union=function(a){return this.clone().extend(a.x,a.y,a.width,a.height)},b.intersection=function(b){var c=b.x,d=b.y,e=c+b.width,f=d+b.height;return this.x>c&&(c=this.x),this.y>d&&(d=this.y),this.x+this.width<e&&(e=this.x+this.width),this.y+this.height<f&&(f=this.y+this.height),c>=e||d>=f?null:new a(c,d,e-c,f-d)},b.intersects=function(a){return a.x<=this.x+this.width&&this.x<=a.x+a.width&&a.y<=this.y+this.height&&this.y<=a.y+a.height},b.isEmpty=function(){return this.width<=0||this.height<=0},b.clone=function(){return new a(this.x,this.y,this.width,this.height)},b.toString=function(){return"[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]"},createjs.Rectangle=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g){a.addEventListener&&(this.target=a,this.overLabel=null==c?"over":c,this.outLabel=null==b?"out":b,this.downLabel=null==d?"down":d,this.play=e,this._isPressed=!1,this._isOver=!1,this._enabled=!1,a.mouseChildren=!1,this.enabled=!0,this.handleEvent({}),f&&(g&&(f.actionsEnabled=!1,f.gotoAndStop&&f.gotoAndStop(g)),a.hitArea=f))}var b=a.prototype;b.setEnabled=function(a){if(a!=this._enabled){var b=this.target;this._enabled=a,a?(b.cursor="pointer",b.addEventListener("rollover",this),b.addEventListener("rollout",this),b.addEventListener("mousedown",this),b.addEventListener("pressup",this),b._reset&&(b.__reset=b._reset,b._reset=this._reset)):(b.cursor=null,b.removeEventListener("rollover",this),b.removeEventListener("rollout",this),b.removeEventListener("mousedown",this),b.removeEventListener("pressup",this),b.__reset&&(b._reset=b.__reset,delete b.__reset))}},b.getEnabled=function(){return this._enabled};try{Object.defineProperties(b,{enabled:{get:b.getEnabled,set:b.setEnabled}})}catch(c){}b.toString=function(){return"[ButtonHelper]"},b.handleEvent=function(a){var b,c=this.target,d=a.type;"mousedown"==d?(this._isPressed=!0,b=this.downLabel):"pressup"==d?(this._isPressed=!1,b=this._isOver?this.overLabel:this.outLabel):"rollover"==d?(this._isOver=!0,b=this._isPressed?this.downLabel:this.overLabel):(this._isOver=!1,b=this._isPressed?this.overLabel:this.outLabel),this.play?c.gotoAndPlay&&c.gotoAndPlay(b):c.gotoAndStop&&c.gotoAndStop(b)},b._reset=function(){var a=this.paused;this.__reset(),this.paused=a},createjs.ButtonHelper=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.color=a||"black",this.offsetX=b||0,this.offsetY=c||0,this.blur=d||0}var b=a.prototype;a.identity=new a("transparent",0,0,0),b.toString=function(){return"[Shadow]"},b.clone=function(){return new a(this.color,this.offsetX,this.offsetY,this.blur)},createjs.Shadow=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.EventDispatcher_constructor(),this.complete=!0,this.framerate=0,this._animations=null,this._frames=null,this._images=null,this._data=null,this._loadCount=0,this._frameHeight=0,this._frameWidth=0,this._numFrames=0,this._regX=0,this._regY=0,this._spacing=0,this._margin=0,this._parseData(a)}var b=createjs.extend(a,createjs.EventDispatcher);b.getAnimations=function(){return this._animations.slice()};try{Object.defineProperties(b,{animations:{get:b.getAnimations}})}catch(c){}b.getNumFrames=function(a){if(null==a)return this._frames?this._frames.length:this._numFrames||0;var b=this._data[a];return null==b?0:b.frames.length},b.getAnimation=function(a){return this._data[a]},b.getFrame=function(a){var b;return this._frames&&(b=this._frames[a])?b:null},b.getFrameBounds=function(a,b){var c=this.getFrame(a);return c?(b||new createjs.Rectangle).setValues(-c.regX,-c.regY,c.rect.width,c.rect.height):null},b.toString=function(){return"[SpriteSheet]"},b.clone=function(){throw"SpriteSheet cannot be cloned."},b._parseData=function(a){var b,c,d,e;if(null!=a){if(this.framerate=a.framerate||0,a.images&&(c=a.images.length)>0)for(e=this._images=[],b=0;c>b;b++){var f=a.images[b];if("string"==typeof f){var g=f;f=document.createElement("img"),f.src=g}e.push(f),f.getContext||f.naturalWidth||(this._loadCount++,this.complete=!1,function(a,b){f.onload=function(){a._handleImageLoad(b)}}(this,g),function(a,b){f.onerror=function(){a._handleImageError(b)}}(this,g))}if(null==a.frames);else if(Array.isArray(a.frames))for(this._frames=[],e=a.frames,b=0,c=e.length;c>b;b++){var h=e[b];this._frames.push({image:this._images[h[4]?h[4]:0],rect:new createjs.Rectangle(h[0],h[1],h[2],h[3]),regX:h[5]||0,regY:h[6]||0})}else d=a.frames,this._frameWidth=d.width,this._frameHeight=d.height,this._regX=d.regX||0,this._regY=d.regY||0,this._spacing=d.spacing||0,this._margin=d.margin||0,this._numFrames=d.count,0==this._loadCount&&this._calculateFrames();if(this._animations=[],null!=(d=a.animations)){this._data={};var i;for(i in d){var j={name:i},k=d[i];if("number"==typeof k)e=j.frames=[k];else if(Array.isArray(k))if(1==k.length)j.frames=[k[0]];else for(j.speed=k[3],j.next=k[2],e=j.frames=[],b=k[0];b<=k[1];b++)e.push(b);else{j.speed=k.speed,j.next=k.next;var l=k.frames;e=j.frames="number"==typeof l?[l]:l.slice(0)}(j.next===!0||void 0===j.next)&&(j.next=i),(j.next===!1||e.length<2&&j.next==i)&&(j.next=null),j.speed||(j.speed=1),this._animations.push(i),this._data[i]=j}}}},b._handleImageLoad=function(){0==--this._loadCount&&(this._calculateFrames(),this.complete=!0,this.dispatchEvent("complete"))},b._handleImageError=function(a){var b=new createjs.Event("error");b.src=a,this.dispatchEvent(b),0==--this._loadCount&&this.dispatchEvent("complete")},b._calculateFrames=function(){if(!this._frames&&0!=this._frameWidth){this._frames=[];var a=this._numFrames||1e5,b=0,c=this._frameWidth,d=this._frameHeight,e=this._spacing,f=this._margin;a:for(var g=0,h=this._images;g<h.length;g++)for(var i=h[g],j=i.width,k=i.height,l=f;k-f-d>=l;){for(var m=f;j-f-c>=m;){if(b>=a)break a;b++,this._frames.push({image:i,rect:new createjs.Rectangle(m,l,c,d),regX:this._regX,regY:this._regY}),m+=c+e}l+=d+e}this._numFrames=b}},createjs.SpriteSheet=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.command=null,this._stroke=null,this._strokeStyle=null,this._oldStrokeStyle=null,this._strokeDash=null,this._oldStrokeDash=null,this._strokeIgnoreScale=!1,this._fill=null,this._instructions=[],this._commitIndex=0,this._activeInstructions=[],this._dirty=!1,this._storeIndex=0,this.clear()}var b=a.prototype,c=a;a.getRGB=function(a,b,c,d){return null!=a&&null==c&&(d=b,c=255&a,b=a>>8&255,a=a>>16&255),null==d?"rgb("+a+","+b+","+c+")":"rgba("+a+","+b+","+c+","+d+")"},a.getHSL=function(a,b,c,d){return null==d?"hsl("+a%360+","+b+"%,"+c+"%)":"hsla("+a%360+","+b+"%,"+c+"%,"+d+")"},a.BASE_64={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,0:52,1:53,2:54,3:55,4:56,5:57,6:58,7:59,8:60,9:61,"+":62,"/":63},a.STROKE_CAPS_MAP=["butt","round","square"],a.STROKE_JOINTS_MAP=["miter","round","bevel"];var d=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");d.getContext&&(a._ctx=d.getContext("2d"),d.width=d.height=1),b.getInstructions=function(){return this._updateInstructions(),this._instructions};try{Object.defineProperties(b,{instructions:{get:b.getInstructions}})}catch(e){}b.isEmpty=function(){return!(this._instructions.length||this._activeInstructions.length)},b.draw=function(a,b){this._updateInstructions();for(var c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)c[d].exec(a,b)},b.drawAsPath=function(a){this._updateInstructions();for(var b,c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)(b=c[d]).path!==!1&&b.exec(a)},b.moveTo=function(a,b){return this.append(new c.MoveTo(a,b),!0)},b.lineTo=function(a,b){return this.append(new c.LineTo(a,b))},b.arcTo=function(a,b,d,e,f){return this.append(new c.ArcTo(a,b,d,e,f))},b.arc=function(a,b,d,e,f,g){return this.append(new c.Arc(a,b,d,e,f,g))},b.quadraticCurveTo=function(a,b,d,e){return this.append(new c.QuadraticCurveTo(a,b,d,e))},b.bezierCurveTo=function(a,b,d,e,f,g){return this.append(new c.BezierCurveTo(a,b,d,e,f,g))},b.rect=function(a,b,d,e){return this.append(new c.Rect(a,b,d,e))},b.closePath=function(){return this._activeInstructions.length?this.append(new c.ClosePath):this},b.clear=function(){return this._instructions.length=this._activeInstructions.length=this._commitIndex=0,this._strokeStyle=this._oldStrokeStyle=this._stroke=this._fill=this._strokeDash=this._oldStrokeDash=null,this._dirty=this._strokeIgnoreScale=!1,this},b.beginFill=function(a){return this._setFill(a?new c.Fill(a):null)},b.beginLinearGradientFill=function(a,b,d,e,f,g){return this._setFill((new c.Fill).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientFill=function(a,b,d,e,f,g,h,i){return this._setFill((new c.Fill).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapFill=function(a,b,d){return this._setFill(new c.Fill(null,d).bitmap(a,b))},b.endFill=function(){return this.beginFill()},b.setStrokeStyle=function(a,b,d,e,f){return this._updateInstructions(!0),this._strokeStyle=this.command=new c.StrokeStyle(a,b,d,e,f),this._stroke&&(this._stroke.ignoreScale=f),this._strokeIgnoreScale=f,this},b.setStrokeDash=function(a,b){return this._updateInstructions(!0),this._strokeDash=this.command=new c.StrokeDash(a,b),this},b.beginStroke=function(a){return this._setStroke(a?new c.Stroke(a):null)},b.beginLinearGradientStroke=function(a,b,d,e,f,g){return this._setStroke((new c.Stroke).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientStroke=function(a,b,d,e,f,g,h,i){return this._setStroke((new c.Stroke).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapStroke=function(a,b){return this._setStroke((new c.Stroke).bitmap(a,b))},b.endStroke=function(){return this.beginStroke()},b.curveTo=b.quadraticCurveTo,b.drawRect=b.rect,b.drawRoundRect=function(a,b,c,d,e){return this.drawRoundRectComplex(a,b,c,d,e,e,e,e)},b.drawRoundRectComplex=function(a,b,d,e,f,g,h,i){return this.append(new c.RoundRect(a,b,d,e,f,g,h,i))},b.drawCircle=function(a,b,d){return this.append(new c.Circle(a,b,d))},b.drawEllipse=function(a,b,d,e){return this.append(new c.Ellipse(a,b,d,e))},b.drawPolyStar=function(a,b,d,e,f,g){return this.append(new c.PolyStar(a,b,d,e,f,g))},b.append=function(a,b){return this._activeInstructions.push(a),this.command=a,b||(this._dirty=!0),this},b.decodePath=function(b){for(var c=[this.moveTo,this.lineTo,this.quadraticCurveTo,this.bezierCurveTo,this.closePath],d=[2,2,4,6,0],e=0,f=b.length,g=[],h=0,i=0,j=a.BASE_64;f>e;){var k=b.charAt(e),l=j[k],m=l>>3,n=c[m];if(!n||3&l)throw"bad path data (@"+e+"): "+k;var o=d[m];m||(h=i=0),g.length=0,e++;for(var p=(l>>2&1)+2,q=0;o>q;q++){var r=j[b.charAt(e)],s=r>>5?-1:1;r=(31&r)<<6|j[b.charAt(e+1)],3==p&&(r=r<<6|j[b.charAt(e+2)]),r=s*r/10,q%2?h=r+=h:i=r+=i,g[q]=r,e+=p}n.apply(this,g)}return this},b.store=function(){return this._updateInstructions(!0),this._storeIndex=this._instructions.length,this},b.unstore=function(){return this._storeIndex=0,this},b.clone=function(){var b=new a;return b.command=this.command,b._stroke=this._stroke,b._strokeStyle=this._strokeStyle,b._strokeDash=this._strokeDash,b._strokeIgnoreScale=this._strokeIgnoreScale,b._fill=this._fill,b._instructions=this._instructions.slice(),b._commitIndex=this._commitIndex,b._activeInstructions=this._activeInstructions.slice(),b._dirty=this._dirty,b._storeIndex=this._storeIndex,b},b.toString=function(){return"[Graphics]"},b.mt=b.moveTo,b.lt=b.lineTo,b.at=b.arcTo,b.bt=b.bezierCurveTo,b.qt=b.quadraticCurveTo,b.a=b.arc,b.r=b.rect,b.cp=b.closePath,b.c=b.clear,b.f=b.beginFill,b.lf=b.beginLinearGradientFill,b.rf=b.beginRadialGradientFill,b.bf=b.beginBitmapFill,b.ef=b.endFill,b.ss=b.setStrokeStyle,b.sd=b.setStrokeDash,b.s=b.beginStroke,b.ls=b.beginLinearGradientStroke,b.rs=b.beginRadialGradientStroke,b.bs=b.beginBitmapStroke,b.es=b.endStroke,b.dr=b.drawRect,b.rr=b.drawRoundRect,b.rc=b.drawRoundRectComplex,b.dc=b.drawCircle,b.de=b.drawEllipse,b.dp=b.drawPolyStar,b.p=b.decodePath,b._updateInstructions=function(b){var c=this._instructions,d=this._activeInstructions,e=this._commitIndex;if(this._dirty&&d.length){c.length=e,c.push(a.beginCmd);var f=d.length,g=c.length;c.length=g+f;for(var h=0;f>h;h++)c[h+g]=d[h];this._fill&&c.push(this._fill),this._stroke&&(this._strokeDash!==this._oldStrokeDash&&(this._oldStrokeDash=this._strokeDash,c.push(this._strokeDash)),this._strokeStyle!==this._oldStrokeStyle&&(this._oldStrokeStyle=this._strokeStyle,c.push(this._strokeStyle)),c.push(this._stroke)),this._dirty=!1}b&&(d.length=0,this._commitIndex=c.length)},b._setFill=function(a){return this._updateInstructions(!0),this.command=this._fill=a,this},b._setStroke=function(a){return this._updateInstructions(!0),(this.command=this._stroke=a)&&(a.ignoreScale=this._strokeIgnoreScale),this},(c.LineTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.lineTo(this.x,this.y)},(c.MoveTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.moveTo(this.x,this.y)},(c.ArcTo=function(a,b,c,d,e){this.x1=a,this.y1=b,this.x2=c,this.y2=d,this.radius=e}).prototype.exec=function(a){a.arcTo(this.x1,this.y1,this.x2,this.y2,this.radius)},(c.Arc=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.startAngle=d,this.endAngle=e,this.anticlockwise=!!f}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,this.anticlockwise)},(c.QuadraticCurveTo=function(a,b,c,d){this.cpx=a,this.cpy=b,this.x=c,this.y=d}).prototype.exec=function(a){a.quadraticCurveTo(this.cpx,this.cpy,this.x,this.y)},(c.BezierCurveTo=function(a,b,c,d,e,f){this.cp1x=a,this.cp1y=b,this.cp2x=c,this.cp2y=d,this.x=e,this.y=f}).prototype.exec=function(a){a.bezierCurveTo(this.cp1x,this.cp1y,this.cp2x,this.cp2y,this.x,this.y)},(c.Rect=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){a.rect(this.x,this.y,this.w,this.h)},(c.ClosePath=function(){}).prototype.exec=function(a){a.closePath()},(c.BeginPath=function(){}).prototype.exec=function(a){a.beginPath()},b=(c.Fill=function(a,b){this.style=a,this.matrix=b}).prototype,b.exec=function(a){if(this.style){a.fillStyle=this.style;var b=this.matrix;b&&(a.save(),a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty)),a.fill(),b&&a.restore()}},b.linearGradient=function(b,c,d,e,f,g){for(var h=this.style=a._ctx.createLinearGradient(d,e,f,g),i=0,j=b.length;j>i;i++)h.addColorStop(c[i],b[i]);return h.props={colors:b,ratios:c,x0:d,y0:e,x1:f,y1:g,type:"linear"},this},b.radialGradient=function(b,c,d,e,f,g,h,i){for(var j=this.style=a._ctx.createRadialGradient(d,e,f,g,h,i),k=0,l=b.length;l>k;k++)j.addColorStop(c[k],b[k]);return j.props={colors:b,ratios:c,x0:d,y0:e,r0:f,x1:g,y1:h,r1:i,type:"radial"},this},b.bitmap=function(b,c){if(b.naturalWidth||b.getContext||b.readyState>=2){var d=this.style=a._ctx.createPattern(b,c||"");d.props={image:b,repetition:c,type:"bitmap"}}return this},b.path=!1,b=(c.Stroke=function(a,b){this.style=a,this.ignoreScale=b}).prototype,b.exec=function(a){this.style&&(a.strokeStyle=this.style,this.ignoreScale&&(a.save(),a.setTransform(1,0,0,1,0,0)),a.stroke(),this.ignoreScale&&a.restore())},b.linearGradient=c.Fill.prototype.linearGradient,b.radialGradient=c.Fill.prototype.radialGradient,b.bitmap=c.Fill.prototype.bitmap,b.path=!1,b=(c.StrokeStyle=function(a,b,c,d,e){this.width=a,this.caps=b,this.joints=c,this.miterLimit=d,this.ignoreScale=e}).prototype,b.exec=function(b){b.lineWidth=null==this.width?"1":this.width,b.lineCap=null==this.caps?"butt":isNaN(this.caps)?this.caps:a.STROKE_CAPS_MAP[this.caps],b.lineJoin=null==this.joints?"miter":isNaN(this.joints)?this.joints:a.STROKE_JOINTS_MAP[this.joints],b.miterLimit=null==this.miterLimit?"10":this.miterLimit,b.ignoreScale=null==this.ignoreScale?!1:this.ignoreScale},b.path=!1,(c.StrokeDash=function(a,b){this.segments=a,this.offset=b||0}).prototype.exec=function(a){a.setLineDash&&(a.setLineDash(this.segments||c.StrokeDash.EMPTY_SEGMENTS),a.lineDashOffset=this.offset||0)},c.StrokeDash.EMPTY_SEGMENTS=[],(c.RoundRect=function(a,b,c,d,e,f,g,h){this.x=a,this.y=b,this.w=c,this.h=d,this.radiusTL=e,this.radiusTR=f,this.radiusBR=g,this.radiusBL=h}).prototype.exec=function(a){var b=(j>i?i:j)/2,c=0,d=0,e=0,f=0,g=this.x,h=this.y,i=this.w,j=this.h,k=this.radiusTL,l=this.radiusTR,m=this.radiusBR,n=this.radiusBL;0>k&&(k*=c=-1),k>b&&(k=b),0>l&&(l*=d=-1),l>b&&(l=b),0>m&&(m*=e=-1),m>b&&(m=b),0>n&&(n*=f=-1),n>b&&(n=b),a.moveTo(g+i-l,h),a.arcTo(g+i+l*d,h-l*d,g+i,h+l,l),a.lineTo(g+i,h+j-m),a.arcTo(g+i+m*e,h+j+m*e,g+i-m,h+j,m),a.lineTo(g+n,h+j),a.arcTo(g-n*f,h+j+n*f,g,h+j-n,n),a.lineTo(g,h+k),a.arcTo(g-k*c,h-k*c,g+k,h,k),a.closePath()},(c.Circle=function(a,b,c){this.x=a,this.y=b,this.radius=c}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,0,2*Math.PI)},(c.Ellipse=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.w,e=this.h,f=.5522848,g=d/2*f,h=e/2*f,i=b+d,j=c+e,k=b+d/2,l=c+e/2;a.moveTo(b,l),a.bezierCurveTo(b,l-h,k-g,c,k,c),a.bezierCurveTo(k+g,c,i,l-h,i,l),a.bezierCurveTo(i,l+h,k+g,j,k,j),a.bezierCurveTo(k-g,j,b,l+h,b,l)},(c.PolyStar=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.sides=d,this.pointSize=e,this.angle=f}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.radius,e=(this.angle||0)/180*Math.PI,f=this.sides,g=1-(this.pointSize||0),h=Math.PI/f;a.moveTo(b+Math.cos(e)*d,c+Math.sin(e)*d);for(var i=0;f>i;i++)e+=h,1!=g&&a.lineTo(b+Math.cos(e)*d*g,c+Math.sin(e)*d*g),e+=h,a.lineTo(b+Math.cos(e)*d,c+Math.sin(e)*d);a.closePath()},a.beginCmd=new c.BeginPath,createjs.Graphics=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.EventDispatcher_constructor(),this.alpha=1,this.cacheCanvas=null,this.cacheID=0,this.id=createjs.UID.get(),this.mouseEnabled=!0,this.tickEnabled=!0,this.name=null,this.parent=null,this.regX=0,this.regY=0,this.rotation=0,this.scaleX=1,this.scaleY=1,this.skewX=0,this.skewY=0,this.shadow=null,this.visible=!0,this.x=0,this.y=0,this.transformMatrix=null,this.compositeOperation=null,this.snapToPixel=!0,this.filters=null,this.mask=null,this.hitArea=null,this.cursor=null,this._cacheOffsetX=0,this._cacheOffsetY=0,this._filterOffsetX=0,this._filterOffsetY=0,this._cacheScale=1,this._cacheDataURLID=0,this._cacheDataURL=null,this._props=new createjs.DisplayProps,this._rectangle=new createjs.Rectangle,this._bounds=null
	}var b=createjs.extend(a,createjs.EventDispatcher);a._MOUSE_EVENTS=["click","dblclick","mousedown","mouseout","mouseover","pressmove","pressup","rollout","rollover"],a.suppressCrossDomainErrors=!1,a._snapToPixelEnabled=!1;var c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._hitTestCanvas=c,a._hitTestContext=c.getContext("2d"),c.width=c.height=1),a._nextCacheID=1,b.getStage=function(){for(var a=this,b=createjs.Stage;a.parent;)a=a.parent;return a instanceof b?a:null};try{Object.defineProperties(b,{stage:{get:b.getStage}})}catch(d){}b.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},b.draw=function(a,b){var c=this.cacheCanvas;if(b||!c)return!1;var d=this._cacheScale;return a.drawImage(c,this._cacheOffsetX+this._filterOffsetX,this._cacheOffsetY+this._filterOffsetY,c.width/d,c.height/d),!0},b.updateContext=function(b){var c=this,d=c.mask,e=c._props.matrix;d&&d.graphics&&!d.graphics.isEmpty()&&(d.getMatrix(e),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty),d.graphics.drawAsPath(b),b.clip(),e.invert(),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty)),this.getMatrix(e);var f=e.tx,g=e.ty;a._snapToPixelEnabled&&c.snapToPixel&&(f=f+(0>f?-.5:.5)|0,g=g+(0>g?-.5:.5)|0),b.transform(e.a,e.b,e.c,e.d,f,g),b.globalAlpha*=c.alpha,c.compositeOperation&&(b.globalCompositeOperation=c.compositeOperation),c.shadow&&this._applyShadow(b,c.shadow)},b.cache=function(a,b,c,d,e){e=e||1,this.cacheCanvas||(this.cacheCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),this._cacheWidth=c,this._cacheHeight=d,this._cacheOffsetX=a,this._cacheOffsetY=b,this._cacheScale=e,this.updateCache()},b.updateCache=function(b){var c=this.cacheCanvas;if(!c)throw"cache() must be called before updateCache()";var d=this._cacheScale,e=this._cacheOffsetX*d,f=this._cacheOffsetY*d,g=this._cacheWidth,h=this._cacheHeight,i=c.getContext("2d"),j=this._getFilterBounds();e+=this._filterOffsetX=j.x,f+=this._filterOffsetY=j.y,g=Math.ceil(g*d)+j.width,h=Math.ceil(h*d)+j.height,g!=c.width||h!=c.height?(c.width=g,c.height=h):b||i.clearRect(0,0,g+1,h+1),i.save(),i.globalCompositeOperation=b,i.setTransform(d,0,0,d,-e,-f),this.draw(i,!0),this._applyFilters(),i.restore(),this.cacheID=a._nextCacheID++},b.uncache=function(){this._cacheDataURL=this.cacheCanvas=null,this.cacheID=this._cacheOffsetX=this._cacheOffsetY=this._filterOffsetX=this._filterOffsetY=0,this._cacheScale=1},b.getCacheDataURL=function(){return this.cacheCanvas?(this.cacheID!=this._cacheDataURLID&&(this._cacheDataURL=this.cacheCanvas.toDataURL()),this._cacheDataURL):null},b.localToGlobal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).transformPoint(a,b,c||new createjs.Point)},b.globalToLocal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(a,b,c||new createjs.Point)},b.localToLocal=function(a,b,c,d){return d=this.localToGlobal(a,b,d),c.globalToLocal(d.x,d.y,d)},b.setTransform=function(a,b,c,d,e,f,g,h,i){return this.x=a||0,this.y=b||0,this.scaleX=null==c?1:c,this.scaleY=null==d?1:d,this.rotation=e||0,this.skewX=f||0,this.skewY=g||0,this.regX=h||0,this.regY=i||0,this},b.getMatrix=function(a){var b=this,c=a&&a.identity()||new createjs.Matrix2D;return b.transformMatrix?c.copy(b.transformMatrix):c.appendTransform(b.x,b.y,b.scaleX,b.scaleY,b.rotation,b.skewX,b.skewY,b.regX,b.regY)},b.getConcatenatedMatrix=function(a){for(var b=this,c=this.getMatrix(a);b=b.parent;)c.prependMatrix(b.getMatrix(b._props.matrix));return c},b.getConcatenatedDisplayProps=function(a){a=a?a.identity():new createjs.DisplayProps;var b=this,c=b.getMatrix(a.matrix);do a.prepend(b.visible,b.alpha,b.shadow,b.compositeOperation),b!=this&&c.prependMatrix(b.getMatrix(b._props.matrix));while(b=b.parent);return a},b.hitTest=function(b,c){var d=a._hitTestContext;d.setTransform(1,0,0,1,-b,-c),this.draw(d);var e=this._testHit(d);return d.setTransform(1,0,0,1,0,0),d.clearRect(0,0,2,2),e},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.getBounds=function(){if(this._bounds)return this._rectangle.copy(this._bounds);var a=this.cacheCanvas;if(a){var b=this._cacheScale;return this._rectangle.setValues(this._cacheOffsetX,this._cacheOffsetY,a.width/b,a.height/b)}return null},b.getTransformedBounds=function(){return this._getBounds()},b.setBounds=function(a,b,c,d){null==a&&(this._bounds=a),this._bounds=(this._bounds||new createjs.Rectangle).setValues(a,b,c,d)},b.clone=function(){return this._cloneProps(new a)},b.toString=function(){return"[DisplayObject (name="+this.name+")]"},b._cloneProps=function(a){return a.alpha=this.alpha,a.mouseEnabled=this.mouseEnabled,a.tickEnabled=this.tickEnabled,a.name=this.name,a.regX=this.regX,a.regY=this.regY,a.rotation=this.rotation,a.scaleX=this.scaleX,a.scaleY=this.scaleY,a.shadow=this.shadow,a.skewX=this.skewX,a.skewY=this.skewY,a.visible=this.visible,a.x=this.x,a.y=this.y,a.compositeOperation=this.compositeOperation,a.snapToPixel=this.snapToPixel,a.filters=null==this.filters?null:this.filters.slice(0),a.mask=this.mask,a.hitArea=this.hitArea,a.cursor=this.cursor,a._bounds=this._bounds,a},b._applyShadow=function(a,b){b=b||Shadow.identity,a.shadowColor=b.color,a.shadowOffsetX=b.offsetX,a.shadowOffsetY=b.offsetY,a.shadowBlur=b.blur},b._tick=function(a){var b=this._listeners;b&&b.tick&&(a.target=null,a.propagationStopped=a.immediatePropagationStopped=!1,this.dispatchEvent(a))},b._testHit=function(b){try{var c=b.getImageData(0,0,1,1).data[3]>1}catch(d){if(!a.suppressCrossDomainErrors)throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."}return c},b._applyFilters=function(){if(this.filters&&0!=this.filters.length&&this.cacheCanvas)for(var a=this.filters.length,b=this.cacheCanvas.getContext("2d"),c=this.cacheCanvas.width,d=this.cacheCanvas.height,e=0;a>e;e++)this.filters[e].applyFilter(b,0,0,c,d)},b._getFilterBounds=function(){var a,b=this.filters,c=this._rectangle.setValues(0,0,0,0);if(!b||!(a=b.length))return c;for(var d=0;a>d;d++){var e=this.filters[d];e.getBounds&&e.getBounds(c)}return c},b._getBounds=function(a,b){return this._transformBounds(this.getBounds(),a,b)},b._transformBounds=function(a,b,c){if(!a)return a;var d=a.x,e=a.y,f=a.width,g=a.height,h=this._props.matrix;h=c?h.identity():this.getMatrix(h),(d||e)&&h.appendTransform(0,0,1,1,0,0,0,-d,-e),b&&h.prependMatrix(b);var i=f*h.a,j=f*h.b,k=g*h.c,l=g*h.d,m=h.tx,n=h.ty,o=m,p=m,q=n,r=n;return(d=i+m)<o?o=d:d>p&&(p=d),(d=i+k+m)<o?o=d:d>p&&(p=d),(d=k+m)<o?o=d:d>p&&(p=d),(e=j+n)<q?q=e:e>r&&(r=e),(e=j+l+n)<q?q=e:e>r&&(r=e),(e=l+n)<q?q=e:e>r&&(r=e),a.setValues(o,q,p-o,r-q)},b._hasMouseEventListener=function(){for(var b=a._MOUSE_EVENTS,c=0,d=b.length;d>c;c++)if(this.hasEventListener(b[c]))return!0;return!!this.cursor},createjs.DisplayObject=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.DisplayObject_constructor(),this.children=[],this.mouseChildren=!0,this.tickChildren=!0}var b=createjs.extend(a,createjs.DisplayObject);b.getNumChildren=function(){return this.children.length};try{Object.defineProperties(b,{numChildren:{get:b.getNumChildren}})}catch(c){}b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.children.length;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;for(var c=this.children.slice(),d=0,e=c.length;e>d;d++){var f=c[d];f.isVisible()&&(a.save(),f.updateContext(a),f.draw(a),a.restore())}return!0},b.addChild=function(a){if(null==a)return a;var b=arguments.length;if(b>1){for(var c=0;b>c;c++)this.addChild(arguments[c]);return arguments[b-1]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.push(a),a.dispatchEvent("added"),a},b.addChildAt=function(a,b){var c=arguments.length,d=arguments[c-1];if(0>d||d>this.children.length)return arguments[c-2];if(c>2){for(var e=0;c-1>e;e++)this.addChildAt(arguments[e],d+e);return arguments[c-2]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.splice(b,0,a),a.dispatchEvent("added"),a},b.removeChild=function(a){var b=arguments.length;if(b>1){for(var c=!0,d=0;b>d;d++)c=c&&this.removeChild(arguments[d]);return c}return this.removeChildAt(createjs.indexOf(this.children,a))},b.removeChildAt=function(a){var b=arguments.length;if(b>1){for(var c=[],d=0;b>d;d++)c[d]=arguments[d];c.sort(function(a,b){return b-a});for(var e=!0,d=0;b>d;d++)e=e&&this.removeChildAt(c[d]);return e}if(0>a||a>this.children.length-1)return!1;var f=this.children[a];return f&&(f.parent=null),this.children.splice(a,1),f.dispatchEvent("removed"),!0},b.removeAllChildren=function(){for(var a=this.children;a.length;)this.removeChildAt(0)},b.getChildAt=function(a){return this.children[a]},b.getChildByName=function(a){for(var b=this.children,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},b.sortChildren=function(a){this.children.sort(a)},b.getChildIndex=function(a){return createjs.indexOf(this.children,a)},b.swapChildrenAt=function(a,b){var c=this.children,d=c[a],e=c[b];d&&e&&(c[a]=e,c[b]=d)},b.swapChildren=function(a,b){for(var c,d,e=this.children,f=0,g=e.length;g>f&&(e[f]==a&&(c=f),e[f]==b&&(d=f),null==c||null==d);f++);f!=g&&(e[c]=b,e[d]=a)},b.setChildIndex=function(a,b){var c=this.children,d=c.length;if(!(a.parent!=this||0>b||b>=d)){for(var e=0;d>e&&c[e]!=a;e++);e!=d&&e!=b&&(c.splice(e,1),c.splice(b,0,a))}},b.contains=function(a){for(;a;){if(a==this)return!0;a=a.parent}return!1},b.hitTest=function(a,b){return null!=this.getObjectUnderPoint(a,b)},b.getObjectsUnderPoint=function(a,b,c){var d=[],e=this.localToGlobal(a,b);return this._getObjectsUnderPoint(e.x,e.y,d,c>0,1==c),d},b.getObjectUnderPoint=function(a,b,c){var d=this.localToGlobal(a,b);return this._getObjectsUnderPoint(d.x,d.y,null,c>0,1==c)},b.getBounds=function(){return this._getBounds(null,!0)},b.getTransformedBounds=function(){return this._getBounds()},b.clone=function(b){var c=this._cloneProps(new a);return b&&this._cloneChildren(c),c},b.toString=function(){return"[Container (name="+this.name+")]"},b._tick=function(a){if(this.tickChildren)for(var b=this.children.length-1;b>=0;b--){var c=this.children[b];c.tickEnabled&&c._tick&&c._tick(a)}this.DisplayObject__tick(a)},b._cloneChildren=function(a){a.children.length&&a.removeAllChildren();for(var b=a.children,c=0,d=this.children.length;d>c;c++){var e=this.children[c].clone(!0);e.parent=a,b.push(e)}},b._getObjectsUnderPoint=function(b,c,d,e,f,g){if(g=g||0,!g&&!this._testMask(this,b,c))return null;var h,i=createjs.DisplayObject._hitTestContext;f=f||e&&this._hasMouseEventListener();for(var j=this.children,k=j.length,l=k-1;l>=0;l--){var m=j[l],n=m.hitArea;if(m.visible&&(n||m.isVisible())&&(!e||m.mouseEnabled)&&(n||this._testMask(m,b,c)))if(!n&&m instanceof a){var o=m._getObjectsUnderPoint(b,c,d,e,f,g+1);if(!d&&o)return e&&!this.mouseChildren?this:o}else{if(e&&!f&&!m._hasMouseEventListener())continue;var p=m.getConcatenatedDisplayProps(m._props);if(h=p.matrix,n&&(h.appendMatrix(n.getMatrix(n._props.matrix)),p.alpha=n.alpha),i.globalAlpha=p.alpha,i.setTransform(h.a,h.b,h.c,h.d,h.tx-b,h.ty-c),(n||m).draw(i),!this._testHit(i))continue;if(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,2,2),!d)return e&&!this.mouseChildren?this:m;d.push(m)}}return null},b._testMask=function(a,b,c){var d=a.mask;if(!d||!d.graphics||d.graphics.isEmpty())return!0;var e=this._props.matrix,f=a.parent;e=f?f.getConcatenatedMatrix(e):e.identity(),e=d.getMatrix(d._props.matrix).prependMatrix(e);var g=createjs.DisplayObject._hitTestContext;return g.setTransform(e.a,e.b,e.c,e.d,e.tx-b,e.ty-c),d.graphics.drawAsPath(g),g.fillStyle="#000",g.fill(),this._testHit(g)?(g.setTransform(1,0,0,1,0,0),g.clearRect(0,0,2,2),!0):!1},b._getBounds=function(a,b){var c=this.DisplayObject_getBounds();if(c)return this._transformBounds(c,a,b);var d=this._props.matrix;d=b?d.identity():this.getMatrix(d),a&&d.prependMatrix(a);for(var e=this.children.length,f=null,g=0;e>g;g++){var h=this.children[g];h.visible&&(c=h._getBounds(d))&&(f?f.extend(c.x,c.y,c.width,c.height):f=c.clone())}return f},createjs.Container=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.Container_constructor(),this.autoClear=!0,this.canvas="string"==typeof a?document.getElementById(a):a,this.mouseX=0,this.mouseY=0,this.drawRect=null,this.snapToPixelEnabled=!1,this.mouseInBounds=!1,this.tickOnUpdate=!0,this.mouseMoveOutside=!1,this.preventSelection=!0,this._pointerData={},this._pointerCount=0,this._primaryPointerID=null,this._mouseOverIntervalID=null,this._nextStage=null,this._prevStage=null,this.enableDOMEvents(!0)}var b=createjs.extend(a,createjs.Container);b._get_nextStage=function(){return this._nextStage},b._set_nextStage=function(a){this._nextStage&&(this._nextStage._prevStage=null),a&&(a._prevStage=this),this._nextStage=a};try{Object.defineProperties(b,{nextStage:{get:b._get_nextStage,set:b._set_nextStage}})}catch(c){}b.update=function(a){if(this.canvas&&(this.tickOnUpdate&&this.tick(a),this.dispatchEvent("drawstart",!1,!0)!==!1)){createjs.DisplayObject._snapToPixelEnabled=this.snapToPixelEnabled;var b=this.drawRect,c=this.canvas.getContext("2d");c.setTransform(1,0,0,1,0,0),this.autoClear&&(b?c.clearRect(b.x,b.y,b.width,b.height):c.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)),c.save(),this.drawRect&&(c.beginPath(),c.rect(b.x,b.y,b.width,b.height),c.clip()),this.updateContext(c),this.draw(c,!1),c.restore(),this.dispatchEvent("drawend")}},b.tick=function(a){if(this.tickEnabled&&this.dispatchEvent("tickstart",!1,!0)!==!1){var b=new createjs.Event("tick");if(a)for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);this._tick(b),this.dispatchEvent("tickend")}},b.handleEvent=function(a){"tick"==a.type&&this.update(a)},b.clear=function(){if(this.canvas){var a=this.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)}},b.toDataURL=function(a,b){var c,d=this.canvas.getContext("2d"),e=this.canvas.width,f=this.canvas.height;if(a){c=d.getImageData(0,0,e,f);var g=d.globalCompositeOperation;d.globalCompositeOperation="destination-over",d.fillStyle=a,d.fillRect(0,0,e,f)}var h=this.canvas.toDataURL(b||"image/png");return a&&(d.putImageData(c,0,0),d.globalCompositeOperation=g),h},b.enableMouseOver=function(a){if(this._mouseOverIntervalID&&(clearInterval(this._mouseOverIntervalID),this._mouseOverIntervalID=null,0==a&&this._testMouseOver(!0)),null==a)a=20;else if(0>=a)return;var b=this;this._mouseOverIntervalID=setInterval(function(){b._testMouseOver()},1e3/Math.min(50,a))},b.enableDOMEvents=function(a){null==a&&(a=!0);var b,c,d=this._eventListeners;if(!a&&d){for(b in d)c=d[b],c.t.removeEventListener(b,c.f,!1);this._eventListeners=null}else if(a&&!d&&this.canvas){var e=window.addEventListener?window:document,f=this;d=this._eventListeners={},d.mouseup={t:e,f:function(a){f._handleMouseUp(a)}},d.mousemove={t:e,f:function(a){f._handleMouseMove(a)}},d.dblclick={t:this.canvas,f:function(a){f._handleDoubleClick(a)}},d.mousedown={t:this.canvas,f:function(a){f._handleMouseDown(a)}};for(b in d)c=d[b],c.t.addEventListener(b,c.f,!1)}},b.clone=function(){throw"Stage cannot be cloned."},b.toString=function(){return"[Stage (name="+this.name+")]"},b._getElementRect=function(a){var b;try{b=a.getBoundingClientRect()}catch(c){b={top:a.offsetTop,left:a.offsetLeft,width:a.offsetWidth,height:a.offsetHeight}}var d=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||document.body.clientLeft||0),e=(window.pageYOffset||document.scrollTop||0)-(document.clientTop||document.body.clientTop||0),f=window.getComputedStyle?getComputedStyle(a,null):a.currentStyle,g=parseInt(f.paddingLeft)+parseInt(f.borderLeftWidth),h=parseInt(f.paddingTop)+parseInt(f.borderTopWidth),i=parseInt(f.paddingRight)+parseInt(f.borderRightWidth),j=parseInt(f.paddingBottom)+parseInt(f.borderBottomWidth);return{left:b.left+d+g,right:b.right+d-i,top:b.top+e+h,bottom:b.bottom+e-j}},b._getPointerData=function(a){var b=this._pointerData[a];return b||(b=this._pointerData[a]={x:0,y:0}),b},b._handleMouseMove=function(a){a||(a=window.event),this._handlePointerMove(-1,a,a.pageX,a.pageY)},b._handlePointerMove=function(a,b,c,d,e){if((!this._prevStage||void 0!==e)&&this.canvas){var f=this._nextStage,g=this._getPointerData(a),h=g.inBounds;this._updatePointerPosition(a,b,c,d),(h||g.inBounds||this.mouseMoveOutside)&&(-1===a&&g.inBounds==!h&&this._dispatchMouseEvent(this,h?"mouseleave":"mouseenter",!1,a,g,b),this._dispatchMouseEvent(this,"stagemousemove",!1,a,g,b),this._dispatchMouseEvent(g.target,"pressmove",!0,a,g,b)),f&&f._handlePointerMove(a,b,c,d,null)}},b._updatePointerPosition=function(a,b,c,d){var e=this._getElementRect(this.canvas);c-=e.left,d-=e.top;var f=this.canvas.width,g=this.canvas.height;c/=(e.right-e.left)/f,d/=(e.bottom-e.top)/g;var h=this._getPointerData(a);(h.inBounds=c>=0&&d>=0&&f-1>=c&&g-1>=d)?(h.x=c,h.y=d):this.mouseMoveOutside&&(h.x=0>c?0:c>f-1?f-1:c,h.y=0>d?0:d>g-1?g-1:d),h.posEvtObj=b,h.rawX=c,h.rawY=d,(a===this._primaryPointerID||-1===a)&&(this.mouseX=h.x,this.mouseY=h.y,this.mouseInBounds=h.inBounds)},b._handleMouseUp=function(a){this._handlePointerUp(-1,a,!1)},b._handlePointerUp=function(a,b,c,d){var e=this._nextStage,f=this._getPointerData(a);if(!this._prevStage||void 0!==d){var g=null,h=f.target;d||!h&&!e||(g=this._getObjectsUnderPoint(f.x,f.y,null,!0)),f.down&&(this._dispatchMouseEvent(this,"stagemouseup",!1,a,f,b,g),f.down=!1),g==h&&this._dispatchMouseEvent(h,"click",!0,a,f,b),this._dispatchMouseEvent(h,"pressup",!0,a,f,b),c?(a==this._primaryPointerID&&(this._primaryPointerID=null),delete this._pointerData[a]):f.target=null,e&&e._handlePointerUp(a,b,c,d||g&&this)}},b._handleMouseDown=function(a){this._handlePointerDown(-1,a,a.pageX,a.pageY)},b._handlePointerDown=function(a,b,c,d,e){this.preventSelection&&b.preventDefault(),(null==this._primaryPointerID||-1===a)&&(this._primaryPointerID=a),null!=d&&this._updatePointerPosition(a,b,c,d);var f=null,g=this._nextStage,h=this._getPointerData(a);e||(f=h.target=this._getObjectsUnderPoint(h.x,h.y,null,!0)),h.inBounds&&(this._dispatchMouseEvent(this,"stagemousedown",!1,a,h,b,f),h.down=!0),this._dispatchMouseEvent(f,"mousedown",!0,a,h,b),g&&g._handlePointerDown(a,b,c,d,e||f&&this)},b._testMouseOver=function(a,b,c){if(!this._prevStage||void 0!==b){var d=this._nextStage;if(!this._mouseOverIntervalID)return void(d&&d._testMouseOver(a,b,c));var e=this._getPointerData(-1);if(e&&(a||this.mouseX!=this._mouseOverX||this.mouseY!=this._mouseOverY||!this.mouseInBounds)){var f,g,h,i=e.posEvtObj,j=c||i&&i.target==this.canvas,k=null,l=-1,m="";!b&&(a||this.mouseInBounds&&j)&&(k=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,!0),this._mouseOverX=this.mouseX,this._mouseOverY=this.mouseY);var n=this._mouseOverTarget||[],o=n[n.length-1],p=this._mouseOverTarget=[];for(f=k;f;)p.unshift(f),m||(m=f.cursor),f=f.parent;for(this.canvas.style.cursor=m,!b&&c&&(c.canvas.style.cursor=m),g=0,h=p.length;h>g&&p[g]==n[g];g++)l=g;for(o!=k&&this._dispatchMouseEvent(o,"mouseout",!0,-1,e,i,k),g=n.length-1;g>l;g--)this._dispatchMouseEvent(n[g],"rollout",!1,-1,e,i,k);for(g=p.length-1;g>l;g--)this._dispatchMouseEvent(p[g],"rollover",!1,-1,e,i,o);o!=k&&this._dispatchMouseEvent(k,"mouseover",!0,-1,e,i,o),d&&d._testMouseOver(a,b||k&&this,c||j&&this)}}},b._handleDoubleClick=function(a,b){var c=null,d=this._nextStage,e=this._getPointerData(-1);b||(c=this._getObjectsUnderPoint(e.x,e.y,null,!0),this._dispatchMouseEvent(c,"dblclick",!0,-1,e,a)),d&&d._handleDoubleClick(a,b||c&&this)},b._dispatchMouseEvent=function(a,b,c,d,e,f,g){if(a&&(c||a.hasEventListener(b))){var h=new createjs.MouseEvent(b,c,!1,e.x,e.y,f,d,d===this._primaryPointerID||-1===d,e.rawX,e.rawY,g);a.dispatchEvent(h)}},createjs.Stage=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){function a(a){this.DisplayObject_constructor(),"string"==typeof a?(this.image=document.createElement("img"),this.image.src=a):this.image=a,this.sourceRect=null}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.image,b=this.cacheCanvas||a&&(a.naturalWidth||a.getContext||a.readyState>=2);return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&b)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b)||!this.image)return!0;var c=this.image,d=this.sourceRect;if(d){var e=d.x,f=d.y,g=e+d.width,h=f+d.height,i=0,j=0,k=c.width,l=c.height;0>e&&(i-=e,e=0),g>k&&(g=k),0>f&&(j-=f,f=0),h>l&&(h=l),a.drawImage(c,e,f,g-e,h-f,i,j,g-e,h-f)}else a.drawImage(c,0,0);return!0},b.getBounds=function(){var a=this.DisplayObject_getBounds();if(a)return a;var b=this.image,c=this.sourceRect||b,d=b&&(b.naturalWidth||b.getContext||b.readyState>=2);return d?this._rectangle.setValues(0,0,c.width,c.height):null},b.clone=function(){var b=new a(this.image);return this.sourceRect&&(b.sourceRect=this.sourceRect.clone()),this._cloneProps(b),b},b.toString=function(){return"[Bitmap (name="+this.name+")]"},createjs.Bitmap=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.DisplayObject_constructor(),this.currentFrame=0,this.currentAnimation=null,this.paused=!0,this.spriteSheet=a,this.currentAnimationFrame=0,this.framerate=0,this._animation=null,this._currentFrame=null,this._skipAdvance=!1,null!=b&&this.gotoAndPlay(b)}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet.complete;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;this._normalizeFrame();var c=this.spriteSheet.getFrame(0|this._currentFrame);if(!c)return!1;var d=c.rect;return d.width&&d.height&&a.drawImage(c.image,d.x,d.y,d.width,d.height,-c.regX,-c.regY,d.width,d.height),!0},b.play=function(){this.paused=!1},b.stop=function(){this.paused=!0},b.gotoAndPlay=function(a){this.paused=!1,this._skipAdvance=!0,this._goto(a)},b.gotoAndStop=function(a){this.paused=!0,this._goto(a)},b.advance=function(a){var b=this.framerate||this.spriteSheet.framerate,c=b&&null!=a?a/(1e3/b):1;this._normalizeFrame(c)},b.getBounds=function(){return this.DisplayObject_getBounds()||this.spriteSheet.getFrameBounds(this.currentFrame,this._rectangle)},b.clone=function(){return this._cloneProps(new a(this.spriteSheet))},b.toString=function(){return"[Sprite (name="+this.name+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.currentFrame=this.currentFrame,a.currentAnimation=this.currentAnimation,a.paused=this.paused,a.currentAnimationFrame=this.currentAnimationFrame,a.framerate=this.framerate,a._animation=this._animation,a._currentFrame=this._currentFrame,a._skipAdvance=this._skipAdvance,a},b._tick=function(a){this.paused||(this._skipAdvance||this.advance(a&&a.delta),this._skipAdvance=!1),this.DisplayObject__tick(a)},b._normalizeFrame=function(a){a=a||0;var b,c=this._animation,d=this.paused,e=this._currentFrame;if(c){var f=c.speed||1,g=this.currentAnimationFrame;if(b=c.frames.length,g+a*f>=b){var h=c.next;if(this._dispatchAnimationEnd(c,e,d,h,b-1))return;if(h)return this._goto(h,a-(b-g)/f);this.paused=!0,g=c.frames.length-1}else g+=a*f;this.currentAnimationFrame=g,this._currentFrame=c.frames[0|g]}else if(e=this._currentFrame+=a,b=this.spriteSheet.getNumFrames(),e>=b&&b>0&&!this._dispatchAnimationEnd(c,e,d,b-1)&&(this._currentFrame-=b)>=b)return this._normalizeFrame();e=0|this._currentFrame,this.currentFrame!=e&&(this.currentFrame=e,this.dispatchEvent("change"))},b._dispatchAnimationEnd=function(a,b,c,d,e){var f=a?a.name:null;if(this.hasEventListener("animationend")){var g=new createjs.Event("animationend");g.name=f,g.next=d,this.dispatchEvent(g)}var h=this._animation!=a||this._currentFrame!=b;return h||c||!this.paused||(this.currentAnimationFrame=e,h=!0),h},b._goto=function(a,b){if(this.currentAnimationFrame=0,isNaN(a)){var c=this.spriteSheet.getAnimation(a);c&&(this._animation=c,this.currentAnimation=a,this._normalizeFrame(b))}else this.currentAnimation=this._animation=null,this._currentFrame=a,this._normalizeFrame()},createjs.Sprite=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),this.graphics=a?a:new createjs.Graphics}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){var a=this.cacheCanvas||this.graphics&&!this.graphics.isEmpty();return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this.graphics.draw(a,this),!0)},b.clone=function(b){var c=b&&this.graphics?this.graphics.clone():this.graphics;return this._cloneProps(new a(c))},b.toString=function(){return"[Shape (name="+this.name+")]"},createjs.Shape=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.DisplayObject_constructor(),this.text=a,this.font=b,this.color=c,this.textAlign="left",this.textBaseline="top",this.maxWidth=null,this.outline=0,this.lineHeight=0,this.lineWidth=null}var b=createjs.extend(a,createjs.DisplayObject),c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._workingContext=c.getContext("2d"),c.width=c.height=1),a.H_OFFSETS={start:0,left:0,center:-.5,end:-1,right:-1},a.V_OFFSETS={top:0,hanging:-.01,middle:-.4,alphabetic:-.8,ideographic:-.85,bottom:-1},b.isVisible=function(){var a=this.cacheCanvas||null!=this.text&&""!==this.text;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;var c=this.color||"#000";return this.outline?(a.strokeStyle=c,a.lineWidth=1*this.outline):a.fillStyle=c,this._drawText(this._prepContext(a)),!0},b.getMeasuredWidth=function(){return this._getMeasuredWidth(this.text)},b.getMeasuredLineHeight=function(){return 1.2*this._getMeasuredWidth("M")},b.getMeasuredHeight=function(){return this._drawText(null,{}).height},b.getBounds=function(){var b=this.DisplayObject_getBounds();if(b)return b;if(null==this.text||""===this.text)return null;var c=this._drawText(null,{}),d=this.maxWidth&&this.maxWidth<c.width?this.maxWidth:c.width,e=d*a.H_OFFSETS[this.textAlign||"left"],f=this.lineHeight||this.getMeasuredLineHeight(),g=f*a.V_OFFSETS[this.textBaseline||"top"];return this._rectangle.setValues(e,g,d,c.height)},b.getMetrics=function(){var b={lines:[]};return b.lineHeight=this.lineHeight||this.getMeasuredLineHeight(),b.vOffset=b.lineHeight*a.V_OFFSETS[this.textBaseline||"top"],this._drawText(null,b,b.lines)},b.clone=function(){return this._cloneProps(new a(this.text,this.font,this.color))},b.toString=function(){return"[Text (text="+(this.text.length>20?this.text.substr(0,17)+"...":this.text)+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.textAlign=this.textAlign,a.textBaseline=this.textBaseline,a.maxWidth=this.maxWidth,a.outline=this.outline,a.lineHeight=this.lineHeight,a.lineWidth=this.lineWidth,a},b._prepContext=function(a){return a.font=this.font||"10px sans-serif",a.textAlign=this.textAlign||"left",a.textBaseline=this.textBaseline||"top",a},b._drawText=function(b,c,d){var e=!!b;e||(b=a._workingContext,b.save(),this._prepContext(b));for(var f=this.lineHeight||this.getMeasuredLineHeight(),g=0,h=0,i=String(this.text).split(/(?:\r\n|\r|\n)/),j=0,k=i.length;k>j;j++){var l=i[j],m=null;if(null!=this.lineWidth&&(m=b.measureText(l).width)>this.lineWidth){var n=l.split(/(\s)/);l=n[0],m=b.measureText(l).width;for(var o=1,p=n.length;p>o;o+=2){var q=b.measureText(n[o]+n[o+1]).width;m+q>this.lineWidth?(e&&this._drawTextLine(b,l,h*f),d&&d.push(l),m>g&&(g=m),l=n[o+1],m=b.measureText(l).width,h++):(l+=n[o]+n[o+1],m+=q)}}e&&this._drawTextLine(b,l,h*f),d&&d.push(l),c&&null==m&&(m=b.measureText(l).width),m>g&&(g=m),h++}return c&&(c.width=g,c.height=h*f),e||b.restore(),c},b._drawTextLine=function(a,b,c){this.outline?a.strokeText(b,0,c,this.maxWidth||65535):a.fillText(b,0,c,this.maxWidth||65535)},b._getMeasuredWidth=function(b){var c=a._workingContext;c.save();var d=this._prepContext(c).measureText(b).width;return c.restore(),d},createjs.Text=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.Container_constructor(),this.text=a||"",this.spriteSheet=b,this.lineHeight=0,this.letterSpacing=0,this.spaceWidth=0,this._oldProps={text:0,spriteSheet:0,lineHeight:0,letterSpacing:0,spaceWidth:0}}var b=createjs.extend(a,createjs.Container);a.maxPoolSize=100,a._spritePool=[],b.draw=function(a,b){this.DisplayObject_draw(a,b)||(this._updateText(),this.Container_draw(a,b))},b.getBounds=function(){return this._updateText(),this.Container_getBounds()},b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet&&this.spriteSheet.complete&&this.text;return!!(this.visible&&this.alpha>0&&0!==this.scaleX&&0!==this.scaleY&&a)},b.clone=function(){return this._cloneProps(new a(this.text,this.spriteSheet))},b.addChild=b.addChildAt=b.removeChild=b.removeChildAt=b.removeAllChildren=function(){},b._cloneProps=function(a){return this.Container__cloneProps(a),a.lineHeight=this.lineHeight,a.letterSpacing=this.letterSpacing,a.spaceWidth=this.spaceWidth,a},b._getFrameIndex=function(a,b){var c,d=b.getAnimation(a);return d||(a!=(c=a.toUpperCase())||a!=(c=a.toLowerCase())||(c=null),c&&(d=b.getAnimation(c))),d&&d.frames[0]},b._getFrame=function(a,b){var c=this._getFrameIndex(a,b);return null==c?c:b.getFrame(c)},b._getLineHeight=function(a){var b=this._getFrame("1",a)||this._getFrame("T",a)||this._getFrame("L",a)||a.getFrame(0);return b?b.rect.height:1},b._getSpaceWidth=function(a){var b=this._getFrame("1",a)||this._getFrame("l",a)||this._getFrame("e",a)||this._getFrame("a",a)||a.getFrame(0);return b?b.rect.width:1},b._updateText=function(){var b,c=0,d=0,e=this._oldProps,f=!1,g=this.spaceWidth,h=this.lineHeight,i=this.spriteSheet,j=a._spritePool,k=this.children,l=0,m=k.length;for(var n in e)e[n]!=this[n]&&(e[n]=this[n],f=!0);if(f){var o=!!this._getFrame(" ",i);o||g||(g=this._getSpaceWidth(i)),h||(h=this._getLineHeight(i));for(var p=0,q=this.text.length;q>p;p++){var r=this.text.charAt(p);if(" "!=r||o)if("\n"!=r&&"\r"!=r){var s=this._getFrameIndex(r,i);null!=s&&(m>l?b=k[l]:(k.push(b=j.length?j.pop():new createjs.Sprite),b.parent=this,m++),b.spriteSheet=i,b.gotoAndStop(s),b.x=c,b.y=d,l++,c+=b.getBounds().width+this.letterSpacing)}else"\r"==r&&"\n"==this.text.charAt(p+1)&&p++,c=0,d+=h;else c+=g}for(;m>l;)j.push(b=k.pop()),b.parent=null,m--;j.length>a.maxPoolSize&&(j.length=a.maxPoolSize)}},createjs.BitmapText=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){"use strict";function a(b,c,d,e){this.Container_constructor(),!a.inited&&a.init(),this.mode=b||a.INDEPENDENT,this.startPosition=c||0,this.loop=d,this.currentFrame=0,this.timeline=new createjs.Timeline(null,e,{paused:!0,position:c,useTicks:!0}),this.paused=!1,this.actionsEnabled=!0,this.autoReset=!0,this.frameBounds=this.frameBounds||null,this.framerate=null,this._synchOffset=0,this._prevPos=-1,this._prevPosition=0,this._t=0,this._managed={}}function b(){throw"MovieClipPlugin cannot be instantiated."}var c=createjs.extend(a,createjs.Container);a.INDEPENDENT="independent",a.SINGLE_FRAME="single",a.SYNCHED="synched",a.inited=!1,a.init=function(){a.inited||(b.install(),a.inited=!0)},c.getLabels=function(){return this.timeline.getLabels()},c.getCurrentLabel=function(){return this._updateTimeline(),this.timeline.getCurrentLabel()},c.getDuration=function(){return this.timeline.duration};try{Object.defineProperties(c,{labels:{get:c.getLabels},currentLabel:{get:c.getCurrentLabel},totalFrames:{get:c.getDuration},duration:{get:c.getDuration}})}catch(d){}c.initialize=a,c.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},c.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this._updateTimeline(),this.Container_draw(a,b),!0)
	},c.play=function(){this.paused=!1},c.stop=function(){this.paused=!0},c.gotoAndPlay=function(a){this.paused=!1,this._goto(a)},c.gotoAndStop=function(a){this.paused=!0,this._goto(a)},c.advance=function(b){var c=a.INDEPENDENT;if(this.mode==c){for(var d=this,e=d.framerate;(d=d.parent)&&null==e;)d.mode==c&&(e=d._framerate);this._framerate=e;var f=null!=e&&-1!=e&&null!=b?b/(1e3/e)+this._t:1,g=0|f;for(this._t=f-g;!this.paused&&g--;)this._prevPosition=this._prevPos<0?0:this._prevPosition+1,this._updateTimeline()}},c.clone=function(){throw"MovieClip cannot be cloned."},c.toString=function(){return"[MovieClip (name="+this.name+")]"},c._tick=function(a){this.advance(a&&a.delta),this.Container__tick(a)},c._goto=function(a){var b=this.timeline.resolve(a);null!=b&&(-1==this._prevPos&&(this._prevPos=0/0),this._prevPosition=b,this._t=0,this._updateTimeline())},c._reset=function(){this._prevPos=-1,this._t=this.currentFrame=0,this.paused=!1},c._updateTimeline=function(){var b=this.timeline,c=this.mode!=a.INDEPENDENT;b.loop=null==this.loop?!0:this.loop;var d=c?this.startPosition+(this.mode==a.SINGLE_FRAME?0:this._synchOffset):this._prevPos<0?0:this._prevPosition,e=c||!this.actionsEnabled?createjs.Tween.NONE:null;if(this.currentFrame=b._calcPosition(d),b.setPosition(d,e),this._prevPosition=b._prevPosition,this._prevPos!=b._prevPos){this.currentFrame=this._prevPos=b._prevPos;for(var f in this._managed)this._managed[f]=1;for(var g=b._tweens,h=0,i=g.length;i>h;h++){var j=g[h],k=j._target;if(k!=this&&!j.passive){var l=j._stepPosition;k instanceof createjs.DisplayObject?this._addManagedChild(k,l):this._setState(k.state,l)}}var m=this.children;for(h=m.length-1;h>=0;h--){var n=m[h].id;1==this._managed[n]&&(this.removeChildAt(h),delete this._managed[n])}}},c._setState=function(a,b){if(a)for(var c=a.length-1;c>=0;c--){var d=a[c],e=d.t,f=d.p;for(var g in f)e[g]=f[g];this._addManagedChild(e,b)}},c._addManagedChild=function(b,c){b._off||(this.addChildAt(b,0),b instanceof a&&(b._synchOffset=c,b.mode==a.INDEPENDENT&&b.autoReset&&!this._managed[b.id]&&b._reset()),this._managed[b.id]=2)},c._getBounds=function(a,b){var c=this.DisplayObject_getBounds();return c||(this._updateTimeline(),this.frameBounds&&(c=this._rectangle.copy(this.frameBounds[this.currentFrame]))),c?this._transformBounds(c,a,b):this.Container__getBounds(a,b)},createjs.MovieClip=createjs.promote(a,"Container"),b.priority=100,b.install=function(){createjs.Tween.installPlugin(b,["startPosition"])},b.init=function(a,b,c){return c},b.step=function(){},b.tween=function(b,c,d,e,f,g){return b.target instanceof a?1==g?f[c]:e[c]:d}}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"SpriteSheetUtils cannot be instantiated"}var b=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");b.getContext&&(a._workingCanvas=b,a._workingContext=b.getContext("2d"),b.width=b.height=1),a.addFlippedFrames=function(b,c,d,e){if(c||d||e){var f=0;c&&a._flip(b,++f,!0,!1),d&&a._flip(b,++f,!1,!0),e&&a._flip(b,++f,!0,!0)}},a.extractFrame=function(b,c){isNaN(c)&&(c=b.getAnimation(c).frames[0]);var d=b.getFrame(c);if(!d)return null;var e=d.rect,f=a._workingCanvas;f.width=e.width,f.height=e.height,a._workingContext.drawImage(d.image,e.x,e.y,e.width,e.height,0,0,e.width,e.height);var g=document.createElement("img");return g.src=f.toDataURL("image/png"),g},a.mergeAlpha=function(a,b,c){c||(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),c.width=Math.max(b.width,a.width),c.height=Math.max(b.height,a.height);var d=c.getContext("2d");return d.save(),d.drawImage(a,0,0),d.globalCompositeOperation="destination-in",d.drawImage(b,0,0),d.restore(),c},a._flip=function(b,c,d,e){for(var f=b._images,g=a._workingCanvas,h=a._workingContext,i=f.length/c,j=0;i>j;j++){var k=f[j];k.__tmp=j,h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,g.width+1,g.height+1),g.width=k.width,g.height=k.height,h.setTransform(d?-1:1,0,0,e?-1:1,d?k.width:0,e?k.height:0),h.drawImage(k,0,0);var l=document.createElement("img");l.src=g.toDataURL("image/png"),l.width=k.width,l.height=k.height,f.push(l)}var m=b._frames,n=m.length/c;for(j=0;n>j;j++){k=m[j];var o=k.rect.clone();l=f[k.image.__tmp+i*c];var p={image:l,rect:o,regX:k.regX,regY:k.regY};d&&(o.x=l.width-o.x-o.width,p.regX=o.width-k.regX),e&&(o.y=l.height-o.y-o.height,p.regY=o.height-k.regY),m.push(p)}var q="_"+(d?"h":"")+(e?"v":""),r=b._animations,s=b._data,t=r.length/c;for(j=0;t>j;j++){var u=r[j];k=s[u];var v={name:u+q,speed:k.speed,next:k.next,frames:[]};k.next&&(v.next+=q),m=k.frames;for(var w=0,x=m.length;x>w;w++)v.frames.push(m[w]+n*c);s[v.name]=v,r.push(v.name)}},createjs.SpriteSheetUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.EventDispatcher_constructor(),this.maxWidth=2048,this.maxHeight=2048,this.spriteSheet=null,this.scale=1,this.padding=1,this.timeSlice=.3,this.progress=-1,this.framerate=a||0,this._frames=[],this._animations={},this._data=null,this._nextFrameIndex=0,this._index=0,this._timerID=null,this._scale=1}var b=createjs.extend(a,createjs.EventDispatcher);a.ERR_DIMENSIONS="frame dimensions exceed max spritesheet dimensions",a.ERR_RUNNING="a build is already running",b.addFrame=function(b,c,d,e,f){if(this._data)throw a.ERR_RUNNING;var g=c||b.bounds||b.nominalBounds;return!g&&b.getBounds&&(g=b.getBounds()),g?(d=d||1,this._frames.push({source:b,sourceRect:g,scale:d,funct:e,data:f,index:this._frames.length,height:g.height*d})-1):null},b.addAnimation=function(b,c,d,e){if(this._data)throw a.ERR_RUNNING;this._animations[b]={frames:c,next:d,speed:e}},b.addMovieClip=function(b,c,d,e,f,g){if(this._data)throw a.ERR_RUNNING;var h=b.frameBounds,i=c||b.bounds||b.nominalBounds;if(!i&&b.getBounds&&(i=b.getBounds()),i||h){var j,k,l=this._frames.length,m=b.timeline.duration;for(j=0;m>j;j++){var n=h&&h[j]?h[j]:i;this.addFrame(b,n,d,this._setupMovieClipFrame,{i:j,f:e,d:f})}var o=b.timeline._labels,p=[];for(var q in o)p.push({index:o[q],label:q});if(p.length)for(p.sort(function(a,b){return a.index-b.index}),j=0,k=p.length;k>j;j++){for(var r=p[j].label,s=l+p[j].index,t=l+(j==k-1?m:p[j+1].index),u=[],v=s;t>v;v++)u.push(v);(!g||(r=g(r,b,s,t)))&&this.addAnimation(r,u,!0)}}},b.build=function(){if(this._data)throw a.ERR_RUNNING;for(this._startBuild();this._drawNext(););return this._endBuild(),this.spriteSheet},b.buildAsync=function(b){if(this._data)throw a.ERR_RUNNING;this.timeSlice=b,this._startBuild();var c=this;this._timerID=setTimeout(function(){c._run()},50-50*Math.max(.01,Math.min(.99,this.timeSlice||.3)))},b.stopAsync=function(){clearTimeout(this._timerID),this._data=null},b.clone=function(){throw"SpriteSheetBuilder cannot be cloned."},b.toString=function(){return"[SpriteSheetBuilder]"},b._startBuild=function(){var b=this.padding||0;this.progress=0,this.spriteSheet=null,this._index=0,this._scale=this.scale;var c=[];this._data={images:[],frames:c,framerate:this.framerate,animations:this._animations};var d=this._frames.slice();if(d.sort(function(a,b){return a.height<=b.height?-1:1}),d[d.length-1].height+2*b>this.maxHeight)throw a.ERR_DIMENSIONS;for(var e=0,f=0,g=0;d.length;){var h=this._fillRow(d,e,g,c,b);if(h.w>f&&(f=h.w),e+=h.h,!h.h||!d.length){var i=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");i.width=this._getSize(f,this.maxWidth),i.height=this._getSize(e,this.maxHeight),this._data.images[g]=i,h.h||(f=e=0,g++)}}},b._setupMovieClipFrame=function(a,b){var c=a.actionsEnabled;a.actionsEnabled=!1,a.gotoAndStop(b.i),a.actionsEnabled=c,b.f&&b.f(a,b.d,b.i)},b._getSize=function(a,b){for(var c=4;Math.pow(2,++c)<a;);return Math.min(b,Math.pow(2,c))},b._fillRow=function(b,c,d,e,f){var g=this.maxWidth,h=this.maxHeight;c+=f;for(var i=h-c,j=f,k=0,l=b.length-1;l>=0;l--){var m=b[l],n=this._scale*m.scale,o=m.sourceRect,p=m.source,q=Math.floor(n*o.x-f),r=Math.floor(n*o.y-f),s=Math.ceil(n*o.height+2*f),t=Math.ceil(n*o.width+2*f);if(t>g)throw a.ERR_DIMENSIONS;s>i||j+t>g||(m.img=d,m.rect=new createjs.Rectangle(j,c,t,s),k=k||s,b.splice(l,1),e[m.index]=[j,c,t,s,d,Math.round(-q+n*p.regX-f),Math.round(-r+n*p.regY-f)],j+=t)}return{w:j,h:k}},b._endBuild=function(){this.spriteSheet=new createjs.SpriteSheet(this._data),this._data=null,this.progress=1,this.dispatchEvent("complete")},b._run=function(){for(var a=50*Math.max(.01,Math.min(.99,this.timeSlice||.3)),b=(new Date).getTime()+a,c=!1;b>(new Date).getTime();)if(!this._drawNext()){c=!0;break}if(c)this._endBuild();else{var d=this;this._timerID=setTimeout(function(){d._run()},50-a)}var e=this.progress=this._index/this._frames.length;if(this.hasEventListener("progress")){var f=new createjs.Event("progress");f.progress=e,this.dispatchEvent(f)}},b._drawNext=function(){var a=this._frames[this._index],b=a.scale*this._scale,c=a.rect,d=a.sourceRect,e=this._data.images[a.img],f=e.getContext("2d");return a.funct&&a.funct(a.source,a.data),f.save(),f.beginPath(),f.rect(c.x,c.y,c.width,c.height),f.clip(),f.translate(Math.ceil(c.x-d.x*b),Math.ceil(c.y-d.y*b)),f.scale(b,b),a.source.draw(f),f.restore(),++this._index<this._frames.length},createjs.SpriteSheetBuilder=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),"string"==typeof a&&(a=document.getElementById(a)),this.mouseEnabled=!1;var b=a.style;b.position="absolute",b.transformOrigin=b.WebkitTransformOrigin=b.msTransformOrigin=b.MozTransformOrigin=b.OTransformOrigin="0% 0%",this.htmlElement=a,this._oldProps=null}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){return null!=this.htmlElement},b.draw=function(){return!0},b.cache=function(){},b.uncache=function(){},b.updateCache=function(){},b.hitTest=function(){},b.localToGlobal=function(){},b.globalToLocal=function(){},b.localToLocal=function(){},b.clone=function(){throw"DOMElement cannot be cloned."},b.toString=function(){return"[DOMElement (name="+this.name+")]"},b._tick=function(a){var b=this.getStage();b&&b.on("drawend",this._handleDrawEnd,this,!0),this.DisplayObject__tick(a)},b._handleDrawEnd=function(){var a=this.htmlElement;if(a){var b=a.style,c=this.getConcatenatedDisplayProps(this._props),d=c.matrix,e=c.visible?"visible":"hidden";if(e!=b.visibility&&(b.visibility=e),c.visible){var f=this._oldProps,g=f&&f.matrix,h=1e4;if(!g||!g.equals(d)){var i="matrix("+(d.a*h|0)/h+","+(d.b*h|0)/h+","+(d.c*h|0)/h+","+(d.d*h|0)/h+","+(d.tx+.5|0);b.transform=b.WebkitTransform=b.OTransform=b.msTransform=i+","+(d.ty+.5|0)+")",b.MozTransform=i+"px,"+(d.ty+.5|0)+"px)",f||(f=this._oldProps=new createjs.DisplayProps(!0,0/0)),f.matrix.copy(d)}f.alpha!=c.alpha&&(b.opacity=""+(c.alpha*h|0)/h,f.alpha=c.alpha)}}},createjs.DOMElement=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){}var b=a.prototype;b.getBounds=function(a){return a},b.applyFilter=function(a,b,c,d,e,f,g,h){f=f||a,null==g&&(g=b),null==h&&(h=c);try{var i=a.getImageData(b,c,d,e)}catch(j){return!1}return this._applyFilter(i)?(f.putImageData(i,g,h),!0):!1},b.toString=function(){return"[Filter]"},b.clone=function(){return new a},b._applyFilter=function(){return!0},createjs.Filter=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){(isNaN(a)||0>a)&&(a=0),(isNaN(b)||0>b)&&(b=0),(isNaN(c)||1>c)&&(c=1),this.blurX=0|a,this.blurY=0|b,this.quality=0|c}var b=createjs.extend(a,createjs.Filter);a.MUL_TABLE=[1,171,205,293,57,373,79,137,241,27,391,357,41,19,283,265,497,469,443,421,25,191,365,349,335,161,155,149,9,278,269,261,505,245,475,231,449,437,213,415,405,395,193,377,369,361,353,345,169,331,325,319,313,307,301,37,145,285,281,69,271,267,263,259,509,501,493,243,479,118,465,459,113,446,55,435,429,423,209,413,51,403,199,393,97,3,379,375,371,367,363,359,355,351,347,43,85,337,333,165,327,323,5,317,157,311,77,305,303,75,297,294,73,289,287,71,141,279,277,275,68,135,67,133,33,262,260,129,511,507,503,499,495,491,61,121,481,477,237,235,467,232,115,457,227,451,7,445,221,439,218,433,215,427,425,211,419,417,207,411,409,203,202,401,399,396,197,49,389,387,385,383,95,189,47,187,93,185,23,183,91,181,45,179,89,177,11,175,87,173,345,343,341,339,337,21,167,83,331,329,327,163,81,323,321,319,159,79,315,313,39,155,309,307,153,305,303,151,75,299,149,37,295,147,73,291,145,289,287,143,285,71,141,281,35,279,139,69,275,137,273,17,271,135,269,267,133,265,33,263,131,261,130,259,129,257,1],a.SHG_TABLE=[0,9,10,11,9,12,10,11,12,9,13,13,10,9,13,13,14,14,14,14,10,13,14,14,14,13,13,13,9,14,14,14,15,14,15,14,15,15,14,15,15,15,14,15,15,15,15,15,14,15,15,15,15,15,15,12,14,15,15,13,15,15,15,15,16,16,16,15,16,14,16,16,14,16,13,16,16,16,15,16,13,16,15,16,14,9,16,16,16,16,16,16,16,16,16,13,14,16,16,15,16,16,10,16,15,16,14,16,16,14,16,16,14,16,16,14,15,16,16,16,14,15,14,15,13,16,16,15,17,17,17,17,17,17,14,15,17,17,16,16,17,16,15,17,16,17,11,17,16,17,16,17,16,17,17,16,17,17,16,17,17,16,16,17,17,17,16,14,17,17,17,17,15,16,14,16,15,16,13,16,15,16,14,16,15,16,12,16,15,16,17,17,17,17,17,13,16,15,17,17,17,16,15,17,17,17,16,15,17,17,14,16,17,17,16,17,17,16,15,17,16,14,17,16,15,17,16,17,17,16,17,15,16,17,14,17,16,15,17,16,17,13,17,16,17,17,16,17,14,17,16,17,16,17,16,17,9],b.getBounds=function(a){var b=0|this.blurX,c=0|this.blurY;if(0>=b&&0>=c)return a;var d=Math.pow(this.quality,.2);return(a||new createjs.Rectangle).pad(b*d+1,c*d+1,b*d+1,c*d+1)},b.clone=function(){return new a(this.blurX,this.blurY,this.quality)},b.toString=function(){return"[BlurFilter]"},b._applyFilter=function(b){var c=this.blurX>>1;if(isNaN(c)||0>c)return!1;var d=this.blurY>>1;if(isNaN(d)||0>d)return!1;if(0==c&&0==d)return!1;var e=this.quality;(isNaN(e)||1>e)&&(e=1),e|=0,e>3&&(e=3),1>e&&(e=1);var f=b.data,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=c+c+1|0,w=d+d+1|0,x=0|b.width,y=0|b.height,z=x-1|0,A=y-1|0,B=c+1|0,C=d+1|0,D={r:0,b:0,g:0,a:0},E=D;for(i=1;v>i;i++)E=E.n={r:0,b:0,g:0,a:0};E.n=D;var F={r:0,b:0,g:0,a:0},G=F;for(i=1;w>i;i++)G=G.n={r:0,b:0,g:0,a:0};G.n=F;for(var H=null,I=0|a.MUL_TABLE[c],J=0|a.SHG_TABLE[c],K=0|a.MUL_TABLE[d],L=0|a.SHG_TABLE[d];e-->0;){m=l=0;var M=I,N=J;for(h=y;--h>-1;){for(n=B*(r=f[0|l]),o=B*(s=f[l+1|0]),p=B*(t=f[l+2|0]),q=B*(u=f[l+3|0]),E=D,i=B;--i>-1;)E.r=r,E.g=s,E.b=t,E.a=u,E=E.n;for(i=1;B>i;i++)j=l+((i>z?z:i)<<2)|0,n+=E.r=f[j],o+=E.g=f[j+1],p+=E.b=f[j+2],q+=E.a=f[j+3],E=E.n;for(H=D,g=0;x>g;g++)f[l++]=n*M>>>N,f[l++]=o*M>>>N,f[l++]=p*M>>>N,f[l++]=q*M>>>N,j=m+((j=g+c+1)<z?j:z)<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n;m+=x}for(M=K,N=L,g=0;x>g;g++){for(l=g<<2|0,n=C*(r=f[l])|0,o=C*(s=f[l+1|0])|0,p=C*(t=f[l+2|0])|0,q=C*(u=f[l+3|0])|0,G=F,i=0;C>i;i++)G.r=r,G.g=s,G.b=t,G.a=u,G=G.n;for(k=x,i=1;d>=i;i++)l=k+g<<2,n+=G.r=f[l],o+=G.g=f[l+1],p+=G.b=f[l+2],q+=G.a=f[l+3],G=G.n,A>i&&(k+=x);if(l=g,H=F,e>0)for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(f[j]=n*M>>>N,f[j+1]=o*M>>>N,f[j+2]=p*M>>>N):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x;else for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(u=255/u,f[j]=(n*M>>>N)*u,f[j+1]=(o*M>>>N)*u,f[j+2]=(p*M>>>N)*u):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x}}return!0},createjs.BlurFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.alphaMap=a,this._alphaMap=null,this._mapData=null}var b=createjs.extend(a,createjs.Filter);b.clone=function(){var b=new a(this.alphaMap);return b._alphaMap=this._alphaMap,b._mapData=this._mapData,b},b.toString=function(){return"[AlphaMapFilter]"},b._applyFilter=function(a){if(!this.alphaMap)return!0;if(!this._prepAlphaMap())return!1;for(var b=a.data,c=this._mapData,d=0,e=b.length;e>d;d+=4)b[d+3]=c[d]||0;return!0},b._prepAlphaMap=function(){if(!this.alphaMap)return!1;if(this.alphaMap==this._alphaMap&&this._mapData)return!0;this._mapData=null;var a,b=this._alphaMap=this.alphaMap,c=b;b instanceof HTMLCanvasElement?a=c.getContext("2d"):(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"),c.width=b.width,c.height=b.height,a=c.getContext("2d"),a.drawImage(b,0,0));try{var d=a.getImageData(0,0,b.width,b.height)}catch(e){return!1}return this._mapData=d.data,!0},createjs.AlphaMapFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.mask=a}var b=createjs.extend(a,createjs.Filter);b.applyFilter=function(a,b,c,d,e,f,g,h){return this.mask?(f=f||a,null==g&&(g=b),null==h&&(h=c),f.save(),a!=f?!1:(f.globalCompositeOperation="destination-in",f.drawImage(this.mask,g,h),f.restore(),!0)):!0},b.clone=function(){return new a(this.mask)},b.toString=function(){return"[AlphaMaskFilter]"},createjs.AlphaMaskFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h){this.redMultiplier=null!=a?a:1,this.greenMultiplier=null!=b?b:1,this.blueMultiplier=null!=c?c:1,this.alphaMultiplier=null!=d?d:1,this.redOffset=e||0,this.greenOffset=f||0,this.blueOffset=g||0,this.alphaOffset=h||0}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorFilter]"},b.clone=function(){return new a(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset)},b._applyFilter=function(a){for(var b=a.data,c=b.length,d=0;c>d;d+=4)b[d]=b[d]*this.redMultiplier+this.redOffset,b[d+1]=b[d+1]*this.greenMultiplier+this.greenOffset,b[d+2]=b[d+2]*this.blueMultiplier+this.blueOffset,b[d+3]=b[d+3]*this.alphaMultiplier+this.alphaOffset;return!0},createjs.ColorFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setColor(a,b,c,d)}var b=a.prototype;a.DELTA_INDEX=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10],a.IDENTITY_MATRIX=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],a.LENGTH=a.IDENTITY_MATRIX.length,b.setColor=function(a,b,c,d){return this.reset().adjustColor(a,b,c,d)},b.reset=function(){return this.copy(a.IDENTITY_MATRIX)},b.adjustColor=function(a,b,c,d){return this.adjustHue(d),this.adjustContrast(b),this.adjustBrightness(a),this.adjustSaturation(c)},b.adjustBrightness=function(a){return 0==a||isNaN(a)?this:(a=this._cleanValue(a,255),this._multiplyMatrix([1,0,0,0,a,0,1,0,0,a,0,0,1,0,a,0,0,0,1,0,0,0,0,0,1]),this)},b.adjustContrast=function(b){if(0==b||isNaN(b))return this;b=this._cleanValue(b,100);var c;return 0>b?c=127+b/100*127:(c=b%1,c=0==c?a.DELTA_INDEX[b]:a.DELTA_INDEX[b<<0]*(1-c)+a.DELTA_INDEX[(b<<0)+1]*c,c=127*c+127),this._multiplyMatrix([c/127,0,0,0,.5*(127-c),0,c/127,0,0,.5*(127-c),0,0,c/127,0,.5*(127-c),0,0,0,1,0,0,0,0,0,1]),this},b.adjustSaturation=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,100);var b=1+(a>0?3*a/100:a/100),c=.3086,d=.6094,e=.082;return this._multiplyMatrix([c*(1-b)+b,d*(1-b),e*(1-b),0,0,c*(1-b),d*(1-b)+b,e*(1-b),0,0,c*(1-b),d*(1-b),e*(1-b)+b,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.adjustHue=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,180)/180*Math.PI;var b=Math.cos(a),c=Math.sin(a),d=.213,e=.715,f=.072;return this._multiplyMatrix([d+b*(1-d)+c*-d,e+b*-e+c*-e,f+b*-f+c*(1-f),0,0,d+b*-d+.143*c,e+b*(1-e)+.14*c,f+b*-f+c*-.283,0,0,d+b*-d+c*-(1-d),e+b*-e+c*e,f+b*(1-f)+c*f,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.concat=function(b){return b=this._fixMatrix(b),b.length!=a.LENGTH?this:(this._multiplyMatrix(b),this)},b.clone=function(){return(new a).copy(this)},b.toArray=function(){for(var b=[],c=0,d=a.LENGTH;d>c;c++)b[c]=this[c];return b},b.copy=function(b){for(var c=a.LENGTH,d=0;c>d;d++)this[d]=b[d];return this},b.toString=function(){return"[ColorMatrix]"},b._multiplyMatrix=function(a){var b,c,d,e=[];for(b=0;5>b;b++){for(c=0;5>c;c++)e[c]=this[c+5*b];for(c=0;5>c;c++){var f=0;for(d=0;5>d;d++)f+=a[c+5*d]*e[d];this[c+5*b]=f}}},b._cleanValue=function(a,b){return Math.min(b,Math.max(-b,a))},b._fixMatrix=function(b){return b instanceof a&&(b=b.toArray()),b.length<a.LENGTH?b=b.slice(0,b.length).concat(a.IDENTITY_MATRIX.slice(b.length,a.LENGTH)):b.length>a.LENGTH&&(b=b.slice(0,a.LENGTH)),b},createjs.ColorMatrix=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.matrix=a}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorMatrixFilter]"},b.clone=function(){return new a(this.matrix)},b._applyFilter=function(a){for(var b,c,d,e,f=a.data,g=f.length,h=this.matrix,i=h[0],j=h[1],k=h[2],l=h[3],m=h[4],n=h[5],o=h[6],p=h[7],q=h[8],r=h[9],s=h[10],t=h[11],u=h[12],v=h[13],w=h[14],x=h[15],y=h[16],z=h[17],A=h[18],B=h[19],C=0;g>C;C+=4)b=f[C],c=f[C+1],d=f[C+2],e=f[C+3],f[C]=b*i+c*j+d*k+e*l+m,f[C+1]=b*n+c*o+d*p+e*q+r,f[C+2]=b*s+c*t+d*u+e*v+w,f[C+3]=b*x+c*y+d*z+e*A+B;return!0},createjs.ColorMatrixFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Touch cannot be instantiated"}a.isSupported=function(){return!!("ontouchstart"in window||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0)},a.enable=function(b,c,d){return b&&b.canvas&&a.isSupported()?b.__touch?!0:(b.__touch={pointers:{},multitouch:!c,preventDefault:!d,count:0},"ontouchstart"in window?a._IOS_enable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_enable(b),!0):!1},a.disable=function(b){b&&("ontouchstart"in window?a._IOS_disable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_disable(b),delete b.__touch)},a._IOS_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IOS_handleEvent(b,c)};c.addEventListener("touchstart",d,!1),c.addEventListener("touchmove",d,!1),c.addEventListener("touchend",d,!1),c.addEventListener("touchcancel",d,!1)},a._IOS_disable=function(a){var b=a.canvas;if(b){var c=a.__touch.f;b.removeEventListener("touchstart",c,!1),b.removeEventListener("touchmove",c,!1),b.removeEventListener("touchend",c,!1),b.removeEventListener("touchcancel",c,!1)}},a._IOS_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();for(var c=b.changedTouches,d=b.type,e=0,f=c.length;f>e;e++){var g=c[e],h=g.identifier;g.target==a.canvas&&("touchstart"==d?this._handleStart(a,h,b,g.pageX,g.pageY):"touchmove"==d?this._handleMove(a,h,b,g.pageX,g.pageY):("touchend"==d||"touchcancel"==d)&&this._handleEnd(a,h,b))}}},a._IE_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IE_handleEvent(b,c)};void 0===window.navigator.pointerEnabled?(c.addEventListener("MSPointerDown",d,!1),window.addEventListener("MSPointerMove",d,!1),window.addEventListener("MSPointerUp",d,!1),window.addEventListener("MSPointerCancel",d,!1),b.__touch.preventDefault&&(c.style.msTouchAction="none")):(c.addEventListener("pointerdown",d,!1),window.addEventListener("pointermove",d,!1),window.addEventListener("pointerup",d,!1),window.addEventListener("pointercancel",d,!1),b.__touch.preventDefault&&(c.style.touchAction="none")),b.__touch.activeIDs={}},a._IE_disable=function(a){var b=a.__touch.f;void 0===window.navigator.pointerEnabled?(window.removeEventListener("MSPointerMove",b,!1),window.removeEventListener("MSPointerUp",b,!1),window.removeEventListener("MSPointerCancel",b,!1),a.canvas&&a.canvas.removeEventListener("MSPointerDown",b,!1)):(window.removeEventListener("pointermove",b,!1),window.removeEventListener("pointerup",b,!1),window.removeEventListener("pointercancel",b,!1),a.canvas&&a.canvas.removeEventListener("pointerdown",b,!1))},a._IE_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();var c=b.type,d=b.pointerId,e=a.__touch.activeIDs;if("MSPointerDown"==c||"pointerdown"==c){if(b.srcElement!=a.canvas)return;e[d]=!0,this._handleStart(a,d,b,b.pageX,b.pageY)}else e[d]&&("MSPointerMove"==c||"pointermove"==c?this._handleMove(a,d,b,b.pageX,b.pageY):("MSPointerUp"==c||"MSPointerCancel"==c||"pointerup"==c||"pointercancel"==c)&&(delete e[d],this._handleEnd(a,d,b)))}},a._handleStart=function(a,b,c,d,e){var f=a.__touch;if(f.multitouch||!f.count){var g=f.pointers;g[b]||(g[b]=!0,f.count++,a._handlePointerDown(b,c,d,e))}},a._handleMove=function(a,b,c,d,e){a.__touch.pointers[b]&&a._handlePointerMove(b,c,d,e)},a._handleEnd=function(a,b,c){var d=a.__touch,e=d.pointers;e[b]&&(d.count--,a._handlePointerUp(b,c,!0),delete e[b])},createjs.Touch=a}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.EaselJS=createjs.EaselJS||{};a.version="0.8.2",a.buildDate="Thu, 26 Nov 2015 20:44:34 GMT"}();
	
	
	/*!
	* @license TweenJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	this.createjs=this.createjs||{},createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},function(){"use strict";function Event(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var a=Event.prototype;a.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},a.stopPropagation=function(){this.propagationStopped=!0},a.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},a.remove=function(){this.removed=!0},a.clone=function(){return new Event(this.type,this.bubbles,this.cancelable)},a.set=function(a){for(var b in a)this[b]=a[b];return this},a.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=Event}(),this.createjs=this.createjs||{},function(){"use strict";function EventDispatcher(){this._listeners=null,this._captureListeners=null}var a=EventDispatcher.prototype;EventDispatcher.initialize=function(b){b.addEventListener=a.addEventListener,b.on=a.on,b.removeEventListener=b.off=a.removeEventListener,b.removeAllEventListeners=a.removeAllEventListeners,b.hasEventListener=a.hasEventListener,b.dispatchEvent=a.dispatchEvent,b._dispatchEvent=a._dispatchEvent,b.willTrigger=a.willTrigger},a.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},a.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},a.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},a.off=a.removeEventListener,a.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},a.dispatchEvent=function(a,b,c){if("string"==typeof a){var d=this._listeners;if(!(b||d&&d[a]))return!0;a=new createjs.Event(a,b,c)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(e){}if(a.bubbles&&this.parent){for(var f=this,g=[f];f.parent;)g.push(f=f.parent);var h,i=g.length;for(h=i-1;h>=0&&!a.propagationStopped;h--)g[h]._dispatchEvent(a,1+(0==h));for(h=1;i>h&&!a.propagationStopped;h++)g[h]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return!a.defaultPrevented},a.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},a.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},a.toString=function(){return"[EventDispatcher]"},a._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;try{a.currentTarget=this}catch(f){}try{a.eventPhase=b}catch(f){}a.removed=!1,e=e.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=e[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}},createjs.EventDispatcher=EventDispatcher}(),this.createjs=this.createjs||{},function(){"use strict";function Ticker(){throw"Ticker cannot be instantiated."}Ticker.RAF_SYNCHED="synched",Ticker.RAF="raf",Ticker.TIMEOUT="timeout",Ticker.useRAF=!1,Ticker.timingMode=null,Ticker.maxDelta=0,Ticker.paused=!1,Ticker.removeEventListener=null,Ticker.removeAllEventListeners=null,Ticker.dispatchEvent=null,Ticker.hasEventListener=null,Ticker._listeners=null,createjs.EventDispatcher.initialize(Ticker),Ticker._addEventListener=Ticker.addEventListener,Ticker.addEventListener=function(){return!Ticker._inited&&Ticker.init(),Ticker._addEventListener.apply(Ticker,arguments)},Ticker._inited=!1,Ticker._startTime=0,Ticker._pausedTime=0,Ticker._ticks=0,Ticker._pausedTicks=0,Ticker._interval=50,Ticker._lastTime=0,Ticker._times=null,Ticker._tickTimes=null,Ticker._timerId=null,Ticker._raf=!0,Ticker.setInterval=function(a){Ticker._interval=a,Ticker._inited&&Ticker._setupTick()},Ticker.getInterval=function(){return Ticker._interval},Ticker.setFPS=function(a){Ticker.setInterval(1e3/a)},Ticker.getFPS=function(){return 1e3/Ticker._interval};try{Object.defineProperties(Ticker,{interval:{get:Ticker.getInterval,set:Ticker.setInterval},framerate:{get:Ticker.getFPS,set:Ticker.setFPS}})}catch(a){console.log(a)}Ticker.init=function(){Ticker._inited||(Ticker._inited=!0,Ticker._times=[],Ticker._tickTimes=[],Ticker._startTime=Ticker._getTime(),Ticker._times.push(Ticker._lastTime=0),Ticker.interval=Ticker._interval)},Ticker.reset=function(){if(Ticker._raf){var a=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame;a&&a(Ticker._timerId)}else clearTimeout(Ticker._timerId);Ticker.removeAllEventListeners("tick"),Ticker._timerId=Ticker._times=Ticker._tickTimes=null,Ticker._startTime=Ticker._lastTime=Ticker._ticks=0,Ticker._inited=!1},Ticker.getMeasuredTickTime=function(a){var b=0,c=Ticker._tickTimes;if(!c||c.length<1)return-1;a=Math.min(c.length,a||0|Ticker.getFPS());for(var d=0;a>d;d++)b+=c[d];return b/a},Ticker.getMeasuredFPS=function(a){var b=Ticker._times;return!b||b.length<2?-1:(a=Math.min(b.length-1,a||0|Ticker.getFPS()),1e3/((b[0]-b[a])/a))},Ticker.setPaused=function(a){Ticker.paused=a},Ticker.getPaused=function(){return Ticker.paused},Ticker.getTime=function(a){return Ticker._startTime?Ticker._getTime()-(a?Ticker._pausedTime:0):-1},Ticker.getEventTime=function(a){return Ticker._startTime?(Ticker._lastTime||Ticker._startTime)-(a?Ticker._pausedTime:0):-1},Ticker.getTicks=function(a){return Ticker._ticks-(a?Ticker._pausedTicks:0)},Ticker._handleSynch=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._getTime()-Ticker._lastTime>=.97*(Ticker._interval-1)&&Ticker._tick()},Ticker._handleRAF=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._tick()},Ticker._handleTimeout=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._tick()},Ticker._setupTick=function(){if(null==Ticker._timerId){var a=Ticker.timingMode||Ticker.useRAF&&Ticker.RAF_SYNCHED;if(a==Ticker.RAF_SYNCHED||a==Ticker.RAF){var b=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(b)return Ticker._timerId=b(a==Ticker.RAF?Ticker._handleRAF:Ticker._handleSynch),void(Ticker._raf=!0)}Ticker._raf=!1,Ticker._timerId=setTimeout(Ticker._handleTimeout,Ticker._interval)}},Ticker._tick=function(){var a=Ticker.paused,b=Ticker._getTime(),c=b-Ticker._lastTime;if(Ticker._lastTime=b,Ticker._ticks++,a&&(Ticker._pausedTicks++,Ticker._pausedTime+=c),Ticker.hasEventListener("tick")){var d=new createjs.Event("tick"),e=Ticker.maxDelta;d.delta=e&&c>e?e:c,d.paused=a,d.time=b,d.runTime=b-Ticker._pausedTime,Ticker.dispatchEvent(d)}for(Ticker._tickTimes.unshift(Ticker._getTime()-b);Ticker._tickTimes.length>100;)Ticker._tickTimes.pop();for(Ticker._times.unshift(b);Ticker._times.length>100;)Ticker._times.pop()};var b=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);Ticker._getTime=function(){return(b&&b.call(performance)||(new Date).getTime())-Ticker._startTime},createjs.Ticker=Ticker}(),this.createjs=this.createjs||{},function(){"use strict";function Tween(a,b,c){this.ignoreGlobalPause=!1,this.loop=!1,this.duration=0,this.pluginData=c||{},this.target=a,this.position=null,this.passive=!1,this._paused=!1,this._curQueueProps={},this._initQueueProps={},this._steps=[],this._actions=[],this._prevPosition=0,this._stepPosition=0,this._prevPos=-1,this._target=a,this._useTicks=!1,this._inited=!1,this._registered=!1,b&&(this._useTicks=b.useTicks,this.ignoreGlobalPause=b.ignoreGlobalPause,this.loop=b.loop,b.onChange&&this.addEventListener("change",b.onChange),b.override&&Tween.removeTweens(a)),b&&b.paused?this._paused=!0:createjs.Tween._register(this,!0),b&&null!=b.position&&this.setPosition(b.position,Tween.NONE)}var a=createjs.extend(Tween,createjs.EventDispatcher);Tween.NONE=0,Tween.LOOP=1,Tween.REVERSE=2,Tween.IGNORE={},Tween._tweens=[],Tween._plugins={},Tween.get=function(a,b,c,d){return d&&Tween.removeTweens(a),new Tween(a,b,c)},Tween.tick=function(a,b){for(var c=Tween._tweens.slice(),d=c.length-1;d>=0;d--){var e=c[d];b&&!e.ignoreGlobalPause||e._paused||e.tick(e._useTicks?1:a)}},Tween.handleEvent=function(a){"tick"==a.type&&this.tick(a.delta,a.paused)},Tween.removeTweens=function(a){if(a.tweenjs_count){for(var b=Tween._tweens,c=b.length-1;c>=0;c--){var d=b[c];d._target==a&&(d._paused=!0,b.splice(c,1))}a.tweenjs_count=0}},Tween.removeAllTweens=function(){for(var a=Tween._tweens,b=0,c=a.length;c>b;b++){var d=a[b];d._paused=!0,d.target&&(d.target.tweenjs_count=0)}a.length=0},Tween.hasActiveTweens=function(a){return a?null!=a.tweenjs_count&&!!a.tweenjs_count:Tween._tweens&&!!Tween._tweens.length},Tween.installPlugin=function(a,b){var c=a.priority;null==c&&(a.priority=c=0);for(var d=0,e=b.length,f=Tween._plugins;e>d;d++){var g=b[d];if(f[g]){for(var h=f[g],i=0,j=h.length;j>i&&!(c<h[i].priority);i++);f[g].splice(i,0,a)}else f[g]=[a]}},Tween._register=function(a,b){var c=a._target,d=Tween._tweens;if(b&&!a._registered)c&&(c.tweenjs_count=c.tweenjs_count?c.tweenjs_count+1:1),d.push(a),!Tween._inited&&createjs.Ticker&&(createjs.Ticker.addEventListener("tick",Tween),Tween._inited=!0);else if(!b&&a._registered){c&&c.tweenjs_count--;for(var e=d.length;e--;)if(d[e]==a){d.splice(e,1);break}}a._registered=b},a.wait=function(a,b){if(null==a||0>=a)return this;var c=this._cloneProps(this._curQueueProps);return this._addStep({d:a,p0:c,e:this._linearEase,p1:c,v:b})},a.to=function(a,b,c){return(isNaN(b)||0>b)&&(b=0),this._addStep({d:b||0,p0:this._cloneProps(this._curQueueProps),e:c,p1:this._cloneProps(this._appendQueueProps(a))})},a.call=function(a,b,c){return this._addAction({f:a,p:b?b:[this],o:c?c:this._target})},a.set=function(a,b){return this._addAction({f:this._set,o:this,p:[a,b?b:this._target]})},a.play=function(a){return a||(a=this),this.call(a.setPaused,[!1],a)},a.pause=function(a){return a||(a=this),this.call(a.setPaused,[!0],a)},a.setPosition=function(a,b){0>a&&(a=0),null==b&&(b=1);var c=a,d=!1;if(c>=this.duration&&(this.loop?c%=this.duration:(c=this.duration,d=!0)),c==this._prevPos)return d;var e=this._prevPos;if(this.position=this._prevPos=c,this._prevPosition=a,this._target)if(d)this._updateTargetProps(null,1);else if(this._steps.length>0){for(var f=0,g=this._steps.length;g>f&&!(this._steps[f].t>c);f++);var h=this._steps[f-1];this._updateTargetProps(h,(this._stepPosition=c-h.t)/h.d)}return 0!=b&&this._actions.length>0&&(this._useTicks?this._runActions(c,c):1==b&&e>c?(e!=this.duration&&this._runActions(e,this.duration),this._runActions(0,c,!0)):this._runActions(e,c)),d&&this.setPaused(!0),this.dispatchEvent("change"),d},a.tick=function(a){this._paused||this.setPosition(this._prevPosition+a)},a.setPaused=function(a){return this._paused===!!a?this:(this._paused=!!a,Tween._register(this,!a),this)},a.w=a.wait,a.t=a.to,a.c=a.call,a.s=a.set,a.toString=function(){return"[Tween]"},a.clone=function(){throw"Tween can not be cloned."},a._updateTargetProps=function(a,b){var c,d,e,f,g,h;if(a||1!=b){if(this.passive=!!a.v,this.passive)return;a.e&&(b=a.e(b,0,1,1)),c=a.p0,d=a.p1}else this.passive=!1,c=d=this._curQueueProps;for(var i in this._initQueueProps){null==(f=c[i])&&(c[i]=f=this._initQueueProps[i]),null==(g=d[i])&&(d[i]=g=f),e=f==g||0==b||1==b||"number"!=typeof f?1==b?g:f:f+(g-f)*b;var j=!1;if(h=Tween._plugins[i])for(var k=0,l=h.length;l>k;k++){var m=h[k].tween(this,i,e,c,d,b,!!a&&c==d,!a);m==Tween.IGNORE?j=!0:e=m}j||(this._target[i]=e)}},a._runActions=function(a,b,c){var d=a,e=b,f=-1,g=this._actions.length,h=1;for(a>b&&(d=b,e=a,f=g,g=h=-1);(f+=h)!=g;){var i=this._actions[f],j=i.t;(j==e||j>d&&e>j||c&&j==a)&&i.f.apply(i.o,i.p)}},a._appendQueueProps=function(a){var b,c,d,e,f;for(var g in a)if(void 0===this._initQueueProps[g]){if(c=this._target[g],b=Tween._plugins[g])for(d=0,e=b.length;e>d;d++)c=b[d].init(this,g,c);this._initQueueProps[g]=this._curQueueProps[g]=void 0===c?null:c}else c=this._curQueueProps[g];for(var g in a){if(c=this._curQueueProps[g],b=Tween._plugins[g])for(f=f||{},d=0,e=b.length;e>d;d++)b[d].step&&b[d].step(this,g,c,a[g],f);this._curQueueProps[g]=a[g]}return f&&this._appendQueueProps(f),this._curQueueProps},a._cloneProps=function(a){var b={};for(var c in a)b[c]=a[c];return b},a._addStep=function(a){return a.d>0&&(this._steps.push(a),a.t=this.duration,this.duration+=a.d),this},a._addAction=function(a){return a.t=this.duration,this._actions.push(a),this},a._set=function(a,b){for(var c in a)b[c]=a[c]},createjs.Tween=createjs.promote(Tween,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function Timeline(a,b,c){this.EventDispatcher_constructor(),this.ignoreGlobalPause=!1,this.duration=0,this.loop=!1,this.position=null,this._paused=!1,this._tweens=[],this._labels=null,this._labelList=null,this._prevPosition=0,this._prevPos=-1,this._useTicks=!1,this._registered=!1,c&&(this._useTicks=c.useTicks,this.loop=c.loop,this.ignoreGlobalPause=c.ignoreGlobalPause,c.onChange&&this.addEventListener("change",c.onChange)),a&&this.addTween.apply(this,a),this.setLabels(b),c&&c.paused?this._paused=!0:createjs.Tween._register(this,!0),c&&null!=c.position&&this.setPosition(c.position,createjs.Tween.NONE)}var a=createjs.extend(Timeline,createjs.EventDispatcher);a.addTween=function(a){var b=arguments.length;if(b>1){for(var c=0;b>c;c++)this.addTween(arguments[c]);return arguments[0]}return 0==b?null:(this.removeTween(a),this._tweens.push(a),a.setPaused(!0),a._paused=!1,a._useTicks=this._useTicks,a.duration>this.duration&&(this.duration=a.duration),this._prevPos>=0&&a.setPosition(this._prevPos,createjs.Tween.NONE),a)},a.removeTween=function(a){var b=arguments.length;if(b>1){for(var c=!0,d=0;b>d;d++)c=c&&this.removeTween(arguments[d]);return c}if(0==b)return!1;for(var e=this._tweens,d=e.length;d--;)if(e[d]==a)return e.splice(d,1),a.duration>=this.duration&&this.updateDuration(),!0;return!1},a.addLabel=function(a,b){this._labels[a]=b;var c=this._labelList;if(c){for(var d=0,e=c.length;e>d&&!(b<c[d].position);d++);c.splice(d,0,{label:a,position:b})}},a.setLabels=function(a){this._labels=a?a:{}},a.getLabels=function(){var a=this._labelList;if(!a){a=this._labelList=[];var b=this._labels;for(var c in b)a.push({label:c,position:b[c]});a.sort(function(a,b){return a.position-b.position})}return a},a.getCurrentLabel=function(){var a=this.getLabels(),b=this.position,c=a.length;if(c){for(var d=0;c>d&&!(b<a[d].position);d++);return 0==d?null:a[d-1].label}return null},a.gotoAndPlay=function(a){this.setPaused(!1),this._goto(a)},a.gotoAndStop=function(a){this.setPaused(!0),this._goto(a)},a.setPosition=function(a,b){var c=this._calcPosition(a),d=!this.loop&&a>=this.duration;if(c==this._prevPos)return d;this._prevPosition=a,this.position=this._prevPos=c;for(var e=0,f=this._tweens.length;f>e;e++)if(this._tweens[e].setPosition(c,b),c!=this._prevPos)return!1;return d&&this.setPaused(!0),this.dispatchEvent("change"),d},a.setPaused=function(a){this._paused=!!a,createjs.Tween._register(this,!a)},a.updateDuration=function(){this.duration=0;for(var a=0,b=this._tweens.length;b>a;a++){var c=this._tweens[a];c.duration>this.duration&&(this.duration=c.duration)}},a.tick=function(a){this.setPosition(this._prevPosition+a)},a.resolve=function(a){var b=Number(a);return isNaN(b)&&(b=this._labels[a]),b},a.toString=function(){return"[Timeline]"},a.clone=function(){throw"Timeline can not be cloned."},a._goto=function(a){var b=this.resolve(a);null!=b&&this.setPosition(b)},a._calcPosition=function(a){return 0>a?0:a<this.duration?a:this.loop?a%this.duration:this.duration},createjs.Timeline=createjs.promote(Timeline,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function Ease(){throw"Ease cannot be instantiated."}Ease.linear=function(a){return a},Ease.none=Ease.linear,Ease.get=function(a){return-1>a&&(a=-1),a>1&&(a=1),function(b){return 0==a?b:0>a?b*(b*-a+1+a):b*((2-b)*a+(1-a))}},Ease.getPowIn=function(a){return function(b){return Math.pow(b,a)}},Ease.getPowOut=function(a){return function(b){return 1-Math.pow(1-b,a)}},Ease.getPowInOut=function(a){return function(b){return(b*=2)<1?.5*Math.pow(b,a):1-.5*Math.abs(Math.pow(2-b,a))}},Ease.quadIn=Ease.getPowIn(2),Ease.quadOut=Ease.getPowOut(2),Ease.quadInOut=Ease.getPowInOut(2),Ease.cubicIn=Ease.getPowIn(3),Ease.cubicOut=Ease.getPowOut(3),Ease.cubicInOut=Ease.getPowInOut(3),Ease.quartIn=Ease.getPowIn(4),Ease.quartOut=Ease.getPowOut(4),Ease.quartInOut=Ease.getPowInOut(4),Ease.quintIn=Ease.getPowIn(5),Ease.quintOut=Ease.getPowOut(5),Ease.quintInOut=Ease.getPowInOut(5),Ease.sineIn=function(a){return 1-Math.cos(a*Math.PI/2)},Ease.sineOut=function(a){return Math.sin(a*Math.PI/2)},Ease.sineInOut=function(a){return-.5*(Math.cos(Math.PI*a)-1)},Ease.getBackIn=function(a){return function(b){return b*b*((a+1)*b-a)}},Ease.backIn=Ease.getBackIn(1.7),Ease.getBackOut=function(a){return function(b){return--b*b*((a+1)*b+a)+1}},Ease.backOut=Ease.getBackOut(1.7),Ease.getBackInOut=function(a){return a*=1.525,function(b){return(b*=2)<1?.5*b*b*((a+1)*b-a):.5*((b-=2)*b*((a+1)*b+a)+2)}},Ease.backInOut=Ease.getBackInOut(1.7),Ease.circIn=function(a){return-(Math.sqrt(1-a*a)-1)},Ease.circOut=function(a){return Math.sqrt(1- --a*a)},Ease.circInOut=function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},Ease.bounceIn=function(a){return 1-Ease.bounceOut(1-a)},Ease.bounceOut=function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},Ease.bounceInOut=function(a){return.5>a?.5*Ease.bounceIn(2*a):.5*Ease.bounceOut(2*a-1)+.5},Ease.getElasticIn=function(a,b){var c=2*Math.PI;return function(d){if(0==d||1==d)return d;var e=b/c*Math.asin(1/a);return-(a*Math.pow(2,10*(d-=1))*Math.sin((d-e)*c/b))}},Ease.elasticIn=Ease.getElasticIn(1,.3),Ease.getElasticOut=function(a,b){var c=2*Math.PI;return function(d){if(0==d||1==d)return d;var e=b/c*Math.asin(1/a);return a*Math.pow(2,-10*d)*Math.sin((d-e)*c/b)+1}},Ease.elasticOut=Ease.getElasticOut(1,.3),Ease.getElasticInOut=function(a,b){var c=2*Math.PI;return function(d){var e=b/c*Math.asin(1/a);return(d*=2)<1?-.5*a*Math.pow(2,10*(d-=1))*Math.sin((d-e)*c/b):a*Math.pow(2,-10*(d-=1))*Math.sin((d-e)*c/b)*.5+1}},Ease.elasticInOut=Ease.getElasticInOut(1,.3*1.5),createjs.Ease=Ease}(),this.createjs=this.createjs||{},function(){"use strict";function MotionGuidePlugin(){throw"MotionGuidePlugin cannot be instantiated."}MotionGuidePlugin.priority=0,MotionGuidePlugin._rotOffS,MotionGuidePlugin._rotOffE,MotionGuidePlugin._rotNormS,MotionGuidePlugin._rotNormE,MotionGuidePlugin.install=function(){return createjs.Tween.installPlugin(MotionGuidePlugin,["guide","x","y","rotation"]),createjs.Tween.IGNORE},MotionGuidePlugin.init=function(a,b,c){var d=a.target;return d.hasOwnProperty("x")||(d.x=0),d.hasOwnProperty("y")||(d.y=0),d.hasOwnProperty("rotation")||(d.rotation=0),"rotation"==b&&(a.__needsRot=!0),"guide"==b?null:c},MotionGuidePlugin.step=function(a,b,c,d,e){if("rotation"==b&&(a.__rotGlobalS=c,a.__rotGlobalE=d,MotionGuidePlugin.testRotData(a,e)),"guide"!=b)return d;var f,g=d;g.hasOwnProperty("path")||(g.path=[]);var h=g.path;if(g.hasOwnProperty("end")||(g.end=1),g.hasOwnProperty("start")||(g.start=c&&c.hasOwnProperty("end")&&c.path===h?c.end:0),g.hasOwnProperty("_segments")&&g._length)return d;var i=h.length,j=10;if(!(i>=6&&(i-2)%4==0))throw"invalid 'path' data, please see documentation for valid paths";g._segments=[],g._length=0;for(var k=2;i>k;k+=4){for(var l,m,n=h[k-2],o=h[k-1],p=h[k+0],q=h[k+1],r=h[k+2],s=h[k+3],t=n,u=o,v=0,w=[],x=1;j>=x;x++){var y=x/j,z=1-y;l=z*z*n+2*z*y*p+y*y*r,m=z*z*o+2*z*y*q+y*y*s,v+=w[w.push(Math.sqrt((f=l-t)*f+(f=m-u)*f))-1],t=l,u=m}g._segments.push(v),g._segments.push(w),g._length+=v}f=g.orient,g.orient=!0;var A={};return MotionGuidePlugin.calc(g,g.start,A),a.__rotPathS=Number(A.rotation.toFixed(5)),MotionGuidePlugin.calc(g,g.end,A),a.__rotPathE=Number(A.rotation.toFixed(5)),g.orient=!1,MotionGuidePlugin.calc(g,g.end,e),g.orient=f,g.orient?(a.__guideData=g,MotionGuidePlugin.testRotData(a,e),d):d},MotionGuidePlugin.testRotData=function(a,b){if(void 0===a.__rotGlobalS||void 0===a.__rotGlobalE){if(a.__needsRot)return;a.__rotGlobalS=a.__rotGlobalE=void 0!==a._curQueueProps.rotation?a._curQueueProps.rotation:b.rotation=a.target.rotation||0}if(void 0!==a.__guideData){var c=a.__guideData,d=a.__rotGlobalE-a.__rotGlobalS,e=a.__rotPathE-a.__rotPathS,f=d-e;if("auto"==c.orient)f>180?f-=360:-180>f&&(f+=360);else if("cw"==c.orient){for(;0>f;)f+=360;0==f&&d>0&&180!=d&&(f+=360)}else if("ccw"==c.orient){for(f=d-(e>180?360-e:e);f>0;)f-=360;0==f&&0>d&&-180!=d&&(f-=360)}c.rotDelta=f,c.rotOffS=a.__rotGlobalS-a.__rotPathS,a.__rotGlobalS=a.__rotGlobalE=a.__guideData=a.__needsRot=void 0}},MotionGuidePlugin.tween=function(a,b,c,d,e,f,g){var h=e.guide;if(void 0==h||h===d.guide)return c;if(h.lastRatio!=f){var i=(h.end-h.start)*(g?h.end:f)+h.start;switch(MotionGuidePlugin.calc(h,i,a.target),h.orient){case"cw":case"ccw":case"auto":a.target.rotation+=h.rotOffS+h.rotDelta*f;break;case"fixed":default:a.target.rotation+=h.rotOffS}h.lastRatio=f}return"rotation"!=b||h.orient&&"false"!=h.orient?a.target[b]:c},MotionGuidePlugin.calc=function(a,b,c){if(void 0==a._segments)throw"Missing critical pre-calculated information, please file a bug";void 0==c&&(c={x:0,y:0,rotation:0});for(var d=a._segments,e=a.path,f=a._length*b,g=d.length-2,h=0;f>d[h]&&g>h;)f-=d[h],h+=2;var i=d[h+1],j=0;for(g=i.length-1;f>i[j]&&g>j;)f-=i[j],j++;var k=j/++g+f/(g*i[j]);h=2*h+2;var l=1-k;return c.x=l*l*e[h-2]+2*l*k*e[h+0]+k*k*e[h+2],c.y=l*l*e[h-1]+2*l*k*e[h+1]+k*k*e[h+3],a.orient&&(c.rotation=57.2957795*Math.atan2((e[h+1]-e[h-1])*l+(e[h+3]-e[h+1])*k,(e[h+0]-e[h-2])*l+(e[h+2]-e[h+0])*k)),c},createjs.MotionGuidePlugin=MotionGuidePlugin}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.TweenJS=createjs.TweenJS||{};a.version="0.6.2",a.buildDate="Thu, 26 Nov 2015 20:44:31 GMT"}();
	/*!
	* @license PreloadJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	/*!
	* @license SoundJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	
	module.exports=createjs;

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	module.exports = __webpack_require__(9).Number.isInteger;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(7);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(12)});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , core      = __webpack_require__(9)
	  , ctx       = __webpack_require__(10)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(11);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var createjs = __webpack_require__(2);
	function Loader(cls, totalNum, loaderNum) {
	    var link = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	
	    var self = this;
	    var canvas;
	    var images = images || {};
	    var ss = ss || {};
	    var lib = lib || {};
	    var canvasCls = cls;
	    var dtd;
	    var progress = 0;
	    var resArr = [];
	    var totalJson = totalNum || 0;
	    var preloadNum = loaderNum || 10;
	    var totalStep = 0;
	    var curStep = 0;
	    var resLength;
	    var curLoadNum = 0;
	    var isComplete = false;
	    var mc;
	    this.display = null;
	    this.progress = function () {
	        return progress;
	    };
	    this.init = function () {
	        dtd = $.Deferred();
	        canvas = __webpack_require__(17)("./" + canvasCls + ".js");
	        if (!link) {
	            lib = __webpack_require__(27)("./" + canvasCls + ".js");
	        }
	        var ssName;
	        var json;
	        for (var i = 0; i < totalJson; i++) {
	            ssName = i == 0 ? "_atlas_" : "_atlas_" + (i + 1);
	            json = __webpack_require__(37)("./" + canvasCls + "/" + canvasCls + ssName + ".json");
	            for (var j = 0; j < json.images.length; j++) {
	                var imgSplit = json.images[j].split("../");
	                json.images[j] = imgSplit.length > 1 ? imgSplit[1] : imgSplit[0];
	                resArr.push({ "id": "json", "src": json.images[j], "json": json });
	                json.images[j] = "flash/" + json.images[j];
	            }
	            ss[canvasCls + ssName] = new createjs.SpriteSheet(json);
	        }
	        canvas(lib, images, createjs, ss);
	        lib.properties.manifest = lib.properties.manifest.map(function (obj) {
	            var imgSplit = obj.src.split("../");
	            obj.src = imgSplit.length > 1 ? imgSplit[1] : imgSplit[0];
	            return obj;
	        });
	        lib.properties.manifest = lib.properties.manifest.filter(function (obj) {
	            if (obj.src.indexOf(".jpg") != -1 || obj.src.indexOf(".png") != -1) {
	                return obj;
	            }
	        });
	        resArr = resArr.concat(lib.properties.manifest);
	
	        loadInt();
	        return dtd.promise();
	    };
	    function loadInt() {
	        resLength = resArr.length;
	        totalStep = Math.ceil(resLength / preloadNum);
	        curStep = 1;
	        curLoadNum = 0;
	        startLoad(0);
	    }
	    function startLoad(id) {
	        var loadStepCount = 0;
	        for (var i = id; i < resLength && i < id + preloadNum; i++) {
	            var imgObj = new Image();
	            // console.log(i,resLength);
	            imgObj.onload = function () {
	                curLoadNum++;
	                loadStepCount++;
	                if (this.id != "json") {
	                    images[this.id] = this;
	                }
	                progress = parseInt(curLoadNum / resLength * 100);
	                dtd.notify(progress);
	
	                if (curLoadNum >= resLength) {
	                    if (!isComplete) {
	                        handleComplete();
	                    }
	                } else if (loadStepCount >= preloadNum) {
	                    startLoad(curLoadNum);
	                    // setTimeout(startLoad,400,curLoadNum);
	                }
	            };
	            // console.log(resArr[i]['src'])
	            imgObj.id = resArr[i]['id'];
	            var tempURL = resArr[i]['src'].split("images/")[1];
	            // console.log(tempURL,resArr[i]['src'])
	            // imgObj.src=require("../../flash/images/"+tempURL);
	            imgObj.src = "flash/" + resArr[i]['src'];
	        }
	    }
	    function handleComplete() {
	        isComplete = true;
	        // console.log('complete  '+ cls)
	        // var exportRoot = new lib[canvasCls]();
	        // self.display=exportRoot;
	
	        var mc = new lib[canvasCls]();
	        //if(lib['construct']){
	        //    lib.construct(mc);
	        //}
	        // createjs.extend(mc,lib[canvasCls];
	        dtd.resolve(lib);
	    }
	}
	var isArray = function isArray(obj) {
	    return Object.prototype.toString.call(obj) === '[object Array]';
	};
	var loadPromiseObj = [];
	var loadScene = function loadScene(scene) {
	
	    if (!isArray(scene)) {
	        var promise = new Loader(scene['name'], scene['jsonNum'], scene['preloadNum'], scene['link']).init();
	        loadPromiseObj[scene['name']] = promise;
	        return promise;
	    }
	    var tempArr = [];
	    for (var i = 0; i < scene.length; i++) {
	        var loader = new Loader(scene[i]['name'], scene[i]['jsonNum'], scene[i]['preloadNum'], scene[i]['link']);
	        var promise = loader.init();
	        loadPromiseObj[scene[i]['name']] = promise;
	        tempArr.push(promise);
	    }
	
	    return $.when.apply(this, tempArr);
	};
	module.exports.loadScene = loadScene;
	module.exports.loadPromiseObj = loadPromiseObj;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./p0.js": 18,
		"./p1.js": 19,
		"./p2.js": 20,
		"./p3.js": 21,
		"./p4.js": 22,
		"./p5.js": 23,
		"./p6.js": 24,
		"./p7.js": 25,
		"./p8.js": 26
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 17;


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = (function (lib, img, cjs, ss) {
	
	var p; // shortcut to reference prototypes
	
	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#FFFFFF",
		manifest: [
			{src:"images/p0/happy_615_1480581027148.png", id:"happy_615_1480581027148"}
		]
	};
	
	
	
	// symbols:
	
	
	
	(lib.happy_010_1480581027145 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_014_1480581027146 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_032_1480581027147 = function() {
		this.spriteSheet = ss["p0_atlas_3"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_048_1480581027139 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_094_1480581027151 = function() {
		this.spriteSheet = ss["p0_atlas_4"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_118_1480581027145 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_199_1480581027157 = function() {
		this.spriteSheet = ss["p0_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_220_1480581027149 = function() {
		this.spriteSheet = ss["p0_atlas_5"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_232_1480581027146 = function() {
		this.spriteSheet = ss["p0_atlas_7"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_255_1480581027143 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_262_1480581027142 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_370_1480581027140 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_411_1480581027152 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_423_1480581027154 = function() {
		this.spriteSheet = ss["p0_atlas_4"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_473_1480581027148 = function() {
		this.spriteSheet = ss["p0_atlas_7"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_492_1480581027152 = function() {
		this.spriteSheet = ss["p0_atlas_7"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_537_1480581027153 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_583_1480581027139 = function() {
		this.spriteSheet = ss["p0_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_590_1480581027148 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_615_1480581027148 = function() {
		this.initialize(img.happy_615_1480581027148);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,949);
	
	
	(lib.happy_729_1480581027145 = function() {
		this.spriteSheet = ss["p0_atlas_5"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_729_1480581027150 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_743_1480581027143 = function() {
		this.spriteSheet = ss["p0_atlas_6"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_783_1480581027150 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_799_1480581027147 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_804_1480581027155 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_807_1480581027156 = function() {
		this.spriteSheet = ss["p0_atlas_6"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_899_1480581027149 = function() {
		this.spriteSheet = ss["p0_atlas_8"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_926_1480581027140 = function() {
		this.spriteSheet = ss["p0_atlas_7"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_930_1480581027139 = function() {
		this.spriteSheet = ss["p0_atlas_7"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_950_1480581027144 = function() {
		this.spriteSheet = ss["p0_atlas_7"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_963_1480581027133 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_473_1480581027148();
		this.instance.setTransform(51.3,26.1,1.336,1.336);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(51.3,26.1,288.6,439.6);
	
	
	(lib.happy_939_1480581027133 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_094_1480581027151();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,406,481);
	
	
	(lib.happy_803_1480581027134 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_232_1480581027146();
		this.instance.setTransform(350.4,42.1,1.328,1.328,0,0,180);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(70.2,42.1,280.2,422.3);
	
	
	(lib.happy_461_1480581027138 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_199_1480581027157();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);
	
	
	(lib.happy_531_1480581027133 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_950_1480581027144();
		this.instance.setTransform(376.5,40.7,1.271,1.271,0,0,180);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(67.6,40.7,309,414.5);
	
	
	(lib.happy_895_1480581027130 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_615_1480581027148();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,949);
	
	
	(lib.happy_699_1480581027136 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_220_1480581027149();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,428,426);
	
	
	(lib.happy_410_1480581027137 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_807_1480581027156();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,390,390);
	
	
	(lib.happy_304_1480581027137 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_032_1480581027147();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,599,592);
	
	
	(lib.happy_169_1480581027137 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_423_1480581027154();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,432,429);
	
	
	(lib.happy_943_1480581027134 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_048_1480581027139();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,62,131);
	
	
	(lib.happy_832_1480581027134 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_255_1480581027143();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,55,131);
	
	
	(lib.happy_586_1480581027135 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_804_1480581027155();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,240,219);
	
	
	(lib.happy_556_1480581027134 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_926_1480581027140();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,289,201);
	
	
	(lib.happy_508_1480581027134 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_010_1480581027145();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,121,119);
	
	
	(lib.happy_411_1480581027135 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_729_1480581027145();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,419,381);
	
	
	(lib.happy_324_1480581027135 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_899_1480581027149();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,138,129);
	
	
	(lib.happy_272_1480581027135 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_262_1480581027142();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,165,152);
	
	
	(lib.happy_245_1480581027134 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_370_1480581027140();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,178,166);
	
	
	(lib.happy_222_1480581027135 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_411_1480581027152();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,197,176);
	
	
	(lib.happy_681_1480581027138 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_950_1480581027144();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,243,326);
	
	
	(lib.happy_610_1480581027138 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_232_1480581027146();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,211,318);
	
	
	(lib.happy_094_1480581027138 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_473_1480581027148();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,216,329);
	
	
	(lib.happy_954_1480581027132 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_729_1480581027150();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,58,41);
	
	
	(lib.happy_734_1480581027130 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_799_1480581027147();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,90,88);
	
	
	(lib.happy_721_1480581027132 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_783_1480581027150();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,61,64);
	
	
	(lib.happy_548_1480581027131 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_930_1480581027139();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,357,308);
	
	
	(lib.happy_203_1480581027131 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_743_1480581027143();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,341,341);
	
	
	(lib.happy_074_1480581027131 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_492_1480581027152();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,262,263);
	
	
	(lib.happy_400_1480581027133 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_118_1480581027145();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,262,63);
	
	
	(lib.happy_809_1480581027132 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_590_1480581027148();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,103,89);
	
	
	(lib.happy_758_1480581027132 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_014_1480581027146();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,72,86);
	
	
	(lib.happy_202_1480581027132 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_537_1480581027153();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,57,62);
	
	
	(lib.happy_958_1480581027138 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_461_1480581027138();
		this.instance.setTransform(-320,0,1,1,0,0,0,320,520);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-640,-520,1280,1040);
	
	
	(lib.happy_845_1480581027136 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_681_1480581027138();
		this.instance.setTransform(227.7,250.1,1.368,1.368,0,0,180,121.5,163);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(61.4,27,332.6,446.1);
	
	
	(lib.happy_678_1480581027130 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_094_1480581027138();
		this.instance.setTransform(197.7,245.1,1.319,1.319,0.9,0,0,108,164.5);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(51.6,25.7,292.2,438.8);
	
	
	(lib.happy_551_1480581027130 = function() {
		this.initialize();
	
		// Layer 3
		this.instance = new lib.happy_610_1480581027138();
		this.instance.setTransform(205.9,248.3,1.417,1.417,0,0,180,105.5,159);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(56.5,23,298.9,450.5);
	
	
	(lib.happy_542_1480581027134 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_556_1480581027134();
		this.instance.setTransform(282.1,107,0.803,0.803,0,0,0,144.6,100.6);
	
		this.instance_1 = new lib.happy_943_1480581027134();
		this.instance_1.setTransform(523,64.6,0.803,0.803,0,0,0,31,65.5);
	
		this.instance_2 = new lib.happy_832_1480581027134();
		this.instance_2.setTransform(488,52.6,0.803,0.803,0,0,0,27.5,65.4);
	
		this.instance_3 = new lib.happy_222_1480581027135();
		this.instance_3.setTransform(403.6,72,0.803,0.803,0,0,0,98.5,88);
	
		this.instance_4 = new lib.happy_245_1480581027134();
		this.instance_4.setTransform(331.4,227.1,0.803,0.803,0,0,0,89,83);
	
		this.instance_5 = new lib.happy_272_1480581027135();
		this.instance_5.setTransform(227.4,231.1,0.803,0.803,0,0,0,82.4,76);
	
		this.instance_6 = new lib.happy_324_1480581027135();
		this.instance_6.setTransform(428.7,197.8,0.803,0.803,0,0,0,69,64.5);
	
		this.instance_7 = new lib.happy_508_1480581027134();
		this.instance_7.setTransform(515,201,0.803,0.803,0,0,0,60.5,59.5);
	
		this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,563.6,293.8);
	
	
	(lib.happy_467_1480581027136 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.instance = new lib.happy_895_1480581027130();
		this.instance.setTransform(527,574.5,1,1,180,0,0,527,474.5);
		this.instance.alpha = 0.371;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({alpha:0.371},20).wait(1));
	
		// Layer 1
		this.instance_1 = new lib.happy_895_1480581027130();
		this.instance_1.setTransform(527,474.5,1,1,0,0,0,527,474.5);
		this.instance_1.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},19).to({alpha:0},20).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,1049);
	
	
	(lib.happy_328_1480581027136 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 18
		this.instance = new lib.happy_809_1480581027132();
		this.instance.setTransform(544.1,-24.1,1,1,0,0,0,51.5,44.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14.2,x:545,y:-3.1},15,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,rotation:-13.3,x:544.9,y:-4.4},0).to({scaleX:1,scaleY:1,rotation:0,x:544.1,y:-24.1},15,cjs.Ease.get(1)).wait(1).to({rotation:-14.2,x:545,y:-3.1},15,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,rotation:-13.3,x:544.9,y:-4.4},0).to({scaleX:1,scaleY:1,rotation:0,x:544.1,y:-24.1},15,cjs.Ease.get(1)).wait(1));
	
		// bricks loose
		this.instance_1 = new lib.happy_202_1480581027132();
		this.instance_1.setTransform(551.8,156.8,0.983,0.983,-26.9,0,0,28.5,30.9);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:28.4,rotation:-9,x:551.7,y:141.9},15,cjs.Ease.get(1)).wait(1).to({regX:28.5,scaleX:0.98,scaleY:0.98,rotation:-10,x:551.8,y:142.8},0).to({scaleX:0.98,scaleY:0.98,rotation:-26.9,y:156.8},15,cjs.Ease.get(1)).wait(1).to({regX:28.4,rotation:-9,x:551.7,y:141.9},15,cjs.Ease.get(1)).wait(1).to({regX:28.5,scaleX:0.98,scaleY:0.98,rotation:-10,x:551.8,y:142.8},0).to({scaleX:0.98,scaleY:0.98,rotation:-26.9,y:156.8},15,cjs.Ease.get(1)).wait(1));
	
		// 图层 12
		this.instance_2 = new lib.happy_954_1480581027132();
		this.instance_2.setTransform(405.6,257.3,1,1,0,0,0,29,20.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:29.1,regY:20.4,rotation:15,x:406.7,y:266.4},15,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,rotation:14,x:406.6,y:265.9},0).to({regX:29,regY:20.5,scaleX:1,scaleY:1,rotation:0,x:405.6,y:257.3},15,cjs.Ease.get(1)).wait(1).to({regX:29.1,regY:20.4,rotation:15,x:406.7,y:266.4},15,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,rotation:14,x:406.6,y:265.9},0).to({regX:29,regY:20.5,scaleX:1,scaleY:1,rotation:0,x:405.6,y:257.3},15,cjs.Ease.get(1)).wait(1));
	
		// 图层 13
		this.instance_3 = new lib.happy_721_1480581027132();
		this.instance_3.setTransform(44.8,224,1,1,0,0,0,30.5,32);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:31.9,rotation:24.2,x:41,y:202},15,cjs.Ease.get(1)).wait(1).to({regX:30.6,regY:32,scaleX:1,scaleY:1,rotation:22.6,x:41.3,y:203.5},0).to({regX:30.5,scaleX:1,scaleY:1,rotation:0,x:44.8,y:224},15,cjs.Ease.get(1)).wait(1).to({regY:31.9,rotation:24.2,x:41,y:202},15,cjs.Ease.get(1)).wait(1).to({regX:30.6,regY:32,scaleX:1,scaleY:1,rotation:22.6,x:41.3,y:203.5},0).to({regX:30.5,scaleX:1,scaleY:1,rotation:0,x:44.8,y:224},15,cjs.Ease.get(1)).wait(1));
	
		// 翻
		this.instance_4 = new lib.happy_586_1480581027135();
		this.instance_4.setTransform(96.4,95,0.803,0.803,0,0,0,120,109.6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-360},32,cjs.Ease.get(1)).wait(32));
	
		// 图层 7
		this.instance_5 = new lib.happy_074_1480581027131();
		this.instance_5.setTransform(97.1,88.5,0.68,0.68,-114.7,0,0,131.1,131.5);
		this.instance_5.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.68,scaleY:0.68,rotation:-575.1,y:88.7,alpha:1},4).to({regY:131.6,rotation:-407.2,x:97.2,y:88.6},22).to({regY:131.5,scaleX:0.68,scaleY:0.68,rotation:-474.7,x:97.1,y:88.5,alpha:0},6).to({_off:true},1).wait(31));
	
		// 图层 8
		this.instance_6 = new lib.happy_203_1480581027131();
		this.instance_6.setTransform(96.8,91.1,0.68,0.68,159.7,0,0,170.5,170.6);
		this.instance_6.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:170.5,scaleX:0.68,scaleY:0.68,rotation:620.2,x:96.9,alpha:1},4).to({regX:170.6,regY:170.6,scaleX:0.68,scaleY:0.68,rotation:452.1,x:96.8,y:91.2},22).to({regX:170.5,rotation:519.7,y:91.1,alpha:0},6).to({_off:true},1).wait(31));
	
		// 滚
		this.instance_7 = new lib.happy_556_1480581027134();
		this.instance_7.setTransform(282.1,107,0.803,0.803,0,0,0,144.6,100.6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.66,scaleY:0.66},6).to({scaleX:0.84,scaleY:0.84},4,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.8},3).wait(51));
	
		// 吧
		this.instance_8 = new lib.happy_222_1480581027135();
		this.instance_8.setTransform(403.6,72,0.803,0.803,0,0,0,98.5,88);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({regY:87.9,scaleX:0.59,scaleY:0.59},6).to({regY:88,scaleX:0.82,scaleY:0.82},4,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.8},3).wait(46));
	
		// 组 1
		this.instance_9 = new lib.happy_832_1480581027134();
		this.instance_9.setTransform(488,52.6,0.803,0.803,0,0,0,27.5,65.4);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({scaleX:0.62,scaleY:0.62},6).to({scaleX:0.87,scaleY:0.87},4,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.8},3).wait(41));
	
		// 组 2
		this.instance_10 = new lib.happy_943_1480581027134();
		this.instance_10.setTransform(523,64.6,0.803,0.803,0,0,0,31,65.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({scaleX:0.68,scaleY:0.68},6).to({scaleX:0.83,scaleY:0.83,y:64.7},4,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.8,y:64.6},3).wait(36));
	
		// 乐
		this.instance_11 = new lib.happy_272_1480581027135();
		this.instance_11.setTransform(227.4,231.1,0.803,0.803,0,0,0,82.4,76);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20).to({regX:82.5,scaleX:0.67,scaleY:0.67},6).to({regX:82.4,scaleX:0.88,scaleY:0.88},4,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.8},3).wait(31));
	
		// 高
		this.instance_12 = new lib.happy_245_1480581027134();
		this.instance_12.setTransform(331.4,227.1,0.803,0.803,0,0,0,89,83);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({scaleX:0.65,scaleY:0.65,x:331.5},6).to({scaleX:0.87,scaleY:0.87,x:331.4},4,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.8},3).wait(26));
	
		// 星
		this.instance_13 = new lib.happy_324_1480581027135();
		this.instance_13.setTransform(428.7,197.8,0.803,0.803,0,0,0,69,64.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(30).to({scaleX:0.61,scaleY:0.61},6).to({scaleX:0.9,scaleY:0.9},4,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.8},3).wait(21));
	
		// 人
		this.instance_14 = new lib.happy_508_1480581027134();
		this.instance_14.setTransform(515,201,0.803,0.803,0,0,0,60.5,59.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(35).to({regY:59.6,scaleX:0.62,scaleY:0.62},6).to({regY:59.5,scaleX:0.9,scaleY:0.9},4,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.8},3).wait(16));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-52.1,-68.6,647.7,362.4);
	
	
	(lib.happy_935_1480581027137 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_699_1480581027136();
		this.instance.setTransform(211,188,0.53,0.53,0,0,0,214.1,213);
		this.instance.alpha = 0.539;
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-65.7,-80.3,553.5,536.7);
	
	
	(lib.happy_254_1480581027137 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_169_1480581027137();
		this.instance.setTransform(205.9,179.2,0.953,0.953,0,0,0,216,214.4);
		this.instance.alpha = 0.648;
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,-25.2,411.7,408.8);
	
	
	(lib.happy_146_1480581027137 = function() {
		this.initialize();
	
		// Layer 3
		this.instance = new lib.happy_304_1480581027137();
		this.instance.setTransform(214.1,189.7,0.115,0.115,0,0,0,299.4,295.9);
		this.instance.alpha = 0.32;
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(179.8,155.8,68.7,67.9);
	
	
	(lib.happy_050_1480581027137 = function() {
		this.initialize();
	
		// Layer 3
		this.instance = new lib.happy_410_1480581027137();
		this.instance.setTransform(204.2,179.1,1.046,1.046,0,0,0,195.2,195.3);
		this.instance.alpha = 0.699;
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,-25.2,407.9,407.9);
	
	
	(lib.happy_267_1480581027138 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 5
		this.instance = new lib.happy_400_1480581027133();
		this.instance.setTransform(166,68.5,1,1,0,0,0,131,31.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));
	
		// 图层 2
		this.instance_1 = new lib.happy_467_1480581027136("synched",0);
		this.instance_1.setTransform(365.1,547.2,1,1,0,0,0,527,524.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));
	
		// Layer 2
		this.instance_2 = new lib.happy_583_1480581027139();
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));
	
		// Layer 3
		this.instance_3 = new lib.happy_958_1480581027138("synched",0);
		this.instance_3.setTransform(1276,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:640},119).wait(1));
	
		// Layer 4
		this.instance_4 = new lib.happy_958_1480581027138("synched",0);
		this.instance_4.setTransform(640,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:0},119).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-161.9,0,1438,1071.7);
	
	
	(lib.happy_262_1480581027133 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.instance = new lib.happy_935_1480581027137();
		this.instance.setTransform(38.2,58.1,0.186,0.186,0,0,0,211.2,188);
		this.instance.alpha = 0.648;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[38.1,58.1,-14.5,55.7,-83,67.3,-146,77.8,-192.5,95.1]}},30).to({guide:{path:[-192.4,95.1,-202.8,99,-212.3,103.1,-238.3,114.5,-250.6,125.1,-262.8,135.7,-261.2,145.4,-259.5,155.1,-244.5,161.1,-229.5,167.1,-201.1,169.4,-169.5,172,-131.7,169.1]}},38).to({guide:{path:[-131.7,169.1,-101.4,166.8,-67.2,161,9.8,147.9,61.9,125.1,67.8,122.5,73,120]}},30).to({guide:{path:[73,119.9,93.4,109.9,102.9,100.6,112.4,91.3,110.9,82.7,109.3,73.1,94.3,67.2,79.3,61.2,51,59,44.8,58.5,38.3,58.2]}},25).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(17.1,37.1,42.2,42);
	
	
	(lib.happy_762_1480581027131 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 16
		this.instance = new lib.happy_845_1480581027136("synched",0);
		this.instance.setTransform(187.4,779.8,1,1,18.7,0,0,202.9,240.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:203,rotation:-24.5,x:187.5,y:153.8},9).to({rotation:-114.5,y:31.7},6).to({regY:240.6,rotation:-189.5,y:-12.2},6).to({regY:240.5,rotation:-236.9,x:177.4,y:83.8},4).to({rotation:-375,x:167.5,y:813.7},9).to({_off:true},1).wait(7));
	
		// 图层 7
		this.instance_1 = new lib.happy_074_1480581027131();
		this.instance_1.setTransform(175,130.6,1,1,0,0,0,131,131.5);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regY:131.4,scaleX:1,scaleY:1,rotation:-24.8,x:173.7,y:102,alpha:1},2).to({regX:131.1,regY:131.5,scaleX:1,scaleY:1,rotation:-75,x:171,y:44.6},4).to({rotation:-120,x:185,y:14.6},6).to({scaleX:1,scaleY:1,rotation:-150.7,x:188.6,y:65.8},3).to({_off:true},1).wait(17));
	
		// 图层 8
		this.instance_2 = new lib.happy_203_1480581027131();
		this.instance_2.setTransform(172.5,132.4,1,1,0,0,0,170.5,170.5);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:28.1,x:171.9,y:104.4,alpha:1},2).to({scaleX:1,scaleY:1,rotation:84.7,x:170.5,y:48.4},4).to({rotation:168.5,x:186.4,y:18.4},6).to({regX:170.4,scaleX:1,scaleY:1,rotation:213.6,x:190.1,y:68.3},3).to({_off:true},1).wait(17));
	
		// 图层 4
		this.instance_3 = new lib.happy_548_1480581027131();
		this.instance_3.setTransform(172.5,132,1,1,0,0,0,178.5,154);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:29.9,x:171.9,y:102.6,alpha:1},2).to({scaleX:1,scaleY:1,rotation:90,x:170.5,y:44},4).to({rotation:165,x:184.5,y:18},6).to({scaleX:1,scaleY:1,rotation:191.8,x:188.2,y:65.5},3).to({_off:true},1).wait(17));
	
		// 图层 10
		this.instance_4 = new lib.happy_531_1480581027133("synched",0);
		this.instance_4.setTransform(187.4,781.7,1,1,18.7,0,0,202.9,240.5);
		this.instance_4.alpha = 0.25;
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({rotation:-26.5,x:185.6,y:152},10).to({_off:true},1).wait(11).to({_off:false,regX:203,regY:240.4,rotation:-190.8,x:197,y:-6.9,alpha:0},0).to({scaleX:1,scaleY:1,rotation:-235.4,x:173.4,y:86.2,alpha:0.25},4).to({regY:240.5,scaleX:1,scaleY:1,rotation:-375.2,x:170.3,y:817.9},9).wait(5));
	
		// 图层 9
		this.instance_5 = new lib.happy_531_1480581027133("synched",0);
		this.instance_5.setTransform(182.7,790.7,1,1,16.8,0,0,202.9,240.5);
		this.instance_5.alpha = 0.059;
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({regX:202.8,regY:240.6,rotation:-21.5,x:191.2,y:150.4},10).to({_off:true},1).wait(11).to({_off:false,rotation:-191,x:173.1,y:-36.2},0).to({rotation:-235.7,x:176.9,y:84.3},4).to({rotation:-376.4,x:178.9,y:815.8},9).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-21.2,532.1,458.2,529.3);
	
	
	(lib.happy_514_1480581027130 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 16
		this.instance = new lib.happy_939_1480581027133("synched",0);
		this.instance.setTransform(187.4,779.8,1,1,18.7,0,0,202.9,240.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:203,rotation:-24.5,x:187.5,y:153.8},9).to({rotation:-114.5,y:31.7},6).to({regY:240.6,rotation:-189.5,y:-12.2},6).to({regY:240.5,rotation:-236.9,x:177.4,y:83.8},4).to({rotation:-375,x:167.5,y:813.7},9).to({_off:true},1).wait(7));
	
		// 图层 7
		this.instance_1 = new lib.happy_074_1480581027131();
		this.instance_1.setTransform(175,130.6,1,1,0,0,0,131,131.5);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regY:131.4,scaleX:1,scaleY:1,rotation:-24.8,x:173.7,y:102,alpha:1},2).to({regX:131.1,regY:131.5,scaleX:1,scaleY:1,rotation:-75,x:171,y:44.6},4).to({rotation:-120,x:185,y:14.6},6).to({scaleX:1,scaleY:1,rotation:-150.7,x:188.6,y:65.8},3).to({_off:true},1).wait(17));
	
		// 图层 8
		this.instance_2 = new lib.happy_203_1480581027131();
		this.instance_2.setTransform(172.5,132.4,1,1,0,0,0,170.5,170.5);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:28.1,x:171.9,y:104.4,alpha:1},2).to({scaleX:1,scaleY:1,rotation:84.7,x:170.5,y:48.4},4).to({rotation:168.5,x:186.4,y:18.4},6).to({regX:170.4,scaleX:1,scaleY:1,rotation:213.6,x:190.1,y:68.3},3).to({_off:true},1).wait(17));
	
		// 图层 4
		this.instance_3 = new lib.happy_548_1480581027131();
		this.instance_3.setTransform(172.5,132,1,1,0,0,0,178.5,154);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:29.9,x:171.9,y:102.6,alpha:1},2).to({scaleX:1,scaleY:1,rotation:90,x:170.5,y:44},4).to({rotation:165,x:184.5,y:18},6).to({scaleX:1,scaleY:1,rotation:191.8,x:188.2,y:65.5},3).to({_off:true},1).wait(17));
	
		// Layer 2
		this.instance_4 = new lib.happy_939_1480581027133("synched",0);
		this.instance_4.setTransform(187.4,781.7,1,1,18.7,0,0,202.9,240.5);
		this.instance_4.alpha = 0.25;
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({rotation:-26.5,x:185.6,y:152},10).to({_off:true},1).wait(11).to({_off:false,regX:203,regY:240.4,rotation:-190.8,x:197,y:-6.9,alpha:0},0).to({scaleX:1,scaleY:1,rotation:-235.4,x:173.4,y:86.2,alpha:0.25},4).to({regY:240.5,scaleX:1,scaleY:1,rotation:-375.2,x:170.3,y:817.9},9).to({_off:true},1).wait(4));
	
		// Layer 3
		this.instance_5 = new lib.happy_939_1480581027133("synched",0);
		this.instance_5.setTransform(182.7,790.7,1,1,16.8,0,0,202.9,240.5);
		this.instance_5.alpha = 0.059;
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({regX:202.8,regY:240.6,rotation:-21.5,x:191.2,y:150.4},10).to({_off:true},1).wait(11).to({_off:false,rotation:-191,x:173.1,y:-36.2},0).to({rotation:-235.7,x:176.9,y:84.3},4).to({rotation:-376.4,x:178.9,y:815.8},9).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-81.9,486.9,539,585.9);
	
	
	(lib.happy_071_1480581027130 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 16
		this.instance = new lib.happy_551_1480581027130("synched",0);
		this.instance.setTransform(187.4,779.8,1,1,18.7,0,0,202.9,240.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:203,rotation:-24.5,x:187.5,y:153.8},9).to({rotation:-114.5,y:31.7},6).to({regY:240.6,rotation:-189.5,y:-12.2},6).to({regY:240.5,rotation:-236.9,x:177.4,y:83.8},4).to({rotation:-375,x:167.5,y:813.7},9).to({_off:true},1).wait(7));
	
		// 图层 7
		this.instance_1 = new lib.happy_074_1480581027131();
		this.instance_1.setTransform(175,130.6,1,1,0,0,0,131,131.5);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regY:131.4,scaleX:1,scaleY:1,rotation:-24.8,x:173.7,y:102,alpha:1},2).to({regX:131.1,regY:131.5,scaleX:1,scaleY:1,rotation:-75,x:171,y:44.6},4).to({rotation:-120,x:185,y:14.6},6).to({scaleX:1,scaleY:1,rotation:-150.7,x:188.6,y:65.8},3).to({_off:true},1).wait(17));
	
		// 图层 8
		this.instance_2 = new lib.happy_203_1480581027131();
		this.instance_2.setTransform(172.5,132.4,1,1,0,0,0,170.5,170.5);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:28.1,x:171.9,y:104.4,alpha:1},2).to({scaleX:1,scaleY:1,rotation:84.7,x:170.5,y:48.4},4).to({rotation:168.5,x:186.4,y:18.4},6).to({regX:170.4,scaleX:1,scaleY:1,rotation:213.6,x:190.1,y:68.3},3).to({_off:true},1).wait(17));
	
		// 图层 4
		this.instance_3 = new lib.happy_548_1480581027131();
		this.instance_3.setTransform(172.5,132,1,1,0,0,0,178.5,154);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:29.9,x:171.9,y:102.6,alpha:1},2).to({scaleX:1,scaleY:1,rotation:90,x:170.5,y:44},4).to({rotation:165,x:184.5,y:18},6).to({scaleX:1,scaleY:1,rotation:191.8,x:188.2,y:65.5},3).to({_off:true},1).wait(17));
	
		// 图层 10
		this.instance_4 = new lib.happy_803_1480581027134("synched",0);
		this.instance_4.setTransform(187.4,781.7,1,1,18.7,0,0,202.9,240.5);
		this.instance_4.alpha = 0.25;
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({rotation:-26.5,x:185.6,y:152},10).to({_off:true},1).wait(11).to({_off:false,regX:203,regY:240.4,rotation:-190.8,x:197,y:-6.9,alpha:0},0).to({scaleX:1,scaleY:1,rotation:-235.4,x:173.4,y:86.2,alpha:0.25},4).to({regY:240.5,scaleX:1,scaleY:1,rotation:-375.2,x:170.3,y:817.9},9).wait(5));
	
		// 图层 9
		this.instance_5 = new lib.happy_803_1480581027134("synched",0);
		this.instance_5.setTransform(182.7,790.7,1,1,16.8,0,0,202.9,240.5);
		this.instance_5.alpha = 0.059;
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({regX:202.8,regY:240.6,rotation:-21.5,x:191.2,y:150.4},10).to({_off:true},1).wait(11).to({_off:false,rotation:-191,x:173.1,y:-36.2},0).to({rotation:-235.7,x:176.9,y:84.3},4).to({rotation:-376.4,x:178.9,y:815.8},9).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-26.2,526.8,427.8,522.7);
	
	
	(lib.happy_056_1480581027131 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 16
		this.instance = new lib.happy_678_1480581027130("synched",0);
		this.instance.setTransform(187.4,779.8,1,1,18.7,0,0,202.9,240.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:203,rotation:-24.5,x:187.5,y:153.8},9).to({rotation:-114.5,y:31.7},6).to({regY:240.6,rotation:-189.5,y:-12.2},6).to({regY:240.5,rotation:-236.9,x:177.4,y:83.8},4).to({rotation:-375,x:167.5,y:813.7},9).to({_off:true},1).wait(7));
	
		// 图层 7
		this.instance_1 = new lib.happy_074_1480581027131();
		this.instance_1.setTransform(175,130.6,1,1,0,0,0,131,131.5);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regY:131.4,scaleX:1,scaleY:1,rotation:-24.8,x:173.7,y:102,alpha:1},2).to({regX:131.1,regY:131.5,scaleX:1,scaleY:1,rotation:-75,x:171,y:44.6},4).to({rotation:-120,x:185,y:14.6},6).to({scaleX:1,scaleY:1,rotation:-150.7,x:188.6,y:65.8},3).to({_off:true},1).wait(17));
	
		// 图层 8
		this.instance_2 = new lib.happy_203_1480581027131();
		this.instance_2.setTransform(172.5,132.4,1,1,0,0,0,170.5,170.5);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:28.1,x:171.9,y:104.4,alpha:1},2).to({scaleX:1,scaleY:1,rotation:84.7,x:170.5,y:48.4},4).to({rotation:168.5,x:186.4,y:18.4},6).to({regX:170.4,scaleX:1,scaleY:1,rotation:213.6,x:190.1,y:68.3},3).to({_off:true},1).wait(17));
	
		// 图层 4
		this.instance_3 = new lib.happy_548_1480581027131();
		this.instance_3.setTransform(172.5,132,1,1,0,0,0,178.5,154);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:29.9,x:171.9,y:102.6,alpha:1},2).to({scaleX:1,scaleY:1,rotation:90,x:170.5,y:44},4).to({rotation:165,x:184.5,y:18},6).to({scaleX:1,scaleY:1,rotation:191.8,x:188.2,y:65.5},3).to({_off:true},1).wait(17));
	
		// 图层 10
		this.instance_4 = new lib.happy_963_1480581027133("synched",0);
		this.instance_4.setTransform(187.4,781.7,1,1,18.7,0,0,202.9,240.5);
		this.instance_4.alpha = 0.25;
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({rotation:-26.5,x:185.6,y:152},10).to({_off:true},1).wait(11).to({_off:false,regX:203,regY:240.4,rotation:-190.8,x:197,y:-6.9,alpha:0},0).to({scaleX:1,scaleY:1,rotation:-235.4,x:173.4,y:86.2,alpha:0.25},4).to({regY:240.5,scaleX:1,scaleY:1,rotation:-375.2,x:170.3,y:817.9},9).wait(5));
	
		// 图层 9
		this.instance_5 = new lib.happy_963_1480581027133("synched",0);
		this.instance_5.setTransform(182.7,790.7,1,1,16.8,0,0,202.9,240.5);
		this.instance_5.alpha = 0.059;
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({regX:202.8,regY:240.6,rotation:-21.5,x:191.2,y:150.4},10).to({_off:true},1).wait(11).to({_off:false,rotation:-191,x:173.1,y:-36.2},0).to({rotation:-235.7,x:176.9,y:84.3},4).to({rotation:-376.4,x:178.9,y:815.8},9).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-26.2,530.1,414.6,504.7);
	
	
	(lib.happy_694_1480581027132 = function() {
		this.initialize();
	
		// 图层 17
		this.instance = new lib.happy_202_1480581027132();
		this.instance.setTransform(54.5,283,1,1,0,0,0,28.5,31);
	
		// 图层 5
		this.instance_1 = new lib.happy_758_1480581027132();
		this.instance_1.setTransform(36,282,1,1,0,0,0,36,43);
	
		this.addChild(this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,239,83,86);
	
	
	(lib.happy_985_1480581027133 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.instance = new lib.happy_146_1480581027137();
		this.instance.setTransform(38.2,58.1,0.186,0.186,0,0,0,211.2,188);
		this.instance.alpha = 0.648;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[38.1,58.1,-14.5,55.7,-83,67.3,-146,77.8,-192.5,95.1]}},30).to({guide:{path:[-192.4,95.1,-202.8,99,-212.3,103.1,-238.3,114.5,-250.6,125.1,-262.8,135.7,-261.2,145.4,-259.5,155.1,-244.5,161.1,-229.5,167.1,-201.1,169.4,-169.5,172,-131.7,169.1]}},38).to({guide:{path:[-131.7,169.1,-101.4,166.8,-67.2,161,9.8,147.9,61.9,125.1,67.8,122.5,73,120]}},30).to({guide:{path:[73,119.9,93.4,109.9,102.9,100.6,112.4,91.3,110.9,82.7,109.3,73.1,94.3,67.2,79.3,61.2,51,59,44.8,58.5,38.3,58.2]}},25).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(32.4,52.1,12.8,12.6);
	
	
	(lib.happy_954_1480581027136 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.instance = new lib.happy_254_1480581027137();
		this.instance.setTransform(36,10,0.149,0.149,0,0,0,211.2,188);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[35.9,10.1,-19.9,12.7,-86.3,27.4,-152.2,41.7,-205.3,62.9]}},30).to({regX:211.1,regY:188.1,scaleX:0.24,scaleY:0.24,guide:{path:[-205.3,63.1,-240.1,77.1,-269.3,93.9,-343,136.2,-338.4,172.2,-336.1,190.2,-314.8,201.3,-293.6,212.5,-253.5,216.7,-196.6,222.7,-125.6,212.4]}},43).to({scaleX:0.24,scaleY:0.24,guide:{path:[-125.4,212.4,-95.9,208.2,-63.9,201.1,23.1,181.8,87.7,150.9]}},27).to({regX:211.2,regY:188,scaleX:0.15,scaleY:0.15,guide:{path:[88,150.9,104.1,143.1,118.9,134.5,192.8,92,188.2,56.2,185.9,38.2,164.6,27.1,143.3,16,103.1,11.8,71.9,8.5,36.2,10.2]}},34).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(4.6,-21.7,61.2,60.8);
	
	
	(lib.happy_581_1480581027129 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.instance = new lib.happy_050_1480581027137();
		this.instance.setTransform(36,10,0.149,0.149,0,0,0,211.2,188);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[35.9,10.1,-19.9,12.7,-86.3,27.4,-152.2,41.7,-205.3,62.9]}},35).to({regX:211.1,regY:188.1,scaleX:0.24,scaleY:0.24,guide:{path:[-205.3,63.1,-240.1,77.1,-269.3,93.9,-343,136.2,-338.4,172.2,-336.1,190.2,-314.8,201.3,-293.6,212.5,-253.5,216.7,-196.6,222.7,-125.6,212.4]}},48).to({scaleX:0.24,scaleY:0.24,guide:{path:[-125.4,212.4,-95.9,208.2,-63.9,201.1,23.1,181.8,87.7,150.9]}},32).to({regX:211.2,regY:188,scaleX:0.15,scaleY:0.15,guide:{path:[88,150.9,104.1,143.1,118.9,134.5,192.8,92,188.2,56.2,185.9,38.2,164.6,27.1,143.3,16,103.1,11.8,71.9,8.5,36.2,10.2]}},39).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(4.6,-21.7,60.7,60.7);
	
	
	(lib.happy_396_1480581027133 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_762_1480581027131();
		this.instance.setTransform(6,327.6,0.836,0.836,0,0,180,179,290.6);
	
		this.instance_1 = new lib.happy_071_1480581027130();
		this.instance_1.setTransform(6,327.6,0.836,0.836,0,0,180,179,290.6);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},41).to({state:[]},41).to({state:[{t:this.instance_1}]},39).wait(41));
	
		// Layer 2
		this.instance_2 = new lib.happy_514_1480581027130();
		this.instance_2.setTransform(6.1,327.6,0.836,0.836,0,0,0,179.1,290.6);
	
		this.instance_3 = new lib.happy_056_1480581027131();
		this.instance_3.setTransform(6.1,327.6,0.836,0.836,0,0,0,179.1,290.6);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[]},41).to({state:[{t:this.instance_3}]},41).to({state:[]},39).wait(41));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-212.2,491.6,450.6,489.8);
	
	
	(lib.happy_355_1480581027131 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 矢量智能对象_2
		this.instance = new lib.happy_985_1480581027133();
		this.instance.setTransform(675.2,-166.9,3.736,3.736,0,0,0,39.2,35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(216));
	
		// 矢量智能对象_6
		this.instance_1 = new lib.happy_985_1480581027133();
		this.instance_1.setTransform(723.3,209.4,3.736,3.736,0,0,0,39.2,35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(216));
	
		// 矢量智能对象_3
		this.instance_2 = new lib.happy_581_1480581027129();
		this.instance_2.setTransform(407.6,197.4,4.315,4.315,0,0,0,39.2,35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(216));
	
		// Layer 22
		this.instance_3 = new lib.happy_954_1480581027136();
		this.instance_3.setTransform(636.7,332.7,2.631,2.631,0,0,0,39.2,35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(216));
	
		// 矢量智能对象_2
		this.instance_4 = new lib.happy_262_1480581027133();
		this.instance_4.setTransform(468.5,367,1,1,0,0,0,39.2,35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(216));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,-102.9,745.5,1017);
	
	
	// stage content:
	(lib.p0 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_204 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(204).call(this.frame_204).wait(1));
	
		// Layer 6
		this.instance = new lib.happy_411_1480581027135();
		this.instance.setTransform(324.4,1174.5,0.65,0.65,0,0,0,209.5,190.6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:190.5,rotation:-60,y:534.5},5).to({rotation:-150,y:394.6},4).to({rotation:-240,y:274.7},4).to({rotation:-360,x:324.5,y:220.6},4).to({regX:209.3,scaleX:0.52,scaleY:0.52,x:160.8,y:232},3).to({regX:209.5,scaleX:0.44,scaleY:0.44,x:128.4,y:239.6},2).to({x:146.4},4).to({_off:true},1).wait(178));
	
		// 图层 7
		this.instance_1 = new lib.happy_074_1480581027131();
		this.instance_1.setTransform(327,1094.6,1,1,-75,0,0,131.1,131.5);
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({rotation:-114.7,y:530.6},4).to({rotation:-165,x:326.9,y:396.6},4).to({regX:131,rotation:-240,y:278.6},4).to({regX:131.1,regY:131.6,rotation:-309.7,y:220.8},4).to({_off:true},1).wait(187));
	
		// 图层 8
		this.instance_2 = new lib.happy_203_1480581027131();
		this.instance_2.setTransform(326.5,1098.5,1,1,84.7,0,0,170.5,170.5);
		this.instance_2._off = true;
	
		this.instance_3 = new lib.happy_328_1480581027136();
		this.instance_3.setTransform(333,290.8,1,1,0,0,0,281.8,146.8);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},4).to({state:[]},1).to({state:[{t:this.instance_3}]},9).wait(178));
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({rotation:159.7,x:326.6,y:534.4},4).to({rotation:264.7,x:326.5,y:400.4},4).to({regX:170.4,rotation:309.7,y:282.4},4).to({regX:170.5,rotation:264.7,y:224.4},4).to({_off:true},1).wait(187));
	
		// Layer 3
		this.instance_4 = new lib.happy_542_1480581027134();
		this.instance_4.setTransform(779,290.8,1,1,0,0,0,281.8,146.8);
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({x:307},6,cjs.Ease.get(1)).to({x:333},4).to({_off:true},1).wait(178));
	
		// Layer 10
		this.instance_5 = new lib.happy_809_1480581027132();
		this.instance_5.setTransform(413.5,256.1,0.24,0.24,-36.2,0,0,51.6,44.5);
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({regX:51.5,scaleX:1,scaleY:1,rotation:0,x:595.5,y:120},9,cjs.Ease.get(1)).to({_off:true},1).wait(178));
	
		// bricks loose
		this.instance_6 = new lib.happy_694_1480581027132();
		this.instance_6.setTransform(468.3,311.4,0.462,0.462,-26.9,0,0,29.3,307.1);
		this.instance_6._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({regX:29.4,scaleX:0.98,scaleY:0.98,x:592,y:333.3},7,cjs.Ease.get(1)).to({_off:true},1).wait(178));
	
		// 图层 12
		this.instance_7 = new lib.happy_954_1480581027132();
		this.instance_7.setTransform(357,313.9,0.296,0.296,-29.9,0,0,29.1,20.4);
		this.instance_7._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({regX:29,regY:20.5,scaleX:1,scaleY:1,rotation:0,x:457,y:401.5},5,cjs.Ease.get(1)).to({_off:true},1).wait(178));
	
		// 图层 13
		this.instance_8 = new lib.happy_721_1480581027132();
		this.instance_8.setTransform(230.3,308.1,0.351,0.351,51.4,0,0,30.5,31.9);
		this.instance_8._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).to({regY:32,scaleX:1,scaleY:1,rotation:0,x:96.2,y:368.1},11,cjs.Ease.get(1)).to({_off:true},1).wait(178));
	
		// 图层 6
		this.instance_9 = new lib.happy_734_1480581027130();
		this.instance_9.setTransform(230.3,308.1,0.351,0.351,51.4,0,0,45,43.9);
		this.instance_9._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15).to({_off:false},0).to({regY:44,scaleX:1,scaleY:1,rotation:0,x:96.2,y:368.1},11,cjs.Ease.get(1)).to({_off:true},1).wait(178));
	
		// 星球
		this.instance_10 = new lib.happy_355_1480581027131();
		this.instance_10.setTransform(320,557,1,1,0,0,0,320,457);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(205));
	
		// 人
		this.instance_11 = new lib.happy_396_1480581027133();
		this.instance_11.setTransform(348.1,579,1,1,0,0,0,28,59);
		this.instance_11._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({_off:false},0).wait(176));
	
		// Layer 2
		this.bg = new lib.happy_267_1480581027138();
		this.bg.setTransform(640,520,1,1,0,0,0,640,520);
	
		this.timeline.addTween(cjs.Tween.get(this.bg).wait(205));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-477.2,-713.3,4315.1,3130.8);
	
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = (function (lib, img, cjs, ss) {
	
	var p; // shortcut to reference prototypes
	
	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#FFFFFF",
		manifest: []
	};
	
	
	
	// symbols:
	
	
	
	(lib.happy_225_1480402261047 = function() {
		this.spriteSheet = ss["p1_atlas_6"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_235_1480402261047 = function() {
		this.spriteSheet = ss["p1_atlas_6"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_242_1480402261042 = function() {
		this.spriteSheet = ss["p1_atlas_6"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_272_1480402261041 = function() {
		this.spriteSheet = ss["p1_atlas_6"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_361_1480402261042 = function() {
		this.spriteSheet = ss["p1_atlas_6"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_423_1480402261043 = function() {
		this.spriteSheet = ss["p1_atlas_6"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_526_1480402261042 = function() {
		this.spriteSheet = ss["p1_atlas_6"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_585_1480402261048 = function() {
		this.spriteSheet = ss["p1_atlas_3"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_668_1480402261045 = function() {
		this.spriteSheet = ss["p1_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_685_1480402261046 = function() {
		this.spriteSheet = ss["p1_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_706_1480402261044 = function() {
		this.spriteSheet = ss["p1_atlas_4"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_752_1480402261044 = function() {
		this.spriteSheet = ss["p1_atlas_5"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_929_1480402261044 = function() {
		this.spriteSheet = ss["p1_atlas_6"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_985_1480402261046 = function() {
		this.spriteSheet = ss["p1_atlas_6"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_828_1480402261040 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_526_1480402261042();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,417,63);
	
	
	(lib.happy_500_1480402261040 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_361_1480402261042();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,153,20);
	
	
	(lib.happy_157_1480402261041 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_242_1480402261042();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,468,93);
	
	
	(lib.happy_985_1480402261039 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_685_1480402261046();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);
	
	
	(lib.happy_608_1480402261039 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_668_1480402261045();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);
	
	
	(lib.happy_722_1480402261038 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_585_1480402261048();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,923);
	
	
	(lib.happy_569_1480402261039 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_752_1480402261044();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,464,700);
	
	
	(lib.happy_482_1480402261039 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_706_1480402261044();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,496,700);
	
	
	(lib.happy_389_1480402261039 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_929_1480402261044();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,475,653);
	
	
	(lib.happy_528_1480402261037 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_235_1480402261047();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,180,68);
	
	
	(lib.happy_390_1480402261037 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_225_1480402261047();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,103,39);
	
	
	(lib.happy_152_1480402261037 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_985_1480402261046();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,99,99);
	
	
	(lib.happy_846_1480402261040 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 灯1
		this.instance = new lib.happy_482_1480402261039();
		this.instance.setTransform(25.9,32.9,1,1,0,0,0,25.9,29.9);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.9},19).to({rotation:0},20).wait(1));
	
		// 灯2
		this.instance_1 = new lib.happy_389_1480402261039();
		this.instance_1.setTransform(288.5,22.4,1,1,0,0,0,237.5,22.4);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:3.7},19).to({rotation:0},20).wait(1));
	
		// 灯3
		this.instance_2 = new lib.happy_569_1480402261039();
		this.instance_2.setTransform(559.1,33.9,1,1,0,0,0,440.1,29.9);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-6.2},19).to({rotation:0},20).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,583,704);
	
	
	(lib.happy_390_1480402261040 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_390_1480402261037();
		this.instance.setTransform(1050.7,19.5,1,1,0,0,0,51.5,19.5);
	
		this.instance_1 = new lib.happy_528_1480402261037();
		this.instance_1.setTransform(706.2,270,1,1,0,0,0,90,34);
	
		this.instance_2 = new lib.happy_390_1480402261037();
		this.instance_2.setTransform(434.5,19.5,1,1,0,0,0,51.5,19.5);
	
		this.instance_3 = new lib.happy_528_1480402261037();
		this.instance_3.setTransform(90,270,1,1,0,0,0,90,34);
	
		this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,1102.2,304);
	
	
	(lib.happy_331_1480402261040 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
		this.frame_14 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));
	
		// Layer 3
		this.instance = new lib.happy_828_1480402261040("synched",0);
		this.instance.setTransform(233.6,37.4,1,1,0,0,0,208.7,31.6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({scaleX:0.87,scaleY:0.87,y:49.4},5).to({scaleX:1.06,scaleY:1.06,y:32.5},3).to({scaleX:0.98,scaleY:0.98,y:39.4},3).to({scaleX:1,scaleY:1,y:37.4},2).wait(1));
	
		// Layer 4
		this.instance_1 = new lib.happy_500_1480402261040("synched",0);
		this.instance_1.setTransform(233.7,35.5,1,1,0,0,0,76.4,9.8);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.74,scaleY:0.74,y:47.5},5).to({scaleX:1.09,scaleY:1.09,y:30.5},3).to({scaleX:0.99,scaleY:0.99,y:37.5},3).to({scaleX:1,scaleY:1,y:35.5},2).wait(2));
	
		// Layer 5
		this.instance_2 = new lib.happy_157_1480402261041("synched",0);
		this.instance_2.setTransform(234,46.5,1,1,0,0,0,234,46.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:58.5},5).to({y:41.5},3).to({y:48.5},3).to({y:46.5},2).wait(2));
	
		// Layer 6
		this.instance_3 = new lib.happy_272_1480402261041();
		this.instance_3.setTransform(15.6,50.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));
	
		// Layer 2
		this.instance_4 = new lib.happy_423_1480402261043();
		this.instance_4.setTransform(-4.4,114);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.4,0,474,175);
	
	
	(lib.happy_993_1480402261040 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 灯1
		this.instance = new lib.happy_846_1480402261040("synched",0);
		this.instance.setTransform(322.5,512,1,1,0,0,0,291.5,352);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));
	
		// Layer 6
		this.instance_1 = new lib.happy_722_1480402261038();
		this.instance_1.setTransform(320,578.5,1,1,0,0,0,320,461.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));
	
		// Layer 8
		this.instance_2 = new lib.happy_390_1480402261040();
		this.instance_2.setTransform(375,216,1,1,0,0,0,243,152);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-237.1,y:215},119).wait(1));
	
		// Layer 1
		this.instance_3 = new lib.happy_152_1480402261037();
		this.instance_3.setTransform(487.5,112.5,1,1,0,0,0,49.5,49.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));
	
		// Layer 7
		this.instance_4 = new lib.happy_608_1480402261039();
		this.instance_4.setTransform(320,520,1,1,0,0,0,320,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,1234.2,1040);
	
	
	// stage content:
	(lib.p1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_19 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));
	
		// Layer 8
		this.duang = new lib.happy_331_1480402261040();
		this.duang.setTransform(319.5,880.3,1,1,0,0,0,234,82.3);
	
		this.timeline.addTween(cjs.Tween.get(this.duang).wait(20));
	
		// 图层 5
		this.instance = new lib.happy_985_1480402261039();
		this.instance.setTransform(320,520,1,1,0,0,0,320,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));
	
		// bg
		this.instance_1 = new lib.happy_993_1480402261040();
		this.instance_1.setTransform(320,520,1,1,0,0,0,320,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(320,520,1234.2,1040);
	
	});

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = (function (lib, img, cjs, ss) {
	
	var p; // shortcut to reference prototypes
	
	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#FFFFFF",
		manifest: []
	};
	
	
	
	// symbols:
	
	
	
	(lib.happy_031_1480503830419 = function() {
		this.spriteSheet = ss["p2_atlas_3"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_087_1480503830419 = function() {
		this.spriteSheet = ss["p2_atlas_3"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_240_1480503830419 = function() {
		this.spriteSheet = ss["p2_atlas_3"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_258_1480503830420 = function() {
		this.spriteSheet = ss["p2_atlas_3"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_327_1480503830421 = function() {
		this.spriteSheet = ss["p2_atlas_3"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_382_1480503830420 = function() {
		this.spriteSheet = ss["p2_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_397_1480503830421 = function() {
		this.spriteSheet = ss["p2_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_435_1480503830419 = function() {
		this.spriteSheet = ss["p2_atlas_3"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_494_1480503830421 = function() {
		this.spriteSheet = ss["p2_atlas_3"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_382_1480503830418 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_435_1480503830419();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,153,20);
	
	
	(lib.happy_472_1480503830417 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_397_1480503830421();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);
	
	
	(lib.happy_436_1480503830417 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_382_1480503830420();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);
	
	
	(lib.happy_969_1480503830416 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_494_1480503830421();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,164,53);
	
	
	(lib.happy_361_1480503830416 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_327_1480503830421();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,259,100);
	
	
	(lib.happy_267_1480503830418 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_240_1480503830419();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,468,93);
	
	
	(lib.happy_260_1480503830418 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_031_1480503830419();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,417,63);
	
	
	(lib.happy_534_1480503830417 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
		this.frame_14 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));
	
		// Layer 3
		this.instance = new lib.happy_260_1480503830418("synched",0);
		this.instance.setTransform(233.6,37.4,1,1,0,0,0,208.7,31.6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({scaleX:0.87,scaleY:0.87,y:49.4},5).to({scaleX:1.06,scaleY:1.06,y:32.5},3).to({scaleX:0.98,scaleY:0.98,y:39.4},3).to({scaleX:1,scaleY:1,y:37.4},2).wait(1));
	
		// Layer 4
		this.instance_1 = new lib.happy_382_1480503830418("synched",0);
		this.instance_1.setTransform(233.7,35.5,1,1,0,0,0,76.4,9.8);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.74,scaleY:0.74,y:47.5},5).to({scaleX:1.09,scaleY:1.09,y:30.5},3).to({scaleX:0.99,scaleY:0.99,y:37.5},3).to({scaleX:1,scaleY:1,y:35.5},2).wait(2));
	
		// Layer 5
		this.instance_2 = new lib.happy_267_1480503830418("synched",0);
		this.instance_2.setTransform(234,46.5,1,1,0,0,0,234,46.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:58.5},5).to({y:41.5},3).to({y:48.5},3).to({y:46.5},2).wait(2));
	
		// Layer 6
		this.instance_3 = new lib.happy_087_1480503830419();
		this.instance_3.setTransform(15.6,50.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));
	
		// Layer 2
		this.instance_4 = new lib.happy_258_1480503830420();
		this.instance_4.setTransform(-4.4,114);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.4,0,474,175);
	
	
	(lib.happy_913_1480503830416 = function() {
		this.initialize();
	
		// 矢量智能对象
		this.instance = new lib.happy_969_1480503830416();
		this.instance.setTransform(898.2,175.5,1,1,0,0,0,82,26.5);
	
		this.instance_1 = new lib.happy_969_1480503830416();
		this.instance_1.setTransform(82,175.5,1,1,0,0,0,82,26.5);
	
		// 矢量智能对象_1
		this.instance_2 = new lib.happy_361_1480503830416();
		this.instance_2.setTransform(1401.8,50,1,1,0,0,0,129.5,50);
	
		this.instance_3 = new lib.happy_361_1480503830416();
		this.instance_3.setTransform(585.6,50,1,1,0,0,0,129.5,50);
	
		this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,1531.3,202);
	
	
	(lib.happy_273_1480503830417 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.instance = new lib.happy_913_1480503830416();
		this.instance.setTransform(385,197,1,1,0,0,0,385,101);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-429.2},119).wait(1));
	
		// Layer 1
		this.instance_1 = new lib.happy_436_1480503830417();
		this.instance_1.setTransform(423,520,1,1,0,0,0,320,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,1531.3,1040);
	
	
	// stage content:
	(lib.p2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.duang = new lib.happy_534_1480503830417();
		this.duang.setTransform(319.5,879,1,1,0,0,0,234,82.3);
	
		this.timeline.addTween(cjs.Tween.get(this.duang).wait(20));
	
		// 图层 5
		this.instance = new lib.happy_472_1480503830417();
		this.instance.setTransform(320,520,1,1,0,0,0,320,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));
	
		// bg
		this.instance_1 = new lib.happy_273_1480503830417();
		this.instance_1.setTransform(282,520,1,1,0,0,0,385,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(217,520,1531.3,1040);
	
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = (function (lib, img, cjs, ss) {
	
	var p; // shortcut to reference prototypes
	
	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#FFFFFF",
		manifest: []
	};
	
	
	
	// symbols:
	
	
	
	(lib.happy_018_1480507239003 = function() {
		this.spriteSheet = ss["p3_atlas_3"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_018_1480507239005 = function() {
		this.spriteSheet = ss["p3_atlas_3"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_033_1480507239004 = function() {
		this.spriteSheet = ss["p3_atlas_3"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_132_1480507239006 = function() {
		this.spriteSheet = ss["p3_atlas_3"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_169_1480507239004 = function() {
		this.spriteSheet = ss["p3_atlas_3"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_507_1480507239006 = function() {
		this.spriteSheet = ss["p3_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_511_1480507239005 = function() {
		this.spriteSheet = ss["p3_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_735_1480507239004 = function() {
		this.spriteSheet = ss["p3_atlas_3"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_783_1480507239003 = function() {
		this.spriteSheet = ss["p3_atlas_3"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_690_1480507239001 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_018_1480507239005();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,120,39);
	
	
	(lib.happy_022_1480507239001 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_132_1480507239006();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,259,100);
	
	
	(lib.happy_462_1480507239001 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_511_1480507239005();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);
	
	
	(lib.happy_440_1480507239002 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_033_1480507239004();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,417,63);
	
	
	(lib.happy_405_1480507239002 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_735_1480507239004();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,153,20);
	
	
	(lib.happy_115_1480507239002 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_018_1480507239003();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,468,93);
	
	
	(lib.happy_649_1480507239002 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
		this.frame_14 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));
	
		// Layer 3
		this.instance = new lib.happy_440_1480507239002("synched",0);
		this.instance.setTransform(233.6,37.4,1,1,0,0,0,208.7,31.6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({scaleX:0.87,scaleY:0.87,y:49.4},5).to({scaleX:1.06,scaleY:1.06,y:32.5},3).to({scaleX:0.98,scaleY:0.98,y:39.4},3).to({scaleX:1,scaleY:1,y:37.4},2).wait(1));
	
		// Layer 4
		this.instance_1 = new lib.happy_405_1480507239002("synched",0);
		this.instance_1.setTransform(233.7,35.5,1,1,0,0,0,76.4,9.8);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.74,scaleY:0.74,y:47.5},5).to({scaleX:1.09,scaleY:1.09,y:30.5},3).to({scaleX:0.99,scaleY:0.99,y:37.5},3).to({scaleX:1,scaleY:1,y:35.5},2).wait(2));
	
		// Layer 5
		this.instance_2 = new lib.happy_115_1480507239002("synched",0);
		this.instance_2.setTransform(234,46.5,1,1,0,0,0,234,46.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:58.5},5).to({y:41.5},3).to({y:48.5},3).to({y:46.5},2).wait(2));
	
		// Layer 6
		this.instance_3 = new lib.happy_783_1480507239003();
		this.instance_3.setTransform(15.6,50.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));
	
		// Layer 2
		this.instance_4 = new lib.happy_169_1480507239004();
		this.instance_4.setTransform(-4.4,114);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.4,0,474,175);
	
	
	(lib.happy_094_1480507239003 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_022_1480507239001();
		this.instance.setTransform(1219.7,50,1,1,0,0,0,129.5,50);
	
		this.instance_1 = new lib.happy_690_1480507239001();
		this.instance_1.setTransform(780.2,169.5,1,1,0,0,0,60,19.5);
	
		this.instance_2 = new lib.happy_022_1480507239001();
		this.instance_2.setTransform(499.5,50,1,1,0,0,0,129.5,50);
	
		this.instance_3 = new lib.happy_690_1480507239001();
		this.instance_3.setTransform(60,169.5,1,1,0,0,0,60,19.5);
	
		this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,1349.2,189);
	
	
	(lib.happy_509_1480507238999 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 8
		this.instance = new lib.happy_094_1480507239003("synched",0);
		this.instance.setTransform(339.5,171,1,1,0,0,0,314.5,113);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-378.6},119).wait(1));
	
		// 曲线 3
		this.instance_1 = new lib.happy_507_1480507239006();
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,1374.2,1040);
	
	
	// stage content:
	(lib.p3 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 1
		this.duang = new lib.happy_649_1480507239002();
		this.duang.setTransform(319.5,880.3,1,1,0,0,0,234,82.3);
	
		this.timeline.addTween(cjs.Tween.get(this.duang).wait(20));
	
		// 图层 4
		this.instance = new lib.happy_462_1480507239001();
		this.instance.setTransform(320,520,1,1,0,0,0,320,520);
		this.instance.alpha = 0.199;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));
	
		// bg
		this.instance_1 = new lib.happy_509_1480507238999();
		this.instance_1.setTransform(327,520,1,1,0,0,0,327,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(320,520,1374.2,1040);
	
	});

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = (function (lib, img, cjs, ss) {
	
	var p; // shortcut to reference prototypes
	
	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#FFFFFF",
		manifest: []
	};
	
	
	
	// symbols:
	
	
	
	(lib.happy_040_1480507324318 = function() {
		this.spriteSheet = ss["p4_atlas_3"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_075_1480507324319 = function() {
		this.spriteSheet = ss["p4_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_159_1480507324320 = function() {
		this.spriteSheet = ss["p4_atlas_3"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_164_1480507324317 = function() {
		this.spriteSheet = ss["p4_atlas_3"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_288_1480507324319 = function() {
		this.spriteSheet = ss["p4_atlas_3"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_337_1480507324317 = function() {
		this.spriteSheet = ss["p4_atlas_3"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_370_1480507324319 = function() {
		this.spriteSheet = ss["p4_atlas_3"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_556_1480507324319 = function() {
		this.spriteSheet = ss["p4_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_756_1480507324317 = function() {
		this.spriteSheet = ss["p4_atlas_3"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_984_1480507324317 = function() {
		this.spriteSheet = ss["p4_atlas_3"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_675_1480507324316 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_756_1480507324317();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,417,63);
	
	
	(lib.happy_540_1480507324316 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_164_1480507324317();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,153,20);
	
	
	(lib.happy_517_1480507324314 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_159_1480507324320();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,180,68);
	
	
	(lib.happy_411_1480507324314 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_288_1480507324319();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,106,34);
	
	
	(lib.happy_270_1480507324314 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_370_1480507324319();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,85,27);
	
	
	(lib.happy_898_1480507324315 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_556_1480507324319();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);
	
	
	(lib.happy_277_1480507324315 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_075_1480507324319();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);
	
	
	(lib.happy_053_1480507324316 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_337_1480507324317();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,468,93);
	
	
	(lib.happy_985_1480507324314 = function() {
		this.initialize();
	
		// 矢量智能对象 拷贝
		this.instance = new lib.happy_270_1480507324314();
		this.instance.setTransform(707.6,130.5,1,1,0,0,0,42.5,13.5);
	
		this.instance_1 = new lib.happy_270_1480507324314();
		this.instance_1.setTransform(15.5,130.5,1,1,0,0,0,42.5,13.5);
	
		// 矢量智能对象
		this.instance_2 = new lib.happy_411_1480507324314();
		this.instance_2.setTransform(1164.2,185,1,1,0,0,0,53,17);
	
		this.instance_3 = new lib.happy_411_1480507324314();
		this.instance_3.setTransform(472,185,1,1,0,0,0,53,17);
	
		// 矢量智能对象_2
		this.instance_4 = new lib.happy_517_1480507324314();
		this.instance_4.setTransform(1092.2,12,1,1,0,0,0,90,34);
	
		this.instance_5 = new lib.happy_517_1480507324314();
		this.instance_5.setTransform(400,12,1,1,0,0,0,90,34);
	
		this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-27,-22,1244.2,224.1);
	
	
	(lib.happy_045_1480507324316 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
		this.frame_14 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));
	
		// Layer 3
		this.instance = new lib.happy_675_1480507324316("synched",0);
		this.instance.setTransform(233.6,37.4,1,1,0,0,0,208.7,31.6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({scaleX:0.87,scaleY:0.87,y:49.4},5).to({scaleX:1.06,scaleY:1.06,y:32.5},3).to({scaleX:0.98,scaleY:0.98,y:39.4},3).to({scaleX:1,scaleY:1,y:37.4},2).wait(1));
	
		// Layer 4
		this.instance_1 = new lib.happy_540_1480507324316("synched",0);
		this.instance_1.setTransform(233.7,35.5,1,1,0,0,0,76.4,9.8);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.74,scaleY:0.74,y:47.5},5).to({scaleX:1.09,scaleY:1.09,y:30.5},3).to({scaleX:0.99,scaleY:0.99,y:37.5},3).to({scaleX:1,scaleY:1,y:35.5},2).wait(2));
	
		// Layer 5
		this.instance_2 = new lib.happy_053_1480507324316("synched",0);
		this.instance_2.setTransform(234,46.5,1,1,0,0,0,234,46.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:58.5},5).to({y:41.5},3).to({y:48.5},3).to({y:46.5},2).wait(2));
	
		// Layer 6
		this.instance_3 = new lib.happy_984_1480507324317();
		this.instance_3.setTransform(15.6,50.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));
	
		// Layer 2
		this.instance_4 = new lib.happy_040_1480507324318();
		this.instance_4.setTransform(0,114);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,474,175);
	
	
	(lib.happy_456_1480507324315 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.instance = new lib.happy_985_1480507324314();
		this.instance.setTransform(324.5,175,1,1,0,0,0,236.5,102);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-365.6},119).wait(1));
	
		// Layer 1
		this.instance_1 = new lib.happy_277_1480507324315();
		this.instance_1.setTransform(320,520,1,1,0,0,0,320,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,1305.2,1040);
	
	
	// stage content:
	(lib.p4 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.duang = new lib.happy_045_1480507324316();
		this.duang.setTransform(319.1,880,1,1,0,0,0,234,82.3);
	
		this.timeline.addTween(cjs.Tween.get(this.duang).wait(20));
	
		// 图层 5
		this.instance = new lib.happy_898_1480507324315();
		this.instance.setTransform(320,520,1,1,0,0,0,320,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));
	
		// 云彩
		this.instance_1 = new lib.happy_456_1480507324315();
		this.instance_1.setTransform(320,520,1,1,0,0,0,320,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(320,520,1305.2,1040);
	
	});

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {
	
	var p; // shortcut to reference prototypes
	
	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#FFFFFF",
		manifest: [
			{src:"images/p5/happy_794_1480512666488.png", id:"happy_794_1480512666488"}
		]
	};
	
	
	
	// symbols:
	
	
	
	(lib._1111111 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._333 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._444 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_005_1480512666492 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_140_1480512666490 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_173_1480512666494 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_199_1480512666489 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_293_1480512666495 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_381_1480512666485 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_435_1480512666485 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_494_1480512666488 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_538_1480512666493 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_588_1480512666496 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_590_1480512666496 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_617_1480512666487 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_690_1480512666487 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_741_1480512666488 = function() {
		this.spriteSheet = ss["p5_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_748_1480512666486 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_774_1480512666486 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_782_1480512666490 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_794_1480512666488 = function() {
		this.initialize(img.happy_794_1480512666488);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,949);
	
	
	(lib.happy_832_1480512666497 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_882_1480512666492 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_953_1480512666494 = function() {
		this.spriteSheet = ss["p5_atlas_2"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_990_1480512666480 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_435_1480512666485();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,197,74);
	
	
	(lib.happy_889_1480512666484 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib._1111111();
		this.instance.setTransform(0,-17);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,-17,387,340);
	
	
	(lib.happy_863_1480512666483 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_832_1480512666497();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,84,184);
	
	
	(lib.happy_487_1480512666481 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_381_1480512666485();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,99,174);
	
	
	(lib.happy_927_1480512666480 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_774_1480512666486();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,107,220);
	
	
	(lib.happy_210_1480512666481 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_617_1480512666487();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,109,222);
	
	
	(lib.happy_197_1480512666481 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_690_1480512666487();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,153,265);
	
	
	(lib.happy_109_1480512666482 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_590_1480512666496();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,85,184);
	
	
	(lib.happy_016_1480512666482 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_005_1480512666492();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,196,145);
	
	
	(lib.happy_953_1480512666480 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_748_1480512666486();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,51,51);
	
	
	(lib.happy_750_1480512666480 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_882_1480512666492();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,59);
	
	
	(lib.happy_616_1480512666484 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib._333();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,608,105);
	
	
	(lib.happy_288_1480512666484 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib._444();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,475,68);
	
	
	(lib.happy_139_1480512666485 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_588_1480512666496();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,294,49);
	
	
	(lib.happy_066_1480512666484 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_741_1480512666488();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);
	
	
	(lib.happy_724_1480512666479 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_173_1480512666494();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_626_1480512666478 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_199_1480512666489();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,25,52);
	
	
	(lib.happy_580_1480512666478 = function() {
		this.initialize();
	
		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AvoF+IAAr7IfRAAIAAL7g");
		this.shape.setTransform(100.2,38.2);
	
		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,200.4,76.4);
	
	
	(lib.happy_317_1480512666485 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_794_1480512666488();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,949);
	
	
	(lib.happy_447_1480512666479 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_140_1480512666490();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,37,56);
	
	
	(lib.happy_427_1480512666479 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_782_1480512666490();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,19,36);
	
	
	(lib.happy_189_1480512666479 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_953_1480512666494();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,30,30);
	
	
	(lib.happy_087_1480512666479 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_538_1480512666493();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_073_1480512666479 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_293_1480512666495();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_060_1480512666478 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_494_1480512666488();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,31,34);
	
	
	(lib.happy_956_1480512666483 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_427_1480512666479("synched",0);
		this.instance.setTransform(9.5,18,1,1,0,0,0,9.5,18);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:25.2},7).to({rotation:0},7).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,19,36);
	
	
	(lib.happy_411_1480512666483 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_447_1480512666479("synched",0);
		this.instance.setTransform(18.5,28,1,1,0,0,0,18.5,28);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.4,rotation:-15},7).to({regX:18.5,rotation:0},7).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,37,56);
	
	
	(lib.happy_372_1480512666483 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_060_1480512666478("synched",0);
		this.instance.setTransform(15.5,17,1,1,0,0,0,15.5,17);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:16.9,rotation:24.5,x:15.6},7).to({regY:17,rotation:0,x:15.5},7).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,31,34);
	
	
	(lib.happy_008_1480512666483 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_626_1480512666478("synched",0);
		this.instance.setTransform(12.5,26,1,1,0,0,0,12.5,26);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:23.5},7).to({rotation:0},7).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,25,52);
	
	
	(lib.happy_703_1480512666481 = function() {
		this.initialize();
	
		// 人物
		this.instance = new lib.happy_927_1480512666480();
		this.instance.setTransform(76.5,132,1,1,0,0,0,53.5,110);
	
		// 人物's Outer Stroke
		this.instance_1 = new lib.happy_210_1480512666481();
		this.instance_1.setTransform(76.5,132,1,1,0,0,0,54.5,111);
	
		// 人物's Outer Glow
		this.instance_2 = new lib.happy_197_1480512666481();
		this.instance_2.setTransform(76.5,132.5,1,1,0,0,0,76.5,132.5);
	
		this.addChild(this.instance_2,this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,153,265);
	
	
	(lib.happy_400_1480512666481 = function() {
		this.initialize();
	
		// 人物
		this.instance = new lib.happy_703_1480512666481();
		this.instance.setTransform(320.5,442.5,1,1,0,0,0,76.5,132.5);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(244,310,153,265);
	
	
	(lib.happy_893_1480512666482 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_724_1480512666479("synched",0);
		this.instance.setTransform(11.5,11.5,1,1,0,0,0,11.5,11.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_768_1480512666482 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_189_1480512666479("synched",0);
		this.instance.setTransform(15,15,1,1,0,0,0,15,15);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,30,30);
	
	
	(lib.happy_723_1480512666482 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_073_1480512666479("synched",0);
		this.instance.setTransform(11.5,11.5,1,1,0,0,0,11.5,11.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_050_1480512666482 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_087_1480512666479("synched",0);
		this.instance.setTransform(11.5,11.5,1,1,0,0,0,11.5,11.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_270_1480512666478 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.instance = new lib.happy_317_1480512666485();
		this.instance.setTransform(527,574.5,1,1,180,0,0,527,474.5);
		this.instance.alpha = 0.371;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({alpha:0.371},20).wait(1));
	
		// Layer 1
		this.instance_1 = new lib.happy_317_1480512666485();
		this.instance_1.setTransform(527,474.5,1,1,0,0,0,527,474.5);
		this.instance_1.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},19).to({alpha:0},20).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,1049);
	
	
	(lib.happy_177_1480512666478 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Green
		this.instance = new lib.happy_953_1480512666480();
		this.instance.setTransform(531.5,25.5,1,1,0,0,0,25.5,25.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:43.5},12).to({y:25.5},12).wait(1));
	
		// 图层 8
		this.instance_1 = new lib.happy_750_1480512666480();
		this.instance_1.setTransform(27,147.5,1,1,0,0,0,27,29.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:131.5},12).to({y:145.5},12).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,557,177);
	
	
	(lib.happy_675_1480512666481 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 矢量智能对象 拷贝
		this.instance = new lib.happy_768_1480512666482();
		this.instance.setTransform(95,169,1,1,0,0,0,15,15);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},15).to({alpha:1},14).wait(1));
	
		// 矢量智能对象 拷贝 2
		this.instance_1 = new lib.happy_893_1480512666482();
		this.instance_1.setTransform(233.5,66.5,1,1,0,0,0,11.5,11.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},15).to({alpha:1},14).wait(1));
	
		// 矢量智能对象 拷贝 3
		this.instance_2 = new lib.happy_723_1480512666482();
		this.instance_2.setTransform(295.5,165.5,1,1,0,0,0,11.5,11.5);
		this.instance_2.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},15).to({alpha:0},14).wait(1));
	
		// 矢量智能对象
		this.instance_3 = new lib.happy_050_1480512666482();
		this.instance_3.setTransform(58.5,107.5,1,1,0,0,0,11.5,11.5);
		this.instance_3.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},15).to({alpha:0},14).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(47,55,260,129);
	
	
	(lib.happy_288_1480512666481 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 图层 3
		this.instance = new lib.happy_008_1480512666483();
		this.instance.setTransform(224.5,353,1,1,0,0,0,12.5,26);
		this.instance.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:363,alpha:1},15).to({y:353,alpha:0},14).wait(1));
	
		// 图层 2
		this.instance_1 = new lib.happy_372_1480512666483();
		this.instance_1.setTransform(259.5,300,1,1,0,0,0,15.5,17);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:287,alpha:0},15).to({y:300,alpha:1},14).wait(1));
	
		// 图层 5
		this.instance_2 = new lib.happy_411_1480512666483();
		this.instance_2.setTransform(429.5,338,1,1,0,0,0,18.5,28);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:431.5,y:317,alpha:0},15).to({x:429.5,y:338,alpha:1},14).wait(1));
	
		// 图层 4
		this.instance_3 = new lib.happy_956_1480512666483();
		this.instance_3.setTransform(378.5,307,1,1,0,0,0,9.5,18);
		this.instance_3.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:336,alpha:1},15).to({y:307,alpha:0},14).wait(1));
	
		// 星星
		this.instance_4 = new lib.happy_675_1480512666481();
		this.instance_4.setTransform(344,362.5,1,1,0,0,0,190,101.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));
	
		// 人物
		this.instance_5 = new lib.happy_400_1480512666481();
		this.instance_5.setTransform(326.5,548.1,1,1,0,-2.5,-1.7,326.4,548.1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:326.5,regY:548,scaleY:0.98,skewX:0,skewY:0,y:548},7).to({regX:326.6,scaleY:1.01,skewX:3.5,skewY:1.7,x:326.6,y:548.1},7).to({regX:326.5,scaleY:0.98,skewX:0,skewY:0,x:326.5,y:548},8).to({regX:326.4,regY:548.1,scaleY:1,skewX:-2.5,skewY:-1.7,y:548.1},7).wait(1));
	
		// 吉他
		this.instance_6 = new lib.happy_487_1480512666481();
		this.instance_6.setTransform(209.5,437,1,1,0,0,0,49.5,87);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));
	
		// 架子鼓
		this.instance_7 = new lib.happy_016_1480512666482();
		this.instance_7.setTransform(400,521.5,1,1,0,0,0,98,146.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:97.9,regY:146.6,scaleX:0.95,scaleY:0.95,y:521.6},8).to({regX:98,regY:146.5,scaleX:1,scaleY:1,y:521.5},7).to({regX:97.9,regY:146.6,scaleX:0.95,scaleY:0.95,y:521.6},7).to({regX:98,regY:146.5,scaleX:1,scaleY:1,y:521.5},7).wait(1));
	
		// 音响1
		this.instance_8 = new lib.happy_109_1480512666482();
		this.instance_8.setTransform(149.5,504,1,1,0,0,0,42.5,185);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.12,scaleY:1.07},5).to({scaleX:1,scaleY:1},6).to({scaleX:1.12,scaleY:1.07},6).to({scaleX:1,scaleY:1},6).to({scaleX:1.12,scaleY:1.07},6).wait(1));
	
		// 音响2
		this.instance_9 = new lib.happy_863_1480512666483();
		this.instance_9.setTransform(490,503,1,1,0,0,0,42,184);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.05,scaleY:1.04},5).to({scaleX:1,scaleY:1},6).to({scaleX:1.05,scaleY:1.04},6).to({scaleX:1,scaleY:1},6).to({scaleX:1.05,scaleY:1.04},6).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(107,283,425,294.4);
	
	
	// stage content:
	
	
	
	(lib.p5 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_59 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));
	
		// 图层 2
		this.btn = new lib.happy_580_1480512666478();
		this.btn.setTransform(322.6,961.8,1,1,0,0,0,100.2,38.2);
		this.btn.alpha = 0.012;
		this.btn._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.btn).wait(41).to({_off:false},0).wait(19));
	
		// Green
		this.instance = new lib.happy_177_1480512666478();
		this.instance.setTransform(319.5,127.5,1,1,0,0,0,278.5,82.5);
		this.instance.alpha = 0;
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(36));
	
		// 图层 6
		this.instance_1 = new lib.happy_288_1480512666484();
		this.instance_1.setTransform(324.5,221,1,1,0,0,0,229.5,34);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(36));
	
		// 解锁音乐家翻转能量
		this.instance_2 = new lib.happy_139_1480512666485();
		this.instance_2.setTransform(323,122.5,1,1,0,0,0,147,24.5);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({y:158.5,alpha:1},7,cjs.Ease.get(1)).to({y:150.5},4).wait(42));
	
		// 图层 7
		this.instance_3 = new lib.happy_616_1480512666484();
		this.instance_3.setTransform(322,96,0.664,0.664,0,0,0,292,87);
		this.instance_3.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:292.1,scaleX:1.06,scaleY:1.06,x:322.1,alpha:1},9,cjs.Ease.get(1)).to({regX:292,scaleX:1,scaleY:1,x:322},4).wait(47));
	
		// 动画
		this.instance_4 = new lib.happy_288_1480512666481();
		this.instance_4.setTransform(320.5,418,1,1,0,0,0,320.5,418);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(1)).wait(28));
	
		// 下一关
		this.instance_5 = new lib.happy_990_1480512666480();
		this.instance_5.setTransform(325.5,946,1,1,0,0,0,98.5,37);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({_off:false},0).to({y:974,alpha:1},9,cjs.Ease.get(1)).to({y:966},4).wait(19));
	
		// 商品
		this.instance_6 = new lib.happy_889_1480512666484();
		this.instance_6.setTransform(319.5,763,1,1,0,0,0,196.5,156);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({y:727,alpha:1},9,cjs.Ease.get(1)).to({y:737},4).wait(19));
	
		// bg
		this.instance_7 = new lib.happy_270_1480512666478();
		this.instance_7.setTransform(364,547.5,1,1,0,0,0,527,524.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));
	
		// 图层 0
		this.instance_8 = new lib.happy_066_1480512666484();
		this.instance_8.setTransform(320,520,1,1,0,0,0,320,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(157,520,1054,1072);
	
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {
	
	var p; // shortcut to reference prototypes
	
	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#FFFFFF",
		manifest: [
			{src:"images/p6/happy_659_1480512781111.png", id:"happy_659_1480512781111"}
		]
	};
	
	
	
	// symbols:
	
	
	
	(lib._111 = function() {
		this.spriteSheet = ss["p6_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._222 = function() {
		this.spriteSheet = ss["p6_atlas_2"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._2222 = function() {
		this.spriteSheet = ss["p6_atlas_2"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_045_1480512781117 = function() {
		this.spriteSheet = ss["p6_atlas_2"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_052_1480512781115 = function() {
		this.spriteSheet = ss["p6_atlas_2"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_107_1480512781106 = function() {
		this.spriteSheet = ss["p6_atlas_2"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_222_1480512781126 = function() {
		this.spriteSheet = ss["p6_atlas_2"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_259_1480512781110 = function() {
		this.spriteSheet = ss["p6_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_262_1480512781107 = function() {
		this.spriteSheet = ss["p6_atlas_2"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_348_1480512781113 = function() {
		this.spriteSheet = ss["p6_atlas_2"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_447_1480512781108 = function() {
		this.spriteSheet = ss["p6_atlas_2"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_632_1480512781105 = function() {
		this.spriteSheet = ss["p6_atlas_2"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_659_1480512781111 = function() {
		this.initialize(img.happy_659_1480512781111);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,949);
	
	
	(lib.happy_700_1480512781120 = function() {
		this.spriteSheet = ss["p6_atlas_2"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_326_1480512781105 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_659_1480512781111();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,949);
	
	
	(lib.happy_377_1480512781099 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_700_1480512781120();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,59);
	
	
	(lib.happy_069_1480512781099 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_262_1480512781107();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,51,51);
	
	
	(lib.happy_390_1480512781102 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_259_1480512781110();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);
	
	
	(lib.happy_120_1480512781099 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_632_1480512781105();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,197,74);
	
	
	(lib.happy_445_1480512781105 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_222_1480512781126();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,400,49);
	
	
	(lib.happy_372_1480512781105 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib._111();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,608,171);
	
	
	(lib.happy_122_1480512781104 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib._222();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,405,70);
	
	
	(lib.happy_825_1480512781103 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_107_1480512781106();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,417,229);
	
	
	(lib.happy_844_1480512781104 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_348_1480512781113();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,2,103);
	
	
	(lib.happy_644_1480512781104 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_052_1480512781115();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,36);
	
	
	(lib.happy_090_1480512781104 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_045_1480512781117();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,159,166);
	
	
	(lib.happy_175_1480512781103 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_447_1480512781108();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,165,270);
	
	
	(lib.happy_132_1480512781104 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib._2222();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,397,345);
	
	
	(lib.happy_331_1480512781095 = function() {
		this.initialize();
	
		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AvxF+IAAr7IfjAAIAAL7g");
		this.shape.setTransform(101,38.2);
	
		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,202.1,76.4);
	
	
	(lib.happy_987_1480512781095 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Green
		this.instance = new lib.happy_069_1480512781099();
		this.instance.setTransform(531.5,25.5,1,1,0,0,0,25.5,25.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:43.5},12).to({y:25.5},12).wait(1));
	
		// 图层 8
		this.instance_1 = new lib.happy_377_1480512781099();
		this.instance_1.setTransform(27,147.5,1,1,0,0,0,27,29.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:131.5},12).to({y:145.5},12).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,557,177);
	
	
	(lib.happy_850_1480512781102 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_132_1480512781104();
		this.instance.setTransform(192.5,140.5,1,1,0,0,0,197.5,158.5);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-5,-18,397,345);
	
	
	(lib.happy_711_1480512781103 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_372_1480512781105();
		this.instance.setTransform(292,87,1,1,0,0,0,292,87);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,608,171);
	
	
	(lib.happy_261_1480512781103 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_122_1480512781104();
		this.instance.setTransform(233.1,35,1,1,0,0,0,194.5,35);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(38.6,0,405,70);
	
	
	(lib.happy_245_1480512781103 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_445_1480512781105();
		this.instance.setTransform(151.1,24.5,1,1,0,0,0,200,24.5);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-48.9,0,400,49);
	
	
	(lib.happy_767_1480512781103 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 人物
		this.instance = new lib.happy_175_1480512781103();
		this.instance.setTransform(208.5,259.1,1,1,0,-2.7,-1.7,70.5,241.1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:70.6,regY:241.2,scaleY:0.95,skewX:-0.7,skewY:-0.5,x:208.6},10).to({regX:70.7,scaleY:0.98,skewX:2,skewY:2.2,x:208.7},12).to({regX:70.6,scaleY:0.95,skewX:-0.7,skewY:-0.5,x:208.6},10).to({regX:70.5,regY:241.1,scaleY:1,skewX:-2.7,skewY:-1.7,x:208.5},12).wait(1));
	
		// 图层 4
		this.instance_1 = new lib.happy_644_1480512781104();
		this.instance_1.setTransform(108,199,1,1,0,0,0,27,18);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:171.5},22).to({y:199},22).wait(1));
	
		// 图层 3
		this.instance_2 = new lib.happy_844_1480512781104();
		this.instance_2.setTransform(108,132.5,1,1,0,0,0,1,51.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45));
	
		// 图层 5
		this.instance_3 = new lib.happy_090_1480512781104();
		this.instance_3.setTransform(107.5,83,1,1,0,0,0,79.5,83);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45));
	
		// 砖墙
		this.instance_4 = new lib.happy_825_1480512781103();
		this.instance_4.setTransform(208.5,144.5,1,1,0,0,0,208.5,114.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,417,290.1);
	
	
	(lib.happy_230_1480512781095 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.instance = new lib.happy_326_1480512781105();
		this.instance.setTransform(527,574.5,1,1,180,0,0,527,474.5);
		this.instance.alpha = 0.371;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({alpha:0.371},20).wait(1));
	
		// Layer 1
		this.instance_1 = new lib.happy_326_1480512781105();
		this.instance_1.setTransform(527,474.5,1,1,0,0,0,527,474.5);
		this.instance_1.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},19).to({alpha:0},20).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,1049);
	
	
	// stage content:
	
	
	
	(lib.p6 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_42 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));
	
		// 图层 2
		this.btn = new lib.happy_331_1480512781095();
		this.btn.setTransform(323.4,961.8,1,1,0,0,0,101,38.2);
		this.btn.alpha = 0.012;
		this.btn._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.btn).wait(41).to({_off:false},0).wait(2));
	
		// Green
		this.instance = new lib.happy_987_1480512781095();
		this.instance.setTransform(319.5,127.5,1,1,0,0,0,278.5,82.5);
		this.instance.alpha = 0;
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(19));
	
		// 图层 6
		this.instance_1 = new lib.happy_261_1480512781103();
		this.instance_1.setTransform(324.5,221,1,1,0,0,0,229.5,34);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(19));
	
		// 解锁音乐家翻转能量
		this.instance_2 = new lib.happy_245_1480512781103();
		this.instance_2.setTransform(323,122.5,1,1,0,0,0,147,24.5);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({y:158.5,alpha:1},7,cjs.Ease.get(1)).to({y:150.5},4).wait(25));
	
		// 图层 7
		this.instance_3 = new lib.happy_711_1480512781103();
		this.instance_3.setTransform(322,96,0.664,0.664,0,0,0,292,87);
		this.instance_3.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:292.1,scaleX:1.06,scaleY:1.06,x:322.1,alpha:1},9,cjs.Ease.get(1)).to({regX:292,scaleX:1,scaleY:1,x:322},4).wait(30));
	
		// Layer 14
		this.instance_4 = new lib.happy_767_1480512781103();
		this.instance_4.setTransform(318.5,416,1,1,0,0,0,208.5,144);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(1)).wait(11));
	
		// 下一关
		this.instance_5 = new lib.happy_120_1480512781099();
		this.instance_5.setTransform(325.5,946,1,1,0,0,0,98.5,37);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({_off:false},0).to({y:974,alpha:1},9,cjs.Ease.get(1)).to({y:966},4).wait(2));
	
		// 商品
		this.instance_6 = new lib.happy_850_1480512781102();
		this.instance_6.setTransform(319.5,763,1,1,0,0,0,196.5,156);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({y:727,alpha:1},9,cjs.Ease.get(1)).to({y:737},4).wait(2));
	
		// bg
		this.instance_7 = new lib.happy_230_1480512781095();
		this.instance_7.setTransform(364,547.5,1,1,0,0,0,527,524.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(43));
	
		// 图层 0
		this.instance_8 = new lib.happy_390_1480512781102();
		this.instance_8.setTransform(320,520,1,1,0,0,0,320,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(43));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(157,520,1054,1072);
	
	});

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {
	
	var p; // shortcut to reference prototypes
	
	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#FFFFFF",
		manifest: [
			{src:"images/p7/happy_506_1480513260568.png", id:"happy_506_1480513260568"}
		]
	};
	
	
	
	// symbols:
	
	
	
	(lib._3333 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._555 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._666 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_023_1480513260571 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_113_1480513260564 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_193_1480513260562 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_287_1480513260583 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_316_1480513260574 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_332_1480513260577 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_344_1480513260567 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_398_1480513260568 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_452_1480513260579 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_484_1480513260562 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_506_1480513260568 = function() {
		this.initialize(img.happy_506_1480513260568);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,949);
	
	
	(lib.happy_760_1480513260569 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_823_1480513260583 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_872_1480513260582 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_880_1480513260563 = function() {
		this.spriteSheet = ss["p7_atlas_2"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_946_1480513260567 = function() {
		this.spriteSheet = ss["p7_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_811_1480513260559 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib._3333();
		this.instance.setTransform(-3,-16);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-3,-16,396,345);
	
	
	(lib.happy_896_1480513260555 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_332_1480513260577();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,59);
	
	
	(lib.happy_577_1480513260555 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_880_1480513260563();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,51,51);
	
	
	(lib.happy_439_1480513260559 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_946_1480513260567();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);
	
	
	(lib.happy_438_1480513260556 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_193_1480513260562();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,197,74);
	
	
	(lib.happy_878_1480513260555 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_452_1480513260579();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_711_1480513260555 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_823_1480513260583();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_575_1480513260555 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_287_1480513260583();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_373_1480513260561 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_506_1480513260568();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,949);
	
	
	(lib.happy_307_1480513260551 = function() {
		this.initialize();
	
		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AvkGSIAAsjIfJAAIAAMjg");
		this.shape.setTransform(99.7,40.2);
	
		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,199.5,80.5);
	
	
	(lib.happy_201_1480513260555 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_872_1480513260582();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,30,30);
	
	
	(lib.happy_681_1480513260561 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib._555();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,630,145);
	
	
	(lib.happy_376_1480513260561 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib._666();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,454,68);
	
	
	(lib.happy_253_1480513260561 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_316_1480513260574();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,311,49);
	
	
	(lib.happy_775_1480513260560 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_398_1480513260568();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,73,72);
	
	
	(lib.happy_711_1480513260560 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_484_1480513260562();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,398,190);
	
	
	(lib.happy_313_1480513260560 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_023_1480513260571();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,89,67);
	
	
	(lib.happy_241_1480513260560 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_344_1480513260567();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,98,83);
	
	
	(lib.happy_224_1480513260560 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_760_1480513260569();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,88,70);
	
	
	(lib.happy_004_1480513260560 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_113_1480513260564();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,184,276);
	
	
	(lib.happy_623_1480513260559 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_253_1480513260561();
		this.instance.setTransform(147.1,24,1,1,0,0,0,155.5,24.5);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-8.4,-0.5,311,49);
	
	
	(lib.happy_590_1480513260559 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_376_1480513260561();
		this.instance.setTransform(229.1,34,1,1,0,0,0,227,34);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(2.1,0,454,68);
	
	
	(lib.happy_544_1480513260559 = function() {
		this.initialize();
	
		// Layer 2
		this.instance = new lib.happy_681_1480513260561();
		this.instance.setTransform(293.1,88.1,1,1,0,0,0,303,87);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-9.9,1.1,630,145);
	
	
	(lib.happy_911_1480513260557 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_201_1480513260555("synched",0);
		this.instance.setTransform(15,15,1,1,0,0,0,15,15);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,30,30);
	
	
	(lib.happy_567_1480513260557 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_575_1480513260555("synched",0);
		this.instance.setTransform(11.5,11.5,1,1,0,0,0,11.5,11.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_542_1480513260557 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_878_1480513260555("synched",0);
		this.instance.setTransform(11.5,11.5,1,1,0,0,0,11.5,11.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_423_1480513260557 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_711_1480513260555("synched",0);
		this.instance.setTransform(11.5,11.5,1,1,0,0,0,11.5,11.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_245_1480513260557 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 矢量智能对象 拷贝
		this.instance = new lib.happy_911_1480513260557();
		this.instance.setTransform(95,169,1,1,0,0,0,15,15);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},15).to({alpha:1},14).wait(1));
	
		// 矢量智能对象 拷贝 2
		this.instance_1 = new lib.happy_423_1480513260557();
		this.instance_1.setTransform(233.5,66.5,1,1,0,0,0,11.5,11.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},15).to({alpha:1},14).wait(1));
	
		// 矢量智能对象 拷贝 3
		this.instance_2 = new lib.happy_567_1480513260557();
		this.instance_2.setTransform(295.5,165.5,1,1,0,0,0,11.5,11.5);
		this.instance_2.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},15).to({alpha:0},14).wait(1));
	
		// 矢量智能对象
		this.instance_3 = new lib.happy_542_1480513260557();
		this.instance_3.setTransform(58.5,107.5,1,1,0,0,0,11.5,11.5);
		this.instance_3.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},15).to({alpha:0},14).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(47,55,260,129);
	
	
	(lib.happy_480_1480513260554 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.instance = new lib.happy_373_1480513260561();
		this.instance.setTransform(527,574.5,1,1,180,0,0,527,474.5);
		this.instance.alpha = 0.371;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({alpha:0.371},20).wait(1));
	
		// Layer 1
		this.instance_1 = new lib.happy_373_1480513260561();
		this.instance_1.setTransform(527,474.5,1,1,0,0,0,527,474.5);
		this.instance_1.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},19).to({alpha:0},20).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,1049);
	
	
	(lib.happy_921_1480513260560 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_245_1480513260557();
		this.instance.setTransform(250.1,122,1,1,0,0,0,190,101.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));
	
		// 人物
		this.instance_1 = new lib.happy_004_1480513260560();
		this.instance_1.setTransform(245.1,268.2,1,1.044,0,-5.3,-4.4,106,248.1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.97,skewX:0,skewY:0,x:245,y:268.1},7).to({scaleY:1.04,skewX:5.9,skewY:4.2,y:268.2},7).to({scaleY:0.97,skewX:0,skewY:0,y:268.1},8).to({scaleY:1.04,skewX:-5.3,skewY:-4.4,x:245.1,y:268.2},7).to({scaleY:0.97,skewX:0,skewY:0,x:245,y:268.1},8).to({scaleY:1.04,skewX:5.9,skewY:4.2,y:268.2},7).to({scaleY:0.97,skewX:0,skewY:0,y:268.1},8).to({scaleY:1.04,skewX:-5.3,skewY:-4.4,x:245.1,y:268.2},7).wait(1));
	
		// 图层 1
		this.instance_2 = new lib.happy_241_1480513260560();
		this.instance_2.setTransform(325,41.5,1,1,0,0,0,49,41.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},29).to({alpha:1},30).wait(1));
	
		// 图层 2
		this.instance_3 = new lib.happy_775_1480513260560();
		this.instance_3.setTransform(387.5,93,1,1,0,0,0,36.5,36);
		this.instance_3.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},29).to({alpha:0},30).wait(1));
	
		// 图层 3
		this.instance_4 = new lib.happy_224_1480513260560();
		this.instance_4.setTransform(44,59,1,1,0,0,0,44,35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0},29).to({alpha:1},30).wait(1));
	
		// 图层 4
		this.instance_5 = new lib.happy_313_1480513260560();
		this.instance_5.setTransform(142.5,44.5,1,1,0,0,0,44.5,33.5);
		this.instance_5.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},29).to({alpha:0},30).wait(1));
	
		// bg
		this.instance_6 = new lib.happy_711_1480513260560();
		this.instance_6.setTransform(231,183,1,1,0,0,0,199,95);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,430,305.4);
	
	
	(lib.happy_096_1480513260552 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Green
		this.instance = new lib.happy_577_1480513260555();
		this.instance.setTransform(531.5,25.5,1,1,0,0,0,25.5,25.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:43.5},12).to({y:25.5},12).wait(1));
	
		// 图层 8
		this.instance_1 = new lib.happy_896_1480513260555();
		this.instance_1.setTransform(27,147.5,1,1,0,0,0,27,29.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:131.5},12).to({y:145.5},12).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,557,177);
	
	
	// stage content:
	
	
	
	(lib.p7 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_59 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));
	
		// 图层 1
		this.btn = new lib.happy_307_1480513260551();
		this.btn.setTransform(324.3,960.4,1,1,0,0,0,99.7,40.2);
		this.btn.alpha = 0.012;
		this.btn._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.btn).wait(41).to({_off:false},0).wait(19));
	
		// Green
		this.instance = new lib.happy_096_1480513260552();
		this.instance.setTransform(319.5,127.5,1,1,0,0,0,278.5,82.5);
		this.instance.alpha = 0;
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(36));
	
		// 图层 6
		this.instance_1 = new lib.happy_590_1480513260559();
		this.instance_1.setTransform(324.5,221,1,1,0,0,0,229.5,34);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(36));
	
		// 解锁音乐家翻转能量
		this.instance_2 = new lib.happy_623_1480513260559();
		this.instance_2.setTransform(323,122.5,1,1,0,0,0,147,24.5);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({y:158.5,alpha:1},7,cjs.Ease.get(1)).to({y:150.5},4).wait(42));
	
		// 图层 7
		this.instance_3 = new lib.happy_544_1480513260559();
		this.instance_3.setTransform(322,96,0.664,0.664,0,0,0,292,87);
		this.instance_3.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:292.1,scaleX:1.06,scaleY:1.06,x:322.1,alpha:1},9,cjs.Ease.get(1)).to({regX:292,scaleX:1,scaleY:1,x:322},4).wait(47));
	
		// Layer 1
		this.instance_4 = new lib.happy_921_1480513260560();
		this.instance_4.setTransform(300,408,1,1,0,0,0,215,148);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(1)).wait(28));
	
		// 下一关
		this.instance_5 = new lib.happy_438_1480513260556();
		this.instance_5.setTransform(325.5,946,1,1,0,0,0,98.5,37);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({_off:false},0).to({y:974,alpha:1},9,cjs.Ease.get(1)).to({y:966},4).wait(19));
	
		// 商品
		this.instance_6 = new lib.happy_811_1480513260559();
		this.instance_6.setTransform(319.5,763,1,1,0,0,0,196.5,156);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({y:727,alpha:1},9,cjs.Ease.get(1)).to({y:737},4).wait(19));
	
		// bg
		this.instance_7 = new lib.happy_480_1480513260554();
		this.instance_7.setTransform(364,547.5,1,1,0,0,0,527,524.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));
	
		// 图层 0
		this.instance_8 = new lib.happy_439_1480513260559();
		this.instance_8.setTransform(320,520,1,1,0,0,0,320,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(157,520,1054,1072);
	
	});

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports=(function (lib, img, cjs, ss) {
	
	var p; // shortcut to reference prototypes
	
	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#FFFFFF",
		manifest: [
			{src:"images/p8/happy_823_1480515217429.png", id:"happy_823_1480515217429"}
		]
	};
	
	
	
	// symbols:
	
	
	
	(lib._4444 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._777 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._888 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_133_1480515217430 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_167_1480515217456 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_222_1480515217428 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_325_1480515217436 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_338_1480515217438 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_358_1480515217428 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_369_1480515217453 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_496_1480515217433 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_587_1480515217446 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_597_1480515217434 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_612_1480515217455 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_635_1480515217441 = function() {
		this.spriteSheet = ss["p8_atlas_2"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_823_1480515217429 = function() {
		this.initialize(img.happy_823_1480515217429);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,949);
	
	
	(lib.happy_923_1480515217431 = function() {
		this.spriteSheet = ss["p8_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.happy_982_1480515217413 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_133_1480515217430();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_598_1480515217412 = function() {
		this.initialize();
	
		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("Av9F5IAArxIf7AAIAALxg");
		this.shape.setTransform(102.2,37.7);
	
		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,204.5,75.5);
	
	
	(lib.happy_794_1480515217411 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_823_1480515217429();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,949);
	
	
	(lib.happy_472_1480515217421 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_358_1480515217428();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,30,30);
	
	
	(lib.happy_420_1480515217411 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_587_1480515217446();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_325_1480515217413 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_222_1480515217428();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_531_1480515217420 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_496_1480515217433();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,415,133);
	
	
	(lib.happy_277_1480515217419 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_635_1480515217441();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,32,32);
	
	
	(lib.happy_183_1480515217419 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_167_1480515217456();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,221,53);
	
	
	(lib.happy_121_1480515217420 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_612_1480515217455();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,206,260);
	
	
	(lib.happy_981_1480515217421 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib._888();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,440,98);
	
	
	(lib.happy_572_1480515217420 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_369_1480515217453();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,311,49);
	
	
	(lib.happy_312_1480515217421 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib._777();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,117);
	
	
	(lib.happy_970_1480515217418 = function() {
		this.initialize();
	
		// Layer 3
		this.instance = new lib._4444();
		this.instance.setTransform(-26,-20);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-26,-20,435,344);
	
	
	(lib.happy_856_1480515217419 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_597_1480515217434();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54,59);
	
	
	(lib.happy_213_1480515217418 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_325_1480515217436();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,51,51);
	
	
	(lib.happy_059_1480515217417 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_923_1480515217431();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1040);
	
	
	(lib.happy_017_1480515217418 = function() {
		this.initialize();
	
		// Layer 1
		this.instance = new lib.happy_338_1480515217438();
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,197,74);
	
	
	(lib.happy_529_1480515217411 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Green
		this.instance = new lib.happy_213_1480515217418();
		this.instance.setTransform(531.5,5.5,1,1,0,0,0,25.5,25.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:23.5},12).to({y:5.5},12).wait(1));
	
		// 图层 8
		this.instance_1 = new lib.happy_856_1480515217419();
		this.instance_1.setTransform(27,147.5,1,1,0,0,0,27,29.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:131.5},12).to({y:145.5},12).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,-20,557,197);
	
	
	(lib.happy_273_1480515217414 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.instance = new lib.happy_794_1480515217411();
		this.instance.setTransform(527,574.5,1,1,180,0,0,527,474.5);
		this.instance.alpha = 0.371;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({alpha:0.371},20).wait(1));
	
		// Layer 1
		this.instance_1 = new lib.happy_794_1480515217411();
		this.instance_1.setTransform(527,474.5,1,1,0,0,0,527,474.5);
		this.instance_1.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},19).to({alpha:0},20).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,1054,1049);
	
	
	(lib.happy_700_1480515217420 = function() {
		this.initialize();
	
		// 矩形 2 拷贝
		this.instance = new lib.happy_531_1480515217420();
		this.instance.setTransform(207.5,66.5,1,1,0,0,0,207.5,66.5);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,415,133);
	
	
	(lib.happy_988_1480515217417 = function() {
		this.initialize();
	
		// Layer 3
		this.instance = new lib.happy_981_1480515217421();
		this.instance.setTransform(233.1,49,1,1,0,0,0,247.5,49);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-14.4,0,440,98);
	
	
	(lib.happy_678_1480515217418 = function() {
		this.initialize();
	
		// Layer 3
		this.instance = new lib.happy_312_1480515217421();
		this.instance.setTransform(291.1,87,1,1,0,0,0,320,87);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-28.9,0,640,117);
	
	
	(lib.happy_198_1480515217417 = function() {
		this.initialize();
	
		// Layer 3
		this.instance = new lib.happy_572_1480515217420();
		this.instance.setTransform(149.5,23.5,1,1,0,0,0,155.5,24.5);
	
		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-6,-1,311,49);
	
	
	(lib.happy_921_1480515217414 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_472_1480515217421("synched",0);
		this.instance.setTransform(15,15,1,1,0,0,0,15,15);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,30,30);
	
	
	(lib.happy_524_1480515217414 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_420_1480515217411("synched",0);
		this.instance.setTransform(11.5,11.5,1,1,0,0,0,11.5,11.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_344_1480515217415 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_325_1480515217413("synched",0);
		this.instance.setTransform(11.5,11.5,1,1,0,0,0,11.5,11.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_253_1480515217414 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.happy_982_1480515217413("synched",0);
		this.instance.setTransform(11.5,11.5,1,1,0,0,0,11.5,11.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,23,23);
	
	
	(lib.happy_180_1480515217414 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 矢量智能对象 拷贝
		this.instance = new lib.happy_921_1480515217414();
		this.instance.setTransform(95,169,1,1,0,0,0,15,15);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},15).to({alpha:1},14).wait(1));
	
		// 矢量智能对象 拷贝 2
		this.instance_1 = new lib.happy_524_1480515217414();
		this.instance_1.setTransform(233.5,66.5,1,1,0,0,0,11.5,11.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},15).to({alpha:1},14).wait(1));
	
		// 矢量智能对象 拷贝 3
		this.instance_2 = new lib.happy_253_1480515217414();
		this.instance_2.setTransform(295.5,165.5,1,1,0,0,0,11.5,11.5);
		this.instance_2.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},15).to({alpha:0},14).wait(1));
	
		// 矢量智能对象
		this.instance_3 = new lib.happy_344_1480515217415();
		this.instance_3.setTransform(58.5,107.5,1,1,0,0,0,11.5,11.5);
		this.instance_3.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},15).to({alpha:0},14).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(47,55,260,129);
	
	
	(lib.happy_478_1480515217419 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 星星
		this.instance = new lib.happy_180_1480515217414();
		this.instance.setTransform(254.1,102,1,1,0,0,0,190,101.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(33));
	
		// 人物
		this.instance_1 = new lib.happy_121_1480515217420();
		this.instance_1.setTransform(240,237.9,1,1.003,0,-3.7,-2.2,111,237.8);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:238,scaleY:0.95,skewX:0,skewY:0,y:238},8).to({regY:238.1,scaleY:1,rotation:3,y:238.1},8).to({regY:238,scaleY:0.95,rotation:0,y:238},8).to({regY:237.8,scaleY:1,skewX:-3.7,skewY:-2.2,y:237.9},8).wait(1));
	
		// 图层 2
		this.instance_2 = new lib.happy_277_1480515217419();
		this.instance_2.setTransform(334,240.5,1,1,0,0,0,16,32.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.2,scaleY:0.88},5,cjs.Ease.get(1)).wait(1).to({scaleX:1.09},0).to({scaleX:0.88,scaleY:0.86,y:140.5},15,cjs.Ease.get(1)).wait(1).to({scaleX:0.91,scaleY:1,y:233},10,cjs.Ease.get(-1)).wait(1));
	
		// 组 1
		this.instance_3 = new lib.happy_700_1480515217420();
		this.instance_3.setTransform(232.5,155.5,1,1,0,0,0,207.5,66.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33));
	
		// 图层 1
		this.instance_4 = new lib.happy_183_1480515217419();
		this.instance_4.setTransform(110.5,222.5,1,1,0,0,0,110.5,26.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,-3.8,440,268.2);
	
	
	// stage content:
	(lib.p8 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_57 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(57).call(this.frame_57).wait(1));
	
		// 图层 1
		this.btn = new lib.happy_598_1480515217412();
		this.btn.setTransform(326.8,962.9,1,1,0,0,0,102.2,37.7);
		this.btn.alpha = 0.012;
		this.btn._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.btn).wait(41).to({_off:false},0).wait(17));
	
		// Green
		this.instance = new lib.happy_529_1480515217411();
		this.instance.setTransform(319.5,127.5,1,1,0,0,0,278.5,82.5);
		this.instance.alpha = 0;
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(34));
	
		// 图层 6
		this.instance_1 = new lib.happy_988_1480515217417();
		this.instance_1.setTransform(324.5,221,1,1,0,0,0,229.5,34);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(34));
	
		// 解锁音乐家翻转能量
		this.instance_2 = new lib.happy_198_1480515217417();
		this.instance_2.setTransform(323,122.5,1,1,0,0,0,147,24.5);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({y:158.5,alpha:1},7,cjs.Ease.get(1)).to({y:150.5},4).wait(40));
	
		// 图层 7
		this.instance_3 = new lib.happy_678_1480515217418();
		this.instance_3.setTransform(322,96,0.664,0.664,0,0,0,292,87);
		this.instance_3.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:292.1,scaleX:1.06,scaleY:1.06,x:322.1,alpha:1},9,cjs.Ease.get(1)).to({regX:292,scaleX:1,scaleY:1,x:322},4).wait(45));
	
		// Layer 15
		this.instance_4 = new lib.happy_478_1480515217419();
		this.instance_4.setTransform(306,425,1,1,0,0,0,220,130);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(1)).wait(26));
	
		// 下一关
		this.instance_5 = new lib.happy_017_1480515217418();
		this.instance_5.setTransform(325.5,946,1,1,0,0,0,98.5,37);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({_off:false},0).to({y:974,alpha:1},9,cjs.Ease.get(1)).to({y:966},4).wait(17));
	
		// 商品
		this.instance_6 = new lib.happy_970_1480515217418();
		this.instance_6.setTransform(319.5,763,1,1,0,0,0,196.5,156);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({y:727,alpha:1},9,cjs.Ease.get(1)).to({y:737},4).wait(17));
	
		// bg
		this.instance_7 = new lib.happy_273_1480515217414();
		this.instance_7.setTransform(364,547.5,1,1,0,0,0,527,524.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58));
	
		// 图层 0
		this.instance_8 = new lib.happy_059_1480515217417();
		this.instance_8.setTransform(320,520,1,1,0,0,0,320,520);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(58));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(157,520,1054,1072);
	
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./p0.js": 28,
		"./p1.js": 29,
		"./p2.js": 30,
		"./p3.js": 31,
		"./p4.js": 32,
		"./p5.js": 33,
		"./p6.js": 34,
		"./p7.js": 35,
		"./p8.js": 36,
		"./res.js": 16
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 27;


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	var _self;
	var libs = undefined;
	function construct(display) {
	    _self = display;
	    bindEvents();
	}
	
	function bindEvents() {}
	
	module.exports.construct = construct;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _self;
	var libs = undefined;
	function construct(display) {
	    _self = display;
	    bindEvents();
	}
	
	function bindEvents() {
	    $(document).on("jump", function () {
	        _self.duang.gotoAndPlay(1);
	    });
	}
	
	module.exports.construct = construct;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _self;
	var libs = undefined;
	function construct(display) {
	    _self = display;
	    bindEvents();
	}
	
	function bindEvents() {
	    $(document).on("jump", function () {
	        _self.duang.gotoAndPlay(1);
	    });
	}
	
	module.exports.construct = construct;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _self;
	var libs = undefined;
	function construct(display) {
	    _self = display;
	    bindEvents();
	}
	
	function bindEvents() {
	    $(document).on("jump", function () {
	        _self.duang.gotoAndPlay(1);
	    });
	}
	
	module.exports.construct = construct;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _self;
	var libs = undefined;
	function construct(display) {
	    _self = display;
	    bindEvents();
	}
	
	function bindEvents() {
	    $(document).on("jump", function () {
	        _self.duang.gotoAndPlay(1);
	    });
	}
	
	module.exports.construct = construct;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _self;
	var libs = undefined;
	function construct(display) {
	    _self = display;
	    bindEvents();
	}
	
	function bindEvents() {
	    _self.btn.on("click", function () {
	        $(document).trigger("NEXT");
	    });
	}
	
	module.exports.construct = construct;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _self;
	var libs = undefined;
	function construct(display) {
	    _self = display;
	    bindEvents();
	}
	
	function bindEvents() {
	    _self.btn.on("click", function () {
	        $(document).trigger("NEXT");
	    });
	}
	
	module.exports.construct = construct;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _self;
	var libs = undefined;
	function construct(display) {
	    _self = display;
	    bindEvents();
	}
	
	function bindEvents() {
	    _self.btn.on("click", function () {
	        $(document).trigger("NEXT");
	    });
	}
	
	module.exports.construct = construct;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _self;
	var libs = undefined;
	function construct(display) {
	    _self = display;
	    bindEvents();
	}
	
	function bindEvents() {
	    _self.btn.on("click", function () {
	        $(document).trigger("NEXT");
	    });
	}
	
	module.exports.construct = construct;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./p0/p0_atlas_.json": 38,
		"./p0/p0_atlas_2.json": 39,
		"./p0/p0_atlas_3.json": 40,
		"./p0/p0_atlas_4.json": 41,
		"./p0/p0_atlas_5.json": 42,
		"./p0/p0_atlas_6.json": 43,
		"./p0/p0_atlas_7.json": 44,
		"./p0/p0_atlas_8.json": 45,
		"./p1/p1_atlas_.json": 46,
		"./p1/p1_atlas_2.json": 47,
		"./p1/p1_atlas_3.json": 48,
		"./p1/p1_atlas_4.json": 49,
		"./p1/p1_atlas_5.json": 50,
		"./p1/p1_atlas_6.json": 51,
		"./p1/p1_atlas_7.json": 52,
		"./p2/p2_atlas_.json": 53,
		"./p2/p2_atlas_2.json": 54,
		"./p2/p2_atlas_3.json": 55,
		"./p3/p3_atlas_.json": 56,
		"./p3/p3_atlas_2.json": 57,
		"./p3/p3_atlas_3.json": 58,
		"./p4/p4_atlas_.json": 59,
		"./p4/p4_atlas_2.json": 60,
		"./p4/p4_atlas_3.json": 61,
		"./p5/p5_atlas_.json": 62,
		"./p5/p5_atlas_2.json": 63,
		"./p6/p6_atlas_.json": 64,
		"./p6/p6_atlas_2.json": 65,
		"./p7/p7_atlas_.json": 66,
		"./p7/p7_atlas_2.json": 67,
		"./p8/p8_atlas_.json": 68,
		"./p8/p8_atlas_2.json": 69
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 37;


/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p0/p0_atlas_.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p0/p0_atlas_2.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p0/p0_atlas_3.png"
		],
		"frames": [
			[
				0,
				0,
				599,
				592
			]
		]
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p0/p0_atlas_4.png"
		],
		"frames": [
			[
				0,
				0,
				406,
				481
			],
			[
				0,
				483,
				432,
				429
			]
		]
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p0/p0_atlas_5.png"
		],
		"frames": [
			[
				0,
				0,
				428,
				426
			],
			[
				0,
				428,
				419,
				381
			]
		]
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p0/p0_atlas_6.png"
		],
		"frames": [
			[
				0,
				392,
				341,
				341
			],
			[
				0,
				0,
				390,
				390
			]
		]
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p0/p0_atlas_7.png"
		],
		"frames": [
			[
				264,
				328,
				211,
				318
			],
			[
				0,
				310,
				216,
				329
			],
			[
				0,
				641,
				262,
				263
			],
			[
				264,
				648,
				289,
				201
			],
			[
				0,
				0,
				357,
				308
			],
			[
				359,
				0,
				243,
				326
			]
		]
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p0/p0_atlas_8.png"
		],
		"frames": [
			[
				307,
				346,
				121,
				119
			],
			[
				167,
				221,
				72,
				86
			],
			[
				441,
				0,
				62,
				131
			],
			[
				0,
				477,
				262,
				63
			],
			[
				430,
				268,
				55,
				131
			],
			[
				0,
				221,
				165,
				152
			],
			[
				242,
				178,
				178,
				166
			],
			[
				242,
				0,
				197,
				176
			],
			[
				105,
				375,
				57,
				62
			],
			[
				0,
				375,
				103,
				89
			],
			[
				441,
				133,
				58,
				41
			],
			[
				430,
				401,
				61,
				64
			],
			[
				422,
				178,
				90,
				88
			],
			[
				0,
				0,
				240,
				219
			],
			[
				167,
				346,
				138,
				129
			]
		]
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p1/p1_atlas_.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p1/p1_atlas_2.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p1/p1_atlas_3.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				923
			]
		]
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p1/p1_atlas_4.png"
		],
		"frames": [
			[
				0,
				0,
				496,
				700
			]
		]
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p1/p1_atlas_5.png"
		],
		"frames": [
			[
				0,
				0,
				464,
				700
			]
		]
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p1/p1_atlas_6.png"
		],
		"frames": [
			[
				419,
				929,
				103,
				39
			],
			[
				440,
				655,
				180,
				68
			],
			[
				0,
				771,
				468,
				93
			],
			[
				0,
				655,
				438,
				114
			],
			[
				470,
				826,
				153,
				20
			],
			[
				0,
				866,
				474,
				61
			],
			[
				0,
				929,
				417,
				63
			],
			[
				0,
				0,
				475,
				653
			],
			[
				470,
				725,
				99,
				99
			]
		]
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p1/p1_atlas_7.png"
		],
		"frames": [
			[
				264,
				0,
				103,
				39
			],
			[
				0,
				65,
				180,
				68
			],
			[
				264,
				41,
				153,
				20
			],
			[
				0,
				0,
				262,
				63
			],
			[
				182,
				65,
				99,
				99
			]
		]
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p2/p2_atlas_.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p2/p2_atlas_2.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p2/p2_atlas_3.png"
		],
		"frames": [
			[
				0,
				274,
				417,
				63
			],
			[
				0,
				0,
				438,
				114
			],
			[
				0,
				116,
				468,
				93
			],
			[
				0,
				211,
				474,
				61
			],
			[
				0,
				339,
				259,
				100
			],
			[
				261,
				394,
				153,
				20
			],
			[
				261,
				339,
				164,
				53
			]
		]
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p3/p3_atlas_.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p3/p3_atlas_2.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p3/p3_atlas_3.png"
		],
		"frames": [
			[
				0,
				116,
				468,
				93
			],
			[
				261,
				339,
				120,
				39
			],
			[
				0,
				274,
				417,
				63
			],
			[
				0,
				339,
				259,
				100
			],
			[
				0,
				211,
				474,
				61
			],
			[
				261,
				380,
				153,
				20
			],
			[
				0,
				0,
				438,
				114
			]
		]
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p4/p4_atlas_.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p4/p4_atlas_2.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p4/p4_atlas_3.png"
		],
		"frames": [
			[
				0,
				211,
				474,
				61
			],
			[
				0,
				339,
				180,
				68
			],
			[
				290,
				339,
				153,
				20
			],
			[
				182,
				339,
				106,
				34
			],
			[
				0,
				116,
				468,
				93
			],
			[
				419,
				274,
				85,
				27
			],
			[
				0,
				274,
				417,
				63
			],
			[
				0,
				0,
				438,
				114
			]
		]
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p5/p5_atlas_.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p5/p5_atlas_2.png"
		],
		"frames": [
			[
				0,
				0,
				387,
				340
			],
			[
				0,
				342,
				608,
				105
			],
			[
				0,
				449,
				475,
				68
			],
			[
				0,
				519,
				196,
				145
			],
			[
				600,
				186,
				37,
				56
			],
			[
				475,
				267,
				23,
				23
			],
			[
				600,
				244,
				25,
				52
			],
			[
				500,
				267,
				23,
				23
			],
			[
				307,
				519,
				99,
				174
			],
			[
				408,
				673,
				197,
				74
			],
			[
				389,
				267,
				31,
				34
			],
			[
				475,
				292,
				23,
				23
			],
			[
				86,
				741,
				294,
				49
			],
			[
				544,
				0,
				85,
				184
			],
			[
				477,
				449,
				109,
				222
			],
			[
				389,
				0,
				153,
				265
			],
			[
				544,
				247,
				51,
				51
			],
			[
				198,
				519,
				107,
				220
			],
			[
				454,
				267,
				19,
				36
			],
			[
				0,
				666,
				84,
				184
			],
			[
				544,
				186,
				54,
				59
			],
			[
				422,
				267,
				30,
				30
			]
		]
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p6/p6_atlas_.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p6/p6_atlas_2.png"
		],
		"frames": [
			[
				0,
				347,
				608,
				171
			],
			[
				0,
				751,
				405,
				70
			],
			[
				0,
				0,
				397,
				345
			],
			[
				419,
				520,
				159,
				166
			],
			[
				566,
				114,
				54,
				36
			],
			[
				0,
				520,
				417,
				229
			],
			[
				0,
				823,
				400,
				49
			],
			[
				566,
				61,
				51,
				51
			],
			[
				622,
				0,
				2,
				103
			],
			[
				399,
				0,
				165,
				270
			],
			[
				419,
				688,
				197,
				74
			],
			[
				566,
				0,
				54,
				59
			]
		]
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p7/p7_atlas_.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p7/p7_atlas_2.png"
		],
		"frames": [
			[
				0,
				0,
				396,
				345
			],
			[
				0,
				347,
				630,
				145
			],
			[
				0,
				686,
				454,
				68
			],
			[
				398,
				278,
				89,
				67
			],
			[
				398,
				0,
				184,
				276
			],
			[
				400,
				494,
				197,
				74
			],
			[
				400,
				655,
				23,
				23
			],
			[
				0,
				756,
				311,
				49
			],
			[
				489,
				278,
				54,
				59
			],
			[
				400,
				570,
				98,
				83
			],
			[
				500,
				642,
				73,
				72
			],
			[
				450,
				655,
				23,
				23
			],
			[
				0,
				494,
				398,
				190
			],
			[
				500,
				570,
				88,
				70
			],
			[
				425,
				655,
				23,
				23
			],
			[
				598,
				0,
				30,
				30
			],
			[
				545,
				278,
				51,
				51
			]
		]
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p8/p8_atlas_.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1040
			]
		]
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/p8/p8_atlas_2.png"
		],
		"frames": [
			[
				0,
				0,
				435,
				344
			],
			[
				0,
				346,
				640,
				117
			],
			[
				0,
				727,
				440,
				98
			],
			[
				580,
				108,
				23,
				23
			],
			[
				0,
				651,
				221,
				53
			],
			[
				612,
				101,
				23,
				23
			],
			[
				493,
				76,
				51,
				51
			],
			[
				437,
				0,
				197,
				74
			],
			[
				580,
				76,
				30,
				30
			],
			[
				0,
				600,
				311,
				49
			],
			[
				0,
				465,
				415,
				133
			],
			[
				612,
				76,
				23,
				23
			],
			[
				437,
				76,
				54,
				59
			],
			[
				417,
				465,
				206,
				260
			],
			[
				546,
				76,
				32,
				32
			]
		]
	};

/***/ },
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // ----------------------------------------------------------------------------
	 // Buzz, a Javascript HTML5 Audio library
	 // v1.2.0 - Built 2016-05-22 15:16
	 // Licensed under the MIT license.
	 // http://buzz.jaysalvat.com/
	 // ----------------------------------------------------------------------------
	 // Copyright (C) 2010-2016 Jay Salvat
	 // http://jaysalvat.com/
	 // ----------------------------------------------------------------------------
	
	!function(a,b){"use strict";"undefined"!=typeof module&&module.exports?module.exports=b(): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):a.buzz=b()}(this,function(){"use strict";var a=window.AudioContext||window.webkitAudioContext,b={defaults:{autoplay:!1,crossOrigin:null,duration:5e3,formats:[],loop:!1,placeholder:"--",preload:"metadata",volume:80,webAudioApi:!1,document:window.document},types:{mp3:"audio/mpeg",ogg:"audio/ogg",wav:"audio/wav",aac:"audio/aac",m4a:"audio/x-m4a"},sounds:[],el:document.createElement("audio"),getAudioContext:function(){if(void 0===this.audioCtx)try{this.audioCtx=a?new a:null}catch(b){this.audioCtx=null}return this.audioCtx},sound:function(a,c){function d(a){for(var b=[],c=a.length-1,d=0;c>=d;d++)b.push({start:a.start(d),end:a.end(d)});return b}function e(a){return a.split(".").pop()}c=c||{};var f=c.document||b.defaults.document,g=0,h=[],i={},j=b.isSupported();if(this.load=function(){return j?(this.sound.load(),this):this},this.play=function(){return j?(this.sound.play(),this):this},this.togglePlay=function(){return j?(this.sound.paused?this.sound.play():this.sound.pause(),this):this},this.pause=function(){return j?(this.sound.pause(),this):this},this.isPaused=function(){return j?this.sound.paused:null},this.stop=function(){return j?(this.setTime(0),this.sound.pause(),this):this},this.isEnded=function(){return j?this.sound.ended:null},this.loop=function(){return j?(this.sound.loop="loop",this.bind("ended.buzzloop",function(){this.currentTime=0,this.play()}),this):this},this.unloop=function(){return j?(this.sound.removeAttribute("loop"),this.unbind("ended.buzzloop"),this):this},this.mute=function(){return j?(this.sound.muted=!0,this):this},this.unmute=function(){return j?(this.sound.muted=!1,this):this},this.toggleMute=function(){return j?(this.sound.muted=!this.sound.muted,this):this},this.isMuted=function(){return j?this.sound.muted:null},this.setVolume=function(a){return j?(0>a&&(a=0),a>100&&(a=100),this.volume=a,this.sound.volume=a/100,this):this},this.getVolume=function(){return j?this.volume:this},this.increaseVolume=function(a){return this.setVolume(this.volume+(a||1))},this.decreaseVolume=function(a){return this.setVolume(this.volume-(a||1))},this.setTime=function(a){if(!j)return this;var b=!0;return this.whenReady(function(){b===!0&&(b=!1,this.sound.currentTime=a)}),this},this.getTime=function(){if(!j)return null;var a=Math.round(100*this.sound.currentTime)/100;return isNaN(a)?b.defaults.placeholder:a},this.setPercent=function(a){return j?this.setTime(b.fromPercent(a,this.sound.duration)):this},this.getPercent=function(){if(!j)return null;var a=Math.round(b.toPercent(this.sound.currentTime,this.sound.duration));return isNaN(a)?b.defaults.placeholder:a},this.setSpeed=function(a){return j?(this.sound.playbackRate=a,this):this},this.getSpeed=function(){return j?this.sound.playbackRate:null},this.getDuration=function(){if(!j)return null;var a=Math.round(100*this.sound.duration)/100;return isNaN(a)?b.defaults.placeholder:a},this.getPlayed=function(){return j?d(this.sound.played):null},this.getBuffered=function(){return j?d(this.sound.buffered):null},this.getSeekable=function(){return j?d(this.sound.seekable):null},this.getErrorCode=function(){return j&&this.sound.error?this.sound.error.code:0},this.getErrorMessage=function(){if(!j)return null;switch(this.getErrorCode()){case 1:return"MEDIA_ERR_ABORTED";case 2:return"MEDIA_ERR_NETWORK";case 3:return"MEDIA_ERR_DECODE";case 4:return"MEDIA_ERR_SRC_NOT_SUPPORTED";default:return null}},this.getStateCode=function(){return j?this.sound.readyState:null},this.getStateMessage=function(){if(!j)return null;switch(this.getStateCode()){case 0:return"HAVE_NOTHING";case 1:return"HAVE_METADATA";case 2:return"HAVE_CURRENT_DATA";case 3:return"HAVE_FUTURE_DATA";case 4:return"HAVE_ENOUGH_DATA";default:return null}},this.getNetworkStateCode=function(){return j?this.sound.networkState:null},this.getNetworkStateMessage=function(){if(!j)return null;switch(this.getNetworkStateCode()){case 0:return"NETWORK_EMPTY";case 1:return"NETWORK_IDLE";case 2:return"NETWORK_LOADING";case 3:return"NETWORK_NO_SOURCE";default:return null}},this.set=function(a,b){return j?(this.sound[a]=b,this):this},this.get=function(a){return j?a?this.sound[a]:this.sound:null},this.bind=function(a,b){if(!j)return this;a=a.split(" ");for(var c=this,d=function(a){b.call(c,a)},e=0;e<a.length;e++){var f=a[e],g=f;f=g.split(".")[0],h.push({idx:g,func:d}),this.sound.addEventListener(f,d,!0)}return this},this.unbind=function(a){if(!j)return this;a=a.split(" ");for(var b=0;b<a.length;b++)for(var c=a[b],d=c.split(".")[0],e=0;e<h.length;e++){var f=h[e].idx.split(".");(h[e].idx===c||f[1]&&f[1]===c.replace(".",""))&&(this.sound.removeEventListener(d,h[e].func,!0),h.splice(e,1))}return this},this.bindOnce=function(a,b){if(!j)return this;var c=this;return i[g++]=!1,this.bind(a+"."+g,function(){i[g]||(i[g]=!0,b.call(c)),c.unbind(a+"."+g)}),this},this.trigger=function(a,b){if(!j)return this;a=a.split(" ");for(var c=0;c<a.length;c++)for(var d=a[c],e=0;e<h.length;e++){var g=h[e].idx.split(".");if(h[e].idx===d||g[0]&&g[0]===d.replace(".","")){var i=f.createEvent("HTMLEvents");i.initEvent(g[0],!1,!0),i.originalEvent=b,this.sound.dispatchEvent(i)}}return this},this.fadeTo=function(a,c,d){function e(){clearTimeout(f),f=setTimeout(function(){a>g&&i.volume<a?(i.setVolume(i.volume+=1),e()):g>a&&i.volume>a?(i.setVolume(i.volume-=1),e()):d instanceof Function&&d.apply(i)},h)}if(!j)return this;c instanceof Function?(d=c,c=b.defaults.duration):c=c||b.defaults.duration;var f,g=this.volume,h=c/Math.abs(g-a),i=this;return this.play(),this.whenReady(function(){e()}),this},this.fadeIn=function(a,b){return j?this.setVolume(0).fadeTo(100,a,b):this},this.fadeOut=function(a,b){return j?this.fadeTo(0,a,b):this},this.fadeWith=function(a,b){return j?(this.fadeOut(b,function(){this.stop()}),a.play().fadeIn(b),this):this},this.whenReady=function(a){if(!j)return null;var b=this;0===this.sound.readyState?this.bind("canplay.buzzwhenready",function(){a.call(b)}):a.call(b)},this.addSource=function(a){var c=this,d=f.createElement("source");return d.src=a,b.types[e(a)]&&(d.type=b.types[e(a)]),this.sound.appendChild(d),d.addEventListener("error",function(a){c.trigger("sourceerror",a)}),d},j&&a){for(var k in b.defaults)b.defaults.hasOwnProperty(k)&&void 0===c[k]&&(c[k]=b.defaults[k]);if(this.sound=f.createElement("audio"),null!==c.crossOrigin&&(this.sound.crossOrigin=c.crossOrigin),c.webAudioApi){var l=b.getAudioContext();l&&(this.source=l.createMediaElementSource(this.sound),this.source.connect(l.destination))}if(a instanceof Array)for(var m in a)a.hasOwnProperty(m)&&this.addSource(a[m]);else if(c.formats.length)for(var n in c.formats)c.formats.hasOwnProperty(n)&&this.addSource(a+"."+c.formats[n]);else this.addSource(a);c.loop&&this.loop(),c.autoplay&&(this.sound.autoplay="autoplay"),c.preload===!0?this.sound.preload="auto":c.preload===!1?this.sound.preload="none":this.sound.preload=c.preload,this.setVolume(c.volume),b.sounds.push(this)}},group:function(a){function b(){for(var b=c(null,arguments),d=b.shift(),e=0;e<a.length;e++)a[e][d].apply(a[e],b)}function c(a,b){return a instanceof Array?a:Array.prototype.slice.call(b)}a=c(a,arguments),this.getSounds=function(){return a},this.add=function(b){b=c(b,arguments);for(var d=0;d<b.length;d++)a.push(b[d])},this.remove=function(b){b=c(b,arguments);for(var d=0;d<b.length;d++)for(var e=0;e<a.length;e++)if(a[e]===b[d]){a.splice(e,1);break}},this.load=function(){return b("load"),this},this.play=function(){return b("play"),this},this.togglePlay=function(){return b("togglePlay"),this},this.pause=function(a){return b("pause",a),this},this.stop=function(){return b("stop"),this},this.mute=function(){return b("mute"),this},this.unmute=function(){return b("unmute"),this},this.toggleMute=function(){return b("toggleMute"),this},this.setVolume=function(a){return b("setVolume",a),this},this.increaseVolume=function(a){return b("increaseVolume",a),this},this.decreaseVolume=function(a){return b("decreaseVolume",a),this},this.loop=function(){return b("loop"),this},this.unloop=function(){return b("unloop"),this},this.setSpeed=function(a){return b("setSpeed",a),this},this.setTime=function(a){return b("setTime",a),this},this.set=function(a,c){return b("set",a,c),this},this.bind=function(a,c){return b("bind",a,c),this},this.unbind=function(a){return b("unbind",a),this},this.bindOnce=function(a,c){return b("bindOnce",a,c),this},this.trigger=function(a){return b("trigger",a),this},this.fade=function(a,c,d,e){return b("fade",a,c,d,e),this},this.fadeIn=function(a,c){return b("fadeIn",a,c),this},this.fadeOut=function(a,c){return b("fadeOut",a,c),this}},all:function(){return new b.group(b.sounds)},isSupported:function(){return!!b.el.canPlayType},isOGGSupported:function(){return!!b.el.canPlayType&&b.el.canPlayType('audio/ogg; codecs="vorbis"')},isWAVSupported:function(){return!!b.el.canPlayType&&b.el.canPlayType('audio/wav; codecs="1"')},isMP3Supported:function(){return!!b.el.canPlayType&&b.el.canPlayType("audio/mpeg;")},isAACSupported:function(){return!!b.el.canPlayType&&(b.el.canPlayType("audio/x-m4a;")||b.el.canPlayType("audio/aac;"))},toTimer:function(a,b){var c,d,e;return c=Math.floor(a/3600),c=isNaN(c)?"--":c>=10?c:"0"+c,d=b?Math.floor(a/60%60):Math.floor(a/60),d=isNaN(d)?"--":d>=10?d:"0"+d,e=Math.floor(a%60),e=isNaN(e)?"--":e>=10?e:"0"+e,b?c+":"+d+":"+e:d+":"+e},fromTimer:function(a){var b=a.toString().split(":");return b&&3===b.length&&(a=3600*parseInt(b[0],10)+60*parseInt(b[1],10)+parseInt(b[2],10)),b&&2===b.length&&(a=60*parseInt(b[0],10)+parseInt(b[1],10)),a},toPercent:function(a,b,c){var d=Math.pow(10,c||0);return Math.round(100*a/b*d)/d},fromPercent:function(a,b,c){var d=Math.pow(10,c||0);return Math.round(b/100*a*d)/d}};return b});

/***/ }
]);
//# sourceMappingURL=game.js.map