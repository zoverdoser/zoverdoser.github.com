define(function(require, exports) {
    var $ = require("jquery");
    var Swipe = require("libs/swipe");
    var diyLoading = require("libs/diyLoading");
    var diyAlert = require("libs/diyAlert");

    initSwipe();

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
