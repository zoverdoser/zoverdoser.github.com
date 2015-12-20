var effectLib = {};
function initEffect() {
    var p; // shortcut to reference prototypes
    // symbols:

    (effectLib.Bitmap1 = function() {
        this.initialize(loader.getResult("Bitmap1"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,96,94);


    (effectLib.Bitmap2 = function() {
        this.initialize(loader.getResult("Bitmap2"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,97,90);


    (effectLib.Bitmap3 = function() {
        this.initialize(loader.getResult("Bitmap3"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,101,102);


    (effectLib.Bitmap4 = function() {
        this.initialize(loader.getResult("Bitmap4"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,132,121);


    (effectLib.Bitmap5 = function() {
        this.initialize(loader.getResult("Bitmap5"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,130,116);


    (effectLib.Bitmap6 = function() {
        this.initialize(loader.getResult("Bitmap6"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,129,116);


    (effectLib.Bitmap7 = function() {
        this.initialize(loader.getResult("Bitmap7"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,123,105);


    (effectLib.init = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,false,{});
        this.alpha = 0;
        this.frame_0 = function() {
            this.stop();
            this.alpha = 0;
        }
        
        //this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(8).wait(1));

        // 图层 2
        // this.instance = new effectLib.Bitmap1();
        // this.instance.setTransform(4.8,4.6);

        // this.instance_1 = new effectLib.Bitmap2();
        // this.instance_1.setTransform(4.7,8.3);

        // this.instance_2 = new effectLib.Bitmap3();
        // this.instance_2.setTransform(1.8,0.8);

        // this.instance_3 = new effectLib.Bitmap4();
        // this.instance_3.setTransform(-16.6,-8.1);

        // this.instance_4 = new effectLib.Bitmap5();
        // this.instance_4.setTransform(-14.9,-7.6);

        // this.instance_5 = new effectLib.Bitmap6();
        // this.instance_5.setTransform(-10.8,-5);

        // this.instance_6 = new effectLib.Bitmap7();
        // this.instance_6.setTransform(-8.3,-0.4);

        // this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(3));

    }).prototype = p = new createjs.MovieClip();
    p.nominalBounds = new createjs.Rectangle(4.8,4.6,96,94);
}