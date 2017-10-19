var _self;
var libs=this;
function construct(display){
    _self = display;
    bindEvents();
}

function bindEvents() {
    $(document).on("jump", function() {
    	_self.duang.gotoAndPlay(1);
    });
}

module.exports.construct=construct;