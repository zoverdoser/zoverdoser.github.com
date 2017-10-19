var _self;
var libs = this;
import res from '../fla/rescc';

function construct(display) {
	_self = display;
	// if(isShop) {
	// 	_self.shopBox.gotoAndStop(1);
	// } else {
	// 	_self.shopBox.gotoAndStop(0);
	// }

	_self.btn.on("click", function() {
		if(isShop) {
			$(document).trigger("OPEN_IBEACON");
		} else {
			$(document).trigger("OPEN_CHOOSE");
		}
	});

	_self.prizeBtn.on("click", function() {
        $(document).trigger("OPEN_PRIZE");
    });

    _self.ruleBtn.on("click", function() {
        $(document).trigger("OPEN_RULE");
    });
}


module.exports.construct=construct;