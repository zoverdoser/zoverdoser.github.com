var lightLib = {};

function initLight() {
    var p;
    (lightLib.light0 = function() {
        this.initialize(loader.getResult("light0"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,360,360);


    (lightLib.light1 = function() {
        this.initialize(loader.getResult("light1"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,257,257);


    (lightLib.light2 = function() {
        this.initialize(loader.getResult("light2"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,317,317);


    (lightLib.Path_1 = function() {
        this.initialize();
        this.instance = new lightLib.light0();
        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,360,360);


    (lightLib.Path = function() {
        this.initialize();
        this.instance = new lightLib.light2();
        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,317,317);


    (lightLib.light = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,false,{});

        this.frame_0 = function() {
            this.stop();
        }
        this.frame_30 = function() {
            this.alpha = 0;
            this.gotoAndPlay(0);
        }
        this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(1));

        this.instance = new lightLib.Path();
        this.instance.setTransform(180,180,1,1,0,0,0,158.3,158.3);
        this.instance.alpha = 0.5;
        this.timeline.addTween(createjs.Tween.get(this.instance).to({scaleX:0.93,scaleY:0.93},14).to({scaleX:1,scaleY:1},15).wait(1));


        this.instance_1 = new lightLib.Path_1();
        this.instance_1.setTransform(180,180,0.857,0.857,0,0,0,180,180);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({alpha:0.199},6).wait(1));


        this.instance_2 = new lightLib.Path_1();
        this.instance_2.setTransform(180,180,0.857,0.857,0,0,0,180,180);
        this.instance_2.alpha = 0.199;

        this.timeline.addTween(createjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1},11).to({scaleX:1.14,scaleY:1.14,alpha:0},12).wait(7));


        this.instance_3 = new lightLib.light1();
        this.instance_3.setTransform(51.5,51.5);

        this.timeline.addTween(createjs.Tween.get(this.instance_3).wait(30));

        this.instance_4 = new lightLib.Path_1();
        this.instance_4.setTransform(180,180,0.857,0.857,0,0,0,180,180);
        this.instance_4.alpha = 0.199;

        this.timeline.addTween(createjs.Tween.get(this.instance_4).wait(30));
    }).prototype = p = new createjs.MovieClip();
    p.nominalBounds = new createjs.Rectangle(21.7,21.7,317,317);
}