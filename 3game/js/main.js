var Game = {},
    gameCanvas = $('#gameCanvas'),
    documentHeight = $(window).height(),
    documentWidth = $(window).width(),
    loader,
    hintInterval = 5000,
    roundTime = 30000,
    gameScore = 0,
    countDownDate = 1434506400000,
    iniTime = +new Date(),
    hitSound,
    Grid;


var emo, emoArray = [18, 109];

var diyLoading = {
    create: function() {
        $("body").append('<div class="diyLoading fixed"></div>');
    },
    end: function(callback) {
        $(".diyLoading").remove();
        if(typeof callback == 'function') {
            callback();
        }
    }
};

initGame();
bindEvents();
//initSound();
//countDown();

function initGame() {
    var stage = new createjs.Stage(gameCanvas[0], false, false),
        emoStage = new createjs.Stage($("#emoCanvas")[0], false, false),
        //emo,
        emoState = 0,
        timeDisplay = $("#game .gamePane .gameBoard .time"),
        scoreDisplay = $("#game .gamePane .gameBoard .score"),
        lastShowedTime = roundTime / 1000,
        processNum = $("#processNum"),
        effectContainer = new createjs.Container(),
        touchStartBlock = false,
        touchStartLocation = {},
        gameStart = false,
        gameEnd = false,
        gameStartTime = false;

    var shape = new createjs.Shape();
    shape.graphics.beginFill("white").drawRect(0, 0, 582, 0.1);
    stage.addChild(shape);
    stage.update();

    Grid = {
        xLength: 6,
        yLength: 5,
        blocks: [],
        dropCount: 0,
        blankArray: [0,0,0,0,0,0],
        explodeCount: 0,
        matchBlocks: [],
        swapTimeStamp: false,
        container: new createjs.Container(),

        init: function() {
            touchStartBlock = false;
            touchStartLocation = {};
            gameStart = false;
            gameEnd = false;
            gameStartTime = false;
            gameScore = 0;
            timeDisplay.text("00:" + roundTime/1000).removeClass("warn start");
            scoreDisplay.text("0000");
            emo.gotoAndPlay(0);
            emoState = 0;
            Grid.blocks = [];
            Grid.matchBlocks = [];

            Grid.container.removeAllChildren();
            effectContainer.removeAllChildren();
            
           // setTimeout(function(){
                Grid.loadBlocks();
                Grid.bindTouch();
            //},1000*2)
        },
        loadBlocks: function() {
            while(true) {
                Grid.container.removeAllChildren();
                effectContainer.removeAllChildren();

                Grid.blocks=[];
                for(var i = 0; i < Grid.yLength; i++) {
                    Grid.blocks[i] = [];
                    for(var j = 0; j < Grid.xLength; j++) {
                       // if(!Grid.blocks[i]) {
                            
                       // }
                        Grid.blocks[i][j] = new Block(j, i, ~~(Math.random()*5));

                    }
                }
                Grid.checkMatch();
                if(Grid.matchBlocks!=0){
                    continue;
                }
                var length=Grid.possibleMatch().length;
                if(length==0){
                    continue;
                }
                break;
            } ///Grid.matchBlocks.length != 0 || !Grid.possibleMatch().length
        },
        checkMatch: function() {
            Grid.matchBlocks = [];
            var match = [];
            for(var i = 0; i < Grid.yLength; i++) {
                match = [[i, 0]];
                for(var j = 1; j < Grid.xLength; j++) {
                    if(Grid.blocks[i][j].type !== undefined && Grid.blocks[i][j].type == Grid.blocks[i][j-1].type) {
                        match.push([i, j]);
                        if(j == Grid.xLength-1) {
                            if(match.length > 2) {
                                Grid.matchBlocks = Grid.matchBlocks.concat(match);
                            }
                        }
                    } else {
                        if(match.length > 2) {
                            Grid.matchBlocks = Grid.matchBlocks.concat(match);
                        }
                        if(j < Grid.xLength - 2) {
                            match = [[i, j]];
                        } else {
                            break;
                        }
                    }
                }
            }

            for(var i = 0; i < Grid.xLength; i++) {
                var match = [[0, i]];
                for(var j = 1; j < Grid.yLength; j++) {
                    if(Grid.blocks[j][i].type !== undefined && Grid.blocks[j][i].type == Grid.blocks[j-1][i].type) {
                        match.push([j, i]);
                        if(j == Grid.yLength-1) {
                            if(match.length > 2) {
                                Grid.matchBlocks = Grid.matchBlocks.concat(match);
                            }
                        }
                    } else {
                        if(match.length > 2) {
                            Grid.matchBlocks = Grid.matchBlocks.concat(match);
                        }
                        if(j < Grid.yLength - 2) {
                            match = [[j, i]];
                        } else {
                            break;
                        }
                    }
                }
            }
        },
        possibleMatch: function() {
            var match = [];
            for(var i = 0; i < Grid.xLength; i++) {
                for(var j = 0; j < Grid.yLength; j++) {
                    if(match = Grid.matchPattern([j, i], [1, 0], [[-2,0],[-1,-1],[-1,1],[2,-1],[2,1],[3,0]]), match.length) {
                        return match;
                    } else if(match = Grid.matchPattern([j, i], [2, 0], [[1,-1],[1,1]]), match.length) {
                        return match;
                    } else if(match = Grid.matchPattern([j, i], [0, 1], [[0,-2],[-1,-1],[1,-1],[-1,2],[1,2],[0,3]]), match.length) {
                        return match;
                    } else if(match = Grid.matchPattern([j, i], [0, 2], [[-1,1],[1,1]]), match.length) {
                        return match;
                    }
                }
            }
            return [];
        },
        matchPattern: function(block, necessaryOffset, possibleOffsets) {
            if((Grid.blocks[block[0]][block[1]].type !== undefined) &&
                (block[1] + necessaryOffset[1] < Grid.xLength) && 
                (block[0] + necessaryOffset[0] < Grid.yLength) && 
                (Grid.blocks[block[0]][block[1]].type == Grid.blocks[block[0] + necessaryOffset[0]][block[1] + necessaryOffset[1]].type)
            ) {
                for(var i = 0; i < possibleOffsets.length; i++) {
                    var possiblePosX = block[1] + possibleOffsets[i][1];
                    var possiblePosY = block[0] + possibleOffsets[i][0];
                    if(possiblePosX >= 0 && possiblePosX < Grid.xLength && possiblePosY >= 0 && possiblePosY < Grid.yLength &&
                        Grid.blocks[block[0]][block[1]].type == Grid.blocks[possiblePosY][possiblePosX].type) {
                        return [
                            block,
                            [necessaryOffset[0] + block[0], necessaryOffset[1] + block[1]],
                            [possiblePosY, possiblePosX]
                        ];
                    }
                }
                return [];
            } else {
                return [];
            }
        },
        triggerExplodes: function() {
            Grid.clearHint();
            for(var pos in Grid.matchBlocks) {
                var posX = Grid.matchBlocks[pos][1];
                var posY = Grid.matchBlocks[pos][0];
                if(Grid.blocks[posY][posX]) {
                    Grid.blocks[posY][posX].explode(function() {
                        Grid.triggerDrop();
                    });
                }
            }
            Grid.matchBlocks = [];
        },
        triggerDrop: function() {
            var hasDrop = false;
            for(var i = 0; i < Grid.xLength; i++) {
                var dropDistance = 0;
                for(var j = Grid.yLength - 1; j >= 0; j--) {
                    if(Grid.blocks[j][i]) {
                        if(dropDistance) {
                            hasDrop = true;
                            Grid.blocks[j][i].drop(j + dropDistance, function() {
                                for(var i = 0; i < Grid.xLength; i++) {
                                    for(var j = 0; j < Grid.blankArray[i]; j++) {
                                        Grid.blocks[j][i] = false;
                                    }
                                }
                                Grid.checkMatch();
                                if(Grid.matchBlocks.length) {
                                    Grid.triggerExplodes();
                                } else {
                                    Grid.fillBlank();
                                }
                            });
                        }
                    } else {
                        dropDistance++;
                    }
                }
                Grid.blankArray[i] = dropDistance;
            }
            if(!hasDrop) {
                Grid.fillBlank();
            }
        },
        fillBlank: function() {
            for(var i = 0; i < Grid.xLength; i++) {
                for(var j = 0; j < Grid.yLength; j++) {
                    if(!Grid.blocks[j][i]) {
                        Grid.blocks[j][i] = new Block(i, j, ~~(Math.random()*5));
                    }
                }
            }
            Grid.checkMatch();
            if(Grid.matchBlocks.length) {
                Grid.triggerExplodes();
            } else {
                if(!Grid.possibleMatch().length) {
                    Grid.loadBlocks();
                }
            }
            Grid.swapTimeStamp = +new Date();
        },
        bindTouch: function() {
            Grid.container.on("mousedown", function(e) {
                if(gameEnd) {
                    return;
                }
                if(Grid.checkTouch()) {
                    return;
                }
                var posX = ~~(e.stageX / 92);
                var posY = ~~(e.stageY / 92);
                posX = (posX == Grid.xLength)? Grid.xLength-1 : posX;
                posY = (posY == Grid.yLength)? Grid.yLength-1 : posY;
                touchStartLocation.x = e.stageX;
                touchStartLocation.y = e.stageY;
                touchStartBlock = [posY, posX];
            });
            Grid.container.on("pressup", function(e) {
                if(gameEnd) {
                    return;
                }
                if(Grid.checkTouch()) {
                    return;
                }
                var posX = touchStartBlock[1], posY = touchStartBlock[0];
                var canSwap = false;
                if(Math.abs(e.stageX - touchStartLocation.x) > 60) {
                    canSwap = true;
                    if(e.stageX - touchStartLocation.x > 0) {
                        posX++;
                    } else {
                        posX--;
                    }
                } else if(Math.abs(e.stageY - touchStartLocation.y) > 60) {
                    canSwap = true;
                    if(e.stageY - touchStartLocation.y > 0) {
                        posY++;
                    } else {
                        posY--;
                    }
                }
                if(canSwap && posX >= 0 && posX < Grid.xLength && posY >= 0 && posY < Grid.yLength) {
                    Grid.blocks[touchStartBlock[0]][touchStartBlock[1]].swap(Grid.blocks[posY][posX]);
                }
            });
        },
        checkTouch: function() {
            for(var i = 0; i < Grid.xLength; i++) {
                for(var j = 0; j < Grid.yLength; j++) {
                    if(Grid.blocks[j][i] && Grid.blocks[j][i].inAction) {
                        return true;
                    }
                }
            }
            return false;
        },
        showHint: function() {
            var prematch = Grid.possibleMatch();
            if(prematch.length) {
                for(var i = 0; i < prematch.length; i++) {
                    Grid.blocks[prematch[i][0]][prematch[i][1]].shine();
                }
            }
        },
        clearHint: function() {
            for(var i = 0; i < Grid.xLength; i++) {
                for(var j = 0; j < Grid.yLength; j++) {
                    if(Grid.blocks[j][i]) {
                        Grid.blocks[j][i].clearHint();
                    }
                }
            }
        }
    };

    stage.addChild(Grid.container);
    stage.addChild(effectContainer);

    Game.restart = function() {
        Grid.swapTimeStamp = +new Date();
        Grid.init();
        diyLoading.end();
        startGameCountDown();
    };

    Game.start = function() {
        startGameCountDown();
    };

    var Block = function(x, y, type) {
        var self = this;
        self.posX = x;
        self.posY = y;
        self.type = type;
        self.body = new createjs.Bitmap(loader.getResult("block" + type));
        self.body.regX = self.body.regY = 46;
        self.body.x = 46 + 98 * x;
        self.effect = new effectLib.init();
        self.effect.alpha = 0;
        self.effect.regX = 12;
        self.effect.regY = -25;
        self.effect.x = self.body.x;
        self.inAction = false;
        self.isShine = false;
        if(y === false) {
            self.body.y = -46;
        } else {
            self.body.y = 46 + 98 * y;
        }
        self.effect.y = self.body.y;
        self.body.posX = x;
        self.body.posY = y;

        Grid.container.addChild(self.body);
        effectContainer.addChild(self.effect);
    };

    Block.prototype = {
        drop: function(dropTo, callback) {
            var self = this;
            self.inAction = true;
            Grid.dropCount++;
            createjs.Tween.get(self.body).to({y: 46 + 98 * dropTo}, 180 * (dropTo - self.posY)).call(function() {
                createjs.Tween.get(self.effect).set({y: 46 + 98 * dropTo});
                Grid.blocks[dropTo][self.posX] = self;
                self.posY = dropTo;
                Grid.dropCount--;
                if(typeof callback == "function" && Grid.dropCount == 0) {
                    callback();
                }
                self.inAction = false;
            });
        },
        slide: function(posX, posY, callback) {
            var self = this;
            self.inAction = true;
            createjs.Tween.get(self.body).to({x: 46 + 98 * posX, y: 46 + 98 * posY}, 200).call(function() {
                createjs.Tween.get(self.effect).set({x: 46 + 98 * posX, y: 46 + 98 * posY});
                self.inAction = false;
                if(typeof callback === "function") {
                    callback();
                }
            });
        },
        swap: function(block) {
            if(!gameStart) {
                return;
            }
            Grid.swapTimeStamp = +new Date();
            var self = this;
            var first = {
                posX: this.posX,
                posY: this.posY
            };
            
            var second = {
                posX: block.posX,
                posY: block.posY
            };
            self.slide(second.posX, second.posY);
            block.slide(first.posX, first.posY, function() {
                Grid.blocks[second.posY][second.posX] = self;
                self.posX = second.posX;
                self.posY = second.posY;
                Grid.blocks[first.posY][first.posX] = block;
                block.posX = first.posX;
                block.posY = first.posY;

                Grid.checkMatch();
                if(Grid.matchBlocks.length) {
                    Grid.triggerExplodes();
                } else {
                    self.slide(first.posX, first.posY);
                    block.slide(second.posX, second.posY, function() {
                        Grid.blocks[first.posY][first.posX] = self;
                        self.posX = first.posX;
                        self.posY = first.posY;
                        Grid.blocks[second.posY][second.posX] = block;
                        block.posX = second.posX;
                        block.posY = second.posY;
                    });
                }
                Grid.swapTimeStamp = +new Date();
            });
        },
        explode: function(callback) {
            var self = this;
            self.inAction = true;
            Grid.explodeCount++;

            self.effect.alpha = 1;
            self.effect.play(0);
            
            createjs.Tween.get(this.body).to({alpha: 0}, 400).call(function() {
                Grid.blocks[self.posY][self.posX] = false;
                Grid.container.removeChild(self.body);
                Grid.container.removeChild(self.effect);
                Grid.explodeCount--;
                if(typeof callback == "function" && Grid.explodeCount == 0) {
                    callback();
                }
                self.inAction = false;
                if(!gameEnd) {
                    scoreDisplay.text(("000" + ++gameScore).substr(-4, 4));
                }
                if(emoState < ~~(gameScore / 8)) {
                    if(emoState < 2) {
                        emo.gotoAndPlay(emoArray[emoState]);
                        emo.play();
                        emoState++;
                    } else {
                        //emo.gotoAndPlay(emoArray[1]);
                        emo.instance.gotoAndPlay(0);
                        emoState++;
                    }
                }
                
            });
        },
        shine: function() {
            var self = this;
            self.isShine = true;
            createjs.Tween.get(self.body,{loop:true}).to({alpha: 0.4}, 500).to({alpha: 1}, 500);
        },
        clearHint: function() {
            var self = this;
            if(self.isShine && createjs.Tween.hasActiveTweens(self.body)) {
                createjs.Tween.removeTweens(self.body);
            }
            self.isShine = false;
            self.body.alpha = 1;
        }
    };

    createjs.Touch.enable(stage);

    loadSource();

    function loadSource() {
        var manifest = [
            {src: "images/block0.jpg", id: "block0"},
            {src: "images/block1.jpg", id: "block1"},
            {src: "images/block2.jpg", id: "block2"},
            {src: "images/block3.jpg", id: "block3"},
            {src: "images/block4.jpg", id: "block4"},
            {src: "images/emo/happy_414_1433906132288.png", id:"happy_414_1433906132288"},
            {src: "images/emo/happy_579_1433906132287.png", id:"happy_579_1433906132287"},
            {src: "images/emo/happy_600_1433906132287.png", id:"happy_600_1433906132287"},
            {src: "images/emo/happy_935_1433906132288.png", id:"happy_935_1433906132288"},
            {src: "images/emo/happy_938_1433906132288.png", id:"happy_938_1433906132288"},
            {src: "images/emo/happy_944_1433906132288.png", id:"happy_944_1433906132288"},
            {src: "images/effect/Bitmap10.png", id:"Bitmap10"},
            {src: "images/effect/Bitmap11.png", id:"Bitmap11"},
            {src: "images/effect/Bitmap12.png", id:"Bitmap12"},
            {src: "images/effect/Bitmap13.png", id:"Bitmap13"},
            {src: "images/effect/Bitmap14.png", id:"Bitmap14"},
            {src: "images/effect/Bitmap15.png", id:"Bitmap15"},
            {src: "images/effect/Bitmap8.png", id:"Bitmap8"},
            {src: "images/effect/Bitmap9.png", id:"Bitmap9"}/*,
            {src: "images/canvasBg.png", id:"canvasBg"}*/
        ];
        
        loader = new createjs.LoadQueue(false);
        
        loader.addEventListener("progress", function(event) {
            percentage = Math.floor(event.loaded*100);
            processNum.text(percentage);
        });
        loader.addEventListener("complete", doneLoading);
        loader.loadManifest(manifest);
    }

    function startReq() {
        $.getJSON(webPath + "game/index/baidu-statistics", {}, function(data) {
            if(!data.success) {
                window.location.reload();
            }
        });
    }

    function doneLoading() {
        $("#loading").hide();
        $("#thumb").show().find(".thumbImg").addClass("act");
        initEffect();
        initEmo();
        emo = new emoLib.init();
        emoStage.addChild(emo);
        createjs.Ticker.setFPS(25);
        createjs.Ticker.addEventListener("tick", tick);
        createjs.Ticker.addEventListener("tick", emoStage);
        //hitSound.play();
        Grid.init();
    }

    function startGameCountDown() {
        timeDisplay.text("READY?").addClass("start");
        setTimeout(function() {
            timeDisplay.text("GO!");
            setTimeout(function() {
                timeDisplay.text("00:" + roundTime/1000).removeClass("start");
                //startReq();
                gameStartTime = +new Date();
                Grid.swapTimeStamp = +new Date();
                gameStart = true;
            }, 1000);
        }, 2000);
    }

    function showHint() {
        if(gameStart && !gameEnd && Grid.swapTimeStamp && +new Date() - Grid.swapTimeStamp > hintInterval) {
            Grid.showHint();
            Grid.swapTimeStamp = +new Date();
        }
    }

    function checkGameTime() {
        if(gameStart) {
            var passTime = +new Date() - gameStartTime;
            if(~~((roundTime - passTime)/1000) != lastShowedTime) {
                lastShowedTime = ~~((roundTime - passTime)/1000);
                timeDisplay.text("00:" + ("0" + lastShowedTime).substr(-2, 2));
            }
            if(passTime > roundTime - 6000) {
                timeDisplay.addClass("warn");
            }
            if(passTime > roundTime) {
                timeDisplay.removeClass("warn");
                deadHandler();
            }
        }
    }

    function deadHandler() {
        scoreDisplay.text(("000" + gameScore).substr(-4, 4));
        gameStart = false;
        gameEnd = true;
        diyLoading.create();
        //$.getJSON(webPath + "game/index/save", {score: gameScore}, function(data) {
            diyLoading.end();
            //if(data.success) {
                var text = '好厉害~！继续努力~！'//data.result.text;
                gameID = 0//data.result.game_id;
                initShare(gameScore);
                $("#result .resultImg .textBox .text").html(text);
                $("#result .resultImg").removeClass("animate");
                $("#result .resultBox .score").text(gameScore);
                var beat = (gameScore >= 85)? '99%' : (gameScore + 15) + '%';
                if(gameScore == 0) {
                    beat = '0%';
                }
                $("#result .resultBox .beat").text(beat);
                $("#result").show().find(".resultImg").addClass("animate");
                $("#game").addClass("alt");
            //}
        //});
    }

    function tick() {
        checkGameTime();
        showHint();
        stage.update();
    }
}

function initRank() {
    var rankBox = $("#rank .rankListBox");
    var rankList = rankBox.find(".rankList");
    var loading = false;

    rankBox.on("touchend touchcancel", function(e) {
        var scrollHeight = rankBox.scrollTop();
        if(!loading && scrollHeight >= (rankList.height() - rankBox.height() - 10)) {
            loading = true;
            loadRank(~~(rankList.find("li").length / 15) + 1, function() {
                loading = false;
            });
        }
    });
}

function loadRank(rankPage, callback) {
    var rankPane = $("#rank .myRankBox");
    //rankPane.removeClass("alt");
    var rankList = $("#rank .rankListBox .rankList");
    diyLoading.create();
    $.getJSON(webPath + "game/index/rank", {page: rankPage, num: 15}, function(data) {
        diyLoading.end();
        if(data.success) {
            var myRank = data.result.myRank;
            var myScore = data.result.score;
            var list = data.result.list;
            var html = '';
            if(!!myRank && myRank <= 100) {
                rankPane.addClass("alt");
            }
            for(var i = 0; i < list.length; i++) {
                if(i + (rankPage-1) * 15 + 1 > rankList.find("li").length) {
                    html += '<li><span class="name">' + list[i].nickname + '</span><span class="achvmnt">共消除了' + list[i].score + '个起床气</span></li>';
                }
            }
            $("#rank .myRankBox .amount").text(myScore);
            $("#rank .myRankBox .rankNum").text(myRank);
            rankList.append(html);
        }
        if(typeof callback == "function") {
            callback();
        }
    });
}

function countDown() {
    var nowTime, hourDigit = 0, minDigit = 0, secDigit = 0;
    var hour = $("#result .shop .main .shopTextBox .hour"), 
        min = $("#result .shop .main .shopTextBox .min"), 
        sec = $("#result .shop .main .shopTextBox .sec");

    $.getJSON('http://weixin.schwarzkopfclub.com.cn/activity/second/get-time?jsonpcallback=?', {}, function(data) {
        if(data.success) {
            var now = data.result.now;
            var next = data.result.next;
            if(next != -1) {
                if(now > next) {
                    //in progress
                    $("#result .shop .main .shopTextBox").addClass("alt");
                    //setTimer()
                } else {
                    //wait
                    $("#result .shop .main .shopTextBox").removeClass("alt end");
                    setTimer(now, next);
                }
            } else {
                //end
                $("#result .shop .main .shopTextBox").addClass("end");
            }
        }
    });

    function setTimer(now, next) {
        var period = next - now;
        setInterval(function() {
            period -= 0.5;
            if(period > 0) {
                hourDigit = ~~(period / 60 / 60);
                minDigit = ~~((period - hourDigit * 60 * 60) / 60);
                secDigit = ~~(period - hourDigit * 60 * 60 - minDigit * 60);
                hour.text(hourDigit);
                min.text(minDigit);
                sec.text(secDigit);
            } else {
                $("#result .shop .main .shopTextBox").removeClass("end").addClass("alt");
            }
        }, 500);
    }
}

function diyAlert(_html, callback){
    $("body").append('<div class="diyAlertBg absolute" style=height:'+$(document).height()+'px></div><div class="diyAlaertText fixed" style=top:'+($(window).height()/2-35)+'px><div class="htmlAlert">'+_html+'</div><a href="javascript:;" class="block diyAlertClose">好</a></div>');
    diyAlertClose(callback);
}   
function diyAlertClose(callback){
    $(".diyAlertClose").on("click",function(){
        $(".diyAlertBg, .diyAlaertText").remove();
        if(typeof callback == 'function') {
            callback();
        }
    });
}

function bindEvents() {
    initRank();

    $("#thumb .startBtn").on("click", function() {
        //if(server_time > 1435248000) {
        //    diyAlert("活动已结束");
        //} else {
            $("#thumb").hide();
            $("#game").removeClass("alt");
            //hitSound.stop();
            trackTag("2015营养水消消乐");
        //}
        
    });

    $("#game .pop .introBox .knowBtn").on("click", function() {
        $("#game .pop").hide().find(".introBox").hide();
        Game.start();
    });

    $("#thumb .pop .ruleBox .knowBtn, #thumb .pop .ruleBox .closeBtn").on("click", function() {
        $("#thumb .pop").hide().find(".ruleBox").hide();
        $("#thumb .thumbImg").addClass("act");
    });

    $("#thumb .helpBtn").on("click", function() {
        $("#thumb .thumbImg").removeClass("act");
        $("#thumb .pop").show().find(".ruleBox").fadeIn();
    });

    $("#result .showOffBtn").on("click", function() {
        $("#result .pop").show().find(".shareBox").fadeIn();
    });

    $("#result .pop").on("click", function() {
        $("#result .pop").hide().find(".shareBox").hide();
    });

    $("#result .rankBtn").on("click", function() {
        trackTag("消消乐排行");
        $("#result").hide();
        $("#rank").show();
        $("#rank .rankListBox .rankList").html('');
        loadRank(1);
    });

    $("#rank .backBtn").on("click", function() {
        $("#rank").hide();
        $("#result").show();
    });

    $("#result .replayBtn").on("click", function() {
        trackTag("游戏用户");
        diyLoading.create();
        Game.restart();
        $("#result").hide();
        $("#game").removeClass("alt");
    });

    $("#result .shopBtn").on("click", function() {
        trackTag("消消乐跳转秒杀");
    });
}

function initSound() {
    hitSound = new buzz.sound( "sound/1", {
        formats: ["mp3", "aac"],
        loop: false
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

function trackTag(tags) {
    $.getJSON(webPath + "tag/index/mark?jsonpcallback=?", {identifyId:openid, tags:tags}, function(data) {});
}