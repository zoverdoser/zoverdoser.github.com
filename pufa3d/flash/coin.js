module.exports=(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"coin_atlas_", frames: [[0,0,640,1040]]},
		{name:"coin_atlas_2", frames: [[0,0,640,1040]]},
		{name:"coin_atlas_3", frames: [[417,270,53,69],[513,0,113,113],[0,417,511,264],[513,411,93,28],[513,115,113,113],[0,683,352,31],[515,381,93,28],[417,177,93,28],[417,351,148,28],[0,0,415,415],[0,716,285,23],[417,94,81,81],[513,270,79,79],[417,0,92,92],[354,683,240,30],[417,381,96,28],[417,230,212,38]]}
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



(lib.element_022_1502262336664_64 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_047_1502262336662_61 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_065_1502262336665_66 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.element_104_1502262336655_51 = function() {
	this.initialize(img.element_104_1502262336655_51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,674,656);


(lib.element_132_1502262336655_50 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.element_147_1502262336661_60 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.element_171_1502262336654_46 = function() {
	this.initialize(img.element_171_1502262336654_46);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2510,2638);


(lib.element_320_1502262336659_55 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.element_333_1502262336653_45 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.element_391_1502262336655_49 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.element_549_1502262336654_48 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.element_571_1502262336663_62 = function() {
	this.spriteSheet = ss["coin_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_588_1502262336665_65 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.element_594_1502262336656_52 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.element_645_1502262336661_59 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.element_681_1502262336660_57 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.element_741_1502262336660_58 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.element_763_1502262336656_53 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.element_786_1502262336654_47 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.element_858_1502262336660_56 = function() {
	this.spriteSheet = ss["coin_atlas_3"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.element_972_1502262336663_63 = function() {
	this.spriteSheet = ss["coin_atlas_2"];
	this.gotoAndStop(0);
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


(lib.element_980_1502262336645_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_571_1502262336663_62();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_980_1502262336645_32, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_997_1502262336651_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_588_1502262336665_65();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_997_1502262336651_42, new cjs.Rectangle(0,0,415,415), null);


(lib.element_443_1502262336650_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_022_1502262336664_64();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_443_1502262336650_41, new cjs.Rectangle(0,0,53,69), null);


(lib.element_220_1502262336652_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_065_1502262336665_66();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_220_1502262336652_43, new cjs.Rectangle(0,0,511,264), null);


(lib.element_200_1502262336646_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_104_1502262336655_51();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_200_1502262336646_34, new cjs.Rectangle(0,0,674,656), null);


(lib.element_153_1502262336646_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_972_1502262336663_63();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_153_1502262336646_33, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_314_1502262336640_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_594_1502262336656_52();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_314_1502262336640_25, new cjs.Rectangle(0,0,285,23), null);


(lib.element_476_1502262336643_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_763_1502262336656_53();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_476_1502262336643_28, new cjs.Rectangle(0,0,240,30), null);


(lib.element_042_1502262336644_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_320_1502262336659_55();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_042_1502262336644_30, new cjs.Rectangle(0,0,352,31), null);


(lib.element_139_1502262336640_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_858_1502262336660_56();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_139_1502262336640_26, new cjs.Rectangle(0,0,212,38), null);


(lib.element_868_1502262336632_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_645_1502262336661_59();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_868_1502262336632_12, new cjs.Rectangle(0,0,81,81), null);


(lib.element_803_1502262336636_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_786_1502262336654_47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_803_1502262336636_18, new cjs.Rectangle(0,0,96,28), null);


(lib.element_620_1502262336635_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_333_1502262336653_45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_620_1502262336635_17, new cjs.Rectangle(0,0,93,28), null);


(lib.element_594_1502262336629_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_147_1502262336661_60();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_594_1502262336629_11, new cjs.Rectangle(0,0,113,113), null);


(lib.element_452_1502262336633_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_047_1502262336662_61();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_452_1502262336633_14, new cjs.Rectangle(0,0,113,113), null);


(lib.element_446_1502262336633_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_741_1502262336660_58();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_446_1502262336633_15, new cjs.Rectangle(0,0,92,92), null);


(lib.element_326_1502262336628_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A7LccMAAAg43MA2XAAAMAAAA43g");
	this.shape.setTransform(174,182);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_326_1502262336628_10, new cjs.Rectangle(0,0,348,364), null);


(lib.element_252_1502262336638_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_171_1502262336654_46();
	this.instance.parent = this;
	this.instance.setTransform(-1255,-1319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255,-1319,2510,2638);


(lib.element_183_1502262336636_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_549_1502262336654_48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_183_1502262336636_19, new cjs.Rectangle(0,0,148,28), null);


(lib.element_134_1502262336632_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_681_1502262336660_57();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_134_1502262336632_13, new cjs.Rectangle(0,0,79,79), null);


(lib.element_061_1502262336639_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_171_1502262336654_46();
	this.instance.parent = this;
	this.instance.setTransform(-1255,-1319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255,-1319,2510,2638);


(lib.element_008_1502262336638_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_132_1502262336655_50();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_008_1502262336638_21, new cjs.Rectangle(0,0,93,28), null);


(lib.element_000_1502262336637_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_391_1502262336655_49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_000_1502262336637_20, new cjs.Rectangle(0,0,93,28), null);


(lib.element_770_1502262336652_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 曲线 12
	this.instance = new lib.element_443_1502262336650_41();
	this.instance.parent = this;
	this.instance.setTransform(253.5,381.5,1,1,0,0,0,26.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// 矢量智能对象
	this.instance_1 = new lib.element_997_1502262336651_42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(255.5,207.5,1,1,0,0,0,207.5,207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:360},119).wait(1));

	// 矢量智能对象_1
	this.instance_2 = new lib.element_220_1502262336652_43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(255.5,501,1,1,0,0,0,255.5,132);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,511,633);


(lib.element_904_1502262336649_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_452_1502262336633_14();
	this.instance.parent = this;
	this.instance.setTransform(56.5,56.5,1,1,0,0,0,56.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.79,scaleY:0.79},8).to({scaleX:1,scaleY:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.element_615_1502262336647_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_446_1502262336633_15();
	this.instance.parent = this;
	this.instance.setTransform(46,46,1,1,0,0,0,46,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.76,scaleY:0.76},11).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,92);


(lib.element_241_1502262336648_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_868_1502262336632_12();
	this.instance.parent = this;
	this.instance.setTransform(40.5,40.5,1,1,0,0,0,40.5,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.27,scaleY:1.27},11).to({scaleX:1,scaleY:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81,81);


(lib.element_138_1502262336648_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_594_1502262336629_11();
	this.instance.parent = this;
	this.instance.setTransform(56.5,56.5,1,1,0,0,0,56.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.73,scaleY:0.73},9).to({scaleX:1,scaleY:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.element_089_1502262336647_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_134_1502262336632_13();
	this.instance.parent = this;
	this.instance.setTransform(39.5,39.5,1,1,0,0,0,39.5,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.25,scaleY:1.25},8).to({scaleX:1,scaleY:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,79);


(lib.element_185_1502262336634_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 11
	this.instance = new lib.element_008_1502262336638_21();
	this.instance.parent = this;
	this.instance.setTransform(540.6,785,1,1,0,0,0,46.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:795},19).to({y:785},19).wait(1));

	// Symbol 10
	this.instance_1 = new lib.element_000_1502262336637_20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(447.6,795,1,1,0,0,0,46.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:785},19).to({y:795},19).wait(1));

	// Symbol 9
	this.instance_2 = new lib.element_183_1502262336636_19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(327.1,785,1,1,0,0,0,74,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:795},19).to({y:785},19).wait(1));

	// Symbol 8
	this.instance_3 = new lib.element_803_1502262336636_18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(205.1,795,1,1,0,0,0,48,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:785},19).to({y:795},19).wait(1));

	// Symbol 7
	this.instance_4 = new lib.element_620_1502262336635_17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(110.5,785,1,1,0,0,0,46.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:795},19).to({y:785},19).wait(1));

	// Layer 1
	this.instance_5 = new lib.element_314_1502262336640_25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(318.5,747.5,1,1,0,0,0,142.5,11.5);

	this.instance_6 = new lib.element_476_1502262336643_28();
	this.instance_6.parent = this;
	this.instance_6.setTransform(320,837,1,1,0,0,0,120,15);

	this.instance_7 = new lib.element_042_1502262336644_30();
	this.instance_7.parent = this;
	this.instance_7.setTransform(326,794.5,1,1,0,0,0,176,15.5);

	this.instance_8 = new lib.element_139_1502262336640_26();
	this.instance_8.parent = this;
	this.instance_8.setTransform(320,928,1,1,0,0,0,106,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,736,523.1,211);


// stage content:
(lib.coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// 图层 1
	this.btn = new lib.element_326_1502262336628_10();
	this.btn.parent = this;
	this.btn.setTransform(320,520.1,1.839,2.858,0,0,0,174,182);
	this.btn.alpha = 0.012;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(22).to({_off:false},0).wait(1));

	// 组 20
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egx/hRPMBj/AAAMAAACifMhj/AAAg");
	this.shape.setTransform(320,520);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EkAnEVSMAAAoqjMIBPAAAMAAAIqjgEhE3BAXMBj/AAAMAAAiigMhj/AAAg");
	this.shape_1.setTransform(440.8,628.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(23));

	// Layer 13
	this.instance = new lib.element_252_1502262336638_22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(389.7,540.2,0.445,0.445);

	this.instance_1 = new lib.element_061_1502262336639_23("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(670.2,670.4,1.689,1.689);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1.69,scaleY:1.69,x:670.2,y:670.4,alpha:0},15).wait(8));

	// 组 22
	this.instance_2 = new lib.element_770_1502262336652_44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(319.5,446.5,1,1,0,0,0,255.5,316.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},14,cjs.Ease.get(1)).wait(9));

	// 图层 124
	this.instance_3 = new lib.element_089_1502262336647_35();
	this.instance_3.parent = this;
	this.instance_3.setTransform(264.5,229.7,0.711,0.711,0,0,0,39.5,39.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:233.5,y:110.5},14,cjs.Ease.get(1)).wait(5));

	// 图层 125
	this.instance_4 = new lib.element_615_1502262336647_36();
	this.instance_4.parent = this;
	this.instance_4.setTransform(194.8,382.9,0.711,0.711,0,0,0,46,46);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:68,y:340},18,cjs.Ease.get(1)).wait(1));

	// 图层 126
	this.instance_5 = new lib.element_241_1502262336648_37();
	this.instance_5.parent = this;
	this.instance_5.setTransform(437.6,379,0.711,0.711,0,0,0,40.5,40.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:577.5,y:356.5},12,cjs.Ease.get(1)).wait(7));

	// 图层 127
	this.instance_6 = new lib.element_138_1502262336648_38();
	this.instance_6.parent = this;
	this.instance_6.setTransform(426.2,288,0.711,0.711,0,0,0,56.5,56.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:528.5,y:189.5},15,cjs.Ease.get(1)).wait(4));

	// 图层 128
	this.instance_7 = new lib.element_904_1502262336649_39();
	this.instance_7.parent = this;
	this.instance_7.setTransform(214.5,271,0.711,0.711,0,0,0,56.5,56.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:126.5,y:123.5},11,cjs.Ease.get(1)).wait(8));

	// 图层 113
	this.instance_8 = new lib.element_200_1502262336646_34();
	this.instance_8.parent = this;
	this.instance_8.setTransform(311,334,1,1,0,0,0,337,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(23));

	// icon
	this.instance_9 = new lib.element_185_1502262336634_16();
	this.instance_9.parent = this;
	this.instance_9.setTransform(293.5,473.5,1,1,0,0,0,293.5,473.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(23));

	// 图层 57
	this.instance_10 = new lib.element_980_1502262336645_32();
	this.instance_10.parent = this;
	this.instance_10.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(23));

	// 图层 76
	this.instance_11 = new lib.element_153_1502262336646_33();
	this.instance_11.parent = this;
	this.instance_11.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23));

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
		{src:"images/coin/element_104_1502262336655_51.png", id:"element_104_1502262336655_51"},
		{src:"images/coin/element_171_1502262336654_46.png", id:"element_171_1502262336654_46"},
		{src:"images/coin/coin_atlas_.png", id:"coin_atlas_"},
		{src:"images/coin/coin_atlas_2.png", id:"coin_atlas_2"},
		{src:"images/coin/coin_atlas_3.png", id:"coin_atlas_3"}
	],
	preloads: []
};




});