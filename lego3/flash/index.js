module.exports=(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,640,1040]]},
		{name:"index_atlas_2", frames: [[0,0,640,638]]},
		{name:"index_atlas_3", frames: [[0,738,567,217],[0,422,640,314],[0,0,640,420]]},
		{name:"index_atlas_4", frames: [[0,195,249,338],[251,195,282,172],[0,729,320,236],[0,535,436,192],[251,369,313,133],[0,0,543,193],[322,729,235,191]]},
		{name:"index_atlas_5", frames: [[174,21,125,39],[174,0,275,19],[0,317,397,57],[0,0,172,235],[399,317,39,41],[0,237,422,78]]}
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



(lib.element_004_1504679139826_38 = function() {
	this.spriteSheet = ss["index_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_133_1504679139834_55 = function() {
	this.spriteSheet = ss["index_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_225_1504679139831_47 = function() {
	this.spriteSheet = ss["index_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_237_1504679139827_42 = function() {
	this.initialize(img.element_237_1504679139827_42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,688,1072);


(lib.element_268_1504679139831_46 = function() {
	this.spriteSheet = ss["index_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_285_1504679139837_58 = function() {
	this.spriteSheet = ss["index_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_382_1504679139833_51 = function() {
	this.spriteSheet = ss["index_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.element_396_1504679139825_37 = function() {
	this.spriteSheet = ss["index_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_437_1504679139832_49 = function() {
	this.spriteSheet = ss["index_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.element_541_1504679139828_43 = function() {
	this.spriteSheet = ss["index_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.element_542_1504679139834_54 = function() {
	this.spriteSheet = ss["index_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.element_633_1504679139836_57 = function() {
	this.spriteSheet = ss["index_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_678_1504679139832_50 = function() {
	this.spriteSheet = ss["index_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.element_722_1504679139830_45 = function() {
	this.spriteSheet = ss["index_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.element_726_1504679139827_41 = function() {
	this.spriteSheet = ss["index_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.element_742_1504679139833_53 = function() {
	this.spriteSheet = ss["index_atlas_4"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.element_831_1504679139832_48 = function() {
	this.initialize(img.element_831_1504679139832_48);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,689,253);


(lib.element_891_1504679139835_56 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_923_1504679139833_52 = function() {
	this.spriteSheet = ss["index_atlas_5"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.element_989_1504679139828_44 = function() {
	this.spriteSheet = ss["index_atlas_4"];
	this.gotoAndStop(6);
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


(lib.element_885_1504679139825_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_891_1504679139835_56();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_885_1504679139825_36, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_587_1504679139819_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap2DUIAAmoITsAAIAAGog");
	this.shape.setTransform(63.1,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_587_1504679139819_12, new cjs.Rectangle(0,0,126.1,42.5), null);


(lib.element_565_1504679139820_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_285_1504679139837_58();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_565_1504679139820_13, new cjs.Rectangle(0,0,640,314), null);


(lib.element_150_1504679139820_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.element_831_1504679139832_48();
	this.instance.parent = this;
	this.instance.setTransform(-26.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_150_1504679139820_14, new cjs.Rectangle(-26.4,4,689,253), null);


(lib.element_418_1504679139819_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjiDcIAAm3IHFAAIAAG3g");
	this.shape.setTransform(22.7,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_418_1504679139819_11, new cjs.Rectangle(0,0,45.4,43.9), null);


(lib.element_398_1504679139816_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyQJ+IAAz7MAkhAAAIAAT7g");
	this.shape.setTransform(116.9,63.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_398_1504679139816_9, new cjs.Rectangle(0,0,233.8,127.5), null);


(lib.element_870_1504679139823_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_004_1504679139826_38();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_870_1504679139823_28, new cjs.Rectangle(0,0,125,39), null);


(lib.element_626_1504679139822_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_923_1504679139833_52();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_626_1504679139822_24, new cjs.Rectangle(0,0,422,78), null);


(lib.element_780_1504679139822_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_133_1504679139834_55();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_780_1504679139822_22, new cjs.Rectangle(0,0,567,217), null);


(lib.element_777_1504679139822_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_396_1504679139825_37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_777_1504679139822_23, new cjs.Rectangle(0,0,282,172), null);


(lib.element_095_1504679139822_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_742_1504679139833_53();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_095_1504679139822_21, new cjs.Rectangle(0,0,543,193), null);


(lib.element_244_1504679139823_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_542_1504679139834_54();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_244_1504679139823_25, new cjs.Rectangle(0,0,640,420), null);


(lib.element_007_1504679139824_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_726_1504679139827_41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_007_1504679139824_29, new cjs.Rectangle(0,0,39,41), null);


(lib.element_320_1504679139825_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_237_1504679139827_42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,688,1072);


(lib.element_244_1504679139824_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_633_1504679139836_57();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_244_1504679139824_33, new cjs.Rectangle(0,0,640,638), null);


(lib.element_019_1504679139825_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.element_541_1504679139828_43();
	this.instance.parent = this;
	this.instance.setTransform(52.5,339.6);

	this.instance_1 = new lib.element_989_1504679139828_44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.2,232.7);

	this.instance_2 = new lib.element_722_1504679139830_45();
	this.instance_2.parent = this;
	this.instance_2.setTransform(285.1,164.1);

	this.instance_3 = new lib.element_268_1504679139831_46();
	this.instance_3.parent = this;
	this.instance_3.setTransform(649.8,142.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},2).to({state:[]},2).wait(1));

	// Layer 1
	this.instance_4 = new lib.element_225_1504679139831_47();
	this.instance_4.parent = this;
	this.instance_4.setTransform(22,288.7);

	this.instance_5 = new lib.element_437_1504679139832_49();
	this.instance_5.parent = this;
	this.instance_5.setTransform(121.7,212.7);

	this.instance_6 = new lib.element_678_1504679139832_50();
	this.instance_6.parent = this;
	this.instance_6.setTransform(222.6,143.6);

	this.instance_7 = new lib.element_382_1504679139833_51();
	this.instance_7.parent = this;
	this.instance_7.setTransform(588.8,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},2).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22,288.7,249,338);


(lib.element_733_1504679139824_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 7
	this.instance = new lib.element_565_1504679139820_13();
	this.instance.parent = this;
	this.instance.setTransform(601.2,234.6,1,1,0,0,0,320,157);
	this.instance.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:597.2,y:238.6,alpha:0.121},3).to({x:601.2,y:234.6,alpha:0.379},2).wait(2).to({x:607.2,alpha:0.199},3).to({x:601.2,alpha:0.379},2).wait(1).to({x:603.2,y:230.6,alpha:0.129},2).to({x:601.2,y:234.6,alpha:0.379},3).wait(2).to({alpha:0.121},0).to({x:605.2,alpha:0.379},2).wait(1));

	// 图层 8
	this.instance_1 = new lib.element_150_1504679139820_14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(601.2,344.1,1,1,0,0,0,320,130.5);
	this.instance_1.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({x:607.2,alpha:0.102},2).to({x:601.2,alpha:0.379},3).wait(5).to({y:340.1,alpha:0.121},2).to({y:344.1,alpha:0.379},3).wait(1).to({alpha:0.16},0).to({x:607.2,alpha:0.379},2).wait(1));

	// 图层 7
	this.instance_2 = new lib.element_565_1504679139820_13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(601.2,234.6,1,1,0,0,0,320,157);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({x:609.2},3).to({x:601.2},2).wait(2).to({x:595.2},3).to({x:601.2},2).wait(1).to({x:605.2,y:238.6},2).to({x:601.2,y:234.6},3).wait(2).to({x:605.2},0).to({x:601.2},2).wait(1));

	// 图层 8
	this.instance_3 = new lib.element_150_1504679139820_14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(601.2,344.1,1,1,0,0,0,320,130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({x:597.2},2).to({x:601.2},3).wait(5).to({x:605.2,y:348.1},2).to({x:601.2,y:344.1},3).wait(1).to({x:605.2},0).to({x:601.2},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(254.8,77.6,689,393);


(lib.element_388_1504679139823_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_244_1504679139824_33();
	this.instance.parent = this;
	this.instance.setTransform(320,319,1,1,0,0,0,320,319);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:331},27).to({y:319},28).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,638);


(lib.element_219_1504679139823_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_885_1504679139825_36();
	this.instance.parent = this;
	this.instance.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_219_1504679139823_26, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_310_1504679139824_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_019_1504679139825_35("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(949.3,384.2,1,1,0,-12.3,167.7,164,458.1);
	this.instance.alpha = 0.391;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false,regX:140,regY:450.2,skewX:163.1,skewY:343.1,x:117.2,y:165.7,alpha:0.219},0).to({_off:true},6).wait(1));

	// Layer 2
	this.instance_1 = new lib.element_019_1504679139825_35("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.7,14,1,1,5,0,0,14,28);
	this.instance_1.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},7).wait(6).to({_off:false,regX:140,regY:450.1,rotation:40.1,x:126.2,y:229.3,alpha:0.219},0).to({_off:true},7).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,274.4,277.3,358.3);


(lib.element_044_1504679139824_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.element_095_1504679139822_21();
	this.instance.parent = this;
	this.instance.setTransform(283.5,108.5,1,1,0,0,0,271.5,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18));

	// Layer 1
	this.instance_1 = new lib.element_780_1504679139822_22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(283.5,108.5,1,1,0,0,0,283.5,108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).to({alpha:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,567,217);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_83 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(83).call(this.frame_83).wait(1));

	// 图层 1
	this.ruleBtn = new lib.element_418_1504679139819_11();
	this.ruleBtn.parent = this;
	this.ruleBtn.setTransform(600.7,44.6,1,1,0,0,0,22.7,21.9);
	this.ruleBtn.alpha = 0.012;

	this.prizeBtn = new lib.element_587_1504679139819_12();
	this.prizeBtn.parent = this;
	this.prizeBtn.setTransform(503.7,44,1,1,0,0,0,63.1,21.3);
	this.prizeBtn.alpha = 0.012;

	this.btn = new lib.element_398_1504679139816_9();
	this.btn.parent = this;
	this.btn.setTransform(320.9,929.4,1,1,0,0,0,116.9,63.8);
	this.btn.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.prizeBtn},{t:this.ruleBtn}]},16).to({state:[{t:this.prizeBtn},{t:this.ruleBtn},{t:this.btn}]},56).wait(12));

	// Layer 10
	this.instance = new lib.element_320_1504679139825_34("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(320,516,1,1,0,0,0,344,536);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// LOGO
	this.instance_1 = new lib.element_626_1504679139822_24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(197,54,1,1,0,0,0,211,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:243},9,cjs.Ease.get(1)).to({x:237},4).wait(71));

	// 我的奖品
	this.instance_2 = new lib.element_870_1504679139823_28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(546.5,44.5,1,1,0,0,0,62.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:500.5},9,cjs.Ease.get(1)).to({x:506.5},4).wait(71));

	// 游戏机制
	this.instance_3 = new lib.element_007_1504679139824_29();
	this.instance_3.parent = this;
	this.instance_3.setTransform(600.5,44.6,0.436,0.436,0,0,0,19.5,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:19.6,regY:20.5,scaleX:1.12,scaleY:1.12,x:600.6,y:44.5},7,cjs.Ease.get(1)).to({regX:19.5,scaleX:1,scaleY:1,x:600.5},4).wait(73));

	// 图层 7
	this.instance_4 = new lib.element_565_1504679139820_13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1007.7,738.1,1,1,0,0,0,320,157);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:327.5,y:806.1},7,cjs.Ease.get(1)).to({_off:true},1).wait(53).to({_off:false},0).to({x:1007.7,y:738.1},7,cjs.Ease.get(1)).to({_off:true},1).wait(14));

	// 文字
	this.instance_5 = new lib.element_150_1504679139820_14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-336.6,943.6,1,1,0,0,0,320,130.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:327.5,y:915.6},7,cjs.Ease.get(1)).to({_off:true},1).wait(53).to({_off:false},0).to({x:-336.6,y:943.6},7,cjs.Ease.get(1)).to({_off:true},1).wait(14));

	// Layer 13
	this.instance_6 = new lib.element_310_1504679139824_32();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-266.6,588.6,1,1,0,0,0,7,17);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({_off:true},53).wait(22));

	// Layer 14
	this.instance_7 = new lib.element_733_1504679139824_31();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-266.6,588.6,1,1,0,0,0,7,17);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({_off:true},53).wait(22));

	// 1
	this.instance_8 = new lib.element_777_1504679139822_23();
	this.instance_8.parent = this;
	this.instance_8.setTransform(322,970,1,1,0,0,0,141,86);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(66).to({_off:false},0).to({y:922,alpha:1},7,cjs.Ease.get(1)).to({y:930},4).wait(7));

	// 2
	this.instance_9 = new lib.element_044_1504679139824_30();
	this.instance_9.parent = this;
	this.instance_9.setTransform(319.5,768.5,0.281,0.281,0,0,0,283.5,108.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(62).to({_off:false},0).to({scaleX:1.06,scaleY:1.06},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).wait(11));

	// 图层 10
	this.instance_10 = new lib.element_244_1504679139823_25();
	this.instance_10.parent = this;
	this.instance_10.setTransform(320,830,1,1,0,0,0,320,210);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(84));

	// 图层 13
	this.instance_11 = new lib.element_388_1504679139823_27();
	this.instance_11.parent = this;
	this.instance_11.setTransform(320,761,1,1,0,0,0,320,319);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:713},9,cjs.Ease.get(1)).to({y:721},8).wait(67));

	// 图层 12
	this.instance_12 = new lib.element_219_1504679139823_26();
	this.instance_12.parent = this;
	this.instance_12.setTransform(320,508,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:520},17,cjs.Ease.get(1)).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(296,500,688,1100);
// library properties:
lib.properties = {
	width: 640,
	height: 1040,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index/element_237_1504679139827_42.png", id:"element_237_1504679139827_42"},
		{src:"images/index/element_831_1504679139832_48.png", id:"element_831_1504679139832_48"},
		{src:"images/index/index_atlas_.png", id:"index_atlas_"},
		{src:"images/index/index_atlas_2.png", id:"index_atlas_2"},
		{src:"images/index/index_atlas_3.png", id:"index_atlas_3"},
		{src:"images/index/index_atlas_4.png", id:"index_atlas_4"},
		{src:"images/index/index_atlas_5.png", id:"index_atlas_5"}
	],
	preloads: []
};




});