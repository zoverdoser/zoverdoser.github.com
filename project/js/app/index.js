define(function(require, exports) {
    var $ = require("jquery");
    var Swipe = require("libs/swipe");
    var diyLoading = require("libs/diyLoading");
    var diyAlert = require("libs/diyAlert");

    init();

    function init() {
        initSwipe();
        initSwitch();
    }

    function initSwitch() {
        var wrappers = $(".wrapper");
        var scrollTops = [0, 0, 0, 0];
        var tabs = $(".fixedTabs .tab");
        tabs.on("click", function() {
            var switchIndex = $(this).index();
            scrollTops[tabs.filter('.on').index()] = $('body').scrollTop();
            $(this).addClass('on').siblings('.tab').removeClass('on');
            wrappers.addClass('hidden').eq(switchIndex).removeClass('hidden');
            $('body').scrollTop(scrollTops[switchIndex])
        });
    }

    function initSwipe(){
        var container = $(".bannerBox");
        var bannerLi = container.find(".banner > li");
        var indicator = container.find(".indicator");

        indicator.html(new Array(bannerLi.length + 1).join("<li></li>"));

        Swipe(container[0], {
            auto: false,
            continuous: true,
            stopPropagation: true,
            callback: function(i) {
                indicator.children().removeClass('on').eq(i).addClass('on');
            }
        });

        indicator.children().eq(0).addClass('on');
    }

    function query(name) {
        return location.search.match(new RegExp('(?:\\?|&)' + name + '=(.*?)(?:$|&)', 'i')) ? decodeURIComponent(RegExp.$1) : '';
    }
});
