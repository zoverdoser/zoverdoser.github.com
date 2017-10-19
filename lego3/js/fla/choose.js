import res from '../fla/rescc';
var MsgBox = require("../components/msgbox.js");
var _self;
var libs = this;
var choose,
	chosen = false;

function construct(display) {
	_self = display;
	_self.level1Btn.on("click", function() {
		choose = 1;
		chosen = true;
		_self.level1check.gotoAndStop(1);
		_self.level0check.gotoAndStop(0);
	});

	_self.level0Btn.on("click", function() {
		choose = 0;
		chosen = true;
		_self.level1check.gotoAndStop(0);
		_self.level0check.gotoAndStop(1);
	});

	_self.okBtn.on("click", function() {
		if(!chosen) {
			MsgBox.alert("请选择你要支援的英雄");
			return;
		}
		level = choose;
		$(document).trigger("ALTER_LEVEL", {level: level});
	});
}


module.exports.construct=construct;