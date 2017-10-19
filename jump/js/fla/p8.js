var _self;
var libs=this;
function construct(display){
    _self = display;
    bindEvents();
}

function bindEvents() {
	_self.btn.on("click", function() {
    	$(document).trigger("NEXT");
    });
}

module.exports.construct=construct;