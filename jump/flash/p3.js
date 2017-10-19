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



(lib.happy_018_1480507239003 = function() {
	this.spriteSheet = ss["p3_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.happy_018_1480507239005 = function() {
	this.spriteSheet = ss["p3_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.happy_033_1480507239004 = function() {
	this.spriteSheet = ss["p3_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.happy_132_1480507239006 = function() {
	this.spriteSheet = ss["p3_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.happy_169_1480507239004 = function() {
	this.spriteSheet = ss["p3_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.happy_507_1480507239006 = function() {
	this.spriteSheet = ss["p3_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.happy_511_1480507239005 = function() {
	this.spriteSheet = ss["p3_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.happy_735_1480507239004 = function() {
	this.spriteSheet = ss["p3_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.happy_783_1480507239003 = function() {
	this.spriteSheet = ss["p3_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.happy_690_1480507239001 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_018_1480507239005();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,39);


(lib.happy_022_1480507239001 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_132_1480507239006();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,259,100);


(lib.happy_462_1480507239001 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_511_1480507239005();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.happy_440_1480507239002 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_033_1480507239004();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,417,63);


(lib.happy_405_1480507239002 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_735_1480507239004();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,153,20);


(lib.happy_115_1480507239002 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_018_1480507239003();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,468,93);


(lib.happy_649_1480507239002 = function(mode,startPosition,loop) {
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
	this.instance = new lib.happy_440_1480507239002("synched",0);
	this.instance.setTransform(233.6,37.4,1,1,0,0,0,208.7,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({scaleX:0.87,scaleY:0.87,y:49.4},5).to({scaleX:1.06,scaleY:1.06,y:32.5},3).to({scaleX:0.98,scaleY:0.98,y:39.4},3).to({scaleX:1,scaleY:1,y:37.4},2).wait(1));

	// Layer 4
	this.instance_1 = new lib.happy_405_1480507239002("synched",0);
	this.instance_1.setTransform(233.7,35.5,1,1,0,0,0,76.4,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.74,scaleY:0.74,y:47.5},5).to({scaleX:1.09,scaleY:1.09,y:30.5},3).to({scaleX:0.99,scaleY:0.99,y:37.5},3).to({scaleX:1,scaleY:1,y:35.5},2).wait(2));

	// Layer 5
	this.instance_2 = new lib.happy_115_1480507239002("synched",0);
	this.instance_2.setTransform(234,46.5,1,1,0,0,0,234,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:58.5},5).to({y:41.5},3).to({y:48.5},3).to({y:46.5},2).wait(2));

	// Layer 6
	this.instance_3 = new lib.happy_783_1480507239003();
	this.instance_3.setTransform(15.6,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// Layer 2
	this.instance_4 = new lib.happy_169_1480507239004();
	this.instance_4.setTransform(-4.4,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,0,474,175);


(lib.happy_094_1480507239003 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy_022_1480507239001();
	this.instance.setTransform(1219.7,50,1,1,0,0,0,129.5,50);

	this.instance_1 = new lib.happy_690_1480507239001();
	this.instance_1.setTransform(780.2,169.5,1,1,0,0,0,60,19.5);

	this.instance_2 = new lib.happy_022_1480507239001();
	this.instance_2.setTransform(499.5,50,1,1,0,0,0,129.5,50);

	this.instance_3 = new lib.happy_690_1480507239001();
	this.instance_3.setTransform(60,169.5,1,1,0,0,0,60,19.5);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1349.2,189);


(lib.happy_509_1480507238999 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 8
	this.instance = new lib.happy_094_1480507239003("synched",0);
	this.instance.setTransform(339.5,171,1,1,0,0,0,314.5,113);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-378.6},119).wait(1));

	// 曲线 3
	this.instance_1 = new lib.happy_507_1480507239006();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1374.2,1040);


// stage content:
(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.duang = new lib.happy_649_1480507239002();
	this.duang.setTransform(319.5,880.3,1,1,0,0,0,234,82.3);

	this.timeline.addTween(cjs.Tween.get(this.duang).wait(20));

	// 图层 4
	this.instance = new lib.happy_462_1480507239001();
	this.instance.setTransform(320,520,1,1,0,0,0,320,520);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// bg
	this.instance_1 = new lib.happy_509_1480507238999();
	this.instance_1.setTransform(327,520,1,1,0,0,0,327,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,520,1374.2,1040);

});