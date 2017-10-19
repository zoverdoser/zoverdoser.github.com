module.exports=(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"center_atlas_", frames: [[0,0,640,1040]]},
		{name:"center_atlas_2", frames: [[226,599,212,38],[510,0,97,345],[0,599,224,36],[440,599,39,31],[0,569,511,28],[0,639,240,30],[242,639,285,23],[0,0,508,567]]}
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



(lib.element_068_1502266579333_53 = function() {
	this.spriteSheet = ss["center_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_114_1502266579331_47 = function() {
	this.spriteSheet = ss["center_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_245_1502266579333_52 = function() {
	this.spriteSheet = ss["center_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.element_366_1502266579328_41 = function() {
	this.spriteSheet = ss["center_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.element_512_1502266579330_44 = function() {
	this.spriteSheet = ss["center_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.element_518_1502266579327_40 = function() {
	this.spriteSheet = ss["center_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_663_1502266579330_43 = function() {
	this.spriteSheet = ss["center_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.element_743_1502266579332_48 = function() {
	this.spriteSheet = ss["center_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.element_872_1502266579332_51 = function() {
	this.spriteSheet = ss["center_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.element_874_1502266579328_42 = function() {
	this.initialize(img.element_874_1502266579328_42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2510,2638);// helper functions:

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


(lib.element_889_1502266579322_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_874_1502266579328_42();
	this.instance.parent = this;
	this.instance.setTransform(-1255,-1319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255,-1319,2510,2638);


(lib.element_568_1502266579323_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_518_1502266579327_40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_568_1502266579323_21, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_649_1502266579324_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_068_1502266579333_53();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_649_1502266579324_23, new cjs.Rectangle(0,0,212,38), null);


(lib.element_161_1502266579325_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_663_1502266579330_43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_161_1502266579325_27, new cjs.Rectangle(0,0,240,30), null);


(lib.element_094_1502266579324_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_743_1502266579332_48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_094_1502266579324_24, new cjs.Rectangle(0,0,285,23), null);


(lib.element_563_1502266579323_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_872_1502266579332_51();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_563_1502266579323_20, new cjs.Rectangle(0,0,508,567), null);


(lib.element_726_1502266579325_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_366_1502266579328_41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_726_1502266579325_29, new cjs.Rectangle(0,0,39,31), null);


(lib.element_701_1502266579325_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_245_1502266579333_52();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_701_1502266579325_31, new cjs.Rectangle(0,0,224,36), null);


(lib.element_581_1502266579326_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["center_atlas_2"],4), null, new cjs.Matrix2D(1,0,0,1,-63.5,-14)).s().p("Ap6CMIAAkXIT1AAIAAEXg");
	this.shape.setTransform(63.5,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_581_1502266579326_32, new cjs.Rectangle(0,0,127.1,28), null);


(lib.element_487_1502266579322_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["center_atlas_2"],4), null, new cjs.Matrix2D(1,0,0,1,-223.1,-14)).s().p("Au/CMIAAkXId/AAIAAEXg");
	this.shape.setTransform(96,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_487_1502266579322_12, new cjs.Rectangle(0,0,192.1,28), null);


(lib.element_346_1502266579321_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_114_1502266579331_47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_346_1502266579321_11, new cjs.Rectangle(0,0,97,345), null);


(lib.element_332_1502266579326_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["center_atlas_2"],4), null, new cjs.Matrix2D(1,0,0,1,-415,-14)).s().p("Au/CMIAAkXId+AAIAAEXg");
	this.shape.setTransform(96,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_332_1502266579326_34, new cjs.Rectangle(0,0,191.9,28), null);


(lib.element_197_1502266579321_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgiWAiXMAAAhEtMBEtAAAMAAABEtg");
	this.shape.setTransform(219.9,219.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_197_1502266579321_10, new cjs.Rectangle(0,0,439.9,439.9), null);


(lib.element_127_1502266579326_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_874_1502266579328_42();
	this.instance.parent = this;
	this.instance.setTransform(-1255,-1319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255,-1319,2510,2638);


(lib.element_700_1502266579325_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.element_701_1502266579325_31();
	this.instance.parent = this;
	this.instance.setTransform(112,18.1,0.196,0.196,0,0,0,112.1,18.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:112,scaleX:0.56,scaleY:0.56,alpha:0.148},19).wait(1));

	// Layer 4
	this.instance_1 = new lib.element_701_1502266579325_31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(112,18.1,0.563,0.563,0,0,0,112,18.1);
	this.instance_1.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:18,scaleX:1,scaleY:1,y:18},19).wait(1));

	// Layer 1
	this.instance_2 = new lib.element_701_1502266579325_31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(112,18,1,1,0,0,0,112,18);
	this.instance_2.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.32,scaleY:1.32,alpha:0},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224,36);


(lib.element_444_1502266579326_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 11
	this.instance = new lib.element_332_1502266579326_34();
	this.instance.parent = this;
	this.instance.setTransform(415.1,59,1,1,0,0,0,96,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:49},19).to({y:59},19).wait(1));

	// Symbol 10
	this.instance_1 = new lib.element_487_1502266579322_12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.1,49,1,1,0,0,0,96,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:59},19).to({y:49},19).wait(1));

	// Symbol 9
	this.instance_2 = new lib.element_581_1502266579326_32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.5,59,1,1,0,0,0,63.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:49},19).to({y:59},19).wait(1));

	// Layer 2
	this.instance_3 = new lib.element_726_1502266579325_29();
	this.instance_3.parent = this;
	this.instance_3.setTransform(325.6,57.5,1,1,0,0,0,19.5,15.5);

	this.instance_4 = new lib.element_726_1502266579325_29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(140.5,57.5,1,1,0,0,0,19.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(39));

	// Layer 1
	this.instance_5 = new lib.element_094_1502266579324_24();
	this.instance_5.parent = this;
	this.instance_5.setTransform(253.5,11.5,1,1,0,0,0,142.5,11.5);

	this.instance_6 = new lib.element_161_1502266579325_27();
	this.instance_6.parent = this;
	this.instance_6.setTransform(255,101,1,1,0,0,0,120,15);

	this.instance_7 = new lib.element_649_1502266579324_23();
	this.instance_7.parent = this;
	this.instance_7.setTransform(255,192,1,1,0,0,0,106,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,511,211);


(lib.element_018_1502266579327_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9ZnQQgQt1JqpoQJioNKxAVIAEAAIAGAAQLcANI5IZQKwKsirRNQlMU334T2Q8O3zg/2EgAv45OQmgGgAAJNQAAJMGgGfQGgGhJNAAQJLAAGgmhQGgmfAApMQAApNmgmgQmgmgpLAAQpNAAmgGgg");
	mask.setTransform(266.1,318);

	// Layer 5
	this.instance = new lib.element_346_1502266579321_11();
	this.instance.parent = this;
	this.instance.setTransform(2.5,327.6,1.289,1.574,-9.5,0,0,48.5,172.6);
	this.instance.alpha = 0.379;
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:48.6,regY:172.7,scaleX:1.29,rotation:0,x:267.1,y:332.1},18).to({regY:172.6,scaleX:1.29,rotation:11.7,x:528.5,y:333.7},18).wait(1));

	// 组 15
	this.instance_1 = new lib.element_563_1502266579323_20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(254,283.5,1,1,0,0,0,254,283.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,508,567);


(lib.element_434_1502266579326_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_018_1502266579327_39();
	this.instance.parent = this;
	this.instance.setTransform(254,283.5,1,1,0,0,0,254,283.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:303.5},18).to({y:283.5},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.9,0,612,605.6);


// stage content:
(lib.center = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// 图层 3
	this.btn = new lib.element_197_1502266579321_10();
	this.btn.parent = this;
	this.btn.setTransform(320,520,1.455,2.364,0,0,0,219.9,219.9);
	this.btn.alpha = 0.012;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(28).to({_off:false},0).wait(2));

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egx/hRPMBj/AAAMAAACifMhj/AAAg");
	this.shape.setTransform(320,520);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EkAnEVSMAAAoqjMIBPAAAMAAAIqjgEhE3BAXMBj/AAAMAAAiigMhj/AAAg");
	this.shape_1.setTransform(440.8,628.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(30));

	// Layer 11
	this.instance = new lib.element_127_1502266579326_35("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(389.7,540.2,0.445,0.445);

	this.instance_1 = new lib.element_889_1502266579322_14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(670.2,670.4,1.689,1.689);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1.69,scaleY:1.69,x:670.2,y:670.4,alpha:0},15).wait(15));

	// 图层 82 拷贝 12
	this.instance_2 = new lib.element_434_1502266579326_33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(256,380.9,1,1,0,0,0,202,302.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:392.9,alpha:1},20,cjs.Ease.get(1)).wait(10));

	// 图层 88 拷贝
	this.instance_3 = new lib.element_700_1502266579325_30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(319,676.5,1,1,0,0,0,113,17.5);
	this.instance_3.alpha = 0.148;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({alpha:1},13).wait(13));

	// icon
	this.instance_4 = new lib.element_444_1502266579326_36();
	this.instance_4.parent = this;
	this.instance_4.setTransform(320.5,841.5,1,1,0,0,0,255.5,105.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({alpha:1},23,cjs.Ease.get(1)).wait(2));

	// 曲线 9
	this.instance_5 = new lib.element_568_1502266579323_21();
	this.instance_5.parent = this;
	this.instance_5.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

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
		{src:"images/center/element_874_1502266579328_42.png", id:"element_874_1502266579328_42"},
		{src:"images/center/center_atlas_.png", id:"center_atlas_"},
		{src:"images/center/center_atlas_2.png", id:"center_atlas_2"}
	],
	preloads: []
};




});