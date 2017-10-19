module.exports=(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"bank02_atlas_", frames: [[0,0,640,1040]]},
		{name:"bank02_atlas_2", frames: [[313,720,285,23],[99,658,330,28],[431,658,176,28],[0,658,97,345],[557,0,58,31],[313,688,240,30],[99,688,212,38],[0,0,555,656],[99,728,152,28]]}
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



(lib.element_070_1502262320734_25 = function() {
	this.initialize(img.element_070_1502262320734_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2510,2638);


(lib.element_084_1502262320738_34 = function() {
	this.spriteSheet = ss["bank02_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_438_1502262320737_32 = function() {
	this.spriteSheet = ss["bank02_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_506_1502262320735_27 = function() {
	this.spriteSheet = ss["bank02_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.element_509_1502262320736_28 = function() {
	this.spriteSheet = ss["bank02_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.element_743_1502262320734_24 = function() {
	this.spriteSheet = ss["bank02_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.element_870_1502262320738_35 = function() {
	this.spriteSheet = ss["bank02_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_935_1502262320736_30 = function() {
	this.spriteSheet = ss["bank02_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.element_953_1502262320737_33 = function() {
	this.spriteSheet = ss["bank02_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.element_955_1502262320737_31 = function() {
	this.spriteSheet = ss["bank02_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.element_967_1502262320735_26 = function() {
	this.spriteSheet = ss["bank02_atlas_2"];
	this.gotoAndStop(8);
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


(lib.element_955_1502262320732_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_506_1502262320735_27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_955_1502262320732_20, new cjs.Rectangle(0,0,176,28), null);


(lib.element_909_1502262320733_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_070_1502262320734_25();
	this.instance.parent = this;
	this.instance.setTransform(-1255,-1319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255,-1319,2510,2638);


(lib.element_873_1502262320731_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_967_1502262320735_26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_873_1502262320731_18, new cjs.Rectangle(0,0,152,28), null);


(lib.element_748_1502262320730_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_743_1502262320734_24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_748_1502262320730_17, new cjs.Rectangle(0,0,58,31), null);


(lib.element_631_1502262320731_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_509_1502262320736_28();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_631_1502262320731_19, new cjs.Rectangle(0,0,97,345), null);


(lib.element_481_1502262320732_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_070_1502262320734_25();
	this.instance.parent = this;
	this.instance.setTransform(-1255,-1319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255,-1319,2510,2638);


(lib.element_208_1502262320730_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgiWAjIMAAAhGPMBEtAAAMAAABGPg");
	this.shape.setTransform(219.9,224.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_208_1502262320730_16, new cjs.Rectangle(0,0,439.8,449.6), null);


(lib.element_836_1502262320727_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_953_1502262320737_33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_836_1502262320727_10, new cjs.Rectangle(0,0,212,38), null);


(lib.element_142_1502262320727_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_935_1502262320736_30();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_142_1502262320727_11, new cjs.Rectangle(0,0,240,30), null);


(lib.element_052_1502262320726_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_084_1502262320738_34();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_052_1502262320726_9, new cjs.Rectangle(0,0,285,23), null);


(lib.element_183_1502262320729_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_870_1502262320738_35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_183_1502262320729_15, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_072_1502262320725_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 3
	this.instance = new lib.element_955_1502262320732_20();
	this.instance.parent = this;
	this.instance.setTransform(83,62,1,1,0,0,0,88,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:52},19).to({y:62},19).wait(1));

	// Symbol 2
	this.instance_1 = new lib.element_873_1502262320731_18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(258.8,55,1,1,0,0,0,76,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:65},19).to({y:55},19).wait(1));

	// Layer 1
	this.instance_2 = new lib.element_748_1502262320730_17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(176.8,59,1,1,0,0,0,29,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39));

	// 图层 99
	this.instance_3 = new lib.element_052_1502262320726_9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(164.5,11.5,1,1,0,0,0,142.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39));

	// 组 11
	this.instance_4 = new lib.element_142_1502262320727_11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(166,101,1,1,0,0,0,120,15);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bank02_atlas_2"],1), null, new cjs.Matrix2D(1,0,0,1,-176.8,-14)).s().p("AgJCMIAAkXIATAAIAAEXg");
	this.shape.setTransform(176.8,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_4}]}).wait(39));

	// 图层 104
	this.instance_5 = new lib.element_836_1502262320727_10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(166,192,1,1,0,0,0,106,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,0,339.8,211);


(lib.element_464_1502262320729_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8HelQgrgigegqQg/hYAAh6QAAi0CIiTQCHiUDAgdQC/gcCIBqQB7BgALCdIABAhQAACziHCUQiICUi/AcQgpAGgmAAQiOAAhqhTgAqwcGQANjohMi4Qgzh9hchoIgIgJIgDgDQlGlXnHAqIAfsEQNPgkHyJhIAUAcQCPDGBPDSQB7FGgbFkIlfAjIgBAAIg5AFIgrAEQh1ALhBAAQhQAAgCgQgADza1QAQmTh0lLQhJjTh+i2Igqg7Qo2q+vZAYIAZsfIAFAAQSWglNENzIgJARQgLAUgXAcQhzAHgJC4QggAdANANIAVB9QgnBQANAvIAHAOQAcAoA0ABIADASQhEB/BCAeQgIBhAiCCQAZBdAuBuQBBCXgJBOIAAAEIgCAXQgDBKAcBuQAMBrgMBJQhPALgzAAQhMAAgPgYgAJvYfIADgIQAkhlgJhVIgBgPIgBgHQgGhmAWhpQAGgaAmiHQAliIgBhDQgChDADgGIAZgdIACg6QgXg0ALgpQAUApARAqIAaBEQCeGxgnIzIlJAogATKZlQAhpYiXnlQhfkxiokCIgFgIIgDgFQgvhGgyhCQAFhQgFg4QgMiahsgKIgLgBQhIgIgkAaQsitF0cAEIARr7UAiAgAWAPNAbgQAnBEAkBIQBdC9BBDdQCnI5gZMHIpPBAIgKAAIgLAAQhEAAgagUg");
	mask.setTransform(362.1,229.3);

	// Layer 3
	this.instance = new lib.element_631_1502262320731_19();
	this.instance.parent = this;
	this.instance.setTransform(82.1,489.2,0.852,1.574,1.2,0,0,46.3,345);
	this.instance.alpha = 0.191;
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:46.4,regY:344.9,scaleX:3,scaleY:1.57,rotation:45.4,x:82.2,y:501.8,alpha:0.262},21).to({scaleX:1.29,scaleY:1.57,rotation:85.4,x:82.1,y:513.3,alpha:0.238},19).wait(20));

	// Layer 1
	this.instance_1 = new lib.element_955_1502262320737_31();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,555,656);


// stage content:
(lib.bank02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_27 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(27).call(this.frame_27).wait(1));

	// 图层 1
	this.btn = new lib.element_208_1502262320730_16();
	this.btn.parent = this;
	this.btn.setTransform(319.9,520.1,1.455,2.313,0,0,0,219.8,224.8);
	this.btn.alpha = 0.012;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(27).to({_off:false},0).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egx/hRPMBj/AAAMAAACifMhj/AAAg");
	this.shape.setTransform(320,520);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EkAnEVSMAAAoqjMIBPAAAMAAAIqjgEhE3BAXMBj/AAAMAAAiigMhj/AAAg");
	this.shape_1.setTransform(440.8,628.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(28));

	// Layer 5
	this.instance = new lib.element_481_1502262320732_21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(389.7,540.2,0.445,0.445);

	this.instance_1 = new lib.element_909_1502262320733_22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(670.2,670.4,1.689,1.689);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1.69,scaleY:1.69,x:670.2,y:670.4,alpha:0},15).wait(13));

	// 图层 102 拷贝
	this.instance_2 = new lib.element_464_1502262320729_14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(277.5,612,1,1,0,0,0,277.5,328);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({y:578,alpha:1},20,cjs.Ease.get(1)).wait(7));

	// icon
	this.instance_3 = new lib.element_072_1502262320725_8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(319,841.5,1,1,0,0,0,165,105.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({alpha:1},22,cjs.Ease.get(1)).wait(1));

	// 曲线 9
	this.instance_4 = new lib.element_183_1502262320729_15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28));

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
		{src:"images/bank02/element_070_1502262320734_25.png", id:"element_070_1502262320734_25"},
		{src:"images/bank02/bank02_atlas_.png", id:"bank02_atlas_"},
		{src:"images/bank02/bank02_atlas_2.png", id:"bank02_atlas_2"}
	],
	preloads: []
};




});