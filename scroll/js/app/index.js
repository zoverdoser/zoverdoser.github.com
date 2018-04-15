define(function(require, exports) {
    var $ = require("jquery");
    var diyLoading = require("libs/diyLoading");
    var diyAlert = require("libs/diyAlert");
    var VerticalSwipe = require('libs/verticalswipe');
    var createjs = require('libs/createjs-2015.05.21.min');
    var loader = require("libs/appLoader");
    var Weixin = require('libs/weixin');

    var verticalSwipe, currentIndex = 0, exportRoot, stage = [], stageCanvas = document.querySelectorAll(".swipe .stageCanvas");
    var popStage, popCanvas = document.querySelector(".pop .stageCanvas"), showPop = false;
    var viewIndex = [0, 1, 2, 3, -1, 4, -1, 5, -1, 6, 7, 8, 9, 10, 11, -1];

    pageSwipe();
    initAnimation();

    Weixin.init().done(function() {
        Weixin.share({
                title: "拼妈绝技招招让你赢在起点！",
                desc: '听说妈妈们都在为宝贝苦练拼妈绝技！拼妈宝典你还没get？快来领取吧！',
                link: window.location.origin + window.location.pathname,
                imgUrl: window.location.origin + "/assets/images/shareImg.jpg"
            }, {
                title: "听说妈妈们都在为宝贝苦练拼妈绝技！拼妈宝典你还没get？快来领取吧！",
                desc: '听说妈妈们都在为宝贝苦练拼妈绝技！拼妈宝典你还没get？快来领取吧！',
                link: window.location.origin + window.location.pathname,
                imgUrl: window.location.origin + "/assets/images/shareImg.jpg"
            },
            function() {
                _hmt.push(['_trackEvent', '美德乐', '分享', '美德乐']);
            }
        );
    });

    function pageSwipe() {
        verticalSwipe = new VerticalSwipe(document.getElementById('container'), {
            continuous: false,
            stopPropagation: false,
            speed: 600,
            callback: function(i) {
                currentIndex = viewIndex[i];
                _hmt.push(['_trackPageview', '/p' + i]);
            },
            overflowScroll: true
        });
    }

    function initAnimation() {
        var canvasLoader = new loader('all', 7);
        canvasLoader.init().then(function(lib) {
            diyLoading.end();
            exportRoot = new lib.all();
            
            for(var i = 0; i < stageCanvas.length; i++) {
                stage[i] = new createjs.Stage(stageCanvas[i]);
                if(i == 0) {
                    stage[i].addChild(exportRoot.instance);
                } else {
                    stage[i].addChild(exportRoot['instance_' + (i)]);
                }
                stage[i].update();
            }
            popStage = new createjs.Stage(popCanvas);
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", tick);
            bindEvents();
        });
    }

    function bindEvents() {
        exportRoot.instance.instance.on("click", function() {
            verticalSwipe.next();
        });

        exportRoot.instance_6.instance.on("click", function() {
            verticalSwipe.next();
        });

        exportRoot.instance_12.instance_1.on("click", function() {
            hideResult();
            verticalSwipe.next();
        });

        exportRoot.instance_13.instance_3.on("click", function() {
            hideResult();
        });

        exportRoot.instance_13.instance_2.on("click", function() {
            hideResult();
            verticalSwipe.slide(1)
        });

        exportRoot.instance_7.instance.on("click", function() {
            showResult(0);
        });

        exportRoot.instance_7.instance_1.on("click", function() {
            showResult(1);
        });

        exportRoot.instance_8.instance_3.on("click", function() {
            showResult(0);
        });

        exportRoot.instance_8.instance_4.on("click", function() {
            showResult(1);
        });

        exportRoot.instance_9.instance_3.on("click", function() {
            showResult(0);
        });

        exportRoot.instance_9.instance_4.on("click", function() {
            showResult(1);
        });

        exportRoot.instance_10.instance_3.on("click", function() {
            showResult(0);
        });

        exportRoot.instance_10.instance_4.on("click", function() {
            verticalSwipe.next();
        });

        exportRoot.instance_11.instance.on("click", function() {
            verticalSwipe.next();
        });

        $("#tkl1").bind("touchstart", function() {
            var doc = document,   
                text = doc.getElementById("tkl1"),  
                range,   
                selection;

            if (window.getSelection) { 
                selection = window.getSelection();          
                range = document.createRange();  
                range.selectNodeContents(text);  
                selection.removeAllRanges();  
                selection.addRange(range);  
          
                makeSelection(0, text.firstChild.textContent.length, 0, text.firstChild);  
            }
        });

        $("#tkl1").bind("touchstart", function() {
            var doc = document,   
                text = doc.getElementById("tkl1"),  
                range,   
                selection;

            if (window.getSelection) { 
                selection = window.getSelection();          
                range = document.createRange();  
                range.selectNodeContents(text);  
                selection.removeAllRanges();  
                selection.addRange(range);  
          
                makeSelection(0, text.firstChild.textContent.length, 0, text.firstChild);  
            }
        });

        $("#tkl2").bind("touchstart", function() {
            var doc = document,   
                text = doc.getElementById("tkl2"),  
                range,   
                selection;

            if (window.getSelection) { 
                selection = window.getSelection();          
                range = document.createRange();  
                range.selectNodeContents(text);  
                selection.removeAllRanges();  
                selection.addRange(range);  
          
                makeSelection(0, text.firstChild.textContent.length, 0, text.firstChild);  
            }
        });

        $("#tkl3").bind("touchstart", function() {
            var doc = document,   
                text = doc.getElementById("tkl3"),  
                range,   
                selection;

            if (window.getSelection) { 
                selection = window.getSelection();          
                range = document.createRange();  
                range.selectNodeContents(text);  
                selection.removeAllRanges();  
                selection.addRange(range);  
          
                makeSelection(0, text.firstChild.textContent.length, 0, text.firstChild);  
            }
        });

        $("#tkl4").bind("taphold", function() {
            var doc = document,   
                text = doc.getElementById("tkl4"),  
                range,   
                selection;

            if (window.getSelection) { 
                selection = window.getSelection();          
                range = document.createRange();  
                range.selectNodeContents(text);  
                selection.removeAllRanges();  
                selection.addRange(range);  
          
                makeSelection(0, text.firstChild.textContent.length, 0, text.firstChild);  
            }
        });
    }

    function showResult(isRight) {
        $('.pop').show();
        if(isRight) {
            exportRoot.instance_12.gotoAndStop(0);
            popStage.addChild(exportRoot.instance_12);
            exportRoot.instance_12.play();
        } else {
            exportRoot.instance_13.gotoAndStop(0);
            popStage.addChild(exportRoot.instance_13);
            exportRoot.instance_13.play();
        }
        showPop = true;
    }

    function hideResult() {
        $('.pop').hide();
        popStage.removeAllChildren();
        showPop = false;
    }

    function tick() {
        if(currentIndex != -1) {
            stage[currentIndex].update();
        }
        if(showPop) {
            popStage.update();
        }
    }

    function makeSelection(start, end, child, parent) {  
        var range = document.createRange();  
        range.setStart(parent.childNodes[child], start);  
        range.setEnd(parent.childNodes[child], end);  
      
        var sel = window.getSelection();  
        sel.removeAllRanges();  
        sel.addRange(range);   
    }

    function query(name) {
        return location.search.match(new RegExp('(?:\\?|&)' + name + '=(.*?)(?:$|&)', 'i')) ? decodeURIComponent(RegExp.$1) : '';
    }
});
