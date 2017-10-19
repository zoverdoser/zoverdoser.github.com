var Loading = require("../components/loading.js");
var MsgBox = require("../components/msgbox.js");
import res from '../fla/rescc';

var _self, libs;

var Game = {},
    Grid = {},
    Block = {},
    roundsChance = 10,
    roundTime = 5 * 1000,
    leftTime ,
    gameTimer = null,
    gameEnd = false,
    gameScore = 0,
    maxCombo = 0;

Grid = {
	touchStartBlock: false,
    touchStartLocation: {},
    gameStart: false,
    dragBlock: null,
    dragShadow: null,
    dragCopy: null,
    switched: false,
    swapArray: [],
    swapCount: 0,
    isPressUped: true,
    combo: 0,
    offsetX: 52,
    offsetY: 356,
    xLength: 6,
    yLength: 6,
    blocks: [],
    shape: null,
    dropCount: 0,
    blankArray: [0,0,0,0,0,0],
    explodeCount: 0,
    matchBlocks: [],
    gameTimeStamp: false,
    container: new createjs.Container(),
    topEffectContainer: new createjs.Container(),
    middleEffectContainer: new createjs.Container(),
    swapTimer: null,
    explodeNum: 0,
    explodeTimer: null,

    init(callback) {
        Grid.touchStartBlock = false;
        Grid.touchStartLocation = {};
        Grid.gameStart = false;
        gameScore = 0;
        Grid.blocks = [];
        Grid.matchBlocks = [];
        Grid.container.removeAllChildren();
        Grid.topEffectContainer.removeAllChildren();
        Grid.loadBlocks();
        Grid.bindTouch();

        Grid.topEffectContainer.mouseEnabled = Grid.middleEffectContainer.mouseEnabled = false;
        Grid.container.x = Grid.topEffectContainer.x = Grid.middleEffectContainer.x = Grid.offsetX;
        Grid.container.y = Grid.topEffectContainer.y = Grid.middleEffectContainer.y = Grid.offsetY;

        if(typeof callback == 'function') {
            callback();
        }
    },
    swapCheck() {
        if(Grid.swapArray.length) {
            let swapObj = Grid.swapArray[0];
            let result = Grid.swapBlock(swapObj.lastPosX, swapObj.lastPosY, swapObj.posX, swapObj.posY);
            if(result) {
                Grid.swapArray.shift();
            }
        }
        if(!Grid.gameStart && !Grid.swapArray.length) {
            clearInterval(Grid.swapTimer);
            Grid.swapTimer = false;
        }
    },
    swapBlock(lastPosX, lastPosY, posX, posY) {
        return Grid.blocks[lastPosY][lastPosX].swap(Grid.blocks[posY][posX]);
    },
    addMask() {
        var graphics = new createjs.Graphics().beginFill("#ff0000").drawRect(0, 0, 630, 630);
        Grid.shape = new createjs.Shape(graphics);
        Grid.shape.alpha = 0.01;
        Grid.shape.x = -45;
        Grid.shape.y = -45;
        Grid.container.addChild(Grid.shape);
    },
    loadBlocks() {
        while(true) {
            Grid.container.removeAllChildren();
            Grid.addMask();
            Grid.blocks = [];
            for(var i = 0; i < Grid.yLength; i++) {
                Grid.blocks[i] = [];
                for(var j = 0; j < Grid.xLength; j++) {
                    Grid.blocks[i][j] = new Block(j, i, 1 + ~~(Math.random() * 6));
                }
            }
            Grid.matchBlocks = Grid.checkMatch();
            if(Grid.matchBlocks != 0) {
                continue;
            }
            break;
        }
    },
    checkMatch() {
        var targetBlocks = [];
        for(let i = 0; i < Grid.yLength; i++) {
            if(!Grid.blocks[i][0]) continue;
            let match = [[i, 0, Grid.blocks[i][0].type]];
            for(let j = 1; j < Grid.xLength; j++) {
                if(!Grid.blocks[i][j] || !Grid.blocks[i][j-1]) break;
                if(!!Grid.blocks[i][j] && !!Grid.blocks[i][j-1] && Grid.blocks[i][j].type !== undefined && Grid.blocks[i][j].type == Grid.blocks[i][j-1].type) {
                    match.push([i, j, Grid.blocks[i][j].type]);
                    if(j == Grid.xLength - 1) {
                        if(match.length > 2) {
                            targetBlocks.push(match);
                        }
                    }
                } else {
                    if(match.length > 2) {
                        targetBlocks.push(match);
                    }
                    if(j < Grid.xLength - 2) {
                        match = [[i, j, Grid.blocks[i][j].type]];
                    } else {
                        break;
                    }
                }
            }
        }

        for(let i = 0; i < Grid.xLength; i++) {
            if(!Grid.blocks[0][i]) continue;
            let match = [[0, i, Grid.blocks[0][i].type]];
            for(let j = 1; j < Grid.yLength; j++) {
                if(!Grid.blocks[j][i] || !Grid.blocks[j-1][i]) break;
                if(!!Grid.blocks[j][i] && !!Grid.blocks[j-1][i] && Grid.blocks[j][i].type !== undefined && Grid.blocks[j][i].type == Grid.blocks[j-1][i].type) {
                    match.push([j, i, Grid.blocks[j][i].type]);
                    if(j == Grid.yLength-1) {
                        if(match.length > 2) {
                            targetBlocks.push(match);
                        }
                    }
                } else {
                    if(match.length > 2) {
                        targetBlocks.push(match);
                    }
                    if(j < Grid.yLength - 2) {
                        match = [[j, i, Grid.blocks[j][i].type]];
                    } else {
                        break;
                    }
                }
            }
        }

        do {
            var b = false;
            for(var i = 0; i < targetBlocks.length; i++) {
                b = false;
                for(var j = 0; j < targetBlocks[i].length; j++) {
                    if(Grid.findGroup(targetBlocks, targetBlocks[i][j], i, j)) {
                        b = true;
                    }
                }
            }
        } while(b)

        for(let i = 0; i < targetBlocks.length; i++) {
            targetBlocks[i] = unique(targetBlocks[i]);
        }
        return targetBlocks;
    },
    findGroup(targetBlocks, item, h, v) {
        var b = false;
        for(var i=0;i<targetBlocks.length;i++) {
            for(var j=0;j<targetBlocks[i].length;j++) {
                if(item[0]==targetBlocks[i][j][0]&&item[1]==targetBlocks[i][j][1]&&h!=i&&item[2]==targetBlocks[i][j][2]){
                    targetBlocks[h]=targetBlocks[h].concat(targetBlocks[i]);
                    targetBlocks.splice(i,1);
                    return true;
                }
            }
        }
        return false;
    },
    possibleMatch() {
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
    matchPattern(block, necessaryOffset, possibleOffsets) {
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
    triggerExplodes() {
        for(let index in Grid.matchBlocks) {
            Grid.explodeTimer = true;
            setTimeout(() => {
                Grid.combo++;
                maxCombo = Math.max(maxCombo, Grid.combo);
                updateCombo();
                for(let pos in Grid.matchBlocks[index]) {
                    let posX = Grid.matchBlocks[index][pos][1],
                        posY = Grid.matchBlocks[index][pos][0];
                    if(Grid.blocks[posY][posX]) {
                        Grid.blocks[posY][posX].explode(function() {
                            let testMatch = Grid.checkMatch();
                            if(!testMatch.length) {
                                Grid.triggerDrop();
                            } else {
                                Grid.matchBlocks = testMatch;
                                Grid.triggerExplodes();
                            }
                        });
                    }
                }
            }, index * 400);
        }
    },
    triggerDrop() {
        var hasDrop = false;
        for(var i = 0; i < Grid.xLength; i++) {
            var dropDistance = 0;
            for(var j = Grid.yLength - 1; j >= 0; j--) {
                if(Grid.blocks[j][i]) {
                    if(dropDistance) {
                        hasDrop = true;
                        Grid.blocks[j][i].drop(j + dropDistance, () => {
                            for(var i = 0; i < Grid.xLength; i++) {
                                for(var j = 0; j < Grid.blankArray[i]; j++) {
                                    Grid.blocks[j][i] = false;
                                }
                            }
                            Grid.matchBlocks = Grid.checkMatch();
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
        return hasDrop;
    },
    fillBlank() {
        for(var i = 0; i < Grid.xLength; i++) {
            for(var j = 0; j < Grid.yLength; j++) {
                if(!Grid.blocks[j][i]) {
                    Grid.blocks[j][i] = new Block(i, j, 1 + ~~(Math.random() * 6));
                }
            }
        }
        Grid.matchBlocks = Grid.checkMatch();
        if(Grid.matchBlocks.length) {
            Grid.triggerExplodes();
        } else {
            gameScore += ~~(Grid.explodeNum * 3 * (1 + Grid.explodeCount * 0.1));
            if(Grid.combo >= 5) {
                _self.effectBox.visible = true;
                createjs.Tween.get(_self.effectBox).to({alpha: 1}, 500).wait(1000).to({alpha: 0}, 500).call(() => {
                    _self.effectBox.visible = false;
                });
            }
            updateScore();
            if(Grid.swapArray.length == 0 && roundsChance <= 0 && Grid.swapCount == 0 && Grid.dropCount == 0 && Grid.explodeCount == 0) {
                setTimeout(() => {
                    console.log(4)
                    gameEndHandler();
                }, 1000);
            }
        }
    },
    bindTouch() {
        let offset = {};
        Grid.shape.on("mousedown", function(e) {
            if(roundsChance <= 0 || Grid.explodeCount) {
                return;
            }
            if(Grid.checkTouch()) {
                return;
            }
            if(!Grid.swapArray.length) {
                Grid.isPressUped = false;
            } else {
                return;
            }
            startGameTime();
            Grid.combo = 0;
            Grid.explodeNum = 0;
            updateCombo();
            var posX = ~~((e.stageX - Grid.offsetX) / Block.width);
            var posY = ~~((e.stageY - Grid.offsetY) / Block.width);
            posX = (posX == Grid.xLength)? Grid.xLength - 1 : posX;
            posY = (posY == Grid.yLength)? Grid.yLength - 1 : posY;
            Grid.touchStartLocation.x = e.stageX - Grid.offsetX;
            Grid.touchStartLocation.y = e.stageY - Grid.offsetY;
            Grid.touchStartBlock = [posY, posX];
            Grid.dragBlock = Grid.blocks[Grid.touchStartBlock[0]][Grid.touchStartBlock[1]];
            Grid.dragBlock.body.alpha = 0.5;
            Grid.dragCopy = new Block(posX, posY, Grid.dragBlock.type);
            Grid.dragCopy.body.x = Grid.dragBlock.body.x;
            Grid.dragCopy.body.y = Grid.dragBlock.body.y;
            offset.x = e.stageX - Grid.offsetX - Grid.dragBlock.body.x;
            offset.y = e.stageY - Grid.offsetY - Grid.dragBlock.body.y;
            Grid.topEffectContainer.addChild(Grid.dragCopy.body);
        });
        Grid.shape.on("pressmove", function(e) {
            if(!Grid.gameStart || Grid.isPressUped || !Grid.dragBlock) {
                return;
            }
            var posX = ~~((e.stageX - Grid.offsetX) / Block.width);
            var posY = ~~((e.stageY - Grid.offsetY) / Block.width);
            posX = (posX == Grid.xLength)? Grid.xLength - 1 : posX;
            posY = (posY == Grid.yLength)? Grid.yLength - 1 : posY;
            var lastPosX = Grid.touchStartBlock[1], 
                lastPosY = Grid.touchStartBlock[0];
            var canSwap = false;
            Grid.dragCopy.body.x = e.stageX - Grid.offsetX - offset.x;
            Grid.dragCopy.body.y = e.stageY - Grid.offsetY - offset.y;
            if(
                ( Math.abs(posX - lastPosX) == 1 && posY == lastPosY ) || 
                ( Math.abs(posY - lastPosY) == 1 && posX == lastPosX ) ||
                ( Math.abs(posX - lastPosX) == 1 && Math.abs(posY - lastPosY) == 1)
            ) {
                canSwap = true;
            }
            Grid.touchStartLocation.x = e.stageX - Grid.offsetX - Grid.offsetX;
            Grid.touchStartLocation.y = e.stageY - Grid.offsetY - Grid.offsetY;
            if(canSwap && posX >= 0 && posX < Grid.xLength && posY >= 0 && posY < Grid.yLength) {
                Grid.switched = true;
                Grid.blocks[posY][posX].body.alpha = 0;
                Grid.swapArray.push({
                    lastPosX: lastPosX,
                    lastPosY: lastPosY,
                    posX: posX,
                    posY: posY
                });
                Grid.swapCount++;
                lastPosX = posX;
                lastPosY = posY;
                Grid.touchStartBlock = [posY, posX];
            } else {
                Grid.switched = false;
            }
        });
        Grid.shape.on("pressup", Grid.pressupHandler);
    },
    pressupHandler() {
        if(Grid.isPressUped) return;
        Grid.isPressUped = true;
        Grid.topEffectContainer.removeAllChildren();
        if(Grid.dragBlock) {
            Grid.dragBlock.body.alpha = 1;
        }
        if(!Grid.gameStart) {
            return;
        }
        if(Grid.dragCopy) {
            Grid.dragCopy.body.alpha = 0;
        }
        if(!Grid.switched) {
            Grid.middleEffectContainer.removeAllChildren();
        }
        createjs.Tween.get(Grid.dragBlock.body).to({alpha: 1}, 50);
        stopGameTime();
    },
    checkTouch() {
        for(var i = 0; i < Grid.xLength; i++) {
            for(var j = 0; j < Grid.yLength; j++) {
                if(Grid.blocks[j][i] && Grid.blocks[j][i].inAction) {
                    return true;
                }
            }
        }
        return false;
    }
};

Block = function(x, y, type) {
    this.posX = x;
    this.posY = y;
    this.type = type;
    this.body = new libs['Block' + type]();
    //this.body.gotoAndStop(level);
    this.body.regX = this.body.regY = Block.width / 2;
    this.body.x = Block.width / 2 + Block.width * x;
    this.dust =null;
    this.inAction = false;
    this.isShine = false;
    if(y === false) {
        this.body.y = -Block.width / 2;
    } else {
        this.body.y = Block.width / 2 + Block.width * y;
    }
    this.body.posX = x;
    this.body.posY = y;
    Grid.container.addChild(this.body);
};

Block.width = 90;

Block.prototype = {
    drop(dropTo, callback) {
        this.inAction = true;
        Grid.dropCount++;
        createjs.Tween.get(this.body).to({y: Block.width / 2 + Block.width * dropTo}, 200 * (dropTo - this.posY)).call(() => {
            Grid.blocks[dropTo][this.posX] = this;
            this.posY = dropTo;
            Grid.dropCount--;
            this.inAction = false;
            if(typeof callback == "function" && Grid.dropCount == 0) {
                callback();
            }
        });
    },
    slide(posX, posY, callback, speed) {
        if(!speed) {
            speed = 200
        }
        createjs.Tween.get(this.body).to({x: Block.width / 2 + Block.width * posX, y: Block.width / 2 + Block.width * posY}, speed).call(() => {
            if(typeof callback === "function") {
                callback();
            }
        });
    },
    swap(block) {
        if(this.inAction || block.inAction) {
            return false;
        }
        this.inAction = block.inAction = true;
        var first = {
            posX: this.posX,
            posY: this.posY,
            x: this.body.x,
            y: this.body.y
        };
        var second = {
            posX: block.posX,
            posY: block.posY,
            x: block.body.x,
            y: block.body.y
        };
        let secondShadow = new Block(block.posX, block.posY, block.type),
            swapContainer = new createjs.Container(),
            locks = [true, true];

        swapContainer.regX = (this.body.x + block.body.x) / 2;
        swapContainer.regY = (this.body.y + block.body.y) / 2;
        swapContainer.x = swapContainer.regX;
        swapContainer.y = swapContainer.regY;
        Grid.middleEffectContainer.removeAllChildren();
        Grid.middleEffectContainer.addChild(swapContainer);
        secondShadow.body.x = block.body.x;
        secondShadow.body.y = block.body.y;
        swapContainer.addChild(secondShadow.body);
        this.slide(second.posX, second.posY, null, 50);
        createjs.Tween.get(secondShadow.body).to({rotation: -180}, 50);
        createjs.Tween.get(block.body).to({alpha: 1}, 50).call(() => {
            locks[0] = false;
            if(!locks[0] && !locks[1]) {
                this.inAction = block.inAction = false;
            }
        });
        createjs.Tween.get(swapContainer).to({rotation: 180}, 50).call(() => {
            this.body.x = second.x;
            this.body.y = second.y;
            block.body.x = first.x;
            block.body.y = first.y;
            Grid.blocks[second.posY][second.posX] = this;
            this.posX = second.posX;
            this.posY = second.posY;
            Grid.blocks[first.posY][first.posX] = block;
            block.posX = first.posX;
            block.posY = first.posY;
            Grid.middleEffectContainer.removeAllChildren();
            Grid.dragShadow = null;
            locks[1] = false;
            if(!locks[0] && !locks[1]) {
                this.inAction = block.inAction = false;
            }
            Grid.swapCount--;
            if(!Grid.gameStart && !Grid.swapArray.length && !Grid.swapTimer && !Grid.explodeTimer && !Grid.swapCount) {
                Grid.matchBlocks = Grid.checkMatch();
                if(Grid.matchBlocks.length) {
                    Grid.triggerExplodes();
                } else {
                    if(roundsChance <= 0) {
                        setTimeout(() => {
                            gameEndHandler();
                        }, 1000);
                    }
                }
            }
        });
        return true;
    },
    explode(callback) {
        this.inAction = true;
        Grid.explodeCount++;
        Grid.explodeNum++;
        this.body.alpha = 0;
        this.dust = new libs.Dust();
        this.dust.x = Block.width / 2 + Block.width * this.posX;
        this.dust.y = 3 + Block.width / 2 + Block.width *this.posY;
        this.dust.play();
        Grid.container.removeChild(this.body);
        Grid.container.addChild(this.dust);
        setTimeout(() => {
            this.dust.removeAllEventListeners();
            this.body.tickEnabled = false;
            this.dust.tickEnabled = false;
            Grid.blocks[this.posY][this.posX] = null;
            Grid.container.removeChild(this.dust);
            Grid.explodeCount--;
            this.inAction = false;
            if(typeof callback == "function" && !Grid.explodeCount) {
                callback();
            }
        }, 400);
        this.dust.gotoAndPlay(1);
    }
};

function startGameTime() {
    if(roundsChance <= 0) return;
    Grid.swapCount = 0;
    Grid.explodeTimer = false;
    Grid.swapTimer = setInterval(Grid.swapCheck, 50);
    Grid.gameStart = true;
    _self.countDown.gotoAndStop(0);
    leftTime = roundTime;
    Grid.gameTimeStamp = +new Date();
    gameTimer = setInterval(updateGameTime, 200);
}

function updateGameTime() {
    if(!Grid.gameTimeStamp) return;
    let nowTime = +new Date();
    leftTime -= nowTime - Grid.gameTimeStamp;
    Grid.gameTimeStamp = +new Date();
    if(leftTime < 0) {
        leftTime = 0;
        Grid.pressupHandler();
    }
    let frame = ~~((roundTime - leftTime) / roundTime * 100);
    _self.countDown.gotoAndStop(frame);
}

function stopGameTime() {
    Grid.gameStart = false;
    if(!Grid.swapArray.length) {
        clearInterval(Grid.swapTimer);
        Grid.swapTimer = false;
    }
    roundsChance--;
    if(Grid.swapCount == 0) {
        Grid.matchBlocks = Grid.checkMatch();
        if(Grid.matchBlocks.length) {
            Grid.triggerExplodes();
        } else {
            if(roundsChance <= 0) {
                setTimeout(() => {
                    gameEndHandler();
                }, 1000);
            }
        }
    }
    _self.chance.chanceNum.text = roundsChance;
    leftTime = roundTime;
    Grid.gameTimeStamp = false;
    clearInterval(gameTimer);
}

function updateCombo() {
    let c1 = ~~(Grid.combo / 10),
        c0 = Grid.combo % 10;
    let batter = 100 + 10 * Grid.combo;
    let b3 = ~~(batter / 100);
    let b2 = ~~((batter - b3 * 100) / 10),
        b1 = batter % 10;
    if(c1 == 0) {
        _self.combo.c1.alpha = 0;
    } else {
        _self.combo.c1.alpha = 1;
    }
    if(!Grid.combo) {
        _self.combo.alpha = 0;
    } else {
        _self.combo.alpha = 1;
    }

    _self.combo.c1.gotoAndStop(c1);
    _self.combo.c0.gotoAndStop(c0);
    _self.combo.batter.b3.gotoAndStop(b3);
    _self.combo.batter.b2.gotoAndStop(b2);
    _self.combo.batter.b1.gotoAndStop(b1);
}

function updateScore() {
    let d3 = ~~(gameScore / 1000);
    let d2 = ~~((gameScore - d3 * 1000) / 100);
    let d1 = ~~((gameScore - d3 * 1000 - d2 * 100) / 10),
        d0 = gameScore % 10;
    _self.score.d3.gotoAndStop(d3);
    _self.score.d2.gotoAndStop(d2);
    _self.score.d1.gotoAndStop(d1);
    _self.score.d0.gotoAndStop(d0);
    if(roundsChance <= 0 && gameEnd) {
        setTimeout(() => {
            gameEndHandler();
        }, 1000);
    }
}

function construct(display) {
    _self = display;

    _self.addChild(Grid.container);
    _self.addChild(Grid.middleEffectContainer);
    _self.addChild(Grid.topEffectContainer);

    $(document).on("ALTER_LEVEL", function(e, parm) {
        level = parm.level;
        adjustLevel();
        res.goto('game');
        updateCombo();
    });
}

function adjustLevel() {
    _self.effectBox.visible = false;

    _self['demo' + level].alpha = 1;
    _self.bg.addEventListener("tick", alterBg);

    setTimeout(() => {
        _self['demo' + level].gotoAndPlay(1);
    });

    var img = new Image();
    img.onload = function() {
        var bitmap = new createjs.Bitmap(img);
        bitmap.x = 23;
        bitmap.y = 23;
        bitmap.scaleX = bitmap.scaleY = 71 / img.width;
        _self.addChild(bitmap);
    };
    
    _self['demo' + level].close.on("click", function() {
        Loading.show();
        createjs.Tween.get(_self['demo' + level]).to({alpha: 0}, 500).call(() => {
            _self['demo' + level].stop();
            img.src = avatar;
            var text = new createjs.Text(nickname, "25px Arial", "#ffffff");
            text.x = 101;
            text.y = 45;
            _self.addChild(text);
            Grid.init(() => {
                setTimeout(() => {
                    _self.removeChild(_self.effectBox);
                    _self.addChild(_self.effectBox);
                    updateCombo();
                    _self.effectBox.gotoAndStop(level);
                    Loading.hide();
                });
            });
        });
    });
}

function alterBg() {
    _self.bg.gotoAndStop(level);
    _self.bg.removeEventListener("tick", alterBg);
    _self.chance.chanceNum.text = roundsChance;
}

function gameEndHandler() {
    if(gameEnd) return;
    gameEnd = true;
    Grid.gameStart = false;
    $(document).trigger("SUBMIT_SCORE", {score: gameScore, combo: maxCombo});
}

function unique(a) {
    var res = [];
    for (var i = 0, len = a.length; i < len; i++) {
        var item = a[i];
        (res.indexOf(item) === -1) && res.push(item);
    }
    return res;
}

module.exports.construct=construct;
libs = module.exports;