var Loading = require("../components/loading.js");
var MsgBox = require("../components/msgbox.js");
var weixin = require("../libs/weixin.js");
import res from '../fla/rescc';
import md5 from 'js-md5';
import buzz from "../libs/buzz.min"; 

var shareObj = {
    title: "为乐高英雄助力，送丰厚大奖啦！", // 分享标题
    desc: '每天助力乐高英雄，天天赠送“乐高颗粒”，月末还能抽大奖哦～',
    link: serverPath + "lego20170726",
    imgUrl: serverPath + "html/compaign/lego20170726/images/share.jpg",
};

// weixin.init().done(() => {
//     weixin.share(shareObj, shareObj);
// });
if(isShop) {
    $(".pop.result .resultPop .proccess .version").text('线下');
} else {
    $(".pop.result .resultPop .proccess .version").text('线上');
}

$.ajaxSetup({
    data: { type: isShop? 1 : 0}
});

var stage = res.stage,
    flashObj = {
        bottomLayer: {name: "empty"},
        topLayer: {name: "empty"},
        middleLayer: {
            index: {name: "index"},
            choose: {name: "choose"},
            game: {name: "game"}
        },
        firstPage: 'index',
        firstload: ['index'],
        preload: ['choose', 'game'],
        preloadNum: 2, 
    },
    maxScore = 10000,
    currentScore = 0,
    giftIDs = ['298', '299', '300', '301', '277', '302', '303', '304', '305'],
    winCode = '',
    leftCircle = $(".radar .progress .left .circleBox"),
    rightCircle = $(".radar .progress .right .circleBox"),
    finder,
    autoFail = null,
    findNote = $(".pop.find .findPop .note"),
    bgm = new buzz.sound( "sounds/bgm", {
        formats: ["mp3"],
        loop: true,
        autoplay: true
    }),
    beep = new buzz.sound( "sounds/beep", {
        formats: ["mp3"],
        loop: false,
        autoplay: false
    });

bgm.play();

var peekHandler = function(res) {
    if(!res.beacons.length) return;
    if(!finder.targetMD5.length) {
        for(let i = 0; i < res.beacons.length; i++) {
            if(!~finder.excludeIBeacons.indexOf(res.beacons[i].uuid + res.beacons[i].major + res.beacons[i].minor)) {
                finder.getQuests(res.beacons[i]).done(() => {
                    $(".pop").hide().siblings(".pop.find").fadeIn();
                    finder.search();
                    bgm.stop();
                });
                break;
            }
        }
    }
};
var onSearchHandler = function(res) {
    if(!res.beacons.length) return;
    if(finder.targetMD5.length) {
        let hit = false, target = finder.targetMD5[finder.completedCount % finder.taskIndexs.length];
        for(let i = 0; i < res.beacons.length; i++) {
            let hash = md5(res.beacons[i].uuid + res.beacons[i].major + res.beacons[i].minor);
            let index = target.indexOf(hash);
            if(~index) {
                finder.ibeacon = res.beacons[i];
                hit = true;
                break;
            }
        }
        if(!hit) {
            finder.ibeacon = null;
            finder.getIntervalTime = false;
            return;
        }
        finder.receivedTime = new Date();
        let data = {
            distance: finder.ibeacon.accuracy,
            proximity: finder.ibeacon.proximity,
            time: +new Date(),
            trust: null,
        };
        finder.ibeaconData.push(data);
        finder.sortData();

        if(finder.ibeacon.accuracy > 0 && !finder.beepTimer) {
            finder.initSounds();
        }

        if(finder.ibeacon.accuracy < 0) {
            finder.getIntervalTime = false;
        } else if(finder.ibeacon.accuracy > 50) {
            finder.getIntervalTime = 1500;
        } else {
            let period = 100 + (finder.ibeacon.accuracy - 2) * 1900 / 13;
            if(period < 100) {
                finder.getIntervalTime = 100;
            } else {
                finder.getIntervalTime = period;
            }
        }
    }
};

bindEvents();
//getGameState();
initAnimation();

class Beacon {
    constructor(beep, taskIndexs) {
        this.ibeacon = null;
        this.startTimer = null;
        this.beep = beep;
        this.beepTimer = null;
        this.receivedTime = null;
        this.ibeaconData = [];
        this.receiveInterval = 0;
        this.computTimer = null;
        this.getIntervalTime = null;
        this.targetMD5 = [];
        this.target = null;
        if(taskIndexs && taskIndexs.length) {
            this.taskIndexs = taskIndexs;
        } else {
            this.taskIndexs = [];
        }
        this.completedCount = 0;
        this.autosearch = null;
        this.excludeIBeacons = [];
        this.peekHandler = null;
        this.isSearching = false;
    }

    init() {
        clearInterval(this.autosearch);
        setTimeout(() => {
            this.startTimer = setInterval(() => {
                weixin.stopSearchBeacons(() => {
                    if(this.startTimer) {
                        clearInterval(this.startTimer);
                    }
                    weixin.initBeaconListener();
                    this.peek();
                    weixin.startSearchBeacons((res) => {
                        switch(res.errMsg) {
                            case 'startSearchBeacons:bluetooth power off': 
                                $(document).trigger("IBEACON_INIT_FAILED");
                                break;
                            case 'startSearchBeacons:location service disable':
                                $(document).trigger("IBEACON_INIT_FAILED");
                                break;
                            case 'startSearchBeacons:system unsupported':
                                $(document).trigger("IBEACON_UNSPPORTED");
                                break;
                            case 'startSearchBeacons:ok':
                                this.getReceiveInterval();
                                break;
                            case 'startSearchBeacons:already started':
                                this.getReceiveInterval();
                                break;
                            default: alert(res.errMsg);
                        }
                    });
                });
            }, 2000);
        }, 500);
        autoFail = setTimeout(function() {
            MsgBox.alert('启动失败！请确保已打开蓝牙和GPS，前往门店重试');
        }, 30000);
    }

    getReceiveInterval() {
        this.computTimer = setInterval(() => {
            if(!this.isSearching) return;
            this.receiveInterval = new Date() - this.receivedTime;
            this.progress();
        }, 100);
    }

    getQuests(beacon) {
        return $.getJSON(serverPath + 'lego20170726/api/offline/ibeacon-list?callback=?', {
            UUID: beacon.uuid,
            major: beacon.major,
            minor: beacon.minor
        }).done((res) => {
            if(res.success && !this.targetMD5.length) {
                for(let i = 0; i < res.result.list.length; i++) {
                    if(this.taskIndexs && this.taskIndexs.length) {
                        let index = this.taskIndexs.indexOf(res.result.list[i].group_id);
                        if(~index) {
                            if(!this.targetMD5[index]) {
                                this.targetMD5[index] = [];
                            }
                            this.targetMD5[index].push(res.result.list[i].device);
                        }
                    } else {
                        this.targetMD5.push(res.result.list[i].device);
                    }
                }
                if(!this.taskIndexs || !this.taskIndexs.length) {
                    for(let i = 0; i < res.result.list.length; i++) {
                        this.taskIndexs[i] = res.result.list[i].group_id;
                    }
                }
                if(res.result.progress && res.result.progress.group_id) {
                    let index = this.taskIndexs.indexOf(res.result.progress.group_id);
                    if(~index) {
                        this.completedCount = (index + 1) % this.taskIndexs.length;
                    } else {
                        this.completedCount = 0;
                    }
                }
                weixin.removeBeaconListener(this.peekHandler);
                $(".pop.run").hide();
                clearTimeout(autoFail);
            } else {
                this.excludeIBeacons.push(beacon.uuid + beacon.major + beacon.minor);
            }
        });
    }

    initPeekHandler(callback) {
        this.peekHandler = callback;
    }

    initSearchHandler(callback) {
        this.onSearchHandler = callback;
    }

    peek() {
        weixin.addBeaconListener(this.peekHandler);
    }

    search() {
        $(document).trigger("FLASH_IBEACON", {accuracy: -1, percentNum: 0, timestamp: new Date()});
        this.isSearching = true;
        setTimeout(() => {
            weixin.addBeaconListener(this.onSearchHandler);
        }, 1000);
    }

    stopSearch() {
        this.isSearching = false;
        this.ibeacon = null;
        this.ibeaconData = [];
        weixin.removeBeaconListener(this.onSearchHandler);
    }

    initSounds() {
        if(!!this.getIntervalTime && this.getIntervalTime != null && this.ibeacon != null && this.ibeacon.accuracy > 0) {
            if(this.isSearching) {
                this.beep.play();
            }
            this.beepTimer = setTimeout(() => {
                this.initSounds();
            }, this.getIntervalTime);
        } else {
            clearTimeout(this.beepTimer);
            this.beepTimer = false;
        }
    }

    sortData() {
        for(let i = 0; i < this.ibeaconData.length; i++) {
            if(this.ibeaconData[i].trust != null) {
                continue;
            } else if(this.ibeaconData[i].distance == -1) {
                this.ibeaconData[i].trust = 0;
            } else {
                this.ibeaconData[i].trust = 1;
            }
        }
    }
    
    getAverageBeforeTime(time, count) {
        let result = null, datas = [];
        for(let i = this.ibeaconData.length-1; i >= 0; i--) {
            if(datas.length >= count) {
                break;
            } else if(this.ibeaconData[i].time < time && this.ibeaconData[i].trust != 0) {
                datas.push(this.ibeaconData[i]);
            }
        }
        if(datas.length) {
            let distanceSum = 0, timeSum = 0;
            for(let i = 0; i < datas.length; i++) {
                distanceSum += Number(datas[i].distance);
                timeSum += datas[i].time;
            }
            result = {
                distance:  distanceSum / datas.length,
                time: timeSum / datas.length
            };
        }
        return result;
    }

    getAverageByProperty(datas, property) {
        if(datas != null && datas.length) {
            let sum = 0;
            for(let i = 0; i < datas.length; i++) {
                sum += Number(datas[i][property]);
            }
            return sum / datas.length;
        } else {
            return null;
        }
    }

    getDataByTime(near, far) {
        let result = [];
        if(this.ibeaconData.length < 5) return result;
        let now = +new Date();
        for(let i = this.ibeaconData.length-1; i >= 0; i--) {
            if(now - this.ibeaconData[i].time > far) {
                break;
            } else if(now - this.ibeaconData[i].time >= near && this.ibeaconData[i].trust != 0) {
                result.push(this.ibeaconData[i]);
            }
        }
        return result;
    }

    progress() {
        let percentNum = 0;
        if(this.ibeacon != null) {
            if(this.ibeacon.accuracy <= 10 && this.ibeacon.accuracy >= 0) {
                percentNum = 100;
            } else if(this.ibeacon.accuracy >= 40 || this.ibeacon.accuracy < 0) {
                percentNum = 0;
            } else {
                percentNum = (400 - this.ibeacon.accuracy * 10) / 3;
            }
            $(document).trigger("FLASH_IBEACON", {accuracy: this.ibeacon.accuracy, percentNum: percentNum, timestamp: new Date()});
        }
        return percentNum;
    }
};

function initAnimation() {
    Loading.show();
    res.loadInit(flashObj).done(() => {
        Loading.hide();
    });
}

function bindEvents() {
    $(".pop.result .shareBtn").on("click", function() {
        $(".pop").hide();
        $(".pop.share").fadeIn();
    });

    $(".pop.share .close").on("click", function() {
        $(".pop.result").fadeIn();
    });

    $("#shopIndex .lastBtn").on("click", function() {
        window.location.href = 'http://jdyevent.intonead.com/lego20170712/';
    });

    $(document).on("OPEN_IBEACON", function() {
        $(".pop.bluetooth").fadeIn();
    });

    $(".pop.bluetooth .bluetoothPop .closeBtn, .pop.bluetooth .bluetoothPop .close").on("click", function() {
        $(".pop.run").fadeIn();
        finder = new Beacon(beep);
        finder.initPeekHandler(peekHandler);
        finder.initSearchHandler(onSearchHandler);
        finder.init();
    });

    $(".pop .close, .pop .closeBtn").on("click", function() {
        $(this).parent().parent().hide();
    });

    $(document).on("OPEN_PRIZE", function() {
        openPrize();
    });

    $(".openPrize, .prizeBtn").on("click", function() {
        openPrize();
    });

    $(document).on("OPEN_CHOOSE", function() {
        if(currentScore >= maxScore) {
            MsgBox.alert('此轮游戏已结束，敬请期待新一轮的开始', function() {
                res.goto('choose');
            });
        } else {
            res.goto('choose');
        }
    });

    $(document).on("SUBMIT_SCORE", function(e, parm) {
        submitScore(parm.score, parm.combo);
    });

    $(document).on("OPEN_RULE", function() {
        $(".pop.rule").fadeIn();
    });

    $(".ruleBtn").on("click", function() {
        $(".pop.rule").fadeIn();
    });

    //$("#result .lotteryBtn").on("click", lottery);
    
    $(".pop.result .lotteryBtn").on("click", lottery);

    $(".siteBtn, .pop.submitShop .submitShopPop .close, .pop.submitExpress .submitExpressPop .close, .pop.blocks .close, .pop.finish .close").on("click", function() {
        window.location.href = serverPath + "brands/lego";
    });
    $(".againBtn").on("click",function(){
        window.location.reload();
    })

    $(".pop.prize .prizePop .prizeList li:nth-child(1) .btn").on("click", function() {
        window.location.href = 'http://r.intonead.com/card/coupons';
    });

    $("#lottery .prize .getPrize").on("click", function() {
        $(".pop").hide().siblings(".pop.express").fadeIn();
    });

    $("#lottery .prize .getShopPrize").on("click", function() {
        $(".pop").hide().siblings(".pop.shop").fadeIn();
    });

    $(".pop.express .expressPop .submitBtn").on("click", submitExpress);

    $(".pop.shop .shopPop .submitBtn").on("click", submitShop);

    $(".pop.prize .prizePop .prizeList li .btn").on("click", function() {
        let giftID = $(this).parent().data('id');
        if(!$(this).parent().hasClass('got') && $(this).parent().hasClass('on')) {
            if(~giftID.indexOf('277')) {
                window.location.href = 'http://r.intonead.com/card/coupons';
            } else {
                winCode = $(this).parent().data('code')
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

    $(document).on("FLASH_IBEACON", function(e, parm) {
        //进度条
        let percentNum = parm.percentNum,
            distance = parm.accuracy,
            leftDeg = -180,
            rightDeg = -180;
        if(percentNum > 50) {
            rightDeg = 0;
            leftDeg = (percentNum - 50) * 3.6 - 180;
            leftDeg = (~~(leftDeg / 15)) * 15;
            leftDeg = leftDeg < -180? -180 : leftDeg;
        } else {
            leftDeg = -180;
            rightDeg = percentNum * 1.8 - 180;
            rightDeg = (~~(rightDeg / 15)) * 15;
            rightDeg = rightDeg < -180? -180 : rightDeg;
        }
        rightCircle.css('transform', 'rotate(' + rightDeg + 'deg)');
        leftCircle.css('transform', 'rotate(' + leftDeg + 'deg)');
        //距离提示
        let averageDistance = finder.getAverageBeforeTime(+new Date(), 2) != null? finder.getAverageBeforeTime(+new Date(), 2).distance : null;
        let lastAverageDistance = finder.getAverageBeforeTime(+new Date() - 2000, 2) != null? finder.getAverageBeforeTime(+new Date() - 2000, 2).distance : averageDistance;
        if(finder.receivedTime != null) {
            let recentDistance = finder.getAverageByProperty(finder.getDataByTime(0, 3500), 'distance');
            if(!finder.ibeacon || finder.receiveInterval > 3000 || (finder.ibeacon && distance == -1)) {
                findNote.text('再仔细找找，还没有收到信号');
            } else if(finder.ibeacon && distance > 0) {
                let tip = '';
                if(distance < 10) {
                    //gotcha
                    tip = '找到啦！';
                    foundIbeacon(finder.ibeacon);
                    finder.stopSearch();
                } else if(distance < 15 || averageDistance < 15) {
                    //close
                    tip = '要记得放慢脚步，目标可能就在附近哦';
                } else if(distance < 20 || averageDistance < 20) {
                    //near
                    tip = '马上要找到啦，调整步伐，一步一步来！';
                } else if(distance < 25 || averageDistance < 25) {
                    //medium far
                    tip = '离目标又近了一步，加油';
                } else if(distance < 40 || averageDistance < 40) {
                    //got signal
                    tip = '收到信号啦，放慢脚步细心寻找哦';
                }
                if(averageDistance - lastAverageDistance >= 1) {
                    //getting farther
                    tip += '你正在慢慢变远哦！调整路线吧';
                }
                findNote.text(tip);
            }
        } else {
            //no ibeacons
            findNote.text('搜索信号...');
        }
    });

    bindAddress();
}

function foundIbeacon(beacon) {
    MsgBox.alert('你已经来到乐高专柜 点击进入游戏', function() {
        $(".pop.find").fadeOut();
        $(document).trigger("OPEN_CHOOSE");
        bgm.play();
    });
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

function openPrize() {
    window.location.href=serverPath + 'lego20170726/prize';
    // Loading.show();
    // $.getJSON(serverPath + 'lego20170726/api/prize-list?callback=?').done((data) => {
    //     Loading.hide();
    //     console.log(data);
    //     if(data.success) {
    //         let list = data.result.list,
    //             prizes = $(".pop.prize .prizeList li");
    //         for(let i = 0; i < list.length; i++) {
    //             let giftID = list[i].luckydraw_gift_id,
    //                 code = list[i].win_code;
    //             prizes.filter('[data-id*="' + giftID + '"]').addClass('on').data('code', code);
    //             if(giftID == "298" || giftID == "302") {
    //                 if(list[i].info) {
    //                     prizes.filter('[data-id*="' + giftID + '"]').addClass('get');
    //                 }
    //                 if(list[i].virtual_gift_code_shop) {
    //                     prizes.filter('[data-id*="' + giftID + '"]').addClass('got');
    //                 }
    //             } else {
    //                 if(list[i].info) {
    //                     prizes.filter('[data-id*="' + giftID + '"]').addClass('got');
    //                 }
    //             }
    //         }
    //         $(".pop.prize").fadeIn();
    //     } else {
    //         MsgBox.alert(data.msg);
    //     }
    // });
}

function lottery() {
    Loading.show();
    $.getJSON(serverPath + 'lego20170726/api/lottery?callback=?').done((data) => {
        Loading.hide();
        console.log(data);
        if(data.success) {
            $(".pop, #index").hide();
            $("#lottery").fadeIn();
            let giftID = data.result.giftID,
                score = data.result.score;
            if(~giftIDs.indexOf(giftID)) {
                $("#lottery .prize").hide().filter('[data-id*="' + giftID + '"]').fadeIn().find(".score").text("并获得的"+score+"颗乐高颗粒热度");
            } else {
                $(".pop.blocks .blockNum").text(score);
                $(".pop.blocks").fadeIn();
            }
            winCode = data.result.winCode;
        } else {
            $(".pop").hide();
            $(".pop.blocks .blockNum").text(0);
            $(".pop.blocks").fadeIn();
        }
    });
}

function submitScore(score, combo) {
    Loading.show();
    $.getJSON(serverPath + 'lego20170726/api/submit-score?callback=?', {
        score: score,
        hit: combo
    }).done((data) => {
        Loading.hide();
        console.log(data);
        if(data.success) {
            maxScore = Number(data.result.taskMaxScore);
            currentScore = Number(data.result.taskScore);
            let exceed = data.result.per,
                shareID = data.result.id;
            if(currentScore >= maxScore) {
                $(".pop.finish").fadeIn();
            } else {
                let percent = ~~((currentScore / maxScore) * 100);
                $(".pop.result .resultPop .score").text(score);
                $(".pop.result .resultPop .combo").text(combo);
                $(".pop.result .resultPop .percent").text(exceed);
                $(".pop.result .resultPop .proccess .num").text(percent);
                $(".pop.result").fadeIn();
                //$("#result .score").text(data.result.score).siblings(".currentScore").text(currentScore).siblings(".leftScore").text(100 - percent).siblings(".proccessBox").find(".proccess").css('width', percent + '%');
                let shareObj = {
                    title: "为乐高英雄助力，送丰厚大奖啦！", // 分享标题
                    desc: '每天助力乐高英雄，天天赠送“乐高颗粒”，月末还能抽大奖哦～',
                    link: serverPath + "lego20170726/share?id=" + shareID,
                    imgUrl: serverPath + "html/compaign/lego20170726/images/share.jpg",
                };
                weixin.changeShare(shareObj, shareObj);
            }
        } else {
            $(".pop.finish").fadeIn();
            //MsgBox.alert(data.msg);
        }
        //$("#index").hide().siblings("#result").addClass('level' + level).fadeIn();
    });
}

function getGameState() {
    $.getJSON(serverPath + 'lego20170726/api/task?callback=?').done((data) => {
        console.log(data);
        if(data.success) {
            currentScore = Number(data.result.task.score);
            maxScore = Number(data.result.task.max_score);
            let joinNum = data.result.task.count;
            let percent = ~~(currentScore / maxScore * 100);
            if(data.result.task.gameCount) {
                MsgBox.alert('您今日助力已完成 您可以继续体验游戏');
            }
            //$(".pop.find .findPop .note").text('英雄当前助力值为' + percent + '％，已经有' + joinNum + '位小伙伴参与了助力，加油吧，少年！');
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