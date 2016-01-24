;define(function(require,exports,module){
    var $=require("jquery");
    //自定义loading
    return diyLoading = {
        create: function() {
            $("body").append('<div class="diyLoading fixed"><div class="loadBg"><img src="images/spin.png"></div>');
        },
        end: function(callback) {
            $(".diyLoading").remove();
            if(typeof callback == 'function') {
                callback();
            }
        }
    }
})
