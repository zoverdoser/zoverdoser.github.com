var _hmt = _hmt || [];
var mileClass = [40, 20, 10];
var btnDelayTime = 1000;

adjustFontSize();
bindEventHandler();
trackingInit();
//checkFirstVisit();
$(".ruleBtn").trigger("click");
initGame();

function adjustFontSize() {
    var fontSize = $(window).width() / 10;
    $("html")[0].style.fontSize = fontSize + "px";
}

function initGame() {
    var canvas = document.getElementById("gameCanvas"),
        stage = new createjs.Stage(canvas),
        gameHeight = $(window).height(),
        gameWidth = $("#game").width(),
        canvasHeight = ~~(gameHeight / gameWidth * 640),
        canvasWidth = 640,
        screenWidth = $("body").width(),
        loader,
        numberSpriteDate,
        roadContainer = new createjs.Container(),
        UIContainer = new createjs.Container(),
        roadBlocks = [],
        currentType,
        lifeTime = 1000,
        isAlive = true,
        isStarted = false,
        startTimeStamp,
        //collectFood = [],
        mileage = 0,
        ticketLock = true;
    createjs.Touch.enable(stage);
    var stuff = [
        [
            {
                left: "garden1_left",
                right: "garden1_right",
                food: "garden_food1",
                width: 118,
                height: 54
            }, {
                left: "garden1_left",
                right: "garden1_right",
                food: "garden_food2",
                width: 88,
                height: 74
            }
        ], [
            {
                left: "orchard1_left",
                right: "orchard1_right",
                food: "orchard_food1",
                width: 88,
                height: 100
            }, {
                left: "orchard2_left",
                right: "orchard2_right",
                food: "orchard_food2",
                width: 86,
                height: 77
            }, {
                left: "orchard1_left",
                right: "orchard1_right",
                food: "orchard_food3",
                width: 80,
                height: 110
            }, {
                left: "orchard2_left",
                right: "orchard2_right",
                food: "orchard_food4",
                width: 80,
                height: 65
            }
        ], [
            {
                left: "farm1_left",
                right: "farm1_right",
                food: "farm_food1",
                width: 83,
                height: 58
            }, {
                left: "farm1_left",
                right: "farm1_right",
                food: "farm_food2",
                width: 100,
                height: 52
            }
        ], [
            {
                left: "sea_left",
                right: "sea_right",
                food: "sea_food",
                width: 88,
                height: 66
            }
        ]
    ];
    var trapStuff = [
        {
            left: "trap_left",
            right: "trap_right",
            food: "trap0",
            width: 50,
            height: 115
        }, {
            left: "trap_left",
            right: "trap_right",
            food: "trap1",
            width: 80,
            height: 70
        }, {
            left: "trap_left",
            right: "trap_right",
            food: "trap2",
            width: 80,
            height: 180
        }
    ];

    var RoadBlock = function(type) {
        this.left = {};
        this.right = {};
        this.leftCorrect = false;
        this.foodType = false;
        this.container = new createjs.Container();
        this.type = type;
        this.smoke = new Game.smoke();
        this.init();
    };
    RoadBlock.count = 0;
    RoadBlock.prototype = {
        init: function() {
            var correntStuff = stuff[this.type];
            this.leftCorrect = Math.random() > 0.5;
            if(this.leftCorrect) {
                var correctIndex = ~~(correntStuff.length*Math.random());
                this.left.island = new createjs.Bitmap(loader.getResult(correntStuff[correctIndex].left));
                this.left.food = correntStuff[correctIndex].food;
                this.left.width = correntStuff[correctIndex].width;
                this.left.height = correntStuff[correctIndex].height;
                this.foodType = correntStuff[correctIndex].food;

                var trapIndex = ~~(trapStuff.length*Math.random());
                this.right.island = new createjs.Bitmap(loader.getResult(trapStuff[trapIndex].right));
                this.right.food = new createjs.Bitmap(loader.getResult(trapStuff[trapIndex].food));
                this.right.width = trapStuff[trapIndex].width;
                this.right.height = trapStuff[trapIndex].height;
            } else {
                var correctIndex = ~~(correntStuff.length*Math.random());
                this.right.island = new createjs.Bitmap(loader.getResult(correntStuff[correctIndex].right));
                this.right.food = correntStuff[correctIndex].food;
                this.right.width = correntStuff[correctIndex].width;
                this.right.height = correntStuff[correctIndex].height;
                this.foodType = correntStuff[correctIndex].food;

                var trapIndex = ~~(trapStuff.length*Math.random());
                this.left.island = new createjs.Bitmap(loader.getResult(trapStuff[trapIndex].left));
                this.left.food = new createjs.Bitmap(loader.getResult(trapStuff[trapIndex].food));
                this.left.width = trapStuff[trapIndex].width;
                this.left.height = trapStuff[trapIndex].height;
            }
            addToContainer(this.container, this.left, this.right, this.leftCorrect, this.smoke);
            this.container.x = 0;
            this.container.y = RoadBlock.count * 240 - 165;
            roadContainer.addChild(this.container);

            RoadBlock.count++;

            function addToContainer(container, left, right, leftCorrect, smoke) {
                right.island.x = 510;
                var ground = new createjs.Bitmap(loader.getResult("ground"));
                var leaf = new createjs.Bitmap(loader.getResult("leaf"));
                if(typeof left.food == "string") {
                    left.food = new Game[left.food]();
                }
                if(typeof right.food == "string") {
                    right.food = new Game[right.food]();
                }
                left.food.regX = left.width*0.5;
                left.food.regY = left.height*0.5;
                right.food.regX = right.width*0.5;
                right.food.regY = right.height*0.5;
                left.food.x = 180;
                right.food.x = 440;
                left.food.y = right.food.y = 130;
                smoke.regX = 58;
                smoke.regY = 40;
                smoke.alpha = 0;
                leaf.regX = leaf.image.width*0.5;
                leaf.regY = leaf.image.height*0.5;

                if(leftCorrect) {
                    leaf.x = 190;
                    smoke.x = 290;
                    //left.food.gotoAndStop(1)
                } else {
                    leaf.x = 450;
                    smoke.x = 545;
                    //right.food.gotoAndStop(1)
                }
                leaf.y = 150;
                smoke.y = 165;
                
                container.addChild(ground);
                container.addChild(leaf);
                container.addChild(left.island);
                container.addChild(right.island);
                container.addChild(left.food);
                container.addChild(right.food);
                container.addChild(smoke);
            }
        }
    };

    var UI = {
        hero: null,
        timePane: null,
        timeBar: null,
        logo: null,
        timeBarContainer: null,
        timeBarMask: null,
        fieldBrand: [],
        displayedNumber: -1,
        numberContainer: null,
        mileNumberSprite: [],

        init: function() {
            UI.hero = new Game.hero();
            UI.timePane = new createjs.Bitmap(loader.getResult("timePane"));
            UI.timeBar = new createjs.Bitmap(loader.getResult("timeBar"));
            UI.logo = new createjs.Bitmap(loader.getResult("logo"));
            UI.fieldBrand = [
                new createjs.Bitmap(loader.getResult("garden-logo")),
                new createjs.Bitmap(loader.getResult("orchard-logo")),
                new createjs.Bitmap(loader.getResult("farm-logo")),
                new createjs.Bitmap(loader.getResult("sea-logo"))
            ];
            numberSpriteDate = new createjs.SpriteSheet({
               images: [loader.getResult("number")],
               frames: {"height": 76, "count": 10, "width": 56,'margin':0,'spacing':3},
            });

            UI.timeBarContainer = new createjs.Container();
            UI.timeBarMask = new createjs.Shape();
            UI.timeBarMask.graphics.drawRect(0,0,350,37);
            UI.timeBarMask.x = 176;
            UI.timeBarMask.y = 30;
            UI.hero.regX = 51;
            UI.hero.regY = 47;
            UI.hero.x = 320;
            UI.hero.y = 410;
            UI.timePane.x = 170;
            UI.timePane.y = 25;
            UI.timeBarContainer.x = 176;
            UI.timeBarContainer.y = 30;
            UI.timeBarContainer.mask = UI.timeBarMask;
            UI.logo.x = 108;
            UI.logo.y = 12;
            for(var i=0; i<4; i++) {
                UI.fieldBrand[i].x = (640 - UI.fieldBrand[i].image.width)/2;
                UI.fieldBrand[i].y = 715;
                UI.fieldBrand[i].alpha = 0;
                UIContainer.addChild(UI.fieldBrand[i]);
            }
            UI.timeBarContainer.addChild(UI.timeBar);
            UIContainer.addChild(UI.timePane);
            UIContainer.addChild(UI.timeBarContainer);
            UIContainer.addChild(UI.logo);
            UIContainer.addChild(UI.hero);

            UI.initMileage();

            stage.addChild(UIContainer);
        },
        initMileage: function() {
            UI.numberContainer = new createjs.Container();
            UI.numberContainer.y = 100;
            UIContainer.addChild(UI.numberContainer);
        },
        updateTimeBar: function() {
            if(isStarted && isAlive) {
                var passedTime = +new Date() - startTimeStamp;
                if(passedTime > lifeTime) {
                    UI.timeBar.x = -320;
                    timeoutHandler();
                } else {
                    UI.timeBar.x = -(passedTime/lifeTime)*320;
                }
            }
        },
        reset: function() {
            UI.timeBar.x = 0;
            UI.hero.x = 320;
            UI.updateMileage();
        },
        showFieldBrand: function() {
            createjs.Tween.get(UI.fieldBrand[currentType]).to({alpha: 1}, 500).wait(1000).to({alpha: 0}, 500);
        },
        moveHero: function(left) {
            if(left) {
                UI.hero.scaleX = -1;
                UI.hero.gotoAndPlay("right");
                if(isAlive) {
                    createjs.Tween.get(UI.hero).to({x: 250}, 120, createjs.Ease.cubicOut).call(function() {
                        roadBlocks[1].left.food.alpha = 0;
                        roadBlocks[1].smoke.alpha = 1;
                        roadBlocks[1].smoke.play();
                    }).to({x: 320}, 80).call(function() {
                        UI.hero.gotoAndPlay("fly");
                    });
                } else {
                    createjs.Tween.get(UI.hero).to({x: 250}, 120, createjs.Ease.cubicOut);
                }
            } else {
                UI.hero.scaleX = 1;
                UI.hero.gotoAndPlay("right");
                if(isAlive) {
                    createjs.Tween.get(UI.hero).to({x: 390}, 120, createjs.Ease.cubicOut).call(function() {
                        roadBlocks[1].right.food.alpha = 0;
                        roadBlocks[1].smoke.alpha = 1;
                        roadBlocks[1].smoke.play();
                    }).to({x: 320}, 80).call(function() {
                        UI.hero.gotoAndPlay("fly");
                    });
                } else {
                    createjs.Tween.get(UI.hero).to({x: 390}, 120, createjs.Ease.cubicOut);
                }  
            }
        },
        updateMileage: function() {
            if(UI.displayedNumber != mileage) {
                var mileNumber = (""+mileage).split("");
                var numberLength = mileNumber.length;
                if(numberLength > UI.mileNumberSprite.length) {
                    UI.mileNumberSprite.push(new createjs.Sprite(numberSpriteDate));
                    UI.numberContainer.addChild(UI.mileNumberSprite[numberLength-1]);
                } else if(numberLength < UI.mileNumberSprite.length) {
                    UI.numberContainer.removeAllChildren();
                    UI.mileNumberSprite = [new createjs.Sprite(numberSpriteDate)];
                    UI.numberContainer.addChild(UI.mileNumberSprite[0]);
                }

                for(var i=0; i< numberLength; i++) {
                    UI.mileNumberSprite[i].x = (640-55*numberLength)/2 + 55*(numberLength-i-1);
                    UI.mileNumberSprite[i].gotoAndStop(Number(mileNumber[numberLength-i-1]));
                }
                UI.displayedNumber = mileage;
            }
        }
    };

    function initCanvas() {
        canvas.setAttribute("height", canvasHeight);
        loadSource();
    }

    function loadSource() {
        var manifest = [
            {id: "ground", src: "images/ground.jpg"},
            {id: "logo", src: "images/logo.png"},
            {id: "timeBar", src: "images/timeBar.png"},
            {id: "timePane", src: "images/timePane.png"},
            {id: "number", src: "images/number.png"},
            {id: "garden-logo", src: "images/garden-logo.png"},
            {id: "orchard-logo", src: "images/orchard-logo.png"},
            {id: "farm-logo", src: "images/farm-logo.png"},
            {id: "sea-logo", src: "images/sea-logo.png"},
            {id: "leaf", src: "images/leaf.png"},
            {id: "garden1_left", src: "images/garden1_left.png"},
            {id: "garden1_right", src: "images/garden1_right.png"},
            {id: "orchard1_left", src: "images/orchard1_left.png"},
            {id: "orchard2_left", src: "images/orchard2_left.png"},
            {id: "orchard1_right", src: "images/orchard1_right.png"},
            {id: "orchard2_right", src: "images/orchard2_right.png"},
            {id: "farm1_left", src: "images/farm1_left.png"},
            {id: "farm1_right", src: "images/farm1_right.png"},
            {id: "sea_left", src: "images/sea_left.png"},
            {id: "sea_right", src: "images/sea_right.png"},
            {id: "trap_left", src: "images/trap_left.png"},
            {id: "trap_right", src: "images/trap_right.png"},
            {id: "trap0", src: "images/trap0.png"},
            {id: "trap1", src: "images/trap1.png"},
            {id: "trap2", src: "images/trap2.png"},
            {src:"images/game/happy_068_1421030156453.png", id:"happy_068_1421030156453"},
            {src:"images/game/happy_097_1421030156433.png", id:"happy_097_1421030156433"},
            {src:"images/game/happy_223_1421030156450.png", id:"happy_223_1421030156450"},
            {src:"images/game/happy_288_1421030156443.png", id:"happy_288_1421030156443"},
            {src:"images/game/happy_341_1421030156451.png", id:"happy_341_1421030156451"},
            {src:"images/game/happy_348_1421030156437.png", id:"happy_348_1421030156437"},
            {src:"images/game/happy_365_1421030156442.png", id:"happy_365_1421030156442"},
            {src:"images/game/happy_369_1421030156443.png", id:"happy_369_1421030156443"},
            {src:"images/game/happy_444_1421030156454.png", id:"happy_444_1421030156454"},
            {src:"images/game/happy_490_1421030156437.png", id:"happy_490_1421030156437"},
            {src:"images/game/happy_490_1421030156452.png", id:"happy_490_1421030156452"},
            {src:"images/game/happy_497_1421030156432.png", id:"happy_497_1421030156432"},
            {src:"images/game/happy_530_1421030156439.png", id:"happy_530_1421030156439"},
            {src:"images/game/happy_549_1421030156453.png", id:"happy_549_1421030156453"},
            {src:"images/game/happy_588_1421030156447.png", id:"happy_588_1421030156447"},
            {src:"images/game/happy_613_1421030156456.png", id:"happy_613_1421030156456"},
            {src:"images/game/happy_626_1421030156435.png", id:"happy_626_1421030156435"},
            {src:"images/game/happy_687_1421030156440.png", id:"happy_687_1421030156440"},
            {src:"images/game/happy_723_1421030156448.png", id:"happy_723_1421030156448"},
            {src:"images/game/happy_764_1421030156446.png", id:"happy_764_1421030156446"},
            {src:"images/game/happy_794_1421030156455.png", id:"happy_794_1421030156455"},
            {src:"images/game/happy_799_1421030156438.png", id:"happy_799_1421030156438"},
            {src:"images/game/happy_803_1421030156435.png", id:"happy_803_1421030156435"},
            {src:"images/game/happy_846_1421030156434.png", id:"happy_846_1421030156434"},
            {src:"images/game/happy_881_1421030156450.png", id:"happy_881_1421030156450"},
            {src:"images/game/happy_919_1421030156453.png", id:"happy_919_1421030156453"},
            {src:"images/game/happy_970_1421030156455.png", id:"happy_970_1421030156455"},
            {src:"images/game/happy_976_1421030156449.png", id:"happy_976_1421030156449"},
            {src:"images/game/smoke1.png", id:"smoke1"},
            {src:"images/game/smoke2.png", id:"smoke2"},
            {src:"images/game/smoke3.png", id:"smoke3"},
            {src:"images/game/smoke4.png", id:"smoke4"},
            {src:"images/game/smoke5.png", id:"smoke5"},
            {src:"images/game/smoke6.png", id:"smoke6"}
        ];
        var progressBar = $("#progress .loadingBox .progressPane .progressBar")[0];
        loader = new createjs.LoadQueue(false);
        loader.addEventListener("progress", function(event) {
            var percentage = ~~(event.loaded*100);
            progressBar.style.width = percentage + "%";
        });
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", doneLoading);
        loader.loadManifest(manifest);
    }

    function handleFileLoad(evt) {
        if(evt.item.type == "image") { images[evt.item.id] = evt.result; }
    }

    function doneLoading() {
        initRoad();
        stage.addChild(roadContainer);
        UI.init();
        $("#gameCanvas").addClass("loaded");
        $("#game .note").removeClass("hidden");
        bindEventHandler();
        stage.update();
        createjs.Ticker.addEventListener("tick", tick);
        createjs.Ticker.setFPS(30);
    }

    function bindEventHandler() {
        $("#gameCanvas").on("touchstart", touchRoadBlockHandler);
        $("#result .btns .replayBtn").on("click", function() {
            if(!ticketLock) {
                $("#result").hide();
                $("#result .resultBox").removeClass("act");
                $("#result .result").addClass("hidden");
                reflash();
            }
        });
        $("#result .btns .shareBtn").on("click", function() {
            _hmt.push(['_trackEvent', "多美滋游戏", "click", "领取优惠券"]);
            if(!ticketLock && mileage > mileClass[0]) {
                window.location.href = "https://passport.m.jd.com/coupons/weixincoupon.action?jshopURIID=4efe46cd209a43f2a8ad14afe1c2f0b1";
            } else if(mileage > mileClass[1]) {
                window.location.href = "https://passport.m.jd.com/coupons/weixincoupon.action?jshopURIID=0f2ec02f511a4de48c4688370ecb09e0";
            } else if(mileage > mileClass[2]) {
                window.location.href = "https://passport.m.jd.com/coupons/weixincoupon.action?jshopURIID=95ee50557929451f85fe93a96442a1ab";
            }
        });
    }

    function tick() {
        UI.updateTimeBar();
        stage.update();
    }

    function initRoad() {
        var explodedCount = canvasHeight/240 + 1;
        for(var i=0; i<explodedCount; i++) {
            roadBlocks[i] = new RoadBlock(0);
        }
    }

    function correctHandler() {
        mileage++;
        UI.updateMileage();
        var food = roadBlocks[2].foodType;
        //if(collectFood.indexOf(food) == -1) {
        //    collectFood.push(food);
        //}
        //if(lifeTime > ) {}
        lifeTime = mileage>100? 500 : 1000 - mileage*5;
        var roadBlockType = ~~(mileage/20)%4;
        if(currentType != roadBlockType) {
            currentType = roadBlockType;
            UI.showFieldBrand();
        }
        roadBlocks.push(new RoadBlock(currentType));
        startTimeStamp = +new Date();
        createjs.Tween.get(roadContainer).to({y: (-mileage)*240}, 200);
        roadBlocks.shift();
        roadContainer.removeChildAt(0);
    }

    function trappedHandler() {
        isAlive = false;
        diedHandler(0);
    }

    function timeoutHandler() {
        isAlive = false;
        diedHandler(1);
    }

    function diedHandler(type) {
        setTimeout(function() {
            if(mileage > mileClass[1]) {
                var resultType = 1;
            } else if(!type){
                var resultType = 2;
            } else {
                var resultType = 3;
            }
            $("#result .statistics .ticketValue").removeClass("alt");
            $("#result .statistics .ticketText").removeClass("alt");
            if(mileage > mileClass[0]){
                var html3 = '<span class="no no2"></span><span class="no no"></span>';
            } else if(mileage > mileClass[1]) {
                var html3 = '<span class="no no1"></span><span class="no no"></span>';
            } else if(mileage > mileClass[2]) {
                var html3 = '<span class="no no5"></span>';
            } else {
                var html3 = '<span class="no no0"></span>';
                $("#result .statistics .ticketValue").addClass("alt");
                $("#result .statistics .ticketText").addClass("alt");
            }
            if(mileage < mileClass[2]) {
                $("#result .btns").addClass("alt");
            } else {
                $("#result .btns").removeClass("alt");
            }
            $("#result").fadeIn(200, function() {
                var mileNumber = (""+(mileage*15)).split("");
                var mileNumberLength = mileNumber.length;
                var collectNumber = (""+mileage).split("");
                var collectNumberLength = collectNumber.length;
                var html1 = html2 = "";
                for(var i=0; i< mileNumberLength; i++) {
                    html1 += '<span class="no no' + (mileNumber[i]) + '"></span>';
                }
                for(var i=0; i< collectNumberLength; i++) {
                    html2 += '<span class="no no' + (collectNumber[i]) + '"></span>';
                }
                $("#result .statistics .distance").html(html1);
                $("#result .statistics .collect").html(html2);
                $("#result .statistics .ticketValue").html(html3);

                $("#result .statistics").removeClass("style1 style2 style3").addClass("style" + resultType);
                $("#result .result" + resultType).removeClass("hidden");
                setTimeout(function() {
                    $(".resultBox").addClass("act");
                }, 10);
                setTimeout(function() {
                    ticketLock = false;
                }, btnDelayTime);
            });
            _hmt.push(['_trackEvent', "多美滋游戏", "click", "游戏结束", (mileage*15)]);
        }, 1);
    }

    function touchRoadBlockHandler(e) {
        if(!isAlive) return;
        if(!isStarted) {
            $("#game .note").addClass("hidden");
            isStarted = true;
            startTimeStamp = +new Date();
        }
        var leftClick = e.originalEvent.touches[0].pageX < screenWidth/2;
        if(leftClick == roadBlocks[2].leftCorrect) {
            correctHandler();
        } else {
            trappedHandler();
        }
        UI.moveHero(leftClick);
    }

    function reflash() {
        $("#pop").fadeOut(200);
        ticketLock = true;
        roadBlocks = [];
        //collectFood = [];
        roadContainer.removeAllChildren();
        roadContainer.y = 0;
        isAlive = true;
        isStarted = false;
        mileage = 0;
        currentType = -1;
        lifeTime = 800;
        RoadBlock.count = 0;
        UI.reset();
        initRoad();
        UI.hero.gotoAndPlay("fly");
        $("#game .note").removeClass("hidden");
    }

    initCanvas();
}

function initSlider() {
    var $intro = $("#intro");
    var $slider = $intro.find(".slideBox");
    var WIDTH = $intro.width();
    var startX = 0;
    var endX = 0;
    var lastMove = 0;
    var clickPlayBtn = false;
    var $firstSlideContent = $slider.find(".slide:eq(0) img");
    var $lastSlideContent = $slider.find(".slide:eq(2) img");

    $slider.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
        $(this).addClass("done").removeClass("act");
        $("#intro .slider .dotBox").addClass("done").removeClass("act");
        $intro.on("touchstart", touchstartHandler);
        $intro.on("touchmove", touchmoveHandler);
        $intro.on("touchend", touchendHandler);
    });
    $intro.addClass("act1");
    $slider.addClass("act");
    $("#intro .slider .dotBox").addClass("act");

    function touchstartHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        if(e.originalEvent.target.parentNode.className == "playBtn") {
            clickPlayBtn = true;
        }
        $slider.removeClass("trnstn");
        startX = endX = e.originalEvent.touches[0].pageX;
        if($slider[0].style.webkitTransform) {
            lastMove = Number($slider[0].style.webkitTransform.split("3d(")[1].split("px,")[0]);
        }
    }

    function touchmoveHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        $slider.removeClass("trnstn");
        endX = e.originalEvent.touches[0].pageX;
        var translateX = lastMove + endX - startX;
        if(translateX >= 0 && (endX-startX) > 0) {
            translateX = lastMove + (endX-startX)/4*Math.sin((endX-startX)/WIDTH*Math.PI/2);
            var scaleFix = (endX-startX)/WIDTH/20;
            $firstSlideContent.css("-webkit-transform", "scale(" + (1 + scaleFix) + ", " + (1 - scaleFix) + ")");
        } else if(translateX < -2*WIDTH && (endX-startX) < 0) {
            translateX = lastMove - (endX-startX)/4*Math.sin((endX-startX)/WIDTH*Math.PI/2);
            var scaleFix = (startX-endX)/WIDTH/20;
            $lastSlideContent.css("-webkit-transform", "scale(" + (1 + scaleFix ) + "," + (1 - scaleFix) + ")");
        }
        $slider.css("-webkit-transform", "translate3d(" + translateX + "px, 0, 0)");
    }

    function touchendHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        if(clickPlayBtn && Math.abs(endX - startX) < 20 && e.originalEvent.target.parentNode.className == "playBtn") {
            clickPlayBtn = false;
            $intro.fadeOut();
            $("#game").show();
            _hmt.push(['_trackEvent', "多美滋游戏", "click", "开始游戏"]);
            return;
        } else {
            clickPlayBtn = false;
        }
        $slider.addClass("trnstn");
        if($slider[0].style.webkitTransform) {
            lastMove = Number($slider[0].style.webkitTransform.split("3d(")[1].split("px,")[0]);
        }
        if(lastMove > 0) {
            var translateX = 0;
        } else if((endX-startX)>0) {
            var translateX = ~~((-lastMove+WIDTH/4)/WIDTH)*(-WIDTH);
            if(translateX < -2*WIDTH) {
                translateX = -2*WIDTH;
            }
        } else {
            var translateX = ~~((-lastMove+3*WIDTH/4)/WIDTH)*(-WIDTH);
            if(translateX < -2*WIDTH) {
                translateX = -2*WIDTH;
            }
        }
        setTimeout(function() {
            $firstSlideContent.css("-webkit-transform", "scaleX(1)");
            $lastSlideContent.css("-webkit-transform", "scaleX(1)");
            $slider.css("-webkit-transform", "translate3d(" + translateX + "px, 0, 0)");
        }, 10);
        callback(~~(-translateX/WIDTH)+1);
    }

    function callback(index) {
        $intro.removeClass("act1 act2 act3").addClass("act" + index);
    }
}

function bindEventHandler() {
    $("#index .startBtnBottom .startBtn").addClass("act");

    $("#index .startBtn").on("click", function() {
        $("#intro").show();
        $("#index").fadeOut("normal", function() {
            initSlider();
        });
    });

    $(".ruleBtn").on("click", function() {
        $("#rule").fadeIn(200);
    });

    $("#rule .closeBtn").on("click", function() {
        $("#rule").fadeOut(200);
    });
}

function trackingInit() {
    $('[trackingBtn]').on('click', function() {
        var _type = $(this).attr('tracking_type');
        var _info = $(this).attr('tracking_info');
        var _event = $(this).attr('tracking_event');
        _hmt.push(['_trackEvent', _type, _event, _info]);
    });
}

function checkFirstVisit() {
    var visit = getCookie("visit");
    if(visit == null) {
        $(".ruleBtn").trigger("click");
        setCookie("visit", 1, 1024);
    }

    function getCookie(name) {
        var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
        if(arr != null) return unescape(arr[2]); return null;
    }
    function setCookie(ckName, ckValue, ckDays, ckDomain) {
        if (ckValue != null) {
            if ((undefined == ckDomain) || (null == ckDomain)) {
                ckDomain = window.location.host;
            }
            if ((undefined == ckDays) || (null == ckDays) || (""== ckDays)) {
                document.cookie = ckName + "="+ ckValue + ";domain="+ ckDomain + ";path=/"
            } else {
                var now = new Date();
                var time = now.getTime();
                time = time + 86400000 * ckDays;
                now.setTime(time);
                time = now.getTime();
                document.cookie = ckName + "="+ ckValue + ";domain="+ ckDomain + ";expires="+ now.toUTCString() + ";path=/"
            }
        }
    }
}