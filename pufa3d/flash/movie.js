module.exports=(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"movie_atlas_", frames: [[0,0,640,1040]]},
		{name:"movie_atlas_2", frames: [[426,498,205,104],[456,771,176,28],[0,529,249,98],[258,271,15,31],[456,741,178,28],[0,705,212,38],[0,773,285,23],[385,694,205,45],[258,339,166,311],[336,0,201,337],[0,271,256,256],[214,705,164,28],[0,0,334,269],[214,741,240,30],[426,604,127,88],[192,652,191,51],[426,347,201,149],[275,271,15,31],[539,0,97,345],[0,629,190,57]]}
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



(lib.element_229_1502262330137_67 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_235_1502262330118_43 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_280_1502262330133_64 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.element_296_1502262330140_69 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.element_300_1502262330119_46 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.element_313_1502262330142_70 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.element_326_1502262330121_48 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.element_360_1502262330132_63 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.element_437_1502262330138_68 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.element_556_1502262330128_57 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.element_586_1502262330135_66 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.element_632_1502262330120_47 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.element_659_1502262330129_58 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.element_710_1502262330121_49 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.element_750_1502262330131_61 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.element_763_1502262330130_59 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.element_785_1502262330122_51 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.element_789_1502262330118_44 = function() {
	this.initialize(img.element_789_1502262330118_44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2510,2638);


(lib.element_796_1502262330135_65 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.element_860_1502262330132_62 = function() {
	this.spriteSheet = ss["movie_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_953_1502262330119_45 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.element_985_1502262330122_50 = function() {
	this.spriteSheet = ss["movie_atlas_2"];
	this.gotoAndStop(19);
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


(lib.element_834_1502262330095_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_300_1502262330119_46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_834_1502262330095_12, new cjs.Rectangle(0,0,178,28), null);


(lib.element_663_1502262330091_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgbUAi6MAAAhFzMA2pAAAMAAABFzg");
	this.shape.setTransform(174.9,223.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_663_1502262330091_7, new cjs.Rectangle(0,0,349.7,446.9), null);


(lib.element_660_1502262330093_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_953_1502262330119_45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_660_1502262330093_10, new cjs.Rectangle(0,0,97,345), null);


(lib.element_468_1502262330097_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_632_1502262330120_47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_468_1502262330097_13, new cjs.Rectangle(0,0,164,28), null);


(lib.element_447_1502262330094_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_235_1502262330118_43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_447_1502262330094_11, new cjs.Rectangle(0,0,176,28), null);


(lib.element_412_1502262330093_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_586_1502262330135_66();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_412_1502262330093_9, new cjs.Rectangle(0,0,256,256), null);


(lib.element_401_1502262330099_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_789_1502262330118_44();
	this.instance.parent = this;
	this.instance.setTransform(-1255,-1319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255,-1319,2510,2638);


(lib.element_654_1502262330103_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_296_1502262330140_69();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_654_1502262330103_23, new cjs.Rectangle(0,0,15,31), null);


(lib.element_497_1502262330103_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_796_1502262330135_65();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_497_1502262330103_22, new cjs.Rectangle(0,0,15,31), null);


(lib.element_203_1502262330101_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_710_1502262330121_49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_203_1502262330101_20, new cjs.Rectangle(0,0,240,30), null);


(lib.element_538_1502262330100_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_326_1502262330121_48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_538_1502262330100_18, new cjs.Rectangle(0,0,285,23), null);


(lib.element_423_1502262330101_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_313_1502262330142_70();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_423_1502262330101_19, new cjs.Rectangle(0,0,212,38), null);


(lib.element_908_1502262330114_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_659_1502262330129_58();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_908_1502262330114_36, new cjs.Rectangle(0,0,334,269), null);


(lib.element_794_1502262330115_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_750_1502262330131_61();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_794_1502262330115_38, new cjs.Rectangle(0,0,127,88), null);


(lib.element_752_1502262330113_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_556_1502262330128_57();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_752_1502262330113_35, new cjs.Rectangle(0,0,201,337), null);


(lib.element_666_1502262330106_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_437_1502262330138_68();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_666_1502262330106_27, new cjs.Rectangle(0,0,166,311), null);


(lib.element_447_1502262330105_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_229_1502262330137_67();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_447_1502262330105_26, new cjs.Rectangle(0,0,205,104), null);


(lib.element_425_1502262330107_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_985_1502262330122_50();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_425_1502262330107_28, new cjs.Rectangle(0,0,190,57), null);


(lib.element_340_1502262330116_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_280_1502262330133_64();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_340_1502262330116_41, new cjs.Rectangle(0,0,249,98), null);


(lib.element_331_1502262330115_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_860_1502262330132_62();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_331_1502262330115_39, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_170_1502262330116_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_360_1502262330132_63();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_170_1502262330116_40, new cjs.Rectangle(0,0,205,45), null);


(lib.element_167_1502262330114_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_763_1502262330130_59();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_167_1502262330114_37, new cjs.Rectangle(0,0,191,51), null);


(lib.element_059_1502262330107_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_785_1502262330122_51();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_059_1502262330107_29, new cjs.Rectangle(0,0,201,149), null);


(lib.element_066_1502262330098_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_789_1502262330118_44();
	this.instance.parent = this;
	this.instance.setTransform(-1255,-1319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255,-1319,2510,2638);


(lib.element_243_1502262330098_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEPDAQhDgJgLguIgWkNQAAg6BFgDIHTAAQBGACADBFIABDxQgBBBg7AHIgJAAQhzAIhwAAQhsAAhqgHgArGC1QhBgOgFg0IAFjxQgBgJABgIQAFgoA4gPIHuAAQAxANAKBJIgZDoQgKA7hEACIgCAAQiGALhvAAQhwAAhXgLg");
	mask.setTransform(94.2,27.6);

	// Layer 3
	this.instance = new lib.element_660_1502262330093_10();
	this.instance.parent = this;
	this.instance.setTransform(195.2,25.4,0.34,0.283,-0.3,0,0,48.6,172.5);
	this.instance.alpha = 0.379;
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-26.9},37,cjs.Ease.get(1)).wait(23));

	// Layer 2
	this.instance_1 = new lib.element_425_1502262330107_28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(95,28.5,1,1,0,0,0,95,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,57);


(lib.element_868_1502262330099_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 5
	this.instance = new lib.element_468_1502262330097_13();
	this.instance.parent = this;
	this.instance.setTransform(436.1,49,1,1,0,0,0,82,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:59},19).to({y:49},19).wait(1));

	// Symbol 4
	this.instance_1 = new lib.element_834_1502262330095_12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(265.1,59,1,1,0,0,0,89,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:49},19).to({y:59},19).wait(1));

	// Symbol 3
	this.instance_2 = new lib.element_447_1502262330094_11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(88,49,1,1,0,0,0,88,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:59},19).to({y:49},19).wait(1));

	// 曲线 9
	this.instance_3 = new lib.element_538_1502262330100_18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(254.5,11.5,1,1,0,0,0,142.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39));

	// 组 11
	this.instance_4 = new lib.element_203_1502262330101_20();
	this.instance_4.parent = this;
	this.instance_4.setTransform(256,101,1,1,0,0,0,120,15);

	this.instance_5 = new lib.element_497_1502262330103_22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(353.5,58.5,1,1,0,0,0,7.5,15.5);

	this.instance_6 = new lib.element_654_1502262330103_23();
	this.instance_6.parent = this;
	this.instance_6.setTransform(175.5,58.5,1,1,0,0,0,7.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(39));

	// 曲线 9 拷贝 9
	this.instance_7 = new lib.element_423_1502262330101_19();
	this.instance_7.parent = this;
	this.instance_7.setTransform(256,192,1,1,0,0,0,106,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,518.1,211);


(lib.element_408_1502262330105_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_412_1502262330093_9();
	this.instance.parent = this;
	this.instance.setTransform(128,128,1,1,0,0,0,128,128);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.element_160_1502262330092_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 18
	this.instance = new lib.element_243_1502262330098_14();
	this.instance.parent = this;
	this.instance.setTransform(157,470.5,1,1,0,0,0,95,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33));

	// 曲线 9 拷贝 11
	this.instance_1 = new lib.element_059_1502262330107_29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(263.5,471.5,1,1,0,0,0,160.5,143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:160.6,rotation:-4,x:263.6},8).to({regX:160.5,rotation:0,x:263.5},8).to({regX:160.6,rotation:-4,x:263.6},8).to({regX:160.5,rotation:0,x:263.5},8).wait(1));

	// 曲线 9 拷贝 4
	this.instance_2 = new lib.element_408_1502262330105_25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(377,339,1,1,0,0,0,128,128);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33));

	// 曲线 9 拷贝 5
	this.instance_3 = new lib.element_447_1502262330105_26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(403.5,447,1,1,0,0,0,102.5,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33));

	// 曲线 9 拷贝 6
	this.instance_4 = new lib.element_666_1502262330106_27();
	this.instance_4.parent = this;
	this.instance_4.setTransform(99,451.6,1,1,0,0,0,99,311.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.97},9).to({scaleY:1},7).to({scaleY:0.97},9).to({scaleY:1},7).wait(1));

	// 曲线 9 拷贝 17
	this.instance_5 = new lib.element_752_1502262330113_35();
	this.instance_5.parent = this;
	this.instance_5.setTransform(214.5,449.6,1,1,0,0,0,100.5,338.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({scaleX:0.97,scaleY:0.91},7).to({regX:100.6,scaleX:0.99,scaleY:0.89,x:214.6},5).wait(1).to({regX:100.5,scaleX:0.97,scaleY:1.02,x:214.5},4).to({scaleX:1,scaleY:1},4).wait(4));

	// 曲线 9 拷贝 18
	this.instance_6 = new lib.element_908_1502262330114_36();
	this.instance_6.parent = this;
	this.instance_6.setTransform(411.1,268.6,1,1,0,0,0,277.1,268.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:3.5},8).to({rotation:0},8).to({rotation:3.5},8).to({rotation:0},8).wait(1));

	// 曲线 9 拷贝 19
	this.instance_7 = new lib.element_167_1502262330114_37();
	this.instance_7.parent = this;
	this.instance_7.setTransform(157.5,523.5,1,1,0,0,0,95.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33));

	// 曲线 9 拷贝 22
	this.instance_8 = new lib.element_170_1502262330116_40();
	this.instance_8.parent = this;
	this.instance_8.setTransform(403.5,503.5,1,1,0,0,0,102.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(33));

	// 曲线 9 拷贝 20
	this.instance_9 = new lib.element_794_1502262330115_38();
	this.instance_9.parent = this;
	this.instance_9.setTransform(93.5,484,1,1,0,0,0,63.5,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(33));

	// 曲线 9 拷贝 23
	this.instance_10 = new lib.element_340_1502262330116_41();
	this.instance_10.parent = this;
	this.instance_10.setTransform(378.5,523,1,1,0,0,0,124.5,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,506,572);


// stage content:
(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// 图层 1
	this.btn = new lib.element_663_1502262330091_7();
	this.btn.parent = this;
	this.btn.setTransform(319.9,520,1.83,2.327,0,0,0,174.8,223.4);
	this.btn.alpha = 0.012;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(24).to({_off:false},0).wait(1));

	// er
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egx/hRPMBj/AAAMAAACifMhj/AAAg");
	this.shape.setTransform(320,520);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EkAnEVSMAAAoqjMIBPAAAMAAAIqjgEhE3BAXMBj/AAAMAAAiigMhj/AAAg");
	this.shape_1.setTransform(440.8,628.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(25));

	// Layer 5
	this.instance = new lib.element_066_1502262330098_15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(389.7,538.2,0.445,0.445);

	this.instance_1 = new lib.element_401_1502262330099_16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(670.2,670.4,1.689,1.689);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1.69,scaleY:1.69,x:670.2,y:670.4,alpha:0},15).wait(10));

	// icon
	this.instance_2 = new lib.element_868_1502262330099_17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(323,841.5,1,1,0,0,0,259,105.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({alpha:1},20,cjs.Ease.get(1)).wait(1));

	// Layer 4
	this.instance_3 = new lib.element_160_1502262330092_8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(322,469,1,1,0,0,0,253,286);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({alpha:1},19,cjs.Ease.get(1)).wait(4));

	// 组 12
	this.instance_4 = new lib.element_331_1502262330115_39();
	this.instance_4.parent = this;
	this.instance_4.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

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
		{src:"images/movie/element_789_1502262330118_44.png", id:"element_789_1502262330118_44"},
		{src:"images/movie/movie_atlas_.png", id:"movie_atlas_"},
		{src:"images/movie/movie_atlas_2.png", id:"movie_atlas_2"}
	],
	preloads: []
};




});