module.exports=(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"choose_atlas_", frames: [[0,0,640,1040]]},
		{name:"choose_atlas_2", frames: [[262,0,236,581],[0,0,260,605]]},
		{name:"choose_atlas_3", frames: [[238,0,207,31],[361,33,60,60],[447,0,63,63],[238,33,121,43],[0,583,461,113],[0,0,236,581],[423,33,1,40]]}
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



(lib.element_001_1504679552723_45 = function() {
	this.spriteSheet = ss["choose_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_027_1504679552722_41 = function() {
	this.spriteSheet = ss["choose_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_105_1504679552723_44 = function() {
	this.spriteSheet = ss["choose_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_295_1504679552724_47 = function() {
	this.spriteSheet = ss["choose_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.element_575_1504679552724_46 = function() {
	this.spriteSheet = ss["choose_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.element_629_1504679552718_35 = function() {
	this.spriteSheet = ss["choose_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.element_663_1504679552722_39 = function() {
	this.spriteSheet = ss["choose_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.element_821_1504679552722_40 = function() {
	this.spriteSheet = ss["choose_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_859_1504679552722_42 = function() {
	this.spriteSheet = ss["choose_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.element_978_1504679552719_36 = function() {
	this.spriteSheet = ss["choose_atlas_"];
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


(lib.element_891_1504679552711_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgSsAtKMAAAhaTMAlZAAAMAAABaTg");
	this.shape.setTransform(119.7,289);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_891_1504679552711_12, new cjs.Rectangle(0,0,239.4,578.1), null);


(lib.element_693_1504679552718_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_105_1504679552723_44();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_693_1504679552718_33, new cjs.Rectangle(0,0,60,60), null);


(lib.element_589_1504679552711_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AylHUIAAunMAlLAAAIAAOng");
	this.shape.setTransform(119,46.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_589_1504679552711_10, new cjs.Rectangle(0,0,238,93.5), null);


(lib.element_401_1504679552717_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_821_1504679552722_40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_401_1504679552717_31, new cjs.Rectangle(0,0,260,605), null);


(lib.element_879_1504679552714_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_978_1504679552719_36();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_879_1504679552714_19, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_574_1504679552712_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_027_1504679552722_41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_574_1504679552712_15, new cjs.Rectangle(0,0,236,581), null);


(lib.element_864_1504679552715_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_629_1504679552718_35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_864_1504679552715_24, new cjs.Rectangle(0,0,461,113), null);


(lib.element_807_1504679552715_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_295_1504679552724_47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_807_1504679552715_23, new cjs.Rectangle(0,0,63,63), null);


(lib.element_033_1504679552714_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_575_1504679552724_46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_033_1504679552714_22, new cjs.Rectangle(0,0,121,43), null);


(lib.element_008_1504679552714_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_859_1504679552722_42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_008_1504679552714_21, new cjs.Rectangle(0,0,1,40), null);


(lib.element_420_1504679552716_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_001_1504679552723_45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_420_1504679552716_28, new cjs.Rectangle(0,0,207,31), null);


(lib.element_164_1504679552713_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_663_1504679552722_39();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_164_1504679552713_18, new cjs.Rectangle(0,0,236,581), null);


(lib.element_076_1504679552711_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgSeAtDMAAAhaFMAk9AAAMAAABaFg");
	this.shape.setTransform(118.3,288.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_076_1504679552711_11, new cjs.Rectangle(0,0,236.6,576.6), null);


(lib.element_041_1504679552712_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_401_1504679552717_31();
	this.instance.parent = this;
	this.instance.setTransform(130,302.5,1,1,0,0,0,130,302.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260,605);


(lib.element_782_1504679552714_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.element_008_1504679552714_21();
	this.instance.parent = this;
	this.instance.setTransform(78.5,33,1,1,0,0,0,0.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 矢量智能对象
	this.instance_1 = new lib.element_033_1504679552714_22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(154.5,32.5,1,1,0,0,0,60.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 矢量智能对象_1
	this.instance_2 = new lib.element_807_1504679552715_23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(31.5,31.5,1,1,0,0,0,31.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_782_1504679552714_20, new cjs.Rectangle(0,0,215,63), null);


(lib.element_459_1504679552716_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_693_1504679552718_33();
	this.instance.parent = this;
	this.instance.setTransform(30,30,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.element_115_1504679552716_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_693_1504679552718_33();
	this.instance.parent = this;
	this.instance.setTransform(30,30,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.element_048_1504679552717_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.instance = new lib.element_574_1504679552712_15();
	this.instance.parent = this;
	this.instance.setTransform(130,302.5,1,1,0,0,0,118,290.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 1
	this.instance_1 = new lib.element_041_1504679552712_14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(130,302.5,1,1,0,0,0,130,302.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,12,236,581);


(lib.element_508_1504679552717_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 3
	this.instance = new lib.element_164_1504679552713_18();
	this.instance.parent = this;
	this.instance.setTransform(130,302.5,1,1,0,0,0,118,290.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 2
	this.instance_1 = new lib.element_041_1504679552712_14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(130,302.5,1,1,0,0,0,130,302.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,12,236,581);


// stage content:
(lib.choose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// 图层 1
	this.okBtn = new lib.element_589_1504679552711_10();
	this.okBtn.parent = this;
	this.okBtn.setTransform(338.6,905.4,1,1,0,0,0,119,46.8);
	this.okBtn.alpha = 0.012;

	this.level0Btn = new lib.element_076_1504679552711_11();
	this.level0Btn.parent = this;
	this.level0Btn.setTransform(447,498,1,1,0,0,0,118.3,288.3);
	this.level0Btn.alpha = 0.012;

	this.level1Btn = new lib.element_891_1504679552711_12();
	this.level1Btn.parent = this;
	this.level1Btn.setTransform(197.7,497.3,1,1,0,0,0,119.7,289);
	this.level1Btn.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.level1Btn},{t:this.level0Btn},{t:this.okBtn}]},10).wait(20));

	// logo
	this.instance = new lib.element_782_1504679552714_20();
	this.instance.parent = this;
	this.instance.setTransform(127.5,57.5,1,1,0,0,0,107.5,31.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9,cjs.Ease.get(1)).wait(21));

	// 组 1
	this.instance_1 = new lib.element_420_1504679552716_28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(320.5,161.5,1,1,0,0,0,103.5,15.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(18));

	// 图层 4 copy
	this.instance_2 = new lib.element_459_1504679552716_27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(718.1,104,0.5,0.5,0,0,0,30,30);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:432,y:107},10,cjs.Ease.get(1)).wait(11));

	// 图层 4
	this.instance_3 = new lib.element_115_1504679552716_26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(686.1,149,1,1,0,0,0,30,30);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({x:466,y:152},10,cjs.Ease.get(1)).wait(15));

	// 形状 4 拷贝
	this.level0check = new lib.element_508_1504679552717_32();
	this.level0check.parent = this;
	this.level0check.setTransform(652.1,500.5,1,1,0,0,0,130,302.5);
	this.level0check.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.level0check).to({x:442,alpha:1},7,cjs.Ease.get(1)).to({x:448},3).wait(20));

	// 形状 7 拷贝
	this.level1check = new lib.element_048_1504679552717_30();
	this.level1check.parent = this;
	this.level1check.setTransform(-29,500.5,1,1,0,0,0,130,302.5);
	this.level1check.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.level1check).to({x:203,alpha:1},7,cjs.Ease.get(1)).to({x:197},3).wait(20));

	// 按钮
	this.instance_4 = new lib.element_864_1504679552715_24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(73.5,906.5,1,1,0,0,0,230.5,56.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:235.5,alpha:1},10,cjs.Ease.get(1)).wait(11));

	// bg
	this.instance_5 = new lib.element_879_1504679552714_19();
	this.instance_5.parent = this;
	this.instance_5.setTransform(320,520,1,1,0,0,0,320,520);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aw0HpIAAvRMAhpAAAIAAPRg");
	this.shape.setTransform(345.7,904.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_5}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(173,520,917.1,1040);
// library properties:
lib.properties = {
	width: 640,
	height: 1040,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/choose/choose_atlas_.png", id:"choose_atlas_"},
		{src:"images/choose/choose_atlas_2.png", id:"choose_atlas_2"},
		{src:"images/choose/choose_atlas_3.png", id:"choose_atlas_3"}
	],
	preloads: []
};




});