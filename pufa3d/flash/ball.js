module.exports=(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"ball_atlas_", frames: [[0,0,640,1040]]},
		{name:"ball_atlas_2", frames: [[0,581,494,348],[0,0,575,579]]},
		{name:"ball_atlas_3", frames: [[445,438,115,28],[0,408,443,67],[484,468,115,28],[0,0,541,258],[297,260,311,114],[270,517,304,23],[0,260,295,146],[270,477,212,38],[543,0,95,28],[297,376,251,30],[270,542,224,31],[445,408,133,28],[0,477,268,109]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.element_064_1502262326994_32 = function() {
	this.spriteSheet = ss["ball_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_215_1502262326999_46 = function() {
	this.spriteSheet = ss["ball_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_226_1502262326994_34 = function() {
	this.spriteSheet = ss["ball_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.element_343_1502262326995_37 = function() {
	this.spriteSheet = ss["ball_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.element_354_1502262327001_49 = function() {
	this.spriteSheet = ss["ball_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.element_364_1502262326997_40 = function() {
	this.spriteSheet = ss["ball_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.element_452_1502262326996_39 = function() {
	this.spriteSheet = ss["ball_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_501_1502262326996_38 = function() {
	this.spriteSheet = ss["ball_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.element_542_1502262326999_45 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_549_1502262326997_41 = function() {
	this.spriteSheet = ss["ball_atlas_3"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.element_664_1502262327000_48 = function() {
	this.spriteSheet = ss["ball_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_713_1502262326994_33 = function() {
	this.initialize(img.element_713_1502262326994_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2510,2638);


(lib.element_738_1502262326995_35 = function() {
	this.spriteSheet = ss["ball_atlas_3"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.element_778_1502262326998_42 = function() {
	this.spriteSheet = ss["ball_atlas_3"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.element_813_1502262326998_44 = function() {
	this.spriteSheet = ss["ball_atlas_3"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.element_835_1502262326995_36 = function() {
	this.spriteSheet = ss["ball_atlas_3"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.element_835_1502262327000_47 = function() {
	this.spriteSheet = ss["ball_atlas_3"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.element_954_1502262326981_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_713_1502262326994_33();
	this.instance.parent = this;
	this.instance.setTransform(-1255,-1319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255,-1319,2510,2638);


(lib.element_937_1502262326982_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_713_1502262326994_33();
	this.instance.parent = this;
	this.instance.setTransform(-1255,-1319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255,-1319,2510,2638);


(lib.element_809_1502262326980_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_226_1502262326994_34();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_809_1502262326980_11, new cjs.Rectangle(0,0,115,28), null);


(lib.element_590_1502262326980_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_738_1502262326995_35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_590_1502262326980_12, new cjs.Rectangle(0,0,95,28), null);


(lib.element_378_1502262326981_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_835_1502262326995_36();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_378_1502262326981_13, new cjs.Rectangle(0,0,133,28), null);


(lib.element_969_1502262326990_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_664_1502262327000_48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_969_1502262326990_26, new cjs.Rectangle(0,0,575,579), null);


(lib.element_908_1502262326988_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_542_1502262326999_45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_908_1502262326988_24, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_790_1502262326991_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_452_1502262326996_39();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_790_1502262326991_28, new cjs.Rectangle(0,0,494,348), null);


(lib.element_943_1502262326993_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_354_1502262327001_49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_943_1502262326993_30, new cjs.Rectangle(0,0,311,114), null);


(lib.element_389_1502262326992_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_835_1502262327000_47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_389_1502262326992_29, new cjs.Rectangle(0,0,268,109), null);


(lib.element_546_1502262326991_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_501_1502262326996_38();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_546_1502262326991_27, new cjs.Rectangle(0,0,295,146), null);


(lib.element_407_1502262326982_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_343_1502262326995_37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_407_1502262326982_16, new cjs.Rectangle(0,0,541,258), null);


(lib.element_386_1502262326989_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_215_1502262326999_46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_386_1502262326989_25, new cjs.Rectangle(0,0,443,67), null);


(lib.element_992_1502262326984_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_364_1502262326997_40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_992_1502262326984_18, new cjs.Rectangle(0,0,304,23), null);


(lib.element_888_1502262326987_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_813_1502262326998_44();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_888_1502262326987_22, new cjs.Rectangle(0,0,224,31), null);


(lib.element_654_1502262326985_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_778_1502262326998_42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_654_1502262326985_20, new cjs.Rectangle(0,0,251,30), null);


(lib.element_106_1502262326984_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_549_1502262326997_41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_106_1502262326984_19, new cjs.Rectangle(0,0,212,38), null);


(lib.element_265_1502262326979_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_064_1502262326994_32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_265_1502262326979_10, new cjs.Rectangle(0,0,115,28), null);


(lib.element_225_1502262326978_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg1VBQSMAAAigjMBqrAAAMAAACgjg");
	this.shape.setTransform(341.4,513.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_225_1502262326978_8, new cjs.Rectangle(0,0,682.8,1027.6), null);


(lib.element_494_1502262326979_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// er
	this.instance = new lib.element_407_1502262326982_16();
	this.instance.parent = this;
	this.instance.setTransform(904.6,129,1,1,0,0,0,270.5,129);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:272.5},129).wait(1));

	// er
	this.instance_1 = new lib.element_407_1502262326982_16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(270.5,129,1,1,0,0,0,270.5,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-361.6},129).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1175.1,258);


(lib.element_687_1502262326993_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 97 拷贝
	this.instance = new lib.element_389_1502262326992_29();
	this.instance.parent = this;
	this.instance.setTransform(166,54.5,1,1,0,0,0,134,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:64.5},10).to({y:54.5},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32,0,268,109);


(lib.element_551_1502262326983_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 5
	this.instance = new lib.element_378_1502262326981_13();
	this.instance.parent = this;
	this.instance.setTransform(391.6,59,1,1,0,0,0,66.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:49},19).to({y:59},19).wait(1));

	// Symbol 4
	this.instance_1 = new lib.element_590_1502262326980_12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(277.6,49,1,1,0,0,0,47.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:59},19).to({y:49},19).wait(1));

	// Symbol 3
	this.instance_2 = new lib.element_809_1502262326980_11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(172.6,59,1,1,0,0,0,57.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:49},19).to({y:59},19).wait(1));

	// Symbol 2
	this.instance_3 = new lib.element_265_1502262326979_10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(57.5,49,1,1,0,0,0,57.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:59},19).to({y:49},19).wait(1));

	// 图层 102
	this.instance_4 = new lib.element_992_1502262326984_18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(226,11.5,1,1,0,0,0,152,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39));

	// 图层 107
	this.instance_5 = new lib.element_654_1502262326985_20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(236.5,101,1,1,0,0,0,125.5,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39));

	// 图层 109
	this.instance_6 = new lib.element_888_1502262326987_22();
	this.instance_6.parent = this;
	this.instance_6.setTransform(220,58.5,1,1,0,0,0,112,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39));

	// 图层 106
	this.instance_7 = new lib.element_106_1502262326984_19();
	this.instance_7.parent = this;
	this.instance_7.setTransform(231,192,1,1,0,0,0,106,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,458.1,211);


// stage content:
(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// 图层 1
	this.btn = new lib.element_225_1502262326978_8();
	this.btn.parent = this;
	this.btn.setTransform(320.1,520,0.937,1.012,0,0,0,341.4,513.8);
	this.btn.alpha = 0.012;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(23).to({_off:false},0).wait(1));

	// er
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egx/hRPMBj/AAAMAAACifMhj/AAAg");
	this.shape.setTransform(320,520);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EkAnEVSMAAAoqjMIBPAAAMAAAIqjgEhE3BAXMBj/AAAMAAAiigMhj/AAAg");
	this.shape_1.setTransform(440.8,628.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(24));

	// Layer 11
	this.instance = new lib.element_954_1502262326981_14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(389.7,538.2,0.445,0.445);

	this.instance_1 = new lib.element_937_1502262326982_15("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(670.2,670.4,1.689,1.689);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1.69,scaleY:1.69,x:670.2,y:670.4,alpha:0},15).wait(9));

	// 组 18
	this.instance_2 = new lib.element_687_1502262326993_31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(367.5,154.5,1,1,0,0,0,155.5,57.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:466.5,y:148.5,alpha:1},14).wait(4));

	// Layer 12
	this.instance_3 = new lib.element_943_1502262326993_30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(345.5,148,1,1,0,0,0,155.5,57);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({x:441.2,alpha:0.711},10).to({x:479.5,alpha:0},4).to({_off:true},1).wait(3));

	// 图层 100
	this.instance_4 = new lib.element_546_1502262326991_27();
	this.instance_4.parent = this;
	this.instance_4.setTransform(359.5,207,1,1,0,0,0,147.5,73);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({alpha:1},14).wait(4));

	// 图层 98
	this.instance_5 = new lib.element_969_1502262326990_26();
	this.instance_5.parent = this;
	this.instance_5.setTransform(319.5,366.5,1,1,0,0,0,287.5,289.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:388.5,alpha:1},15,cjs.Ease.get(1)).wait(9));

	// 图层 96
	this.instance_6 = new lib.element_386_1502262326989_25();
	this.instance_6.parent = this;
	this.instance_6.setTransform(320.5,670.5,1,1,0,0,0,221.5,33.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(9));

	// 图层 101
	this.instance_7 = new lib.element_790_1502262326991_28();
	this.instance_7.parent = this;
	this.instance_7.setTransform(282,838,1,1,0,0,0,247,174);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({y:848,alpha:1},12,cjs.Ease.get(1)).wait(9));

	// er
	this.instance_8 = new lib.element_494_1502262326979_9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(618.6,186,1,1,0,0,0,587.6,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24));

	// icon
	this.instance_9 = new lib.element_551_1502262326983_17();
	this.instance_9.parent = this;
	this.instance_9.setTransform(318,841.5,1,1,0,0,0,229,105.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).to({alpha:1},18,cjs.Ease.get(1)).wait(1));

	// 图层 95
	this.instance_10 = new lib.element_908_1502262326988_24();
	this.instance_10.parent = this;
	this.instance_10.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-881.6,-626.4,3284.9,3549.2);
// library properties:
lib.properties = {
	width: 640,
	height: 1040,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/ball/element_713_1502262326994_33.png", id:"element_713_1502262326994_33"},
		{src:"images/ball/ball_atlas_.png", id:"ball_atlas_"},
		{src:"images/ball/ball_atlas_2.png", id:"ball_atlas_2"},
		{src:"images/ball/ball_atlas_3.png", id:"ball_atlas_3"}
	],
	preloads: []
};




});