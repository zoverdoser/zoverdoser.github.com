var Loading = require("../components/loading.js");
var MsgBox = require("../components/msgbox.js");
var weixin = require("../libs/weixin.js");

weixin.init().done(() => {
	weixin.hideOptionMenu();
});

$("#land .gameList li a")