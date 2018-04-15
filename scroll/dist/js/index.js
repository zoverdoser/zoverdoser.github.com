webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports) {
	    var $ = __webpack_require__(1);
	    var diyLoading = __webpack_require__(3);
	    var diyAlert = __webpack_require__(4);
	    var VerticalSwipe = __webpack_require__(5);
	    var createjs = __webpack_require__(6);
	    var loader = __webpack_require__(8);
	    var Weixin = __webpack_require__(20);

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
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
	!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
	return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
	void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"=="function"&&__webpack_require__(2)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
	//# sourceMappingURL=jquery.min.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require,exports,module){
	    var $=__webpack_require__(1);
	    //自定义loading
	    return diyLoading = {
	        create: function() {
	            $("body").append('<div class="diyLoading fixed"></div>');
	        },
	        end: function(callback) {
	            $(".diyLoading").remove();
	            if(typeof callback == 'function') {
	                callback();
	            }
	        }
	    }
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require,exports,module){
	    var $=__webpack_require__(1);
		return diyAlert;
		//自定义alert
		function diyAlert(_html, callback){
			$("body").append('<div class="diyAlertBg absolute" style=height:'+$(document).height()+'px></div><div class="diyAlaertText fixed" style=top:'+($(window).height()/2-35)+'px><div class="htmlAlert">'+_html+'</div><a href="javascript:;" class="block diyAlertClose">好</a></div>');
			diyAlertClose(callback);
		}	
		function diyAlertClose(callback){
			$(".diyAlertClose").on("click",function(){
				$(".diyAlertBg, .diyAlaertText").remove();
				if(typeof callback == 'function') {
					callback();
				}
			});
		}
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {

	    function Swipe(container, options) {

	        "use strict";

	        // utilities
	        var noop = function () {
	        }; // simple no operation function
	        var offloadFn = function (fn) {
	            setTimeout(fn || noop, 0)
	        }; // offload a functions execution

	        // check browser capabilities
	        var browser = {
	            addEventListener: !!window.addEventListener,
	            touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
	            transitions: (function (temp) {
	                var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
	                for (var i in props) if (temp.style[ props[i] ] !== undefined) return true;
	                return false;
	            })(document.createElement('swipe'))
	        };

	        // quit if no root element
	        if (!container) return;
	        var element = container.children[0];
	        var slides, slidePos, height, length, overflowInfo={};
	        options = options || {};
	        var index = parseInt(options.startSlide, 10) || 0;
	        var speed = options.speed || 300;
	        options.continuous = options.continuous !== undefined ? options.continuous : true;
	        options.overflowScroll = options.overflowScroll !== undefined ? options.overflowScroll : false;

	        function setup() {
	            // cache slides
	            slides = element.children;
	            length = slides.length;

	            // set continuous to false if only one slide
	            if (slides.length < 2) options.continuous = false;

	            //special case if two slides
	            if (browser.transitions && options.continuous && slides.length < 3) {
	                element.appendChild(slides[0].cloneNode(true));
	                element.appendChild(element.children[1].cloneNode(true));
	                slides = element.children;
	            }

	            // create an array to store current positions of each slide
	            slidePos = new Array(slides.length);

	            // determine height of each slide
	            height = container.getBoundingClientRect().height || container.offsetHeight;

	            element.style.height = (slides.length * height) + 'px';

	            // stack elements
	            var pos = slides.length;
	            while (pos--) {

	                var slide = slides[pos];

	                if (options.overflowScroll) {
	                    var childHeight = slide.children[0].getBoundingClientRect().height || slide.children[0].offsetHeight;
	                    if (childHeight > height) {
	                        slide.cssText = 'overflowY: scroll; -webkit-overflow-scrolling: touch;';
	                        overflowInfo[pos] = {
	                            element: slide,
	                            height: childHeight
	                        };
	                    }
	                }

	                slide.style.height = height + 'px';
	                slide.setAttribute('data-index', pos);

	                if (browser.transitions) {
	                    slide.style.top = (pos * -height) + 'px';
	                    move(pos, index > pos ? -height : (index < pos ? height : 0), 0);
	                }

	            }

	            // reposition elements before and after index
	            if (options.continuous && browser.transitions) {
	                move(circle(index - 1), -height, 0);
	                move(circle(index + 1), height, 0);
	            }

	            if (!browser.transitions) element.style.top = (index * -height) + 'px';

	            container.style.visibility = 'visible';

	        }

	        function prev() {

	            if (options.continuous) slide(index - 1);
	            else if (index) slide(index - 1);

	        }

	        function next() {

	            if (options.continuous) slide(index + 1);
	            else if (index < slides.length - 1) slide(index + 1);

	        }

	        function circle(index) {

	            // a simple positive modulo using slides.length
	            return (slides.length + (index % slides.length)) % slides.length;

	        }

	        function slide(to, slideSpeed) {

	            // do nothing if already on requested slide
	            if (index == to) return;

	            if (browser.transitions) {

	                var direction = Math.abs(index - to) / (index - to); // 1: backward, -1: forward

	                // get the actual position of the slide
	                if (options.continuous) {
	                    var natural_direction = direction;
	                    direction = -slidePos[circle(to)] / height;

	                    // if going forward but to < index, use to = slides.length + to
	                    // if going backward but to > index, use to = -slides.length + to
	                    if (direction !== natural_direction) to = -direction * slides.length + to;

	                }

	                var diff = Math.abs(index - to) - 1;

	                // move all the slides between index and to in the right direction
	                while (diff--) move(circle((to > index ? to : index) - diff - 1), height * direction, 0);

	                to = circle(to);

	                move(index, height * direction, slideSpeed || speed);
	                move(to, 0, slideSpeed || speed);

	                if (options.continuous) move(circle(to - direction), -(height * direction), 0); // we need to get the next in place

	            } else {

	                to = circle(to);
	                animate(index * -height, to * -height, slideSpeed || speed);
	                //no fallback for a circular continuous if the browser does not accept transitions
	            }

	            index = to;
	            offloadFn(options.callback && options.callback(index, slides[index]));
	        }

	        function move(index, dist, speed) {

	            translate(index, dist, speed);
	            slidePos[index] = dist;

	        }

	        function translate(index, dist, speed) {

	            var slide = slides[index];
	            var style = slide && slide.style;

	            if (!style) return;

	            style.webkitTransitionDuration =
	                style.MozTransitionDuration =
	                    style.msTransitionDuration =
	                        style.OTransitionDuration =
	                            style.transitionDuration = speed + 'ms';

	            style.webkitTransform = 'translate(0, ' + dist + 'px)' + 'translateZ(0)';
	            style.msTransform =
	                style.MozTransform =
	                    style.OTransform = 'translateY(' + dist + 'px)';

	        }

	        function animate(from, to, speed) {

	            // if not an animation, just reposition
	            if (!speed) {

	                element.style.top = to + 'px';
	                return;

	            }

	            var start = +new Date;

	            var timer = setInterval(function () {

	                var timeElap = +new Date - start;

	                if (timeElap > speed) {

	                    element.style.top = to + 'px';

	                    if (delay) begin();

	                    options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

	                    clearInterval(timer);
	                    return;

	                }

	                element.style.top = (( (to - from) * (Math.floor((timeElap / speed) * 100) / 100) ) + from) + 'px';

	            }, 4);

	        }

	        // setup auto slideshow
	        var delay = options.auto || 0;
	        var interval;

	        function begin() {

	            interval = setTimeout(next, delay);

	        }

	        function stop() {
	            if (arguments[0]) {
	                delay = arguments[0];
	            } else {
	                delay = 0;
	            }

	            clearTimeout(interval);

	        }


	        // setup initial vars
	        var start = {};
	        var delta = {};
	        var isScrolling;

	        // setup event capturing
	        var events = {

	            handleEvent: function (event) {

	                switch (event.type) {
	                    case 'touchstart':
	                        this.start(event);
	                        break;
	                    case 'touchmove':
	                        this.move(event);
	                        break;
	                    case 'touchend':
	                        offloadFn(this.end(event));
	                        break;
	                    case 'webkitTransitionEnd':
	                    case 'msTransitionEnd':
	                    case 'oTransitionEnd':
	                    case 'otransitionend':
	                    case 'transitionend':
	                        offloadFn(this.transitionEnd(event));
	                        break;
	                    case 'resize':
	                        offloadFn(setup);
	                        break;
	                }

	                if (options.stopPropagation) event.stopPropagation();

	            },
	            start: function (event) {
	                var classNames = (event.target.className + ' ' +event.target.parentNode.className + " "+ event.target.parentNode.className + " " +event.target.parentNode.parentNode.parentNode.className + " " + event.target.parentNode.parentNode.className + " " + event.target.parentNode.parentNode.parentNode.parentNode.className)
	                var touches = event.touches[0];
	                if(~classNames.indexOf('frozen')) {
	                    return false;
	                }
	                // measure start values
	                start = {

	                    // get initial touch coords
	                    x: touches.pageX,
	                    y: touches.pageY,

	                    // store time to determine touch duration
	                    time: +new Date

	                };

	                // used for testing first move event
	                isScrolling = undefined;

	                // reset delta and end measurements
	                delta = {};

	                // attach touchmove and touchend listeners
	                element.addEventListener('touchmove', this, false);
	                element.addEventListener('touchend', this, false);

	            },
	            move: function (event) {

	                // ensure swiping with one touch and not pinching
	                if (event.touches.length > 1 || event.scale && event.scale !== 1) return

	                if (options.disableScroll) event.preventDefault();

	                var touches = event.touches[0];

	                // measure change in x and y
	                delta = {
	                    x: touches.pageX - start.x,
	                    y: touches.pageY - start.y
	                }

	                // determine if scrolling test has run - one time test
	                if (typeof isScrolling == 'undefined') {
	                    isScrolling = !!( isScrolling || Math.abs(delta.y) < Math.abs(delta.x) );
	                }


	                if (options.overflowScroll) {
	                    // 允许溢出内容滚动

	                    if (typeof overflowInfo[index] != 'undefined') {
	                        
	                        var moveDirection = delta.y>0?'down':'up';

	                        var reachTop = overflowInfo[index].element.scrollTop == 0;
	                        var reachBottom;
	                        if(window.getComputedStyle(overflowInfo[index].element).getPropertyValue('overflow') == 'hidden') {
	                            reachBottom = true;
	                        } else {
	                            reachBottom = (overflowInfo[index].element.scrollTop == (overflowInfo[index].element.children[0].clientHeight - overflowInfo[index].element.clientHeight));
	                        }
	                        if ( (reachTop && moveDirection == 'down') || (reachBottom && moveDirection == 'up') ) {
	                            isScrolling = false;
	                        }
	                        else {
	                            isScrolling = true;
	                        }
	                    }
	                }


	                // if user is not trying to scroll vertically
	                if (!isScrolling) {

	                    // prevent native scrolling
	                    event.preventDefault();
	                    // stop slideshow
	                    stop(options.auto || 0);

	                    // increase resistance if first or last slide
	                    if (options.continuous) { // we don't add resistance at the end

	                        translate(circle(index - 1), delta.y + slidePos[circle(index - 1)], 0);
	                        translate(index, delta.y + slidePos[index], 0);
	                        translate(circle(index + 1), delta.y + slidePos[circle(index + 1)], 0);

	                    } else {

	                        delta.y =
	                            delta.y /
	                                ( (!index && delta.y > 0               // if first slide and sliding left
	                                    || index == slides.length - 1        // or if last slide and sliding right
	                                    && delta.y < 0                       // and if sliding at all
	                                    ) ?
	                                    ( Math.abs(delta.y) / height + 1 )      // determine resistance level
	                                    : 1 );                                 // no resistance if false

	                        // translate 1:1
	                        translate(index - 1, delta.y + slidePos[index - 1], 0);
	                        translate(index, delta.y + slidePos[index], 0);
	                        translate(index + 1, delta.y + slidePos[index + 1], 0);
	                    }

	                }

	            },
	            end: function (event) {

	                // measure duration
	                var duration = +new Date - start.time;

	                // determine if slide attempt triggers next/prev slide
	                var isValidSlide =
	                    Number(duration) < 250               // if slide duration is less than 250ms
	                        && Math.abs(delta.y) > 20            // and if slide amt is greater than 20px
	                        || Math.abs(delta.y) > height / 2;      // or if slide amt is greater than half the height

	                // determine if slide attempt is past start and end
	                var isPastBounds =
	                    !index && delta.y > 0                            // if first slide and slide amt is greater than 0
	                        || index == slides.length - 1 && delta.y < 0;    // or if last slide and slide amt is less than 0

	                if (options.continuous) isPastBounds = false;

	                // determine direction of swipe (true:right, false:left)
	                var direction = delta.y < 0;

	                // if not scrolling vertically
	                if (!isScrolling) {

	                    if (isValidSlide && !isPastBounds) {

	                        if (direction) {

	                            if (options.continuous) { // we need to get the next in this direction in place

	                                move(circle(index - 1), -height, 0);
	                                move(circle(index + 2), height, 0);

	                            } else {
	                                move(index - 1, -height, 0);
	                            }

	                            move(index, slidePos[index] - height, speed);
	                            move(circle(index + 1), slidePos[circle(index + 1)] - height, speed);
	                            index = circle(index + 1);

	                        } else {
	                            if (options.continuous) { // we need to get the next in this direction in place

	                                move(circle(index + 1), height, 0);
	                                move(circle(index - 2), -height, 0);

	                            } else {
	                                move(index + 1, height, 0);
	                            }

	                            move(index, slidePos[index] + height, speed);
	                            move(circle(index - 1), slidePos[circle(index - 1)] + height, speed);
	                            index = circle(index - 1);

	                        }

	                        options.callback && options.callback(index, slides[index]);

	                    } else {

	                        if (options.continuous) {

	                            move(circle(index - 1), -height, speed);
	                            move(index, 0, speed);
	                            move(circle(index + 1), height, speed);

	                        } else {

	                            move(index - 1, -height, speed);
	                            move(index, 0, speed);
	                            move(index + 1, height, speed);
	                        }

	                    }

	                }

	                // kill touchmove and touchend event listeners until touchstart called again
	                element.removeEventListener('touchmove', events, false)
	                element.removeEventListener('touchend', events, false)

	            },
	            transitionEnd: function (event) {

	                if (parseInt(event.target.getAttribute('data-index'), 10) == index) {

	                    if (delay) begin();

	                    options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

	                }

	            }

	        }


	        // trigger setup
	        setup();

	        // start auto slideshow if applicable
	        if (delay) begin();


	        // add event listeners
	        if (browser.addEventListener) {

	            // set touchstart event on element
	            if (browser.touch) element.addEventListener('touchstart', events, false);

	            if (browser.transitions) {
	                element.addEventListener('webkitTransitionEnd', events, false);
	                element.addEventListener('msTransitionEnd', events, false);
	                element.addEventListener('oTransitionEnd', events, false);
	                element.addEventListener('otransitionend', events, false);
	                element.addEventListener('transitionend', events, false);
	            }

	            // set resize event on window
	            window.addEventListener('resize', events, false);

	        } else {

	            window.onresize = function () {
	                setup()
	            }; // to play nice with old IE

	        }

	        // expose the Swipe API
	        return {
	            resize: function () {
	                offloadFn(setup)
	            },
	            setup: function () {

	                setup();

	            },
	            slide: function (to, speed) {

	                // cancel slideshow
	                stop();

	                slide(to, speed);

	            },
	            prev: function () {

	                // cancel slideshow
	                stop();

	                prev();

	            },
	            next: function () {

	                // cancel slideshow
	                stop();

	                next();

	            },
	            begin: function () {
	                stop();
	                begin();
	            },
	            stop: function () {

	                // cancel slideshow
	                stop();

	            },
	            getPos: function () {

	                // return current index position
	                return index;

	            },
	            getNumSlides: function () {

	                // return total number of slides
	                return length;
	            },
	            kill: function () {

	                // cancel slideshow
	                stop();

	                // reset element
	                element.style.height = '';
	                element.style.top = '';

	                // reset slides
	                var pos = slides.length;
	                while (pos--) {

	                    var slide = slides[pos];
	                    slide.style.height = '';
	                    slide.style.top = '';

	                    if (browser.transitions) translate(pos, 0, 0);

	                }

	                // removed event listeners
	                if (browser.addEventListener) {

	                    // remove current event listeners
	                    element.removeEventListener('touchstart', events, false);
	                    element.removeEventListener('webkitTransitionEnd', events, false);
	                    element.removeEventListener('msTransitionEnd', events, false);
	                    element.removeEventListener('oTransitionEnd', events, false);
	                    element.removeEventListener('otransitionend', events, false);
	                    element.removeEventListener('transitionend', events, false);
	                    window.removeEventListener('resize', events, false);

	                }
	                else {

	                    window.onresize = null;

	                }

	            }
	        }

	    }

	    return Swipe;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*!
	* @license EaselJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	this.createjs=this.createjs||{};
	var createjs=this.createjs;
	createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var b=a.prototype;b.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},b.stopPropagation=function(){this.propagationStopped=!0},b.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},b.remove=function(){this.removed=!0},b.clone=function(){return new a(this.type,this.bubbles,this.cancelable)},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this._listeners=null,this._captureListeners=null}var b=a.prototype;a.initialize=function(a){a.addEventListener=b.addEventListener,a.on=b.on,a.removeEventListener=a.off=b.removeEventListener,a.removeAllEventListeners=b.removeAllEventListeners,a.hasEventListener=b.hasEventListener,a.dispatchEvent=b.dispatchEvent,a._dispatchEvent=b._dispatchEvent,a.willTrigger=b.willTrigger},b.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},b.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},b.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},b.off=b.removeEventListener,b.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},b.dispatchEvent=function(a,b,c){if("string"==typeof a){var d=this._listeners;if(!(b||d&&d[a]))return!0;a=new createjs.Event(a,b,c)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(e){}if(a.bubbles&&this.parent){for(var f=this,g=[f];f.parent;)g.push(f=f.parent);var h,i=g.length;for(h=i-1;h>=0&&!a.propagationStopped;h--)g[h]._dispatchEvent(a,1+(0==h));for(h=1;i>h&&!a.propagationStopped;h++)g[h]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return!a.defaultPrevented},b.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},b.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},b.toString=function(){return"[EventDispatcher]"},b._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;try{a.currentTarget=this}catch(f){}try{a.eventPhase=b}catch(f){}a.removed=!1,e=e.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=e[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}},createjs.EventDispatcher=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Ticker cannot be instantiated."}a.RAF_SYNCHED="synched",a.RAF="raf",a.TIMEOUT="timeout",a.useRAF=!1,a.timingMode=null,a.maxDelta=0,a.paused=!1,a.removeEventListener=null,a.removeAllEventListeners=null,a.dispatchEvent=null,a.hasEventListener=null,a._listeners=null,createjs.EventDispatcher.initialize(a),a._addEventListener=a.addEventListener,a.addEventListener=function(){return!a._inited&&a.init(),a._addEventListener.apply(a,arguments)},a._inited=!1,a._startTime=0,a._pausedTime=0,a._ticks=0,a._pausedTicks=0,a._interval=50,a._lastTime=0,a._times=null,a._tickTimes=null,a._timerId=null,a._raf=!0,a.setInterval=function(b){a._interval=b,a._inited&&a._setupTick()},a.getInterval=function(){return a._interval},a.setFPS=function(b){a.setInterval(1e3/b)},a.getFPS=function(){return 1e3/a._interval};try{Object.defineProperties(a,{interval:{get:a.getInterval,set:a.setInterval},framerate:{get:a.getFPS,set:a.setFPS}})}catch(b){console.log(b)}a.init=function(){a._inited||(a._inited=!0,a._times=[],a._tickTimes=[],a._startTime=a._getTime(),a._times.push(a._lastTime=0),a.interval=a._interval)},a.reset=function(){if(a._raf){var b=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame;b&&b(a._timerId)}else clearTimeout(a._timerId);a.removeAllEventListeners("tick"),a._timerId=a._times=a._tickTimes=null,a._startTime=a._lastTime=a._ticks=0,a._inited=!1},a.getMeasuredTickTime=function(b){var c=0,d=a._tickTimes;if(!d||d.length<1)return-1;b=Math.min(d.length,b||0|a.getFPS());for(var e=0;b>e;e++)c+=d[e];return c/b},a.getMeasuredFPS=function(b){var c=a._times;return!c||c.length<2?-1:(b=Math.min(c.length-1,b||0|a.getFPS()),1e3/((c[0]-c[b])/b))},a.setPaused=function(b){a.paused=b},a.getPaused=function(){return a.paused},a.getTime=function(b){return a._startTime?a._getTime()-(b?a._pausedTime:0):-1},a.getEventTime=function(b){return a._startTime?(a._lastTime||a._startTime)-(b?a._pausedTime:0):-1},a.getTicks=function(b){return a._ticks-(b?a._pausedTicks:0)},a._handleSynch=function(){a._timerId=null,a._setupTick(),a._getTime()-a._lastTime>=.97*(a._interval-1)&&a._tick()},a._handleRAF=function(){a._timerId=null,a._setupTick(),a._tick()},a._handleTimeout=function(){a._timerId=null,a._setupTick(),a._tick()},a._setupTick=function(){if(null==a._timerId){var b=a.timingMode||a.useRAF&&a.RAF_SYNCHED;if(b==a.RAF_SYNCHED||b==a.RAF){var c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(c)return a._timerId=c(b==a.RAF?a._handleRAF:a._handleSynch),void(a._raf=!0)}a._raf=!1,a._timerId=setTimeout(a._handleTimeout,a._interval)}},a._tick=function(){var b=a.paused,c=a._getTime(),d=c-a._lastTime;if(a._lastTime=c,a._ticks++,b&&(a._pausedTicks++,a._pausedTime+=d),a.hasEventListener("tick")){var e=new createjs.Event("tick"),f=a.maxDelta;e.delta=f&&d>f?f:d,e.paused=b,e.time=c,e.runTime=c-a._pausedTime,a.dispatchEvent(e)}for(a._tickTimes.unshift(a._getTime()-c);a._tickTimes.length>100;)a._tickTimes.pop();for(a._times.unshift(c);a._times.length>100;)a._times.pop()};var c=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);a._getTime=function(){return(c&&c.call(performance)||(new Date).getTime())-a._startTime},createjs.Ticker=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"UID cannot be instantiated"}a._nextID=0,a.get=function(){return a._nextID++},createjs.UID=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h,i,j,k){this.Event_constructor(a,b,c),this.stageX=d,this.stageY=e,this.rawX=null==i?d:i,this.rawY=null==j?e:j,this.nativeEvent=f,this.pointerID=g,this.primary=!!h,this.relatedTarget=k}var b=createjs.extend(a,createjs.Event);b._get_localX=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).x},b._get_localY=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).y},b._get_isTouch=function(){return-1!==this.pointerID};try{Object.defineProperties(b,{localX:{get:b._get_localX},localY:{get:b._get_localY},isTouch:{get:b._get_isTouch}})}catch(c){}b.clone=function(){return new a(this.type,this.bubbles,this.cancelable,this.stageX,this.stageY,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)},b.toString=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]"},createjs.MouseEvent=createjs.promote(a,"Event")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f){this.setValues(a,b,c,d,e,f)}var b=a.prototype;a.DEG_TO_RAD=Math.PI/180,a.identity=null,b.setValues=function(a,b,c,d,e,f){return this.a=null==a?1:a,this.b=b||0,this.c=c||0,this.d=null==d?1:d,this.tx=e||0,this.ty=f||0,this},b.append=function(a,b,c,d,e,f){var g=this.a,h=this.b,i=this.c,j=this.d;return(1!=a||0!=b||0!=c||1!=d)&&(this.a=g*a+i*b,this.b=h*a+j*b,this.c=g*c+i*d,this.d=h*c+j*d),this.tx=g*e+i*f+this.tx,this.ty=h*e+j*f+this.ty,this},b.prepend=function(a,b,c,d,e,f){var g=this.a,h=this.c,i=this.tx;return this.a=a*g+c*this.b,this.b=b*g+d*this.b,this.c=a*h+c*this.d,this.d=b*h+d*this.d,this.tx=a*i+c*this.ty+e,this.ty=b*i+d*this.ty+f,this},b.appendMatrix=function(a){return this.append(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.prependMatrix=function(a){return this.prepend(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.appendTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.append(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c),this.append(l*d,m*d,-m*e,l*e,0,0)):this.append(l*d,m*d,-m*e,l*e,b,c),(i||j)&&(this.tx-=i*this.a+j*this.c,this.ty-=i*this.b+j*this.d),this},b.prependTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return(i||j)&&(this.tx-=i,this.ty-=j),g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.prepend(l*d,m*d,-m*e,l*e,0,0),this.prepend(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c)):this.prepend(l*d,m*d,-m*e,l*e,b,c),this},b.rotate=function(b){b*=a.DEG_TO_RAD;var c=Math.cos(b),d=Math.sin(b),e=this.a,f=this.b;return this.a=e*c+this.c*d,this.b=f*c+this.d*d,this.c=-e*d+this.c*c,this.d=-f*d+this.d*c,this},b.skew=function(b,c){return b*=a.DEG_TO_RAD,c*=a.DEG_TO_RAD,this.append(Math.cos(c),Math.sin(c),-Math.sin(b),Math.cos(b),0,0),this},b.scale=function(a,b){return this.a*=a,this.b*=a,this.c*=b,this.d*=b,this},b.translate=function(a,b){return this.tx+=this.a*a+this.c*b,this.ty+=this.b*a+this.d*b,this},b.identity=function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},b.invert=function(){var a=this.a,b=this.b,c=this.c,d=this.d,e=this.tx,f=a*d-b*c;return this.a=d/f,this.b=-b/f,this.c=-c/f,this.d=a/f,this.tx=(c*this.ty-d*e)/f,this.ty=-(a*this.ty-b*e)/f,this},b.isIdentity=function(){return 0===this.tx&&0===this.ty&&1===this.a&&0===this.b&&0===this.c&&1===this.d},b.equals=function(a){return this.tx===a.tx&&this.ty===a.ty&&this.a===a.a&&this.b===a.b&&this.c===a.c&&this.d===a.d},b.transformPoint=function(a,b,c){return c=c||{},c.x=a*this.a+b*this.c+this.tx,c.y=a*this.b+b*this.d+this.ty,c},b.decompose=function(b){null==b&&(b={}),b.x=this.tx,b.y=this.ty,b.scaleX=Math.sqrt(this.a*this.a+this.b*this.b),b.scaleY=Math.sqrt(this.c*this.c+this.d*this.d);var c=Math.atan2(-this.c,this.d),d=Math.atan2(this.b,this.a),e=Math.abs(1-c/d);return 1e-5>e?(b.rotation=d/a.DEG_TO_RAD,this.a<0&&this.d>=0&&(b.rotation+=b.rotation<=0?180:-180),b.skewX=b.skewY=0):(b.skewX=c/a.DEG_TO_RAD,b.skewY=d/a.DEG_TO_RAD),b},b.copy=function(a){return this.setValues(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.clone=function(){return new a(this.a,this.b,this.c,this.d,this.tx,this.ty)},b.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"},a.identity=new a,createjs.Matrix2D=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e){this.setValues(a,b,c,d,e)}var b=a.prototype;b.setValues=function(a,b,c,d,e){return this.visible=null==a?!0:!!a,this.alpha=null==b?1:b,this.shadow=c,this.compositeOperation=c,this.matrix=e||this.matrix&&this.matrix.identity()||new createjs.Matrix2D,this},b.append=function(a,b,c,d,e){return this.alpha*=b,this.shadow=c||this.shadow,this.compositeOperation=d||this.compositeOperation,this.visible=this.visible&&a,e&&this.matrix.appendMatrix(e),this},b.prepend=function(a,b,c,d,e){return this.alpha*=b,this.shadow=this.shadow||c,this.compositeOperation=this.compositeOperation||d,this.visible=this.visible&&a,e&&this.matrix.prependMatrix(e),this},b.identity=function(){return this.visible=!0,this.alpha=1,this.shadow=this.compositeOperation=null,this.matrix.identity(),this},b.clone=function(){return new a(this.alpha,this.shadow,this.compositeOperation,this.visible,this.matrix.clone())},createjs.DisplayProps=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.setValues(a,b)}var b=a.prototype;b.setValues=function(a,b){return this.x=a||0,this.y=b||0,this},b.copy=function(a){return this.x=a.x,this.y=a.y,this},b.clone=function(){return new a(this.x,this.y)},b.toString=function(){return"[Point (x="+this.x+" y="+this.y+")]"},createjs.Point=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setValues(a,b,c,d)}var b=a.prototype;b.setValues=function(a,b,c,d){return this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0,this},b.extend=function(a,b,c,d){return c=c||0,d=d||0,a+c>this.x+this.width&&(this.width=a+c-this.x),b+d>this.y+this.height&&(this.height=b+d-this.y),a<this.x&&(this.width+=this.x-a,this.x=a),b<this.y&&(this.height+=this.y-b,this.y=b),this},b.pad=function(a,b,c,d){return this.x-=b,this.y-=a,this.width+=b+d,this.height+=a+c,this},b.copy=function(a){return this.setValues(a.x,a.y,a.width,a.height)},b.contains=function(a,b,c,d){return c=c||0,d=d||0,a>=this.x&&a+c<=this.x+this.width&&b>=this.y&&b+d<=this.y+this.height},b.union=function(a){return this.clone().extend(a.x,a.y,a.width,a.height)},b.intersection=function(b){var c=b.x,d=b.y,e=c+b.width,f=d+b.height;return this.x>c&&(c=this.x),this.y>d&&(d=this.y),this.x+this.width<e&&(e=this.x+this.width),this.y+this.height<f&&(f=this.y+this.height),c>=e||d>=f?null:new a(c,d,e-c,f-d)},b.intersects=function(a){return a.x<=this.x+this.width&&this.x<=a.x+a.width&&a.y<=this.y+this.height&&this.y<=a.y+a.height},b.isEmpty=function(){return this.width<=0||this.height<=0},b.clone=function(){return new a(this.x,this.y,this.width,this.height)},b.toString=function(){return"[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]"},createjs.Rectangle=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g){a.addEventListener&&(this.target=a,this.overLabel=null==c?"over":c,this.outLabel=null==b?"out":b,this.downLabel=null==d?"down":d,this.play=e,this._isPressed=!1,this._isOver=!1,this._enabled=!1,a.mouseChildren=!1,this.enabled=!0,this.handleEvent({}),f&&(g&&(f.actionsEnabled=!1,f.gotoAndStop&&f.gotoAndStop(g)),a.hitArea=f))}var b=a.prototype;b.setEnabled=function(a){if(a!=this._enabled){var b=this.target;this._enabled=a,a?(b.cursor="pointer",b.addEventListener("rollover",this),b.addEventListener("rollout",this),b.addEventListener("mousedown",this),b.addEventListener("pressup",this),b._reset&&(b.__reset=b._reset,b._reset=this._reset)):(b.cursor=null,b.removeEventListener("rollover",this),b.removeEventListener("rollout",this),b.removeEventListener("mousedown",this),b.removeEventListener("pressup",this),b.__reset&&(b._reset=b.__reset,delete b.__reset))}},b.getEnabled=function(){return this._enabled};try{Object.defineProperties(b,{enabled:{get:b.getEnabled,set:b.setEnabled}})}catch(c){}b.toString=function(){return"[ButtonHelper]"},b.handleEvent=function(a){var b,c=this.target,d=a.type;"mousedown"==d?(this._isPressed=!0,b=this.downLabel):"pressup"==d?(this._isPressed=!1,b=this._isOver?this.overLabel:this.outLabel):"rollover"==d?(this._isOver=!0,b=this._isPressed?this.downLabel:this.overLabel):(this._isOver=!1,b=this._isPressed?this.overLabel:this.outLabel),this.play?c.gotoAndPlay&&c.gotoAndPlay(b):c.gotoAndStop&&c.gotoAndStop(b)},b._reset=function(){var a=this.paused;this.__reset(),this.paused=a},createjs.ButtonHelper=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.color=a||"black",this.offsetX=b||0,this.offsetY=c||0,this.blur=d||0}var b=a.prototype;a.identity=new a("transparent",0,0,0),b.toString=function(){return"[Shadow]"},b.clone=function(){return new a(this.color,this.offsetX,this.offsetY,this.blur)},createjs.Shadow=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.EventDispatcher_constructor(),this.complete=!0,this.framerate=0,this._animations=null,this._frames=null,this._images=null,this._data=null,this._loadCount=0,this._frameHeight=0,this._frameWidth=0,this._numFrames=0,this._regX=0,this._regY=0,this._spacing=0,this._margin=0,this._parseData(a)}var b=createjs.extend(a,createjs.EventDispatcher);b.getAnimations=function(){return this._animations.slice()};try{Object.defineProperties(b,{animations:{get:b.getAnimations}})}catch(c){}b.getNumFrames=function(a){if(null==a)return this._frames?this._frames.length:this._numFrames||0;var b=this._data[a];return null==b?0:b.frames.length},b.getAnimation=function(a){return this._data[a]},b.getFrame=function(a){var b;return this._frames&&(b=this._frames[a])?b:null},b.getFrameBounds=function(a,b){var c=this.getFrame(a);return c?(b||new createjs.Rectangle).setValues(-c.regX,-c.regY,c.rect.width,c.rect.height):null},b.toString=function(){return"[SpriteSheet]"},b.clone=function(){throw"SpriteSheet cannot be cloned."},b._parseData=function(a){var b,c,d,e;if(null!=a){if(this.framerate=a.framerate||0,a.images&&(c=a.images.length)>0)for(e=this._images=[],b=0;c>b;b++){var f=a.images[b];if("string"==typeof f){var g=f;f=document.createElement("img"),f.src=g}e.push(f),f.getContext||f.naturalWidth||(this._loadCount++,this.complete=!1,function(a){f.onload=function(){a._handleImageLoad()}}(this))}if(null==a.frames);else if(a.frames instanceof Array)for(this._frames=[],e=a.frames,b=0,c=e.length;c>b;b++){var h=e[b];this._frames.push({image:this._images[h[4]?h[4]:0],rect:new createjs.Rectangle(h[0],h[1],h[2],h[3]),regX:h[5]||0,regY:h[6]||0})}else d=a.frames,this._frameWidth=d.width,this._frameHeight=d.height,this._regX=d.regX||0,this._regY=d.regY||0,this._spacing=d.spacing||0,this._margin=d.margin||0,this._numFrames=d.count,0==this._loadCount&&this._calculateFrames();if(this._animations=[],null!=(d=a.animations)){this._data={};var i;for(i in d){var j={name:i},k=d[i];if("number"==typeof k)e=j.frames=[k];else if(k instanceof Array)if(1==k.length)j.frames=[k[0]];else for(j.speed=k[3],j.next=k[2],e=j.frames=[],b=k[0];b<=k[1];b++)e.push(b);else{j.speed=k.speed,j.next=k.next;var l=k.frames;e=j.frames="number"==typeof l?[l]:l.slice(0)}(j.next===!0||void 0===j.next)&&(j.next=i),(j.next===!1||e.length<2&&j.next==i)&&(j.next=null),j.speed||(j.speed=1),this._animations.push(i),this._data[i]=j}}}},b._handleImageLoad=function(){0==--this._loadCount&&(this._calculateFrames(),this.complete=!0,this.dispatchEvent("complete"))},b._calculateFrames=function(){if(!this._frames&&0!=this._frameWidth){this._frames=[];var a=this._numFrames||1e5,b=0,c=this._frameWidth,d=this._frameHeight,e=this._spacing,f=this._margin;a:for(var g=0,h=this._images;g<h.length;g++)for(var i=h[g],j=i.width,k=i.height,l=f;k-f-d>=l;){for(var m=f;j-f-c>=m;){if(b>=a)break a;b++,this._frames.push({image:i,rect:new createjs.Rectangle(m,l,c,d),regX:this._regX,regY:this._regY}),m+=c+e}l+=d+e}this._numFrames=b}},createjs.SpriteSheet=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.command=null,this._stroke=null,this._strokeStyle=null,this._oldStrokeStyle=null,this._strokeDash=null,this._oldStrokeDash=null,this._strokeIgnoreScale=!1,this._fill=null,this._instructions=[],this._commitIndex=0,this._activeInstructions=[],this._dirty=!1,this._storeIndex=0,this.clear()}var b=a.prototype,c=a;a.getRGB=function(a,b,c,d){return null!=a&&null==c&&(d=b,c=255&a,b=a>>8&255,a=a>>16&255),null==d?"rgb("+a+","+b+","+c+")":"rgba("+a+","+b+","+c+","+d+")"},a.getHSL=function(a,b,c,d){return null==d?"hsl("+a%360+","+b+"%,"+c+"%)":"hsla("+a%360+","+b+"%,"+c+"%,"+d+")"},a.BASE_64={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,0:52,1:53,2:54,3:55,4:56,5:57,6:58,7:59,8:60,9:61,"+":62,"/":63},a.STROKE_CAPS_MAP=["butt","round","square"],a.STROKE_JOINTS_MAP=["miter","round","bevel"];var d=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");d.getContext&&(a._ctx=d.getContext("2d"),d.width=d.height=1),b.getInstructions=function(){return this._updateInstructions(),this._instructions};try{Object.defineProperties(b,{instructions:{get:b.getInstructions}})}catch(e){}b.isEmpty=function(){return!(this._instructions.length||this._activeInstructions.length)},b.draw=function(a,b){this._updateInstructions();for(var c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)c[d].exec(a,b)},b.drawAsPath=function(a){this._updateInstructions();for(var b,c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)(b=c[d]).path!==!1&&b.exec(a)},b.moveTo=function(a,b){return this.append(new c.MoveTo(a,b),!0)},b.lineTo=function(a,b){return this.append(new c.LineTo(a,b))},b.arcTo=function(a,b,d,e,f){return this.append(new c.ArcTo(a,b,d,e,f))},b.arc=function(a,b,d,e,f,g){return this.append(new c.Arc(a,b,d,e,f,g))},b.quadraticCurveTo=function(a,b,d,e){return this.append(new c.QuadraticCurveTo(a,b,d,e))},b.bezierCurveTo=function(a,b,d,e,f,g){return this.append(new c.BezierCurveTo(a,b,d,e,f,g))},b.rect=function(a,b,d,e){return this.append(new c.Rect(a,b,d,e))},b.closePath=function(){return this._activeInstructions.length?this.append(new c.ClosePath):this},b.clear=function(){return this._instructions.length=this._activeInstructions.length=this._commitIndex=0,this._strokeStyle=this._oldStrokeStyle=this._stroke=this._fill=this._strokeDash=this._oldStrokeDash=null,this._dirty=this._strokeIgnoreScale=!1,this},b.beginFill=function(a){return this._setFill(a?new c.Fill(a):null)},b.beginLinearGradientFill=function(a,b,d,e,f,g){return this._setFill((new c.Fill).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientFill=function(a,b,d,e,f,g,h,i){return this._setFill((new c.Fill).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapFill=function(a,b,d){return this._setFill(new c.Fill(null,d).bitmap(a,b))},b.endFill=function(){return this.beginFill()},b.setStrokeStyle=function(a,b,d,e,f){return this._updateInstructions(!0),this._strokeStyle=this.command=new c.StrokeStyle(a,b,d,e,f),this._stroke&&(this._stroke.ignoreScale=f),this._strokeIgnoreScale=f,this},b.setStrokeDash=function(a,b){return this._updateInstructions(!0),this._strokeDash=this.command=new c.StrokeDash(a,b),this},b.beginStroke=function(a){return this._setStroke(a?new c.Stroke(a):null)},b.beginLinearGradientStroke=function(a,b,d,e,f,g){return this._setStroke((new c.Stroke).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientStroke=function(a,b,d,e,f,g,h,i){return this._setStroke((new c.Stroke).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapStroke=function(a,b){return this._setStroke((new c.Stroke).bitmap(a,b))},b.endStroke=function(){return this.beginStroke()},b.curveTo=b.quadraticCurveTo,b.drawRect=b.rect,b.drawRoundRect=function(a,b,c,d,e){return this.drawRoundRectComplex(a,b,c,d,e,e,e,e)},b.drawRoundRectComplex=function(a,b,d,e,f,g,h,i){return this.append(new c.RoundRect(a,b,d,e,f,g,h,i))},b.drawCircle=function(a,b,d){return this.append(new c.Circle(a,b,d))},b.drawEllipse=function(a,b,d,e){return this.append(new c.Ellipse(a,b,d,e))},b.drawPolyStar=function(a,b,d,e,f,g){return this.append(new c.PolyStar(a,b,d,e,f,g))},b.append=function(a,b){return this._activeInstructions.push(a),this.command=a,b||(this._dirty=!0),this},b.decodePath=function(b){for(var c=[this.moveTo,this.lineTo,this.quadraticCurveTo,this.bezierCurveTo,this.closePath],d=[2,2,4,6,0],e=0,f=b.length,g=[],h=0,i=0,j=a.BASE_64;f>e;){var k=b.charAt(e),l=j[k],m=l>>3,n=c[m];if(!n||3&l)throw"bad path data (@"+e+"): "+k;var o=d[m];m||(h=i=0),g.length=0,e++;for(var p=(l>>2&1)+2,q=0;o>q;q++){var r=j[b.charAt(e)],s=r>>5?-1:1;r=(31&r)<<6|j[b.charAt(e+1)],3==p&&(r=r<<6|j[b.charAt(e+2)]),r=s*r/10,q%2?h=r+=h:i=r+=i,g[q]=r,e+=p}n.apply(this,g)}return this},b.store=function(){return this._updateInstructions(!0),this._storeIndex=this._instructions.length,this},b.unstore=function(){return this._storeIndex=0,this},b.clone=function(){var b=new a;return b.command=this.command,b._stroke=this._stroke,b._strokeStyle=this._strokeStyle,b._strokeDash=this._strokeDash,b._strokeIgnoreScale=this._strokeIgnoreScale,b._fill=this._fill,b._instructions=this._instructions.slice(),b._commitIndex=this._commitIndex,b._activeInstructions=this._activeInstructions.slice(),b._dirty=this._dirty,b._storeIndex=this._storeIndex,b},b.toString=function(){return"[Graphics]"},b.mt=b.moveTo,b.lt=b.lineTo,b.at=b.arcTo,b.bt=b.bezierCurveTo,b.qt=b.quadraticCurveTo,b.a=b.arc,b.r=b.rect,b.cp=b.closePath,b.c=b.clear,b.f=b.beginFill,b.lf=b.beginLinearGradientFill,b.rf=b.beginRadialGradientFill,b.bf=b.beginBitmapFill,b.ef=b.endFill,b.ss=b.setStrokeStyle,b.sd=b.setStrokeDash,b.s=b.beginStroke,b.ls=b.beginLinearGradientStroke,b.rs=b.beginRadialGradientStroke,b.bs=b.beginBitmapStroke,b.es=b.endStroke,b.dr=b.drawRect,b.rr=b.drawRoundRect,b.rc=b.drawRoundRectComplex,b.dc=b.drawCircle,b.de=b.drawEllipse,b.dp=b.drawPolyStar,b.p=b.decodePath,b._updateInstructions=function(b){var c=this._instructions,d=this._activeInstructions,e=this._commitIndex;if(this._dirty&&d.length){c.length=e,c.push(a.beginCmd);var f=d.length,g=c.length;c.length=g+f;for(var h=0;f>h;h++)c[h+g]=d[h];this._fill&&c.push(this._fill),this._stroke&&(this._strokeDash!==this._oldStrokeDash&&(this._oldStrokeDash=this._strokeDash,c.push(this._strokeDash)),this._strokeStyle!==this._oldStrokeStyle&&(this._oldStrokeStyle=this._strokeStyle,c.push(this._strokeStyle)),c.push(this._stroke)),this._dirty=!1}b&&(d.length=0,this._commitIndex=c.length)},b._setFill=function(a){return this._updateInstructions(!0),this.command=this._fill=a,this},b._setStroke=function(a){return this._updateInstructions(!0),(this.command=this._stroke=a)&&(a.ignoreScale=this._strokeIgnoreScale),this},(c.LineTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.lineTo(this.x,this.y)},(c.MoveTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.moveTo(this.x,this.y)},(c.ArcTo=function(a,b,c,d,e){this.x1=a,this.y1=b,this.x2=c,this.y2=d,this.radius=e}).prototype.exec=function(a){a.arcTo(this.x1,this.y1,this.x2,this.y2,this.radius)},(c.Arc=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.startAngle=d,this.endAngle=e,this.anticlockwise=!!f}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,this.anticlockwise)},(c.QuadraticCurveTo=function(a,b,c,d){this.cpx=a,this.cpy=b,this.x=c,this.y=d}).prototype.exec=function(a){a.quadraticCurveTo(this.cpx,this.cpy,this.x,this.y)},(c.BezierCurveTo=function(a,b,c,d,e,f){this.cp1x=a,this.cp1y=b,this.cp2x=c,this.cp2y=d,this.x=e,this.y=f}).prototype.exec=function(a){a.bezierCurveTo(this.cp1x,this.cp1y,this.cp2x,this.cp2y,this.x,this.y)},(c.Rect=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){a.rect(this.x,this.y,this.w,this.h)},(c.ClosePath=function(){}).prototype.exec=function(a){a.closePath()},(c.BeginPath=function(){}).prototype.exec=function(a){a.beginPath()},b=(c.Fill=function(a,b){this.style=a,this.matrix=b}).prototype,b.exec=function(a){if(this.style){a.fillStyle=this.style;var b=this.matrix;b&&(a.save(),a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty)),a.fill(),b&&a.restore()}},b.linearGradient=function(b,c,d,e,f,g){for(var h=this.style=a._ctx.createLinearGradient(d,e,f,g),i=0,j=b.length;j>i;i++)h.addColorStop(c[i],b[i]);return h.props={colors:b,ratios:c,x0:d,y0:e,x1:f,y1:g,type:"linear"},this},b.radialGradient=function(b,c,d,e,f,g,h,i){for(var j=this.style=a._ctx.createRadialGradient(d,e,f,g,h,i),k=0,l=b.length;l>k;k++)j.addColorStop(c[k],b[k]);return j.props={colors:b,ratios:c,x0:d,y0:e,r0:f,x1:g,y1:h,r1:i,type:"radial"},this},b.bitmap=function(b,c){if(b.naturalWidth||b.getContext||b.readyState>=2){var d=this.style=a._ctx.createPattern(b,c||"");d.props={image:b,repetition:c,type:"bitmap"}}return this},b.path=!1,b=(c.Stroke=function(a,b){this.style=a,this.ignoreScale=b}).prototype,b.exec=function(a){this.style&&(a.strokeStyle=this.style,this.ignoreScale&&(a.save(),a.setTransform(1,0,0,1,0,0)),a.stroke(),this.ignoreScale&&a.restore())},b.linearGradient=c.Fill.prototype.linearGradient,b.radialGradient=c.Fill.prototype.radialGradient,b.bitmap=c.Fill.prototype.bitmap,b.path=!1,b=(c.StrokeStyle=function(a,b,c,d){this.width=a,this.caps=b,this.joints=c,this.miterLimit=d}).prototype,b.exec=function(b){b.lineWidth=null==this.width?"1":this.width,b.lineCap=null==this.caps?"butt":isNaN(this.caps)?this.caps:a.STROKE_CAPS_MAP[this.caps],b.lineJoin=null==this.joints?"miter":isNaN(this.joints)?this.joints:a.STROKE_JOINTS_MAP[this.joints],b.miterLimit=null==this.miterLimit?"10":this.miterLimit},b.path=!1,(c.StrokeDash=function(a,b){this.segments=a,this.offset=b||0}).prototype.exec=function(a){a.setLineDash&&(a.setLineDash(this.segments||c.StrokeDash.EMPTY_SEGMENTS),a.lineDashOffset=this.offset||0)},c.StrokeDash.EMPTY_SEGMENTS=[],(c.RoundRect=function(a,b,c,d,e,f,g,h){this.x=a,this.y=b,this.w=c,this.h=d,this.radiusTL=e,this.radiusTR=f,this.radiusBR=g,this.radiusBL=h}).prototype.exec=function(a){var b=(j>i?i:j)/2,c=0,d=0,e=0,f=0,g=this.x,h=this.y,i=this.w,j=this.h,k=this.radiusTL,l=this.radiusTR,m=this.radiusBR,n=this.radiusBL;0>k&&(k*=c=-1),k>b&&(k=b),0>l&&(l*=d=-1),l>b&&(l=b),0>m&&(m*=e=-1),m>b&&(m=b),0>n&&(n*=f=-1),n>b&&(n=b),a.moveTo(g+i-l,h),a.arcTo(g+i+l*d,h-l*d,g+i,h+l,l),a.lineTo(g+i,h+j-m),a.arcTo(g+i+m*e,h+j+m*e,g+i-m,h+j,m),a.lineTo(g+n,h+j),a.arcTo(g-n*f,h+j+n*f,g,h+j-n,n),a.lineTo(g,h+k),a.arcTo(g-k*c,h-k*c,g+k,h,k),a.closePath()},(c.Circle=function(a,b,c){this.x=a,this.y=b,this.radius=c}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,0,2*Math.PI)},(c.Ellipse=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.w,e=this.h,f=.5522848,g=d/2*f,h=e/2*f,i=b+d,j=c+e,k=b+d/2,l=c+e/2;a.moveTo(b,l),a.bezierCurveTo(b,l-h,k-g,c,k,c),a.bezierCurveTo(k+g,c,i,l-h,i,l),a.bezierCurveTo(i,l+h,k+g,j,k,j),a.bezierCurveTo(k-g,j,b,l+h,b,l)},(c.PolyStar=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.sides=d,this.pointSize=e,this.angle=f}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.radius,e=(this.angle||0)/180*Math.PI,f=this.sides,g=1-(this.pointSize||0),h=Math.PI/f;a.moveTo(b+Math.cos(e)*d,c+Math.sin(e)*d);for(var i=0;f>i;i++)e+=h,1!=g&&a.lineTo(b+Math.cos(e)*d*g,c+Math.sin(e)*d*g),e+=h,a.lineTo(b+Math.cos(e)*d,c+Math.sin(e)*d);a.closePath()},a.beginCmd=new c.BeginPath,createjs.Graphics=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.EventDispatcher_constructor(),this.alpha=1,this.cacheCanvas=null,this.cacheID=0,this.id=createjs.UID.get(),this.mouseEnabled=!0,this.tickEnabled=!0,this.name=null,this.parent=null,this.regX=0,this.regY=0,this.rotation=0,this.scaleX=1,this.scaleY=1,this.skewX=0,this.skewY=0,this.shadow=null,this.visible=!0,this.x=0,this.y=0,this.transformMatrix=null,this.compositeOperation=null,this.snapToPixel=!0,this.filters=null,this.mask=null,this.hitArea=null,this.cursor=null,this._cacheOffsetX=0,this._cacheOffsetY=0,this._filterOffsetX=0,this._filterOffsetY=0,this._cacheScale=1,this._cacheDataURLID=0,this._cacheDataURL=null,this._props=new createjs.DisplayProps,this._rectangle=new createjs.Rectangle,this._bounds=null
	}var b=createjs.extend(a,createjs.EventDispatcher);a._MOUSE_EVENTS=["click","dblclick","mousedown","mouseout","mouseover","pressmove","pressup","rollout","rollover"],a.suppressCrossDomainErrors=!1,a._snapToPixelEnabled=!1;var c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._hitTestCanvas=c,a._hitTestContext=c.getContext("2d"),c.width=c.height=1),a._nextCacheID=1,b.getStage=function(){for(var a=this,b=createjs.Stage;a.parent;)a=a.parent;return a instanceof b?a:null};try{Object.defineProperties(b,{stage:{get:b.getStage}})}catch(d){}b.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},b.draw=function(a,b){var c=this.cacheCanvas;if(b||!c)return!1;var d=this._cacheScale;return a.drawImage(c,this._cacheOffsetX+this._filterOffsetX,this._cacheOffsetY+this._filterOffsetY,c.width/d,c.height/d),!0},b.updateContext=function(b){var c=this,d=c.mask,e=c._props.matrix;d&&d.graphics&&!d.graphics.isEmpty()&&(d.getMatrix(e),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty),d.graphics.drawAsPath(b),b.clip(),e.invert(),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty)),this.getMatrix(e);var f=e.tx,g=e.ty;a._snapToPixelEnabled&&c.snapToPixel&&(f=f+(0>f?-.5:.5)|0,g=g+(0>g?-.5:.5)|0),b.transform(e.a,e.b,e.c,e.d,f,g),b.globalAlpha*=c.alpha,c.compositeOperation&&(b.globalCompositeOperation=c.compositeOperation),c.shadow&&this._applyShadow(b,c.shadow)},b.cache=function(a,b,c,d,e){e=e||1,this.cacheCanvas||(this.cacheCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),this._cacheWidth=c,this._cacheHeight=d,this._cacheOffsetX=a,this._cacheOffsetY=b,this._cacheScale=e,this.updateCache()},b.updateCache=function(b){var c=this.cacheCanvas;if(!c)throw"cache() must be called before updateCache()";var d=this._cacheScale,e=this._cacheOffsetX*d,f=this._cacheOffsetY*d,g=this._cacheWidth,h=this._cacheHeight,i=c.getContext("2d"),j=this._getFilterBounds();e+=this._filterOffsetX=j.x,f+=this._filterOffsetY=j.y,g=Math.ceil(g*d)+j.width,h=Math.ceil(h*d)+j.height,g!=c.width||h!=c.height?(c.width=g,c.height=h):b||i.clearRect(0,0,g+1,h+1),i.save(),i.globalCompositeOperation=b,i.setTransform(d,0,0,d,-e,-f),this.draw(i,!0),this._applyFilters(),i.restore(),this.cacheID=a._nextCacheID++},b.uncache=function(){this._cacheDataURL=this.cacheCanvas=null,this.cacheID=this._cacheOffsetX=this._cacheOffsetY=this._filterOffsetX=this._filterOffsetY=0,this._cacheScale=1},b.getCacheDataURL=function(){return this.cacheCanvas?(this.cacheID!=this._cacheDataURLID&&(this._cacheDataURL=this.cacheCanvas.toDataURL()),this._cacheDataURL):null},b.localToGlobal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).transformPoint(a,b,c||new createjs.Point)},b.globalToLocal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(a,b,c||new createjs.Point)},b.localToLocal=function(a,b,c,d){return d=this.localToGlobal(a,b,d),c.globalToLocal(d.x,d.y,d)},b.setTransform=function(a,b,c,d,e,f,g,h,i){return this.x=a||0,this.y=b||0,this.scaleX=null==c?1:c,this.scaleY=null==d?1:d,this.rotation=e||0,this.skewX=f||0,this.skewY=g||0,this.regX=h||0,this.regY=i||0,this},b.getMatrix=function(a){var b=this,c=a&&a.identity()||new createjs.Matrix2D;return b.transformMatrix?c.copy(b.transformMatrix):c.appendTransform(b.x,b.y,b.scaleX,b.scaleY,b.rotation,b.skewX,b.skewY,b.regX,b.regY)},b.getConcatenatedMatrix=function(a){for(var b=this,c=this.getMatrix(a);b=b.parent;)c.prependMatrix(b.getMatrix(b._props.matrix));return c},b.getConcatenatedDisplayProps=function(a){a=a?a.identity():new createjs.DisplayProps;var b=this,c=b.getMatrix(a.matrix);do a.prepend(b.visible,b.alpha,b.shadow,b.compositeOperation),b!=this&&c.prependMatrix(b.getMatrix(b._props.matrix));while(b=b.parent);return a},b.hitTest=function(b,c){var d=a._hitTestContext;d.setTransform(1,0,0,1,-b,-c),this.draw(d);var e=this._testHit(d);return d.setTransform(1,0,0,1,0,0),d.clearRect(0,0,2,2),e},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.getBounds=function(){if(this._bounds)return this._rectangle.copy(this._bounds);var a=this.cacheCanvas;if(a){var b=this._cacheScale;return this._rectangle.setValues(this._cacheOffsetX,this._cacheOffsetY,a.width/b,a.height/b)}return null},b.getTransformedBounds=function(){return this._getBounds()},b.setBounds=function(a,b,c,d){null==a&&(this._bounds=a),this._bounds=(this._bounds||new createjs.Rectangle).setValues(a,b,c,d)},b.clone=function(){return this._cloneProps(new a)},b.toString=function(){return"[DisplayObject (name="+this.name+")]"},b._cloneProps=function(a){return a.alpha=this.alpha,a.mouseEnabled=this.mouseEnabled,a.tickEnabled=this.tickEnabled,a.name=this.name,a.regX=this.regX,a.regY=this.regY,a.rotation=this.rotation,a.scaleX=this.scaleX,a.scaleY=this.scaleY,a.shadow=this.shadow,a.skewX=this.skewX,a.skewY=this.skewY,a.visible=this.visible,a.x=this.x,a.y=this.y,a.compositeOperation=this.compositeOperation,a.snapToPixel=this.snapToPixel,a.filters=null==this.filters?null:this.filters.slice(0),a.mask=this.mask,a.hitArea=this.hitArea,a.cursor=this.cursor,a._bounds=this._bounds,a},b._applyShadow=function(a,b){b=b||Shadow.identity,a.shadowColor=b.color,a.shadowOffsetX=b.offsetX,a.shadowOffsetY=b.offsetY,a.shadowBlur=b.blur},b._tick=function(a){var b=this._listeners;b&&b.tick&&(a.target=null,a.propagationStopped=a.immediatePropagationStopped=!1,this.dispatchEvent(a))},b._testHit=function(b){try{var c=b.getImageData(0,0,1,1).data[3]>1}catch(d){if(!a.suppressCrossDomainErrors)throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."}return c},b._applyFilters=function(){if(this.filters&&0!=this.filters.length&&this.cacheCanvas)for(var a=this.filters.length,b=this.cacheCanvas.getContext("2d"),c=this.cacheCanvas.width,d=this.cacheCanvas.height,e=0;a>e;e++)this.filters[e].applyFilter(b,0,0,c,d)},b._getFilterBounds=function(){var a,b=this.filters,c=this._rectangle.setValues(0,0,0,0);if(!b||!(a=b.length))return c;for(var d=0;a>d;d++){var e=this.filters[d];e.getBounds&&e.getBounds(c)}return c},b._getBounds=function(a,b){return this._transformBounds(this.getBounds(),a,b)},b._transformBounds=function(a,b,c){if(!a)return a;var d=a.x,e=a.y,f=a.width,g=a.height,h=this._props.matrix;h=c?h.identity():this.getMatrix(h),(d||e)&&h.appendTransform(0,0,1,1,0,0,0,-d,-e),b&&h.prependMatrix(b);var i=f*h.a,j=f*h.b,k=g*h.c,l=g*h.d,m=h.tx,n=h.ty,o=m,p=m,q=n,r=n;return(d=i+m)<o?o=d:d>p&&(p=d),(d=i+k+m)<o?o=d:d>p&&(p=d),(d=k+m)<o?o=d:d>p&&(p=d),(e=j+n)<q?q=e:e>r&&(r=e),(e=j+l+n)<q?q=e:e>r&&(r=e),(e=l+n)<q?q=e:e>r&&(r=e),a.setValues(o,q,p-o,r-q)},b._hasMouseEventListener=function(){for(var b=a._MOUSE_EVENTS,c=0,d=b.length;d>c;c++)if(this.hasEventListener(b[c]))return!0;return!!this.cursor},createjs.DisplayObject=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.DisplayObject_constructor(),this.children=[],this.mouseChildren=!0,this.tickChildren=!0}var b=createjs.extend(a,createjs.DisplayObject);b.getNumChildren=function(){return this.children.length};try{Object.defineProperties(b,{numChildren:{get:b.getNumChildren}})}catch(c){}b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.children.length;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;for(var c=this.children.slice(),d=0,e=c.length;e>d;d++){var f=c[d];f.isVisible()&&(a.save(),f.updateContext(a),f.draw(a),a.restore())}return!0},b.addChild=function(a){if(null==a)return a;var b=arguments.length;if(b>1){for(var c=0;b>c;c++)this.addChild(arguments[c]);return arguments[b-1]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.push(a),a.dispatchEvent("added"),a},b.addChildAt=function(a,b){var c=arguments.length,d=arguments[c-1];if(0>d||d>this.children.length)return arguments[c-2];if(c>2){for(var e=0;c-1>e;e++)this.addChildAt(arguments[e],d+e);return arguments[c-2]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.splice(b,0,a),a.dispatchEvent("added"),a},b.removeChild=function(a){var b=arguments.length;if(b>1){for(var c=!0,d=0;b>d;d++)c=c&&this.removeChild(arguments[d]);return c}return this.removeChildAt(createjs.indexOf(this.children,a))},b.removeChildAt=function(a){var b=arguments.length;if(b>1){for(var c=[],d=0;b>d;d++)c[d]=arguments[d];c.sort(function(a,b){return b-a});for(var e=!0,d=0;b>d;d++)e=e&&this.removeChildAt(c[d]);return e}if(0>a||a>this.children.length-1)return!1;var f=this.children[a];return f&&(f.parent=null),this.children.splice(a,1),f.dispatchEvent("removed"),!0},b.removeAllChildren=function(){for(var a=this.children;a.length;)this.removeChildAt(0)},b.getChildAt=function(a){return this.children[a]},b.getChildByName=function(a){for(var b=this.children,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},b.sortChildren=function(a){this.children.sort(a)},b.getChildIndex=function(a){return createjs.indexOf(this.children,a)},b.swapChildrenAt=function(a,b){var c=this.children,d=c[a],e=c[b];d&&e&&(c[a]=e,c[b]=d)},b.swapChildren=function(a,b){for(var c,d,e=this.children,f=0,g=e.length;g>f&&(e[f]==a&&(c=f),e[f]==b&&(d=f),null==c||null==d);f++);f!=g&&(e[c]=b,e[d]=a)},b.setChildIndex=function(a,b){var c=this.children,d=c.length;if(!(a.parent!=this||0>b||b>=d)){for(var e=0;d>e&&c[e]!=a;e++);e!=d&&e!=b&&(c.splice(e,1),c.splice(b,0,a))}},b.contains=function(a){for(;a;){if(a==this)return!0;a=a.parent}return!1},b.hitTest=function(a,b){return null!=this.getObjectUnderPoint(a,b)},b.getObjectsUnderPoint=function(a,b,c){var d=[],e=this.localToGlobal(a,b);return this._getObjectsUnderPoint(e.x,e.y,d,c>0,1==c),d},b.getObjectUnderPoint=function(a,b,c){var d=this.localToGlobal(a,b);return this._getObjectsUnderPoint(d.x,d.y,null,c>0,1==c)},b.getBounds=function(){return this._getBounds(null,!0)},b.getTransformedBounds=function(){return this._getBounds()},b.clone=function(b){var c=this._cloneProps(new a);return b&&this._cloneChildren(c),c},b.toString=function(){return"[Container (name="+this.name+")]"},b._tick=function(a){if(this.tickChildren)for(var b=this.children.length-1;b>=0;b--){var c=this.children[b];c.tickEnabled&&c._tick&&c._tick(a)}this.DisplayObject__tick(a)},b._cloneChildren=function(a){a.children.length&&a.removeAllChildren();for(var b=a.children,c=0,d=this.children.length;d>c;c++){var e=this.children[c].clone(!0);e.parent=a,b.push(e)}},b._getObjectsUnderPoint=function(b,c,d,e,f,g){if(g=g||0,!g&&!this._testMask(this,b,c))return null;var h,i=createjs.DisplayObject._hitTestContext;f=f||e&&this._hasMouseEventListener();for(var j=this.children,k=j.length,l=k-1;l>=0;l--){var m=j[l],n=m.hitArea;if(m.visible&&(n||m.isVisible())&&(!e||m.mouseEnabled)&&(n||this._testMask(m,b,c)))if(!n&&m instanceof a){var o=m._getObjectsUnderPoint(b,c,d,e,f,g+1);if(!d&&o)return e&&!this.mouseChildren?this:o}else{if(e&&!f&&!m._hasMouseEventListener())continue;var p=m.getConcatenatedDisplayProps(m._props);if(h=p.matrix,n&&(h.appendMatrix(n.getMatrix(n._props.matrix)),p.alpha=n.alpha),i.globalAlpha=p.alpha,i.setTransform(h.a,h.b,h.c,h.d,h.tx-b,h.ty-c),(n||m).draw(i),!this._testHit(i))continue;if(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,2,2),!d)return e&&!this.mouseChildren?this:m;d.push(m)}}return null},b._testMask=function(a,b,c){var d=a.mask;if(!d||!d.graphics||d.graphics.isEmpty())return!0;var e=this._props.matrix,f=a.parent;e=f?f.getConcatenatedMatrix(e):e.identity(),e=d.getMatrix(d._props.matrix).prependMatrix(e);var g=createjs.DisplayObject._hitTestContext;return g.setTransform(e.a,e.b,e.c,e.d,e.tx-b,e.ty-c),d.graphics.drawAsPath(g),g.fillStyle="#000",g.fill(),this._testHit(g)?(g.setTransform(1,0,0,1,0,0),g.clearRect(0,0,2,2),!0):!1},b._getBounds=function(a,b){var c=this.DisplayObject_getBounds();if(c)return this._transformBounds(c,a,b);var d=this._props.matrix;d=b?d.identity():this.getMatrix(d),a&&d.prependMatrix(a);for(var e=this.children.length,f=null,g=0;e>g;g++){var h=this.children[g];h.visible&&(c=h._getBounds(d))&&(f?f.extend(c.x,c.y,c.width,c.height):f=c.clone())}return f},createjs.Container=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.Container_constructor(),this.autoClear=!0,this.canvas="string"==typeof a?document.getElementById(a):a,this.mouseX=0,this.mouseY=0,this.drawRect=null,this.snapToPixelEnabled=!1,this.mouseInBounds=!1,this.tickOnUpdate=!0,this.mouseMoveOutside=!1,this.preventSelection=!0,this._pointerData={},this._pointerCount=0,this._primaryPointerID=null,this._mouseOverIntervalID=null,this._nextStage=null,this._prevStage=null,this.enableDOMEvents(!0)}var b=createjs.extend(a,createjs.Container);b._get_nextStage=function(){return this._nextStage},b._set_nextStage=function(a){this._nextStage&&(this._nextStage._prevStage=null),a&&(a._prevStage=this),this._nextStage=a};try{Object.defineProperties(b,{nextStage:{get:b._get_nextStage,set:b._set_nextStage}})}catch(c){}b.update=function(a){if(this.canvas&&(this.tickOnUpdate&&this.tick(a),this.dispatchEvent("drawstart",!1,!0)!==!1)){createjs.DisplayObject._snapToPixelEnabled=this.snapToPixelEnabled;var b=this.drawRect,c=this.canvas.getContext("2d");c.setTransform(1,0,0,1,0,0),this.autoClear&&(b?c.clearRect(b.x,b.y,b.width,b.height):c.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)),c.save(),this.drawRect&&(c.beginPath(),c.rect(b.x,b.y,b.width,b.height),c.clip()),this.updateContext(c),this.draw(c,!1),c.restore(),this.dispatchEvent("drawend")}},b.tick=function(a){if(this.tickEnabled&&this.dispatchEvent("tickstart",!1,!0)!==!1){var b=new createjs.Event("tick");if(a)for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);this._tick(b),this.dispatchEvent("tickend")}},b.handleEvent=function(a){"tick"==a.type&&this.update(a)},b.clear=function(){if(this.canvas){var a=this.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)}},b.toDataURL=function(a,b){var c,d=this.canvas.getContext("2d"),e=this.canvas.width,f=this.canvas.height;if(a){c=d.getImageData(0,0,e,f);var g=d.globalCompositeOperation;d.globalCompositeOperation="destination-over",d.fillStyle=a,d.fillRect(0,0,e,f)}var h=this.canvas.toDataURL(b||"image/png");return a&&(d.putImageData(c,0,0),d.globalCompositeOperation=g),h},b.enableMouseOver=function(a){if(this._mouseOverIntervalID&&(clearInterval(this._mouseOverIntervalID),this._mouseOverIntervalID=null,0==a&&this._testMouseOver(!0)),null==a)a=20;else if(0>=a)return;var b=this;this._mouseOverIntervalID=setInterval(function(){b._testMouseOver()},1e3/Math.min(50,a))},b.enableDOMEvents=function(a){null==a&&(a=!0);var b,c,d=this._eventListeners;if(!a&&d){for(b in d)c=d[b],c.t.removeEventListener(b,c.f,!1);this._eventListeners=null}else if(a&&!d&&this.canvas){var e=window.addEventListener?window:document,f=this;d=this._eventListeners={},d.mouseup={t:e,f:function(a){f._handleMouseUp(a)}},d.mousemove={t:e,f:function(a){f._handleMouseMove(a)}},d.dblclick={t:this.canvas,f:function(a){f._handleDoubleClick(a)}},d.mousedown={t:this.canvas,f:function(a){f._handleMouseDown(a)}};for(b in d)c=d[b],c.t.addEventListener(b,c.f,!1)}},b.clone=function(){throw"Stage cannot be cloned."},b.toString=function(){return"[Stage (name="+this.name+")]"},b._getElementRect=function(a){var b;try{b=a.getBoundingClientRect()}catch(c){b={top:a.offsetTop,left:a.offsetLeft,width:a.offsetWidth,height:a.offsetHeight}}var d=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||document.body.clientLeft||0),e=(window.pageYOffset||document.scrollTop||0)-(document.clientTop||document.body.clientTop||0),f=window.getComputedStyle?getComputedStyle(a,null):a.currentStyle,g=parseInt(f.paddingLeft)+parseInt(f.borderLeftWidth),h=parseInt(f.paddingTop)+parseInt(f.borderTopWidth),i=parseInt(f.paddingRight)+parseInt(f.borderRightWidth),j=parseInt(f.paddingBottom)+parseInt(f.borderBottomWidth);return{left:b.left+d+g,right:b.right+d-i,top:b.top+e+h,bottom:b.bottom+e-j}},b._getPointerData=function(a){var b=this._pointerData[a];return b||(b=this._pointerData[a]={x:0,y:0}),b},b._handleMouseMove=function(a){a||(a=window.event),this._handlePointerMove(-1,a,a.pageX,a.pageY)},b._handlePointerMove=function(a,b,c,d,e){if((!this._prevStage||void 0!==e)&&this.canvas){var f=this._nextStage,g=this._getPointerData(a),h=g.inBounds;this._updatePointerPosition(a,b,c,d),(h||g.inBounds||this.mouseMoveOutside)&&(-1===a&&g.inBounds==!h&&this._dispatchMouseEvent(this,h?"mouseleave":"mouseenter",!1,a,g,b),this._dispatchMouseEvent(this,"stagemousemove",!1,a,g,b),this._dispatchMouseEvent(g.target,"pressmove",!0,a,g,b)),f&&f._handlePointerMove(a,b,c,d,null)}},b._updatePointerPosition=function(a,b,c,d){var e=this._getElementRect(this.canvas);c-=e.left,d-=e.top;var f=this.canvas.width,g=this.canvas.height;c/=(e.right-e.left)/f,d/=(e.bottom-e.top)/g;var h=this._getPointerData(a);(h.inBounds=c>=0&&d>=0&&f-1>=c&&g-1>=d)?(h.x=c,h.y=d):this.mouseMoveOutside&&(h.x=0>c?0:c>f-1?f-1:c,h.y=0>d?0:d>g-1?g-1:d),h.posEvtObj=b,h.rawX=c,h.rawY=d,(a===this._primaryPointerID||-1===a)&&(this.mouseX=h.x,this.mouseY=h.y,this.mouseInBounds=h.inBounds)},b._handleMouseUp=function(a){this._handlePointerUp(-1,a,!1)},b._handlePointerUp=function(a,b,c,d){var e=this._nextStage,f=this._getPointerData(a);if(!this._prevStage||void 0!==d){var g=null,h=f.target;d||!h&&!e||(g=this._getObjectsUnderPoint(f.x,f.y,null,!0)),f.down&&(this._dispatchMouseEvent(this,"stagemouseup",!1,a,f,b,g),f.down=!1),g==h&&this._dispatchMouseEvent(h,"click",!0,a,f,b),this._dispatchMouseEvent(h,"pressup",!0,a,f,b),c?(a==this._primaryPointerID&&(this._primaryPointerID=null),delete this._pointerData[a]):f.target=null,e&&e._handlePointerUp(a,b,c,d||g&&this)}},b._handleMouseDown=function(a){this._handlePointerDown(-1,a,a.pageX,a.pageY)},b._handlePointerDown=function(a,b,c,d,e){this.preventSelection&&b.preventDefault(),(null==this._primaryPointerID||-1===a)&&(this._primaryPointerID=a),null!=d&&this._updatePointerPosition(a,b,c,d);var f=null,g=this._nextStage,h=this._getPointerData(a);e||(f=h.target=this._getObjectsUnderPoint(h.x,h.y,null,!0)),h.inBounds&&(this._dispatchMouseEvent(this,"stagemousedown",!1,a,h,b,f),h.down=!0),this._dispatchMouseEvent(f,"mousedown",!0,a,h,b),g&&g._handlePointerDown(a,b,c,d,e||f&&this)},b._testMouseOver=function(a,b,c){if(!this._prevStage||void 0!==b){var d=this._nextStage;if(!this._mouseOverIntervalID)return void(d&&d._testMouseOver(a,b,c));var e=this._getPointerData(-1);if(e&&(a||this.mouseX!=this._mouseOverX||this.mouseY!=this._mouseOverY||!this.mouseInBounds)){var f,g,h,i=e.posEvtObj,j=c||i&&i.target==this.canvas,k=null,l=-1,m="";!b&&(a||this.mouseInBounds&&j)&&(k=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,!0),this._mouseOverX=this.mouseX,this._mouseOverY=this.mouseY);var n=this._mouseOverTarget||[],o=n[n.length-1],p=this._mouseOverTarget=[];for(f=k;f;)p.unshift(f),m||(m=f.cursor),f=f.parent;for(this.canvas.style.cursor=m,!b&&c&&(c.canvas.style.cursor=m),g=0,h=p.length;h>g&&p[g]==n[g];g++)l=g;for(o!=k&&this._dispatchMouseEvent(o,"mouseout",!0,-1,e,i,k),g=n.length-1;g>l;g--)this._dispatchMouseEvent(n[g],"rollout",!1,-1,e,i,k);for(g=p.length-1;g>l;g--)this._dispatchMouseEvent(p[g],"rollover",!1,-1,e,i,o);o!=k&&this._dispatchMouseEvent(k,"mouseover",!0,-1,e,i,o),d&&d._testMouseOver(a,b||k&&this,c||j&&this)}}},b._handleDoubleClick=function(a,b){var c=null,d=this._nextStage,e=this._getPointerData(-1);b||(c=this._getObjectsUnderPoint(e.x,e.y,null,!0),this._dispatchMouseEvent(c,"dblclick",!0,-1,e,a)),d&&d._handleDoubleClick(a,b||c&&this)},b._dispatchMouseEvent=function(a,b,c,d,e,f,g){if(a&&(c||a.hasEventListener(b))){var h=new createjs.MouseEvent(b,c,!1,e.x,e.y,f,d,d===this._primaryPointerID||-1===d,e.rawX,e.rawY,g);a.dispatchEvent(h)}},createjs.Stage=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){function a(a){this.DisplayObject_constructor(),"string"==typeof a?(this.image=document.createElement("img"),this.image.src=a):this.image=a,this.sourceRect=null}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.image,b=this.cacheCanvas||a&&(a.naturalWidth||a.getContext||a.readyState>=2);return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&b)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b)||!this.image)return!0;var c=this.image,d=this.sourceRect;if(d){var e=d.x,f=d.y,g=e+d.width,h=f+d.height,i=0,j=0,k=c.width,l=c.height;0>e&&(i-=e,e=0),g>k&&(g=k),0>f&&(j-=f,f=0),h>l&&(h=l),a.drawImage(c,e,f,g-e,h-f,i,j,g-e,h-f)}else a.drawImage(c,0,0);return!0},b.getBounds=function(){var a=this.DisplayObject_getBounds();if(a)return a;var b=this.image,c=this.sourceRect||b,d=b&&(b.naturalWidth||b.getContext||b.readyState>=2);return d?this._rectangle.setValues(0,0,c.width,c.height):null},b.clone=function(){var b=new a(this.image);return this.sourceRect&&(b.sourceRect=this.sourceRect.clone()),this._cloneProps(b),b},b.toString=function(){return"[Bitmap (name="+this.name+")]"},createjs.Bitmap=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.DisplayObject_constructor(),this.currentFrame=0,this.currentAnimation=null,this.paused=!0,this.spriteSheet=a,this.currentAnimationFrame=0,this.framerate=0,this._animation=null,this._currentFrame=null,this._skipAdvance=!1,null!=b&&this.gotoAndPlay(b)}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet.complete;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;this._normalizeFrame();var c=this.spriteSheet.getFrame(0|this._currentFrame);if(!c)return!1;var d=c.rect;return d.width&&d.height&&a.drawImage(c.image,d.x,d.y,d.width,d.height,-c.regX,-c.regY,d.width,d.height),!0},b.play=function(){this.paused=!1},b.stop=function(){this.paused=!0},b.gotoAndPlay=function(a){this.paused=!1,this._skipAdvance=!0,this._goto(a)},b.gotoAndStop=function(a){this.paused=!0,this._goto(a)},b.advance=function(a){var b=this.framerate||this.spriteSheet.framerate,c=b&&null!=a?a/(1e3/b):1;this._normalizeFrame(c)},b.getBounds=function(){return this.DisplayObject_getBounds()||this.spriteSheet.getFrameBounds(this.currentFrame,this._rectangle)},b.clone=function(){return this._cloneProps(new a(this.spriteSheet))},b.toString=function(){return"[Sprite (name="+this.name+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.currentFrame=this.currentFrame,a.currentAnimation=this.currentAnimation,a.paused=this.paused,a.currentAnimationFrame=this.currentAnimationFrame,a.framerate=this.framerate,a._animation=this._animation,a._currentFrame=this._currentFrame,a._skipAdvance=this._skipAdvance,a},b._tick=function(a){this.paused||(this._skipAdvance||this.advance(a&&a.delta),this._skipAdvance=!1),this.DisplayObject__tick(a)},b._normalizeFrame=function(a){a=a||0;var b,c=this._animation,d=this.paused,e=this._currentFrame;if(c){var f=c.speed||1,g=this.currentAnimationFrame;if(b=c.frames.length,g+a*f>=b){var h=c.next;if(this._dispatchAnimationEnd(c,e,d,h,b-1))return;if(h)return this._goto(h,a-(b-g)/f);this.paused=!0,g=c.frames.length-1}else g+=a*f;this.currentAnimationFrame=g,this._currentFrame=c.frames[0|g]}else if(e=this._currentFrame+=a,b=this.spriteSheet.getNumFrames(),e>=b&&b>0&&!this._dispatchAnimationEnd(c,e,d,b-1)&&(this._currentFrame-=b)>=b)return this._normalizeFrame();e=0|this._currentFrame,this.currentFrame!=e&&(this.currentFrame=e,this.dispatchEvent("change"))},b._dispatchAnimationEnd=function(a,b,c,d,e){var f=a?a.name:null;if(this.hasEventListener("animationend")){var g=new createjs.Event("animationend");g.name=f,g.next=d,this.dispatchEvent(g)}var h=this._animation!=a||this._currentFrame!=b;return h||c||!this.paused||(this.currentAnimationFrame=e,h=!0),h},b._goto=function(a,b){if(this.currentAnimationFrame=0,isNaN(a)){var c=this.spriteSheet.getAnimation(a);c&&(this._animation=c,this.currentAnimation=a,this._normalizeFrame(b))}else this.currentAnimation=this._animation=null,this._currentFrame=a,this._normalizeFrame()},createjs.Sprite=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),this.graphics=a?a:new createjs.Graphics}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){var a=this.cacheCanvas||this.graphics&&!this.graphics.isEmpty();return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this.graphics.draw(a,this),!0)},b.clone=function(b){var c=b&&this.graphics?this.graphics.clone():this.graphics;return this._cloneProps(new a(c))},b.toString=function(){return"[Shape (name="+this.name+")]"},createjs.Shape=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.DisplayObject_constructor(),this.text=a,this.font=b,this.color=c,this.textAlign="left",this.textBaseline="top",this.maxWidth=null,this.outline=0,this.lineHeight=0,this.lineWidth=null}var b=createjs.extend(a,createjs.DisplayObject),c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._workingContext=c.getContext("2d"),c.width=c.height=1),a.H_OFFSETS={start:0,left:0,center:-.5,end:-1,right:-1},a.V_OFFSETS={top:0,hanging:-.01,middle:-.4,alphabetic:-.8,ideographic:-.85,bottom:-1},b.isVisible=function(){var a=this.cacheCanvas||null!=this.text&&""!==this.text;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;var c=this.color||"#000";return this.outline?(a.strokeStyle=c,a.lineWidth=1*this.outline):a.fillStyle=c,this._drawText(this._prepContext(a)),!0},b.getMeasuredWidth=function(){return this._getMeasuredWidth(this.text)},b.getMeasuredLineHeight=function(){return 1.2*this._getMeasuredWidth("M")},b.getMeasuredHeight=function(){return this._drawText(null,{}).height},b.getBounds=function(){var b=this.DisplayObject_getBounds();if(b)return b;if(null==this.text||""===this.text)return null;var c=this._drawText(null,{}),d=this.maxWidth&&this.maxWidth<c.width?this.maxWidth:c.width,e=d*a.H_OFFSETS[this.textAlign||"left"],f=this.lineHeight||this.getMeasuredLineHeight(),g=f*a.V_OFFSETS[this.textBaseline||"top"];return this._rectangle.setValues(e,g,d,c.height)},b.getMetrics=function(){var b={lines:[]};return b.lineHeight=this.lineHeight||this.getMeasuredLineHeight(),b.vOffset=b.lineHeight*a.V_OFFSETS[this.textBaseline||"top"],this._drawText(null,b,b.lines)},b.clone=function(){return this._cloneProps(new a(this.text,this.font,this.color))},b.toString=function(){return"[Text (text="+(this.text.length>20?this.text.substr(0,17)+"...":this.text)+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.textAlign=this.textAlign,a.textBaseline=this.textBaseline,a.maxWidth=this.maxWidth,a.outline=this.outline,a.lineHeight=this.lineHeight,a.lineWidth=this.lineWidth,a},b._prepContext=function(a){return a.font=this.font||"10px sans-serif",a.textAlign=this.textAlign||"left",a.textBaseline=this.textBaseline||"top",a},b._drawText=function(b,c,d){var e=!!b;e||(b=a._workingContext,b.save(),this._prepContext(b));for(var f=this.lineHeight||this.getMeasuredLineHeight(),g=0,h=0,i=String(this.text).split(/(?:\r\n|\r|\n)/),j=0,k=i.length;k>j;j++){var l=i[j],m=null;if(null!=this.lineWidth&&(m=b.measureText(l).width)>this.lineWidth){var n=l.split(/(\s)/);l=n[0],m=b.measureText(l).width;for(var o=1,p=n.length;p>o;o+=2){var q=b.measureText(n[o]+n[o+1]).width;m+q>this.lineWidth?(e&&this._drawTextLine(b,l,h*f),d&&d.push(l),m>g&&(g=m),l=n[o+1],m=b.measureText(l).width,h++):(l+=n[o]+n[o+1],m+=q)}}e&&this._drawTextLine(b,l,h*f),d&&d.push(l),c&&null==m&&(m=b.measureText(l).width),m>g&&(g=m),h++}return c&&(c.width=g,c.height=h*f),e||b.restore(),c},b._drawTextLine=function(a,b,c){this.outline?a.strokeText(b,0,c,this.maxWidth||65535):a.fillText(b,0,c,this.maxWidth||65535)},b._getMeasuredWidth=function(b){var c=a._workingContext;c.save();var d=this._prepContext(c).measureText(b).width;return c.restore(),d},createjs.Text=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.Container_constructor(),this.text=a||"",this.spriteSheet=b,this.lineHeight=0,this.letterSpacing=0,this.spaceWidth=0,this._oldProps={text:0,spriteSheet:0,lineHeight:0,letterSpacing:0,spaceWidth:0}}var b=createjs.extend(a,createjs.Container);a.maxPoolSize=100,a._spritePool=[],b.draw=function(a,b){this.DisplayObject_draw(a,b)||(this._updateText(),this.Container_draw(a,b))},b.getBounds=function(){return this._updateText(),this.Container_getBounds()},b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet&&this.spriteSheet.complete&&this.text;return!!(this.visible&&this.alpha>0&&0!==this.scaleX&&0!==this.scaleY&&a)},b.clone=function(){return this._cloneProps(new a(this.text,this.spriteSheet))},b.addChild=b.addChildAt=b.removeChild=b.removeChildAt=b.removeAllChildren=function(){},b._cloneProps=function(a){return this.Container__cloneProps(a),a.lineHeight=this.lineHeight,a.letterSpacing=this.letterSpacing,a.spaceWidth=this.spaceWidth,a},b._getFrameIndex=function(a,b){var c,d=b.getAnimation(a);return d||(a!=(c=a.toUpperCase())||a!=(c=a.toLowerCase())||(c=null),c&&(d=b.getAnimation(c))),d&&d.frames[0]},b._getFrame=function(a,b){var c=this._getFrameIndex(a,b);return null==c?c:b.getFrame(c)},b._getLineHeight=function(a){var b=this._getFrame("1",a)||this._getFrame("T",a)||this._getFrame("L",a)||a.getFrame(0);return b?b.rect.height:1},b._getSpaceWidth=function(a){var b=this._getFrame("1",a)||this._getFrame("l",a)||this._getFrame("e",a)||this._getFrame("a",a)||a.getFrame(0);return b?b.rect.width:1},b._updateText=function(){var b,c=0,d=0,e=this._oldProps,f=!1,g=this.spaceWidth,h=this.lineHeight,i=this.spriteSheet,j=a._spritePool,k=this.children,l=0,m=k.length;for(var n in e)e[n]!=this[n]&&(e[n]=this[n],f=!0);if(f){var o=!!this._getFrame(" ",i);o||g||(g=this._getSpaceWidth(i)),h||(h=this._getLineHeight(i));for(var p=0,q=this.text.length;q>p;p++){var r=this.text.charAt(p);if(" "!=r||o)if("\n"!=r&&"\r"!=r){var s=this._getFrameIndex(r,i);null!=s&&(m>l?b=k[l]:(k.push(b=j.length?j.pop():new createjs.Sprite),b.parent=this,m++),b.spriteSheet=i,b.gotoAndStop(s),b.x=c,b.y=d,l++,c+=b.getBounds().width+this.letterSpacing)}else"\r"==r&&"\n"==this.text.charAt(p+1)&&p++,c=0,d+=h;else c+=g}for(;m>l;)j.push(b=k.pop()),b.parent=null,m--;j.length>a.maxPoolSize&&(j.length=a.maxPoolSize)}},createjs.BitmapText=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"SpriteSheetUtils cannot be instantiated"}var b=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");b.getContext&&(a._workingCanvas=b,a._workingContext=b.getContext("2d"),b.width=b.height=1),a.addFlippedFrames=function(b,c,d,e){if(c||d||e){var f=0;c&&a._flip(b,++f,!0,!1),d&&a._flip(b,++f,!1,!0),e&&a._flip(b,++f,!0,!0)}},a.extractFrame=function(b,c){isNaN(c)&&(c=b.getAnimation(c).frames[0]);var d=b.getFrame(c);if(!d)return null;var e=d.rect,f=a._workingCanvas;f.width=e.width,f.height=e.height,a._workingContext.drawImage(d.image,e.x,e.y,e.width,e.height,0,0,e.width,e.height);var g=document.createElement("img");return g.src=f.toDataURL("image/png"),g},a.mergeAlpha=function(a,b,c){c||(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),c.width=Math.max(b.width,a.width),c.height=Math.max(b.height,a.height);var d=c.getContext("2d");return d.save(),d.drawImage(a,0,0),d.globalCompositeOperation="destination-in",d.drawImage(b,0,0),d.restore(),c},a._flip=function(b,c,d,e){for(var f=b._images,g=a._workingCanvas,h=a._workingContext,i=f.length/c,j=0;i>j;j++){var k=f[j];k.__tmp=j,h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,g.width+1,g.height+1),g.width=k.width,g.height=k.height,h.setTransform(d?-1:1,0,0,e?-1:1,d?k.width:0,e?k.height:0),h.drawImage(k,0,0);
	var l=document.createElement("img");l.src=g.toDataURL("image/png"),l.width=k.width,l.height=k.height,f.push(l)}var m=b._frames,n=m.length/c;for(j=0;n>j;j++){k=m[j];var o=k.rect.clone();l=f[k.image.__tmp+i*c];var p={image:l,rect:o,regX:k.regX,regY:k.regY};d&&(o.x=l.width-o.x-o.width,p.regX=o.width-k.regX),e&&(o.y=l.height-o.y-o.height,p.regY=o.height-k.regY),m.push(p)}var q="_"+(d?"h":"")+(e?"v":""),r=b._animations,s=b._data,t=r.length/c;for(j=0;t>j;j++){var u=r[j];k=s[u];var v={name:u+q,speed:k.speed,next:k.next,frames:[]};k.next&&(v.next+=q),m=k.frames;for(var w=0,x=m.length;x>w;w++)v.frames.push(m[w]+n*c);s[v.name]=v,r.push(v.name)}},createjs.SpriteSheetUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.EventDispatcher_constructor(),this.maxWidth=2048,this.maxHeight=2048,this.spriteSheet=null,this.scale=1,this.padding=1,this.timeSlice=.3,this.progress=-1,this._frames=[],this._animations={},this._data=null,this._nextFrameIndex=0,this._index=0,this._timerID=null,this._scale=1}var b=createjs.extend(a,createjs.EventDispatcher);a.ERR_DIMENSIONS="frame dimensions exceed max spritesheet dimensions",a.ERR_RUNNING="a build is already running",b.addFrame=function(b,c,d,e,f){if(this._data)throw a.ERR_RUNNING;var g=c||b.bounds||b.nominalBounds;return!g&&b.getBounds&&(g=b.getBounds()),g?(d=d||1,this._frames.push({source:b,sourceRect:g,scale:d,funct:e,data:f,index:this._frames.length,height:g.height*d})-1):null},b.addAnimation=function(b,c,d,e){if(this._data)throw a.ERR_RUNNING;this._animations[b]={frames:c,next:d,frequency:e}},b.addMovieClip=function(b,c,d,e,f,g){if(this._data)throw a.ERR_RUNNING;var h=b.frameBounds,i=c||b.bounds||b.nominalBounds;if(!i&&b.getBounds&&(i=b.getBounds()),i||h){var j,k,l=this._frames.length,m=b.timeline.duration;for(j=0;m>j;j++){var n=h&&h[j]?h[j]:i;this.addFrame(b,n,d,this._setupMovieClipFrame,{i:j,f:e,d:f})}var o=b.timeline._labels,p=[];for(var q in o)p.push({index:o[q],label:q});if(p.length)for(p.sort(function(a,b){return a.index-b.index}),j=0,k=p.length;k>j;j++){for(var r=p[j].label,s=l+p[j].index,t=l+(j==k-1?m:p[j+1].index),u=[],v=s;t>v;v++)u.push(v);(!g||(r=g(r,b,s,t)))&&this.addAnimation(r,u,!0)}}},b.build=function(){if(this._data)throw a.ERR_RUNNING;for(this._startBuild();this._drawNext(););return this._endBuild(),this.spriteSheet},b.buildAsync=function(b){if(this._data)throw a.ERR_RUNNING;this.timeSlice=b,this._startBuild();var c=this;this._timerID=setTimeout(function(){c._run()},50-50*Math.max(.01,Math.min(.99,this.timeSlice||.3)))},b.stopAsync=function(){clearTimeout(this._timerID),this._data=null},b.clone=function(){throw"SpriteSheetBuilder cannot be cloned."},b.toString=function(){return"[SpriteSheetBuilder]"},b._startBuild=function(){var b=this.padding||0;this.progress=0,this.spriteSheet=null,this._index=0,this._scale=this.scale;var c=[];this._data={images:[],frames:c,animations:this._animations};var d=this._frames.slice();if(d.sort(function(a,b){return a.height<=b.height?-1:1}),d[d.length-1].height+2*b>this.maxHeight)throw a.ERR_DIMENSIONS;for(var e=0,f=0,g=0;d.length;){var h=this._fillRow(d,e,g,c,b);if(h.w>f&&(f=h.w),e+=h.h,!h.h||!d.length){var i=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");i.width=this._getSize(f,this.maxWidth),i.height=this._getSize(e,this.maxHeight),this._data.images[g]=i,h.h||(f=e=0,g++)}}},b._setupMovieClipFrame=function(a,b){var c=a.actionsEnabled;a.actionsEnabled=!1,a.gotoAndStop(b.i),a.actionsEnabled=c,b.f&&b.f(a,b.d,b.i)},b._getSize=function(a,b){for(var c=4;Math.pow(2,++c)<a;);return Math.min(b,Math.pow(2,c))},b._fillRow=function(b,c,d,e,f){var g=this.maxWidth,h=this.maxHeight;c+=f;for(var i=h-c,j=f,k=0,l=b.length-1;l>=0;l--){var m=b[l],n=this._scale*m.scale,o=m.sourceRect,p=m.source,q=Math.floor(n*o.x-f),r=Math.floor(n*o.y-f),s=Math.ceil(n*o.height+2*f),t=Math.ceil(n*o.width+2*f);if(t>g)throw a.ERR_DIMENSIONS;s>i||j+t>g||(m.img=d,m.rect=new createjs.Rectangle(j,c,t,s),k=k||s,b.splice(l,1),e[m.index]=[j,c,t,s,d,Math.round(-q+n*p.regX-f),Math.round(-r+n*p.regY-f)],j+=t)}return{w:j,h:k}},b._endBuild=function(){this.spriteSheet=new createjs.SpriteSheet(this._data),this._data=null,this.progress=1,this.dispatchEvent("complete")},b._run=function(){for(var a=50*Math.max(.01,Math.min(.99,this.timeSlice||.3)),b=(new Date).getTime()+a,c=!1;b>(new Date).getTime();)if(!this._drawNext()){c=!0;break}if(c)this._endBuild();else{var d=this;this._timerID=setTimeout(function(){d._run()},50-a)}var e=this.progress=this._index/this._frames.length;if(this.hasEventListener("progress")){var f=new createjs.Event("progress");f.progress=e,this.dispatchEvent(f)}},b._drawNext=function(){var a=this._frames[this._index],b=a.scale*this._scale,c=a.rect,d=a.sourceRect,e=this._data.images[a.img],f=e.getContext("2d");return a.funct&&a.funct(a.source,a.data),f.save(),f.beginPath(),f.rect(c.x,c.y,c.width,c.height),f.clip(),f.translate(Math.ceil(c.x-d.x*b),Math.ceil(c.y-d.y*b)),f.scale(b,b),a.source.draw(f),f.restore(),++this._index<this._frames.length},createjs.SpriteSheetBuilder=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),"string"==typeof a&&(a=document.getElementById(a)),this.mouseEnabled=!1;var b=a.style;b.position="absolute",b.transformOrigin=b.WebkitTransformOrigin=b.msTransformOrigin=b.MozTransformOrigin=b.OTransformOrigin="0% 0%",this.htmlElement=a,this._oldProps=null}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){return null!=this.htmlElement},b.draw=function(){return!0},b.cache=function(){},b.uncache=function(){},b.updateCache=function(){},b.hitTest=function(){},b.localToGlobal=function(){},b.globalToLocal=function(){},b.localToLocal=function(){},b.clone=function(){throw"DOMElement cannot be cloned."},b.toString=function(){return"[DOMElement (name="+this.name+")]"},b._tick=function(a){var b=this.getStage();b&&b.on("drawend",this._handleDrawEnd,this,!0),this.DisplayObject__tick(a)},b._handleDrawEnd=function(){var a=this.htmlElement;if(a){var b=a.style,c=this.getConcatenatedDisplayProps(this._props),d=c.matrix,e=c.visible?"visible":"hidden";if(e!=b.visibility&&(b.visibility=e),c.visible){var f=this._oldProps,g=f&&f.matrix,h=1e4;if(!g||!g.equals(d)){var i="matrix("+(d.a*h|0)/h+","+(d.b*h|0)/h+","+(d.c*h|0)/h+","+(d.d*h|0)/h+","+(d.tx+.5|0);b.transform=b.WebkitTransform=b.OTransform=b.msTransform=i+","+(d.ty+.5|0)+")",b.MozTransform=i+"px,"+(d.ty+.5|0)+"px)",f||(f=this._oldProps=new createjs.DisplayProps(!0,0/0)),f.matrix.copy(d)}f.alpha!=c.alpha&&(b.opacity=""+(c.alpha*h|0)/h,f.alpha=c.alpha)}}},createjs.DOMElement=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){}var b=a.prototype;b.getBounds=function(a){return a},b.applyFilter=function(a,b,c,d,e,f,g,h){f=f||a,null==g&&(g=b),null==h&&(h=c);try{var i=a.getImageData(b,c,d,e)}catch(j){return!1}return this._applyFilter(i)?(f.putImageData(i,g,h),!0):!1},b.toString=function(){return"[Filter]"},b.clone=function(){return new a},b._applyFilter=function(){return!0},createjs.Filter=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){(isNaN(a)||0>a)&&(a=0),(isNaN(b)||0>b)&&(b=0),(isNaN(c)||1>c)&&(c=1),this.blurX=0|a,this.blurY=0|b,this.quality=0|c}var b=createjs.extend(a,createjs.Filter);a.MUL_TABLE=[1,171,205,293,57,373,79,137,241,27,391,357,41,19,283,265,497,469,443,421,25,191,365,349,335,161,155,149,9,278,269,261,505,245,475,231,449,437,213,415,405,395,193,377,369,361,353,345,169,331,325,319,313,307,301,37,145,285,281,69,271,267,263,259,509,501,493,243,479,118,465,459,113,446,55,435,429,423,209,413,51,403,199,393,97,3,379,375,371,367,363,359,355,351,347,43,85,337,333,165,327,323,5,317,157,311,77,305,303,75,297,294,73,289,287,71,141,279,277,275,68,135,67,133,33,262,260,129,511,507,503,499,495,491,61,121,481,477,237,235,467,232,115,457,227,451,7,445,221,439,218,433,215,427,425,211,419,417,207,411,409,203,202,401,399,396,197,49,389,387,385,383,95,189,47,187,93,185,23,183,91,181,45,179,89,177,11,175,87,173,345,343,341,339,337,21,167,83,331,329,327,163,81,323,321,319,159,79,315,313,39,155,309,307,153,305,303,151,75,299,149,37,295,147,73,291,145,289,287,143,285,71,141,281,35,279,139,69,275,137,273,17,271,135,269,267,133,265,33,263,131,261,130,259,129,257,1],a.SHG_TABLE=[0,9,10,11,9,12,10,11,12,9,13,13,10,9,13,13,14,14,14,14,10,13,14,14,14,13,13,13,9,14,14,14,15,14,15,14,15,15,14,15,15,15,14,15,15,15,15,15,14,15,15,15,15,15,15,12,14,15,15,13,15,15,15,15,16,16,16,15,16,14,16,16,14,16,13,16,16,16,15,16,13,16,15,16,14,9,16,16,16,16,16,16,16,16,16,13,14,16,16,15,16,16,10,16,15,16,14,16,16,14,16,16,14,16,16,14,15,16,16,16,14,15,14,15,13,16,16,15,17,17,17,17,17,17,14,15,17,17,16,16,17,16,15,17,16,17,11,17,16,17,16,17,16,17,17,16,17,17,16,17,17,16,16,17,17,17,16,14,17,17,17,17,15,16,14,16,15,16,13,16,15,16,14,16,15,16,12,16,15,16,17,17,17,17,17,13,16,15,17,17,17,16,15,17,17,17,16,15,17,17,14,16,17,17,16,17,17,16,15,17,16,14,17,16,15,17,16,17,17,16,17,15,16,17,14,17,16,15,17,16,17,13,17,16,17,17,16,17,14,17,16,17,16,17,16,17,9],b.getBounds=function(a){var b=0|this.blurX,c=0|this.blurY;if(0>=b&&0>=c)return a;var d=Math.pow(this.quality,.2);return(a||new createjs.Rectangle).pad(b*d+1,c*d+1,b*d+1,c*d+1)},b.clone=function(){return new a(this.blurX,this.blurY,this.quality)},b.toString=function(){return"[BlurFilter]"},b._applyFilter=function(b){var c=this.blurX>>1;if(isNaN(c)||0>c)return!1;var d=this.blurY>>1;if(isNaN(d)||0>d)return!1;if(0==c&&0==d)return!1;var e=this.quality;(isNaN(e)||1>e)&&(e=1),e|=0,e>3&&(e=3),1>e&&(e=1);var f=b.data,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=c+c+1|0,w=d+d+1|0,x=0|b.width,y=0|b.height,z=x-1|0,A=y-1|0,B=c+1|0,C=d+1|0,D={r:0,b:0,g:0,a:0},E=D;for(i=1;v>i;i++)E=E.n={r:0,b:0,g:0,a:0};E.n=D;var F={r:0,b:0,g:0,a:0},G=F;for(i=1;w>i;i++)G=G.n={r:0,b:0,g:0,a:0};G.n=F;for(var H=null,I=0|a.MUL_TABLE[c],J=0|a.SHG_TABLE[c],K=0|a.MUL_TABLE[d],L=0|a.SHG_TABLE[d];e-->0;){m=l=0;var M=I,N=J;for(h=y;--h>-1;){for(n=B*(r=f[0|l]),o=B*(s=f[l+1|0]),p=B*(t=f[l+2|0]),q=B*(u=f[l+3|0]),E=D,i=B;--i>-1;)E.r=r,E.g=s,E.b=t,E.a=u,E=E.n;for(i=1;B>i;i++)j=l+((i>z?z:i)<<2)|0,n+=E.r=f[j],o+=E.g=f[j+1],p+=E.b=f[j+2],q+=E.a=f[j+3],E=E.n;for(H=D,g=0;x>g;g++)f[l++]=n*M>>>N,f[l++]=o*M>>>N,f[l++]=p*M>>>N,f[l++]=q*M>>>N,j=m+((j=g+c+1)<z?j:z)<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n;m+=x}for(M=K,N=L,g=0;x>g;g++){for(l=g<<2|0,n=C*(r=f[l])|0,o=C*(s=f[l+1|0])|0,p=C*(t=f[l+2|0])|0,q=C*(u=f[l+3|0])|0,G=F,i=0;C>i;i++)G.r=r,G.g=s,G.b=t,G.a=u,G=G.n;for(k=x,i=1;d>=i;i++)l=k+g<<2,n+=G.r=f[l],o+=G.g=f[l+1],p+=G.b=f[l+2],q+=G.a=f[l+3],G=G.n,A>i&&(k+=x);if(l=g,H=F,e>0)for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(f[j]=n*M>>>N,f[j+1]=o*M>>>N,f[j+2]=p*M>>>N):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x;else for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(u=255/u,f[j]=(n*M>>>N)*u,f[j+1]=(o*M>>>N)*u,f[j+2]=(p*M>>>N)*u):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x}}return!0},createjs.BlurFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.alphaMap=a,this._alphaMap=null,this._mapData=null}var b=createjs.extend(a,createjs.Filter);b.clone=function(){var b=new a(this.alphaMap);return b._alphaMap=this._alphaMap,b._mapData=this._mapData,b},b.toString=function(){return"[AlphaMapFilter]"},b._applyFilter=function(a){if(!this.alphaMap)return!0;if(!this._prepAlphaMap())return!1;for(var b=a.data,c=this._mapData,d=0,e=b.length;e>d;d+=4)b[d+3]=c[d]||0;return!0},b._prepAlphaMap=function(){if(!this.alphaMap)return!1;if(this.alphaMap==this._alphaMap&&this._mapData)return!0;this._mapData=null;var a,b=this._alphaMap=this.alphaMap,c=b;b instanceof HTMLCanvasElement?a=c.getContext("2d"):(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"),c.width=b.width,c.height=b.height,a=c.getContext("2d"),a.drawImage(b,0,0));try{var d=a.getImageData(0,0,b.width,b.height)}catch(e){return!1}return this._mapData=d.data,!0},createjs.AlphaMapFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.mask=a}var b=createjs.extend(a,createjs.Filter);b.applyFilter=function(a,b,c,d,e,f,g,h){return this.mask?(f=f||a,null==g&&(g=b),null==h&&(h=c),f.save(),a!=f?!1:(f.globalCompositeOperation="destination-in",f.drawImage(this.mask,g,h),f.restore(),!0)):!0},b.clone=function(){return new a(this.mask)},b.toString=function(){return"[AlphaMaskFilter]"},createjs.AlphaMaskFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h){this.redMultiplier=null!=a?a:1,this.greenMultiplier=null!=b?b:1,this.blueMultiplier=null!=c?c:1,this.alphaMultiplier=null!=d?d:1,this.redOffset=e||0,this.greenOffset=f||0,this.blueOffset=g||0,this.alphaOffset=h||0}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorFilter]"},b.clone=function(){return new a(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset)},b._applyFilter=function(a){for(var b=a.data,c=b.length,d=0;c>d;d+=4)b[d]=b[d]*this.redMultiplier+this.redOffset,b[d+1]=b[d+1]*this.greenMultiplier+this.greenOffset,b[d+2]=b[d+2]*this.blueMultiplier+this.blueOffset,b[d+3]=b[d+3]*this.alphaMultiplier+this.alphaOffset;return!0},createjs.ColorFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setColor(a,b,c,d)}var b=a.prototype;a.DELTA_INDEX=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10],a.IDENTITY_MATRIX=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],a.LENGTH=a.IDENTITY_MATRIX.length,b.setColor=function(a,b,c,d){return this.reset().adjustColor(a,b,c,d)},b.reset=function(){return this.copy(a.IDENTITY_MATRIX)},b.adjustColor=function(a,b,c,d){return this.adjustHue(d),this.adjustContrast(b),this.adjustBrightness(a),this.adjustSaturation(c)},b.adjustBrightness=function(a){return 0==a||isNaN(a)?this:(a=this._cleanValue(a,255),this._multiplyMatrix([1,0,0,0,a,0,1,0,0,a,0,0,1,0,a,0,0,0,1,0,0,0,0,0,1]),this)},b.adjustContrast=function(b){if(0==b||isNaN(b))return this;b=this._cleanValue(b,100);var c;return 0>b?c=127+b/100*127:(c=b%1,c=0==c?a.DELTA_INDEX[b]:a.DELTA_INDEX[b<<0]*(1-c)+a.DELTA_INDEX[(b<<0)+1]*c,c=127*c+127),this._multiplyMatrix([c/127,0,0,0,.5*(127-c),0,c/127,0,0,.5*(127-c),0,0,c/127,0,.5*(127-c),0,0,0,1,0,0,0,0,0,1]),this},b.adjustSaturation=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,100);var b=1+(a>0?3*a/100:a/100),c=.3086,d=.6094,e=.082;return this._multiplyMatrix([c*(1-b)+b,d*(1-b),e*(1-b),0,0,c*(1-b),d*(1-b)+b,e*(1-b),0,0,c*(1-b),d*(1-b),e*(1-b)+b,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.adjustHue=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,180)/180*Math.PI;var b=Math.cos(a),c=Math.sin(a),d=.213,e=.715,f=.072;return this._multiplyMatrix([d+b*(1-d)+c*-d,e+b*-e+c*-e,f+b*-f+c*(1-f),0,0,d+b*-d+.143*c,e+b*(1-e)+.14*c,f+b*-f+c*-.283,0,0,d+b*-d+c*-(1-d),e+b*-e+c*e,f+b*(1-f)+c*f,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.concat=function(b){return b=this._fixMatrix(b),b.length!=a.LENGTH?this:(this._multiplyMatrix(b),this)},b.clone=function(){return(new a).copy(this)},b.toArray=function(){for(var b=[],c=0,d=a.LENGTH;d>c;c++)b[c]=this[c];return b},b.copy=function(b){for(var c=a.LENGTH,d=0;c>d;d++)this[d]=b[d];return this},b.toString=function(){return"[ColorMatrix]"},b._multiplyMatrix=function(a){var b,c,d,e=[];for(b=0;5>b;b++){for(c=0;5>c;c++)e[c]=this[c+5*b];for(c=0;5>c;c++){var f=0;for(d=0;5>d;d++)f+=a[c+5*d]*e[d];this[c+5*b]=f}}},b._cleanValue=function(a,b){return Math.min(b,Math.max(-b,a))},b._fixMatrix=function(b){return b instanceof a&&(b=b.toArray()),b.length<a.LENGTH?b=b.slice(0,b.length).concat(a.IDENTITY_MATRIX.slice(b.length,a.LENGTH)):b.length>a.LENGTH&&(b=b.slice(0,a.LENGTH)),b},createjs.ColorMatrix=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.matrix=a}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorMatrixFilter]"},b.clone=function(){return new a(this.matrix)},b._applyFilter=function(a){for(var b,c,d,e,f=a.data,g=f.length,h=this.matrix,i=h[0],j=h[1],k=h[2],l=h[3],m=h[4],n=h[5],o=h[6],p=h[7],q=h[8],r=h[9],s=h[10],t=h[11],u=h[12],v=h[13],w=h[14],x=h[15],y=h[16],z=h[17],A=h[18],B=h[19],C=0;g>C;C+=4)b=f[C],c=f[C+1],d=f[C+2],e=f[C+3],f[C]=b*i+c*j+d*k+e*l+m,f[C+1]=b*n+c*o+d*p+e*q+r,f[C+2]=b*s+c*t+d*u+e*v+w,f[C+3]=b*x+c*y+d*z+e*A+B;return!0},createjs.ColorMatrixFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Touch cannot be instantiated"}a.isSupported=function(){return!!("ontouchstart"in window||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0)},a.enable=function(b,c,d){return b&&b.canvas&&a.isSupported()?b.__touch?!0:(b.__touch={pointers:{},multitouch:!c,preventDefault:!d,count:0},"ontouchstart"in window?a._IOS_enable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_enable(b),!0):!1},a.disable=function(b){b&&("ontouchstart"in window?a._IOS_disable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_disable(b),delete b.__touch)},a._IOS_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IOS_handleEvent(b,c)};c.addEventListener("touchstart",d,!1),c.addEventListener("touchmove",d,!1),c.addEventListener("touchend",d,!1),c.addEventListener("touchcancel",d,!1)},a._IOS_disable=function(a){var b=a.canvas;if(b){var c=a.__touch.f;b.removeEventListener("touchstart",c,!1),b.removeEventListener("touchmove",c,!1),b.removeEventListener("touchend",c,!1),b.removeEventListener("touchcancel",c,!1)}},a._IOS_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();for(var c=b.changedTouches,d=b.type,e=0,f=c.length;f>e;e++){var g=c[e],h=g.identifier;g.target==a.canvas&&("touchstart"==d?this._handleStart(a,h,b,g.pageX,g.pageY):"touchmove"==d?this._handleMove(a,h,b,g.pageX,g.pageY):("touchend"==d||"touchcancel"==d)&&this._handleEnd(a,h,b))}}},a._IE_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IE_handleEvent(b,c)};void 0===window.navigator.pointerEnabled?(c.addEventListener("MSPointerDown",d,!1),window.addEventListener("MSPointerMove",d,!1),window.addEventListener("MSPointerUp",d,!1),window.addEventListener("MSPointerCancel",d,!1),b.__touch.preventDefault&&(c.style.msTouchAction="none")):(c.addEventListener("pointerdown",d,!1),window.addEventListener("pointermove",d,!1),window.addEventListener("pointerup",d,!1),window.addEventListener("pointercancel",d,!1),b.__touch.preventDefault&&(c.style.touchAction="none")),b.__touch.activeIDs={}},a._IE_disable=function(a){var b=a.__touch.f;void 0===window.navigator.pointerEnabled?(window.removeEventListener("MSPointerMove",b,!1),window.removeEventListener("MSPointerUp",b,!1),window.removeEventListener("MSPointerCancel",b,!1),a.canvas&&a.canvas.removeEventListener("MSPointerDown",b,!1)):(window.removeEventListener("pointermove",b,!1),window.removeEventListener("pointerup",b,!1),window.removeEventListener("pointercancel",b,!1),a.canvas&&a.canvas.removeEventListener("pointerdown",b,!1))},a._IE_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();var c=b.type,d=b.pointerId,e=a.__touch.activeIDs;if("MSPointerDown"==c||"pointerdown"==c){if(b.srcElement!=a.canvas)return;e[d]=!0,this._handleStart(a,d,b,b.pageX,b.pageY)}else e[d]&&("MSPointerMove"==c||"pointermove"==c?this._handleMove(a,d,b,b.pageX,b.pageY):("MSPointerUp"==c||"MSPointerCancel"==c||"pointerup"==c||"pointercancel"==c)&&(delete e[d],this._handleEnd(a,d,b)))}},a._handleStart=function(a,b,c,d,e){var f=a.__touch;if(f.multitouch||!f.count){var g=f.pointers;g[b]||(g[b]=!0,f.count++,a._handlePointerDown(b,c,d,e))}},a._handleMove=function(a,b,c,d,e){a.__touch.pointers[b]&&a._handlePointerMove(b,c,d,e)},a._handleEnd=function(a,b,c){var d=a.__touch,e=d.pointers;e[b]&&(d.count--,a._handlePointerUp(b,c,!0),delete e[b])},createjs.Touch=a}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.EaselJS=createjs.EaselJS||{};a.version="0.8.1",a.buildDate="Thu, 21 May 2015 16:17:39 GMT"}();
	/*!
	* @license EaselJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	this.createjs=this.createjs||{},function(){"use strict";function a(b,c,d,e){this.Container_constructor(),!a.inited&&a.init(),this.mode=b||a.INDEPENDENT,this.startPosition=c||0,this.loop=d,this.currentFrame=0,this.timeline=new createjs.Timeline(null,e,{paused:!0,position:c,useTicks:!0}),this.paused=!1,this.actionsEnabled=!0,this.autoReset=!0,this.frameBounds=this.frameBounds||null,this.framerate=null,this._synchOffset=0,this._prevPos=-1,this._prevPosition=0,this._t=0,this._managed={}}function b(){throw"MovieClipPlugin cannot be instantiated."}var c=createjs.extend(a,createjs.Container);a.INDEPENDENT="independent",a.SINGLE_FRAME="single",a.SYNCHED="synched",a.inited=!1,a.init=function(){a.inited||(b.install(),a.inited=!0)},c.getLabels=function(){return this.timeline.getLabels()},c.getCurrentLabel=function(){return this._updateTimeline(),this.timeline.getCurrentLabel()},c.getDuration=function(){return this.timeline.duration};try{Object.defineProperties(c,{labels:{get:c.getLabels},currentLabel:{get:c.getCurrentLabel},totalFrames:{get:c.getDuration},duration:{get:c.getDuration}})}catch(d){}c.initialize=a,c.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},c.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this._updateTimeline(),this.Container_draw(a,b),!0)},c.play=function(){this.paused=!1},c.stop=function(){this.paused=!0},c.gotoAndPlay=function(a){this.paused=!1,this._goto(a)},c.gotoAndStop=function(a){this.paused=!0,this._goto(a)},c.advance=function(b){var c=a.INDEPENDENT;if(this.mode==c){for(var d=this,e=d.framerate;(d=d.parent)&&null==e;)d.mode==c&&(e=d._framerate);this._framerate=e;var f=null!=e&&-1!=e&&null!=b?b/(1e3/e)+this._t:1,g=0|f;for(this._t=f-g;!this.paused&&g--;)this._prevPosition=this._prevPos<0?0:this._prevPosition+1,this._updateTimeline()}},c.clone=function(){throw"MovieClip cannot be cloned."},c.toString=function(){return"[MovieClip (name="+this.name+")]"},c._tick=function(a){this.advance(a&&a.delta),this.Container__tick(a)},c._goto=function(a){var b=this.timeline.resolve(a);null!=b&&(-1==this._prevPos&&(this._prevPos=0/0),this._prevPosition=b,this._t=0,this._updateTimeline())},c._reset=function(){this._prevPos=-1,this._t=this.currentFrame=0,this.paused=!1},c._updateTimeline=function(){var b=this.timeline,c=this.mode!=a.INDEPENDENT;b.loop=null==this.loop?!0:this.loop;var d=c?this.startPosition+(this.mode==a.SINGLE_FRAME?0:this._synchOffset):this._prevPos<0?0:this._prevPosition,e=c||!this.actionsEnabled?createjs.Tween.NONE:null;if(this.currentFrame=b._calcPosition(d),b.setPosition(d,e),this._prevPosition=b._prevPosition,this._prevPos!=b._prevPos){this.currentFrame=this._prevPos=b._prevPos;for(var f in this._managed)this._managed[f]=1;for(var g=b._tweens,h=0,i=g.length;i>h;h++){var j=g[h],k=j._target;if(k!=this&&!j.passive){var l=j._stepPosition;k instanceof createjs.DisplayObject?this._addManagedChild(k,l):this._setState(k.state,l)}}var m=this.children;for(h=m.length-1;h>=0;h--){var n=m[h].id;1==this._managed[n]&&(this.removeChildAt(h),delete this._managed[n])}}},c._setState=function(a,b){if(a)for(var c=a.length-1;c>=0;c--){var d=a[c],e=d.t,f=d.p;for(var g in f)e[g]=f[g];this._addManagedChild(e,b)}},c._addManagedChild=function(b,c){b._off||(this.addChildAt(b,0),b instanceof a&&(b._synchOffset=c,b.mode==a.INDEPENDENT&&b.autoReset&&!this._managed[b.id]&&b._reset()),this._managed[b.id]=2)},c._getBounds=function(a,b){var c=this.DisplayObject_getBounds();return c||(this._updateTimeline(),this.frameBounds&&(c=this._rectangle.copy(this.frameBounds[this.currentFrame]))),c?this._transformBounds(c,a,b):this.Container__getBounds(a,b)},createjs.MovieClip=createjs.promote(a,"Container"),b.priority=100,b.install=function(){createjs.Tween.installPlugin(b,["startPosition"])},b.init=function(a,b,c){return c},b.step=function(){},b.tween=function(b,c,d,e,f,g){return b.target instanceof a?1==g?f[c]:e[c]:d}}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.MovieClip=createjs.MovieClip||{};a.version="0.8.1",a.buildDate="Thu, 21 May 2015 16:17:39 GMT"}();
	/*!
	* @license TweenJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	this.createjs=this.createjs||{},createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},function(){"use strict";function Event(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var a=Event.prototype;a.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},a.stopPropagation=function(){this.propagationStopped=!0},a.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},a.remove=function(){this.removed=!0},a.clone=function(){return new Event(this.type,this.bubbles,this.cancelable)},a.set=function(a){for(var b in a)this[b]=a[b];return this},a.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=Event}(),this.createjs=this.createjs||{},function(){"use strict";function EventDispatcher(){this._listeners=null,this._captureListeners=null}var a=EventDispatcher.prototype;EventDispatcher.initialize=function(b){b.addEventListener=a.addEventListener,b.on=a.on,b.removeEventListener=b.off=a.removeEventListener,b.removeAllEventListeners=a.removeAllEventListeners,b.hasEventListener=a.hasEventListener,b.dispatchEvent=a.dispatchEvent,b._dispatchEvent=a._dispatchEvent,b.willTrigger=a.willTrigger},a.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},a.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},a.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},a.off=a.removeEventListener,a.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},a.dispatchEvent=function(a){if("string"==typeof a){var b=this._listeners;if(!b||!b[a])return!1;a=new createjs.Event(a)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(c){}if(a.bubbles&&this.parent){for(var d=this,e=[d];d.parent;)e.push(d=d.parent);var f,g=e.length;for(f=g-1;f>=0&&!a.propagationStopped;f--)e[f]._dispatchEvent(a,1+(0==f));for(f=1;g>f&&!a.propagationStopped;f++)e[f]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return a.defaultPrevented},a.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},a.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},a.toString=function(){return"[EventDispatcher]"},a._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;try{a.currentTarget=this}catch(f){}try{a.eventPhase=b}catch(f){}a.removed=!1,e=e.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=e[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}},createjs.EventDispatcher=EventDispatcher}(),this.createjs=this.createjs||{},function(){"use strict";function Ticker(){throw"Ticker cannot be instantiated."}Ticker.RAF_SYNCHED="synched",Ticker.RAF="raf",Ticker.TIMEOUT="timeout",Ticker.useRAF=!1,Ticker.timingMode=null,Ticker.maxDelta=0,Ticker.paused=!1,Ticker.removeEventListener=null,Ticker.removeAllEventListeners=null,Ticker.dispatchEvent=null,Ticker.hasEventListener=null,Ticker._listeners=null,createjs.EventDispatcher.initialize(Ticker),Ticker._addEventListener=Ticker.addEventListener,Ticker.addEventListener=function(){return!Ticker._inited&&Ticker.init(),Ticker._addEventListener.apply(Ticker,arguments)},Ticker._inited=!1,Ticker._startTime=0,Ticker._pausedTime=0,Ticker._ticks=0,Ticker._pausedTicks=0,Ticker._interval=50,Ticker._lastTime=0,Ticker._times=null,Ticker._tickTimes=null,Ticker._timerId=null,Ticker._raf=!0,Ticker.setInterval=function(a){Ticker._interval=a,Ticker._inited&&Ticker._setupTick()},Ticker.getInterval=function(){return Ticker._interval},Ticker.setFPS=function(a){Ticker.setInterval(1e3/a)},Ticker.getFPS=function(){return 1e3/Ticker._interval};try{Object.defineProperties(Ticker,{interval:{get:Ticker.getInterval,set:Ticker.setInterval},framerate:{get:Ticker.getFPS,set:Ticker.setFPS}})}catch(a){console.log(a)}Ticker.init=function(){Ticker._inited||(Ticker._inited=!0,Ticker._times=[],Ticker._tickTimes=[],Ticker._startTime=Ticker._getTime(),Ticker._times.push(Ticker._lastTime=0),Ticker.interval=Ticker._interval)},Ticker.reset=function(){if(Ticker._raf){var a=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame;a&&a(Ticker._timerId)}else clearTimeout(Ticker._timerId);Ticker.removeAllEventListeners("tick"),Ticker._timerId=Ticker._times=Ticker._tickTimes=null,Ticker._startTime=Ticker._lastTime=Ticker._ticks=0,Ticker._inited=!1},Ticker.getMeasuredTickTime=function(a){var b=0,c=Ticker._tickTimes;if(!c||c.length<1)return-1;a=Math.min(c.length,a||0|Ticker.getFPS());for(var d=0;a>d;d++)b+=c[d];return b/a},Ticker.getMeasuredFPS=function(a){var b=Ticker._times;return!b||b.length<2?-1:(a=Math.min(b.length-1,a||0|Ticker.getFPS()),1e3/((b[0]-b[a])/a))},Ticker.setPaused=function(a){Ticker.paused=a},Ticker.getPaused=function(){return Ticker.paused},Ticker.getTime=function(a){return Ticker._startTime?Ticker._getTime()-(a?Ticker._pausedTime:0):-1},Ticker.getEventTime=function(a){return Ticker._startTime?(Ticker._lastTime||Ticker._startTime)-(a?Ticker._pausedTime:0):-1},Ticker.getTicks=function(a){return Ticker._ticks-(a?Ticker._pausedTicks:0)},Ticker._handleSynch=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._getTime()-Ticker._lastTime>=.97*(Ticker._interval-1)&&Ticker._tick()},Ticker._handleRAF=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._tick()},Ticker._handleTimeout=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._tick()},Ticker._setupTick=function(){if(null==Ticker._timerId){var a=Ticker.timingMode||Ticker.useRAF&&Ticker.RAF_SYNCHED;if(a==Ticker.RAF_SYNCHED||a==Ticker.RAF){var b=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(b)return Ticker._timerId=b(a==Ticker.RAF?Ticker._handleRAF:Ticker._handleSynch),void(Ticker._raf=!0)}Ticker._raf=!1,Ticker._timerId=setTimeout(Ticker._handleTimeout,Ticker._interval)}},Ticker._tick=function(){var a=Ticker.paused,b=Ticker._getTime(),c=b-Ticker._lastTime;if(Ticker._lastTime=b,Ticker._ticks++,a&&(Ticker._pausedTicks++,Ticker._pausedTime+=c),Ticker.hasEventListener("tick")){var d=new createjs.Event("tick"),e=Ticker.maxDelta;d.delta=e&&c>e?e:c,d.paused=a,d.time=b,d.runTime=b-Ticker._pausedTime,Ticker.dispatchEvent(d)}for(Ticker._tickTimes.unshift(Ticker._getTime()-b);Ticker._tickTimes.length>100;)Ticker._tickTimes.pop();for(Ticker._times.unshift(b);Ticker._times.length>100;)Ticker._times.pop()};var b=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);Ticker._getTime=function(){return(b&&b.call(performance)||(new Date).getTime())-Ticker._startTime},createjs.Ticker=Ticker}(),this.createjs=this.createjs||{},function(){"use strict";function Tween(a,b,c){this.ignoreGlobalPause=!1,this.loop=!1,this.duration=0,this.pluginData=c||{},this.target=a,this.position=null,this.passive=!1,this._paused=!1,this._curQueueProps={},this._initQueueProps={},this._steps=[],this._actions=[],this._prevPosition=0,this._stepPosition=0,this._prevPos=-1,this._target=a,this._useTicks=!1,this._inited=!1,this._registered=!1,b&&(this._useTicks=b.useTicks,this.ignoreGlobalPause=b.ignoreGlobalPause,this.loop=b.loop,b.onChange&&this.addEventListener("change",b.onChange),b.override&&Tween.removeTweens(a)),b&&b.paused?this._paused=!0:createjs.Tween._register(this,!0),b&&null!=b.position&&this.setPosition(b.position,Tween.NONE)}var a=createjs.extend(Tween,createjs.EventDispatcher);Tween.NONE=0,Tween.LOOP=1,Tween.REVERSE=2,Tween.IGNORE={},Tween._tweens=[],Tween._plugins={},Tween.get=function(a,b,c,d){return d&&Tween.removeTweens(a),new Tween(a,b,c)},Tween.tick=function(a,b){for(var c=Tween._tweens.slice(),d=c.length-1;d>=0;d--){var e=c[d];b&&!e.ignoreGlobalPause||e._paused||e.tick(e._useTicks?1:a)}},Tween.handleEvent=function(a){"tick"==a.type&&this.tick(a.delta,a.paused)},Tween.removeTweens=function(a){if(a.tweenjs_count){for(var b=Tween._tweens,c=b.length-1;c>=0;c--){var d=b[c];d._target==a&&(d._paused=!0,b.splice(c,1))}a.tweenjs_count=0}},Tween.removeAllTweens=function(){for(var a=Tween._tweens,b=0,c=a.length;c>b;b++){var d=a[b];d._paused=!0,d.target&&(d.target.tweenjs_count=0)}a.length=0},Tween.hasActiveTweens=function(a){return a?null!=a.tweenjs_count&&!!a.tweenjs_count:Tween._tweens&&!!Tween._tweens.length},Tween.installPlugin=function(a,b){var c=a.priority;null==c&&(a.priority=c=0);for(var d=0,e=b.length,f=Tween._plugins;e>d;d++){var g=b[d];if(f[g]){for(var h=f[g],i=0,j=h.length;j>i&&!(c<h[i].priority);i++);f[g].splice(i,0,a)}else f[g]=[a]}},Tween._register=function(a,b){var c=a._target,d=Tween._tweens;if(b&&!a._registered)c&&(c.tweenjs_count=c.tweenjs_count?c.tweenjs_count+1:1),d.push(a),!Tween._inited&&createjs.Ticker&&(createjs.Ticker.addEventListener("tick",Tween),Tween._inited=!0);else if(!b&&a._registered){c&&c.tweenjs_count--;for(var e=d.length;e--;)if(d[e]==a){d.splice(e,1);break}}a._registered=b},a.wait=function(a,b){if(null==a||0>=a)return this;var c=this._cloneProps(this._curQueueProps);return this._addStep({d:a,p0:c,e:this._linearEase,p1:c,v:b})},a.to=function(a,b,c){return(isNaN(b)||0>b)&&(b=0),this._addStep({d:b||0,p0:this._cloneProps(this._curQueueProps),e:c,p1:this._cloneProps(this._appendQueueProps(a))})},a.call=function(a,b,c){return this._addAction({f:a,p:b?b:[this],o:c?c:this._target})},a.set=function(a,b){return this._addAction({f:this._set,o:this,p:[a,b?b:this._target]})},a.play=function(a){return a||(a=this),this.call(a.setPaused,[!1],a)},a.pause=function(a){return a||(a=this),this.call(a.setPaused,[!0],a)},a.setPosition=function(a,b){0>a&&(a=0),null==b&&(b=1);var c=a,d=!1;if(c>=this.duration&&(this.loop?c%=this.duration:(c=this.duration,d=!0)),c==this._prevPos)return d;var e=this._prevPos;if(this.position=this._prevPos=c,this._prevPosition=a,this._target)if(d)this._updateTargetProps(null,1);else if(this._steps.length>0){for(var f=0,g=this._steps.length;g>f&&!(this._steps[f].t>c);f++);var h=this._steps[f-1];this._updateTargetProps(h,(this._stepPosition=c-h.t)/h.d)}return 0!=b&&this._actions.length>0&&(this._useTicks?this._runActions(c,c):1==b&&e>c?(e!=this.duration&&this._runActions(e,this.duration),this._runActions(0,c,!0)):this._runActions(e,c)),d&&this.setPaused(!0),this.dispatchEvent("change"),d},a.tick=function(a){this._paused||this.setPosition(this._prevPosition+a)},a.setPaused=function(a){return this._paused===!!a?this:(this._paused=!!a,Tween._register(this,!a),this)},a.w=a.wait,a.t=a.to,a.c=a.call,a.s=a.set,a.toString=function(){return"[Tween]"},a.clone=function(){throw"Tween can not be cloned."},a._updateTargetProps=function(a,b){var c,d,e,f,g,h;if(a||1!=b){if(this.passive=!!a.v,this.passive)return;a.e&&(b=a.e(b,0,1,1)),c=a.p0,d=a.p1}else this.passive=!1,c=d=this._curQueueProps;for(var i in this._initQueueProps){null==(f=c[i])&&(c[i]=f=this._initQueueProps[i]),null==(g=d[i])&&(d[i]=g=f),e=f==g||0==b||1==b||"number"!=typeof f?1==b?g:f:f+(g-f)*b;var j=!1;if(h=Tween._plugins[i])for(var k=0,l=h.length;l>k;k++){var m=h[k].tween(this,i,e,c,d,b,!!a&&c==d,!a);m==Tween.IGNORE?j=!0:e=m}j||(this._target[i]=e)}},a._runActions=function(a,b,c){var d=a,e=b,f=-1,g=this._actions.length,h=1;for(a>b&&(d=b,e=a,f=g,g=h=-1);(f+=h)!=g;){var i=this._actions[f],j=i.t;(j==e||j>d&&e>j||c&&j==a)&&i.f.apply(i.o,i.p)}},a._appendQueueProps=function(a){var b,c,d,e,f;for(var g in a)if(void 0===this._initQueueProps[g]){if(c=this._target[g],b=Tween._plugins[g])for(d=0,e=b.length;e>d;d++)c=b[d].init(this,g,c);this._initQueueProps[g]=this._curQueueProps[g]=void 0===c?null:c}else c=this._curQueueProps[g];for(var g in a){if(c=this._curQueueProps[g],b=Tween._plugins[g])for(f=f||{},d=0,e=b.length;e>d;d++)b[d].step&&b[d].step(this,g,c,a[g],f);this._curQueueProps[g]=a[g]}return f&&this._appendQueueProps(f),this._curQueueProps},a._cloneProps=function(a){var b={};for(var c in a)b[c]=a[c];return b},a._addStep=function(a){return a.d>0&&(this._steps.push(a),a.t=this.duration,this.duration+=a.d),this},a._addAction=function(a){return a.t=this.duration,this._actions.push(a),this},a._set=function(a,b){for(var c in a)b[c]=a[c]},createjs.Tween=createjs.promote(Tween,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function Timeline(a,b,c){this.EventDispatcher_constructor(),this.ignoreGlobalPause=!1,this.duration=0,this.loop=!1,this.position=null,this._paused=!1,this._tweens=[],this._labels=null,this._labelList=null,this._prevPosition=0,this._prevPos=-1,this._useTicks=!1,this._registered=!1,c&&(this._useTicks=c.useTicks,this.loop=c.loop,this.ignoreGlobalPause=c.ignoreGlobalPause,c.onChange&&this.addEventListener("change",c.onChange)),a&&this.addTween.apply(this,a),this.setLabels(b),c&&c.paused?this._paused=!0:createjs.Tween._register(this,!0),c&&null!=c.position&&this.setPosition(c.position,createjs.Tween.NONE)}var a=createjs.extend(Timeline,createjs.EventDispatcher);a.addTween=function(a){var b=arguments.length;if(b>1){for(var c=0;b>c;c++)this.addTween(arguments[c]);return arguments[0]}return 0==b?null:(this.removeTween(a),this._tweens.push(a),a.setPaused(!0),a._paused=!1,a._useTicks=this._useTicks,a.duration>this.duration&&(this.duration=a.duration),this._prevPos>=0&&a.setPosition(this._prevPos,createjs.Tween.NONE),a)},a.removeTween=function(a){var b=arguments.length;if(b>1){for(var c=!0,d=0;b>d;d++)c=c&&this.removeTween(arguments[d]);return c}if(0==b)return!1;for(var e=this._tweens,d=e.length;d--;)if(e[d]==a)return e.splice(d,1),a.duration>=this.duration&&this.updateDuration(),!0;return!1},a.addLabel=function(a,b){this._labels[a]=b;var c=this._labelList;if(c){for(var d=0,e=c.length;e>d&&!(b<c[d].position);d++);c.splice(d,0,{label:a,position:b})}},a.setLabels=function(a){this._labels=a?a:{}},a.getLabels=function(){var a=this._labelList;if(!a){a=this._labelList=[];var b=this._labels;for(var c in b)a.push({label:c,position:b[c]});a.sort(function(a,b){return a.position-b.position})}return a},a.getCurrentLabel=function(){var a=this.getLabels(),b=this.position,c=a.length;if(c){for(var d=0;c>d&&!(b<a[d].position);d++);return 0==d?null:a[d-1].label}return null},a.gotoAndPlay=function(a){this.setPaused(!1),this._goto(a)},a.gotoAndStop=function(a){this.setPaused(!0),this._goto(a)},a.setPosition=function(a,b){var c=this._calcPosition(a),d=!this.loop&&a>=this.duration;if(c==this._prevPos)return d;this._prevPosition=a,this.position=this._prevPos=c;for(var e=0,f=this._tweens.length;f>e;e++)if(this._tweens[e].setPosition(c,b),c!=this._prevPos)return!1;return d&&this.setPaused(!0),this.dispatchEvent("change"),d},a.setPaused=function(a){this._paused=!!a,createjs.Tween._register(this,!a)},a.updateDuration=function(){this.duration=0;for(var a=0,b=this._tweens.length;b>a;a++){var c=this._tweens[a];c.duration>this.duration&&(this.duration=c.duration)}},a.tick=function(a){this.setPosition(this._prevPosition+a)},a.resolve=function(a){var b=Number(a);return isNaN(b)&&(b=this._labels[a]),b},a.toString=function(){return"[Timeline]"},a.clone=function(){throw"Timeline can not be cloned."},a._goto=function(a){var b=this.resolve(a);null!=b&&this.setPosition(b)},a._calcPosition=function(a){return 0>a?0:a<this.duration?a:this.loop?a%this.duration:this.duration},createjs.Timeline=createjs.promote(Timeline,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function Ease(){throw"Ease cannot be instantiated."}Ease.linear=function(a){return a},Ease.none=Ease.linear,Ease.get=function(a){return-1>a&&(a=-1),a>1&&(a=1),function(b){return 0==a?b:0>a?b*(b*-a+1+a):b*((2-b)*a+(1-a))}},Ease.getPowIn=function(a){return function(b){return Math.pow(b,a)}},Ease.getPowOut=function(a){return function(b){return 1-Math.pow(1-b,a)}},Ease.getPowInOut=function(a){return function(b){return(b*=2)<1?.5*Math.pow(b,a):1-.5*Math.abs(Math.pow(2-b,a))}},Ease.quadIn=Ease.getPowIn(2),Ease.quadOut=Ease.getPowOut(2),Ease.quadInOut=Ease.getPowInOut(2),Ease.cubicIn=Ease.getPowIn(3),Ease.cubicOut=Ease.getPowOut(3),Ease.cubicInOut=Ease.getPowInOut(3),Ease.quartIn=Ease.getPowIn(4),Ease.quartOut=Ease.getPowOut(4),Ease.quartInOut=Ease.getPowInOut(4),Ease.quintIn=Ease.getPowIn(5),Ease.quintOut=Ease.getPowOut(5),Ease.quintInOut=Ease.getPowInOut(5),Ease.sineIn=function(a){return 1-Math.cos(a*Math.PI/2)},Ease.sineOut=function(a){return Math.sin(a*Math.PI/2)},Ease.sineInOut=function(a){return-.5*(Math.cos(Math.PI*a)-1)},Ease.getBackIn=function(a){return function(b){return b*b*((a+1)*b-a)}},Ease.backIn=Ease.getBackIn(1.7),Ease.getBackOut=function(a){return function(b){return--b*b*((a+1)*b+a)+1}},Ease.backOut=Ease.getBackOut(1.7),Ease.getBackInOut=function(a){return a*=1.525,function(b){return(b*=2)<1?.5*b*b*((a+1)*b-a):.5*((b-=2)*b*((a+1)*b+a)+2)}},Ease.backInOut=Ease.getBackInOut(1.7),Ease.circIn=function(a){return-(Math.sqrt(1-a*a)-1)},Ease.circOut=function(a){return Math.sqrt(1- --a*a)},Ease.circInOut=function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},Ease.bounceIn=function(a){return 1-Ease.bounceOut(1-a)},Ease.bounceOut=function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},Ease.bounceInOut=function(a){return.5>a?.5*Ease.bounceIn(2*a):.5*Ease.bounceOut(2*a-1)+.5},Ease.getElasticIn=function(a,b){var c=2*Math.PI;return function(d){if(0==d||1==d)return d;var e=b/c*Math.asin(1/a);return-(a*Math.pow(2,10*(d-=1))*Math.sin((d-e)*c/b))}},Ease.elasticIn=Ease.getElasticIn(1,.3),Ease.getElasticOut=function(a,b){var c=2*Math.PI;return function(d){if(0==d||1==d)return d;var e=b/c*Math.asin(1/a);return a*Math.pow(2,-10*d)*Math.sin((d-e)*c/b)+1}},Ease.elasticOut=Ease.getElasticOut(1,.3),Ease.getElasticInOut=function(a,b){var c=2*Math.PI;return function(d){var e=b/c*Math.asin(1/a);return(d*=2)<1?-.5*a*Math.pow(2,10*(d-=1))*Math.sin((d-e)*c/b):a*Math.pow(2,-10*(d-=1))*Math.sin((d-e)*c/b)*.5+1}},Ease.elasticInOut=Ease.getElasticInOut(1,.3*1.5),createjs.Ease=Ease}(),this.createjs=this.createjs||{},function(){"use strict";function MotionGuidePlugin(){throw"MotionGuidePlugin cannot be instantiated."}MotionGuidePlugin.priority=0,MotionGuidePlugin._rotOffS,MotionGuidePlugin._rotOffE,MotionGuidePlugin._rotNormS,MotionGuidePlugin._rotNormE,MotionGuidePlugin.install=function(){return createjs.Tween.installPlugin(MotionGuidePlugin,["guide","x","y","rotation"]),createjs.Tween.IGNORE},MotionGuidePlugin.init=function(a,b,c){var d=a.target;return d.hasOwnProperty("x")||(d.x=0),d.hasOwnProperty("y")||(d.y=0),d.hasOwnProperty("rotation")||(d.rotation=0),"rotation"==b&&(a.__needsRot=!0),"guide"==b?null:c},MotionGuidePlugin.step=function(a,b,c,d,e){if("rotation"==b&&(a.__rotGlobalS=c,a.__rotGlobalE=d,MotionGuidePlugin.testRotData(a,e)),"guide"!=b)return d;var f,g=d;g.hasOwnProperty("path")||(g.path=[]);var h=g.path;if(g.hasOwnProperty("end")||(g.end=1),g.hasOwnProperty("start")||(g.start=c&&c.hasOwnProperty("end")&&c.path===h?c.end:0),g.hasOwnProperty("_segments")&&g._length)return d;var i=h.length,j=10;if(!(i>=6&&(i-2)%4==0))throw"invalid 'path' data, please see documentation for valid paths";g._segments=[],g._length=0;for(var k=2;i>k;k+=4){for(var l,m,n=h[k-2],o=h[k-1],p=h[k+0],q=h[k+1],r=h[k+2],s=h[k+3],t=n,u=o,v=0,w=[],x=1;j>=x;x++){var y=x/j,z=1-y;l=z*z*n+2*z*y*p+y*y*r,m=z*z*o+2*z*y*q+y*y*s,v+=w[w.push(Math.sqrt((f=l-t)*f+(f=m-u)*f))-1],t=l,u=m}g._segments.push(v),g._segments.push(w),g._length+=v}f=g.orient,g.orient=!0;var A={};return MotionGuidePlugin.calc(g,g.start,A),a.__rotPathS=Number(A.rotation.toFixed(5)),MotionGuidePlugin.calc(g,g.end,A),a.__rotPathE=Number(A.rotation.toFixed(5)),g.orient=!1,MotionGuidePlugin.calc(g,g.end,e),g.orient=f,g.orient?(a.__guideData=g,MotionGuidePlugin.testRotData(a,e),d):d},MotionGuidePlugin.testRotData=function(a,b){if(void 0===a.__rotGlobalS||void 0===a.__rotGlobalE){if(a.__needsRot)return;a.__rotGlobalS=a.__rotGlobalE=void 0!==a._curQueueProps.rotation?a._curQueueProps.rotation:b.rotation=a.target.rotation||0}if(void 0!==a.__guideData){var c=a.__guideData,d=a.__rotGlobalE-a.__rotGlobalS,e=a.__rotPathE-a.__rotPathS,f=d-e;if("auto"==c.orient)f>180?f-=360:-180>f&&(f+=360);else if("cw"==c.orient){for(;0>f;)f+=360;0==f&&d>0&&180!=d&&(f+=360)}else if("ccw"==c.orient){for(f=d-(e>180?360-e:e);f>0;)f-=360;0==f&&0>d&&-180!=d&&(f-=360)}c.rotDelta=f,c.rotOffS=a.__rotGlobalS-a.__rotPathS,a.__rotGlobalS=a.__rotGlobalE=a.__guideData=a.__needsRot=void 0}},MotionGuidePlugin.tween=function(a,b,c,d,e,f,g){var h=e.guide;if(void 0==h||h===d.guide)return c;if(h.lastRatio!=f){var i=(h.end-h.start)*(g?h.end:f)+h.start;switch(MotionGuidePlugin.calc(h,i,a.target),h.orient){case"cw":case"ccw":case"auto":a.target.rotation+=h.rotOffS+h.rotDelta*f;break;case"fixed":default:a.target.rotation+=h.rotOffS}h.lastRatio=f}return"rotation"!=b||h.orient&&"false"!=h.orient?a.target[b]:c},MotionGuidePlugin.calc=function(a,b,c){void 0==a._segments&&MotionGuidePlugin.validate(a),void 0==c&&(c={x:0,y:0,rotation:0});for(var d=a._segments,e=a.path,f=a._length*b,g=d.length-2,h=0;f>d[h]&&g>h;)f-=d[h],h+=2;var i=d[h+1],j=0;for(g=i.length-1;f>i[j]&&g>j;)f-=i[j],j++;var k=j/++g+f/(g*i[j]);h=2*h+2;var l=1-k;return c.x=l*l*e[h-2]+2*l*k*e[h+0]+k*k*e[h+2],c.y=l*l*e[h-1]+2*l*k*e[h+1]+k*k*e[h+3],a.orient&&(c.rotation=57.2957795*Math.atan2((e[h+1]-e[h-1])*l+(e[h+3]-e[h+1])*k,(e[h+0]-e[h-2])*l+(e[h+2]-e[h+0])*k)),c},createjs.MotionGuidePlugin=MotionGuidePlugin}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.TweenJS=createjs.TweenJS||{};a.version="0.6.1",a.buildDate="Thu, 21 May 2015 16:17:37 GMT"}();
	/*!
	* @license PreloadJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	this.createjs=this.createjs||{},function(){"use strict";var a=createjs.PreloadJS=createjs.PreloadJS||{};a.version="0.6.1",a.buildDate="Thu, 21 May 2015 16:17:37 GMT"}(),this.createjs=this.createjs||{},createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";createjs.proxy=function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){return a.apply(b,Array.prototype.slice.call(arguments,0).concat(c))}}}(),this.createjs=this.createjs||{},function(){"use strict";function BrowserDetect(){throw"BrowserDetect cannot be instantiated"}var a=BrowserDetect.agent=window.navigator.userAgent;BrowserDetect.isWindowPhone=a.indexOf("IEMobile")>-1||a.indexOf("Windows Phone")>-1,BrowserDetect.isFirefox=a.indexOf("Firefox")>-1,BrowserDetect.isOpera=null!=window.opera,BrowserDetect.isChrome=a.indexOf("Chrome")>-1,BrowserDetect.isIOS=(a.indexOf("iPod")>-1||a.indexOf("iPhone")>-1||a.indexOf("iPad")>-1)&&!BrowserDetect.isWindowPhone,BrowserDetect.isAndroid=a.indexOf("Android")>-1&&!BrowserDetect.isWindowPhone,BrowserDetect.isBlackberry=a.indexOf("Blackberry")>-1,createjs.BrowserDetect=BrowserDetect}(),this.createjs=this.createjs||{},function(){"use strict";function Event(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var a=Event.prototype;a.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},a.stopPropagation=function(){this.propagationStopped=!0},a.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},a.remove=function(){this.removed=!0},a.clone=function(){return new Event(this.type,this.bubbles,this.cancelable)},a.set=function(a){for(var b in a)this[b]=a[b];return this},a.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=Event}(),this.createjs=this.createjs||{},function(){"use strict";function ErrorEvent(a,b,c){this.Event_constructor("error"),this.title=a,this.message=b,this.data=c}var a=createjs.extend(ErrorEvent,createjs.Event);a.clone=function(){return new createjs.ErrorEvent(this.title,this.message,this.data)},createjs.ErrorEvent=createjs.promote(ErrorEvent,"Event")}(),this.createjs=this.createjs||{},function(){"use strict";function EventDispatcher(){this._listeners=null,this._captureListeners=null}var a=EventDispatcher.prototype;EventDispatcher.initialize=function(b){b.addEventListener=a.addEventListener,b.on=a.on,b.removeEventListener=b.off=a.removeEventListener,b.removeAllEventListeners=a.removeAllEventListeners,b.hasEventListener=a.hasEventListener,b.dispatchEvent=a.dispatchEvent,b._dispatchEvent=a._dispatchEvent,b.willTrigger=a.willTrigger},a.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},a.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},a.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},a.off=a.removeEventListener,a.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},a.dispatchEvent=function(a){if("string"==typeof a){var b=this._listeners;if(!b||!b[a])return!1;a=new createjs.Event(a)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(c){}if(a.bubbles&&this.parent){for(var d=this,e=[d];d.parent;)e.push(d=d.parent);var f,g=e.length;for(f=g-1;f>=0&&!a.propagationStopped;f--)e[f]._dispatchEvent(a,1+(0==f));for(f=1;g>f&&!a.propagationStopped;f++)e[f]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return a.defaultPrevented},a.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},a.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},a.toString=function(){return"[EventDispatcher]"},a._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;try{a.currentTarget=this}catch(f){}try{a.eventPhase=b}catch(f){}a.removed=!1,e=e.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=e[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}},createjs.EventDispatcher=EventDispatcher}(),this.createjs=this.createjs||{},function(){"use strict";function ProgressEvent(a,b){this.Event_constructor("progress"),this.loaded=a,this.total=null==b?1:b,this.progress=0==b?0:this.loaded/this.total}var a=createjs.extend(ProgressEvent,createjs.Event);a.clone=function(){return new createjs.ProgressEvent(this.loaded,this.total)},createjs.ProgressEvent=createjs.promote(ProgressEvent,"Event")}(window),function(){function a(b,d){function f(a){if(f[a]!==q)return f[a];var b;if("bug-string-char-index"==a)b="a"!="a"[0];else if("json"==a)b=f("json-stringify")&&f("json-parse");else{var c,e='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==a){var i=d.stringify,k="function"==typeof i&&t;if(k){(c=function(){return 1}).toJSON=c;try{k="0"===i(0)&&"0"===i(new g)&&'""'==i(new h)&&i(s)===q&&i(q)===q&&i()===q&&"1"===i(c)&&"[1]"==i([c])&&"[null]"==i([q])&&"null"==i(null)&&"[null,null,null]"==i([q,s,null])&&i({a:[c,!0,!1,null,"\x00\b\n\f\r	"]})==e&&"1"===i(null,c)&&"[\n 1,\n 2\n]"==i([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==i(new j(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==i(new j(864e13))&&'"-000001-01-01T00:00:00.000Z"'==i(new j(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==i(new j(-1))}catch(l){k=!1}}b=k}if("json-parse"==a){var m=d.parse;if("function"==typeof m)try{if(0===m("0")&&!m(!1)){c=m(e);var n=5==c.a.length&&1===c.a[0];if(n){try{n=!m('"	"')}catch(l){}if(n)try{n=1!==m("01")}catch(l){}if(n)try{n=1!==m("1.")}catch(l){}}}}catch(l){n=!1}b=n}}return f[a]=!!b}b||(b=e.Object()),d||(d=e.Object());var g=b.Number||e.Number,h=b.String||e.String,i=b.Object||e.Object,j=b.Date||e.Date,k=b.SyntaxError||e.SyntaxError,l=b.TypeError||e.TypeError,m=b.Math||e.Math,n=b.JSON||e.JSON;"object"==typeof n&&n&&(d.stringify=n.stringify,d.parse=n.parse);var o,p,q,r=i.prototype,s=r.toString,t=new j(-0xc782b5b800cec);try{t=-109252==t.getUTCFullYear()&&0===t.getUTCMonth()&&1===t.getUTCDate()&&10==t.getUTCHours()&&37==t.getUTCMinutes()&&6==t.getUTCSeconds()&&708==t.getUTCMilliseconds()}catch(u){}if(!f("json")){var v="[object Function]",w="[object Date]",x="[object Number]",y="[object String]",z="[object Array]",A="[object Boolean]",B=f("bug-string-char-index");if(!t)var C=m.floor,D=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,b){return D[b]+365*(a-1970)+C((a-1969+(b=+(b>1)))/4)-C((a-1901+b)/100)+C((a-1601+b)/400)};if((o=r.hasOwnProperty)||(o=function(a){var b,c={};return(c.__proto__=null,c.__proto__={toString:1},c).toString!=s?o=function(a){var b=this.__proto__,c=a in(this.__proto__=null,this);return this.__proto__=b,c}:(b=c.constructor,o=function(a){var c=(this.constructor||b).prototype;return a in this&&!(a in c&&this[a]===c[a])}),c=null,o.call(this,a)}),p=function(a,b){var d,e,f,g=0;(d=function(){this.valueOf=0}).prototype.valueOf=0,e=new d;for(f in e)o.call(e,f)&&g++;return d=e=null,g?p=2==g?function(a,b){var c,d={},e=s.call(a)==v;for(c in a)e&&"prototype"==c||o.call(d,c)||!(d[c]=1)||!o.call(a,c)||b(c)}:function(a,b){var c,d,e=s.call(a)==v;for(c in a)e&&"prototype"==c||!o.call(a,c)||(d="constructor"===c)||b(c);(d||o.call(a,c="constructor"))&&b(c)}:(e=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],p=function(a,b){var d,f,g=s.call(a)==v,h=!g&&"function"!=typeof a.constructor&&c[typeof a.hasOwnProperty]&&a.hasOwnProperty||o;for(d in a)g&&"prototype"==d||!h.call(a,d)||b(d);for(f=e.length;d=e[--f];h.call(a,d)&&b(d));}),p(a,b)},!f("json-stringify")){var F={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},G="000000",H=function(a,b){return(G+(b||0)).slice(-a)},I="\\u00",J=function(a){for(var b='"',c=0,d=a.length,e=!B||d>10,f=e&&(B?a.split(""):a);d>c;c++){var g=a.charCodeAt(c);switch(g){case 8:case 9:case 10:case 12:case 13:case 34:case 92:b+=F[g];break;default:if(32>g){b+=I+H(2,g.toString(16));break}b+=e?f[c]:a.charAt(c)}}return b+'"'},K=function(a,b,c,d,e,f,g){var h,i,j,k,m,n,r,t,u,v,B,D,F,G,I,L;try{h=b[a]}catch(M){}if("object"==typeof h&&h)if(i=s.call(h),i!=w||o.call(h,"toJSON"))"function"==typeof h.toJSON&&(i!=x&&i!=y&&i!=z||o.call(h,"toJSON"))&&(h=h.toJSON(a));else if(h>-1/0&&1/0>h){if(E){for(m=C(h/864e5),j=C(m/365.2425)+1970-1;E(j+1,0)<=m;j++);for(k=C((m-E(j,0))/30.42);E(j,k+1)<=m;k++);m=1+m-E(j,k),n=(h%864e5+864e5)%864e5,r=C(n/36e5)%24,t=C(n/6e4)%60,u=C(n/1e3)%60,v=n%1e3}else j=h.getUTCFullYear(),k=h.getUTCMonth(),m=h.getUTCDate(),r=h.getUTCHours(),t=h.getUTCMinutes(),u=h.getUTCSeconds(),v=h.getUTCMilliseconds();h=(0>=j||j>=1e4?(0>j?"-":"+")+H(6,0>j?-j:j):H(4,j))+"-"+H(2,k+1)+"-"+H(2,m)+"T"+H(2,r)+":"+H(2,t)+":"+H(2,u)+"."+H(3,v)+"Z"}else h=null;if(c&&(h=c.call(b,a,h)),null===h)return"null";if(i=s.call(h),i==A)return""+h;if(i==x)return h>-1/0&&1/0>h?""+h:"null";if(i==y)return J(""+h);if("object"==typeof h){for(G=g.length;G--;)if(g[G]===h)throw l();if(g.push(h),B=[],I=f,f+=e,i==z){for(F=0,G=h.length;G>F;F++)D=K(F,h,c,d,e,f,g),B.push(D===q?"null":D);L=B.length?e?"[\n"+f+B.join(",\n"+f)+"\n"+I+"]":"["+B.join(",")+"]":"[]"}else p(d||h,function(a){var b=K(a,h,c,d,e,f,g);b!==q&&B.push(J(a)+":"+(e?" ":"")+b)}),L=B.length?e?"{\n"+f+B.join(",\n"+f)+"\n"+I+"}":"{"+B.join(",")+"}":"{}";return g.pop(),L}};d.stringify=function(a,b,d){var e,f,g,h;if(c[typeof b]&&b)if((h=s.call(b))==v)f=b;else if(h==z){g={};for(var i,j=0,k=b.length;k>j;i=b[j++],h=s.call(i),(h==y||h==x)&&(g[i]=1));}if(d)if((h=s.call(d))==x){if((d-=d%1)>0)for(e="",d>10&&(d=10);e.length<d;e+=" ");}else h==y&&(e=d.length<=10?d:d.slice(0,10));return K("",(i={},i[""]=a,i),f,g,e,"",[])}}if(!f("json-parse")){var L,M,N=h.fromCharCode,O={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},P=function(){throw L=M=null,k()},Q=function(){for(var a,b,c,d,e,f=M,g=f.length;g>L;)switch(e=f.charCodeAt(L)){case 9:case 10:case 13:case 32:L++;break;case 123:case 125:case 91:case 93:case 58:case 44:return a=B?f.charAt(L):f[L],L++,a;case 34:for(a="@",L++;g>L;)if(e=f.charCodeAt(L),32>e)P();else if(92==e)switch(e=f.charCodeAt(++L)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:a+=O[e],L++;break;case 117:for(b=++L,c=L+4;c>L;L++)e=f.charCodeAt(L),e>=48&&57>=e||e>=97&&102>=e||e>=65&&70>=e||P();a+=N("0x"+f.slice(b,L));break;default:P()}else{if(34==e)break;for(e=f.charCodeAt(L),b=L;e>=32&&92!=e&&34!=e;)e=f.charCodeAt(++L);a+=f.slice(b,L)}if(34==f.charCodeAt(L))return L++,a;P();default:if(b=L,45==e&&(d=!0,e=f.charCodeAt(++L)),e>=48&&57>=e){for(48==e&&(e=f.charCodeAt(L+1),e>=48&&57>=e)&&P(),d=!1;g>L&&(e=f.charCodeAt(L),e>=48&&57>=e);L++);if(46==f.charCodeAt(L)){for(c=++L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}if(e=f.charCodeAt(L),101==e||69==e){for(e=f.charCodeAt(++L),(43==e||45==e)&&L++,c=L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}return+f.slice(b,L)}if(d&&P(),"true"==f.slice(L,L+4))return L+=4,!0;if("false"==f.slice(L,L+5))return L+=5,!1;if("null"==f.slice(L,L+4))return L+=4,null;P()}return"$"},R=function(a){var b,c;if("$"==a&&P(),"string"==typeof a){if("@"==(B?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(b=[];a=Q(),"]"!=a;c||(c=!0))c&&(","==a?(a=Q(),"]"==a&&P()):P()),","==a&&P(),b.push(R(a));return b}if("{"==a){for(b={};a=Q(),"}"!=a;c||(c=!0))c&&(","==a?(a=Q(),"}"==a&&P()):P()),(","==a||"string"!=typeof a||"@"!=(B?a.charAt(0):a[0])||":"!=Q())&&P(),b[a.slice(1)]=R(Q());return b}P()}return a},S=function(a,b,c){var d=T(a,b,c);d===q?delete a[b]:a[b]=d},T=function(a,b,c){var d,e=a[b];if("object"==typeof e&&e)if(s.call(e)==z)for(d=e.length;d--;)S(e,d,c);else p(e,function(a){S(e,a,c)});return c.call(a,b,e)};d.parse=function(a,b){var c,d;return L=0,M=""+a,c=R(Q()),"$"!=Q()&&P(),L=M=null,b&&s.call(b)==v?T((d={},d[""]=c,d),"",b):c}}}return d.runInContext=a,d}var b="function"=="function"&&__webpack_require__(2),c={"function":!0,object:!0},d=c[typeof exports]&&exports&&!exports.nodeType&&exports,e=c[typeof window]&&window||this,f=d&&c[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!f||f.global!==f&&f.window!==f&&f.self!==f||(e=f),d&&!b)a(e,d);else{var g=e.JSON,h=e.JSON3,i=!1,j=a(e,e.JSON3={noConflict:function(){return i||(i=!0,e.JSON=g,e.JSON3=h,g=h=null),j}});e.JSON={parse:j.parse,stringify:j.stringify}}b&&!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return j}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}.call(this),function(){var a={};a.appendToHead=function(b){a.getHead().appendChild(b)},a.getHead=function(){return document.head||document.getElementsByTagName("head")[0]},a.getBody=function(){return document.body||document.getElementsByTagName("body")[0]},createjs.DomUtils=a}(),function(){var a={};a.parseXML=function(a,b){var c=null;try{if(window.DOMParser){var d=new DOMParser;c=d.parseFromString(a,b)}}catch(e){}if(!c)try{c=new ActiveXObject("Microsoft.XMLDOM"),c.async=!1,c.loadXML(a)}catch(e){c=null}return c},a.parseJSON=function(a){if(null==a)return null;try{return JSON.parse(a)}catch(b){throw b}},createjs.DataUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function LoadItem(){this.src=null,this.type=null,this.id=null,this.maintainOrder=!1,this.callback=null,this.data=null,this.method=createjs.LoadItem.GET,this.values=null,this.headers=null,this.withCredentials=!1,this.mimeType=null,this.crossOrigin=null,this.loadTimeout=b.LOAD_TIMEOUT_DEFAULT}var a=LoadItem.prototype={},b=LoadItem;b.LOAD_TIMEOUT_DEFAULT=8e3,b.create=function(a){if("string"==typeof a){var c=new LoadItem;return c.src=a,c}if(a instanceof b)return a;if(a instanceof Object&&a.src)return null==a.loadTimeout&&(a.loadTimeout=b.LOAD_TIMEOUT_DEFAULT),a;throw new Error("Type not recognized.")},a.set=function(a){for(var b in a)this[b]=a[b];return this},createjs.LoadItem=b}(),function(){var a={};a.ABSOLUTE_PATT=/^(?:\w+:)?\/{2}/i,a.RELATIVE_PATT=/^[./]*?\//i,a.EXTENSION_PATT=/\/?[^/]+\.(\w{1,5})$/i,a.parseURI=function(b){var c={absolute:!1,relative:!1};if(null==b)return c;var d=b.indexOf("?");d>-1&&(b=b.substr(0,d));var e;return a.ABSOLUTE_PATT.test(b)?c.absolute=!0:a.RELATIVE_PATT.test(b)&&(c.relative=!0),(e=b.match(a.EXTENSION_PATT))&&(c.extension=e[1].toLowerCase()),c},a.formatQueryString=function(a,b){if(null==a)throw new Error("You must specify data.");var c=[];for(var d in a)c.push(d+"="+escape(a[d]));return b&&(c=c.concat(b)),c.join("&")},a.buildPath=function(a,b){if(null==b)return a;var c=[],d=a.indexOf("?");if(-1!=d){var e=a.slice(d+1);c=c.concat(e.split("&"))}return-1!=d?a.slice(0,d)+"?"+this._formatQueryString(b,c):a+"?"+this._formatQueryString(b,c)},a.isCrossDomain=function(a){var b=document.createElement("a");b.href=a.src;var c=document.createElement("a");c.href=location.href;var d=""!=b.hostname&&(b.port!=c.port||b.protocol!=c.protocol||b.hostname!=c.hostname);return d},a.isLocal=function(a){var b=document.createElement("a");return b.href=a.src,""==b.hostname&&"file:"==b.protocol},a.isBinary=function(a){switch(a){case createjs.AbstractLoader.IMAGE:case createjs.AbstractLoader.BINARY:return!0;default:return!1}},a.isImageTag=function(a){return a instanceof HTMLImageElement},a.isAudioTag=function(a){return window.HTMLAudioElement?a instanceof HTMLAudioElement:!1},a.isVideoTag=function(a){return window.HTMLVideoElement?a instanceof HTMLVideoElement:!1},a.isText=function(a){switch(a){case createjs.AbstractLoader.TEXT:case createjs.AbstractLoader.JSON:case createjs.AbstractLoader.MANIFEST:case createjs.AbstractLoader.XML:case createjs.AbstractLoader.CSS:case createjs.AbstractLoader.SVG:case createjs.AbstractLoader.JAVASCRIPT:case createjs.AbstractLoader.SPRITESHEET:return!0;default:return!1}},a.getTypeByExtension=function(a){if(null==a)return createjs.AbstractLoader.TEXT;switch(a.toLowerCase()){case"jpeg":case"jpg":case"gif":case"png":case"webp":case"bmp":return createjs.AbstractLoader.IMAGE;case"ogg":case"mp3":case"webm":return createjs.AbstractLoader.SOUND;case"mp4":case"webm":case"ts":return createjs.AbstractLoader.VIDEO;case"json":return createjs.AbstractLoader.JSON;case"xml":return createjs.AbstractLoader.XML;case"css":return createjs.AbstractLoader.CSS;case"js":return createjs.AbstractLoader.JAVASCRIPT;case"svg":return createjs.AbstractLoader.SVG;default:return createjs.AbstractLoader.TEXT}},createjs.RequestUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function AbstractLoader(a,b,c){this.EventDispatcher_constructor(),this.loaded=!1,this.canceled=!1,this.progress=0,this.type=c,this.resultFormatter=null,this._item=a?createjs.LoadItem.create(a):null,this._preferXHR=b,this._result=null,this._rawResult=null,this._loadedItems=null,this._tagSrcAttribute=null,this._tag=null}var a=createjs.extend(AbstractLoader,createjs.EventDispatcher),b=AbstractLoader;b.POST="POST",b.GET="GET",b.BINARY="binary",b.CSS="css",b.IMAGE="image",b.JAVASCRIPT="javascript",b.JSON="json",b.JSONP="jsonp",b.MANIFEST="manifest",b.SOUND="sound",b.VIDEO="video",b.SPRITESHEET="spritesheet",b.SVG="svg",b.TEXT="text",b.XML="xml",a.getItem=function(){return this._item},a.getResult=function(a){return a?this._rawResult:this._result},a.getTag=function(){return this._tag},a.setTag=function(a){this._tag=a},a.load=function(){this._createRequest(),this._request.on("complete",this,this),this._request.on("progress",this,this),this._request.on("loadStart",this,this),this._request.on("abort",this,this),this._request.on("timeout",this,this),this._request.on("error",this,this);var a=new createjs.Event("initialize");a.loader=this._request,this.dispatchEvent(a),this._request.load()},a.cancel=function(){this.canceled=!0,this.destroy()},a.destroy=function(){this._request&&(this._request.removeAllEventListeners(),this._request.destroy()),this._request=null,this._item=null,this._rawResult=null,this._result=null,this._loadItems=null,this.removeAllEventListeners()},a.getLoadedItems=function(){return this._loadedItems},a._createRequest=function(){this._request=this._preferXHR?new createjs.XHRRequest(this._item):new createjs.TagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},a._createTag=function(){return null},a._sendLoadStart=function(){this._isCanceled()||this.dispatchEvent("loadstart")},a._sendProgress=function(a){if(!this._isCanceled()){var b=null;"number"==typeof a?(this.progress=a,b=new createjs.ProgressEvent(this.progress)):(b=a,this.progress=a.loaded/a.total,b.progress=this.progress,(isNaN(this.progress)||1/0==this.progress)&&(this.progress=0)),this.hasEventListener("progress")&&this.dispatchEvent(b)}},a._sendComplete=function(){if(!this._isCanceled()){this.loaded=!0;var a=new createjs.Event("complete");a.rawResult=this._rawResult,null!=this._result&&(a.result=this._result),this.dispatchEvent(a)}},a._sendError=function(a){!this._isCanceled()&&this.hasEventListener("error")&&(null==a&&(a=new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),this.dispatchEvent(a))},a._isCanceled=function(){return null==window.createjs||this.canceled?!0:!1},a.resultFormatter=null,a.handleEvent=function(a){switch(a.type){case"complete":this._rawResult=a.target._response;var b=this.resultFormatter&&this.resultFormatter(this),c=this;b instanceof Function?b(function(a){c._result=a,c._sendComplete()}):(this._result=b||this._rawResult,this._sendComplete());break;case"progress":this._sendProgress(a);break;case"error":this._sendError(a);break;case"loadstart":this._sendLoadStart();break;case"abort":case"timeout":this._isCanceled()||this.dispatchEvent(a.type)}},a.buildPath=function(a,b){return createjs.RequestUtils.buildPath(a,b)},a.toString=function(){return"[PreloadJS AbstractLoader]"},createjs.AbstractLoader=createjs.promote(AbstractLoader,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function AbstractMediaLoader(a,b,c){this.AbstractLoader_constructor(a,b,c),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src"}var a=createjs.extend(AbstractMediaLoader,createjs.AbstractLoader);a.load=function(){this._tag||(this._tag=this._createTag(this._item.src)),this._tag.preload="auto",this._tag.load(),this.AbstractLoader_load()},a._createTag=function(){},a._createRequest=function(){this._request=this._preferXHR?new createjs.XHRRequest(this._item):new createjs.MediaTagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},a._formatResult=function(a){return this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.onstalled=null,this._preferXHR&&(a.getTag().src=a.getResult(!0)),a.getTag()},createjs.AbstractMediaLoader=createjs.promote(AbstractMediaLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";var AbstractRequest=function(a){this._item=a},a=createjs.extend(AbstractRequest,createjs.EventDispatcher);a.load=function(){},a.destroy=function(){},a.cancel=function(){},createjs.AbstractRequest=createjs.promote(AbstractRequest,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function TagRequest(a,b,c){this.AbstractRequest_constructor(a),this._tag=b,this._tagSrcAttribute=c,this._loadedHandler=createjs.proxy(this._handleTagComplete,this),this._addedToDOM=!1,this._startTagVisibility=null}var a=createjs.extend(TagRequest,createjs.AbstractRequest);a.load=function(){this._tag.onload=createjs.proxy(this._handleTagComplete,this),this._tag.onreadystatechange=createjs.proxy(this._handleReadyStateChange,this),this._tag.onerror=createjs.proxy(this._handleError,this);var a=new createjs.Event("initialize");a.loader=this._tag,this.dispatchEvent(a),this._hideTag(),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag[this._tagSrcAttribute]=this._item.src,null==this._tag.parentNode&&(window.document.body.appendChild(this._tag),this._addedToDOM=!0)},a.destroy=function(){this._clean(),this._tag=null,this.AbstractRequest_destroy()},a._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this._tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleTagComplete()},a._handleError=function(){this._clean(),this.dispatchEvent("error")},a._handleTagComplete=function(){this._rawResult=this._tag,this._result=this.resultFormatter&&this.resultFormatter(this)||this._rawResult,this._clean(),this._showTag(),this.dispatchEvent("complete")},a._handleTimeout=function(){this._clean(),this.dispatchEvent(new createjs.Event("timeout"))},a._clean=function(){this._tag.onload=null,this._tag.onreadystatechange=null,this._tag.onerror=null,this._addedToDOM&&null!=this._tag.parentNode&&this._tag.parentNode.removeChild(this._tag),clearTimeout(this._loadTimeout)},a._hideTag=function(){this._startTagVisibility=this._tag.style.visibility,this._tag.style.visibility="hidden"},a._showTag=function(){this._tag.style.visibility=this._startTagVisibility},a._handleStalled=function(){},createjs.TagRequest=createjs.promote(TagRequest,"AbstractRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function MediaTagRequest(a,b,c){this.AbstractRequest_constructor(a),this._tag=b,this._tagSrcAttribute=c,this._loadedHandler=createjs.proxy(this._handleTagComplete,this)}var a=createjs.extend(MediaTagRequest,createjs.TagRequest);a.load=function(){var a=createjs.proxy(this._handleStalled,this);this._stalledCallback=a;var b=createjs.proxy(this._handleProgress,this);this._handleProgress=b,this._tag.addEventListener("stalled",a),this._tag.addEventListener("progress",b),this._tag.addEventListener&&this._tag.addEventListener("canplaythrough",this._loadedHandler,!1),this.TagRequest_load()},a._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this._tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleTagComplete()},a._handleStalled=function(){},a._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.ProgressEvent(a.loaded,a.total);this.dispatchEvent(b)}},a._clean=function(){this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.removeEventListener("stalled",this._stalledCallback),this._tag.removeEventListener("progress",this._progressCallback),this.TagRequest__clean()},createjs.MediaTagRequest=createjs.promote(MediaTagRequest,"TagRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function XHRRequest(a){this.AbstractRequest_constructor(a),this._request=null,this._loadTimeout=null,this._xhrLevel=1,this._response=null,this._rawResponse=null,this._canceled=!1,this._handleLoadStartProxy=createjs.proxy(this._handleLoadStart,this),this._handleProgressProxy=createjs.proxy(this._handleProgress,this),this._handleAbortProxy=createjs.proxy(this._handleAbort,this),this._handleErrorProxy=createjs.proxy(this._handleError,this),this._handleTimeoutProxy=createjs.proxy(this._handleTimeout,this),this._handleLoadProxy=createjs.proxy(this._handleLoad,this),this._handleReadyStateChangeProxy=createjs.proxy(this._handleReadyStateChange,this),!this._createXHR(a)}var a=createjs.extend(XHRRequest,createjs.AbstractRequest);XHRRequest.ACTIVEX_VERSIONS=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],a.getResult=function(a){return a&&this._rawResponse?this._rawResponse:this._response},a.cancel=function(){this.canceled=!0,this._clean(),this._request.abort()},a.load=function(){if(null==this._request)return void this._handleError();null!=this._request.addEventListener?(this._request.addEventListener("loadstart",this._handleLoadStartProxy,!1),this._request.addEventListener("progress",this._handleProgressProxy,!1),this._request.addEventListener("abort",this._handleAbortProxy,!1),this._request.addEventListener("error",this._handleErrorProxy,!1),this._request.addEventListener("timeout",this._handleTimeoutProxy,!1),this._request.addEventListener("load",this._handleLoadProxy,!1),this._request.addEventListener("readystatechange",this._handleReadyStateChangeProxy,!1)):(this._request.onloadstart=this._handleLoadStartProxy,this._request.onprogress=this._handleProgressProxy,this._request.onabort=this._handleAbortProxy,this._request.onerror=this._handleErrorProxy,this._request.ontimeout=this._handleTimeoutProxy,this._request.onload=this._handleLoadProxy,this._request.onreadystatechange=this._handleReadyStateChangeProxy),1==this._xhrLevel&&(this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout));try{this._item.values&&this._item.method!=createjs.AbstractLoader.GET?this._item.method==createjs.AbstractLoader.POST&&this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)):this._request.send()}catch(a){this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND",null,a))}},a.setResponseType=function(a){"blob"===a&&(a=window.URL?"blob":"arraybuffer",this._responseType=a),this._request.responseType=a},a.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders instanceof Function?this._request.getAllResponseHeaders():null},a.getResponseHeader=function(a){return this._request.getResponseHeader instanceof Function?this._request.getResponseHeader(a):null},a._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.ProgressEvent(a.loaded,a.total);this.dispatchEvent(b)}},a._handleLoadStart=function(){clearTimeout(this._loadTimeout),this.dispatchEvent("loadstart")},a._handleAbort=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED",null,a))},a._handleError=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent(a.message))},a._handleReadyStateChange=function(){4==this._request.readyState&&this._handleLoad()},a._handleLoad=function(){if(!this.loaded){this.loaded=!0;var a=this._checkError();if(a)return void this._handleError(a);if(this._response=this._getResponse(),"arraybuffer"===this._responseType)try{this._response=new Blob([this._response])}catch(b){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"===b.name&&window.BlobBuilder){var c=new BlobBuilder;c.append(this._response),this._response=c.getBlob()}}this._clean(),this.dispatchEvent(new createjs.Event("complete"))}},a._handleTimeout=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT",null,a))},a._checkError=function(){var a=parseInt(this._request.status);switch(a){case 404:case 0:return new Error(a)}return null},a._getResponse=function(){if(null!=this._response)return this._response;if(null!=this._request.response)return this._request.response;try{if(null!=this._request.responseText)return this._request.responseText}catch(a){}try{if(null!=this._request.responseXML)return this._request.responseXML}catch(a){}return null},a._createXHR=function(a){var b=createjs.RequestUtils.isCrossDomain(a),c={},d=null;if(window.XMLHttpRequest)d=new XMLHttpRequest,b&&void 0===d.withCredentials&&window.XDomainRequest&&(d=new XDomainRequest);else{for(var e=0,f=s.ACTIVEX_VERSIONS.length;f>e;e++){var g=s.ACTIVEX_VERSIONS[e];try{d=new ActiveXObject(g);break}catch(h){}}if(null==d)return!1}null==a.mimeType&&createjs.RequestUtils.isText(a.type)&&(a.mimeType="text/plain; charset=utf-8"),a.mimeType&&d.overrideMimeType&&d.overrideMimeType(a.mimeType),this._xhrLevel="string"==typeof d.responseType?2:1;var i=null;if(i=a.method==createjs.AbstractLoader.GET?createjs.RequestUtils.buildPath(a.src,a.values):a.src,d.open(a.method||createjs.AbstractLoader.GET,i,!0),b&&d instanceof XMLHttpRequest&&1==this._xhrLevel&&(c.Origin=location.origin),a.values&&a.method==createjs.AbstractLoader.POST&&(c["Content-Type"]="application/x-www-form-urlencoded"),b||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest"),a.headers)for(var j in a.headers)c[j]=a.headers[j];for(j in c)d.setRequestHeader(j,c[j]);return d instanceof XMLHttpRequest&&void 0!==a.withCredentials&&(d.withCredentials=a.withCredentials),this._request=d,!0},a._clean=function(){clearTimeout(this._loadTimeout),null!=this._request.removeEventListener?(this._request.removeEventListener("loadstart",this._handleLoadStartProxy),this._request.removeEventListener("progress",this._handleProgressProxy),this._request.removeEventListener("abort",this._handleAbortProxy),this._request.removeEventListener("error",this._handleErrorProxy),this._request.removeEventListener("timeout",this._handleTimeoutProxy),this._request.removeEventListener("load",this._handleLoadProxy),this._request.removeEventListener("readystatechange",this._handleReadyStateChangeProxy)):(this._request.onloadstart=null,this._request.onprogress=null,this._request.onabort=null,this._request.onerror=null,this._request.ontimeout=null,this._request.onload=null,this._request.onreadystatechange=null)},a.toString=function(){return"[PreloadJS XHRRequest]"},createjs.XHRRequest=createjs.promote(XHRRequest,"AbstractRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function LoadQueue(a,b,c){this.AbstractLoader_constructor(),this._plugins=[],this._typeCallbacks={},this._extensionCallbacks={},this.next=null,this.maintainScriptOrder=!0,this.stopOnError=!1,this._maxConnections=1,this._availableLoaders=[createjs.ImageLoader,createjs.JavaScriptLoader,createjs.CSSLoader,createjs.JSONLoader,createjs.JSONPLoader,createjs.SoundLoader,createjs.ManifestLoader,createjs.SpriteSheetLoader,createjs.XMLLoader,createjs.SVGLoader,createjs.BinaryLoader,createjs.VideoLoader,createjs.TextLoader],this._defaultLoaderLength=this._availableLoaders.length,this.init(a,b,c)
	}var a=createjs.extend(LoadQueue,createjs.AbstractLoader),b=LoadQueue;a.init=function(a,b,c){this.useXHR=!0,this.preferXHR=!0,this._preferXHR=!0,this.setPreferXHR(a),this._paused=!1,this._basePath=b,this._crossOrigin=c,this._loadStartWasDispatched=!1,this._currentlyLoadingScript=null,this._currentLoads=[],this._loadQueue=[],this._loadQueueBackup=[],this._loadItemsById={},this._loadItemsBySrc={},this._loadedResults={},this._loadedRawResults={},this._numItems=0,this._numItemsLoaded=0,this._scriptOrder=[],this._loadedScripts=[],this._lastProgress=0/0},b.loadTimeout=8e3,b.LOAD_TIMEOUT=0,b.BINARY=createjs.AbstractLoader.BINARY,b.CSS=createjs.AbstractLoader.CSS,b.IMAGE=createjs.AbstractLoader.IMAGE,b.JAVASCRIPT=createjs.AbstractLoader.JAVASCRIPT,b.JSON=createjs.AbstractLoader.JSON,b.JSONP=createjs.AbstractLoader.JSONP,b.MANIFEST=createjs.AbstractLoader.MANIFEST,b.SOUND=createjs.AbstractLoader.SOUND,b.VIDEO=createjs.AbstractLoader.VIDEO,b.SVG=createjs.AbstractLoader.SVG,b.TEXT=createjs.AbstractLoader.TEXT,b.XML=createjs.AbstractLoader.XML,b.POST=createjs.AbstractLoader.POST,b.GET=createjs.AbstractLoader.GET,a.registerLoader=function(a){if(!a||!a.canLoadItem)throw new Error("loader is of an incorrect type.");if(-1!=this._availableLoaders.indexOf(a))throw new Error("loader already exists.");this._availableLoaders.unshift(a)},a.unregisterLoader=function(a){var b=this._availableLoaders.indexOf(a);-1!=b&&b<this._defaultLoaderLength-1&&this._availableLoaders.splice(b,1)},a.setUseXHR=function(a){return this.setPreferXHR(a)},a.setPreferXHR=function(a){return this.preferXHR=0!=a&&null!=window.XMLHttpRequest,this.preferXHR},a.removeAll=function(){this.remove()},a.remove=function(a){var b=null;if(!a||a instanceof Array){if(a)b=a;else if(arguments.length>0)return}else b=[a];var c=!1;if(b){for(;b.length;){var d=b.pop(),e=this.getResult(d);for(f=this._loadQueue.length-1;f>=0;f--)if(g=this._loadQueue[f].getItem(),g.id==d||g.src==d){this._loadQueue.splice(f,1)[0].cancel();break}for(f=this._loadQueueBackup.length-1;f>=0;f--)if(g=this._loadQueueBackup[f].getItem(),g.id==d||g.src==d){this._loadQueueBackup.splice(f,1)[0].cancel();break}if(e)this._disposeItem(this.getItem(d));else for(var f=this._currentLoads.length-1;f>=0;f--){var g=this._currentLoads[f].getItem();if(g.id==d||g.src==d){this._currentLoads.splice(f,1)[0].cancel(),c=!0;break}}}c&&this._loadNext()}else{this.close();for(var h in this._loadItemsById)this._disposeItem(this._loadItemsById[h]);this.init(this.preferXHR,this._basePath)}},a.reset=function(){this.close();for(var a in this._loadItemsById)this._disposeItem(this._loadItemsById[a]);for(var b=[],c=0,d=this._loadQueueBackup.length;d>c;c++)b.push(this._loadQueueBackup[c].getItem());this.loadManifest(b,!1)},a.installPlugin=function(a){if(null!=a&&null!=a.getPreloadHandlers){this._plugins.push(a);var b=a.getPreloadHandlers();if(b.scope=a,null!=b.types)for(var c=0,d=b.types.length;d>c;c++)this._typeCallbacks[b.types[c]]=b;if(null!=b.extensions)for(c=0,d=b.extensions.length;d>c;c++)this._extensionCallbacks[b.extensions[c]]=b}},a.setMaxConnections=function(a){this._maxConnections=a,!this._paused&&this._loadQueue.length>0&&this._loadNext()},a.loadFile=function(a,b,c){if(null==a){var d=new createjs.ErrorEvent("PRELOAD_NO_FILE");return void this._sendError(d)}this._addItem(a,null,c),this.setPaused(b!==!1?!1:!0)},a.loadManifest=function(a,c,d){var e=null,f=null;if(a instanceof Array){if(0==a.length){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");return void this._sendError(g)}e=a}else if("string"==typeof a)e=[{src:a,type:b.MANIFEST}];else{if("object"!=typeof a){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");return void this._sendError(g)}if(void 0!==a.src){if(null==a.type)a.type=b.MANIFEST;else if(a.type!=b.MANIFEST){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");this._sendError(g)}e=[a]}else void 0!==a.manifest&&(e=a.manifest,f=a.path)}for(var h=0,i=e.length;i>h;h++)this._addItem(e[h],f,d);this.setPaused(c!==!1?!1:!0)},a.load=function(){this.setPaused(!1)},a.getItem=function(a){return this._loadItemsById[a]||this._loadItemsBySrc[a]},a.getResult=function(a,b){var c=this._loadItemsById[a]||this._loadItemsBySrc[a];if(null==c)return null;var d=c.id;return b&&this._loadedRawResults[d]?this._loadedRawResults[d]:this._loadedResults[d]},a.getItems=function(a){var b=[];for(var c in this._loadItemsById){var d=this._loadItemsById[c],e=this.getResult(c);(a!==!0||null!=e)&&b.push({item:d,result:e,rawResult:this.getResult(c,!0)})}return b},a.setPaused=function(a){this._paused=a,this._paused||this._loadNext()},a.close=function(){for(;this._currentLoads.length;)this._currentLoads.pop().cancel();this._scriptOrder.length=0,this._loadedScripts.length=0,this.loadStartWasDispatched=!1,this._itemCount=0,this._lastProgress=0/0},a._addItem=function(a,b,c){var d=this._createLoadItem(a,b,c);if(null!=d){var e=this._createLoader(d);null!=e&&("plugins"in e&&(e.plugins=this._plugins),d._loader=e,this._loadQueue.push(e),this._loadQueueBackup.push(e),this._numItems++,this._updateProgress(),(this.maintainScriptOrder&&d.type==createjs.LoadQueue.JAVASCRIPT||d.maintainOrder===!0)&&(this._scriptOrder.push(d),this._loadedScripts.push(null)))}},a._createLoadItem=function(a,b,c){var d=createjs.LoadItem.create(a);if(null==d)return null;var e="",f=c||this._basePath;if(d.src instanceof Object){if(!d.type)return null;if(b){e=b;var g=createjs.RequestUtils.parseURI(b);null==f||g.absolute||g.relative||(e=f+e)}else null!=f&&(e=f)}else{var h=createjs.RequestUtils.parseURI(d.src);h.extension&&(d.ext=h.extension),null==d.type&&(d.type=createjs.RequestUtils.getTypeByExtension(d.ext));var i=d.src;if(!h.absolute&&!h.relative)if(b){e=b;var g=createjs.RequestUtils.parseURI(b);i=b+i,null==f||g.absolute||g.relative||(e=f+e)}else null!=f&&(e=f);d.src=e+d.src}d.path=e,(void 0===d.id||null===d.id||""===d.id)&&(d.id=i);var j=this._typeCallbacks[d.type]||this._extensionCallbacks[d.ext];if(j){var k=j.callback.call(j.scope,d,this);if(k===!1)return null;k===!0||null!=k&&(d._loader=k),h=createjs.RequestUtils.parseURI(d.src),null!=h.extension&&(d.ext=h.extension)}return this._loadItemsById[d.id]=d,this._loadItemsBySrc[d.src]=d,null==d.crossOrigin&&(d.crossOrigin=this._crossOrigin),d},a._createLoader=function(a){if(null!=a._loader)return a._loader;for(var b=this.preferXHR,c=0;c<this._availableLoaders.length;c++){var d=this._availableLoaders[c];if(d&&d.canLoadItem(a))return new d(a,b)}return null},a._loadNext=function(){if(!this._paused){this._loadStartWasDispatched||(this._sendLoadStart(),this._loadStartWasDispatched=!0),this._numItems==this._numItemsLoaded?(this.loaded=!0,this._sendComplete(),this.next&&this.next.load&&this.next.load()):this.loaded=!1;for(var a=0;a<this._loadQueue.length&&!(this._currentLoads.length>=this._maxConnections);a++){var b=this._loadQueue[a];this._canStartLoad(b)&&(this._loadQueue.splice(a,1),a--,this._loadItem(b))}}},a._loadItem=function(a){a.on("fileload",this._handleFileLoad,this),a.on("progress",this._handleProgress,this),a.on("complete",this._handleFileComplete,this),a.on("error",this._handleError,this),a.on("fileerror",this._handleFileError,this),this._currentLoads.push(a),this._sendFileStart(a.getItem()),a.load()},a._handleFileLoad=function(a){a.target=null,this.dispatchEvent(a)},a._handleFileError=function(a){var b=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,a.item);this._sendError(b)},a._handleError=function(a){var b=a.target;this._numItemsLoaded++,this._finishOrderedItem(b,!0),this._updateProgress();var c=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,b.getItem());this._sendError(c),this.stopOnError?this.setPaused(!0):(this._removeLoadItem(b),this._cleanLoadItem(b),this._loadNext())},a._handleFileComplete=function(a){var b=a.target,c=b.getItem(),d=b.getResult();this._loadedResults[c.id]=d;var e=b.getResult(!0);null!=e&&e!==d&&(this._loadedRawResults[c.id]=e),this._saveLoadedItems(b),this._removeLoadItem(b),this._finishOrderedItem(b)||this._processFinishedLoad(c,b),this._cleanLoadItem(b)},a._saveLoadedItems=function(a){var b=a.getLoadedItems();if(null!==b)for(var c=0;c<b.length;c++){var d=b[c].item;this._loadItemsBySrc[d.src]=d,this._loadItemsById[d.id]=d,this._loadedResults[d.id]=b[c].result,this._loadedRawResults[d.id]=b[c].rawResult}},a._finishOrderedItem=function(a,b){var c=a.getItem();if(this.maintainScriptOrder&&c.type==createjs.LoadQueue.JAVASCRIPT||c.maintainOrder){a instanceof createjs.JavaScriptLoader&&(this._currentlyLoadingScript=!1);var d=createjs.indexOf(this._scriptOrder,c);return-1==d?!1:(this._loadedScripts[d]=b===!0?!0:c,this._checkScriptLoadOrder(),!0)}return!1},a._checkScriptLoadOrder=function(){for(var a=this._loadedScripts.length,b=0;a>b;b++){var c=this._loadedScripts[b];if(null===c)break;if(c!==!0){var d=this._loadedResults[c.id];c.type==createjs.LoadQueue.JAVASCRIPT&&createjs.DomUtils.appendToHead(d);var e=c._loader;this._processFinishedLoad(c,e),this._loadedScripts[b]=!0}}},a._processFinishedLoad=function(a,b){this._numItemsLoaded++,this.maintainScriptOrder||a.type!=createjs.LoadQueue.JAVASCRIPT||createjs.DomUtils.appendToHead(a.result),this._updateProgress(),this._sendFileComplete(a,b),this._loadNext()},a._canStartLoad=function(a){if(!this.maintainScriptOrder||a.preferXHR)return!0;var b=a.getItem();if(b.type!=createjs.LoadQueue.JAVASCRIPT)return!0;if(this._currentlyLoadingScript)return!1;for(var c=this._scriptOrder.indexOf(b),d=0;c>d;){var e=this._loadedScripts[d];if(null==e)return!1;d++}return this._currentlyLoadingScript=!0,!0},a._removeLoadItem=function(a){for(var b=this._currentLoads.length,c=0;b>c;c++)if(this._currentLoads[c]==a){this._currentLoads.splice(c,1);break}},a._cleanLoadItem=function(a){var b=a.getItem();b&&delete b._loader},a._handleProgress=function(a){var b=a.target;this._sendFileProgress(b.getItem(),b.progress),this._updateProgress()},a._updateProgress=function(){var a=this._numItemsLoaded/this._numItems,b=this._numItems-this._numItemsLoaded;if(b>0){for(var c=0,d=0,e=this._currentLoads.length;e>d;d++)c+=this._currentLoads[d].progress;a+=c/b*(b/this._numItems)}this._lastProgress!=a&&(this._sendProgress(a),this._lastProgress=a)},a._disposeItem=function(a){delete this._loadedResults[a.id],delete this._loadedRawResults[a.id],delete this._loadItemsById[a.id],delete this._loadItemsBySrc[a.src]},a._sendFileProgress=function(a,b){if(!this._isCanceled()&&!this._paused&&this.hasEventListener("fileprogress")){var c=new createjs.Event("fileprogress");c.progress=b,c.loaded=b,c.total=1,c.item=a,this.dispatchEvent(c)}},a._sendFileComplete=function(a,b){if(!this._isCanceled()&&!this._paused){var c=new createjs.Event("fileload");c.loader=b,c.item=a,c.result=this._loadedResults[a.id],c.rawResult=this._loadedRawResults[a.id],a.completeHandler&&a.completeHandler(c),this.hasEventListener("fileload")&&this.dispatchEvent(c)}},a._sendFileStart=function(a){var b=new createjs.Event("filestart");b.item=a,this.hasEventListener("filestart")&&this.dispatchEvent(b)},a.toString=function(){return"[PreloadJS LoadQueue]"},createjs.LoadQueue=createjs.promote(LoadQueue,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function TextLoader(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.TEXT)}var a=(createjs.extend(TextLoader,createjs.AbstractLoader),TextLoader);a.canLoadItem=function(a){return a.type==createjs.AbstractLoader.TEXT},createjs.TextLoader=createjs.promote(TextLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function BinaryLoader(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.BINARY),this.on("initialize",this._updateXHR,this)}var a=createjs.extend(BinaryLoader,createjs.AbstractLoader),b=BinaryLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.BINARY},a._updateXHR=function(a){a.loader.setResponseType("arraybuffer")},createjs.BinaryLoader=createjs.promote(BinaryLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function CSSLoader(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.CSS),this.resultFormatter=this._formatResult,this._tagSrcAttribute="href",this._tag=document.createElement(b?"style":"link"),this._tag.rel="stylesheet",this._tag.type="text/css"}var a=createjs.extend(CSSLoader,createjs.AbstractLoader),b=CSSLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.CSS},a._formatResult=function(a){if(this._preferXHR){var b=a.getTag();if(b.styleSheet)b.styleSheet.cssText=a.getResult(!0);else{var c=document.createTextNode(a.getResult(!0));b.appendChild(c)}}else b=this._tag;return createjs.DomUtils.appendToHead(b),b},createjs.CSSLoader=createjs.promote(CSSLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function ImageLoader(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.IMAGE),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",createjs.RequestUtils.isImageTag(a)?this._tag=a:createjs.RequestUtils.isImageTag(a.src)?this._tag=a.src:createjs.RequestUtils.isImageTag(a.tag)&&(this._tag=a.tag),null!=this._tag?this._preferXHR=!1:this._tag=document.createElement("img"),this.on("initialize",this._updateXHR,this)}var a=createjs.extend(ImageLoader,createjs.AbstractLoader),b=ImageLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.IMAGE},a.load=function(){if(""!=this._tag.src&&this._tag.complete)return void this._sendComplete();var a=this._item.crossOrigin;1==a&&(a="Anonymous"),null==a||createjs.RequestUtils.isLocal(this._item.src)||(this._tag.crossOrigin=a),this.AbstractLoader_load()},a._updateXHR=function(a){a.loader.mimeType="text/plain; charset=x-user-defined-binary",a.loader.setResponseType&&a.loader.setResponseType("blob")},a._formatResult=function(a){var b=this;return function(c){var d=b._tag,e=window.URL||window.webkitURL;if(b._preferXHR)if(e){var f=e.createObjectURL(a.getResult(!0));d.src=f,d.onload=function(){e.revokeObjectURL(b.src)}}else d.src=a.getItem().src;else;d.complete?c(d):d.onload=function(){c(this)}}},createjs.ImageLoader=createjs.promote(ImageLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function JavaScriptLoader(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.JAVASCRIPT),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.setTag(document.createElement("script"))}var a=createjs.extend(JavaScriptLoader,createjs.AbstractLoader),b=JavaScriptLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JAVASCRIPT},a._formatResult=function(a){var b=a.getTag();return this._preferXHR&&(b.text=a.getResult(!0)),b},createjs.JavaScriptLoader=createjs.promote(JavaScriptLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function JSONLoader(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.JSON),this.resultFormatter=this._formatResult}var a=createjs.extend(JSONLoader,createjs.AbstractLoader),b=JSONLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JSON&&!a._loadAsJSONP},a._formatResult=function(a){var b=null;try{b=createjs.DataUtils.parseJSON(a.getResult(!0))}catch(c){var d=new createjs.ErrorEvent("JSON_FORMAT",null,c);return this._sendError(d),c}return b},createjs.JSONLoader=createjs.promote(JSONLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function JSONPLoader(a){this.AbstractLoader_constructor(a,!1,createjs.AbstractLoader.JSONP),this.setTag(document.createElement("script")),this.getTag().type="text/javascript"}var a=createjs.extend(JSONPLoader,createjs.AbstractLoader),b=JSONPLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JSONP||a._loadAsJSONP},a.cancel=function(){this.AbstractLoader_cancel(),this._dispose()},a.load=function(){if(null==this._item.callback)throw new Error("callback is required for loading JSONP requests.");if(null!=window[this._item.callback])throw new Error("JSONP callback '"+this._item.callback+"' already exists on window. You need to specify a different callback or re-name the current one.");window[this._item.callback]=createjs.proxy(this._handleLoad,this),window.document.body.appendChild(this._tag),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag.src=this._item.src},a._handleLoad=function(a){this._result=this._rawResult=a,this._sendComplete(),this._dispose()},a._handleTimeout=function(){this._dispose(),this.dispatchEvent(new createjs.ErrorEvent("timeout"))},a._dispose=function(){window.document.body.removeChild(this._tag),delete window[this._item.callback],clearTimeout(this._loadTimeout)},createjs.JSONPLoader=createjs.promote(JSONPLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function ManifestLoader(a){this.AbstractLoader_constructor(a,null,createjs.AbstractLoader.MANIFEST),this.plugins=null,this._manifestQueue=null}var a=createjs.extend(ManifestLoader,createjs.AbstractLoader),b=ManifestLoader;b.MANIFEST_PROGRESS=.25,b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.MANIFEST},a.load=function(){this.AbstractLoader_load()},a._createRequest=function(){var a=this._item.callback;this._request=null!=a?new createjs.JSONPLoader(this._item):new createjs.JSONLoader(this._item)},a.handleEvent=function(a){switch(a.type){case"complete":return this._rawResult=a.target.getResult(!0),this._result=a.target.getResult(),this._sendProgress(b.MANIFEST_PROGRESS),void this._loadManifest(this._result);case"progress":return a.loaded*=b.MANIFEST_PROGRESS,this.progress=a.loaded/a.total,(isNaN(this.progress)||1/0==this.progress)&&(this.progress=0),void this._sendProgress(a)}this.AbstractLoader_handleEvent(a)},a.destroy=function(){this.AbstractLoader_destroy(),this._manifestQueue.close()},a._loadManifest=function(a){if(a&&a.manifest){var b=this._manifestQueue=new createjs.LoadQueue;b.on("fileload",this._handleManifestFileLoad,this),b.on("progress",this._handleManifestProgress,this),b.on("complete",this._handleManifestComplete,this,!0),b.on("error",this._handleManifestError,this,!0);for(var c=0,d=this.plugins.length;d>c;c++)b.installPlugin(this.plugins[c]);b.loadManifest(a)}else this._sendComplete()},a._handleManifestFileLoad=function(a){a.target=null,this.dispatchEvent(a)},a._handleManifestComplete=function(){this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},a._handleManifestProgress=function(a){this.progress=a.progress*(1-b.MANIFEST_PROGRESS)+b.MANIFEST_PROGRESS,this._sendProgress(this.progress)},a._handleManifestError=function(a){var b=new createjs.Event("fileerror");b.item=a.data,this.dispatchEvent(b)},createjs.ManifestLoader=createjs.promote(ManifestLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function SoundLoader(a,b){this.AbstractMediaLoader_constructor(a,b,createjs.AbstractLoader.SOUND),createjs.RequestUtils.isAudioTag(a)?this._tag=a:createjs.RequestUtils.isAudioTag(a.src)?this._tag=a:createjs.RequestUtils.isAudioTag(a.tag)&&(this._tag=createjs.RequestUtils.isAudioTag(a)?a:a.src),null!=this._tag&&(this._preferXHR=!1)}var a=createjs.extend(SoundLoader,createjs.AbstractMediaLoader),b=SoundLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SOUND},a._createTag=function(a){var b=document.createElement("audio");return b.autoplay=!1,b.preload="none",b.src=a,b},createjs.SoundLoader=createjs.promote(SoundLoader,"AbstractMediaLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function VideoLoader(a,b){this.AbstractMediaLoader_constructor(a,b,createjs.AbstractLoader.VIDEO),createjs.RequestUtils.isVideoTag(a)||createjs.RequestUtils.isVideoTag(a.src)?(this.setTag(createjs.RequestUtils.isVideoTag(a)?a:a.src),this._preferXHR=!1):this.setTag(this._createTag())}var a=createjs.extend(VideoLoader,createjs.AbstractMediaLoader),b=VideoLoader;a._createTag=function(){return document.createElement("video")},b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.VIDEO},createjs.VideoLoader=createjs.promote(VideoLoader,"AbstractMediaLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function SpriteSheetLoader(a){this.AbstractLoader_constructor(a,null,createjs.AbstractLoader.SPRITESHEET),this._manifestQueue=null}var a=createjs.extend(SpriteSheetLoader,createjs.AbstractLoader),b=SpriteSheetLoader;b.SPRITESHEET_PROGRESS=.25,b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SPRITESHEET},a.destroy=function(){this.AbstractLoader_destroy,this._manifestQueue.close()},a._createRequest=function(){var a=this._item.callback;this._request=null!=a&&a instanceof Function?new createjs.JSONPLoader(this._item):new createjs.JSONLoader(this._item)},a.handleEvent=function(a){switch(a.type){case"complete":return this._rawResult=a.target.getResult(!0),this._result=a.target.getResult(),this._sendProgress(b.SPRITESHEET_PROGRESS),void this._loadManifest(this._result);case"progress":return a.loaded*=b.SPRITESHEET_PROGRESS,this.progress=a.loaded/a.total,(isNaN(this.progress)||1/0==this.progress)&&(this.progress=0),void this._sendProgress(a)}this.AbstractLoader_handleEvent(a)},a._loadManifest=function(a){if(a&&a.images){var b=this._manifestQueue=new createjs.LoadQueue;b.on("complete",this._handleManifestComplete,this,!0),b.on("fileload",this._handleManifestFileLoad,this),b.on("progress",this._handleManifestProgress,this),b.on("error",this._handleManifestError,this,!0),b.loadManifest(a.images)}},a._handleManifestFileLoad=function(a){var b=a.result;if(null!=b){var c=this.getResult().images,d=c.indexOf(a.item.src);c[d]=b}},a._handleManifestComplete=function(){this._result=new createjs.SpriteSheet(this._result),this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},a._handleManifestProgress=function(a){this.progress=a.progress*(1-b.SPRITESHEET_PROGRESS)+b.SPRITESHEET_PROGRESS,this._sendProgress(this.progress)},a._handleManifestError=function(a){var b=new createjs.Event("fileerror");b.item=a.data,this.dispatchEvent(b)},createjs.SpriteSheetLoader=createjs.promote(SpriteSheetLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function SVGLoader(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.SVG),this.resultFormatter=this._formatResult,this._tagSrcAttribute="data",b?this.setTag(document.createElement("svg")):(this.setTag(document.createElement("object")),this.getTag().type="image/svg+xml")}var a=createjs.extend(SVGLoader,createjs.AbstractLoader),b=SVGLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SVG},a._formatResult=function(a){var b=createjs.DataUtils.parseXML(a.getResult(!0),"text/xml"),c=a.getTag();return!this._preferXHR&&document.body.contains(c)&&document.body.removeChild(c),null!=b.documentElement?(c.appendChild(b.documentElement),c.style.visibility="visible",c):b},createjs.SVGLoader=createjs.promote(SVGLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function XMLLoader(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.XML),this.resultFormatter=this._formatResult}var a=createjs.extend(XMLLoader,createjs.AbstractLoader),b=XMLLoader;b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.XML},a._formatResult=function(a){return createjs.DataUtils.parseXML(a.getResult(!0),"text/xml")},createjs.XMLLoader=createjs.promote(XMLLoader,"AbstractLoader")}();
	module.exports=createjs;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var createjs = __webpack_require__(6);
	var $ = __webpack_require__(1);

	var game;
	var Loader = {};
	var images = images || {};
	var ss = ss || {};
	var lib = lib || {};
	var totalJson;
	var dtd = $.Deferred();

	Loader = function(loadName, jsonNum) {
	    this.totalJson = jsonNum;
	    this.loadName = loadName;
	    this.images = {};
	    this.ss = {};
	    this.lib = {};
	    this.dtd = $.Deferred();
	};

	Loader.prototype = {
	    init: function() {
	        game = __webpack_require__(9)("./" + this.loadName + ".js");
	        game(this.lib, this.images, createjs, this.ss)
	        this.loadInt();
	        return this.dtd.promise();
	    },
	    loadInt: function() {
	        var tempImgArr = [];
	        var that = this;

	        for (var i = 0; i < that.totalJson; i++) {
	            if (i == 0) {
	                var json = __webpack_require__(11)("./" + that.loadName + "/" + that.loadName + "_atlas_.json");
	                that.ss[that.loadName + "_atlas_"] = new createjs.SpriteSheet(json);
	            } else {
	                var json = __webpack_require__(13)("./" + that.loadName + "/" + that.loadName + "_atlas_" + (i + 1) + ".json");
	                that.ss[that.loadName + "_atlas_" + (i + 1)] = new createjs.SpriteSheet(json);
	            }
	            for (var j = 0; j < json.images.length; j++) {
	                tempImgArr.push({
	                    "id": "json",
	                    "src": json.images[j]
	                });
	            }
	        }

	        tempImgArr = tempImgArr.concat(that.lib.properties.manifest);

	        var cur = 0;
	        var len = tempImgArr.length;
	        for (var i = 0; i < len; i++) {
	            var imgObj = new Image();
	            imgObj.onload = function() {
	                cur++;
	                if (this.id != "json") {
	                    that.images[this.id] = this;
	                }
	                that.loadProgess(parseInt(cur / len * 100));
	                if (cur >= len) {
	                    that.handleComplete();
	                }
	            }
	            imgObj.src = tempImgArr[i]['src'];
	            imgObj.id = tempImgArr[i]['id'];
	        }
	    },
	    loadProgess: function(value) {},
	    handleComplete: function() {
	        var exportRoot = this.lib;
	        this.dtd.resolve(exportRoot);
	    }
	};

	module.exports = Loader;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./all.js": 10
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 9;


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = (function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 640,
		height: 1040,
		fps: 25,
		color: "#FFFFFF",
		manifest: []
	};



	// symbols:



	(lib.未标题1 = function() {
		this.spriteSheet = ss["all_atlas_5"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_000_1466940665440 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_012_1466940665727 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_017_1466940666173 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_022_1466940665857 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_036_1466940665024 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_039_1466940666028 = function() {
		this.spriteSheet = ss["all_atlas_4"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_044_1466940665590 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_045_1466940664954 = function() {
		this.spriteSheet = ss["all_atlas_5"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_046_1466940664956 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_047_1466940666267 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_049_1466940664982 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_051_1466940667636 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_052_1466940667592 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_062_1466940667359 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_067_1466940665119 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_067_1466940666130 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_068_1466940665389 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_073_1466940667800 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_076_1466940665366 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_081_1466940666344 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_085_1466940666313 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_099_1466940666766 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_104_1466940666910 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_107_1466940665963 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_111_1466940664955 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_114_1466940666580 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_118_1466940667169 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(22);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_120_1466940665551 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(23);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_125_1466940665788 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(24);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_136_1466940664971 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(25);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_139_1466940668020 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(26);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_147_1466940665616 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(27);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_151_1466940665756 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(28);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_153_1466940665039 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(29);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_153_1466940667010 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(30);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_154_1466940666627 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(31);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_165_1466940665004 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(32);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_167_1466940667515 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_176_1466940667044 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(33);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_180_1466940665281 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(34);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_196_1466940665899 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(35);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_197_1466940665705 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(36);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_203_1466940667724 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(37);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_207_1466940664962 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(38);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_215_1466940667414 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(39);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_222_1466940665819 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(40);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_224_1466940665086 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(41);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_231_1466940665051 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(42);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_232_1466940665064 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_233_1466940666376 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(43);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_249_1466940665332 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_253_1466940666101 = function() {
		this.spriteSheet = ss["all_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_254_1466940665422 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(44);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_275_1466940665471 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(45);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_282_1466940667241 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(46);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_285_1466940666007 = function() {
		this.spriteSheet = ss["all_atlas_4"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_302_1466940664972 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_307_1466940665261 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(47);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_308_1466940667446 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(48);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_309_1466940664957 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_333_1466940665686 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(49);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_343_1466940665099 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(50);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_353_1466940668101 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(51);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_358_1466940664960 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_360_1466940665515 = function() {
		this.spriteSheet = ss["all_atlas_5"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_375_1466940664969 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(52);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_378_1466940665489 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(53);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_385_1466940665077 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_387_1466940665109 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(54);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_390_1466940667269 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(55);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_398_1466940664996 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(56);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_404_1466940666745 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(57);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_404_1466940667914 = function() {
		this.spriteSheet = ss["all_atlas_5"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_405_1466940666236 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(58);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_408_1466940665924 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(59);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_409_1466940666059 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(60);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_411_1466940667863 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(61);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_418_1466940664961 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(62);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_423_1466940666957 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(63);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_429_1466940664987 = function() {
		this.spriteSheet = ss["all_atlas_5"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_450_1466940666219 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(64);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_451_1466940665991 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(65);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_457_1466940667679 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(66);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_458_1466940665575 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(67);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_503_1466940665309 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(68);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_505_1466940665842 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(69);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_510_1466940666812 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(70);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_520_1466940664959 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_522_1466940665538 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(71);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_523_1466940667983 = function() {
		this.spriteSheet = ss["all_atlas_5"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_527_1466940665886 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(72);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_532_1466940667293 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(73);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_536_1466940667704 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(74);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_542_1466940668144 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_543_1466940665136 = function() {
		this.spriteSheet = ss["all_atlas_3"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_553_1466940664986 = function() {
		this.spriteSheet = ss["all_atlas_5"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_574_1466940667204 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(75);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_577_1466940668058 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(76);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_578_1466940666612 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(77);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_596_1466940665355 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(78);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_606_1466940666082 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(79);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_607_1466940665321 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(80);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_609_1466940664968 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(81);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_610_1466940668128 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(82);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_613_1466940666300 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(83);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_620_1466940667220 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(84);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_631_1466940667576 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(85);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_634_1466940664985 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_638_1466940667399 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(86);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_650_1466940666161 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_654_1466940665412 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(87);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_659_1466940664965 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(88);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_667_1466940668082 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_682_1466940664973 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(89);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_695_1466940664975 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(90);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_697_1466940664976 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(91);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_702_1466940666801 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(92);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_703_1466940664991 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(93);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_711_1466940666946 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(94);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_714_1466940667902 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(95);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_717_1466940666256 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(96);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_724_1466940667843 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(97);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_724_1466940667889 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(98);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_729_1466940665506 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_731_1466940664977 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(99);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_735_1466940666209 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(100);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_736_1466940666463 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(101);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_748_1466940667550 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_750_1466940664989 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(102);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_750_1466940665780 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(103);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_756_1466940664964 = function() {
		this.spriteSheet = ss["all_atlas_5"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_760_1466940667348 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(104);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_780_1466940666571 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(105);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_788_1466940665348 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(106);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_791_1466940665247 = function() {
		this.spriteSheet = ss["all_atlas_2"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_792_1466940666094 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(107);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_797_1466940665532 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(108);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_798_1466940667855 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_802_1466940666076 = function() {
		this.spriteSheet = ss["all_atlas_4"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_815_1466940664978 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(109);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_817_1466940667568 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(110);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_851_1466940667561 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_865_1466940666125 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(111);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_867_1466940666978 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(112);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_876_1466940665061 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(113);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_877_1466940665257 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(114);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_879_1466940668096 = function() {
		this.spriteSheet = ss["all_atlas_4"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_888_1466940664979 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(115);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_891_1466940665253 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(116);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_896_1466940665277 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(117);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_912_1466940664994 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(118);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_919_1466940667474 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(119);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_930_1466940665075 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(120);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_939_1466940665134 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_942_1466940667979 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_946_1466940665038 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(121);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_957_1466940664966 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(122);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_959_1466940664970 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(123);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_959_1466940667234 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(124);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_961_1466940665003 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(125);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_971_1466940666830 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(126);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_974_1466940667358 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(127);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_974_1466940667703 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_981_1466940665657 = function() {
		this.spriteSheet = ss["all_atlas_3"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.happy_993_1466940665365 = function() {
		this.spriteSheet = ss["all_atlas_7"];
		this.gotoAndStop(128);
	}).prototype = p = new cjs.Sprite();



	(lib.p7 = function() {
		this.spriteSheet = ss["all_atlas_5"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib.p12 = function() {
		this.spriteSheet = ss["all_atlas_5"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib.p15 = function() {
		this.spriteSheet = ss["all_atlas_6"];
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();



	(lib.Tween1 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_942_1466940667979();
		this.instance.setTransform(-132.5,-95.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-132.5,-95.5,265,191);


	(lib.Symbol1 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_360_1466940665515();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,336,350);


	(lib.happy_988_1466940664954 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_308_1466940667446();
		this.instance.setTransform(-24,-13);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-24,-13,48,26);


	(lib.happy_983_1466940664953 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F8EAE1").s().p("AAoBEQgFgCgjgUQgRgKgVgaQgYgbAAgSQAAghAeABQAPABAPAHQADAUAfAlQAPARAPAOQAEAngVAAIgFAAg");
		this.shape.setTransform(0,0,2.075,2.075);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-13,-14.2,26.2,28.6);


	(lib.happy_978_1466940664952 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AkrD6IAAnzIJXAAIAAHzg");
		this.shape.setTransform(30,25);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,50);


	(lib.happy_970_1466940664938 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.happy_049_1466940664982();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,28.5,27);


	(lib.happy_967_1466940664945 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#010302").s().p("AgFAOQgEAAgCgDQgFgGAGgFIALgKQAGgFAGAGQACACAAAEQAAADgDABIgMALQgBACgDAAIgBAAg");
		this.shape.setTransform(11.4,2,1.44,1.44);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#030606").s().p("AgMApQgRgGgIgQQgIgQAGgPQAFgRAQgIQAQgIAPAGQARAFAIAQQAIAQgGAPQgFARgQAIQgKAFgJAAQgFAAgHgCg");
		this.shape_1.setTransform(6.2,6.9,1.44,1.44);

		this.addChild(this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13.6,13.1);


	(lib.happy_945_1466940664943 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.happy_375_1466940664969();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,177.3,110.4);


	(lib.happy_944_1466940664947 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F6C8A6").s().p("Agrg8IBBgMIAXCCIhBAPg");
		this.shape.setTransform(6.5,10.6,1.44,1.44);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,13,21.1);


	(lib.happy_940_1466940664953 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AkrD6IAAnzIJXAAIAAHzg");
		this.shape.setTransform(30,25);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,50);


	(lib.happy_929_1466940664951 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_724_1466940667889();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,26);


	(lib.happy_928_1466940664953 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AkrD6IAAnzIJXAAIAAHzg");
		this.shape.setTransform(30,25);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,50);


	(lib.happy_926_1466940664954 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_308_1466940667446();
		this.instance.setTransform(-24,-13);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-24,-13,48,26);


	(lib.happy_912_1466940664943 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.happy_609_1466940664968();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,156,39);


	(lib.happy_896_1466940664947 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FDBAA1").s().p("AgsCbQgOgCgCgKIAAgKQgFAEgGADQgMAGgIgHQgIgGABgJIACgJQgPAGgMgOQgIgIADgLIAFgJQgFAAgFgCQgJgDABgMQAAgIALgNIAKgLIAnhFQAwhMAzgbQA8gfAsAvQASATACAYQACAYgSASQgSASgXAYQgtA1gYAoIAIAPQAGARgNAJQgNAIgJgJIgKgKQgDAIgFAIQgKAPgJAAIgCAAg");
		this.shape.setTransform(25.1,27.4,1.763,1.763);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,50.3,54.8);


	(lib.happy_893_1466940664946 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.happy_302_1466940664972();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,276,226);


	(lib.happy_884_1466940664945 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.happy_682_1466940664973();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,72.3,103);


	(lib.happy_877_1466940664946 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EEB58C").s().p("AgyhXIBFgMIAgC3IhGAQg");
		this.shape.setTransform(7.5,14.4,1.44,1.44);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,15,28.9);


	(lib.happy_870_1466940664931 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_542_1466940668144();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,374,148);


	(lib.happy_331_1466940664930 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_253_1466940666101();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


	(lib.happy_119_1466940664930 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_285_1466940666007();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,499,522);


	(lib.happy_062_1466940664930 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_022_1466940665857();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,211,76);


	(lib.happy_870_1466940664942 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.happy_957_1466940664966();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,184.3,28.5);


	(lib.happy_867_1466940664943 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F3D3BE").s().p("AATADQgcgFgiAAIgCgHIAbACQAfAEAgAJQADADgEABIgZgHg");
		this.shape.setTransform(19.7,10.1,1.763,1.763);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#EECBB5").s().p("Ag3BuQgLgTgBgqQAAgOgKgbQgKgYAAgkQgFgRgBgSQgBgkAYgFQAXgGAMAVIAEAHIgBgIQgBgYASABIALADQAJAGAEAQIACgGQAFgFAKABIAGACQAGADACAHIAFgCQAGgBADADQAGAHABAGIAGgCQAHAAADAHQAFALgFAHIAJAYQAJAdgCAVQgCAsgOAjQgXA2gvAFIgKAAQglAAgPgcg");
		this.shape_1.setTransform(16.6,24.5,1.763,1.763);

		this.addChild(this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33.2,49);


	(lib.happy_841_1466940664951 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AgrAKQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIABgCQAxgQApABIgCAHQgiAAgcAFQgWAHgDAAIAAAAg");
		this.shape.setTransform(13.5,10.1,1.763,1.763);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F6C6BB").s().p("AgGCKQgvgFgWg2QgPgigCgtQgBgVAIgdIAJgYQgFgHAFgLQADgHAHAAIAGACQABgGAGgHQAEgDAGABIAFACQABgHAHgDIAGgCQAJgBAFAFIADAGQAEgQAJgGIAKgDQASgBgBAYIgBAKIAEgJQAMgVAYAGQAXAFgBAkQgBASgFARQAAAkgJAYQgKAbgBAOQgBAqgLATQgPAcglAAIgKAAg");
		this.shape_1.setTransform(16.5,24.5,1.763,1.763);

		this.addChild(this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33.1,49);


	(lib.happy_837_1466940664943 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F3D3BE").s().p("AguAQQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABgBQAqgVAxgHIAAAGQgJAAgRAEQgfAGgiARIgCgBg");
		this.shape.setTransform(11.6,11.8,1.763,1.763);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#EECBB5").s().p("AgpBmQgPgUgRgzQgJgdgBgYIAAgVQgDAAgDgDQgFgEABgJQACgJAHgDQAEgCAEABIgCgHQgBgIAGgDQAJgFAHAHQgCgEAAgFQAAgKAKgEQAJgEAGAJQAEAFABAFQgBgPAJgIQAEgEAFgCQATgEAIAaIADALIABgNQAFgcAZAAQAaAAAEAfQACAPgDAPQAMAWADAWQACASgEAXQgDAUgBAOIABARQAAAdgLAQQgOAVgkADIgIABQgkAAgYggg");
		this.shape_1.setTransform(16.6,23.6,1.763,1.763);

		this.addChild(this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33.3,47.3);


	(lib.happy_830_1466940664950 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F6C6BB").s().p("AgmCmQgJgDgDgKIgBgIQgMAKgQgJQgLgFAAgLIACgKQgFACgFAAQgKgBgDgLQgCgIAGgPIAGgPQACgjALgqQAVhXAogrQAtgyA5AeQAXANAKAVQAKAXgMAWIgXA4QgaA+gKAtIANAMQALAPgJAMQgJAMgOgFIgNgGIgCASQgFATgKACQgMADgFgJIgDgKIgIAKQgHAHgHAAIgFgBg");
		this.shape.setTransform(19.9,29.5,1.763,1.763);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,39.9,59.1);


	(lib.happy_821_1466940664945 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.happy_959_1466940664970();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,131.3,69);


	(lib.happy_806_1466940664941 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F8EAE1").s().p("AA5BvQhkgRg5hXQhMhyAzgGQAZgDAoAUICHA8IBICSQgUAFgYAAQgWAAgYgEg");
		this.shape.setTransform(30.5,164.1,2.075,2.075);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F8EAE1").s().p("AkMBKQgHgTgCgWIAAgRQB2gdCahIQBLglA2geQBagbAsA9QArA9g1BEQgrA5jBA1Ii3ApQhJgZgYg/g");
		this.shape_1.setTransform(93.3,154,2.075,2.075);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#F8EAE1").s().p("AhDGAQgjgDgcgVQhIgzAqhTQA+h4AVg3QAmhhAHhpQgChkAJg2QAPhlA9AeIATALQAYAPAUAZQA/BQAACSQAAB6hGCfQg+CPg1ArQgUAQgeAAIgJAAg");
		this.shape_2.setTransform(146.9,79.8,2.075,2.075);

		this.addChild(this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,183.7,188.1);


	(lib.happy_803_1466940664952 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AkrD6IAAnzIJXAAIAAHzg");
		this.shape.setTransform(30,25);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,50);


	(lib.happy_570_1466940664928 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_309_1466940664957();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,461,108);


	(lib.happy_438_1466940664928 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_036_1466940665024();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,143,49);


	(lib.happy_814_1466940664928 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.p7();
		this.instance.setTransform(83.2,211.5,0.891,0.891);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(83.2,211.5,516.8,347.5);


	(lib.happy_149_1466940664928 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_139_1466940668020();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,51,43);


	(lib.happy_792_1466940664946 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F5AB96").s().p("Aj0AAQgcgRgPgYIgKgUIJTAAQAEAfghAeQhBA9i0ABIgJAAQisAAhXg+g");
		this.shape.setTransform(52.7,11.1,1.763,1.763);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,105.4,22.2);


	(lib.happy_786_1466940664952 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AkrD6IAAnzIJXAAIAAHzg");
		this.shape.setTransform(30,25);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,50);


	(lib.happy_778_1466940664938 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_879_1466940668096();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,499,522);


	(lib.happy_763_1466940664949 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FDBAA1").s().p("AgoAVIAAgCQApgdAogMIAAAIQggAJgZAOQgUAOgCAAIgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
		this.shape.setTransform(10.8,12.7,1.763,1.763);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F5AB96").s().p("AgrBmQgXgdgQgqQgHgVAAgcIABgaQgGgFABgMQABgIAGgCIAHAAIAAgEQABgFACgFQACgEAGgBIAGAAQgBgGAGgFIAFgEQAJgEAGAEQADACABADQgBgRAJgJQAFgEAEgCQAQgFAFAXIACAJIACgJQAFgYAYgBQAYgCAJAjQAFASgBARQALAjgCAbQgBAbADAOQALAogEAWQgIAkguAJIgPABQgjAAgggmg");
		this.shape_1.setTransform(16.7,24.8,1.763,1.763);

		this.addChild(this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33.3,49.6);


	(lib.happy_763_1466940664941 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EECBB5").s().p("AAUCgIgIgKQAAAFgDAFQgFAJgMgDQgKgCgFgTIgDgSQgFAEgHACQgOAFgJgMQgJgMALgPQAFgHAIgFQgKgtgag+IgYg4QgLgWAKgXQAJgVAYgNQA4geAtAyQApArAVBXQALAqACAjIAGAPQAGAPgCAIQgDALgKABIgKgCIACAKQAAALgLAFQgKAGgKgDIgIgEIgBAIQgDAKgJADIgFABQgHAAgHgHg");
		this.shape.setTransform(20,29.5,1.763,1.763);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,40,59.1);


	(lib.happy_752_1466940664939 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F8EAE1").s().p("Ag6BVQgPgDgIgKIgEgKQgPgKABgOIADgMQgIAAgGgTQgEgKAKgJQAFgFAFgCQgFgEgBgHIAAgGQgBgOATgHQAKgEAKAAIAPgMQASgMAUgEQASgEAoAWQATALAQALIAWAtQAQAvgZAXQgaAXg6ACIgFAAQgdAAglgGg");
		this.shape.setTransform(16.3,77.3,1.44,1.44);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F8EAE1").s().p("AjIgjIAtgDQA4gHA2gNQA0gNA1gFQAagDAPAAQBWACAMA6QAFAVgKAWQgLAVgTAJQg8AaiIgEQgpgBg9ACIg1ADg");
		this.shape_1.setTransform(57.4,75.3,1.44,1.44);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#F8EAE1").s().p("AgIELIgYgeQg4kGgghoQgKgeADgjQAGhGBAgUQA/gVAsA5QAWAcAJAgIAWCFQAWCcAEB9QgEAOgLAPQgXAegjAFIgKABQgdAAgZgYg");
		this.shape_2.setTransform(68.6,42,1.44,1.44);

		this.addChild(this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,87.2,90.5);


	(lib.happy_693_1466940664947 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F5AB96").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
		this.shape.setTransform(102.3,35.7,1.763,1.763);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F5AB96").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
		this.shape_1.setTransform(38,37.6,1.763,1.763);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#D4E7EA").s().p("AAfBVQgQgOgQgcQgkg1gKhKIASADIANA5QAUA/AsAug");
		this.shape_2.setTransform(52.6,89,1.763,1.763);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#D4E7EA").s().p("AAOgWIAIg5IAPgDQgEBKgeAzIgaAmIgNACQAkgrAOg+g");
		this.shape_3.setTransform(84,88.3,1.763,1.763);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFFFF").s().p("AiaByQAGgbgPglQgehIhsgwIAEgsIAWANQAcAQAjANQBvAqCMgEQCdgFBAgrQAggWABgUIAJA+QgkAJgkAZQhIAwAEBSQgbALg1AGQgtAGgwAAQhDAAhMgLg");
		this.shape_4.setTransform(62.6,81.9,1.763,1.763);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FDBAA1").s().p("AifEcIg7gMQgTAEgjABIgeABIgkgDIgVinIA0gKQAJhkAihsIAghWIA8gbQBIgfBAgSQDKg4ApBeQAoBeAbB4QANA7AGApIA7AVIAIBZQABBZghAEQghAFgcgGIgUgHQgdAEghgDIgcgEQgKAEgbAFQg0AJhLADIgfABQg9AAg8gKg");
		this.shape_5.setTransform(63.5,51.9,1.763,1.763);

		this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,127,104.1);


	(lib.happy_685_1466940664942 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#4C4C4B").s().p("Ag7HhQgQgUgMgZIgJgWQgniAgpidQhSk5gMiSIGHjMIA4BEQA8BYAYBkQAYBlgmElQgUCTgYCAIgDASQgFAXgMAUQgkBBhUAPQgNACgMAAQg3AAgqg1g");
		this.shape.setTransform(39,77,1.44,1.44);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,78,154);


	(lib.happy_678_1466940664942 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F3D3BE").s().p("AhQB2Ig/gJQgLgHABgVQABgqA4hHQA4hJBfgMQAwgGAlAJQAfBSgjBBQgeA7hBATQgjAJgqAAQgVAAgXgCg");
		this.shape.setTransform(27.3,21.3,1.763,1.763);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54.6,42.6);


	(lib.happy_677_1466940664947 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F5AB96").s().p("AnVAbQg0gXgfgbIgUgXIR5g1QgNAxhMAyQiZBik+ACIgOAAQkyAAiihJg");
		this.shape.setTransform(124.5,21.9,2.173,2.173);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,249.1,43.8);


	(lib.happy_652_1466940664953 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AkrD6IAAnzIJXAAIAAHzg");
		this.shape.setTransform(30,25);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,50);


	(lib.happy_648_1466940664944 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EECBB5").s().p("AgGAHQgDgEAAgDQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAADgDAEQgDADgEAAQgDAAgDgDg");
		this.shape.setTransform(24.8,35.8,1.763,1.763);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#EECBB5").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
		this.shape_1.setTransform(79.2,37.6,1.763,1.763);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#D4E7EA").s().p("AguBjQArgtAUhPIANhHIARgCQgGBbglA9IgiAtg");
		this.shape_2.setTransform(74.5,86.5,1.763,1.763);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#D4E7EA").s().p("AAYBaQgNgQgNgfQgeg8gEhKIASABIAGBCQAMBJAlArg");
		this.shape_3.setTransform(43,86.7,1.763,1.763);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFFFF").s().p("AhrB0Ig2gOQAEhRhIgxQgWgQgbgLIgXgHIAKg+IgBAKQACALAPAJQAvAgCdAEQBiADCRgdQBJgPA0gPIAFAsQhsAwhBBMQgVAZgOAYIgJAUQgmACghAAQhEAAg1gJg");
		this.shape_4.setTransform(64.5,81.8,1.763,1.763);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#F3D3BE").s().p("AAiEmQhLgDg0gKIglgJQgrAKgugGQgHADgOADQgbAGghgEQghgEAAhaIAIhYIA7gWQAGgpANg6QAbh4AohfQApheDKA5QBnAcBeAvIAgBXQAhBrAJBkQgsAyg8AyQhzBghMAAIgFAAg");
		this.shape_5.setTransform(58.9,51.9,1.763,1.763);

		this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,117.8,104.1);


	(lib.happy_848_1466940664924 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_167_1466940667515();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,493,137);


	(lib.happy_763_1466940664924 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_052_1466940667592();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,71,56);


	(lib.happy_373_1466940664924 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_076_1466940665366();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33,40);


	(lib.happy_008_1466940664924 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_891_1466940665253();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,47,47);


	(lib.happy_647_1466940664942 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FBDCD5").s().p("AhIBNQgugNgvgZIgmgXQDfhaBrgNQCKgQhuB+Qg5BDhZAAQglAAgsgNg");
		this.shape.setTransform(42.4,56.8,2.075,2.075);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FBDCD5").s().p("AgvBzQgRgcgfgfQggghgVgIQgTgHBVhFIBWhFIAaAaQAbAiAKArQAcgOAWgZQAIgKAKAIQALAIAEASQAMAtgtAhQhCAxgeAaQgMAKgNAGQgKAEgIAAQgQAAgJgQg");
		this.shape_1.setTransform(97.3,54.8,2.075,2.075);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FBDCD5").s().p("AhUgLQB4hoBQAZQBPAagDA7QgCAcgSAZIlrAwQAug5A9gyg");
		this.shape_2.setTransform(70,20,2.075,2.075);

		this.addChild(this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,129.1,82);


	(lib.happy_645_1466940664949 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FDBAA1").s().p("AgUgGIgbgFIAAgFQAtAGAvAWQAFADgFACQgigRgfgGg");
		this.shape.setTransform(21.7,11.9,1.763,1.763);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F5AB96").s().p("AgbCGQgjgEgOgVQgLgQAAgcIAAgRQAAgPgDgTQgFgXADgTQACgVAMgXQgCgPACgPQAEgfAaAAQAZAAAFAcIABANIADgLQAIgaATAFIAJAFQAJAIgCAPIAFgKQAHgJAJAEQAKAEAAAKQAAAFgCAEIAEgDQAGgCAGADQAKAFgHANIAHABQAIADACAJQACAOgMADIAAAUQgBAYgKAdQgRAzgPAUQgXAggkAAIgJAAg");
		this.shape_1.setTransform(16.7,23.7,1.763,1.763);

		this.addChild(this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33.4,47.4);


	(lib.happy_642_1466940664952 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AkrD6IAAnzIJXAAIAAHzg");
		this.shape.setTransform(30,25);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,50);


	(lib.happy_627_1466940664944 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EECBB5").s().p("AgTA2QidgBg5g1QgSgQgFgUIgCgRIIFAAQgHAcgnAZQhNA2iYAAIgDAAg");
		this.shape.setTransform(45.8,9.5,1.763,1.763);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,91.6,19.1);


	(lib.happy_624_1466940664952 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AkrD6IAAnzIJXAAIAAHzg");
		this.shape.setTransform(30,25);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,50);


	(lib.happy_605_1466940664951 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AkrD6IAAnzIJXAAIAAHzg");
		this.shape.setTransform(30,25);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,50);


	(lib.happy_601_1466940664942 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AhFA0IgGgNIglg3QgEgGAEgGQAFgGAGACQA9ARAzgKQA4gLAggXQAFgDAFACQAGACAAAGQABADgDAFQg9BMg8ARIgMAEIgQAEQgOAEgLABIAAAAQgCAAgGgKg");
		this.shape.setTransform(47.6,27,1.44,1.44);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AhhA6QhhgFgdg4QgKgTgBgVIAAgSIACAKQADAMAMALQAkAgBgAFQBeAFBzgPQA4gJAmgJIARBLQhcAGhdAAQhJAAhKgEg");
		this.shape_1.setTransform(34,32.3,1.44,1.44);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#4F9CC4").s().p("AjRBTQgKgPgFgTIgCgPIAygFQA5gHAhgLQAtgMAsgwIAlgtIBCgbQBGgRASAxQAUAxAIBNQAEAoABAeIhdAAQhRAOiLAFIgNAAQhOAAgggrg");
		this.shape_2.setTransform(32.8,18.3,1.44,1.44);

		this.addChild(this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,68,41.3);


	(lib.happy_577_1466940664950 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#F18108").ss(3,1,1).p("ACdA/QgPAbgbAbQgwAuhOgHQhRgIgmgqQgngqAGhAQAGg+AugvQAvguBBAAQBCAAA5BCQAdAiAMAe");
		this.shape.setTransform(16.5,15.7);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,36.1,34.4);


	(lib.happy_564_1466940664937 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_815_1466940664978();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,369,85);


	(lib.happy_934_1466940664918 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_343_1466940665099();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,293,28);


	(lib.happy_789_1466940664917 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_231_1466940665051();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,143,49);


	(lib.happy_791_1466940664916 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_232_1466940665064();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,247,194);


	(lib.happy_541_1466940664916 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_045_1466940664954();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,333,266);


	(lib.happy_523_1466940664916 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_111_1466940664955();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,259,233);


	(lib.happy_871_1466940664918 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_596_1466940665355();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,73,72);


	(lib.happy_549_1466940664918 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_451_1466940665991();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,76,84);


	(lib.happy_503_1466940664919 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_792_1466940666094();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,57,52);


	(lib.happy_227_1466940664918 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_797_1466940665532();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,62,53);


	(lib.happy_162_1466940664918 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_505_1466940665842();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,77,74);


	(lib.happy_040_1466940664918 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_333_1466940665686();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,56,55);


	(lib.happy_554_1466940664947 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EEB58C").s().p("AgyhXIBDgLIAiC2IhFAQg");
		this.shape.setTransform(7.4,14.4,1.44,1.44);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,14.8,28.8);


	(lib.happy_542_1466940664940 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#ECD4C4").s().p("AhGBSIgGgJQgQgHgCgNIACgOQgJACgJgSQgGgLAIgLQAEgDAGgDQgGgDgCgHIgBgGQgEgNASgKQAJgFAKgDIAMgOQARgPASgHQATgHApAPQAWAGARAKIAdAoQAYAsgVAaQgiArhzACQgQABgJgKg");
		this.shape.setTransform(16.5,85,1.44,1.44);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#ECD4C4").s().p("AjHgGIArgLQA2gQAzgWQAzgWAxgPQAZgHAPgCQBUgOAXA4QAIAWgGAXQgGAVgSAMQg4AliFASQgpAGg8ANIgzAMg");
		this.shape_1.setTransform(55.8,76.5,1.44,1.44);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#ECD4C4").s().p("AAhEKIgdgZQhij5gyhgQgPgdgDgiQgGhGA9gfQA8gfAzAwQAaAYAPAeIAsB/QAxCWAZB7QgCAOgIARQgSAighAKQgKAEgLAAQgXAAgZgQg");
		this.shape_2.setTransform(61.9,40.6,1.44,1.44);

		this.addChild(this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,85.5,98.3);


	(lib.happy_534_1466940664949 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.happy_756_1466940664964();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,346.2,309);


	(lib.happy_493_1466940664950 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_574_1466940667204();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,26);


	(lib.happy_842_1466940664915 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_047_1466940666267();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,120,161);


	(lib.happy_698_1466940664916 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_405_1466940666236();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,61,58);


	(lib.happy_627_1466940664915 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_017_1466940666173();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,92,70);


	(lib.happy_380_1466940664915 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_450_1466940666219();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,46);


	(lib.happy_305_1466940664916 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_717_1466940666256();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,91,101);


	(lib.happy_155_1466940664915 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_613_1466940666300();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,86,47);


	(lib.happy_095_1466940664915 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_085_1466940666313();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,115,49);


	(lib.happy_006_1466940664916 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_081_1466940666344();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,89,92);


	(lib.happy_309_1466940664914 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_961_1466940665003();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,143,49);


	(lib.happy_292_1466940664915 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_224_1466940665086();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,265,28);


	(lib.happy_217_1466940664914 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_553_1466940664986();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,353,273);


	(lib.happy_693_1466940664907 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_385_1466940665077();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,484,110);


	(lib.happy_900_1466940664906 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_780_1466940666571();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,43,38);


	(lib.happy_806_1466940664907 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_711_1466940666946();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,35,36);


	(lib.happy_805_1466940664906 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_099_1466940666766();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,27);


	(lib.happy_679_1466940664907 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_959_1466940667234();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,258,92);


	(lib.happy_516_1466940664907 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_543_1466940665136();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


	(lib.happy_338_1466940664907 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_750_1466940664989();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,143,49);


	(lib.happy_800_1466940664908 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_120_1466940665551();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,43,57);


	(lib.happy_720_1466940664908 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_012_1466940665727();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,68,92);


	(lib.happy_661_1466940664908 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_527_1466940665886();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,72,53);


	(lib.happy_607_1466940664908 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_068_1466940665389();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33,40);


	(lib.happy_231_1466940664908 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_039_1466940666028();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,533,554);


	(lib.happy_193_1466940664907 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_062_1466940667359();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,71,56);


	(lib.happy_180_1466940664907 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_051_1466940667636();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,47,47);


	(lib.happy_048_1466940664907 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_877_1466940665257();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,44,33);


	(lib.happy_467_1466940664954 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_308_1466940667446();
		this.instance.setTransform(-24,-13);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-24,-13,48,26);


	(lib.happy_893_1466940664912 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_418_1466940664961();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,128,118);


	(lib.happy_323_1466940664913 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_930_1466940665075();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,134,131);


	(lib.happy_184_1466940664913 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_067_1466940665119();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,128,119);


	(lib.happy_975_1466940664913 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_634_1466940664985();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,336,259);


	(lib.happy_958_1466940664913 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_398_1466940664996();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,143,49);


	(lib.happy_720_1466940664913 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_390_1466940667269();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,405,29);


	(lib.happy_693_1466940664914 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_044_1466940665590();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,56,55);


	(lib.happy_530_1466940664914 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_896_1466940665277();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,73,72);


	(lib.happy_342_1466940664914 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_536_1466940667704();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,57,52);


	(lib.happy_207_1466940664914 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_254_1466940665422();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,62,53);


	(lib.happy_070_1466940664914 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_750_1466940665780();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,77,74);


	(lib.happy_425_1466940664944 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.happy_136_1466940664971();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,131.3,69);


	(lib.happy_958_1466940664909 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_791_1466940665247();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


	(lib.happy_816_1466940664909 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_522_1466940665538();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,76,84);


	(lib.happy_803_1466940664909 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_714_1466940667902();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,56,55);


	(lib.happy_693_1466940664909 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_631_1466940667576();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,62,53);


	(lib.happy_517_1466940664910 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_197_1466940665705();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,57,52);


	(lib.happy_199_1466940664909 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_993_1466940665365();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,77,74);


	(lib.happy_126_1466940664909 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_974_1466940667358();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,73,72);


	(lib.happy_662_1466940664908 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_429_1466940664987();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,400,309);


	(lib.happy_338_1466940664908 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_876_1466940665061();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,143,49);


	(lib.happy_258_1466940664909 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_387_1466940665109();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,377,28);


	(lib.happy_398_1466940664951 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AgoBvQhBgTgeg7QgjhAAehTIAZgEQAfgDAeAEQBfAMA4BJQA4BHABAqQABAVgLAHQgbAGgkADQgXACgVAAQgrAAgigJg");
		this.shape.setTransform(27.3,21.3,1.763,1.763);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,54.6,42.6);


	(lib.happy_392_1466940664944 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F8EAE1").s().p("AguC3QgpACgogQQhRgeAIhWQAWgNAUgcQApg2gIhLQgHhLCEALQBBAGBDAVIgBAcQAAAiAEAeQANBhA2AcQgMAgglAfQhEA6htAAIgWgBg");
		this.shape.setTransform(142.1,38.2,2.075,2.075);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FAD951").s().p("AnAGqQgRhxgHiKQgQkTArh9QAjhnBgg0QBHgmBegGQA9gECiAHICZAJIAWACQAcAEAbAKQBVAfAsBJQAxBTgFCAQgHC9h2E+g");
		this.shape_1.setTransform(137,137.2,2.075,2.075);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FAD951").s().p("AqCFxQAOhYAih8QBEj1Bli3QBViaF1BcQC7AvCrBNIAiArQAqA4AlBBQB1DMAWDSg");
		this.shape_2.setTransform(133.6,236.3,2.075,2.075);

		this.addChild(this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,267.2,312.9);


	(lib.happy_684_1466940664920 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_165_1466940665004();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,143,49);


	(lib.happy_869_1466940664920 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_802_1466940666076();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,552,582);


	(lib.happy_310_1466940664920 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_408_1466940665924();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,487,66);


	(lib.happy_911_1466940664919 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_971_1466940666830();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,27);


	(lib.happy_548_1466940664919 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_532_1466940667293();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,258,92);


	(lib.happy_319_1466940664919 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_154_1466940666627();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,43,38);


	(lib.happy_307_1466940664919 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_176_1466940667044();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,35,36);


	(lib.happy_830_1466940664920 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_180_1466940665281();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,44,33);


	(lib.happy_783_1466940664920 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_203_1466940667724();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,47,47);


	(lib.happy_607_1466940664920 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_000_1466940665440();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33,40);


	(lib.happy_521_1466940664921 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_147_1466940665616();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,43,57);


	(lib.happy_465_1466940664921 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_125_1466940665788();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,72,53);


	(lib.happy_316_1466940664920 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_919_1466940667474();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,71,56);


	(lib.happy_366_1466940664953 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AkrD6IAAnzIJXAAIAAHzg");
		this.shape.setTransform(30,25);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,50);


	(lib.happy_366_1466940664943 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F8EAE1").s().p("AiqDlQDfiYA7izQASg5gBg1IgEgqQAVAKAMAMQAGAFACAEQAgCsibCpQhMBWhUAzg");
		this.shape.setTransform(91.1,74.5,2.075,2.075);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AjGDvQBTg2BNhXQCXisgcilIARAVQAUAdARAiQA3BsAEB3QAFB4jJAkQg9ALhMABg");
		this.shape_1.setTransform(107.7,77.8,2.075,2.075);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FBDCD5").s().p("Aj3BcQgcgwgPg0IgKgrQgMg5AZg7QAxh1CzgHQCxgHBsAsQA3AWASAXQAhCyieCzQhPBahWA3QipguhXibg");
		this.shape_2.setTransform(63.3,71.5,2.075,2.075);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FBDCD5").s().p("AA1BQQjCglhahtIBWgVQBqgQBnAVQBqAVApBOQAVApgBAkIgdABQhEAAhRgPg");
		this.shape_3.setTransform(91.1,19.7,2.075,2.075);

		this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,149,132.5);


	(lib.happy_350_1466940664952 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AkrD6IAAnzIJXAAIAAHzg");
		this.shape.setTransform(30,25);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,50);


	(lib.happy_543_1466940664927 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_851_1466940667561();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,493,137);


	(lib.happy_923_1466940664927 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_378_1466940665489();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33,40);


	(lib.happy_333_1466940664927 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_607_1466940665321();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,47,47);


	(lib.happy_062_1466940664927 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_724_1466940667843();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,71,56);


	(lib.happy_310_1466940664937 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_888_1466940664979();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,369,85);


	(lib.happy_306_1466940664940 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#371D10").s().p("AgaAqQgIgDgCgKIAAgKQgBgLAGgKQAMgaAdgLQAXgJAEAUQAEATgRAHQgNAEgLARQgGAIgDAIQgGAIgHAAIgEgBg");
		this.shape.setTransform(76.8,27.8,2.075,2.075);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#371D10").s().p("AgZAeQgHgfAPgXIARgRIAHgFQAKgEAHAFQAHAFgFANIgIARQgIASACAOQADARgQAIIgIABQgMAAgEgSg");
		this.shape_1.setTransform(47.4,78,2.075,2.075);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#190F0B").s().p("AgbAwQgDgHAFgGIAGgFQAZgRgCgZIgFgXQgBgDAAgDQgBgIAFgDQAGgDAFAEIAEADIAIAPQAHAUgFASQgFAVgSAQQgHAIgIADIgGABQgHAAgDgGg");
		this.shape_2.setTransform(106.8,43.1,2.075,2.075);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#190F0B").s().p("AgjApQgBgIAGgFIAHgDQAdgKAEgYIgBgYIAAgHQACgHAHgCQAKgCAEAKIAEARQACAUgKARQgKATgTALQgLAFgIACIgCAAQgLAAgCgJg");
		this.shape_3.setTransform(84.3,92.6,2.075,2.075);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FBDCD5").s().p("Ag7A8QgugqATgzQAOgqAqgJQAVgEAPAEQAtAIATAcQALAQAKApQAGAbgZAYQgMALgOAHQgWAJgVAAQggAAgegbg");
		this.shape_4.setTransform(34.2,144.5,2.075,2.075);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#371D10").s().p("AggA4QgKgGADgVQAHg0AugMIAZgVIACAgQgFAlgkAgQgQAMgJAAQgEAAgDgBg");
		this.shape_5.setTransform(32.3,33.2,2.075,2.075);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#371D10").s().p("AhfAkQAPhhBcg1IAkgKQAmgBALAoQAMApgoAdQgUAOgXAFIgOACQgPAFgRAKQg0AfgUBJQgLgnAIgyg");
		this.shape_6.setTransform(20.8,39.2,2.075,2.075);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#432D24").s().p("AgbAlQgXgRAFgZIAJgWIAZgPQAbgKAVAZQAYAcgfAdQgSAQgPAAQgMAAgMgJg");
		this.shape_7.setTransform(39.1,19.8,2.075,2.075);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FBDCD5").s().p("AjHFJQgkgSgdgYIgVgUQgvgsgfhLQg/iUBKifQBPiqDDglQBNgOBMALQBGAJAuAaQBsA8AzBbQBFB9gqCtIgOAkQgTArgeAlQhfB4ilAUQggAEgcAAQhoAAhZgug");
		this.shape_8.setTransform(82,77.9,2.075,2.075);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#F8D4CE").s().p("AipB4QBahlBWhHQCviRgNCPQgMCMijAfQgtAJgsAAQglAAglgGg");
		this.shape_9.setTransform(123.6,124.1,2.075,2.075);

		this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,163.7,162.6);


	(lib.happy_275_1466940664953 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AkrD6IAAnzIJXAAIAAHzg");
		this.shape.setTransform(30,25);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,50);


	(lib.happy_275_1466940664941 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#5D5D5D").s().p("AiYH1QhKgIgfhNQgJgYgEgcIgCgXQAAiFAHijQAMlDAfiQIGxhQIAiBRQAhBlgHBnQgGBnh6EOQg+CHg8BzIgIARQgMAUgPAQQgtAshDAAIgagCg");
		this.shape.setTransform(39.3,72.5,1.44,1.44);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,78.7,144.9);


	(lib.happy_262_1466940664939 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F8EAE1").s().p("AgRBiQhbgRgqg+QgNgTgHgUIgEgRQBcACAtgQQARgGAogeQAegVAXADQAYACgIAaQgHAWgaAQQgNAHgMADIBIAdQBIAhAAASQAAAcgrAQQgcALgpAAQgkAAgsgIg");
		this.shape.setTransform(36.4,22.1,2.075,2.075);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,72.8,44.3);


	(lib.happy_257_1466940664950 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_153_1466940667010();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,26);


	(lib.happy_257_1466940664940 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.happy_207_1466940664962();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,124.1,90);


	(lib.happy_241_1466940664951 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#010302").s().p("AgJAIQgDgFAEgDIAIgIQAGgEAEAFQAEAFgFACIgJAJQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgCAAgDgDg");
		this.shape.setTransform(10.3,2.4,1.763,1.763);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#010302").s().p("AgBAhQgOgBgJgLQgJgLABgMQABgOALgIQAKgJANABQANABAJAKQAJALgBAMQgBAOgKAJQgKAIgMAAIgBAAg");
		this.shape_1.setTransform(5.9,7.1,1.763,1.763);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#010302").s().p("AgIAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgDACgBIAIgIQAFgEAFAFQADAFgEACIgJAJQAAAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgDgBgBgCg");
		this.shape_2.setTransform(64.3,2,1.763,1.763);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#010302").s().p("AgBAhQgOgBgJgLQgJgKABgMQABgOALgJQAKgJAMABQAOABAKALQAIAKgBAMQgBAOgLAJQgJAIgMAAIgBAAg");
		this.shape_3.setTransform(59.9,6.7,1.763,1.763);

		this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66.4,13.1);


	(lib.happy_224_1466940664949 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_731_1466940664977();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,369,85);


	(lib.happy_667_1466940664929 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.未标题1();
		this.instance.setTransform(0.6,-0.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0.6,-0.5,487,335);


	(lib.happy_398_1466940664929 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_153_1466940665039();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,143,49);


	(lib.happy_253_1466940664929 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_358_1466940664960();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,461,190);


	(lib.happy_162_1466940664929 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_610_1466940668128();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,51,43);


	(lib.happy_214_1466940664944 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AgTBwQgGgEACgHQANg9gOgzQgOgzgagjQgEgEACgFQACgGAGgBQAEgBADADQAbAQAWAWQAnAmAOAnIAFAKIAFAQQAFAOABALQABADgWANIg1ApQgDACgDAAQgDAAgDgCg");
		this.shape.setTransform(27.1,21.6,1.44,1.44);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("Ag3DvQARAAAPgTQAegmgBhhQgChegXhxIgYhdIBKgXIALBoQALB9ACBnQACBgg5AiQgWAPgZAAIgIAAg");
		this.shape_1.setTransform(34.8,34.4,1.44,1.44);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#4F9CC4").s().p("AASBbQgSgsgwgqIgwggQgUgegLgiQgWhFAwgWQAvgWBNgOQAngHAegDIAGBcIAMA6QAOBLAJBWQAKBYguAlQgWAUgZAAQgLhVgVg0g");
		this.shape_2.setTransform(19.5,35.9,1.44,1.44);

		this.addChild(this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,42.9,68.9);


	(lib.happy_982_1466940664922 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_282_1466940667241();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,71,56);


	(lib.happy_745_1466940664923 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_215_1466940667414();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,47,47);


	(lib.happy_905_1466940664921 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_233_1466940666376();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,35,31);


	(lib.happy_878_1466940664921 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_736_1466940666463();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,211,76);


	(lib.happy_718_1466940664921 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_578_1466940666612();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,23,22);


	(lib.happy_652_1466940664921 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_510_1466940666812();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,28,29);


	(lib.happy_526_1466940664922 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_867_1466940666978();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,211,76);


	(lib.happy_747_1466940664922 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_046_1466940664956();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,466,108);


	(lib.happy_649_1466940664922 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_974_1466940667703();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,493,137);


	(lib.happy_287_1466940664922 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_912_1466940664994();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,143,49);


	(lib.happy_275_1466940664922 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_523_1466940667983();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,518,290);


	(lib.happy_135_1466940664922 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_353_1466940668101();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,51,43);


	(lib.happy_210_1466940664946 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.happy_695_1466940664975();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,72.3,108);


	(lib.happy_207_1466940664950 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#F18108").ss(3,1,1).p("ACdA/QgPAbgbAbQgwAuhOgHQhRgIgmgqQgngqAGhAQAGg+AugvQAvguBBAAQBCAAA5BCQAdAiAMAe");
		this.shape.setTransform(16.5,15.7);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,36.1,34.4);


	(lib.happy_158_1466940664947 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.happy_659_1466940664965();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,444,66);


	(lib.happy_877_1466940664933 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_650_1466940666161();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,244,349);


	(lib.happy_521_1466940664932 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_865_1466940666125();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,397,80);


	(lib.happy_295_1466940664931 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_409_1466940666059();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,220,65);


	(lib.happy_130_1466940664932 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_404_1466940667914();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,457,230);


	(lib.happy_891_1466940664931 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_423_1466940666957();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,35,36);


	(lib.happy_630_1466940664931 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_702_1466940666801();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,27,27);


	(lib.happy_624_1466940664931 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_114_1466940666580();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,43,38);


	(lib.happy_466_1466940664931 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.p15();
		this.instance.setTransform(-3.5,0);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-3.5,0,449,93);


	(lib.happy_897_1466940664933 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_638_1466940667399();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,71,56);


	(lib.happy_676_1466940664934 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_307_1466940665261();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,44,33);


	(lib.happy_597_1466940664934 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_654_1466940665412();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33,40);


	(lib.happy_551_1466940664934 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_458_1466940665575();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,43,57);


	(lib.happy_547_1466940664934 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_196_1466940665899();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,72,53);


	(lib.happy_509_1466940664933 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_457_1466940667679();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,47,47);


	(lib.happy_028_1466940664934 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_151_1466940665756();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,68,92);


	(lib.happy_145_1466940664931 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_703_1466940664991();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,143,49);


	(lib.happy_150_1466940664945 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F6C8A6").s().p("Ag3iEIBBgKIAuEOIhAAPg");
		this.shape.setTransform(8.2,20.6,1.44,1.44);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,16.4,41.3);


	(lib.happy_148_1466940664947 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FDBAA1").s().p("AAYCMIgIgQQgEAGgGAEQgJAJgNgIQgNgJAGgRIAIgPQgYgogtg0IgpgrQgSgRACgZQACgXASgUQAsgvA8AgQAzAbAwBLQAZAmANAfIALALQALANAAAIQABAMgKADIgJACIAFAJQADALgIAIQgIAJgKABIgJgCIACAJQAAAJgIAGQgIAHgLgGIgLgHIABAKQgDAKgOACIgCAAQgJAAgKgPg");
		this.shape.setTransform(25.1,27.4,1.763,1.763);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,50.3,54.8);


	(lib.happy_825_1466940664926 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_577_1466940668058();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,51,43);


	(lib.happy_614_1466940664926 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_748_1466940667550();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,493,137);


	(lib.happy_960_1466940664926 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_275_1466940665471();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33,40);


	(lib.happy_791_1466940664926 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_503_1466940665309();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,47,47);


	(lib.happy_515_1466940664926 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_073_1466940667800();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,71,56);


	(lib.happy_260_1466940664926 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_520_1466940664959();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,465,108);


	(lib.happy_133_1466940664925 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.p12();
		this.instance.setTransform(0.5,-54.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0.5,-54.5,467,352);


	(lib.happy_109_1466940664925 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_946_1466940665038();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,143,49);


	(lib.happy_138_1466940664949 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#010302").s().p("AgJAIQgEgEAFgEIAIgIQAFgEAEAEQAFAFgFADIgJAJQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgDAAgCgDg");
		this.shape.setTransform(10.3,2.4,1.763,1.763);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#010302").s().p("AgBAhQgOgBgJgLQgJgKABgMQABgOALgJQAKgJAMABQAOABAJALQAJAKgBAMQgBAOgLAJQgJAIgLAAIgCAAg");
		this.shape_1.setTransform(5.9,7.1,1.763,1.763);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#010302").s().p("AgJAIQgEgFAFgDIAIgIQAFgEAEAFQAFAEgFADIgJAJQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgDgDg");
		this.shape_2.setTransform(64.3,2,1.763,1.763);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#010302").s().p("AgBAhQgOgBgJgLQgJgKABgMQABgPALgIQAKgJAMABQAOABAJAKQAJALgBAMQgBAOgLAJQgJAIgMAAIgBAAg");
		this.shape_3.setTransform(60,6.7,1.763,1.763);

		this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66.5,13.1);


	(lib.happy_101_1466940664944 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#010302").s().p("AgCALIgIgNQgCgEACgDQABgDADgCQAGgDADAHIAIANQAEAHgIAFIgEABQgDAAgCgFg");
		this.shape.setTransform(91.4,7.8,2.075,2.075);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#030606").s().p("AgVAkQgQgJgEgRQgEgQAJgPQAKgQARgEQAPgEAQAJQAPAKAEARQAFAPgKAQQgJAPgRAEIgKACQgLAAgKgHg");
		this.shape_1.setTransform(96.4,16.6,2.075,2.075);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#010302").s().p("AgCALIgIgNQgCgDABgEQABgDADgCQADgBAEABQABABACADIAIANQABADAAAEQgCADgDACIgEABQgDAAgCgFg");
		this.shape_2.setTransform(3.9,3.4,2.075,2.075);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#030606").s().p("AgVAkQgPgJgEgRQgFgQAKgPQAJgPASgEQAPgFAPAKQAPAJAEARQAFAQgKAPQgJAPgRAEIgKACQgLAAgKgHg");
		this.shape_3.setTransform(9,12.3,2.075,2.075);

		this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,105.4,25.6);


	(lib.happy_079_1466940664951 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AAYCMIgIgQIgKAKQgJAJgNgIQgNgJAGgRIAIgPQgYgogtg1IgpgqQgSgSACgZQACgXASgTQAsgvA8AfQAzAbAwBMQAZAmANAfIALALQALANAAAIQABAMgKADIgJACIAFAJQADALgIAIQgNAOgOgGIACAJQAAAJgIAGQgIAHgLgGIgLgHIABAKQgDAKgOACIgCAAQgJAAgKgPg");
		this.shape.setTransform(25.1,27.4,1.763,1.763);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,50.3,54.9);


	(lib.happy_068_1466940664941 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F3D3BE").s().p("AgsCbQgOgCgCgKIAAgKQgFAEgGADQgMAGgIgHQgIgGABgJIACgJQgDACgGgBQgKAAgIgJQgIgIADgLIAFgJQgFAAgFgCQgJgDABgMQAAgIALgNIAKgLIAnhFQAwhMAzgbQA8gfAsAvQASATACAXQACAZgSASQgSASgXAYQgtA1gYAoIAIAPQAGARgNAJQgNAIgJgJIgKgKQgDAIgFAIQgKAPgJAAIgCAAg");
		this.shape.setTransform(25.1,27.4,1.763,1.763);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,50.3,54.9);


	(lib.happy_057_1466940664939 = function() {
		this.initialize();

		// Layer 2
		this.instance = new lib.happy_697_1466940664976();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,42,16);


	(lib.happy_052_1466940664940 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F6D0CC").s().p("AgzD3QhlgKgog6QgJgKgEgSQgIgjAXghQAWgfA/gCQA0gCBVATQAEgOACgdQAEg5gKhLQgCgIgGgKQgOgVgXgJQgIgEgGgIQgMgOALgPQAMgRASACQARACAQAPQADgMAKgNQAUgaAogCQAwgDAaAhQAcAkgCBIQgBBxgRBIQgaB2hCAiQgtAXg+AAQgUAAgWgDg");
		this.shape.setTransform(43.3,51.9,2.075,2.075);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,86.6,103.8);


	(lib.happy_820_1466940664929 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_788_1466940665348();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,211,76);


	(lib.happy_713_1466940664929 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_411_1466940667863();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,211,76);


	(lib.happy_345_1466940664929 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_939_1466940665134();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,374,148);


	(lib.happy_046_1466940664942 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FBDCD5").s().p("Ag/BtQgMgegbgjQgcgkgUgJQgRgKBdg7QAvgdAwgcIAWAdQAWAlAEAsQAegKAZgWQAJgJAJAKQAJAJACASQAGAugwAbQhIAoghAWQgMAJgPADQgIACgGAAQgUAAgIgTg");
		this.shape.setTransform(61.6,72.3,2.075,2.075);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FBDCD5").s().p("AiAh/IASgOQAXgQAagKQBPgiBLAdQBLAehQCmQgnBUg1BOg");
		this.shape_1.setTransform(26.9,38.8,2.075,2.075);

		this.addChild(this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,93.6,99);


	(lib.happy_040_1466940664952 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AkrD6IAAnzIJXAAIAAHzg");
		this.shape.setTransform(30,25);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,50);


	(lib.happy_040_1466940664950 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_620_1466940667220();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,48,26);


	(lib.happy_040_1466940664943 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#4C4C4B").s().p("Ag9CMQhPgNgZhCQgHgVgCgYIAAgRQADgiANgjQAchGA3gEQA3gDBmAKQA0AFApAGIgGEEQgiAGgtADQglADggAAQguAAgkgGg");
		this.shape.setTransform(25.3,21.1,1.44,1.44);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#ECD4C4").s().p("Aj4B9QgegPgZgcQgzg3AXhBQAXhDA+gVQAegKAaACICaAFQC2ALCWAgIAYANQAXAVgFAsQgEAqgeAUIgdALQhbAahvAUQiEAYhaAAQg7AAgogKg");
		this.shape_1.setTransform(55.8,21.9,1.44,1.44);

		this.addChild(this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,104.7,42.2);


	(lib.happy_038_1466940664951 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F6C6BB").s().p("AgMAMQgFgFAAgHQAAgHAFgFQAGgFAGAAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
		this.shape.setTransform(93.2,35.8);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F6C6BB").s().p("AgMANQgFgGAAgHQAAgGAFgFQAGgGAGAAQAHAAAFAGQAGAFAAAGQAAAHgGAGQgFAFgHAAQgGAAgGgFg");
		this.shape_1.setTransform(38.7,37.6);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#D4E7EA").s().p("AAfBjQgRgNgRggQglg9gHhbIARACIAOBHQAUBPAsAtg");
		this.shape_2.setTransform(43.4,86.5,1.763,1.763);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#D4E7EA").s().p("AANgYIAGhCIASgBQgFBKgdA8QgMAfgOAQIgNACQAkgrANhJg");
		this.shape_3.setTransform(74.8,86.7,1.763,1.763);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFFFF").s().p("AhUB2QgLgegggnQhChMhsgwIAEgsIB+AeQCRAdBigDQCegEAvggQAPgKACgJIAJAzQglAJgkAZQhIAxAEBRQgPAIgnAGQg0AJhFAAQghAAgmgCg");
		this.shape_4.setTransform(53.4,82.7,1.763,1.763);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FED4C8").s().p("AjlDGQglgfglglIgeggQAJhkAihrIAghXQBegvBmgcQDKg5ApBeQAoBfAbB4QANA6AGApIA7AWIAIBYQABBaghAEQghAEgcgGIgUgGQgdAEghgEIgcgEQgKAEgbAFQg0AKhLADIgFAAQhMAAhzhgg");
		this.shape_5.setTransform(58.9,51.9,1.763,1.763);

		this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,117.9,104.1);


	(lib.happy_022_1466940664941 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#5D5D5D").s().p("AiEBlQgQhbADg8QAFhPA/ggQAUgKAXgEQAMgCAHAAIAUABQAaACAXAGQBIAUAKA2QAJA2ABBnQABA0gCApIkDAWQgJgggJgtg");
		this.shape.setTransform(21.2,25.7,1.44,1.44);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F8EAE1").s().p("AgHE1IgPgcQgjhXgghsQg/jXAPhnQAMgfAZgcQAyg4BCAPQBFAQAcA7QANAdAAAaIAMCZQAJC2gQCZIgKAZQgTAZgsAAQgsAAgVgbg");
		this.shape_1.setTransform(21.8,55.5,1.44,1.44);

		this.addChild(this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,42.3,104);


	(lib.happy_901_1466940664910 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_606_1466940666082();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,22,23);


	(lib.happy_806_1466940664911 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_067_1466940666130();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,40,30);


	(lib.happy_357_1466940664910 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_107_1466940665963();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,38,38);


	(lib.happy_289_1466940664910 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_222_1466940665819();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,71,56);


	(lib.happy_286_1466940664911 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_735_1466940666209();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,41,32);


	(lib.happy_996_1466940664911 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_760_1466940667348();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,330,63);


	(lib.happy_648_1466940664911 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_404_1466940666745();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,475,70);


	(lib.happy_625_1466940664911 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_104_1466940666910();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,502,1);


	(lib.happy_450_1466940664911 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_817_1466940667568();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,330,63);


	(lib.happy_208_1466940664912 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_798_1466940667855();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,484,104);


	(lib.happy_153_1466940664912 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_249_1466940665332();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,484,104);


	(lib.happy_145_1466940664911 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_118_1466940667169();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,475,18);


	(lib.happy_120_1466940664912 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_667_1466940668082();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,398,203);


	(lib.happy_780_1466940664912 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_981_1466940665657();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,575,867);


	(lib.happy_426_1466940664912 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.happy_729_1466940665506();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,193,200);


	(lib.happy_020_1466940664951 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AgUgGIgagEIAAgGQAxAHAqAVQAFADgFACQgigRgfgGg");
		this.shape.setTransform(21.7,11.8,1.763,1.763);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F6C6BB").s().p("AgaCFQgkgDgOgVQgLgQAAgdIABgRQgBgOgDgUQgEgXACgSQADgWALgWQgCgPACgPQAEgfAaAAQAZAAAFAcIABANIADgLQAIgaATAEIAJAGQAJAIgBAPQABgFADgFQAHgJAJAEQAKAEAAAKQAAAFgCAEIAFgDQAFgCAGADQAKAFgHANIAIABQAIADABAJQACAOgMACIAAAVQgBAYgKAdQgQAygPAVQgYAggkAAIgIgBg");
		this.shape_1.setTransform(16.7,23.6,1.763,1.763);

		this.addChild(this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,33.4,47.3);


	(lib.happy_018_1466940664953 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FED4C8").s().p("AkrD6IAAnzIJXAAIAAHzg");
		this.shape.setTransform(30,25);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,60,50);


	(lib.happy_013_1466940664950 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F6C6BB").s().p("AjUAAQgYgPgOgVIgIgRIIFAAQADAbgcAaQg5A1idABIgDAAQiZAAhMg2g");
		this.shape.setTransform(45.8,9.5,1.763,1.763);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,91.6,19.1);


	(lib.happy_004_1466940664945 = function() {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#010302").s().p("AAAAJIgIgJQgFgDAEgEQAEgFAFAEIAJAIQAFADgFAFQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgBABQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBgBAAg");
		this.shape.setTransform(56.1,2.4,1.763,1.763);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#010302").s().p("AgUAZQgLgJgBgOQgBgMAJgLQAJgKAOgBQAMgBAKAJQALAIABAOQABAMgJALQgJALgOABIgCAAQgLAAgJgIg");
		this.shape_1.setTransform(60.5,7.1,1.763,1.763);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#010302").s().p("AABAJIgJgJQgEgCAEgFQAEgFAEAEIAJAIQABAAAAAAQAAAAABABQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgDADgCAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
		this.shape_2.setTransform(2.1,2,1.763,1.763);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#010302").s().p("AgUAZQgLgJgBgOQgBgMAJgKQAJgLAOgBQAMgBAKAJQALAJABAOQABAMgJAKQgJALgOABIgCAAQgLAAgJgIg");
		this.shape_3.setTransform(6.5,6.7,1.763,1.763);

		this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,66.5,13.1);


	(lib.happy_922_1466940664946 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#000000").ss(3,1,1).p("ADngFQAqAZArgZAk7gFQArAZAqgZ");
		this.shape.setTransform(112.2,64.1);
		this.shape._off = true;

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(18).to({_off:false},0).to({_off:true},3).wait(19));

		// Layer 3
		this.instance = new lib.happy_138_1466940664949("synched",0);
		this.instance.setTransform(111.8,62.9,1,1,0,0,0,33.3,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({startPosition:0},0).to({scaleY:0.46},3).to({_off:true},1).wait(3).to({_off:false},0).to({scaleY:1},3).wait(16));

		// Layer 1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#030606").s().p("AAEAWQgtgKgIglIAWAXQAdATAvgHIABAPIgQABQgOAAgQgEg");
		this.shape_1.setTransform(104.7,111.9,1.763,1.763);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#F5AB96").s().p("AAeAVQgUgVgVgBQgVAAgCgBQgDgCABgGIACgFQAbgPAYAVQANAJAHAOQAAAIgEAAIgDgBg");
		this.shape_2.setTransform(15.8,88.7,1.763,1.763);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#371D10").s().p("Ag5AQQgDgKAOgLQAkghAnATIAeAAQgFAMgNAKQgbAYgqAAQgZAAgEgLg");
		this.shape_3.setTransform(99.4,16.3,1.763,1.763);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#371D10").s().p("Ah2AiQARgYAVgRQBFg9BeASIAfAPQAbAVgQAgQgQAjgtAAIgpgIQhEgChVAMg");
		this.shape_4.setTransform(88,9.8,1.763,1.763);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#432D24").s().p("AgoAKQgFgXASgPQAJgIALgDIAYAFQAaAKgBAcQAAAignACIgDAAQghAAgHgeg");
		this.shape_5.setTransform(108.8,16.7,1.763,1.763);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#371D10").s().p("AAWAWQgXgLghAHQgYAEgBgMQgBgTAcgIQAOgFAOAAQAfgDAVAOQAUAMgMAMQgKAKgNABg");
		this.shape_6.setTransform(139.5,39.5,1.763,1.763);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#371D10").s().p("AAdAWQghgGgXAGQgHABgIgCQgOgFgBgOQgCgOAZgHQAWgFARAEQA8AMgIAXQgCAIgOAAIgMgBg");
		this.shape_7.setTransform(78.5,39.4,1.763,1.763);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FDBAA1").s().p("AgrBLQgjgNgRgdQgRgcAFgbQAHgfAcgPQAvgZAnAVQAUALALAQIAUAOQAXASALAOQAjA1hZAXQgXAGgVAAQgWAAgWgIg");
		this.shape_8.setTransform(19.3,89.2,1.763,1.763);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FDBAA1").s().p("AkuEcQiJhaAHjHQAGisCNhiQBGgxBFgPQBYgNA9ABQA5AAAxAMQBoAZBOA3QB+BbAOCXQASC7h2BeQhvBYjfABIgDAAQi+AAhqhFg");
		this.shape_9.setTransform(90.5,79.7,1.763,1.763);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#F5AB96").s().p("AglAOIAVgXQAYgVAbAPQAFAKgFADQgLgBgMACQgVABgUAVIgDABQgEAAgBgIg");
		this.shape_10.setTransform(163.5,93.1,1.763,1.763);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#FDBAA1").s().p("AgKBRQgTgDgTgIIgQgHQgSgRgHgYQgPgvA5gmQAggVAfACQAeACAWAVQAVAUAEAcQAEAcgSAbQgaAnguAAIgRgCg");
		this.shape_11.setTransform(159.5,91.2,1.763,1.763);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(40));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,176.1,141.9);


	(lib.happy_873_1466940664939 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Symbol 19
		this.instance = new lib.happy_763_1466940664949("synched",0);
		this.instance.setTransform(27.2,217.7,1,1,0,0,0,20.7,46.3);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.7},9).to({rotation:0},10).to({rotation:3.2},10).to({rotation:0},10).wait(1));

		// Symbol 18
		this.instance_1 = new lib.happy_645_1466940664949("synched",0);
		this.instance_1.setTransform(149.5,216.1,1,1,0,0,0,11.7,43.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:11.6,regY:43.1,rotation:-3.2,x:149.4,y:216},9).to({regX:11.7,regY:43.2,rotation:0,x:149.5,y:216.1},10).to({regX:11.6,regY:43.1,rotation:-4.2,x:149.4,y:216},10).to({regX:11.7,regY:43.2,rotation:0,x:149.5,y:216.1},10).wait(1));

		// Symbol 13
		this.instance_2 = new lib.happy_922_1466940664946("synched",0);
		this.instance_2.setTransform(92.5,135.5,1,1,0,0,0,92.5,135.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-1.7,startPosition:9},9).to({rotation:0,startPosition:0},10).to({rotation:-1,startPosition:6},6).to({rotation:-1.7,startPosition:29},4).to({rotation:0,startPosition:39},10).wait(1));

		// Symbol 14
		this.instance_3 = new lib.happy_792_1466940664946("synched",0);
		this.instance_3.setTransform(89.2,136,1,1,0,0,0,52.6,11.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},9).to({startPosition:0},10).to({startPosition:0},10).to({startPosition:0},10).wait(1));

		// Symbol 15
		this.instance_4 = new lib.happy_148_1466940664947("synched",0);
		this.instance_4.setTransform(132.4,137.4,1,1,0,0,0,15.6,7.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:15.5,regY:7.3,rotation:-3.7,x:132.3},9).to({regX:15.6,regY:7.4,rotation:0,x:132.4},10).to({rotation:-2.7},10).to({rotation:0},10).wait(1));

		// Symbol 16
		this.instance_5 = new lib.happy_896_1466940664947("synched",0);
		this.instance_5.setTransform(44.8,140.1,1,1,0,0,0,36.6,7.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:4.2,y:140.2},9).to({rotation:0,y:140.1},10).to({rotation:2.2,x:44.7},10).to({rotation:0,x:44.8},10).wait(1));

		// Symbol 17
		this.instance_6 = new lib.happy_693_1466940664947("synched",0);
		this.instance_6.setTransform(94.9,219.5,1,1,0,0,0,67.5,102.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({skewX:-1.4},9).to({skewX:0},10).to({skewX:-1.4},10).to({skewX:0},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,176.1,221);


	(lib.happy_959_1466940664930 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.Tween1("synched",0);
		this.instance.setTransform(132.5,95.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,265,191);


	(lib.happy_834_1466940664948 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 4
		this.instance = new lib.happy_207_1466940664950();
		this.instance.setTransform(36.7,22.4,0.319,0.319,0,0,0,16.4,15.7);

		this.instance_1 = new lib.happy_207_1466940664950();
		this.instance_1.setTransform(58.4,37.9,0.319,0.319,0,0,0,16.4,15.7);

		this.instance_2 = new lib.happy_207_1466940664950();
		this.instance_2.setTransform(86.8,34.6,0.53,0.53,0,0,0,16.4,15.7);

		this.instance_3 = new lib.happy_207_1466940664950();
		this.instance_3.setTransform(43.5,51.6,0.665,0.665,0,0,0,16.4,15.7);

		this.instance_4 = new lib.happy_207_1466940664950();
		this.instance_4.setTransform(63,11,0.665,0.665,0,0,0,16.4,15.7);

		this.instance_5 = new lib.happy_207_1466940664950();
		this.instance_5.setTransform(441.4,31.8,0.259,0.259,0,0,0,16.4,15.9);

		this.instance_6 = new lib.happy_207_1466940664950();
		this.instance_6.setTransform(406.3,37.4,0.242,0.242,0,0,0,16.5,15.7);

		this.instance_7 = new lib.happy_207_1466940664950();
		this.instance_7.setTransform(455.3,59.6,0.531,0.531,0,0,0,16.5,15.8);

		this.instance_8 = new lib.happy_207_1466940664950();
		this.instance_8.setTransform(430.2,45.7,0.417,0.417,0,0,0,16.4,15.7);

		this.instance_9 = new lib.happy_207_1466940664950();
		this.instance_9.setTransform(445.8,10.3,0.665,0.665,0,0,0,16.4,15.7);

		this.instance_10 = new lib.happy_207_1466940664950();
		this.instance_10.setTransform(414.2,20.2,0.435,0.435,0,0,0,16.4,15.8);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{regX:16.5,regY:15.8,scaleX:0.531,scaleY:0.531,x:455.3,y:59.6}},{t:this.instance_6,p:{regX:16.5,scaleX:0.242,scaleY:0.242,x:406.3,y:37.4}},{t:this.instance_5,p:{regY:15.9,scaleX:0.259,scaleY:0.259,x:441.4,y:31.8}},{t:this.instance_4,p:{regY:15.7,scaleX:0.665,scaleY:0.665,x:63,y:11,regX:16.4}},{t:this.instance_3,p:{x:43.5,y:51.6,regX:16.4,scaleX:0.665,scaleY:0.665}},{t:this.instance_2,p:{scaleX:0.53,scaleY:0.53,x:86.8,y:34.6,regY:15.7}},{t:this.instance_1,p:{scaleX:0.319,scaleY:0.319,x:58.4,y:37.9}},{t:this.instance,p:{x:36.7,y:22.4}}]}).to({state:[{t:this.instance_7,p:{regX:16.6,regY:15.7,scaleX:0.532,scaleY:0.532,x:445.9,y:17.2}},{t:this.instance_6,p:{regX:16.4,scaleX:0.303,scaleY:0.303,x:442,y:52.6}},{t:this.instance_5,p:{regY:15.7,scaleX:0.665,scaleY:0.665,x:468.9,y:38.9}},{t:this.instance_4,p:{regY:15.8,scaleX:0.347,scaleY:0.347,x:423.8,y:40.2,regX:16.4}},{t:this.instance_3,p:{x:46.8,y:22.1,regX:16.4,scaleX:0.665,scaleY:0.665}},{t:this.instance_2,p:{scaleX:0.665,scaleY:0.665,x:62.9,y:45.1,regY:15.7}},{t:this.instance_1,p:{scaleX:0.409,scaleY:0.409,x:76.9,y:26}},{t:this.instance,p:{x:42.9,y:54.3}}]},3).to({state:[{t:this.instance_7,p:{regX:16.5,regY:15.7,scaleX:0.739,scaleY:0.739,x:459.9,y:25.5}},{t:this.instance_6,p:{regX:16.4,scaleX:0.348,scaleY:0.348,x:424.5,y:64.2}},{t:this.instance_5,p:{regY:15.7,scaleX:0.665,scaleY:0.665,x:439.9,y:42}},{t:this.instance_4,p:{regY:15.7,scaleX:0.515,scaleY:0.515,x:406.3,y:37.4,regX:16.5}},{t:this.instance_3,p:{x:38.6,y:12.7,regX:16.5,scaleX:0.807,scaleY:0.807}},{t:this.instance_2,p:{scaleX:0.441,scaleY:0.441,x:46.6,y:40.6,regY:15.8}},{t:this.instance_1,p:{scaleX:0.409,scaleY:0.409,x:74.4,y:44}},{t:this.instance,p:{x:72.7,y:22.7}}]},3).wait(2));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-427.1,-66,892,328);


	(lib.happy_765_1466940664949 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#000000").ss(3,1,1).p("ADngFQAqAZArgZAk7gFQArAZAqgZ");
		this.shape.setTransform(112.2,64.1);
		this.shape._off = true;

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},4).wait(27));

		// Layer 3
		this.instance = new lib.happy_241_1466940664951("synched",0);
		this.instance.setTransform(111.7,64.1,1,1,0,0,0,33.1,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({startPosition:0},0).to({scaleY:0.39},3).to({_off:true},1).wait(4).to({_off:false},0).to({scaleY:1},3).wait(24));

		// Layer 1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#371D10").s().p("AgqADIAWgRQAbgSAkAKIgEAfQgKgBgNACQgVAEgNANg");
		this.shape_1.setTransform(137.4,44.7,1.763,1.763);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#371D10").s().p("AgqADIAXgRQAbgSAjAKIgEAfQgKgBgMACQgWAEgNANg");
		this.shape_2.setTransform(81.9,45.3,1.763,1.763);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#030606").s().p("AAEAWQgtgKgIglIAWAXQAeATAvgHIAAAPIgQABQgOAAgQgEg");
		this.shape_3.setTransform(101.8,112.6,1.763,1.763);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#EC7F2C").s().p("AipAkQgCggAWgdQAsg+BzAIQBhAHAqBGQAVAhABAiQgSgGgXgFQgwgIgfAJQhNAWg0ADIgUABQhJAAACgtg");
		this.shape_4.setTransform(94.8,14.3,1.763,1.763);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#F6C6BB").s().p("AAeAVQgUgVgVgBQgVAAgCgCQgDgBABgGIACgFQAbgPAYAVQANAJAIAOQAAAIgFAAIgDgBg");
		this.shape_5.setTransform(15.9,89.9,1.763,1.763);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FED4C8").s().p("AhfAgQgRgbAFgbQAHgfAcgPQAvgaAnAWQAUALALAPIAUAPQAXARALAPQAkA1haAWQgaAHgVAAQg+AAgfgzg");
		this.shape_6.setTransform(19.3,90.4,1.763,1.763);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FED4C8").s().p("AAIFgQnKgOAYlbQAMi4COhcQBIgtBEgJQBXgNA+ABQA5AAAxAMQBkAXBLA5QB3BbAKCYQANCwhnBgQhmBgjJAAIgaAAg");
		this.shape_7.setTransform(88.2,80.9,1.763,1.763);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#F6C6BB").s().p("AglAOIAVgXQAYgVAbAPQAFAKgFACQgLAAgMACQgVABgUAVIgDABQgFAAAAgIg");
		this.shape_8.setTransform(163.6,94.4,1.763,1.763);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FED4C8").s().p("AgKBSIg2gSQgTgQgHgZQgOgvA5gmQA/gsA0AwQAVAUAEAcQAEAcgSAbQgaAnguAAIgRgCg");
		this.shape_9.setTransform(159.5,92.1,1.763,1.763);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(40));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,176.1,143.1);


	(lib.happy_751_1466940664939 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 3
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#000000").ss(4.9,1,1).p("An1gRQBMAqA7gqAFvgCQBNAqA6gq");
		this.shape.setTransform(86.8,141.6);
		this.shape._off = true;

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(16).to({_off:false},0).to({_off:true},3).wait(11));

		// Layer 2
		this.instance = new lib.happy_101_1466940664944("synched",0);
		this.instance.setTransform(86.3,140.7,1,1,0,0,0,52.6,12.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({startPosition:0},0).to({scaleY:0.3},3).to({_off:true},1).wait(3).to({_off:false},0).to({scaleY:1},2).wait(9));

		// Layer 1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#030606").s().p("Ag8ANQA6AJAlgZQATgNAIgPQgJAvg5ANIg5ADg");
		this.shape_1.setTransform(105.6,207.5,2.075,2.075);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#F8EAE1").s().p("AhDBjQgfgMgHgpIgBgnQABgHAEgLQAIgZAOgTQAqg+BKAMQAeAFAUAcQASAbACAlQADAjgQAdQgSAhgjAKQgPAFgVADIgVABQgcAAgXgJg");
		this.shape_2.setTransform(213.6,171.4,2.075,2.075);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#EC7F2C").s().p("AEyFBQgNhrgdhHIADA0QgFA0goAGQgzAIhLgnQhPgqgxhDQgCARgNAPQgaAfg5gDQg4gDhJhBIg9hBIAEAkQgFAkgqABQgeABgugPQg2gRgqggQhyhVAoiPQAqiTDtg5QC5gtCsAXQDVAcCVB1QDrC3gEFjIkyCGQgBgngHg1g");
		this.shape_3.setTransform(128.8,85.8,2.075,2.075);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#F4828D").s().p("AgSAfQgWgvBAg1IgJCLQgWgOgLgZg");
		this.shape_4.setTransform(71.2,179.4,2.075,2.075);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#F8EAE1").s().p("AAAHBQjFgBiChhQiLhmgUi4QgRiXAoiYQAThMAXgtQKojNCwEMQA8BcgDCRQgBBKgYB4QgcCHh6BXQiCBci6AAIgBAAg");
		this.shape_5.setTransform(108.6,155.6,2.075,2.075);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#EC7F2C").s().p("AglEmQgigDgXgRIgPgRQgHAGgOAGQgcAMgmAAQgmAAgfgYIgWgZIC+mBIA9gnQBGgtA8gZQDChSAACFQAAFKh3BpQg8A1g8gOQgJAJgPAIQgZAOgdAAIgIAAg");
		this.shape_6.setTransform(197.8,187.7,2.075,2.075);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(30));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,257.6,248.9);


	(lib.happy_187_1466940664924 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 9
		this.instance = new lib.happy_763_1466940664924();
		this.instance.setTransform(496.5,28,1,1,0,0,0,35.5,28);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:14.4},7).to({rotation:0},7).wait(1));

		// 图层 10
		this.instance_1 = new lib.happy_008_1466940664924();
		this.instance_1.setTransform(617.5,121.5,1,1,0,0,0,23.5,23.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:23.4,regY:23.6,rotation:-7,y:121.6},7).to({regX:23.5,regY:23.5,rotation:0,y:121.5},7).wait(1));

		// 图层 11
		this.instance_2 = new lib.happy_373_1466940664924();
		this.instance_2.setTransform(16.5,125,1,1,0,0,0,16.5,20);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:19.9,rotation:9,y:124.9},7).to({regY:20,rotation:0,y:125},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,641,145);


	(lib.happy_619_1466940664939 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 2
		this.instance = new lib.happy_119_1466940664930();
		this.instance.setTransform(249.5,261,1,1,-36,0,0,249.5,261);
		this.instance.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(1));

		// Layer 1
		this.instance_1 = new lib.happy_119_1466940664930();
		this.instance_1.setTransform(249.5,261,1,1,0,0,0,249.5,261);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},14).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-105.7,-96.8,710.5,715.6);


	(lib.happy_496_1466940664918 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.instance = new lib.happy_929_1466940664951("synched",0);
		this.instance.setTransform(24,13,1,1,0,0,0,24,13);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:25},7).to({y:13},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,48,26);


	(lib.happy_045_1466940664919 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 10
		this.instance = new lib.happy_871_1466940664918();
		this.instance.setTransform(36.5,717,1,1,0,0,0,36.5,36);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-13.2,x:36.6},7).to({rotation:0,x:36.5},7).wait(1));

		// 图层 11
		this.instance_1 = new lib.happy_227_1466940664918();
		this.instance_1.setTransform(104,80.5,1,1,0,0,0,31,26.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:30.9,rotation:-10.7,x:103.9},7).to({regX:31,rotation:0,x:104},7).wait(1));

		// 图层 12
		this.instance_2 = new lib.happy_040_1466940664918();
		this.instance_2.setTransform(540,27.5,1,1,0,0,0,28,27.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:14.2},7).to({rotation:0},7).wait(1));

		// 图层 13
		this.instance_3 = new lib.happy_162_1466940664918();
		this.instance_3.setTransform(609.5,779,1,1,0,0,0,38.5,37);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:37.1,rotation:12.7,y:779.1},7).to({regY:37,rotation:0,y:779},7).wait(1));

		// 图层 14
		this.instance_4 = new lib.happy_549_1466940664918();
		this.instance_4.setTransform(656,188,1,1,0,0,0,38,42);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-10.2,y:188.1},7).to({rotation:0,y:188},7).wait(1));

		// 图层 15
		this.instance_5 = new lib.happy_503_1466940664919();
		this.instance_5.setTransform(117.5,221,1,1,0,0,0,28.5,26);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:28.6,rotation:10.5},7).to({regX:28.5,rotation:0},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,694,816);


	(lib.happy_803_1466940664915 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 17
		this.instance = new lib.happy_627_1466940664915();
		this.instance.setTransform(99,272,1,1,0,0,0,46,35);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:35.1,rotation:-8.5,y:272.1},7).to({regY:35,rotation:0,y:272},7).to({regY:35.1,rotation:-8.5,y:272.1},8).to({regY:35,rotation:0,y:272},7).wait(1));

		// 图层 18
		this.instance_1 = new lib.happy_380_1466940664915();
		this.instance_1.setTransform(553,233,1,1,0,0,0,24,23);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-14.5},7).to({rotation:0},7).to({rotation:-14.5},8).to({rotation:0},7).wait(1));

		// 图层 19 拷贝 5
		this.instance_2 = new lib.happy_006_1466940664916();
		this.instance_2.setTransform(52.5,110,1,1,0,0,0,44.5,46);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:44.6,rotation:-13.7,x:52.6,y:110.1},7).to({regX:44.5,rotation:0,x:52.5,y:110},7).to({regX:44.6,rotation:-13.7,x:52.6,y:110.1},8).to({regX:44.5,rotation:0,x:52.5,y:110},7).wait(1));

		// 图层 19 拷贝 4
		this.instance_3 = new lib.happy_095_1466940664915();
		this.instance_3.setTransform(539.5,24.5,1,1,0,0,0,57.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:10.4},7).to({rotation:0},7).to({rotation:10.4},8).to({rotation:0},7).wait(1));

		// 图层 19 拷贝 3
		this.instance_4 = new lib.happy_155_1466940664915();
		this.instance_4.setTransform(44,327.5,1,1,0,0,0,43,23.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:23.4,rotation:11,x:44.1},7).to({regY:23.5,rotation:0,x:44},7).to({regY:23.4,rotation:11,x:44.1},8).to({regY:23.5,rotation:0,x:44},7).wait(1));

		// 图层 19 拷贝 2
		this.instance_5 = new lib.happy_842_1466940664915();
		this.instance_5.setTransform(540,437.5,1,1,0,0,0,60,80.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:60.1,rotation:7.2,x:540.1},7).to({regX:60,rotation:0,x:540},7).to({regX:60.1,rotation:7.2,x:540.1},8).to({regX:60,rotation:0,x:540},7).wait(1));

		// 图层 19 拷贝
		this.instance_6 = new lib.happy_305_1466940664916();
		this.instance_6.setTransform(45.5,812.5,1,1,0,0,0,45.5,50.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-7.5},7).to({rotation:0},7).to({rotation:-7.5},8).to({rotation:0},7).wait(1));

		// 图层 19
		this.instance_7 = new lib.happy_698_1466940664916();
		this.instance_7.setTransform(565.5,871,1,1,0,0,0,30.5,29);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:30.4,regY:29.1,rotation:17.2,y:871.1},7).to({regX:30.5,regY:29,rotation:0,y:871},7).to({regX:30.4,regY:29.1,rotation:17.2,y:871.1},8).to({regX:30.5,regY:29,rotation:0,y:871},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,600,900);


	(lib.happy_121_1466940664906 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 4
		this.instance = new lib.happy_900_1466940664906();
		this.instance.setTransform(306.5,19,1,1,0,0,0,21.5,19);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:17.5},6).to({rotation:0},5).wait(1));

		// 图层 5
		this.instance_1 = new lib.happy_805_1466940664906();
		this.instance_1.setTransform(36.5,92.5,1,1,0,0,0,13.5,13.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:10.4,y:92.6},6).to({rotation:0,y:92.5},5).wait(1));

		// 图层 6
		this.instance_2 = new lib.happy_806_1466940664907();
		this.instance_2.setTransform(17.5,67,1,1,0,0,0,17.5,18);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-9.7},6).to({rotation:0},5).wait(1));

		// 图层 7
		this.instance_3 = new lib.happy_679_1466940664907();
		this.instance_3.setTransform(176,64,1,1,0,0,0,129,46);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,328,110);


	(lib.happy_278_1466940664908 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 8
		this.instance = new lib.happy_193_1466940664907();
		this.instance.setTransform(479.5,28,1,1,0,0,0,35.5,28);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-19.7},11).to({rotation:0},10).wait(1));

		// 图层 9
		this.instance_1 = new lib.happy_180_1466940664907();
		this.instance_1.setTransform(600.5,121.5,1,1,0,0,0,23.5,23.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:23.6,regY:23.4,rotation:42.5,x:600.6},11).to({regX:23.5,regY:23.5,rotation:0,x:600.5},10).wait(1));

		// 图层 10
		this.instance_2 = new lib.happy_048_1466940664907();
		this.instance_2.setTransform(561,281.5,1,1,0,0,0,22,16.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:16.4,rotation:-30.5},11).to({regY:16.5,rotation:0},10).wait(1));

		// 图层 11
		this.instance_3 = new lib.happy_607_1466940664908();
		this.instance_3.setTransform(17.5,318,1,1,0,0,0,16.5,20);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:17.7},11).to({rotation:0},10).wait(1));

		// 图层 12
		this.instance_4 = new lib.happy_800_1466940664908();
		this.instance_4.setTransform(49.5,482.5,1,1,0,0,0,21.5,28.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-24.9},11).to({rotation:0},10).wait(1));

		// 图层 13
		this.instance_5 = new lib.happy_720_1466940664908();
		this.instance_5.setTransform(557,546,1,1,0,0,0,34,46);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:20},11).to({rotation:0},10).wait(1));

		// 图层 14
		this.instance_6 = new lib.happy_661_1466940664908();
		this.instance_6.setTransform(36,541.5,1,1,0,0,0,36,26.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:21.9},11).to({rotation:0},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,624,592);


	(lib.happy_475_1466940664937 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{动画:0,事件:25});

		// Layer 2
		this.instance = new lib.happy_605_1466940664951();
		this.instance.setTransform(1.1,403.9,4.298,1.92,0,0,0,30,24.9);
		this.instance.alpha = 0.012;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).wait(4));

		// logo
		this.instance_1 = new lib.happy_338_1466940664907();
		this.instance_1.setTransform(-214.5,-464.5,1,1,0,0,0,71.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29));

		// button
		this.instance_2 = new lib.happy_121_1466940664906();
		this.instance_2.setTransform(-8,400,0.709,0.709,0,0,0,164,55);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({scaleX:1.04,scaleY:1.04},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).wait(4));

		// Layer 6
		this.instance_3 = new lib.happy_231_1466940664908();
		this.instance_3.setTransform(6.1,-93,0.272,0.272,0,0,0,266.5,277);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({scaleX:1.06,scaleY:1.06},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).wait(16));

		// 宝典
		this.instance_4 = new lib.happy_278_1466940664908();
		this.instance_4.setTransform(1,-87,0.506,0.506,0,0,0,312,311);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,x:27,y:-127,alpha:1},11,cjs.Ease.get(1)).wait(15));

		// word
		this.instance_5 = new lib.happy_693_1466940664907();
		this.instance_5.setTransform(11,243,1,1,0,0,0,242,55);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({y:271,alpha:1},6,cjs.Ease.get(1)).to({y:263},4).wait(9));

		// 图层 0
		this.instance_6 = new lib.happy_516_1466940664907();
		this.instance_6.setTransform(0,-40,1,1,0,0,0,320,568);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-573.1,-833.1,1134.3,1574.4);


	(lib.happy_764_1466940664913 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.instance = new lib.happy_467_1466940664954("synched",0);
		this.instance.setTransform(24,13);

		this.instance_1 = new lib.happy_988_1466940664954("synched",0);
		this.instance_1.setTransform(24,26);
		this.instance_1._off = true;

		this.instance_2 = new lib.happy_926_1466940664954("synched",0);
		this.instance_2.setTransform(24,13);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},7).wait(1));
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:26},7).wait(8));
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7).to({_off:true,y:13},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,48,26);


	(lib.happy_031_1466940664914 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 9
		this.instance = new lib.happy_342_1466940664914();
		this.instance.setTransform(143.5,251,1,1,0,0,0,28.5,26);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:28.6,regY:25.9,rotation:-15.7,x:143.6},7).to({regX:28.5,regY:26,rotation:0,x:143.5},7).wait(1));

		// 图层 10
		this.instance_1 = new lib.happy_530_1466940664914();
		this.instance_1.setTransform(36.5,553,1,1,0,0,0,36.5,36);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:36.6,rotation:25.7,x:36.6,y:553.1},7).to({regX:36.5,rotation:0,x:36.5,y:553},7).wait(1));

		// 图层 11
		this.instance_2 = new lib.happy_207_1466940664914();
		this.instance_2.setTransform(104,107.5,1,1,0,0,0,31,26.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:30.9,rotation:14},7).to({regX:31,rotation:0},7).wait(1));

		// 图层 12
		this.instance_3 = new lib.happy_693_1466940664914();
		this.instance_3.setTransform(595,27.5,1,1,0,0,0,28,27.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:28.1,rotation:-14.7,x:595.1},7).to({regX:28,rotation:0,x:595},7).wait(1));

		// 图层 13
		this.instance_4 = new lib.happy_070_1466940664914();
		this.instance_4.setTransform(617.5,781,1,1,0,0,0,38.5,37);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:37.1,rotation:11.5,y:781.1},7).to({regY:37,rotation:0,y:781},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,656,818);


	(lib.happy_799_1466940664910 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 7
		this.instance = new lib.happy_126_1466940664909();
		this.instance.setTransform(36.5,553,1,1,0,0,0,36.5,36);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:19.4},7).to({rotation:0},7).wait(1));

		// 图层 8
		this.instance_1 = new lib.happy_693_1466940664909();
		this.instance_1.setTransform(104,107.5,1,1,0,0,0,31,26.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:30.9,rotation:-18.2},7).to({regX:31,rotation:0},7).wait(1));

		// 图层 9
		this.instance_2 = new lib.happy_803_1466940664909();
		this.instance_2.setTransform(595,27.5,1,1,0,0,0,28,27.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:23.5},7).to({rotation:0},7).wait(1));

		// 图层 10
		this.instance_3 = new lib.happy_199_1466940664909();
		this.instance_3.setTransform(617.5,781,1,1,0,0,0,38.5,37);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:38.6,rotation:-13.7,x:617.6},7).to({regX:38.5,rotation:0,x:617.5},7).wait(1));

		// 图层 11
		this.instance_4 = new lib.happy_816_1466940664909();
		this.instance_4.setTransform(656,266,1,1,0,0,0,38,42);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-13.2},7).to({rotation:0},7).wait(1));

		// 图层 12
		this.instance_5 = new lib.happy_517_1466940664910();
		this.instance_5.setTransform(143.5,251,1,1,0,0,0,28.5,26);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:13.2},7).to({rotation:0},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,694,818);


	(lib.happy_228_1466940664909 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.instance = new lib.happy_493_1466940664950();
		this.instance.setTransform(24,13,1,1,0,0,0,24,13);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:29},7).to({y:13},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,48,26);


	(lib.happy_860_1466940664910 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.instance = new lib.happy_040_1466940664950();
		this.instance.setTransform(24,13,1,1,0,0,0,24,13);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:29},7).to({y:13},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,48,26);


	(lib.happy_363_1466940664919 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 4
		this.instance = new lib.happy_319_1466940664919();
		this.instance.setTransform(306.5,19,1,1,0,0,0,21.5,19);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:13.7},6).to({rotation:0},6).wait(1));

		// 图层 5
		this.instance_1 = new lib.happy_911_1466940664919();
		this.instance_1.setTransform(36.5,92.5,1,1,0,0,0,13.5,13.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15.2,x:36.6,y:92.6},6).to({rotation:0,x:36.5,y:92.5},6).wait(1));

		// 图层 6
		this.instance_2 = new lib.happy_307_1466940664919();
		this.instance_2.setTransform(17.5,67,1,1,0,0,0,17.5,18);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-15.4},6).to({rotation:0},6).wait(1));

		// 图层 7
		this.instance_3 = new lib.happy_548_1466940664919();
		this.instance_3.setTransform(176,64,1,1,0,0,0,129,46);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,328,110);


	(lib.happy_581_1466940664921 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 8
		this.instance = new lib.happy_316_1466940664920();
		this.instance.setTransform(544.5,28,1,1,0,0,0,35.5,28);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:28.1,rotation:11.5,y:28.1},7).to({regY:28,rotation:0,y:28},7).wait(1));

		// 图层 9
		this.instance_1 = new lib.happy_783_1466940664920();
		this.instance_1.setTransform(617.5,101.5,1,1,0,0,0,23.5,23.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:23.6,regY:23.4,rotation:-14.9,x:617.6,y:101.4},7).to({regX:23.5,regY:23.5,rotation:0,x:617.5,y:101.5},7).wait(1));

		// 图层 10
		this.instance_2 = new lib.happy_830_1466940664920();
		this.instance_2.setTransform(594,252.5,1,1,0,0,0,22,16.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:22.1,rotation:6.7,x:594.1,y:252.6},7).to({regX:22,rotation:0,x:594,y:252.5},7).wait(1));

		// 图层 11
		this.instance_3 = new lib.happy_607_1466940664920();
		this.instance_3.setTransform(16.5,258,1,1,0,0,0,16.5,20);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:19.9,rotation:12,x:16.6,y:257.9},7).to({regY:20,rotation:0,x:16.5,y:258},7).wait(1));

		// 图层 12
		this.instance_4 = new lib.happy_521_1466940664921();
		this.instance_4.setTransform(66.5,462.5,1,1,0,0,0,21.5,28.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-15.7,x:66.6},7).to({rotation:0,x:66.5},7).wait(1));

		// 图层 13
		this.instance_5 = new lib.happy_465_1466940664921();
		this.instance_5.setTransform(53,521.5,1,1,0,0,0,36,26.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:12.7,y:521.6},7).to({rotation:0,y:521.5},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,641,548);


	(lib.happy_373_1466940664946 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_21 = function() {
			this.stop()
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(7));

		// Layer 1
		this.instance = new lib.happy_940_1466940664953();
		this.instance.setTransform(323,933.9,3.547,1.757,0,0,0,30.1,24.9);
		this.instance.alpha = 0.012;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(7));

		// 图层 14
		this.instance_1 = new lib.happy_062_1466940664930();
		this.instance_1.setTransform(323.5,912,1,1,0,0,0,105.5,38);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({y:952,alpha:1},7,cjs.Ease.get(1)).to({y:938},4).wait(7));

		// 矢量智能对象
		this.instance_2 = new lib.happy_959_1466940664930();
		this.instance_2.setTransform(309.5,622.5,0.411,0.411,0,0,0,132.5,95.5);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({scaleX:1.08,scaleY:1.08},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).wait(13));

		// 图层 15
		this.instance_3 = new lib.happy_619_1466940664939();
		this.instance_3.setTransform(317.5,622,1,1,0,0,0,249.5,261);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({alpha:1},8).wait(13));

		// 继续挑战下一题吧！
		this.instance_4 = new lib.happy_870_1466940664931();
		this.instance_4.setTransform(322,358,1,1,0,0,0,187,74);
		this.instance_4.alpha = 0.012;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:316,alpha:1},8,cjs.Ease.get(1)).to({y:334},4).wait(16));

		// 图层 16
		this.instance_5 = new lib.happy_331_1466940664930();
		this.instance_5.setTransform(320,568,1,1,0,0,0,320,568);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


	(lib.happy_333_1466940664947 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 4
		this.instance = new lib.happy_577_1466940664950();
		this.instance.setTransform(109.7,22.4,0.319,0.319,0,0,0,16.4,15.7);

		this.instance_1 = new lib.happy_577_1466940664950();
		this.instance_1.setTransform(131.4,37.9,0.319,0.319,0,0,0,16.4,15.7);

		this.instance_2 = new lib.happy_577_1466940664950();
		this.instance_2.setTransform(159.8,34.6,0.53,0.53,0,0,0,16.4,15.7);

		this.instance_3 = new lib.happy_577_1466940664950();
		this.instance_3.setTransform(116.6,51.6,0.665,0.665,0,0,0,16.4,15.7);

		this.instance_4 = new lib.happy_577_1466940664950();
		this.instance_4.setTransform(136.1,11,0.665,0.665,0,0,0,16.4,15.7);

		this.instance_5 = new lib.happy_577_1466940664950();
		this.instance_5.setTransform(441.4,31.8,0.259,0.259,0,0,0,16.4,15.9);

		this.instance_6 = new lib.happy_577_1466940664950();
		this.instance_6.setTransform(406.3,37.4,0.242,0.242,0,0,0,16.5,15.7);

		this.instance_7 = new lib.happy_577_1466940664950();
		this.instance_7.setTransform(455.3,59.6,0.531,0.531,0,0,0,16.5,15.8);

		this.instance_8 = new lib.happy_577_1466940664950();
		this.instance_8.setTransform(430.2,45.7,0.417,0.417,0,0,0,16.4,15.7);

		this.instance_9 = new lib.happy_577_1466940664950();
		this.instance_9.setTransform(445.8,10.3,0.665,0.665,0,0,0,16.4,15.7);

		this.instance_10 = new lib.happy_577_1466940664950();
		this.instance_10.setTransform(414.2,20.2,0.435,0.435,0,0,0,16.4,15.8);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{regX:16.5,regY:15.8,scaleX:0.531,scaleY:0.531,x:455.3,y:59.6}},{t:this.instance_6,p:{regX:16.5,scaleX:0.242,scaleY:0.242,x:406.3,y:37.4}},{t:this.instance_5,p:{regY:15.9,scaleX:0.259,scaleY:0.259,x:441.4,y:31.8}},{t:this.instance_4,p:{regY:15.7,scaleX:0.665,scaleY:0.665,x:136.1,y:11,regX:16.4}},{t:this.instance_3,p:{x:116.6,y:51.6,regX:16.4,scaleX:0.665,scaleY:0.665}},{t:this.instance_2,p:{scaleX:0.53,scaleY:0.53,x:159.8,y:34.6,regY:15.7}},{t:this.instance_1,p:{scaleX:0.319,scaleY:0.319,x:131.4,y:37.9}},{t:this.instance,p:{x:109.7,y:22.4}}]}).to({state:[{t:this.instance_7,p:{regX:16.6,regY:15.7,scaleX:0.532,scaleY:0.532,x:445.9,y:17.2}},{t:this.instance_6,p:{regX:16.4,scaleX:0.303,scaleY:0.303,x:442,y:52.6}},{t:this.instance_5,p:{regY:15.7,scaleX:0.665,scaleY:0.665,x:468.9,y:38.9}},{t:this.instance_4,p:{regY:15.8,scaleX:0.347,scaleY:0.347,x:423.8,y:40.2,regX:16.4}},{t:this.instance_3,p:{x:119.9,y:22.1,regX:16.4,scaleX:0.665,scaleY:0.665}},{t:this.instance_2,p:{scaleX:0.665,scaleY:0.665,x:135.9,y:45.1,regY:15.7}},{t:this.instance_1,p:{scaleX:0.409,scaleY:0.409,x:150,y:26}},{t:this.instance,p:{x:115.9,y:54.3}}]},3).to({state:[{t:this.instance_7,p:{regX:16.5,regY:15.7,scaleX:0.739,scaleY:0.739,x:459.9,y:25.5}},{t:this.instance_6,p:{regX:16.4,scaleX:0.348,scaleY:0.348,x:424.5,y:64.2}},{t:this.instance_5,p:{regY:15.7,scaleX:0.665,scaleY:0.665,x:439.9,y:42}},{t:this.instance_4,p:{regY:15.7,scaleX:0.515,scaleY:0.515,x:406.3,y:37.4,regX:16.5}},{t:this.instance_3,p:{x:111.7,y:12.7,regX:16.5,scaleX:0.807,scaleY:0.807}},{t:this.instance_2,p:{scaleX:0.441,scaleY:0.441,x:119.7,y:40.6,regY:15.8}},{t:this.instance_1,p:{scaleX:0.409,scaleY:0.409,x:147.4,y:44}},{t:this.instance,p:{x:145.8,y:22.7}}]},3).wait(2));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-427.1,-66,892,328);


	(lib.happy_328_1466940664940 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 3
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#000000").ss(3,1,1).p("ADmgFQArAZAqgZAk7gFQArAZAqgZ");
		this.shape.setTransform(64.7,59.6);
		this.shape._off = true;

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(26).to({_off:false},0).to({_off:true},3).wait(11));

		// Layer 2
		this.instance = new lib.happy_004_1466940664945("synched",0);
		this.instance.setTransform(64.3,58.9,1,1,0,0,0,33.2,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({startPosition:0},0).to({scaleY:0.39},3).to({_off:true},1).wait(3).to({_off:false},0).to({scaleY:1},3).wait(8));

		// Layer 1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#030606").s().p("AgwALQAuAHAegTQAQgLAGgMQgIAlgtAKIguACg");
		this.shape_1.setTransform(78.4,107.8,1.763,1.763);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#371D10").s().p("AAjAVQgZgMgsACQgFAAgEgCQgKgDAAgIQAAgJAJgFIAJgCIAdgCQAfACAWAOQAKAHgEAJQgDAJgNAAIgCAAg");
		this.shape_2.setTransform(37.6,38.8,1.763,1.763);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#371D10").s().p("AAjAVQgZgMgsACQgFAAgEgCQgKgDAAgIQAAgJAJgFIAJgCIAdgCQAfACAWAOQAKAHgEAJQgDAJgNAAIgCAAg");
		this.shape_3.setTransform(92,38.8,1.763,1.763);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#EECBB5").s().p("AglAOIAVgXQAYgVAbAPQAFAKgFACQgLAAgMACQgWABgTAVIgDABQgFAAAAgIg");
		this.shape_4.setTransform(160.2,84.8,1.763,1.763);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#F3D3BE").s().p("AgsBMQhZgWAjg1QASgZAkgWIAggaQAngWAuAaQAdAPAGAfQAFAbgQAbQgfAzg/AAQgVAAgagHg");
		this.shape_5.setTransform(156.7,85.2,1.763,1.763);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#EC7F2C").s().p("ADgCcQhlghgShsQgGgfADglIAFgeQgeABgjgCQhDgFgXgRQgWgRAVgWQALgLAPgHQg5ASg+APQh7AggagLQgZgKAKgXIAPgVQBSgzCjAQQBQAIBBASQCbBRAqCZQAVBOgKA+g");
		this.shape_6.setTransform(112.2,46.2,1.763,1.763);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#F3D3BE").s().p("AlQEAQhnhhANivQAKiYB3hbQBLg5BkgXQAxgMA5AAQA+gBBXANIArAKQA0AQAtAcQCOBcAMC4QAYFbnLAOIgZAAQjJAAhmhgg");
		this.shape_7.setTransform(87.9,75.7,1.763,1.763);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#EECBB5").s().p("AAeAVQgUgVgVgBQgVAAgCgCQgDgBABgGIACgFQAbgPAYAVQANAJAIAOQgBAIgEAAIgDgBg");
		this.shape_8.setTransform(12.5,89.2,1.763,1.763);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#F3D3BE").s().p("AhOAtQgSgbAEgcQAEgcAVgUQAzgwBAAsQA5AmgPAvQgHAZgSAQQgYAOgeAEIgQACQgvAAgagng");
		this.shape_9.setTransform(16.5,87,1.763,1.763);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#EC7F2C").s().p("AkbAmQgkADghgIQhEgOAHgyQAIgzBtgeQA3gPA1gFQgpgMgOgPQgcgeCMgPQCKgQBxAxQA4AYAcAcQCJBAAzCKQAZBFgCA5g");
		this.shape_10.setTransform(93.6,36.9,1.763,1.763);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(40));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,176.1,138);


	(lib.happy_887_1466940664928 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 9
		this.instance = new lib.happy_062_1466940664927();
		this.instance.setTransform(496.5,28,1,1,0,0,0,35.5,28);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:14.4},7).to({rotation:0},7).wait(1));

		// 图层 10
		this.instance_1 = new lib.happy_333_1466940664927();
		this.instance_1.setTransform(617.5,121.5,1,1,0,0,0,23.5,23.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:23.4,regY:23.6,rotation:-7,y:121.6},7).to({regX:23.5,regY:23.5,rotation:0,y:121.5},7).wait(1));

		// 图层 11
		this.instance_2 = new lib.happy_923_1466940664927();
		this.instance_2.setTransform(16.5,125,1,1,0,0,0,16.5,20);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:19.9,rotation:9,y:124.9},7).to({regY:20,rotation:0,y:125},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,641,145);


	(lib.happy_162_1466940664923 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 7
		this.instance = new lib.happy_982_1466940664922();
		this.instance.setTransform(35.5,28,1,1,0,0,0,35.5,28);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-21.7},7).to({rotation:0},7).wait(1));

		// 图层 8
		this.instance_1 = new lib.happy_745_1466940664923();
		this.instance_1.setTransform(156.5,121.5,1,1,0,0,0,23.5,23.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:23.6,rotation:21.9,x:156.6},7).to({regX:23.5,rotation:0,x:156.5},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,180,145);


	(lib.happy_611_1466940664921 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 2
		this.instance = new lib.happy_905_1466940664921();
		this.instance.setTransform(210.5,15.5,1,1,0,0,0,17.5,15.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:17.4,rotation:14},6).to({regX:17.5,rotation:0},5).wait(1));

		// 图层 3
		this.instance_1 = new lib.happy_878_1466940664921();
		this.instance_1.setTransform(105.5,53,1,1,0,0,0,105.5,38);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,228,91);


	(lib.happy_302_1466940664921 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 4
		this.instance = new lib.happy_718_1466940664921();
		this.instance.setTransform(29.5,60,1,1,0,0,0,11.5,11);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:11.6,rotation:19},6).to({regX:11.5,rotation:0},5).wait(1));

		// 图层 5
		this.instance_1 = new lib.happy_652_1466940664921();
		this.instance_1.setTransform(14,39.5,1,1,0,0,0,14,14.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:14.6,rotation:-15.2,x:14.1,y:39.6},6).to({regY:14.5,rotation:0,x:14,y:39.5},5).wait(1));

		// 图层 6
		this.instance_2 = new lib.happy_526_1466940664922();
		this.instance_2.setTransform(143.5,38,1,1,0,0,0,105.5,38);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,249,76);


	(lib.happy_194_1466940664948 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 4
		this.instance = new lib.happy_577_1466940664950();
		this.instance.setTransform(36.7,22.4,0.319,0.319,0,0,0,16.4,15.7);

		this.instance_1 = new lib.happy_577_1466940664950();
		this.instance_1.setTransform(58.4,37.9,0.319,0.319,0,0,0,16.4,15.7);

		this.instance_2 = new lib.happy_577_1466940664950();
		this.instance_2.setTransform(86.8,34.6,0.53,0.53,0,0,0,16.4,15.7);

		this.instance_3 = new lib.happy_577_1466940664950();
		this.instance_3.setTransform(43.5,51.6,0.665,0.665,0,0,0,16.4,15.7);

		this.instance_4 = new lib.happy_577_1466940664950();
		this.instance_4.setTransform(63,11,0.665,0.665,0,0,0,16.4,15.7);

		this.instance_5 = new lib.happy_577_1466940664950();
		this.instance_5.setTransform(441.4,31.8,0.259,0.259,0,0,0,16.4,15.9);

		this.instance_6 = new lib.happy_577_1466940664950();
		this.instance_6.setTransform(406.3,37.4,0.242,0.242,0,0,0,16.5,15.7);

		this.instance_7 = new lib.happy_577_1466940664950();
		this.instance_7.setTransform(455.3,59.6,0.531,0.531,0,0,0,16.5,15.8);

		this.instance_8 = new lib.happy_577_1466940664950();
		this.instance_8.setTransform(430.2,45.7,0.417,0.417,0,0,0,16.4,15.7);

		this.instance_9 = new lib.happy_577_1466940664950();
		this.instance_9.setTransform(445.8,10.3,0.665,0.665,0,0,0,16.4,15.7);

		this.instance_10 = new lib.happy_577_1466940664950();
		this.instance_10.setTransform(414.2,20.2,0.435,0.435,0,0,0,16.4,15.8);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{regX:16.5,regY:15.8,scaleX:0.531,scaleY:0.531,x:455.3,y:59.6}},{t:this.instance_6,p:{regX:16.5,scaleX:0.242,scaleY:0.242,x:406.3,y:37.4}},{t:this.instance_5,p:{regY:15.9,scaleX:0.259,scaleY:0.259,x:441.4,y:31.8}},{t:this.instance_4,p:{regY:15.7,scaleX:0.665,scaleY:0.665,x:63,y:11,regX:16.4}},{t:this.instance_3,p:{x:43.5,y:51.6,regX:16.4,scaleX:0.665,scaleY:0.665}},{t:this.instance_2,p:{scaleX:0.53,scaleY:0.53,x:86.8,y:34.6,regY:15.7}},{t:this.instance_1,p:{scaleX:0.319,scaleY:0.319,x:58.4,y:37.9}},{t:this.instance,p:{x:36.7,y:22.4}}]}).to({state:[{t:this.instance_7,p:{regX:16.6,regY:15.7,scaleX:0.532,scaleY:0.532,x:445.9,y:17.2}},{t:this.instance_6,p:{regX:16.4,scaleX:0.303,scaleY:0.303,x:442,y:52.6}},{t:this.instance_5,p:{regY:15.7,scaleX:0.665,scaleY:0.665,x:468.9,y:38.9}},{t:this.instance_4,p:{regY:15.8,scaleX:0.347,scaleY:0.347,x:423.8,y:40.2,regX:16.4}},{t:this.instance_3,p:{x:46.8,y:22.1,regX:16.4,scaleX:0.665,scaleY:0.665}},{t:this.instance_2,p:{scaleX:0.665,scaleY:0.665,x:62.9,y:45.1,regY:15.7}},{t:this.instance_1,p:{scaleX:0.409,scaleY:0.409,x:76.9,y:26}},{t:this.instance,p:{x:42.9,y:54.3}}]},3).to({state:[{t:this.instance_7,p:{regX:16.5,regY:15.7,scaleX:0.739,scaleY:0.739,x:459.9,y:25.5}},{t:this.instance_6,p:{regX:16.4,scaleX:0.348,scaleY:0.348,x:424.5,y:64.2}},{t:this.instance_5,p:{regY:15.7,scaleX:0.665,scaleY:0.665,x:439.9,y:42}},{t:this.instance_4,p:{regY:15.7,scaleX:0.515,scaleY:0.515,x:406.3,y:37.4,regX:16.5}},{t:this.instance_3,p:{x:38.6,y:12.7,regX:16.5,scaleX:0.807,scaleY:0.807}},{t:this.instance_2,p:{scaleX:0.441,scaleY:0.441,x:46.6,y:40.6,regY:15.8}},{t:this.instance_1,p:{scaleX:0.409,scaleY:0.409,x:74.4,y:44}},{t:this.instance,p:{x:72.7,y:22.7}}]},3).wait(2));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-427.1,-66,892,328);


	(lib.happy_903_1466940664931 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 4
		this.instance = new lib.happy_624_1466940664931();
		this.instance.setTransform(485.5,19,1,1,0,0,0,21.5,19);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:19.1,rotation:15.2,y:19.1},6).to({regY:19,rotation:0,y:19},6).wait(1));

		// 图层 5
		this.instance_1 = new lib.happy_630_1466940664931();
		this.instance_1.setTransform(36.5,103.5,1,1,0,0,0,13.5,13.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:17.7},6).to({rotation:0},6).wait(1));

		// 图层 6
		this.instance_2 = new lib.happy_891_1466940664931();
		this.instance_2.setTransform(17.5,78,1,1,0,0,0,17.5,18);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-17.7},6).to({rotation:0},6).wait(1));

		// 图层 7
		this.instance_3 = new lib.happy_466_1466940664931();
		this.instance_3.setTransform(263.5,64,1,1,0,0,0,224.5,46);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,507,117);


	(lib.happy_379_1466940664934 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 8
		this.instance = new lib.happy_897_1466940664933();
		this.instance.setTransform(496.5,28,1,1,0,0,0,35.5,28);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:28.1,rotation:-12.5,y:28.1},7).to({regY:28,rotation:0,y:28},7).wait(1));

		// 图层 9
		this.instance_1 = new lib.happy_509_1466940664933();
		this.instance_1.setTransform(617.5,121.5,1,1,0,0,0,23.5,23.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:23.4,rotation:13.2},7).to({regX:23.5,rotation:0},7).wait(1));

		// 图层 10
		this.instance_2 = new lib.happy_676_1466940664934();
		this.instance_2.setTransform(594,272.5,1,1,0,0,0,22,16.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-8.9},7).to({rotation:0},7).wait(1));

		// 图层 11
		this.instance_3 = new lib.happy_597_1466940664934();
		this.instance_3.setTransform(16.5,278,1,1,0,0,0,16.5,20);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-7,x:16.6},7).to({rotation:0,x:16.5},7).wait(1));

		// 图层 12
		this.instance_4 = new lib.happy_551_1466940664934();
		this.instance_4.setTransform(66.5,482.5,1,1,0,0,0,21.5,28.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:21.6,regY:28.4,rotation:5.2,x:66.6},7).to({regX:21.5,regY:28.5,rotation:0,x:66.5},7).wait(1));

		// 图层 13
		this.instance_5 = new lib.happy_028_1466940664934();
		this.instance_5.setTransform(574,546,1,1,0,0,0,34,46);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:11},7).to({rotation:0},7).wait(1));

		// 图层 14
		this.instance_6 = new lib.happy_547_1466940664934();
		this.instance_6.setTransform(53,541.5,1,1,0,0,0,36,26.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:26.4,rotation:-7.5,y:541.4},7).to({regY:26.5,rotation:0,y:541.5},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,641,592);


	(lib.happy_425_1466940664926 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 9
		this.instance = new lib.happy_515_1466940664926();
		this.instance.setTransform(496.5,28,1,1,0,0,0,35.5,28);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:14.4},7).to({rotation:0},7).wait(1));

		// 图层 10
		this.instance_1 = new lib.happy_791_1466940664926();
		this.instance_1.setTransform(617.5,121.5,1,1,0,0,0,23.5,23.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:23.4,regY:23.6,rotation:-7,y:121.6},7).to({regX:23.5,regY:23.5,rotation:0,y:121.5},7).wait(1));

		// 图层 11
		this.instance_2 = new lib.happy_960_1466940664926();
		this.instance_2.setTransform(16.5,125,1,1,0,0,0,16.5,20);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:19.9,rotation:9,y:124.9},7).to({regY:20,rotation:0,y:125},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,641,145);


	(lib.happy_833_1466940664910 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.instance = new lib.happy_257_1466940664950();
		this.instance.setTransform(24,13,1,1,0,0,0,24,13);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:29},7).to({y:13},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,48,26);


	(lib.happy_113_1466940664938 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Symbol 23
		this.instance = new lib.happy_830_1466940664950("synched",0);
		this.instance.setTransform(51.2,143.5,1,1,0,0,0,27.4,6);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.7},9).to({rotation:0},10).to({rotation:1.7},10).to({rotation:0},10).wait(1));

		// Symbol 26
		this.instance_1 = new lib.happy_841_1466940664951("synched",0);
		this.instance_1.setTransform(93.1,229.9,1,1,0,0,0,18.6,47);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:1.7},9).to({rotation:0},10).to({rotation:1.7},10).to({rotation:0},10).wait(1));

		// Symbol 27
		this.instance_2 = new lib.happy_398_1466940664951("synched",0);
		this.instance_2.setTransform(53.5,216.8,1,1,0,0,0,18.3,29.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},9).to({startPosition:0},10).to({startPosition:0},10).to({startPosition:0},10).wait(1));

		// Symbol 25
		this.instance_3 = new lib.happy_020_1466940664951("synched",0);
		this.instance_3.setTransform(152.3,222.4,1,1,0,0,0,14.7,45.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-2.2},9).to({rotation:0},10).to({rotation:-2.2},10).to({rotation:0},10).wait(1));

		// Symbol 21
		this.instance_4 = new lib.happy_765_1466940664949("synched",0);
		this.instance_4.setTransform(91,140.1,1,1,0,0,0,91,140.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1},9).to({rotation:0},10).to({rotation:-1},10).to({rotation:0},10).wait(1));

		// Symbol 22
		this.instance_5 = new lib.happy_013_1466940664950("synched",0);
		this.instance_5.setTransform(90.2,138.7,1,1,0,0,0,45.8,9.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},9).to({startPosition:0},10).to({startPosition:0},10).to({startPosition:0},10).wait(1));

		// Symbol 28
		this.instance_6 = new lib.happy_038_1466940664951("synched",0);
		this.instance_6.setTransform(97,221.1,1,1,0,0,0,59.4,102);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({skewX:-0.8},9).to({skewX:0},10).to({skewX:-0.8},10).to({skewX:0},10).wait(1));

		// Symbol 24
		this.instance_7 = new lib.happy_079_1466940664951("synched",0);
		this.instance_7.setTransform(130.5,145.5,1,1,0,0,0,15.6,10.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-0.9},9).to({rotation:0},10).to({rotation:-0.9},10).to({rotation:0},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,176.1,231.9);


	(lib.happy_095_1466940664945 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.instance = new lib.happy_040_1466940664952();
		this.instance.setTransform(0.8,403.2,7.626,1.997,0,0,0,30.1,25);
		this.instance.alpha = 0.012;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(17));

		// logo
		this.instance_1 = new lib.happy_145_1466940664931();
		this.instance_1.setTransform(-214.5,-464.5,1,1,0,0,0,71.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

		// button
		this.instance_2 = new lib.happy_903_1466940664931();
		this.instance_2.setTransform(-6.5,369.5,1,1,0,0,0,253.5,58.5);
		this.instance_2.alpha = 0.012;
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({y:415.5,alpha:1},7,cjs.Ease.get(1)).to({y:403.5},4).wait(17));

		// 宝典
		this.instance_3 = new lib.happy_379_1466940664934();
		this.instance_3.setTransform(18.5,-142,1,1,0,0,0,320.5,296);
		this.instance_3.alpha = 0.012;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(22));

		// 图层 15
		this.instance_4 = new lib.happy_295_1466940664931();
		this.instance_4.setTransform(-2,-347.5,1,1,0,0,0,110,32.5);
		this.instance_4.alpha = 0.012;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({y:-399.5,alpha:1},7,cjs.Ease.get(1)).to({y:-387.5},4).wait(15));

		// 图层 16
		this.instance_5 = new lib.happy_521_1466940664932();
		this.instance_5.setTransform(2.5,-321,1,1,0,0,0,198.5,40);
		this.instance_5.alpha = 0.012;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({y:-269,alpha:1},7,cjs.Ease.get(1)).to({y:-281},4).wait(15));

		// 母乳喂养领导品牌美德乐， 提供全套母乳喂养解决方案， 全力支持健康有爱的母乳喂养！ 拼妈，从拼母乳开始！ 
		this.instance_6 = new lib.happy_130_1466940664932();
		this.instance_6.setTransform(0.5,210,0.527,0.527,0,0,0,228.5,115);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({scaleX:1.03,scaleY:1.03},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).wait(23));

		// 图层 17
		this.instance_7 = new lib.happy_877_1466940664933();
		this.instance_7.setTransform(-1,209.5,0.627,0.627,0,0,0,122,174.5);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,y:-46.5},7,cjs.Ease.get(1)).to({y:-38.5},4).wait(20));

		// 图层 0
		this.instance_8 = new lib.happy_516_1466940664907();
		this.instance_8.setTransform(0,-40,1,1,0,0,0,320,568);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-573.1,-833.1,1134.3,1574.4);


	(lib.happy_061_1466940664942 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Symbol 10
		this.instance = new lib.happy_945_1466940664943();
		this.instance.setTransform(224.5,232.4,1,1,0,0,0,88.6,55.1);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.82,scaleY:0.82,y:226.4},6).to({scaleX:1,scaleY:1,y:232.4},6).wait(1));

		// Symbol 9
		this.instance_1 = new lib.happy_912_1466940664943();
		this.instance_1.setTransform(224.4,113.4,1,1,0,0,0,77.9,19.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:107.4},6).to({y:113.4},6).wait(1));

		// Symbol 8
		this.instance_2 = new lib.happy_870_1466940664942();
		this.instance_2.setTransform(224.4,75.3,1,1,0,0,0,92.2,14.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:65.3},6).to({y:75.3},6).wait(1));

		// Layer 1
		this.instance_3 = new lib.happy_534_1466940664949();
		this.instance_3.setTransform(222.2,154.5,1,1,0,0,0,173.1,154.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13));

		// Layer 6
		this.instance_4 = new lib.happy_158_1466940664947();
		this.instance_4.setTransform(222,199,1,1,0,0,0,222,32.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:212},6).to({y:199},6).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,444,309);


	(lib.happy_508_1466940664930 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 2
		this.instance = new lib.happy_778_1466940664938();
		this.instance.setTransform(247.5,253,1,1,-37.2,0,0,249.5,260.9);
		this.instance.alpha = 0.012;

		this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(1));

		// Layer 1
		this.instance_1 = new lib.happy_778_1466940664938();
		this.instance_1.setTransform(249.5,261,1,1,0,0,0,249.5,261);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.012},14).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-109,-105.7,713.1,717.6);


	(lib.happy_050_1466940664929 = function() {
		this.initialize();

		// Layer 1
		this.instance = new lib.Symbol1();
		this.instance.setTransform(168,175,1,1,0,0,0,168,175);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,336,350);


	(lib.happy_042_1466940664939 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#000000").ss(3,1,1).p("AgggEQAgATAhgS");
		this.shape.setTransform(30.3,83.5);
		this.shape._off = true;

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(19).to({_off:false},0).to({_off:true},3).wait(8));

		// Layer 3
		this.instance = new lib.happy_967_1466940664945("synched",0);
		this.instance.setTransform(30.6,82.4,1,1,0,0,0,6.8,6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({startPosition:0},0).to({scaleY:0.25},3).to({_off:true},1).wait(3).to({_off:false},0).to({scaleY:1},3).wait(5));

		// Layer 1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F8EAE1").s().p("AjYhAIF1gjIA8B3ImxBPg");
		this.shape_1.setTransform(99.8,240.8,1.44,1.44);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#030606").s().p("AgzABQAlAAAkgHQATgFALgFQgQAVgnAIIgnAEg");
		this.shape_2.setTransform(42.2,122.6,1.44,1.44);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#F8EAE1").s().p("AhSBRQgqglAihJIAdgpQApgnA2AIQAlAFAUAhQAUAfgGAkQgGApghAbQgmAeg9ABQgcgDgVgTg");
		this.shape_3.setTransform(81.5,89.6,1.44,1.44);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#EC7F2C").s().p("ABjHSQgqgMgJgdIAAgaQASg8gJg0IgMgnIhOidIgihNQhtAhhVgoQgbgLgVgSIgQgQQgJAagjAGQgiAGglgRQgogSgVglQgZgrAJg5QARhnBmhQQA0gnAvgUIAlgPQAwgRA0gKQCnghCdAwQDvBJBUEfQAgBrADB6QADBqgTBMQgSBNg2AXQgqASgmgSQgvArgjgDQgqgEgTgUIgKgUQgIAPgRANQgWARgaAAQgNAAgOgFg");
		this.shape_4.setTransform(77.1,67.8,1.44,1.44);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#F8EAE1").s().p("AkkEsQhzhpgBimQAAipB4iCQB6iECmAAQCpAAB4B3QB4B4AACmQgBCoh8B1Qh6BziqAAQirAAhxhng");
		this.shape_5.setTransform(63.9,80.5,1.44,1.44);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FAD951").s().p("AjECgQgQgIgRgRQgighgDgvQgDgvBBiCIBCh7IA8g1QBKgzBCAGQBIAGA1A4QAnArAGAjQADATARDhIAPDgQgigDi9ApIi0Aqg");
		this.shape_6.setTransform(87.6,189.6,1.44,1.44);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#F4828D").s().p("AgHBGQgjgHgCgYQgCgRAQgcQAqhTgHAWIAOAZQAPAeAGAWQASA/guAAQgJAAgKgDg");
		this.shape_7.setTransform(6.6,91.3,1.44,1.44);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#F8EAE1").s().p("AhsANIgQgkIBjg2QBhguACAkQADAjAYAzQAMAXALASQguAsheAOIhVAGQAIgsgPgvg");
		this.shape_8.setTransform(82.3,139.2,1.44,1.44);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(30));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,152.1,255.2);


	(lib.happy_095_1466940664910 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 13
		this.instance = new lib.happy_289_1466940664910();
		this.instance.setTransform(496.5,28,1,1,0,0,0,35.5,28);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-20.5},9).to({rotation:0},10).wait(1));

		// 图层 14
		this.instance_1 = new lib.happy_357_1466940664910();
		this.instance_1.setTransform(563,56,1,1,0,0,0,19,19);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:19.1,regY:19.1,rotation:26.7,y:56.1},9).to({regX:19,regY:19,rotation:0,y:56},10).wait(1));

		// 图层 15
		this.instance_2 = new lib.happy_901_1466940664910();
		this.instance_2.setTransform(63,984.5,1,1,0,0,0,11,11.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:15.7},9).to({rotation:0},10).wait(1));

		// 图层 16
		this.instance_3 = new lib.happy_806_1466940664911();
		this.instance_3.setTransform(31,979,1,1,0,0,0,20,15);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-16},9).to({rotation:0},10).wait(1));

		// 图层 17
		this.instance_4 = new lib.happy_286_1466940664911();
		this.instance_4.setTransform(20.5,903,1,1,0,0,0,20.5,16);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:20.6,rotation:-13.9,x:20.6},9).to({regX:20.5,rotation:0,x:20.5},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,582,996);


	(lib.happy_641_1466940664911 = function() {
		this.initialize();

		// 矢量智能对象
		this.instance = new lib.happy_120_1466940664912();
		this.instance.setTransform(252,358.5,1,1,0,0,0,199,101.5);

		// 图层 4
		this.instance_1 = new lib.happy_648_1466940664911();
		this.instance_1.setTransform(250.5,35,1,1,0,0,0,237.5,35);

		// 图层 5
		this.instance_2 = new lib.happy_625_1466940664911();
		this.instance_2.setTransform(251,95.5,1,1,0,0,0,251,0.5);

		// 图层 6
		this.instance_3 = new lib.happy_145_1466940664911();
		this.instance_3.setTransform(250.5,495,1,1,0,0,0,237.5,9);

		// 图层 7
		this.instance_4 = new lib.happy_996_1466940664911();
		this.instance_4.setTransform(327,759.5,1,1,0,0,0,165,31.5);

		// 图层 8
		this.instance_5 = new lib.happy_450_1466940664911();
		this.instance_5.setTransform(327,667.5,1,1,0,0,0,165,31.5);

		// 图层 9
		this.instance_6 = new lib.happy_208_1466940664912();
		this.instance_6.setTransform(252,581,1,1,0,0,0,242,52);

		// 图层 10
		this.instance_7 = new lib.happy_153_1466940664912();
		this.instance_7.setTransform(251,173,1,1,0,0,0,242,52);

		this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,502,791);


	(lib.happy_949_1466940664938 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Symbol 6
		this.instance = new lib.happy_806_1466940664941("synched",0);
		this.instance.setTransform(291.9,309.4,1,1,0,0,0,158.8,26);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:158.9,skewX:2.1,skewY:1.2,x:295.6},7).to({regX:158.8,skewX:0,skewY:0,x:291.9},7).to({startPosition:0},1).to({regX:158.9,skewX:2.1,skewY:1.2,x:295.6},7).to({regX:158.8,skewX:0,skewY:0,x:291.9},7).wait(1));

		// Symbol 3
		this.instance_1 = new lib.happy_262_1466940664939("synched",0);
		this.instance_1.setTransform(74.7,394.1,1,1,0,0,0,10.4,19.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:19.1,scaleX:1,scaleY:1,skewX:-3,skewY:-3.9,x:77,y:394},7).to({regY:19.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.7,y:394.1},7).to({startPosition:0},1).to({regY:19.1,scaleX:1,scaleY:1,skewX:-3,skewY:-3.9,x:77,y:394},7).to({regY:19.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.7,y:394.1},7).wait(1));

		// Symbol 5
		this.instance_2 = new lib.happy_052_1466940664940("synched",0);
		this.instance_2.setTransform(114.4,394,1,1,0,0,0,10.3,73.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,skewX:-2.5,skewY:-2.2,x:116.6},7).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:114.4},7).to({startPosition:0},1).to({scaleX:1,scaleY:1,skewX:-2.5,skewY:-2.2,x:116.6},7).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:114.4},7).wait(1));

		// Symbol 8
		this.instance_3 = new lib.happy_647_1466940664942("synched",0);
		this.instance_3.setTransform(192.2,469.9,1,1,0,0,0,28.5,67);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,skewX:-1.1,skewY:-1.9,x:193.3},7).to({scaleX:1,skewX:0,skewY:0,x:192.2},7).to({startPosition:0},1).to({scaleX:1,skewX:-1.1,skewY:-1.9,x:193.3},7).to({scaleX:1,skewX:0,skewY:0,x:192.2},7).wait(1));

		// Symbol 4
		this.instance_4 = new lib.happy_306_1466940664940("synched",0);
		this.instance_4.setTransform(143.8,351.9,1,1,0,0,0,143.8,117.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,skewX:5.1,skewY:4.2,x:146.7,y:357.9},7).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:143.8,y:351.9},7).to({startPosition:0},1).to({scaleX:1,scaleY:1,skewX:5.1,skewY:4.2,x:146.7,y:357.9},7).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:143.8,y:351.9},7).wait(1));

		// Symbol 9
		this.instance_5 = new lib.happy_366_1466940664943("synched",0);
		this.instance_5.setTransform(206.9,390.7,1,1,0,0,0,103.5,68.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({skewX:0.9,x:209.3},7).to({skewX:0,x:206.9},7).to({startPosition:0},1).to({skewX:0.9,x:209.3},7).to({skewX:0,x:206.9},7).wait(1));

		// Symbol 2
		this.instance_6 = new lib.happy_751_1466940664939("synched",0);
		this.instance_6.setTransform(219.2,250.5,1,1,0,0,0,118.8,250.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:0.4,x:223.2,startPosition:7},7).to({rotation:0,x:219.2,startPosition:14},7).to({startPosition:15},1).to({rotation:0.4,x:223.2,startPosition:22},7).to({rotation:0,x:219.2,startPosition:29},7).wait(1));

		// Layer 12
		this.instance_7 = new lib.happy_983_1466940664953("synched",0);
		this.instance_7.setTransform(171.4,428.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({skewX:0.9,x:173.2},7).to({skewX:0,x:171.4},7).to({startPosition:0},1).to({skewX:0.9,x:173.2},7).to({skewX:0,x:171.4},7).wait(1));

		// Symbol 7
		this.instance_8 = new lib.happy_046_1466940664942("synched",0);
		this.instance_8.setTransform(244.5,359.6,1,1,0,0,0,17.8,17.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:17.9,scaleX:1,scaleY:1,skewX:6.4,skewY:5.5,x:247.4},7).to({regX:17.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:244.5},7).to({startPosition:0},1).to({regX:17.9,scaleX:1,scaleY:1,skewX:6.4,skewY:5.5,x:247.4},7).to({regX:17.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:244.5},7).wait(1));

		// Symbol 10
		this.instance_9 = new lib.happy_392_1466940664944("synched",0);
		this.instance_9.setTransform(210.3,535.8,1,1,0,0,0,133.6,311.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({skewX:0.9,x:210.4},7).to({skewX:0,x:210.3},7).to({startPosition:0},1).to({skewX:0.9,x:210.4},7).to({skewX:0,x:210.3},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,358,537.2);


	(lib.happy_903_1466940664937 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 2
		this.instance = new lib.happy_333_1466940664947("synched",0);
		this.instance.setTransform(78.5,15.3,0.37,0.37,180,0,0,239.6,34.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

		// Layer 3
		this.instance_1 = new lib.happy_970_1466940664938();
		this.instance_1.setTransform(61.2,62,1,1,0,0,0,14.2,13.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.74,scaleY:0.7},6).to({scaleX:1,scaleY:1},6).wait(1));

		// Layer 4
		this.instance_2 = new lib.happy_057_1466940664939();
		this.instance_2.setTransform(60.4,25.8,1,1,0,0,0,20.9,7.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:24},6).to({y:25.8},6).wait(1));

		// Layer 1
		this.instance_3 = new lib.happy_257_1466940664940();
		this.instance_3.setTransform(62.6,90.8,1,1,0,0,0,62.6,90.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.06},6).to({scaleY:1},6).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-5.5,0,135,90);


	(lib.happy_849_1466940664942 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{"事件":21});

		// Layer 2
		this.instance = new lib.happy_803_1466940664952();
		this.instance.setTransform(1.1,404.2,4.4,1.961,0,0,0,30,25);
		this.instance.alpha = 0.012;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(4));

		// logo
		this.instance_1 = new lib.happy_684_1466940664920();
		this.instance_1.setTransform(-214.5,-464.5,1,1,0,0,0,71.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

		// button
		this.instance_2 = new lib.happy_363_1466940664919();
		this.instance_2.setTransform(-8,372,1,1,0,0,0,164,55);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({y:410,alpha:1},7,cjs.Ease.get(1)).to({y:400},4).wait(4));

		// 宝典
		this.instance_3 = new lib.happy_581_1466940664921();
		this.instance_3.setTransform(18.5,-144,1,1,0,0,0,320.5,274);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(9));

		// 图层 14
		this.instance_4 = new lib.happy_310_1466940664920();
		this.instance_4.setTransform(-2.5,-306,1,1,0,0,0,243.5,33);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({y:-348,alpha:1},7,cjs.Ease.get(1)).to({y:-340,mode:"synched",startPosition:0},5).wait(7));

		// 图层 15
		this.instance_5 = new lib.happy_869_1466940664920();
		this.instance_5.setTransform(8,23,0.362,0.362,-12.9,0,0,276,291.2);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({regY:291,scaleX:1.05,scaleY:1.05,rotation:2.7,mode:"synched",startPosition:0},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0},4).wait(11));

		// 图层 0
		this.instance_6 = new lib.happy_516_1466940664907();
		this.instance_6.setTransform(0,-40,1,1,0,0,0,320,568);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-573.1,-833.1,1134.3,1574.4);


	(lib.happy_841_1466940664944 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.instance = new lib.happy_022_1466940664941("synched",0);
		this.instance.setTransform(293.9,352.3,1,1,0,0,0,20.2,0.9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:321.9},4).to({regY:1,rotation:-8.7,x:346.8,y:352.4},4).to({rotation:-37.5,x:349.8,y:354.3},4).to({regY:0.9,rotation:-62.2,x:298.8,y:364},4).to({regX:20.3,regY:0.8,rotation:-15.2,x:261.1,y:349.6},5).to({rotation:22.5,x:278.9,y:354.9},4).to({rotation:4.5,x:290.6,y:352.8},4).wait(1));

		// Symbol 7
		this.instance_1 = new lib.happy_601_1466940664942("synched",0);
		this.instance_1.setTransform(306.5,449.5,1,1,0,0,0,53,6.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:335.6,y:453.4},4).to({x:375.6},4).to({rotation:-40.7,x:421.6,y:422.4},4).to({regY:6.7,rotation:-65.4,x:392.6,y:395.9},4).to({regX:53.1,regY:6.6,rotation:-17,x:300.3,y:439},5).to({rotation:9.5,x:253.3,y:449.8},4).to({rotation:1.8,x:295.5,y:449.6},4).wait(1));

		// Symbol 5
		this.instance_2 = new lib.happy_275_1466940664941("synched",0);
		this.instance_2.setTransform(317.6,256.2,1,1,0,0,0,44.3,12.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:44.5,scaleX:1.04,scaleY:1.02,skewX:-12.3,x:319.8},4).to({regX:44.4,scaleX:1,scaleY:1.07,skewX:-20.7,x:322.7,y:255.2},4).to({scaleY:1.11,skewX:-26.1,x:322.8},4).to({scaleY:1.01,skewX:-8.4,x:319.7,y:256.2},4).to({regX:44.3,regY:12.3,scaleX:0.95,scaleY:1,skewX:14.1,skewY:-1.2,x:315.6,y:255},5).to({regX:44.4,regY:12.5,scaleX:0.98,scaleY:1,skewX:10.3,skewY:0.2,x:316.7,y:255.8},4).to({regX:44.3,regY:12.4,scaleX:1,scaleY:1,skewX:2,skewY:0.5,x:317.3,y:255.9},4).wait(1));

		// Symbol 3
		this.instance_3 = new lib.happy_752_1466940664939("synched",0);
		this.instance_3.setTransform(296.7,158.6,1,1,0,0,0,61.6,11.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:11.3,rotation:14.2,x:296.6,y:158.7},4).to({regY:11.2,rotation:23.2,x:296.7,y:158.6},4).to({rotation:31.1},4).to({rotation:18.7},4).to({rotation:5.7,y:158.7},5).to({rotation:-16.7,x:296.8},4).to({rotation:1,x:296.6},4).wait(1));

		// Symbol 2
		this.instance_4 = new lib.happy_042_1466940664939("synched",0);
		this.instance_4.setTransform(288,127.6,1,1,0,0,0,76,127.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:4},4).to({startPosition:8},4).to({startPosition:12},4).to({startPosition:16},4).to({startPosition:20},5).to({startPosition:24},4).to({startPosition:28},4).wait(1));

		// Symbol 4
		this.instance_5 = new lib.happy_542_1466940664940("synched",0);
		this.instance_5.setTransform(317.9,155.9,1,1,0,0,0,51.8,9.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-7.7,x:317.8},4).to({rotation:-14.4},4).to({regX:51.7,regY:9.2,rotation:-21.9,y:156},4).to({regX:51.8,rotation:-2.2},4).to({regY:9.1,rotation:15.2,x:317.9,y:155.9},5).to({regX:51.7,regY:9.2,rotation:26.5,y:156},4).to({regX:51.8,regY:9.1,rotation:7.1},4).wait(1));

		// Symbol 9
		this.instance_6 = new lib.happy_040_1466940664943("synched",0);
		this.instance_6.setTransform(316.2,373.1,1,1,0,0,0,3.4,16.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:25.7,x:253.5,y:355.6},4).to({regX:3.5,rotation:69.2,x:245.1,y:342.8},4).to({regX:3.4,regY:16.2,rotation:109.2,x:284,y:359.7},4).to({regY:16.1,rotation:86.8,x:310.6,y:355.8},4).to({rotation:74.8,x:340.6},5).to({rotation:53.8,x:355.6,y:355.7},4).to({scaleX:1,scaleY:1,rotation:10.8,x:324.1,y:369.5},4).wait(1));

		// Symbol 8
		this.instance_7 = new lib.happy_685_1466940664942("synched",0);
		this.instance_7.setTransform(310.6,258.4,1,1,0,0,0,28,19);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:28.1,rotation:31.2,x:310.7},4).to({regY:18.9,rotation:45.5,x:313.2,y:261.9},4).to({rotation:27,x:311.7,y:257.4},4).to({regY:19.1,scaleX:1.01,rotation:0,skewX:11.8,skewY:20.5,x:310.1,y:252.5},4).to({regY:18.9,scaleX:1,rotation:-4.4,skewX:0,skewY:0,x:312.6,y:260.3},5).to({regX:28,rotation:-16.8,x:310.5,y:263.4},4).to({regX:28.1,rotation:-3.3,x:310.7,y:259.4},4).wait(1));

		// Symbol 10
		this.instance_8 = new lib.happy_214_1466940664944("synched",0);
		this.instance_8.setTransform(406.6,374.7,1,1,0,0,0,0.4,19.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:0.5,rotation:25.7,x:334.4,y:396.3},4).to({regX:0.4,rotation:69.2,x:275.7,y:427.8},4).to({regX:0.5,regY:19.5,rotation:101.9,x:249.5,y:445.8},4).to({regY:19.4,rotation:93.2,x:310.6,y:446.1},4).to({x:364.6},5).to({regY:19.5,rotation:68,x:408.1,y:427.7},4).to({regY:19.4,scaleX:1,scaleY:1,rotation:13.5,x:406.9,y:385.2},4).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(212,0,237,484.2);


	(lib.happy_810_1466940664938 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 2
		this.instance = new lib.happy_426_1466940664912();
		this.instance.setTransform(96.5,793,1,1,0,0,0,96.5,100);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.9},7).to({rotation:0},7).wait(1));

		// Layer 3
		this.instance_1 = new lib.happy_641_1466940664911();
		this.instance_1.setTransform(292,430.5,1,1,0,0,0,251,395.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

		// Layer 1
		this.instance_2 = new lib.happy_780_1466940664912();
		this.instance_2.setTransform(291.5,433.5,1,1,0,0,0,287.5,433.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,579,893);


	(lib.happy_478_1466940664940 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Symbol 4
		this.instance = new lib.happy_328_1466940664940("synched",0);
		this.instance.setTransform(79,131.9,1,1,0,0,0,79,131.9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.7,startPosition:9},9).to({rotation:0,startPosition:19},10).to({rotation:1.7,startPosition:29},10).to({rotation:0,startPosition:39},10).wait(1));

		// Symbol 11
		this.instance_1 = new lib.happy_627_1466940664944("synched",0);
		this.instance_1.setTransform(86,133.5,1,1,0,0,0,45.8,9.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},9).to({startPosition:0},10).to({startPosition:0},10).to({startPosition:0},10).wait(1));

		// Symbol 5
		this.instance_2 = new lib.happy_763_1466940664941("synched",0);
		this.instance_2.setTransform(125.9,138.3,1,1,0,0,0,13.5,6);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3.2},9).to({rotation:0},10).to({rotation:-3.2},10).to({rotation:0},10).wait(1));

		// Symbol 9
		this.instance_3 = new lib.happy_837_1466940664943("synched",0);
		this.instance_3.setTransform(26.8,212.2,1,1,0,0,0,21.6,40.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3.5,y:212.3},9).to({rotation:0,y:212.2},10).to({rotation:-3.5,y:212.3},10).to({rotation:0,y:212.2},10).wait(1));

		// Symbol 8
		this.instance_4 = new lib.happy_867_1466940664943("synched",0);
		this.instance_4.setTransform(85.6,220.8,1,1,0,0,0,17.1,43);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:3.2},9).to({rotation:0},10).to({rotation:3.2},10).to({rotation:0},10).wait(1));

		// Symbol 7
		this.instance_5 = new lib.happy_678_1466940664942("synched",0);
		this.instance_5.setTransform(132.8,207.6,1,1,0,0,0,46.4,25.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},9).to({startPosition:0},10).to({startPosition:0},10).to({startPosition:0},10).wait(1));

		// Symbol 10
		this.instance_6 = new lib.happy_648_1466940664944("synched",0);
		this.instance_6.setTransform(75,211.5,1,1,0,0,0,54.4,97.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({skewX:1.2},9).to({skewX:0},10).to({skewX:1.2},10).to({skewX:0},10).wait(1));

		// Symbol 6
		this.instance_7 = new lib.happy_068_1466940664941("synched",0);
		this.instance_7.setTransform(47.6,137.4,1,1,0,0,0,36.6,7.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:7.5,rotation:3},9).to({regY:7.4,rotation:0},10).to({regY:7.5,rotation:3},10).to({regY:7.4,rotation:0},10).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,176.1,226.7);


	(lib.happy_885_1466940664912 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.happy_949_1466940664938("synched",0);
		this.instance.setTransform(255,273.5,1,1,0,0,0,179,268.6);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(29));

		// 医疗
		this.instance_1 = new lib.happy_893_1466940664912();
		this.instance_1.setTransform(430,292,1,1,0,0,0,4,53);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-8.5},7).to({rotation:0},7).to({rotation:-8.5},7).to({rotation:0},7).wait(1));

		// 奶粉
		this.instance_2 = new lib.happy_323_1466940664913();
		this.instance_2.setTransform(131,166.5,1,1,0,0,0,131,103.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:131.1,rotation:7,x:131.1},7).to({regX:131,rotation:0,x:131},7).to({regX:131.1,rotation:7,x:131.1},7).to({regX:131,rotation:0,x:131},7).wait(1));

		// 教育
		this.instance_3 = new lib.happy_184_1466940664913();
		this.instance_3.setTransform(464,98.5,1,1,0,0,0,2,85.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:6.7,x:464.1},7).to({rotation:0,x:464},7).to({rotation:6.7,x:464.1},7).to({rotation:0,x:464},7).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,4.9,590,537.2);


	(lib.happy_460_1466940664940 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{"事件":25});

		// Layer 2
		this.instance = new lib.happy_624_1466940664952();
		this.instance.setTransform(0.1,469.2,1,1,0,0,0,30,25);
		this.instance.alpha = 0.012;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).wait(5));

		// logo
		this.instance_1 = new lib.happy_958_1466940664913();
		this.instance_1.setTransform(-214.5,-464.5,1,1,0,0,0,71.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

		// frame
		this.instance_2 = new lib.happy_975_1466940664913();
		this.instance_2.setTransform(124.1,-174.4,0.303,0.303,0,0,0,264.1,253.5);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({regY:253.6,scaleX:1.05,scaleY:1.05},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).wait(8));

		// baby
		this.instance_3 = new lib.happy_885_1466940664912();
		this.instance_3.setTransform(5,77.5,0.715,0.715,0,0,0,295,276.4);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regY:276.5,scaleX:1.02,scaleY:1.02},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).wait(16));

		// 图层 7
		this.instance_4 = new lib.happy_720_1466940664913();
		this.instance_4.setTransform(13.5,359.5,1,1,0,0,0,202.5,14.5);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({y:389.5,alpha:1},7,cjs.Ease.get(1)).to({y:379.5},4).wait(10));

		// 图层 8
		this.instance_5 = new lib.happy_764_1466940664913();
		this.instance_5.setTransform(-1,477,1,1,0,0,0,24,13);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(5));

		// 底纹
		this.instance_6 = new lib.happy_031_1466940664914();
		this.instance_6.setTransform(-21,-46,1,1,0,0,0,328,409);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({alpha:1},8).wait(17));

		// 图层 0
		this.instance_7 = new lib.happy_958_1466940664909();
		this.instance_7.setTransform(0,-40,1,1,0,0,0,320,568);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-573.1,-833.1,1134.3,1574.4);


	(lib.happy_395_1466940664946 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.instance = new lib.happy_652_1466940664953();
		this.instance.setTransform(455,933.9,3.547,1.757,0,0,0,30.1,24.9);
		this.instance.alpha = 0.012;

		this.instance_1 = new lib.happy_652_1466940664953();
		this.instance_1.setTransform(193.9,937.9,3.547,1.757,0,0,0,30.1,24.9);
		this.instance_1.alpha = 0.012;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},28).wait(5));

		// 图层 9
		this.instance_2 = new lib.happy_713_1466940664929();
		this.instance_2.setTransform(455.5,900,1,1,0,0,0,105.5,38);
		this.instance_2.alpha = 0.012;
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({y:954,alpha:1},8,cjs.Ease.get(1)).to({y:940},4).wait(5));

		// 图层 10
		this.instance_3 = new lib.happy_820_1466940664929();
		this.instance_3.setTransform(192.5,900,1,1,0,0,0,105.5,38);
		this.instance_3.alpha = 0.012;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({y:954,alpha:1},8,cjs.Ease.get(1)).to({y:940},4).wait(10));

		// 图层 11
		this.instance_4 = new lib.happy_050_1466940664929();
		this.instance_4.setTransform(313,636,0.488,0.488,0,0,0,168,175);
		this.instance_4.alpha = 0.012;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({regX:168.1,scaleX:1.05,scaleY:1.05,x:325.1,y:662,alpha:1},7,cjs.Ease.get(1)).to({regX:168,scaleX:1,scaleY:1,x:325},4).wait(18));

		// 矢量智能对象
		this.instance_5 = new lib.happy_508_1466940664930();
		this.instance_5.setTransform(317.5,624,1,1,0,0,0,249.5,261);
		this.instance_5.alpha = 0.012;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(18));

		// 再复习一下宝典吧！
		this.instance_6 = new lib.happy_345_1466940664929();
		this.instance_6.setTransform(322,376,1,1,0,0,0,187,74);
		this.instance_6.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:322,alpha:1},7,cjs.Ease.get(1)).to({y:336},4).wait(22));

		// 图层 12
		this.instance_7 = new lib.happy_331_1466940664930();
		this.instance_7.setTransform(320,568,1,1,0,0,0,320,568);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


	(lib.happy_353_1466940664938 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 17
		this.instance = new lib.happy_834_1466940664948("synched",0);
		this.instance.setTransform(279.9,89.7,0.543,0.543,34.7,0,0,239.7,34.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

		// Layer 1
		this.instance_1 = new lib.happy_841_1466940664944("synched",0);
		this.instance_1.setTransform(320.1,489.2,1,1,0,0,0,320.1,489.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.98,startPosition:7},7).to({scaleY:1,startPosition:14},7).to({scaleY:0.98,startPosition:21},7).to({scaleY:1,startPosition:28},8).wait(1));

		// Symbol 16
		this.instance_2 = new lib.happy_554_1466940664947("synched",0);
		this.instance_2.setTransform(139.3,228,1,1,0,0,0,10.6,27.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:10.7,regY:27.6,scaleX:1,scaleY:1.35,skewX:-2.5,skewY:3.7,x:139.4,y:227.9},14).to({regX:10.6,regY:27.7,scaleX:1,scaleY:1,skewX:0,skewY:0,x:139.3,y:228},15).wait(1));

		// Symbol 15
		this.instance_3 = new lib.happy_944_1466940664947("synched",0);
		this.instance_3.setTransform(128.4,230,1,1,0,0,0,8.2,19.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:20.1,scaleX:1.02,scaleY:1.67,skewX:-3.7,skewY:7.9,y:230.3},14).to({regY:19.9,scaleX:1,scaleY:1,skewX:0,skewY:0,y:230},15).wait(1));

		// Symbol 14
		this.instance_4 = new lib.happy_877_1466940664946("synched",0);
		this.instance_4.setTransform(118.5,232.1,1,1,0,0,0,9.8,27.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.01,scaleY:0.71,skewX:4.9,skewY:-4.3,y:232.2},14).to({scaleX:1,scaleY:1,skewX:0,skewY:0,y:232.1},15).wait(1));

		// Symbol 13
		this.instance_5 = new lib.happy_150_1466940664945("synched",0);
		this.instance_5.setTransform(108.7,234.5,1,1,0,0,0,11.7,40.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.84,skewX:1.4},14).to({scaleY:1,skewX:0},15).wait(1));

		// Layer 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("Ag7iFIBBgXIA2EpIhGAQg");
		this.shape.setTransform(115,210.8,1.44,1.44);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#DCDFE2").s().p("ABojNQgUiTgYiWQgvksgTgRQgUgQitggQhWgRhTgNQgXAAgYgLQgwgYAAg6QAAg6AwgLQAYgFAXAGIDAAhQDIAkAvANQAvAOAVAyQAKAZABAWIE6dcIiaArg");
		this.shape_1.setTransform(66.9,347.3,1.44,1.44);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#E8904F").s().p("ABgjCIkUAWIgDgUIEjgWIBMGpIgOAEg");
		this.shape_2.setTransform(118.8,195.8,1.44,1.44);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFFFF").s().p("Ai3jfIEkgWIBLGnIkfBEg");
		this.shape_3.setTransform(118.8,200.3,1.44,1.44);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FAC72E").s().p("AgNEJIhVnjIBig7IBjIrg");
		this.shape_4.setTransform(85.8,203,1.44,1.44);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FED766").s().p("AjdkNIFkgQIBXHdIlYBeg");
		this.shape_5.setTransform(117.9,201.8,1.44,1.44);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#DCDFE2").s().p("AAPB7Qy0gFgMgLQgLgLgPhvIgNhuQf8AXG1gJQAABFgLBaIgMBNQpYABpbgDg");
		this.shape_6.setTransform(287.8,503.5,1.44,1.44);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#C4C4C4").s().p("AgmBDQgEgFgLhmIA3gYQA5gRgFApQgHA+gKAtQAAACglABIgMAAQgYAAgCgDg");
		this.shape_7.setTransform(142.9,519.7,1.44,1.44);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#DCDFE2").s().p("AgmBDQgFgFgKhmIA3gYQA4gQgEAoQgHA+gKAtQgkADgSAAQgTAAgCgDg");
		this.shape_8.setTransform(455.4,525,1.44,1.44);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#DCDFE2").s().p("AgmBDQgEgGgLhmIA3gYQA5gQgFAoQgHA/gKAtQAAABglACIgMAAQgYAAgCgDg");
		this.shape_9.setTransform(122.6,525,1.44,1.44);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#C4C4C4").s().p("AhmhFQCthHA3gbQACAjgKBiQgKBdgHAPQgLAYhsAlIhrAhg");
		this.shape_10.setTransform(481.5,497.4,1.44,1.44);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#A4A4A5").s().p("AxPBzIj8hoIFvh9MAkoAAqIi8C7g");
		this.shape_11.setTransform(304.3,483.8,1.44,1.44);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#C4C4C4").s().p("AgqBVQgFgGgLhmQAggbAcgSQA9gmgFAoQgHBBgTBWQAAABgiACIgOAAQgYAAgCgDg");
		this.shape_12.setTransform(486.3,517.2,1.44,1.44);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#A4A4A5").s().p("ABziAQgTiTgYiWQgwksgUgRQgTgQisggIipgeQgXAAgYgLQgwgYAAg6QAAg6AwgLQAYgFAXAGIDAAhQDIAkAvANQAvAOAVAyQAKAZABAXIEibCIiaArg");
		this.shape_13.setTransform(110.6,338.9,1.44,1.44);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#A4A4A5").s().p("AioAmIgThxIE8ASIA8CFg");
		this.shape_14.setTransform(37.3,205.4,1.44,1.44);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

		// Layer 18
		this.instance_6 = new lib.happy_564_1466940664937();
		this.instance_6.setTransform(306.4,527.9,1.07,0.441,0,0,0,184.5,42.5);
		this.instance_6.alpha = 0.359;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,503.8,546.7);


	(lib.happy_327_1466940664941 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 2
		this.instance = new lib.happy_194_1466940664948("synched",0);
		this.instance.setTransform(239.6,86.6,1,1,0,0,0,239.6,34.7);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

		// Layer 3
		this.instance_1 = new lib.happy_061_1466940664942("synched",0);
		this.instance_1.setTransform(246.6,163.7,1,1,0,0,0,222,160.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:153.7,startPosition:6},6).to({y:163.7,startPosition:0},6).wait(1));

		// Layer 9
		this.instance_2 = new lib.happy_677_1466940664947();
		this.instance_2.setTransform(245.3,299.6,1,1,0,0,0,124.5,21.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.82,scaleY:0.86,x:243.3,y:296.6},6).to({scaleX:1,scaleY:1,x:245.3,y:299.6},6).wait(1));

		// Symbol 14
		this.instance_3 = new lib.happy_210_1466940664946();
		this.instance_3.setTransform(128.2,484.8,1,1,0,0,0,56.1,101.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:12.7},6).to({rotation:0},6).wait(1));

		// Symbol 13
		this.instance_4 = new lib.happy_884_1466940664945();
		this.instance_4.setTransform(376.2,483.7,1,1,0,0,0,19.1,97.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:97.5,rotation:-8.7,y:483.8},6).to({regY:97.4,rotation:0,y:483.7},6).wait(1));

		// Layer 1
		this.instance_5 = new lib.happy_893_1466940664946();
		this.instance_5.setTransform(254.3,490.9,1,1,0,0,0,136.8,226);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:1.08},6).to({scaleY:1},6).wait(1));

		// Symbol 12
		this.instance_6 = new lib.happy_821_1466940664945();
		this.instance_6.setTransform(315.3,305.9,1,1,0,0,0,-2.4,20.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:13.9},6).to({rotation:0},6).wait(1));

		// Symbol 11
		this.instance_7 = new lib.happy_425_1466940664944();
		this.instance_7.setTransform(167.6,307.1,1,1,0,0,0,116.6,13.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.5},6).to({rotation:0},6).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(24.6,3,444,488);


	(lib.happy_283_1466940664942 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{"事件":33});

		// Layer 2
		this.instance = new lib.happy_978_1466940664952();
		this.instance.setTransform(132,400,3.469,1.597,0,0,0,30,25);
		this.instance.alpha = 0.012;

		this.instance_1 = new lib.happy_978_1466940664952();
		this.instance_1.setTransform(-131,400,3.469,1.597,0,0,0,30,25);
		this.instance_1.alpha = 0.012;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},33).wait(6));

		// logo
		this.instance_2 = new lib.happy_287_1466940664922();
		this.instance_2.setTransform(-214.5,-464.5,1,1,0,0,0,71.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39));

		// 矢量智能对象
		this.instance_3 = new lib.happy_275_1466940664922();
		this.instance_3.setTransform(0,-53,1,1,0,0,0,259,145);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(24));

		// button 拷贝
		this.instance_4 = new lib.happy_611_1466940664921();
		this.instance_4.setTransform(144,374.5,1,1,0,0,0,114,45.5);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({y:402.5,alpha:1},7,cjs.Ease.get(1)).to({y:396.5},4).wait(6));

		// button
		this.instance_5 = new lib.happy_302_1466940664921();
		this.instance_5.setTransform(-146.5,382,1,1,0,0,0,124.5,38);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({y:410,alpha:1},7,cjs.Ease.get(1)).to({y:404},4).wait(9));

		// 组 1
		this.instance_6 = new lib.happy_162_1466940664923();
		this.instance_6.setTransform(249,-365.5,1,1,0,0,0,90,72.5);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(19));

		// 矢量智能对象_1
		this.instance_7 = new lib.happy_135_1466940664922();
		this.instance_7.setTransform(-280.5,180.5,1,1,0,0,0,25.5,21.5);
		this.instance_7.alpha = 0;
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({x:-234.5,alpha:1},8,cjs.Ease.get(1)).to({x:-240.5},4).wait(15));

		// 是吗？
		this.instance_8 = new lib.happy_747_1466940664922();
		this.instance_8.setTransform(71,215,1,1,0,0,0,233,54);
		this.instance_8.alpha = 0;
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({x:25,alpha:1},8,cjs.Ease.get(1)).to({x:31},4).wait(15));

		// 图层 9
		this.instance_9 = new lib.happy_649_1466940664922();
		this.instance_9.setTransform(0.5,-310.5,1,1,0,0,0,246.5,68.5);
		this.instance_9.alpha = 0;
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).to({y:-352.5,alpha:1},8,cjs.Ease.get(1)).to({y:-342.5},5).wait(18));

		// 图层 0
		this.instance_10 = new lib.happy_958_1466940664909();
		this.instance_10.setTransform(0,-40,1,1,0,0,0,320,568);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(39));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-573.1,-833.1,1134.3,1574.4);


	(lib.happy_275_1466940664943 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.instance = new lib.happy_366_1466940664953();
		this.instance.setTransform(132,400,3.469,1.597,0,0,0,30,25);
		this.instance.alpha = 0.012;

		this.instance_1 = new lib.happy_366_1466940664953();
		this.instance_1.setTransform(-131,400,3.469,1.597,0,0,0,30,25);
		this.instance_1.alpha = 0.012;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},34).wait(4));

		// logo
		this.instance_2 = new lib.happy_109_1466940664925();
		this.instance_2.setTransform(-214.5,-464.5,1,1,0,0,0,71.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38));

		// button 拷贝
		this.instance_3 = new lib.happy_611_1466940664921();
		this.instance_3.setTransform(144,374.5,1,1,0,0,0,114,45.5);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({y:402.5,alpha:1},7,cjs.Ease.get(1)).to({y:396.5},4).wait(5));

		// button
		this.instance_4 = new lib.happy_302_1466940664921();
		this.instance_4.setTransform(-146.5,382,1,1,0,0,0,124.5,38);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({y:410,alpha:1},7,cjs.Ease.get(1)).to({y:404},4).wait(8));

		// 图层 8
		this.instance_5 = new lib.happy_614_1466940664926();
		this.instance_5.setTransform(0.5,-314.5,1,1,0,0,0,246.5,68.5);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({y:-352.5,alpha:1},8,cjs.Ease.get(1)).to({y:-342.5},5).wait(16));

		// 组 1
		this.instance_6 = new lib.happy_425_1466940664926();
		this.instance_6.setTransform(18.5,-365.5,1,1,0,0,0,320.5,72.5);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(18));

		// 矢量智能对象
		this.instance_7 = new lib.happy_825_1466940664926();
		this.instance_7.setTransform(-280.5,180.5,1,1,0,0,0,25.5,21.5);
		this.instance_7.alpha = 0;
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({x:-234.5,alpha:1},8,cjs.Ease.get(1)).to({x:-240.5},4).wait(14));

		// 是吗？
		this.instance_8 = new lib.happy_260_1466940664926();
		this.instance_8.setTransform(71.5,215,1,1,0,0,0,232.5,54);
		this.instance_8.alpha = 0;
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({x:25.5,alpha:1},8,cjs.Ease.get(1)).to({x:31.5},4).wait(14));

		// 图层 7
		this.instance_9 = new lib.happy_133_1466940664925();
		this.instance_9.setTransform(1.5,-65.5,1,1,0,0,0,233.5,148.5);
		this.instance_9.alpha = 0;
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(23));

		// 图层 0
		this.instance_10 = new lib.happy_958_1466940664909();
		this.instance_10.setTransform(0,-40,1,1,0,0,0,320,568);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(38));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-573.1,-833.1,1134.3,1574.4);


	(lib.happy_262_1466940664940 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{"事件":29});

		// Layer 2
		this.instance = new lib.happy_786_1466940664952();
		this.instance.setTransform(0.1,469.2,1,1,0,0,0,30,25);
		this.instance.alpha = 0.012;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1));

		// 图层 1
		this.instance_1 = new lib.happy_353_1466940664938();
		this.instance_1.setTransform(-14.2,76.6,1,1,0,0,0,249.8,267.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

		// logo
		this.instance_2 = new lib.happy_309_1466940664914();
		this.instance_2.setTransform(-214.5,-464.5,1,1,0,0,0,71.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

		// frame
		this.instance_3 = new lib.happy_217_1466940664914();
		this.instance_3.setTransform(123.6,-162.5,0.321,0.321,0,0,0,270.6,266.5);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({regX:270.5,scaleX:1.04,scaleY:1.04,x:123.5},7,cjs.Ease.get(1)).to({regX:270.6,scaleX:1,scaleY:1,x:123.6},4,cjs.Ease.get(1)).wait(17));

		// 图层 16
		this.instance_4 = new lib.happy_833_1466940664910();
		this.instance_4.setTransform(0,473,1,1,0,0,0,24,13);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(1));

		// word
		this.instance_5 = new lib.happy_292_1466940664915();
		this.instance_5.setTransform(13.5,364,1,1,0,0,0,132.5,14);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({y:386,alpha:1},7,cjs.Ease.get(1)).to({y:380},4).wait(5));

		// 底纹
		this.instance_6 = new lib.happy_803_1466940664915();
		this.instance_6.setTransform(8,-7,1,1,0,0,0,300,450);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(15));

		// 图层 0
		this.instance_7 = new lib.happy_958_1466940664909();
		this.instance_7.setTransform(0,-40,1,1,0,0,0,320,568);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-573.1,-833.1,1134.3,1574.4);


	(lib.happy_253_1466940664943 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{"事件":34});

		// Layer 2
		this.instance = new lib.happy_275_1466940664953();
		this.instance.setTransform(132,400,3.469,1.597,0,0,0,30,25);
		this.instance.alpha = 0.012;

		this.instance_1 = new lib.happy_275_1466940664953();
		this.instance_1.setTransform(-131,400,3.469,1.597,0,0,0,30,25);
		this.instance_1.alpha = 0.012;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},34).wait(4));

		// logo
		this.instance_2 = new lib.happy_438_1466940664928();
		this.instance_2.setTransform(-214.5,-464.5,1,1,0,0,0,71.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38));

		// button 拷贝
		this.instance_3 = new lib.happy_611_1466940664921();
		this.instance_3.setTransform(144,374.5,1,1,0,0,0,114,45.5);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({y:402.5,alpha:1},7,cjs.Ease.get(1)).to({y:396.5},4).wait(5));

		// button
		this.instance_4 = new lib.happy_302_1466940664921();
		this.instance_4.setTransform(-146.5,382,1,1,0,0,0,124.5,38);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({y:410,alpha:1},7,cjs.Ease.get(1)).to({y:404},4).wait(8));

		// 矢量智能对象
		this.instance_5 = new lib.happy_149_1466940664928();
		this.instance_5.setTransform(-280.5,180.5,1,1,0,0,0,25.5,21.5);
		this.instance_5.alpha = 0.012;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({x:-232.5,alpha:1},8,cjs.Ease.get(1)).to({x:-240.5},4).wait(14));

		// 是吗？
		this.instance_6 = new lib.happy_570_1466940664928();
		this.instance_6.setTransform(73.5,215,1,1,0,0,0,230.5,54);
		this.instance_6.alpha = 0.012;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({x:25.5,alpha:1},8,cjs.Ease.get(1)).to({x:33.5},4).wait(14));

		// 组 1
		this.instance_7 = new lib.happy_187_1466940664924();
		this.instance_7.setTransform(18.5,-365.5,1,1,0,0,0,320.5,72.5);
		this.instance_7.alpha = 0;
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(18));

		// 图层 8
		this.instance_8 = new lib.happy_848_1466940664924();
		this.instance_8.setTransform(0.5,-314.5,1,1,0,0,0,246.5,68.5);
		this.instance_8.alpha = 0;
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({y:-352.5,alpha:1},8,cjs.Ease.get(1)).to({y:-342.5},5).wait(16));

		// 组 1
		this.instance_9 = new lib.happy_814_1466940664928();
		this.instance_9.setTransform(18.5,-163.5,1,1,0,0,0,320.5,274.5);
		this.instance_9.alpha = 0;
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(23));

		// 图层 0
		this.instance_10 = new lib.happy_958_1466940664909();
		this.instance_10.setTransform(0,-40,1,1,0,0,0,320,568);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(38));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-573.1,-833.1,1134.3,1574.4);


	(lib.happy_231_1466940664944 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{"事件":34});

		// Layer 2
		this.instance = new lib.happy_018_1466940664953();
		this.instance.setTransform(132,400,3.469,1.597,0,0,0,30,25);
		this.instance.alpha = 0.012;

		this.instance_1 = new lib.happy_018_1466940664953();
		this.instance_1.setTransform(-131,400,3.469,1.597,0,0,0,30,25);
		this.instance_1.alpha = 0.012;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},34).wait(4));

		// logo
		this.instance_2 = new lib.happy_398_1466940664929();
		this.instance_2.setTransform(-214.5,-464.5,1,1,0,0,0,71.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38));

		// button 拷贝
		this.instance_3 = new lib.happy_611_1466940664921();
		this.instance_3.setTransform(144,374.5,1,1,0,0,0,114,45.5);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({y:402.5,alpha:1},7,cjs.Ease.get(1)).to({y:396.5},4).wait(5));

		// button
		this.instance_4 = new lib.happy_302_1466940664921();
		this.instance_4.setTransform(-146.5,382,1,1,0,0,0,124.5,38);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({y:410,alpha:1},7,cjs.Ease.get(1)).to({y:404},4).wait(8));

		// 图层 8
		this.instance_5 = new lib.happy_543_1466940664927();
		this.instance_5.setTransform(0.5,-314.5,1,1,0,0,0,246.5,68.5);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({y:-352.5,alpha:1},8,cjs.Ease.get(1)).to({y:-342.5},5).wait(16));

		// 组 1
		this.instance_6 = new lib.happy_887_1466940664928();
		this.instance_6.setTransform(18.5,-365.5,1,1,0,0,0,320.5,72.5);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(18));

		// 矢量智能对象
		this.instance_7 = new lib.happy_667_1466940664929();
		this.instance_7.setTransform(-11.5,-80,1,1,0,0,0,232.5,159);
		this.instance_7.alpha = 0.012;
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(23));

		// 矢量智能对象_1
		this.instance_8 = new lib.happy_162_1466940664929();
		this.instance_8.setTransform(-280.5,143.5,1,1,0,0,0,25.5,21.5);
		this.instance_8.alpha = 0.012;
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({x:-232.5,alpha:1},8,cjs.Ease.get(1)).to({x:-240.5},4).wait(14));

		// 是吗？
		this.instance_9 = new lib.happy_253_1466940664929();
		this.instance_9.setTransform(73.5,215,1,1,0,0,0,230.5,95);
		this.instance_9.alpha = 0.012;
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).to({x:25.5,alpha:1},8,cjs.Ease.get(1)).to({x:33.5},4).wait(14));

		// 图层 0
		this.instance_10 = new lib.happy_958_1466940664909();
		this.instance_10.setTransform(0,-40,1,1,0,0,0,320,568);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(38));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-573.1,-833.1,1134.3,1574.4);


	(lib.happy_227_1466940664949 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 2
		this.instance = new lib.happy_327_1466940664941("synched",0);
		this.instance.setTransform(305.7,242.3,1,1,0,0,0,239.6,245.3);

		this.instance_1 = new lib.happy_903_1466940664937("synched",0);
		this.instance_1.setTransform(62.1,444.4,1,1,0,0,0,62.1,44.8);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(13));

		// Layer 1
		this.instance_2 = new lib.happy_224_1466940664949();
		this.instance_2.setTransform(62.2,478.9,0.399,0.559,0,0,0,184.5,42.4);
		this.instance_2.alpha = 0.289;

		this.instance_3 = new lib.happy_224_1466940664949();
		this.instance_3.setTransform(312.3,472,0.935,1,0,0,0,184.5,42.5);
		this.instance_3.alpha = 0.359;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(13));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-11.3,0,546,514.5);


	(lib.happy_880_1466940664939 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{"事件":25});

		// Layer 8
		this.instance = new lib.happy_338_1466940664908();
		this.instance.setTransform(-214.5,-464.5,1,1,0,0,0,71.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(29));

		// Layer 2
		this.instance_1 = new lib.happy_350_1466940664952();
		this.instance_1.setTransform(0,488.4,1,1,0,0,0,30,25);
		this.instance_1.alpha = 0.012;
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(9));

		// 图层 6
		this.instance_2 = new lib.happy_860_1466940664910();
		this.instance_2.setTransform(0,453,1,1,0,0,0,24,13);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({y:488,alpha:1},8,cjs.Ease.get(1)).wait(9));

		// 图层 6
		this.instance_3 = new lib.happy_810_1466940664938();
		this.instance_3.setTransform(-2.5,115.5,1,1,0,0,0,289.5,446.5);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({y:29.5,alpha:1},10,cjs.Ease.get(1)).to({y:39.5},5).wait(11));

		// flower
		this.instance_4 = new lib.happy_095_1466940664910();
		this.instance_4.setTransform(-4,6,1,1,0,0,0,291,498);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(14));

		// 图层 0
		this.instance_5 = new lib.happy_958_1466940664909();
		this.instance_5.setTransform(0,-40,1,1,0,0,0,320,568);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-573.1,-833.1,1134.3,1574.4);


	(lib.happy_055_1466940664916 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 10
		this.instance = new lib.happy_478_1466940664940("synched",0);
		this.instance.setTransform(480.6,556.7,1,1,0,0,0,88,113.4);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

		// Layer 9
		this.instance_1 = new lib.happy_873_1466940664939("synched",0);
		this.instance_1.setTransform(284.6,555.8,1,1,0,0,0,88,110.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

		// 图层 1
		this.instance_2 = new lib.happy_113_1466940664938("synched",0);
		this.instance_2.setTransform(95.6,555,1,1,0,0,0,88,115.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

		// Layer 11
		this.instance_3 = new lib.happy_310_1466940664937();
		this.instance_3.setTransform(472.8,654.2,0.42,0.535,0,0,0,184.5,42.5);
		this.instance_3.alpha = 0.359;

		this.instance_4 = new lib.happy_310_1466940664937();
		this.instance_4.setTransform(285.7,657.2,0.42,0.535,0,0,0,184.5,42.5);
		this.instance_4.alpha = 0.359;

		this.instance_5 = new lib.happy_310_1466940664937();
		this.instance_5.setTransform(105.7,655.2,0.42,0.535,0,0,0,184.5,42.5);
		this.instance_5.alpha = 0.359;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(40));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(7.6,439.1,561.1,240.8);


	(lib.happy_386_1466940664941 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{"事件":39});

		// Layer 1
		this.instance = new lib.happy_928_1466940664953();
		this.instance.setTransform(0.1,477.3,1,1,0,0,0,30,25);
		this.instance.alpha = 0.012;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).wait(13));

		// logo
		this.instance_1 = new lib.happy_789_1466940664917();
		this.instance_1.setTransform(-214.5,-464.5,1,1,0,0,0,71.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

		// 我妈说母乳要 吃到2岁， 身体一定棒棒哒！
		this.instance_2 = new lib.happy_523_1466940664916();
		this.instance_2.setTransform(196.5,31.6,0.241,0.241,0,0,0,161.6,232.7);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({regX:161.5,regY:232.6,scaleX:1.07,scaleY:1.07},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).wait(1));

		// 我吃了1年母乳啦， 妈妈说母乳任务完成了！
		this.instance_3 = new lib.happy_541_1466940664916();
		this.instance_3.setTransform(0.5,-125.9,0.291,0.291,0,0,0,166.5,255);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({scaleX:1.06,scaleY:1.06,y:-126},8,cjs.Ease.get(1)).to({regY:255.1,scaleX:1,scaleY:1,y:-125.9},4).wait(13));

		// 奶奶说母乳吃 6个月就要换奶粉 才够营养。
		this.instance_4 = new lib.happy_791_1466940664916();
		this.instance_4.setTransform(-198.5,26,0.278,0.278,0,0,0,83.5,189.1);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({regY:189,scaleX:1.05,scaleY:1.05},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).wait(23));

		// baby
		this.instance_5 = new lib.happy_055_1466940664916();
		this.instance_5.setTransform(7,-39,0.784,0.784,0,0,0,291,342);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({regX:291.1,scaleX:1.04,scaleY:1.04,x:7.1},7,cjs.Ease.get(1)).to({regX:291,scaleX:1,scaleY:1,x:7},3).wait(29));

		// 图层 9
		this.instance_6 = new lib.happy_496_1466940664918();
		this.instance_6.setTransform(-1,481,1,1,0,0,0,24,13);
		this.instance_6.alpha = 0.359;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(14));

		// word
		this.instance_7 = new lib.happy_934_1466940664918();
		this.instance_7.setTransform(13.5,356,1,1,0,0,0,146.5,14);
		this.instance_7.alpha = 0;
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).to({y:388,alpha:1},7,cjs.Ease.get(1)).to({y:380},4).wait(18));

		// 底纹
		this.instance_8 = new lib.happy_045_1466940664919();
		this.instance_8.setTransform(-2,-20,1,1,0,0,0,347,408);
		this.instance_8.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},8).wait(32));

		// 图层 0
		this.instance_9 = new lib.happy_958_1466940664909();
		this.instance_9.setTransform(0,-40,1,1,0,0,0,320,568);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-573.1,-833.1,1134.3,1574.4);


	(lib.happy_336_1466940664938 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{"动画":0,"事件":28});

		// Layer 11
		this.instance = new lib.happy_642_1466940664952();
		this.instance.setTransform(0.1,469.2,1,1,0,0,0,30,25);
		this.instance.alpha = 0.012;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).wait(4));

		// logo
		this.instance_1 = new lib.happy_338_1466940664908();
		this.instance_1.setTransform(-214.5,-464.5,1,1,0,0,0,71.5,24.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32));

		// 图层 6
		this.instance_2 = new lib.happy_228_1466940664909();
		this.instance_2.setTransform(0,453,1,1,0,0,0,24,13);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({y:473,alpha:1},8,cjs.Ease.get(1)).wait(4));

		// 图层 1
		this.instance_3 = new lib.happy_227_1466940664949();
		this.instance_3.setTransform(-4.2,83.6,0.573,0.573,0,0,0,267.3,245.2);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({scaleX:1.05,scaleY:1.05},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).wait(19));

		// frame
		this.instance_4 = new lib.happy_662_1466940664908();
		this.instance_4.setTransform(141.1,-146.5,0.266,0.266,0,0,0,310.1,296.5);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({scaleX:1.08,scaleY:1.08},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(15));

		// word
		this.instance_5 = new lib.happy_258_1466940664909();
		this.instance_5.setTransform(0.5,354,1,1,0,0,0,188.5,14);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({y:390,alpha:1},6,cjs.Ease.get(1)).to({y:380},4).wait(8));

		// 底纹
		this.instance_6 = new lib.happy_799_1466940664910();
		this.instance_6.setTransform(-2,-46,1,1,0,0,0,347,409);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(12));

		// 图层 0
		this.instance_7 = new lib.happy_958_1466940664909();
		this.instance_7.setTransform(0,-40,1,1,0,0,0,320,568);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-573.1,-833.1,1134.3,1574.4);


	// stage content:
	(lib.all = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{开始主页面:0,"知识学习页面，不包含长页面":14,考试主页面:39,考试页面共4p:53,答对结果页面:69,答对弹层:86,答错弹层:96});

		// timeline functions:
		this.frame_61 = function() {
			this.stop()
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(61).call(this.frame_61).wait(45));

		// 镜头框
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("EgxDhKEMBj+AAAMAAACifMhj+AAAgEhYch61MCw5AAAMAAAD1rMiw5AAAg");
		this.shape.setTransform(314.1,474.1);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#000000").s().p("EhYcB61MAAAj1qMCw5AAAMAAAD1qgEgxDBYbMBj+AAAMAAAiifMhj+AAAg");
		this.shape_1.setTransform(314.1,474.1);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(106));

		// Layer 1
		this.instance = new lib.happy_475_1466940664937(0,0,0);
		this.instance.setTransform(322,521.8,1,1,0,0,0,2,1.8);

		this.instance_1 = new lib.happy_336_1466940664938(0,0,0);
		this.instance_1.setTransform(322,597,1,1,0,0,0,2,77);

		this.instance_2 = new lib.happy_880_1466940664939(0,0,0);
		this.instance_2.setTransform(328.5,536,1,1,0,0,0,8.5,16);

		this.instance_3 = new lib.happy_460_1466940664940(0,0,0);
		this.instance_3.setTransform(342,551.5,1,1,0,0,0,22,31.5);

		this.instance_4 = new lib.happy_262_1466940664940(0,0,0);
		this.instance_4.setTransform(337.8,550.8,1,1,0,0,0,17.8,30.8);

		this.instance_5 = new lib.happy_386_1466940664941(0,0,0);
		this.instance_5.setTransform(349,564.5,1,1,0,0,0,29,44.5);

		this.instance_6 = new lib.happy_849_1466940664942(0,0,0);
		this.instance_6.setTransform(333,539.5,1,1,0,0,0,13,19.5);

		this.instance_7 = new lib.happy_283_1466940664942(0,0,0);
		this.instance_7.setTransform(331,544.5,1,1,0,0,0,11,24.5);

		this.instance_8 = new lib.happy_275_1466940664943(0,0,0);
		this.instance_8.setTransform(344.8,549.5,1,1,0,0,0,24.8,29.5);

		this.instance_9 = new lib.happy_253_1466940664943(0,0,0);
		this.instance_9.setTransform(331,544.5,1,1,0,0,0,11,24.5);

		this.instance_10 = new lib.happy_231_1466940664944(0,0,0);
		this.instance_10.setTransform(339,560.5,1,1,0,0,0,19,40.5);

		this.instance_11 = new lib.happy_095_1466940664945(0,0,0);
		this.instance_11.setTransform(339.8,550.5,1,1,0,0,0,19.8,30.5);

		this.instance_12 = new lib.happy_373_1466940664946(0,0,0);
		this.instance_12.setTransform(18.8,-16,1,1,0,0,0,18.8,29.5);

		this.instance_13 = new lib.happy_395_1466940664946(0,0,0);
		this.instance_13.setTransform(38,25,1,1,0,0,0,38,70.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_7}]},14).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},17).to({state:[{t:this.instance_13}]},10).wait(10));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(66.9,206.9,1134.3,1574.4);

	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./all/all_atlas_.json": 12
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 11;


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/all/all_atlas_.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1136
			]
		]
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./all/all_atlas_.json": 12,
		"./all/all_atlas_2.json": 14,
		"./all/all_atlas_3.json": 15,
		"./all/all_atlas_4.json": 16,
		"./all/all_atlas_5.json": 17,
		"./all/all_atlas_6.json": 18,
		"./all/all_atlas_7.json": 19
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 13;


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/all/all_atlas_2.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1136
			]
		]
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/all/all_atlas_3.png"
		],
		"frames": [
			[
				0,
				0,
				640,
				1136
			],
			[
				642,
				0,
				575,
				867
			]
		]
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/all/all_atlas_4.png"
		],
		"frames": [
			[
				0,
				584,
				533,
				554
			],
			[
				535,
				584,
				499,
				522
			],
			[
				0,
				0,
				552,
				582
			],
			[
				554,
				0,
				499,
				522
			]
		]
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/all/all_atlas_5.png"
		],
		"frames": [
			[
				582,
				0,
				487,
				335
			],
			[
				520,
				1000,
				333,
				266
			],
			[
				520,
				648,
				336,
				350
			],
			[
				0,
				1038,
				457,
				230
			],
			[
				582,
				337,
				400,
				309
			],
			[
				0,
				746,
				518,
				290
			],
			[
				858,
				959,
				353,
				273
			],
			[
				858,
				648,
				346,
				309
			],
			[
				0,
				0,
				580,
				390
			],
			[
				0,
				392,
				467,
				352
			]
		]
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/all/all_atlas_6.png"
		],
		"frames": [
			[
				376,
				921,
				466,
				108
			],
			[
				0,
				771,
				259,
				233
			],
			[
				246,
				261,
				493,
				137
			],
			[
				1031,
				539,
				247,
				194
			],
			[
				545,
				539,
				484,
				104
			],
			[
				0,
				543,
				276,
				226
			],
			[
				486,
				1141,
				461,
				108
			],
			[
				0,
				0,
				461,
				190
			],
			[
				0,
				1156,
				484,
				110
			],
			[
				376,
				1031,
				465,
				108
			],
			[
				0,
				1006,
				374,
				148
			],
			[
				463,
				0,
				336,
				259
			],
			[
				0,
				192,
				244,
				349
			],
			[
				801,
				0,
				398,
				203
			],
			[
				844,
				846,
				193,
				200
			],
			[
				741,
				261,
				493,
				137
			],
			[
				545,
				645,
				484,
				104
			],
			[
				246,
				400,
				493,
				137
			],
			[
				261,
				771,
				374,
				148
			],
			[
				278,
				539,
				265,
				191
			],
			[
				741,
				400,
				493,
				137
			],
			[
				637,
				751,
				449,
				93
			]
		]
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
		"images": [
			"images/all/all_atlas_7.png"
		],
		"frames": [
			[
				817,
				262,
				33,
				40
			],
			[
				931,
				757,
				68,
				92
			],
			[
				371,
				72,
				92,
				70
			],
			[
				136,
				399,
				211,
				76
			],
			[
				695,
				513,
				143,
				49
			],
			[
				966,
				0,
				56,
				55
			],
			[
				852,
				262,
				120,
				161
			],
			[
				996,
				170,
				28,
				27
			],
			[
				974,
				380,
				47,
				47
			],
			[
				805,
				849,
				71,
				56
			],
			[
				878,
				851,
				71,
				56
			],
			[
				213,
				477,
				128,
				119
			],
			[
				520,
				733,
				40,
				30
			],
			[
				988,
				429,
				33,
				40
			],
			[
				154,
				822,
				71,
				56
			],
			[
				988,
				471,
				33,
				40
			],
			[
				0,
				658,
				89,
				92
			],
			[
				136,
				340,
				115,
				49
			],
			[
				487,
				399,
				27,
				27
			],
			[
				475,
				991,
				502,
				1
			],
			[
				840,
				513,
				38,
				38
			],
			[
				93,
				555,
				43,
				38
			],
			[
				226,
				641,
				475,
				18
			],
			[
				974,
				262,
				43,
				57
			],
			[
				373,
				858,
				72,
				53
			],
			[
				876,
				68,
				131,
				69
			],
			[
				138,
				940,
				51,
				43
			],
			[
				974,
				321,
				43,
				57
			],
			[
				735,
				773,
				68,
				92
			],
			[
				641,
				671,
				143,
				49
			],
			[
				923,
				605,
				48,
				26
			],
			[
				138,
				555,
				43,
				38
			],
			[
				786,
				671,
				143,
				49
			],
			[
				884,
				773,
				35,
				36
			],
			[
				349,
				399,
				44,
				33
			],
			[
				673,
				867,
				72,
				53
			],
			[
				927,
				909,
				57,
				52
			],
			[
				373,
				913,
				47,
				47
			],
			[
				880,
				513,
				124,
				90
			],
			[
				217,
				916,
				47,
				47
			],
			[
				951,
				851,
				71,
				56
			],
			[
				300,
				661,
				265,
				28
			],
			[
				300,
				691,
				143,
				49
			],
			[
				986,
				909,
				35,
				31
			],
			[
				447,
				893,
				62,
				53
			],
			[
				271,
				598,
				33,
				40
			],
			[
				527,
				854,
				71,
				56
			],
			[
				395,
				399,
				44,
				33
			],
			[
				973,
				605,
				48,
				26
			],
			[
				811,
				907,
				56,
				55
			],
			[
				703,
				641,
				293,
				28
			],
			[
				422,
				948,
				51,
				43
			],
			[
				817,
				150,
				177,
				110
			],
			[
				306,
				598,
				33,
				40
			],
			[
				473,
				611,
				377,
				28
			],
			[
				473,
				580,
				405,
				29
			],
			[
				641,
				722,
				143,
				49
			],
			[
				0,
				0,
				475,
				70
			],
			[
				154,
				880,
				61,
				58
			],
			[
				477,
				0,
				487,
				66
			],
			[
				473,
				513,
				220,
				65
			],
			[
				349,
				435,
				211,
				76
			],
			[
				343,
				513,
				128,
				118
			],
			[
				884,
				811,
				35,
				36
			],
			[
				0,
				934,
				48,
				46
			],
			[
				931,
				671,
				76,
				84
			],
			[
				266,
				916,
				47,
				47
			],
			[
				91,
				669,
				43,
				57
			],
			[
				315,
				916,
				47,
				47
			],
			[
				805,
				773,
				77,
				74
			],
			[
				996,
				139,
				28,
				29
			],
			[
				145,
				669,
				76,
				84
			],
			[
				0,
				879,
				72,
				53
			],
			[
				0,
				246,
				258,
				92
			],
			[
				570,
				912,
				57,
				52
			],
			[
				727,
				962,
				48,
				26
			],
			[
				50,
				951,
				51,
				43
			],
			[
				996,
				199,
				23,
				22
			],
			[
				742,
				150,
				73,
				72
			],
			[
				996,
				223,
				22,
				23
			],
			[
				629,
				922,
				47,
				47
			],
			[
				290,
				817,
				156,
				39
			],
			[
				364,
				962,
				51,
				43
			],
			[
				260,
				246,
				86,
				47
			],
			[
				927,
				963,
				48,
				26
			],
			[
				747,
				907,
				62,
				53
			],
			[
				227,
				858,
				71,
				56
			],
			[
				520,
				691,
				33,
				40
			],
			[
				371,
				237,
				444,
				66
			],
			[
				567,
				661,
				72,
				103
			],
			[
				226,
				661,
				72,
				108
			],
			[
				91,
				728,
				42,
				16
			],
			[
				183,
				555,
				27,
				27
			],
			[
				0,
				752,
				143,
				49
			],
			[
				747,
				867,
				35,
				36
			],
			[
				869,
				909,
				56,
				55
			],
			[
				0,
				555,
				91,
				101
			],
			[
				600,
				854,
				71,
				56
			],
			[
				227,
				822,
				48,
				26
			],
			[
				0,
				159,
				369,
				85
			],
			[
				880,
				605,
				41,
				32
			],
			[
				0,
				477,
				211,
				76
			],
			[
				300,
				742,
				143,
				49
			],
			[
				0,
				803,
				77,
				74
			],
			[
				520,
				305,
				330,
				63
			],
			[
				226,
				598,
				43,
				38
			],
			[
				775,
				435,
				211,
				76
			],
			[
				511,
				912,
				57,
				52
			],
			[
				74,
				896,
				62,
				53
			],
			[
				0,
				72,
				369,
				85
			],
			[
				520,
				370,
				330,
				63
			],
			[
				477,
				68,
				397,
				80
			],
			[
				562,
				435,
				211,
				76
			],
			[
				786,
				722,
				143,
				49
			],
			[
				441,
				399,
				44,
				33
			],
			[
				371,
				150,
				369,
				85
			],
			[
				678,
				922,
				47,
				47
			],
			[
				445,
				691,
				73,
				72
			],
			[
				145,
				771,
				143,
				49
			],
			[
				300,
				858,
				71,
				56
			],
			[
				0,
				340,
				134,
				131
			],
			[
				590,
				773,
				143,
				49
			],
			[
				527,
				824,
				184,
				28
			],
			[
				93,
				598,
				131,
				69
			],
			[
				260,
				305,
				258,
				92
			],
			[
				445,
				766,
				143,
				49
			],
			[
				986,
				942,
				27,
				27
			],
			[
				79,
				822,
				73,
				72
			],
			[
				448,
				817,
				77,
				74
			]
		]
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var AppConfig=__webpack_require__(21);
	var hex_sha1=__webpack_require__(22);
	var $ = __webpack_require__(1);
	var dtd = $.Deferred();
	var Weixin = {};
	var ticket;
	function createNonceStr() {
	    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	    var str = "";
	    var length = 16;
	    for (var i = 0; i < length; i++) {
	      str +=chars.substr(Math.floor(Math.random()*(chars.length-1)), 1);
	    }
	    return str;
	}
	/**
	 * @function 获取JSSDK
	 */
	Weixin.init = function () {
	    // 默认先显示
	    Weixin.showOptionMenu();
	    return $.getJSON(AppConfig.jssdkURL + '?callback=?')
	    .then(function (res) {
	        if (!res.success) {
	            Weixin.hideOptionMenu();
	            dtd.reject();
	            return;
	        }
	        // 出错了隐藏
	        wx.error(function () {
	            Weixin.hideOptionMenu();
	            dtd.reject();
	        });
	        ticket=res.result.ticket;
	        var time=Math.floor(new Date().getTime()/1000);
	        var nonceStr = createNonceStr();
	        var url=window.location.href.split('#')[0];
	        var string = "jsapi_ticket="+ticket+"&noncestr="+nonceStr+"&timestamp="+time+"&url="+url;
	        var signature = hex_sha1(string);
	        wx.config({
	            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	            appId: res.result.appID, // 必填，公众号的唯一标识
	            timestamp: time, // 必填，生成签名的时间戳
	            nonceStr: nonceStr, // 必填，生成签名的随机串
	            signature: signature,// 必填，签名，见附录1
	            jsApiList: [
	                'addCard',
	                'onMenuShareTimeline',
	                'onMenuShareAppMessage',
	                'hideOptionMenu',
	                'showOptionMenu',
	                'startRecord',
	                'stopRecord',
	                'scanQRCode'
	            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	        });
	        dtd.resolve();
	    }, function (err) {
	        dtd.reject();
	        Weixin.hideOptionMenu();
	    });
	    return dtd.promise();
	};

	/**
	 * @function 老版API，调用微信JS接口
	 * @param 方法名
	 */
	Weixin.call = function (method) {
	    if ('WeixinJSBridge' in window) {
	        WeixinJSBridge.call(method);
	    } else {
	        document.addEventListener('WeixinJSBridgeReady', function () {
	            WeixinJSBridge.call(method);
	        });
	    }
	};

	/**
	 * @function 老版API，显示分享按钮
	 */
	Weixin.showOptionMenu = function () {
	    Weixin.call('showOptionMenu');
	};

	/**
	 * @function 老版API，隐藏分享按钮
	 */
	Weixin.hideOptionMenu = function () {
	    Weixin.call('hideOptionMenu');
	};

	/**
	 * @function 微信分享
	 */
	Weixin.share = function (shareFriend, shareTimeline,cb) {
	    Weixin.showOptionMenu();
	  
	    wx.ready(function () {
	        wx.onMenuShareTimeline({
	            title: shareTimeline.desc, // 分享标题
	            link: shareTimeline.link, // 分享链接
	            imgUrl: shareTimeline.imgUrl, // 分享图标
	            success: function(){
	                if(typeof _hmt!="undefined"){
	                    _hmt.push(['_trackEvent', '分享朋友圈 华容道' + level, 'share']);
	                }
	                if(typeof cb=="function"){
	                    cb.call();
	                }
	            },
	      
	        });

	        wx.onMenuShareAppMessage({
	            title: shareFriend.title, // 分享标题
	            desc: shareFriend.desc, //分享内容
	            link: shareFriend.link, // 分享链接
	            imgUrl: shareFriend.imgUrl, // 分享图标
	            success: function(){
	                if(typeof _hmt!="undefined"){
	                    _hmt.push(['_trackEvent', '分享给好友 华容道' + level, 'share']);
	                }
	                if(typeof cb=="function"){
	                    cb.call();
	                }
	            },
	        });
	    });

	};
	Weixin.changeShare= function (shareFriend, shareTimeline,cb) {
	    Weixin.showOptionMenu();
	    wx.ready(function () {
	        wx.onMenuShareTimeline({
	            title: shareTimeline.desc, // 分享标题
	            link: shareTimeline.link, // 分享链接
	            imgUrl: shareTimeline.imgUrl, // 分享图标
	            success: function(){
	            
	                if(typeof cb=="function"){
	                    cb.call();
	                }
	                if(typeof _hmt!="undefined"){
	                    _hmt.push(['_trackEvent', '分享朋友圈 华容道' + level, 'share']);
	                }
	               
	            }
	            // cancel: deferred.reject.bind(deferred)
	        });

	        wx.onMenuShareAppMessage({
	            title: shareFriend.title, // 分享标题
	            desc: shareFriend.desc, //分享内容
	            link: shareFriend.link, // 分享链接
	            imgUrl: shareFriend.imgUrl, // 分享图标
	            success: function(){
	                if(typeof cb=="function"){
	                    cb.call();
	                }
	                if(typeof _hmt!="undefined"){
	                    _hmt.push(['_trackEvent', '分享给好友 华容道' + level, 'share']);
	                }
	                
	            }
	            // cancel: deferred.reject.bind(deferred)
	        });
	    })
	};
	/**
	 * @function 添加卡券接口 （参数由后端给出）
	 * @param cardId 
	 * @param cardExt
	 */
	Weixin.addCard = function (cardId, cardExt) {
	    var deferred = $.Deferred();

	    wx.addCard({
	        cardList: [{
	            cardId: cardId,
	            cardExt: cardExt
	        }],
	        success: deferred.resolve.bind(deferred),
	        cancel: deferred.reject.bind(deferred)
	    });

	    return deferred.promise();
	};

	/**
	 * @function 开始录音
	 */
	Weixin.startRecord = function () {
	    wx.startRecord();
	};

	/**
	 * @function 停止录音
	 */
	Weixin.stopRecord = function (success) {
	    wx.stopRecord({
	        success: success
	    });
	};
	Weixin.qr=function(){
	    wx.scanQRCode({
	        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
	        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
	        success: function (res) {
	            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
	        }
	    });
	}
	module.exports=Weixin;

/***/ },
/* 21 */
/***/ function(module, exports) {

	//import query from "../libs/query.js";

	module.exports = {
		serverPath:window.webPath?window.webPath:"http://160307fg0004.itg.site",
		jssdkURL:window.webPath?window.webPath+"/wx/jsticket":"http://160307fg0004.intonead.com/wx/jsticket",
		apiPath:"/api/",
		apiVersion:"1.0",
		isTest:false,
		isAllJsonp: false,
		testUser:{
			'FromUserName': 'o2N5jt7vJEHdKQehf03z1JnODRYg',
	        'secret':'77e6980cfbde88011ae3b2f16c105410',
	        'test':'1',
	        'FromOpenid':'orBuIjh7jshxdr-vP_T_uVXajRwA',
		}

	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	//SHA1算法导入
	//hex_sha1("js");
	var hexcase=0;var b64pad="";var chrsz=8;function hex_sha1(s){return binb2hex(core_sha1(str2binb(s),s.length*chrsz))}function b64_sha1(s){return binb2b64(core_sha1(str2binb(s),s.length*chrsz))}function str_sha1(s){return binb2str(core_sha1(str2binb(s),s.length*chrsz))}function hex_hmac_sha1(key,data){return binb2hex(core_hmac_sha1(key,data))}function b64_hmac_sha1(key,data){return binb2b64(core_hmac_sha1(key,data))}function str_hmac_sha1(key,data){return binb2str(core_hmac_sha1(key,data))}function sha1_vm_test(){return hex_sha1("abc")=="a9993e364706816aba3e25717850c26c9cd0d89d"}function core_sha1(x,len){x[len>>5]|=128<<(24-len%32);x[((len+64>>9)<<4)+15]=len;var w=Array(80);var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;var e=-1009589776;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;var olde=e;for(var j=0;j<80;j++){if(j<16){w[j]=x[i+j]}else{w[j]=rol(w[j-3]^w[j-8]^w[j-14]^w[j-16],1)}var t=safe_add(safe_add(rol(a,5),sha1_ft(j,b,c,d)),safe_add(safe_add(e,w[j]),sha1_kt(j)));e=d;d=c;c=rol(b,30);b=a;a=t}a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);e=safe_add(e,olde)}return Array(a,b,c,d,e)}function sha1_ft(t,b,c,d){if(t<20){return(b&c)|((~b)&d)}if(t<40){return b^c^d}if(t<60){return(b&c)|(b&d)|(c&d)}return b^c^d}function sha1_kt(t){return(t<20)?1518500249:(t<40)?1859775393:(t<60)?-1894007588:-899497514}function core_hmac_sha1(key,data){var bkey=str2binb(key);if(bkey.length>16){bkey=core_sha1(bkey,key.length*chrsz)}var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++){ipad[i]=bkey[i]^909522486;opad[i]=bkey[i]^1549556828}var hash=core_sha1(ipad.concat(str2binb(data)),512+data.length*chrsz);return core_sha1(opad.concat(hash),512+160)}function safe_add(x,y){var lsw=(x&65535)+(y&65535);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&65535)}function rol(num,cnt){return(num<<cnt)|(num>>>(32-cnt))}function str2binb(str){var bin=Array();var mask=(1<<chrsz)-1;for(var i=0;i<str.length*chrsz;i+=chrsz){bin[i>>5]|=(str.charCodeAt(i/chrsz)&mask)<<(32-chrsz-i%32)}return bin}function binb2str(bin){var str="";var mask=(1<<chrsz)-1;for(var i=0;i<bin.length*32;i+=chrsz){str+=String.fromCharCode((bin[i>>5]>>>(32-chrsz-i%32))&mask)}return str}function binb2hex(binarray){var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var str="";for(var i=0;i<binarray.length*4;i++){str+=hex_tab.charAt((binarray[i>>2]>>((3-i%4)*8+4))&15)+hex_tab.charAt((binarray[i>>2]>>((3-i%4)*8))&15)}return str}function binb2b64(binarray){var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var str="";for(var i=0;i<binarray.length*4;i+=3){var triplet=(((binarray[i>>2]>>8*(3-i%4))&255)<<16)|(((binarray[i+1>>2]>>8*(3-(i+1)%4))&255)<<8)|((binarray[i+2>>2]>>8*(3-(i+2)%4))&255);for(var j=0;j<4;j++){if(i*8+j*6>binarray.length*32){str+=b64pad}else{str+=tab.charAt((triplet>>6*(3-j))&63)}}}return str};
	module.exports=hex_sha1;

/***/ }
]);