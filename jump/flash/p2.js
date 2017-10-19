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



(lib.happy_031_1480503830419 = function() {
	this.spriteSheet = ss["p2_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.happy_087_1480503830419 = function() {
	this.spriteSheet = ss["p2_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.happy_240_1480503830419 = function() {
	this.spriteSheet = ss["p2_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.happy_258_1480503830420 = function() {
	this.spriteSheet = ss["p2_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.happy_327_1480503830421 = function() {
	this.spriteSheet = ss["p2_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.happy_382_1480503830420 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.happy_397_1480503830421 = function() {
	this.spriteSheet = ss["p2_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.happy_435_1480503830419 = function() {
	this.spriteSheet = ss["p2_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.happy_494_1480503830421 = function() {
	this.spriteSheet = ss["p2_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.happy_382_1480503830418 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_435_1480503830419();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,153,20);


(lib.happy_472_1480503830417 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_397_1480503830421();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.happy_436_1480503830417 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_382_1480503830420();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.happy_969_1480503830416 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_494_1480503830421();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,164,53);


(lib.happy_361_1480503830416 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_327_1480503830421();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,259,100);


(lib.happy_267_1480503830418 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_240_1480503830419();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,468,93);


(lib.happy_260_1480503830418 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_031_1480503830419();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,417,63);


(lib.happy_534_1480503830417 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Layer 3
	this.instance = new lib.happy_260_1480503830418("synched",0);
	this.instance.setTransform(233.6,37.4,1,1,0,0,0,208.7,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({scaleX:0.87,scaleY:0.87,y:49.4},5).to({scaleX:1.06,scaleY:1.06,y:32.5},3).to({scaleX:0.98,scaleY:0.98,y:39.4},3).to({scaleX:1,scaleY:1,y:37.4},2).wait(1));

	// Layer 4
	this.instance_1 = new lib.happy_382_1480503830418("synched",0);
	this.instance_1.setTransform(233.7,35.5,1,1,0,0,0,76.4,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.74,scaleY:0.74,y:47.5},5).to({scaleX:1.09,scaleY:1.09,y:30.5},3).to({scaleX:0.99,scaleY:0.99,y:37.5},3).to({scaleX:1,scaleY:1,y:35.5},2).wait(2));

	// Layer 5
	this.instance_2 = new lib.happy_267_1480503830418("synched",0);
	this.instance_2.setTransform(234,46.5,1,1,0,0,0,234,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:58.5},5).to({y:41.5},3).to({y:48.5},3).to({y:46.5},2).wait(2));

	// Layer 6
	this.instance_3 = new lib.happy_087_1480503830419();
	this.instance_3.setTransform(15.6,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// Layer 2
	this.instance_4 = new lib.happy_258_1480503830420();
	this.instance_4.setTransform(-4.4,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,0,474,175);


(lib.happy_913_1480503830416 = function() {
	this.initialize();

	// 矢量智能对象
	this.instance = new lib.happy_969_1480503830416();
	this.instance.setTransform(898.2,175.5,1,1,0,0,0,82,26.5);

	this.instance_1 = new lib.happy_969_1480503830416();
	this.instance_1.setTransform(82,175.5,1,1,0,0,0,82,26.5);

	// 矢量智能对象_1
	this.instance_2 = new lib.happy_361_1480503830416();
	this.instance_2.setTransform(1401.8,50,1,1,0,0,0,129.5,50);

	this.instance_3 = new lib.happy_361_1480503830416();
	this.instance_3.setTransform(585.6,50,1,1,0,0,0,129.5,50);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1531.3,202);


(lib.happy_273_1480503830417 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.happy_913_1480503830416();
	this.instance.setTransform(385,197,1,1,0,0,0,385,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-429.2},119).wait(1));

	// Layer 1
	this.instance_1 = new lib.happy_436_1480503830417();
	this.instance_1.setTransform(423,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1531.3,1040);


// stage content:
(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.duang = new lib.happy_534_1480503830417();
	this.duang.setTransform(319.5,879,1,1,0,0,0,234,82.3);

	this.timeline.addTween(cjs.Tween.get(this.duang).wait(20));

	// 图层 5
	this.instance = new lib.happy_472_1480503830417();
	this.instance.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// bg
	this.instance_1 = new lib.happy_273_1480503830417();
	this.instance_1.setTransform(282,520,1,1,0,0,0,385,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(217,520,1531.3,1040);

});