module.exports=(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"bank01_atlas_", frames: [[0,0,640,1040]]},
		{name:"bank01_atlas_2", frames: [[0,956,494,42],[0,338,436,246],[0,815,436,139],[0,586,436,227],[0,0,464,336]]},
		{name:"bank01_atlas_3", frames: [[295,88,83,93],[287,215,73,64],[380,88,88,87],[380,177,75,67],[0,215,285,23],[120,240,105,28],[198,48,95,91],[0,0,445,46],[91,183,240,30],[470,88,42,47],[0,240,118,28],[91,142,149,31],[295,48,212,38],[362,246,96,28],[91,48,105,92],[0,48,89,142]]}
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



(lib.element_061_1502262323976_51 = function() {
	this.spriteSheet = ss["bank01_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_067_1502262323974_46 = function() {
	this.initialize(img.element_067_1502262323974_46);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2510,2638);


(lib.element_122_1502262323978_54 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_135_1502262323981_59 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_180_1502262323978_55 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.element_181_1502262323979_56 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.element_258_1502262323983_63 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.element_339_1502262323975_48 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.element_359_1502262323980_57 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.element_414_1502262323986_67 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.element_415_1502262323982_60 = function() {
	this.spriteSheet = ss["bank01_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_490_1502262323985_65 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.element_545_1502262323977_52 = function() {
	this.spriteSheet = ss["bank01_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_555_1502262323977_53 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.element_704_1502262323975_49 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.element_752_1502262323983_62 = function() {
	this.spriteSheet = ss["bank01_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.element_756_1502262323988_68 = function() {
	this.spriteSheet = ss["bank01_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.element_793_1502262323988_69 = function() {
	this.spriteSheet = ss["bank01_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.element_842_1502262323974_45 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.element_856_1502262323984_64 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.element_898_1502262323975_47 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.element_917_1502262323981_58 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.element_991_1502262323982_61 = function() {
	this.spriteSheet = ss["bank01_atlas_3"];
	this.gotoAndStop(15);
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


(lib.element_962_1502262323972_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_067_1502262323974_46();
	this.instance.parent = this;
	this.instance.setTransform(-1255,-1319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255,-1319,2510,2638);


(lib.element_530_1502262323953_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_545_1502262323977_52();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_530_1502262323953_14, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_976_1502262323960_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_415_1502262323982_60();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_976_1502262323960_23, new cjs.Rectangle(0,0,436,246), null);


(lib.element_938_1502262323967_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_793_1502262323988_69();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_938_1502262323967_36, new cjs.Rectangle(0,0,464,336), null);


(lib.element_552_1502262323957_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_490_1502262323985_65();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_552_1502262323957_18, new cjs.Rectangle(0,0,240,30), null);


(lib.element_510_1502262323957_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_856_1502262323984_64();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_510_1502262323957_17, new cjs.Rectangle(0,0,212,38), null);


(lib.element_395_1502262323956_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_258_1502262323983_63();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_395_1502262323956_16, new cjs.Rectangle(0,0,285,23), null);


(lib.element_768_1502262323966_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_756_1502262323988_68();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_768_1502262323966_35, new cjs.Rectangle(0,0,436,227), null);


(lib.element_771_1502262323965_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_135_1502262323981_59();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_771_1502262323965_33, new cjs.Rectangle(0,0,73,64), null);


(lib.element_738_1502262323963_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_180_1502262323978_55();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_738_1502262323963_29, new cjs.Rectangle(0,0,88,87), null);


(lib.element_700_1502262323964_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_359_1502262323980_57();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_700_1502262323964_31, new cjs.Rectangle(0,0,95,91), null);


(lib.element_613_1502262323963_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_122_1502262323978_54();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_613_1502262323963_28, new cjs.Rectangle(0,0,83,93), null);


(lib.element_519_1502262323964_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_181_1502262323979_56();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_519_1502262323964_30, new cjs.Rectangle(0,0,75,67), null);


(lib.element_471_1502262323965_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_917_1502262323981_58();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_471_1502262323965_32, new cjs.Rectangle(0,0,105,92), null);


(lib.element_152_1502262323962_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_555_1502262323977_53();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_152_1502262323962_27, new cjs.Rectangle(0,0,42,47), null);


(lib.element_554_1502262323959_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_414_1502262323986_67();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_554_1502262323959_21, new cjs.Rectangle(0,0,445,46), null);


(lib.element_353_1502262323959_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_061_1502262323976_51();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_353_1502262323959_22, new cjs.Rectangle(0,0,494,42), null);


(lib.element_238_1502262323961_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_991_1502262323982_61();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_238_1502262323961_24, new cjs.Rectangle(0,0,89,142), null);


(lib.element_120_1502262323961_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_752_1502262323983_62();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_120_1502262323961_25, new cjs.Rectangle(0,0,436,139), null);


(lib.element_817_1502262323968_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egk+AwOMAAAhgbMBJ9AAAMAAABgbg");
	this.shape.setTransform(236.7,308.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_817_1502262323968_37, new cjs.Rectangle(0,0,473.3,617.1), null);


(lib.element_647_1502262323973_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_067_1502262323974_46();
	this.instance.parent = this;
	this.instance.setTransform(-1255,-1319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255,-1319,2510,2638);


(lib.element_585_1502262323972_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_704_1502262323975_49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_585_1502262323972_41, new cjs.Rectangle(0,0,118,28), null);


(lib.element_195_1502262323970_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_898_1502262323975_47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_195_1502262323970_39, new cjs.Rectangle(0,0,96,28), null);


(lib.element_028_1502262323971_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_339_1502262323975_48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_028_1502262323971_40, new cjs.Rectangle(0,0,105,28), null);


(lib.element_971_1502262323969_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 组 20
	this.instance = new lib.element_768_1502262323966_35();
	this.instance.parent = this;
	this.instance.setTransform(287,225.5,1,1,0,0,0,218,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// 图层 137
	this.instance_1 = new lib.element_976_1502262323960_23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(251,203,1,1,0,0,0,218,123);
	this.instance_1.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// 组 20 拷贝
	this.instance_2 = new lib.element_938_1502262323967_36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(72,310,1,1,0,0,0,72,310);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:309.9,rotation:-4.3},20).to({regY:310,rotation:0},19).wait(1));

	// 图层 120
	this.instance_3 = new lib.element_353_1502262323959_22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(260,340,1,1,0,0,0,247,21);
	this.instance_3.alpha = 0.238;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// 图层 93 拷贝 4
	this.instance_4 = new lib.element_554_1502262323959_21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(256.5,337,1,1,0,0,0,222.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

	// 图层 138
	this.instance_5 = new lib.element_238_1502262323961_24();
	this.instance_5.parent = this;
	this.instance_5.setTransform(100.5,345,1,1,0,0,0,86.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:6.7},20).to({rotation:0},19).wait(1));

	// 图层 139
	this.instance_6 = new lib.element_120_1502262323961_25();
	this.instance_6.parent = this;
	this.instance_6.setTransform(287,408.5,1,1,0,0,0,218,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,507,478);


(lib.element_209_1502262323954_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 4
	this.instance = new lib.element_585_1502262323972_41();
	this.instance.parent = this;
	this.instance.setTransform(260.1,49,1,1,0,0,0,59,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:59},19).to({y:49},19).wait(1));

	// Symbol 3
	this.instance_1 = new lib.element_028_1502262323971_40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(148.6,59,1,1,0,0,0,52.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:49},19).to({y:59},19).wait(1));

	// Symbol 2
	this.instance_2 = new lib.element_195_1502262323970_39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(48,49,1,1,0,0,0,48,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:59},19).to({y:49},19).wait(1));

	// Layer 1
	this.instance_3 = new lib.element_842_1502262323974_45();
	this.instance_3.parent = this;
	this.instance_3.setTransform(64,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39));

	// 图层 140
	this.instance_4 = new lib.element_395_1502262323956_16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(157.5,11.5,1,1,0,0,0,142.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39));

	// 组 11
	this.instance_5 = new lib.element_552_1502262323957_18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(159,101,1,1,0,0,0,120,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39));

	// 图层 143
	this.instance_6 = new lib.element_510_1502262323957_17();
	this.instance_6.parent = this;
	this.instance_6.setTransform(159,192,1,1,0,0,0,106,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,319.1,211);


(lib.element_776_1502262323966_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 131
	this.instance = new lib.element_613_1502262323963_28();
	this.instance.parent = this;
	this.instance.setTransform(271.5,46.5,1,1,0,0,0,41.5,46.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},20).to({alpha:0},29).wait(1));

	// 图层 132
	this.instance_1 = new lib.element_738_1502262323963_29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96,248.5,1,1,0,0,0,44,43.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},27).to({alpha:0},22).wait(1));

	// 图层 134
	this.instance_2 = new lib.element_700_1502262323964_31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(456.5,181.5,1,1,0,0,0,47.5,45.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},22).to({alpha:0},27).wait(1));

	// 图层 130
	this.instance_3 = new lib.element_152_1502262323962_27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(356,133.5,1,1,0,0,0,21,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},31).to({alpha:1},18).wait(1));

	// 图层 133
	this.instance_4 = new lib.element_519_1502262323964_30();
	this.instance_4.parent = this;
	this.instance_4.setTransform(209.5,168.5,1,1,0,0,0,37.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0},24).to({alpha:1},25).wait(1));

	// 图层 135
	this.instance_5 = new lib.element_471_1502262323965_32();
	this.instance_5.parent = this;
	this.instance_5.setTransform(52.5,99,1,1,0,0,0,52.5,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:0},18).to({alpha:1},31).wait(1));

	// 图层 136
	this.instance_6 = new lib.element_771_1502262323965_33();
	this.instance_6.parent = this;
	this.instance_6.setTransform(418.5,79,1,1,0,0,0,36.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0},28).to({alpha:1},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,504,292);


// stage content:
(lib.bank01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(25).call(this.frame_25).wait(1));

	// 图层 1
	this.btn = new lib.element_817_1502262323968_37();
	this.btn.parent = this;
	this.btn.setTransform(320.1,520.1,1.352,1.685,0,0,0,236.7,308.6);
	this.btn.alpha = 0.012;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(25).to({_off:false},0).wait(1));

	// er
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egx/hRPMBj/AAAMAAACifMhj/AAAg");
	this.shape.setTransform(320,520);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EkAnEVSMAAAoqjMIBPAAAMAAAIqjgEhE3BAXMBj/AAAMAAAiigMhj/AAAg");
	this.shape_1.setTransform(440.8,628.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(26));

	// Layer 14
	this.instance = new lib.element_962_1502262323972_42("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(389.7,538.2,0.445,0.445);

	this.instance_1 = new lib.element_647_1502262323973_43("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(670.2,670.4,1.689,1.689);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1.69,scaleY:1.69,x:670.2,y:670.4,alpha:0},15).wait(11));

	// 组 19
	this.instance_2 = new lib.element_776_1502262323966_34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(300,242,1,1,0,0,0,252,146);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(5));

	// 组 20
	this.instance_3 = new lib.element_971_1502262323969_38();
	this.instance_3.parent = this;
	this.instance_3.setTransform(312.5,538,1,1,0,0,0,253.5,239);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({alpha:1},19,cjs.Ease.get(1)).wait(5));

	// icon
	this.instance_4 = new lib.element_209_1502262323954_15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(320.5,841.5,1,1,0,0,0,159.5,105.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({alpha:1},21,cjs.Ease.get(1)).wait(1));

	// 图层 121
	this.instance_5 = new lib.element_530_1502262323953_14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26));

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
		{src:"images/bank01/element_067_1502262323974_46.png", id:"element_067_1502262323974_46"},
		{src:"images/bank01/bank01_atlas_.png", id:"bank01_atlas_"},
		{src:"images/bank01/bank01_atlas_2.png", id:"bank01_atlas_2"},
		{src:"images/bank01/bank01_atlas_3.png", id:"bank01_atlas_3"}
	],
	preloads: []
};




});