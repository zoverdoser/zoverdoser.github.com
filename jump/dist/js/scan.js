webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(76);


/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _Weixin = __webpack_require__(14);
	
	var _Weixin2 = _interopRequireDefault(_Weixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(70);
	
	_Weixin2.default.init().done(function () {
	    $(".scanBtn").on("click", function () {
	        _Weixin2.default.qr();
	    });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }

});
//# sourceMappingURL=scan.js.map