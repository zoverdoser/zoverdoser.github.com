module.exports=(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"money_atlas_", frames: [[0,0,640,1040]]},
		{name:"money_atlas_2", frames: [[590,0,25,157],[0,0,467,521],[568,247,63,59],[586,439,51,26],[469,125,112,120],[351,906,212,38],[549,496,38,25],[0,906,349,31],[0,876,523,28],[469,0,119,123],[0,803,466,71],[469,476,38,25],[0,523,497,278],[469,343,89,96],[595,308,25,110],[583,159,25,83],[610,159,25,69],[509,476,38,25],[469,441,115,33],[469,247,97,94],[568,308,25,129],[586,467,38,27]]}
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



(lib.element_011_1502262333566_85 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_035_1502262333518_48 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_176_1502262333544_74 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.element_188_1502262333526_62 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.element_233_1502262333562_84 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.element_240_1502262333523_56 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.element_270_1502262333524_58 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.element_272_1502262333525_59 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.element_286_1502262333523_55 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.element_286_1502262333527_64 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.element_382_1502262333521_52 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.element_395_1502262333520_51 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.element_408_1502262333522_54 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.element_415_1502262333531_66 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.element_442_1502262333557_80 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.element_495_1502262333548_76 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.element_510_1502262333542_72 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.element_539_1502262333525_60 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.element_569_1502262333519_49 = function() {
	this.spriteSheet = ss["money_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_681_1502262333522_53 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.element_743_1502262333554_78 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.element_779_1502262333559_82 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.element_828_1502262333526_61 = function() {
	this.spriteSheet = ss["money_atlas_2"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.element_890_1502262333520_50 = function() {
	this.initialize(img.element_890_1502262333520_50);
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


(lib.element_697_1502262333499_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_890_1502262333520_50();
	this.instance.parent = this;
	this.instance.setTransform(-1255,-1319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255,-1319,2510,2638);


(lib.element_939_1502262333514_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_382_1502262333521_52();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_939_1502262333514_43, new cjs.Rectangle(0,0,466,71), null);


(lib.element_921_1502262333515_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_569_1502262333519_49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_921_1502262333515_45, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_881_1502262333512_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_272_1502262333525_59();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_881_1502262333512_39, new cjs.Rectangle(0,0,349,31), null);


(lib.element_575_1502262333511_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_188_1502262333526_62();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_575_1502262333511_37, new cjs.Rectangle(0,0,51,26), null);


(lib.element_446_1502262333511_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_395_1502262333520_51();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_446_1502262333511_38, new cjs.Rectangle(0,0,38,25), null);


(lib.element_262_1502262333510_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_828_1502262333526_61();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_262_1502262333510_36, new cjs.Rectangle(0,0,38,27), null);


(lib.element_256_1502262333508_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_270_1502262333524_58();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_256_1502262333508_33, new cjs.Rectangle(0,0,38,25), null);


(lib.element_248_1502262333513_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_286_1502262333523_55();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_248_1502262333513_40, new cjs.Rectangle(0,0,523,28), null);


(lib.element_231_1502262333509_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_539_1502262333525_60();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_231_1502262333509_34, new cjs.Rectangle(0,0,38,25), null);


(lib.element_003_1502262333509_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_240_1502262333523_56();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_003_1502262333509_35, new cjs.Rectangle(0,0,212,38), null);


(lib.element_989_1502262333503_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_495_1502262333548_76();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_989_1502262333503_25, new cjs.Rectangle(0,0,25,83), null);


(lib.element_958_1502262333502_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_176_1502262333544_74();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_958_1502262333502_24, new cjs.Rectangle(0,0,63,59), null);


(lib.element_709_1502262333504_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_442_1502262333557_80();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_709_1502262333504_27, new cjs.Rectangle(0,0,25,110), null);


(lib.element_669_1502262333506_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_011_1502262333566_85();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_669_1502262333506_30, new cjs.Rectangle(0,0,25,157), null);


(lib.element_532_1502262333503_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_743_1502262333554_78();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_532_1502262333503_26, new cjs.Rectangle(0,0,97,94), null);


(lib.element_514_1502262333506_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_233_1502262333562_84();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_514_1502262333506_29, new cjs.Rectangle(0,0,112,120), null);


(lib.element_407_1502262333507_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_415_1502262333531_66();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_407_1502262333507_31, new cjs.Rectangle(0,0,89,96), null);


(lib.element_280_1502262333500_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_286_1502262333527_64();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_280_1502262333500_22, new cjs.Rectangle(0,0,119,123), null);


(lib.element_207_1502262333501_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_510_1502262333542_72();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_207_1502262333501_23, new cjs.Rectangle(0,0,25,69), null);


(lib.element_113_1502262333505_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_779_1502262333559_82();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_113_1502262333505_28, new cjs.Rectangle(0,0,25,129), null);


(lib.element_291_1502262333514_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_681_1502262333522_53();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_291_1502262333514_42, new cjs.Rectangle(0,0,115,33), null);


(lib.element_215_1502262333515_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_408_1502262333522_54();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_215_1502262333515_44, new cjs.Rectangle(0,0,497,278), null);


(lib.element_258_1502262333498_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_035_1502262333518_48();
	this.instance.parent = this;
	this.instance.setTransform(-233.5,-260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.5,-260.5,467,521);


(lib.element_170_1502262333498_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_890_1502262333520_50();
	this.instance.parent = this;
	this.instance.setTransform(-1255,-1319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255,-1319,2510,2638);


(lib.element_156_1502262333497_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_035_1502262333518_48();
	this.instance.parent = this;
	this.instance.setTransform(-233.5,-260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.5,-260.5,467,521);


(lib.element_081_1502262333491_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A1bZFMAAAgyJMAq3AAAMAAAAyJg");
	this.shape.setTransform(137.2,160.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_081_1502262333491_6, new cjs.Rectangle(0,0,274.5,321), null);


(lib.element_721_1502262333494_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_709_1502262333504_27();
	this.instance.parent = this;
	this.instance.setTransform(45.5,49.4,1,1.175,0,0,0,12.5,55);

	this.instance_1 = new lib.element_532_1502262333503_26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.5,135,1,1,0,0,0,48.5,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_721_1502262333494_10, new cjs.Rectangle(0,-15.2,97,197.2), null);


(lib.element_690_1502262333492_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_669_1502262333506_30();
	this.instance.parent = this;
	this.instance.setTransform(35.5,72.1,1,1.102,0,0,0,12.5,78.5);

	this.instance_1 = new lib.element_407_1502262333507_31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(44.5,184,1,1,0,0,0,44.5,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_690_1502262333492_7, new cjs.Rectangle(0,-14.4,89,246.4), null);


(lib.element_641_1502262333493_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_207_1502262333501_23();
	this.instance.parent = this;
	this.instance.setTransform(61.5,29.7,1,1.186,0,0,0,12.5,34.5);

	this.instance_1 = new lib.element_280_1502262333500_22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.5,103.5,1,1,0,0,0,59.5,61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_641_1502262333493_8, new cjs.Rectangle(0,-11.2,119,176.2), null);


(lib.element_580_1502262333495_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_690_1502262333492_7();
	this.instance.parent = this;
	this.instance.setTransform(35.3,0,1,1,-2.2,0,0,35.3,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:35.4,rotation:1.7,x:35.4},19,cjs.Ease.get(1)).to({rotation:1.7},1).to({regX:35.3,rotation:-2.2,x:35.3},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,-0.5,92.6,248.1);


(lib.element_367_1502262333507_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 曲线 9 拷贝 15
	this.instance = new lib.element_248_1502262333513_40();
	this.instance.parent = this;
	this.instance.setTransform(261.5,14,1,1,0,0,0,261.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39));

	// 曲线 9 拷贝 14
	this.instance_1 = new lib.element_881_1502262333512_39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(259.5,58.5,1,1,0,0,0,174.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39));

	// 曲线 9 拷贝 12
	this.instance_2 = new lib.element_575_1502262333511_37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(368.5,61.2,1,1,0,0,0,25.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:56.4},19).to({y:61.2},19).wait(1));

	// 曲线 9 拷贝 2
	this.instance_3 = new lib.element_231_1502262333509_34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(151,60.7,1,1,0,0,0,19,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:55.9},19).to({y:60.7},19).wait(1));

	// 曲线 9 拷贝 11
	this.instance_4 = new lib.element_262_1502262333510_36();
	this.instance_4.parent = this;
	this.instance_4.setTransform(262,57.5,1,1,0,0,0,19,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:60.7},19).to({y:57.5},19).wait(1));

	// 曲线 9 拷贝
	this.instance_5 = new lib.element_256_1502262333508_33();
	this.instance_5.parent = this;
	this.instance_5.setTransform(39,57.5,1,1,0,0,0,19,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:60.7},19).to({y:57.5},19).wait(1));

	// 曲线 9 拷贝 13
	this.instance_6 = new lib.element_446_1502262333511_38();
	this.instance_6.parent = this;
	this.instance_6.setTransform(484,57.5,1,1,0,0,0,19,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:60.7},19).to({y:57.5},19).wait(1));

	// 曲线 9 拷贝 3
	this.instance_7 = new lib.element_003_1502262333509_35();
	this.instance_7.parent = this;
	this.instance_7.setTransform(262,129,1,1,0,0,0,106,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,523,148);


(lib.element_294_1502262333493_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_989_1502262333503_25();
	this.instance.parent = this;
	this.instance.setTransform(27.5,35.1,1,1.154,0,0,0,12.5,41.5);

	this.instance_1 = new lib.element_958_1502262333502_24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.5,87.5,1,1,0,0,0,31.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_294_1502262333493_9, new cjs.Rectangle(0,-12.8,63,129.8), null);


(lib.element_293_1502262333494_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_514_1502262333506_29();
	this.instance.parent = this;
	this.instance.setTransform(56,139,1,1,0,0,0,56,60);

	this.instance_1 = new lib.element_113_1502262333505_28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.5,62.9,1,1.112,0,0,0,12.5,64.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_293_1502262333494_11, new cjs.Rectangle(0,-8.8,112,207.8), null);


(lib.element_179_1502262333495_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_641_1502262333493_8();
	this.instance.parent = this;
	this.instance.setTransform(61.6,-0.7,1,1,2.5,0,0,61.6,-11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.7},19,cjs.Ease.get(1)).wait(1).to({rotation:2.5},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-0.5,124.2,179);


(lib.element_121_1502262333497_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_293_1502262333494_11();
	this.instance.parent = this;
	this.instance.setTransform(45.6,-0.5,1,1,3.2,0,0,45.6,-9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.5,y:-0.4},19,cjs.Ease.get(1)).wait(1).to({rotation:3.2,y:-0.5},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-0.7,118.6,211.9);


(lib.element_030_1502262333496_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_721_1502262333494_10();
	this.instance.parent = this;
	this.instance.setTransform(45.7,0.2,1,1,-2,0,0,45.7,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.8},19,cjs.Ease.get(1)).wait(1).to({rotation:1.8},0).to({rotation:-2},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,-0.4,100.2,199);


(lib.element_428_1502262333496_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_294_1502262333493_9();
	this.instance.parent = this;
	this.instance.setTransform(27.5,0.1,1,1,0.8,0,0,27.5,-12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:27.6,rotation:-1.7,x:27.6},19,cjs.Ease.get(1)).wait(1).to({regX:27.5,rotation:0.8,x:27.5},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-0.1,63.9,130.4);


// stage content:
(lib.money = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(1));

	// 图层 1
	this.btn = new lib.element_081_1502262333491_6();
	this.btn.parent = this;
	this.btn.setTransform(320,520.1,2.332,3.24,0,0,0,137.2,160.5);
	this.btn.alpha = 0.012;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(31).to({_off:false},0).wait(1));

	// 标题
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egx/hRPMBj/AAAMAAACifMhj/AAAg");
	this.shape.setTransform(320,520);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EkAnEVSMAAAoqjMIBPAAAMAAAIqjgEhE3BAXMBj/AAAMAAAiigMhj/AAAg");
	this.shape_1.setTransform(440.8,628.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(32));

	// Layer 1
	this.instance = new lib.element_170_1502262333498_18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(389.7,538.2,0.445,0.445);

	this.instance_1 = new lib.element_697_1502262333499_20("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(670.2,670.4,1.689,1.689);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1.69,scaleY:1.69,x:670.2,y:670.4,alpha:0},15).wait(17));

	// Symbol 5
	this.instance_2 = new lib.element_121_1502262333497_16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(551,-114.7,1,1,0,0,0,56,103.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({y:102.9},12,cjs.Ease.get(1)).to({y:94.9},6).wait(8));

	// Symbol 4
	this.instance_3 = new lib.element_030_1502262333496_15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(402.5,-108.6,1,1,0,0,0,48.5,98.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({y:91.4},12,cjs.Ease.get(1)).to({y:83.4},6).wait(5));

	// Symbol 3
	this.instance_4 = new lib.element_428_1502262333496_14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(324.5,-91.9,1,1,0,0,0,31.5,64.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({y:60.1},12,cjs.Ease.get(1)).to({y:52.1},6).wait(1));

	// Symbol 2
	this.instance_5 = new lib.element_179_1502262333495_13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(186.5,-83.4,1,1,0,0,0,59.5,87.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({y:84.6},12,cjs.Ease.get(1)).to({y:76.6},6).wait(9));

	// Symbol 1
	this.instance_6 = new lib.element_580_1502262333495_12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(82.5,-131.2,1,1,0,0,0,44.5,123.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({y:116.8},12,cjs.Ease.get(1)).to({y:108.8},6).wait(12));

	// 曲线 9
	this.instance_7 = new lib.element_156_1502262333497_17("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(352.5,453.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.element_258_1502262333498_19("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(352.5,480.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},16).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({_off:true,y:480.5,alpha:1},16,cjs.Ease.get(1)).wait(12));

	// 曲线 9 拷贝 4
	this.instance_9 = new lib.element_291_1502262333514_42();
	this.instance_9.parent = this;
	this.instance_9.setTransform(530.5,740.5,0.767,0.6,0,0,0,57.5,16.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},11,cjs.Ease.get(1)).wait(17));

	// 曲线 9 拷贝 5
	this.instance_10 = new lib.element_939_1502262333514_43();
	this.instance_10.parent = this;
	this.instance_10.setTransform(326,718.5,0.863,0.82,0,0,0,233,35.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},11,cjs.Ease.get(1)).wait(17));

	// 曲线 9 拷贝 6
	this.instance_11 = new lib.element_215_1502262333515_44();
	this.instance_11.parent = this;
	this.instance_11.setTransform(337.5,874,1,1,0,0,0,248.5,139);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({y:842,alpha:1},16,cjs.Ease.get(1)).wait(12));

	// icon
	this.instance_12 = new lib.element_367_1502262333507_32();
	this.instance_12.parent = this;
	this.instance_12.setTransform(319.5,868,1,1,0,0,0,261.5,74);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).to({alpha:1},23,cjs.Ease.get(1)).wait(5));

	// 曲线 9 拷贝 7
	this.instance_13 = new lib.element_921_1502262333515_45();
	this.instance_13.parent = this;
	this.instance_13.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(32));

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
		{src:"images/money/element_890_1502262333520_50.png", id:"element_890_1502262333520_50"},
		{src:"images/money/money_atlas_.png", id:"money_atlas_"},
		{src:"images/money/money_atlas_2.png", id:"money_atlas_2"}
	],
	preloads: []
};




});