var effectLib = {};
function initEffect() {
	var p; // shortcut to reference prototypes

	(effectLib.Bitmap10 = function() {
		this.initialize(loader.getResult("Bitmap10"));
	}).prototype = p = new createjs.Bitmap();
	p.nominalBounds = new createjs.Rectangle(0,0,101,102);


	(effectLib.Bitmap11 = function() {
		this.initialize(loader.getResult("Bitmap11"));
	}).prototype = p = new createjs.Bitmap();
	p.nominalBounds = new createjs.Rectangle(0,0,133,130);


	(effectLib.Bitmap12 = function() {
		this.initialize(loader.getResult("Bitmap12"));
	}).prototype = p = new createjs.Bitmap();
	p.nominalBounds = new createjs.Rectangle(0,0,119,117);


	(effectLib.Bitmap13 = function() {
		this.initialize(loader.getResult("Bitmap13"));
	}).prototype = p = new createjs.Bitmap();
	p.nominalBounds = new createjs.Rectangle(0,0,116,116);


	(effectLib.Bitmap14 = function() {
		this.initialize(loader.getResult("Bitmap14"));
	}).prototype = p = new createjs.Bitmap();
	p.nominalBounds = new createjs.Rectangle(0,0,141,130);


	(effectLib.Bitmap15 = function() {
		this.initialize(loader.getResult("Bitmap15"));
	}).prototype = p = new createjs.Bitmap();
	p.nominalBounds = new createjs.Rectangle(0,0,134,114);


	(effectLib.Bitmap8 = function() {
		this.initialize(loader.getResult("Bitmap8"));
	}).prototype = p = new createjs.Bitmap();
	p.nominalBounds = new createjs.Rectangle(0,0,96,94);


	(effectLib.Bitmap9 = function() {
		this.initialize(loader.getResult("Bitmap9"));
	}).prototype = p = new createjs.Bitmap();
	p.nominalBounds = new createjs.Rectangle(0,0,97,90);


	(effectLib.init = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,false,{});

		this.alpha = 0;
        this.frame_0 = function() {
            this.stop();
            this.alpha = 0;
        }

        this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0));

		// 图层 1
		this.instance = new effectLib.Bitmap8();
		this.instance.setTransform(-43.3,-69.9);

		this.instance_1 = new effectLib.Bitmap9();
		this.instance_1.setTransform(-44.9,-68.2);

		this.instance_2 = new effectLib.Bitmap10();
		this.instance_2.setTransform(-48.3,-74.8);

		this.instance_3 = new effectLib.Bitmap11();
		this.instance_3.setTransform(-54.9,-93.4);

		this.instance_4 = new effectLib.Bitmap12();
		this.instance_4.setTransform(-56.8,-89.8);

		this.instance_5 = new effectLib.Bitmap13();
		this.instance_5.setTransform(-54.3,-89.8);

		this.instance_6 = new effectLib.Bitmap14();
		this.instance_6.setTransform(-63.3,-97.3);

		this.instance_7 = new effectLib.Bitmap15();
		this.instance_7.setTransform(-59.1,-86.1);

		this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(6));

	}).prototype = p = new createjs.MovieClip();
	p.nominalBounds = new createjs.Rectangle(-43.3,-69.9,96,94);
}