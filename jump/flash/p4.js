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



(lib.happy_040_1480507324318 = function() {
	this.spriteSheet = ss["p4_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.happy_075_1480507324319 = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.happy_159_1480507324320 = function() {
	this.spriteSheet = ss["p4_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.happy_164_1480507324317 = function() {
	this.spriteSheet = ss["p4_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.happy_288_1480507324319 = function() {
	this.spriteSheet = ss["p4_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.happy_337_1480507324317 = function() {
	this.spriteSheet = ss["p4_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.happy_370_1480507324319 = function() {
	this.spriteSheet = ss["p4_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.happy_556_1480507324319 = function() {
	this.spriteSheet = ss["p4_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.happy_756_1480507324317 = function() {
	this.spriteSheet = ss["p4_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.happy_984_1480507324317 = function() {
	this.spriteSheet = ss["p4_atlas_3"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.happy_675_1480507324316 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_756_1480507324317();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,417,63);


(lib.happy_540_1480507324316 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_164_1480507324317();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,153,20);


(lib.happy_517_1480507324314 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_159_1480507324320();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180,68);


(lib.happy_411_1480507324314 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_288_1480507324319();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106,34);


(lib.happy_270_1480507324314 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_370_1480507324319();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85,27);


(lib.happy_898_1480507324315 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_556_1480507324319();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.happy_277_1480507324315 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_075_1480507324319();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.happy_053_1480507324316 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_337_1480507324317();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,468,93);


(lib.happy_985_1480507324314 = function() {
	this.initialize();

	// 矢量智能对象 拷贝
	this.instance = new lib.happy_270_1480507324314();
	this.instance.setTransform(707.6,130.5,1,1,0,0,0,42.5,13.5);

	this.instance_1 = new lib.happy_270_1480507324314();
	this.instance_1.setTransform(15.5,130.5,1,1,0,0,0,42.5,13.5);

	// 矢量智能对象
	this.instance_2 = new lib.happy_411_1480507324314();
	this.instance_2.setTransform(1164.2,185,1,1,0,0,0,53,17);

	this.instance_3 = new lib.happy_411_1480507324314();
	this.instance_3.setTransform(472,185,1,1,0,0,0,53,17);

	// 矢量智能对象_2
	this.instance_4 = new lib.happy_517_1480507324314();
	this.instance_4.setTransform(1092.2,12,1,1,0,0,0,90,34);

	this.instance_5 = new lib.happy_517_1480507324314();
	this.instance_5.setTransform(400,12,1,1,0,0,0,90,34);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-22,1244.2,224.1);


(lib.happy_045_1480507324316 = function(mode,startPosition,loop) {
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
	this.instance = new lib.happy_675_1480507324316("synched",0);
	this.instance.setTransform(233.6,37.4,1,1,0,0,0,208.7,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({scaleX:0.87,scaleY:0.87,y:49.4},5).to({scaleX:1.06,scaleY:1.06,y:32.5},3).to({scaleX:0.98,scaleY:0.98,y:39.4},3).to({scaleX:1,scaleY:1,y:37.4},2).wait(1));

	// Layer 4
	this.instance_1 = new lib.happy_540_1480507324316("synched",0);
	this.instance_1.setTransform(233.7,35.5,1,1,0,0,0,76.4,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.74,scaleY:0.74,y:47.5},5).to({scaleX:1.09,scaleY:1.09,y:30.5},3).to({scaleX:0.99,scaleY:0.99,y:37.5},3).to({scaleX:1,scaleY:1,y:35.5},2).wait(2));

	// Layer 5
	this.instance_2 = new lib.happy_053_1480507324316("synched",0);
	this.instance_2.setTransform(234,46.5,1,1,0,0,0,234,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:58.5},5).to({y:41.5},3).to({y:48.5},3).to({y:46.5},2).wait(2));

	// Layer 6
	this.instance_3 = new lib.happy_984_1480507324317();
	this.instance_3.setTransform(15.6,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// Layer 2
	this.instance_4 = new lib.happy_040_1480507324318();
	this.instance_4.setTransform(0,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,474,175);


(lib.happy_456_1480507324315 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.happy_985_1480507324314();
	this.instance.setTransform(324.5,175,1,1,0,0,0,236.5,102);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-365.6},119).wait(1));

	// Layer 1
	this.instance_1 = new lib.happy_277_1480507324315();
	this.instance_1.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1305.2,1040);


// stage content:
(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.duang = new lib.happy_045_1480507324316();
	this.duang.setTransform(319.1,880,1,1,0,0,0,234,82.3);

	this.timeline.addTween(cjs.Tween.get(this.duang).wait(20));

	// 图层 5
	this.instance = new lib.happy_898_1480507324315();
	this.instance.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// 云彩
	this.instance_1 = new lib.happy_456_1480507324315();
	this.instance_1.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,520,1305.2,1040);

});