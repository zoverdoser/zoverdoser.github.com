var indexCanvas = $("#indexCanvas"),
    gameCanvas = $('#gameCanvas'),
    documentHeight = window.innerHeight,
    documentWidth = $(document).width(),
    canvasHeight = ~~(documentHeight / documentWidth * 640),
    canvasWidth = 640,
    viewSwipe = false,
    addressSwipe = false,
    Game = {};

var swipeCard = {
    cards: $(".option .cardBox .card"),
    bg: $(".option .bgBox"),
    cardsAngle: [Math.PI / 2, Math.PI * 7 / 6, - Math.PI / 6],
    zoom: [],
    topLayer: $(".option .topLayer"),
    startX: null,
    lastX: null,
    bgPosition: 0,
    bgIndex: 0,
    legoBox: $(".option .topLayer .legoBox"),
    lastIndex: 0,
    clickAchor: false,

    init: function() {
        this.adaptCard();
        this.adaptLayer();

        this.topLayer.on("touchstart", function(e) {
            if(e.target.parentNode.tagName == 'A') {
                swipeCard.clickAchor = true;
                return;
            } else {
                swipeCard.clickAchor = false;
            }
            e.stopPropagation();
            e.preventDefault();

            $(".option .cardBox").removeClass("transition");
            swipeCard.bg.removeClass("transition");
            swipeCard.legoBox.removeClass("transition");
            swipeCard.startX = swipeCard.lastX = e.originalEvent.touches[0].pageX;
        });

        this.topLayer.on("touchmove", function(e) {
            e.stopPropagation();
            e.preventDefault();
            var distance = e.originalEvent.touches[0].pageX - swipeCard.lastX;
            swipeCard.direct = distance;

            swipeCard.lastX = e.originalEvent.touches[0].pageX;
            swipeCard.adaptCard(distance);
            swipeCard.adaptBg();
            swipeCard.adaptLayer();
        });

        this.topLayer.on("touchend", function(e) {
            var index = Array.prototype.indexOf.call(swipeCard.cards, swipeCard.cards.filter(".top")[0]);
            var _direct;
            if(Math.abs(swipeCard.lastX - swipeCard.startX) < 5) {
                if(swipeCard.clickAchor) {
                    return;
                }
                enterGame = true;
                window.history.pushState("game", null);
                Game.init(index);
                Game.setRound(0);
                Game.start();
            } else {
                swipeCard.direct = swipeCard.lastX - swipeCard.startX;

                swipeCard.cardsAngle[index] = Math.PI / 2;
                swipeCard.cardsAngle[(index + 1) % 3] = Math.PI * 7 / 6;
                swipeCard.cardsAngle[(index + 2) % 3] = - Math.PI / 6;

                // 左滑
                if(swipeCard.direct < 0) {
                    _direct = "left";
                    var _index = index;
                    if(swipeCard.bgIndex > _index) {
                        _index += 3;
                    }
                    swipeCard.bgPosition += (swipeCard.bgIndex - _index) * 640;
                } else { // 右滑
                    _direct = "right";
                    var _bgIndex = swipeCard.bgIndex;
                    if(_bgIndex < index) {
                        _bgIndex += 3;
                    }
                    swipeCard.bgPosition += (_bgIndex - index) * 640;
                }

                $(".option .cardBox").addClass("transition");
                swipeCard.legoBox.addClass("transition");
                swipeCard.bg.addClass("transition");
                swipeCard.adaptCard(_direct, index);
                swipeCard.adaptBg(index);
                swipeCard.lastIndex = index;
            }
            swipeCard.bgIndex = index; // 记录滑动之前的index
        });
    },
    adaptCard: function(distance, index) {
        for(var i = 0; i < 3; i++) {
            var card = $(swipeCard.cards[i]);
            if(typeof distance == "number") {
                swipeCard.cardsAngle[i] += Math.PI / 360 * distance;
            }
            var translateX = 438 * Math.sin(swipeCard.cardsAngle[i] - Math.PI / 2);
            swipeCard.zoom[i] = Math.pow(0.75, 1 - Math.sin(swipeCard.cardsAngle[i]));
            card.css("transform", "translateX(" + translateX + "px) scale(" + swipeCard.zoom[i] + ")");
        }


        if(typeof distance == "string" && typeof index == "number" ) {
            var angle;
            if(distance == "left") {
                if(index == 2) {
                    if(swipeCard.lastIndex == index) {
                        angle = 120;
                    } else {
                        angle = (swipeCard.cardsAngle[0] - Math.PI / 2) / Math.PI * 180 - 360;
                    }

                } else {
                    angle = (swipeCard.cardsAngle[0] - Math.PI / 2) / Math.PI * 180;
                }

            } else {
                if(index == 1) {
                    if(swipeCard.lastIndex == index) {
                        angle = -120;
                    } else {
                        angle = (swipeCard.cardsAngle[0] - Math.PI / 2) / Math.PI * 180 + 360;
                    }
                } else {
                    angle = (swipeCard.cardsAngle[0] - Math.PI / 2) / Math.PI * 180;
                }
            }
        } else {
            angle = (swipeCard.cardsAngle[0] - Math.PI / 2) / Math.PI * 180;
        }
        swipeCard.legoBox.css("transform", "rotate(" + angle + "deg)");
    },
    adaptLayer: function() {
        for(var i = 0; i < 3; i++) {
            if(swipeCard.zoom[i] == Math.max(swipeCard.zoom[0], swipeCard.zoom[1], swipeCard.zoom[2])) {
                $(swipeCard.cards[i]).removeClass("top middle bottom").addClass("top");
            } else if(swipeCard.zoom[i] == Math.min(swipeCard.zoom[0], swipeCard.zoom[1], swipeCard.zoom[2])) {
                $(swipeCard.cards[i]).removeClass("top middle bottom").addClass("bottom");
            } else {
                $(swipeCard.cards[i]).removeClass("top middle bottom").addClass("middle");
            }
        }
    },
    adaptBg: function(index) {
        if(typeof index == 'number') {
            swipeCard.bg.addClass("transition");
            swipeCard.bg.css("background-position-x", swipeCard.bgPosition);
        } else {
            var distance = swipeCard.lastX - swipeCard.startX;
            var positionX = swipeCard.bgPosition + distance / 240 * 640;
            swipeCard.bg.css("background-position-x", positionX);
        }
    }
}

adjustCanvas();
initGame();
bindEvents();
swipeCard.init();

function adjustCanvas() {
    indexCanvas.attr("height", canvasHeight);
    gameCanvas.attr("height", canvasHeight-110);
}

function initGame() {
    var indexStage = new createjs.Stage(indexCanvas[0], false, false),
        stage = new createjs.Stage(gameCanvas[0], false, false),
        sceneContainer = new createjs.Container(),
        frontContainer = new createjs.Container(),
        leftTime,
        roundTime = 46000,
        catcher,
        blockArray = [],
        currentScene = 0,
        currentRound = 0,
        caughtBlockNoArray = [],
        maxSpeed = 9,
        minSpeed = 7,
        lastX,
        intervalWidth = 30,
        showTimeInterval = 1000,
        showTimeStamp,
        nowTime,
        startTime,
        start = false,
        currentShowTime = 45,
        digitTag = $(".game .barBox .bar .digitBox .digit"),
        mySwipe = false;
    loader = new createjs.LoadQueue(false);

    loadSource();
    createjs.Touch.enable(stage);

    var Block = function(no) {
        this.scene = currentScene;
        this.round = 1 - ~~(Math.random() * 2);
        if(!!no) {
            this.no = no;
        } else {
            this.no = ~~(Math.random() * 6);
        }
        var bodyWidth = loader.getResult("l" + currentScene + this.round + this.no).width / 2
        this.body = new createjs.Bitmap(loader.getResult("l" + currentScene + this.round + this.no));
        this.body.regX = bodyWidth;
        this.body.regY = loader.getResult("l" + currentScene + this.round + this.no).height / 2;
        this.speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
        do {
            this.positionX = Math.random() * (640 - bodyWidth);
        } while(Math.abs(lastX - this.positionX) < intervalWidth || this.positionX < bodyWidth);
        lastX = this.positionX;
        this.body.x = this.positionX;

        sceneContainer.addChild(this.body);
    };
    
    Block.prototype = {
        gone: function() {
            blockArray.splice(blockArray.indexOf(this), 1);
            sceneContainer.removeChild(this.body);
        },
        caught: function() {
            var BlockInfo = {
                round: this.round,
                no: this.no
            };
            blockArray.splice(blockArray.indexOf(this), 1);
            sceneContainer.removeChild(this.body);
            return BlockInfo;
        }
    };

    Game.init = function(index) {
        $(".option").hide();
        $(".game").show();
        buildScene(index);
    };
    Game.setRound = setRound;

    Game.start = startGame;

    Game.retry = retry;

    var Catcher = function(index) {
        this.light = new lightLib.light();
        this.light.alpha = 0;
        this.light.regX = 73.825;
        this.light.regY = 147.65;
        this.light.x = 0;
        this.img = new createjs.Bitmap(loader.getResult("catcher" + index));
        this.front = new createjs.Bitmap(loader.getResult("catcher" + index + "_front"));
        this.front.regX = 105;
        this.front.regY = 89;
        this.body = new createjs.Container();
        this.body.addChild(this.img);
        this.front.y = canvasHeight-110;
        this.front.x = 320;
        this.body.y = canvasHeight-110;
        this.body.x = 320;
        this.body.regX = 105;
        this.body.regY = 122;
        
        this.body.addChild(this.light);
        this.body.addChild(this.img);
        sceneContainer.addChild(this.body);
        frontContainer.addChild(this.front);

        this.shine = function() {
            this.light.alpha = 1;
            this.light.play(0);
        };
    };

    function loadSource() {
        var manifest = [
            {src: "images/indexBg.jpg"},
            {src: "images/cardBg.jpg"},
            {src: "images/viewBg.jpg"},
            {src: "images/index/Bitmap4.png", id: "Bitmap4"},
            {src: "images/index/Bitmap5.png", id: "Bitmap5"},
            {src: "images/index/happy_042_1431411938485.jpg", id: "happy_042_1431411938485"},
            {src: "images/index/happy_043_1431411938440.png", id: "happy_043_1431411938440"},
            {src: "images/index/happy_049_1431411938457.png", id: "happy_049_1431411938457"},
            {src: "images/index/happy_098_1431411938459.png", id: "happy_098_1431411938459"},
            {src: "images/index/happy_109_1431411938465.png", id: "happy_109_1431411938465"},
            {src: "images/index/happy_189_1431411938444.png", id: "happy_189_1431411938444"},
            {src: "images/index/happy_191_1431411938445.png", id: "happy_191_1431411938445"},
            {src: "images/index/happy_234_1431411938442.png", id: "happy_234_1431411938442"},
            {src: "images/index/happy_245_1431411938489.png", id: "happy_245_1431411938489"},
            {src: "images/index/happy_269_1431411938472.png", id: "happy_269_1431411938472"},
            {src: "images/index/happy_283_1431411938454.png", id: "happy_283_1431411938454"},
            {src: "images/index/happy_289_1431411938449.png", id: "happy_289_1431411938449"},
            {src: "images/index/happy_289_1431411938474.png", id: "happy_289_1431411938474"},
            {src: "images/index/happy_299_1431411938451.png", id: "happy_299_1431411938451"},
            {src: "images/index/happy_455_1431411938479.png", id: "happy_455_1431411938479"},
            {src: "images/index/happy_535_1431411938461.png", id: "happy_535_1431411938461"},
            {src: "images/index/happy_560_1431411938456.png", id: "happy_560_1431411938456"},
            {src: "images/buyBtn.png", id: "happy_593_1431411938440"},
            {src: "images/index/happy_638_1431411938464.png", id: "happy_638_1431411938464"},
            {src: "images/index/happy_659_1431411938477.png", id: "happy_659_1431411938477"},
            {src: "images/index/happy_665_1431411938453.png", id: "happy_665_1431411938453"},
            {src: "images/index/happy_676_1431411938437.jpg", id: "happy_676_1431411938437"},
            {src: "images/index/happy_689_1431411938448.png", id: "happy_689_1431411938448"},
            {src: "images/index/happy_714_1431411938471.png", id: "happy_714_1431411938471"},
            {src: "images/index/happy_779_1431411938443.jpg", id: "happy_779_1431411938443"},
            {src: "images/index/happy_855_1431411938470.png", id: "happy_855_1431411938470"},
            {src: "images/index/happy_893_1431411938448.png", id: "happy_893_1431411938448"},
            {src: "images/index/happy_902_1431411938478.png", id: "happy_902_1431411938478"},
            {src: "images/index/happy_955_1431411938438.png", id: "happy_955_1431411938438"},
            {src: "images/index/happy_974_1431411938455.png", id: "happy_974_1431411938455"},
            {src: "images/index/happy_983_1431411938483.png", id: "happy_983_1431411938483"},
            {src: "images/index/happy_985_1431411938463.png", id: "happy_985_1431411938463"},
            {src: "images/index/happy_990_1431411938462.png", id: "happy_990_1431411938462"},
            {src: "images/index/happy_996_1431411938476.png", id: "happy_996_1431411938476"},
            {src: "images/bg0.jpg", id: "bg0"},
            {src: "images/bg1.jpg", id: "bg1"},
            {src: "images/bg2.jpg", id: "bg2"},
            {src: "images/l000.png", id: "l000"},
            {src: "images/l001.png", id: "l001"},
            {src: "images/l002.png", id: "l002"},
            {src: "images/l003.png", id: "l003"},
            {src: "images/l004.png", id: "l004"},
            {src: "images/l005.png", id: "l005"},
            {src: "images/l010.png", id: "l010"},
            {src: "images/l011.png", id: "l011"},
            {src: "images/l012.png", id: "l012"},
            {src: "images/l013.png", id: "l013"},
            {src: "images/l014.png", id: "l014"},
            {src: "images/l015.png", id: "l015"},
            {src: "images/l100.png", id: "l100"},
            {src: "images/l101.png", id: "l101"},
            {src: "images/l102.png", id: "l102"},
            {src: "images/l103.png", id: "l103"},
            {src: "images/l104.png", id: "l104"},
            {src: "images/l105.png", id: "l105"},
            {src: "images/l110.png", id: "l110"},
            {src: "images/l111.png", id: "l111"},
            {src: "images/l112.png", id: "l112"},
            {src: "images/l113.png", id: "l113"},
            {src: "images/l114.png", id: "l114"},
            {src: "images/l115.png", id: "l115"},
            {src: "images/l200.png", id: "l200"},
            {src: "images/l201.png", id: "l201"},
            {src: "images/l202.png", id: "l202"},
            {src: "images/l203.png", id: "l203"},
            {src: "images/l204.png", id: "l204"},
            {src: "images/l205.png", id: "l205"},
            {src: "images/l210.png", id: "l210"},
            {src: "images/l211.png", id: "l211"},
            {src: "images/l212.png", id: "l212"},
            {src: "images/l213.png", id: "l213"},
            {src: "images/l214.png", id: "l214"},
            {src: "images/l215.png", id: "l215"},
            {src: "images/catcher0_front.png", id: "catcher0_front"},
            {src: "images/catcher0.png", id: "catcher0"},
            {src: "images/catcher1_front.png", id: "catcher1_front"},
            {src: "images/catcher1.png", id: "catcher1"},
            {src: "images/catcher2_front.png", id: "catcher2_front"},
            {src: "images/catcher2.png", id: "catcher2"},
            {src: "images/light0.png", id: "light0"},
            {src: "images/light1.png", id: "light1"},
            {src: "images/light2.png", id: "light2"}
        ];
        var progressDigit = $("#progress");
        var percentage = 0;
        var progressBar = $(".loading .progress .progressBar");

        loader.addEventListener("progress", function(event) {
            percentage = ~~(event.loaded*100);
            progressDigit.text(percentage);
            progressBar.css("width", percentage + "%");
        });
        loader.addEventListener("complete", doneLoading);
        loader.loadManifest(manifest);
    }

    function doneLoading() {
        initIndex();
        initLight();
        bindEvents();
        createjs.Ticker.setFPS(25);
        createjs.Ticker.addEventListener("tick", tick);
        $(".loading.wrapper").hide();
        $(".index.wrapper").show();
    }

    function initIndex() {
        getIndex();
        var indexAnimation = new indexLib.init();
        indexStage.addChild(indexAnimation);
        indexStage.update();
        createjs.Ticker.addEventListener("tick", indexStage);
    }

    function buildScene(index) {
        $(".game .noticeBox .notice").hide().eq(index).show();
        $(".game .barBox .bar").hide().eq(index).show();
        blockArray = [];
        sceneContainer.removeAllChildren();
        frontContainer.removeAllChildren();
        stage.removeAllChildren();
        currentScene = index;
        var bg = new createjs.Bitmap(loader.getResult("bg" + index));
        bg.y = canvasHeight - 110 - loader.getResult("bg" + index).height;
        sceneContainer.addChild(bg);
        stage.addChild(sceneContainer);
        stage.addChild(frontContainer);
        catcher = new Catcher(index);
    }

    function tick() {
        if(start) {
            nowTime = +new Date();
            calcTime();
            updatePos();
            newBlock();
        }
        stage.update();
    }

    function newBlock() {
        if((nowTime - showTimeStamp) > showTimeInterval) {
            blockArray[blockArray.length] = new Block();
            showTimeStamp = nowTime;
        }
    }

    function setRound(round) {
        caughtBlockNoArray = [];
        currentRound = round;
        if(round) {
            $(".game .barBox .bar:eq(" + currentScene + ") .round").addClass("round2");
        } else {
            $(".game .barBox .bar:eq(" + currentScene + ") .round").removeClass("round2");
        }

        $(".game .noticeBox .notice:eq(" + currentScene + ") .hint").hide().eq(currentRound).show();
    }

    function retry() {
        for(var i = 0; i < blockArray.length; i++) {
            sceneContainer.removeChild(blockArray[i].body);
        }
        blockArray = [];
        setRound(0);
        startGame();
    }

    function startGame() {
        bindTouchEvents();
        start = true;
        startTime = showTimeStamp = +new Date();
        clearHint();
    }

    function nextRound() {
        currentRound = 1;
        for(var i = 0; i < blockArray.length; i++) {
            sceneContainer.removeChild(blockArray[i].body);
        }
        blockArray = [];
        setRound(currentRound);
        startGame();
    }

    function clearHint() {
        $(".game .noticeBox .hintBox").removeClass("alt");
    }

    function calcTime() {
        leftTime = roundTime - nowTime + startTime;
        if(leftTime > 0) {
            updateTime();
        } else {
            timeoutHandler();
        }
    }

    function updateTime() {
        if(currentShowTime != ~~(leftTime/1000)) {
            currentShowTime = ~~(leftTime/1000);
            var digit = [~~(currentShowTime/10), currentShowTime - ~~(currentShowTime/10)*10];
            $(digitTag[currentScene*2]).removeClass("d0 d1 d2 d3 d4 d5 d6 d7 d8 d9").addClass("d"+digit[0]);
            $(digitTag[currentScene*2+1]).removeClass("d0 d1 d2 d3 d4 d5 d6 d7 d8 d9").addClass("d"+digit[1]);
        }
    }

    function updatePos() {
        for(var i = 0; i < blockArray.length; i++) {
            checkBottom(i);
        }

        function checkBottom(index) {
            if(blockArray[i].body.y > canvasHeight) {
                blockArray[i].gone();
            } else if(blockArray[i].body.y < canvasHeight - 200
                    && blockArray[i].body.y > canvasHeight - 260
                    && Math.abs(blockArray[i].body.x - catcher.body.x) < 62) {
                catchHandler(blockArray[i].caught());
                catcher.shine();
            } else {
                blockArray[i].body.y += blockArray[i].speed;
            }
        }
    }

    function catchHandler(blockInfo) {
        if(blockInfo.round == currentRound) {
            if(caughtBlockNoArray.indexOf(blockInfo.no) == -1) {
                caughtBlockNoArray.push(blockInfo.no);
                $(".game .noticeBox .notice:eq(" + currentScene + ") .hint:eq(" + currentRound + ") .hintBox:eq(" + blockInfo.no + ")").addClass("alt");
                if(caughtBlockNoArray.length === 6) {
                    passHandler();
                }
            }
        } else {
            diedHandler();
        }
    }

    function diedHandler() {
        showFailedBox(currentRound);
        unbindTouchEvents();
        start = false;
        console.log("died");
    }

    function timeoutHandler() {
        diedHandler();
    }

    function passHandler() {
        showSuccessBox(currentRound);
        unbindTouchEvents();
        start = false;
        console.log("pass");
    }

    function showSuccessBox(round) {
        if(round == 0) {
            $(".game .pop").show().find(".successBox.round1").fadeIn("fast");
        } else {
            $(".game .pop").show().find(".successBox.round2").fadeIn("fast");
            initSwipe();
        }
    }

    function showExceedBox() {
        $(".game .pop").show().find(".exceedBox").fadeIn("fast");
    }

    function showFailedBox(index) {
        $(".game .pop").show().find(".failedBox.round" + (index+1)).fadeIn("fast");
    }

    function showShareBox() {
        $(".game .sharePop ").fadeIn("fast");
    }

    function initSwipe() {
        $("#popSlider").removeClass("scene0 scene1 scene2").addClass("scene" + currentScene);
        mySwipe = new Swipe(document.getElementById('popSlider'), {
            startSlide: 0,
            speed: 400,
            auto: 0,
            continuous: true,
            disableScroll: false,
            stopPropagation: false
        });
    }

    var touchFunc = {
        press: false,
        offset: 0,
        down: function(e) {
            touchFunc.press = true;
            touchFunc.offset = catcher.body.x - e.stageX;
        },
        move: function(e) {
            if(touchFunc.press) {
                var x = e.stageX + touchFunc.offset;
                if(x > 640) x = 640;
                if(x < 0) x = 0;
                catcher.body.x = x;
                catcher.front.x = x;
            }
        },
        up: function() {
            touchFunc.press = false;
            touchFunc.offset = 0;
        }
    };

    function bindTouchEvents() {
        catcher.front.on("mousedown", touchFunc.down);
        frontContainer.on("pressmove", touchFunc.move);
        frontContainer.on("pressup", touchFunc.up);
    }

    function unbindTouchEvents() {
        catcher.front.removeAllEventListeners("mousedown");
        frontContainer.removeAllEventListeners("pressmove");
        frontContainer.removeAllEventListeners("pressup");
    }

    function bindEvents() {
        $(".game .sharePop").on("click", function() {
            $(this).hide();
        });

        $(".game .pop .callBtn").on("click", function() {
            showShareBox();
        });

        $(".game .pop .successBox.round2 .retryBtn, .game .pop .exceedBox .retryBtn, .game .pop .failedBox .retryBtn").on("click", function() {
            $(this).parent().parent().hide().parent().hide();
            $(".game.wrapper").hide();
            $(".option.wrapper").show();
            enterGame = false;
        });

        $(".game .pop .viewBtn").on("click", function() {
            initView();
        });

        $(".game .pop .successBox.round1 .continueBtn").on("click", function() {
            $(".game .pop").hide().find(".successBox.round1").hide();
            nextRound();
        });
    }
}

function initView() {
    $(".view.wrapper").show();
    enterView = true;
    enterMine = false;
    window.history.pushState("view", null);
    var dots = $(".view .dotList li");
    if(!viewSwipe) {
        viewSwipe = new Swipe(document.getElementById('slider'), {
            startSlide: 0,
            speed: 400,
            auto: 0,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            callback: function(index, elem) {
                dots.removeClass("alt").eq(index).addClass("alt");
            }
        }); 
    }  
}

function initMine() {
    $(".mine.wrapper").show();
    enterMine = true;
    enterView = false;
    window.history.pushState("mine", null);
    var dotList = $(".mine .container .dotList");
    var pageCount = $("#prizeSwipe .swipeBox").length;
    if(pageCount > 1) {
        var html = '<li class="alt"></li>';
        for(var i = 0; i < pageCount-1; i++) {
            html += "<li></li>";
        }
        dotList.html(html).show();
    } else {
        dotList.html("<li></li>").hide();
    }
    var mineSwipe = new Swipe(document.getElementById('prizeSwipe'), {
        startSlide: 0,
        speed: 400,
        auto: 0,
        continuous: false,
        disableScroll: false,
        stopPropagation: false,
        callback: function(index, elem) {
            dotList.find("li").removeClass("alt").eq(index).addClass("alt");
        }
    }); 
}

function initAddressSwipe() {
    var dotList = $(".mine .pop .dotList");
    var pageCount = $("#addressSwipe .swipeBox").length;
    if(pageCount > 1) {
        var html = '<li class="alt"></li>';
        for(var i = 0; i < pageCount-1; i++) {
            html += "<li></li>";
        }
        dotList.html(html).show();
    } else {
        dotList.html("<li></li>").hide();
    }
    if(!addressSwipe) {
        addressSwipe = new Swipe(document.getElementById('addressSwipe'), {
            startSlide: 0,
            speed: 400,
            auto: 0,
            continuous: false,
            disableScroll: false,
            stopPropagation: false,
            callback: function(index, elem) {
                dotList.find("li").removeClass("alt").eq(index).addClass("alt");
            }
        });
    }
}

function bindEvents() {
    $(".option .topLayer .viewBtn").on("click", function() {
        initView();
    });
    $(".option .topLayer .mineBtn").on("click", function() {
        initMine();
    });
    $(".view .backBtn").on("click", function() {
        $(".view.wrapper").hide();
        enterView = false;
    });
    $(".mine .backBtn").on("click", function() {
        $(".mine.wrapper").hide();
        enterMine = false;
    });

    window.onpopstate = function (e) {
        console.log(enterView, enterMine)
        if(enterView) {
            $(".view.wrapper").hide();
            enterView = false;
        } else if(enterMine) {
            enterMine = false;
            $(".mine.wrapper").hide();
        } else if(enterGame) {
            $(".game.wrapper").hide();
            $(".option.wrapper").show();
            enterGame = false;
        } else {

        }
    };
}

function initShare() {
    
}