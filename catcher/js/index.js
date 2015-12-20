var loader, indexLib = {};
var enterView = false,
    enterMine = false,
    enterGame = false;

function getIndex() {
    var p;

    (indexLib.Bitmap4 = function() {
        this.initialize(loader.getResult("Bitmap4"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,161,258);


    (indexLib.Bitmap5 = function() {
        this.initialize(loader.getResult("Bitmap5"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,38,38);


    (indexLib.happy_042_1431411938485 = function() {
        this.initialize(loader.getResult("happy_042_1431411938485"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,240,60);


    (indexLib.happy_043_1431411938440 = function() {
        this.initialize(loader.getResult("happy_043_1431411938440"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,498,289);


    (indexLib.happy_049_1431411938457 = function() {
        this.initialize(loader.getResult("happy_049_1431411938457"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,117,94);


    (indexLib.happy_098_1431411938459 = function() {
        this.initialize(loader.getResult("happy_098_1431411938459"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,78,69);


    (indexLib.happy_109_1431411938465 = function() {
        this.initialize(loader.getResult("happy_109_1431411938465"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,40,78);


    (indexLib.happy_189_1431411938444 = function() {
        this.initialize(loader.getResult("happy_189_1431411938444"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,640,90);


    (indexLib.happy_191_1431411938445 = function() {
        this.initialize(loader.getResult("happy_191_1431411938445"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,33,34);


    (indexLib.happy_234_1431411938442 = function() {
        this.initialize(loader.getResult("happy_234_1431411938442"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,225,382);


    (indexLib.happy_245_1431411938489 = function() {
        this.initialize(loader.getResult("happy_245_1431411938489"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,476,424);


    (indexLib.happy_269_1431411938472 = function() {
        this.initialize(loader.getResult("happy_269_1431411938472"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,176,196);


    (indexLib.happy_283_1431411938454 = function() {
        this.initialize(loader.getResult("happy_283_1431411938454"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,81,84);


    (indexLib.happy_289_1431411938449 = function() {
        this.initialize(loader.getResult("happy_289_1431411938449"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,161,299);


    (indexLib.happy_289_1431411938474 = function() {
        this.initialize(loader.getResult("happy_289_1431411938474"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,162,194);


    (indexLib.happy_299_1431411938451 = function() {
        this.initialize(loader.getResult("happy_299_1431411938451"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,16,244);


    (indexLib.happy_455_1431411938479 = function() {
        this.initialize(loader.getResult("happy_455_1431411938479"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,62,125);


    (indexLib.happy_535_1431411938461 = function() {
        this.initialize(loader.getResult("happy_535_1431411938461"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,46,72);


    (indexLib.happy_560_1431411938456 = function() {
        this.initialize(loader.getResult("happy_560_1431411938456"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,76,92);


    (indexLib.happy_593_1431411938440 = function() {
        this.initialize(loader.getResult("happy_593_1431411938440"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,110,78);


    (indexLib.happy_638_1431411938464 = function() {
        this.initialize(loader.getResult("happy_638_1431411938464"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,130,204);


    (indexLib.happy_659_1431411938477 = function() {
        this.initialize(loader.getResult("happy_659_1431411938477"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,59,68);


    (indexLib.happy_665_1431411938453 = function() {
        this.initialize(loader.getResult("happy_665_1431411938453"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,39,201);


    (indexLib.happy_676_1431411938437 = function() {
        this.initialize(loader.getResult("happy_676_1431411938437"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,240,60);


    (indexLib.happy_689_1431411938448 = function() {
        this.initialize(loader.getResult("happy_689_1431411938448"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,18,19);


    (indexLib.happy_714_1431411938471 = function() {
        this.initialize(loader.getResult("happy_714_1431411938471"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,170,163);


    (indexLib.happy_779_1431411938443 = function() {
        this.initialize(loader.getResult("happy_779_1431411938443"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,640,150);


    (indexLib.happy_855_1431411938470 = function() {
        this.initialize(loader.getResult("happy_855_1431411938470"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,58,86);


    (indexLib.happy_893_1431411938448 = function() {
        this.initialize(loader.getResult("happy_893_1431411938448"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,95,159);


    (indexLib.happy_902_1431411938478 = function() {
        this.initialize(loader.getResult("happy_902_1431411938478"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,220,227);


    (indexLib.happy_955_1431411938438 = function() {
        this.initialize(loader.getResult("happy_955_1431411938438"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,230,163);


    (indexLib.happy_974_1431411938455 = function() {
        this.initialize(loader.getResult("happy_974_1431411938455"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,52,49);


    (indexLib.happy_983_1431411938483 = function() {
        this.initialize(loader.getResult("happy_983_1431411938483"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,58,111);


    (indexLib.happy_985_1431411938463 = function() {
        this.initialize(loader.getResult("happy_985_1431411938463"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,56,91);


    (indexLib.happy_990_1431411938462 = function() {
        this.initialize(loader.getResult("happy_990_1431411938462"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,63,72);


    (indexLib.happy_996_1431411938476 = function() {
        this.initialize(loader.getResult("happy_996_1431411938476"));
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,135,176);


    (indexLib.xingxin = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_191_1431411938445();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,33,34);


    (indexLib.happy_412_1431411938435 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_955_1431411938438();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,230,163);


    (indexLib.happy_345_1431411938434 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_043_1431411938440();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,498,289);


    (indexLib.happy_206_1431411938434 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_955_1431411938438();
        this.instance.setTransform(-28.7,80.3,1,1,-29.7);

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(-28.7,-33.8,280.6,255.6);


    (indexLib.happy_998_1431411938431 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_659_1431411938477();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,59,68);


    (indexLib.happy_912_1431411938426 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_535_1431411938461();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,46,72);


    (indexLib.happy_900_1431411938431 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_996_1431411938476();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,135,176);


    (indexLib.happy_838_1431411938433 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_983_1431411938483();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,58,111);


    (indexLib.happy_833_1431411938427 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_234_1431411938442();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,225,382);


    (indexLib.happy_815_1431411938432 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_902_1431411938478();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,220,227);


    (indexLib.happy_739_1431411938425 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_049_1431411938457();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,117,94);


    (indexLib.happy_728_1431411938428 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_109_1431411938465();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,40,78);


    (indexLib.happy_695_1431411938427 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_985_1431411938463();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,56,91);


    (indexLib.happy_672_1431411938428 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_638_1431411938464();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,130,204);


    (indexLib.happy_518_1431411938432 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_455_1431411938479();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,62,125);


    (indexLib.happy_484_1431411938429 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_714_1431411938471();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,170,163);


    (indexLib.happy_456_1431411938429 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_855_1431411938470();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,58,86);


    (indexLib.happy_284_1431411938427 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_990_1431411938462();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,63,72);


    (indexLib.happy_275_1431411938430 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_289_1431411938474();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,162,194);


    (indexLib.happy_213_1431411938430 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_269_1431411938472();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,176,196);


    (indexLib.happy_133_1431411938424 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_283_1431411938454();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,81,84);


    (indexLib.happy_132_1431411938426 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_098_1431411938459();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,78,69);


    (indexLib.happy_051_1431411938425 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_560_1431411938456();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,76,92);


    (indexLib.happy_553_1431411938417 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_676_1431411938437();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,240,60);


    (indexLib.happy_315_1431411938418 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_042_1431411938485();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,240,60);


    (indexLib.happy_232_1431411938418 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_189_1431411938444();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,640,90);


    (indexLib.happy_848_1431411938416 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_779_1431411938443();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,640,150);


    (indexLib.happy_766_1431411938416 = function() {
        this.initialize();

        // 图层 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("ADaETQhDgmgthGQg3A3g6AnQgYAQgNgQQgMgTAXgTQBLgwArgyQgjhSgMhaIhEAHQgYACgFgVQgCgVAYgEIBCgKQgFgcAAhPQgCgcAAgWQACgZAXgDQAYADAAAcQgCBIAGBQICsgTQAVAAAEAVQAAAWgVACIipATQAQBTAUA1QAfgpAZhDQAKgYASAFQATAKgFAXQgdBRgwA8QAoA9AlAZQAaAMAChCQAAgXAVAAQAVADAAAXQgEBxgsAAQgJAAgLgFgAkXD7QgOgQATgRQBShNAjhJQgphTg3hKQgRgVATgQQATgKAQAVQAzBIAdA3QAVhEAAheQAFgjgYAFIh3AAQgTAAAAgYQAAgVATAAICDAAQA/gHgJBCQAABogjCFQAWApAZA5QAJAagTAMQgVAHgLgaQgNgggUgkQgmBChLA/QgLAJgKAAQgIAAgGgHgAC1ibQgYgXgZgVQgVgRAOgSQAQgOAVAQQAhAYAQASQARATgMAQQgIAJgJAAQgJAAgJgJg");
        this.shape.setTransform(208.2,27.7);

        this.shape_1 = new createjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AkREOQgTgOAOgXQAyhKAghfQALgaAYAFQATAJgJAcQgbBUg6BfQgKAOgOAAQgGAAgHgDgABDD5QgRgMAIgQQALgQARAHQBBAjAYg2QAHgYAAg1IhqAAQgVgCAAgWQADgVAVAAIBWAAQgEgOgRgTIgHgLQgSgaAZgWIAagcIATgVIhJAAQgVAAgCgVQAAgVAVgCIBiAAQAfAAAJAOQAJAOgOAXIgjAmQghAfAAACIAMATQATAbAHARIAqAAQAVAAAFAVQgDAVgVADIglAAQACA8gJAhQgZBAg0AAQgfAAgqgYgAhRD+QgRgJAIgTQALgTARAHQAsAaADh8IAAiJQACgOgTAAIgcAAIAAAVQgCCZhJBxQgOAVgVgKQgTgMAMgXQBChsAJiDIAAiGIgaAAQgTAAgCgVQACgVATAAIA7AAIgOgYQgLgTgEgEQgLgWATgNQAVgJAOAVIAcA2QAEAHAAAJIA3AAQAVAAACAVQgCAXgVAAIhcAAIAABAIAjAAQA2gFgEA7IAACDQACChhBAAQgTAAgYgNgAjZgCQgggngYgYQgMgRAOgQQATgLAOANQAlAlATAbQAOATgQAOQgHAFgHAAQgKAAgJgIgAAuhLQgTgLAMgVQAjg0AThXQAHgXAVACQAVAHgFAYQgCACgCAOIgFARIB8AAQATAAACAVQgCAXgTAAIiIAAQgQAlgVAkQgKAOgMAAQgFAAgGgDgAjLiYIgogxQgHgFgCgFQgRgSARgRQASgOATATQAeAbAWAgQAMAVgRAQQgHAFgHAAQgLAAgKgMg");
        this.shape_1.setTransform(148.4,27.9);

        this.shape_2 = new createjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AkTEKQgJgVAOgOQA3gpAfg0IgjghQgvgtADgMQAAgJAJgcQAXhAARhbIgoAAQgmgaAmgXIAsAAQAFgZAAgkQADgYAXAAQAXACAAAYQAAAmgEAVIA6AAQApACgGA4QgNCYgwBtIAaAcQAQAPAMAPQAOATgQAOQgQAPgRgPQgPgUgZgWQgwBCgwAjQgFAEgGAAQgKAAgJgOgAjSAQQgHATAAAGQAAAKAYATIAeAXQAmhbAMh2QAEgfgXADIgjAAQgRBfgaBBgADHEKIjFAAQgtAFACg9IAAiaQADgvAogDIDHAAQAvAAAAA9IAACWQAEAygsAAIgJgBgAC0DZQAXADAAgdIAAhnQADgjgaADIiYAAQgcgDACAjIAABnQAAAdAXgDgADugUQgCgCgJgTIgKgTQiFAMh6AAQgXAAgGgOQgHgOARgTQA7hJAjhgQAJgVAYAHQAQAMgHAYQgjBSgyBEQBYACBygMQgOgfghg1QgLgTAQgMQAWgJALATQAqBDAvBlQAKAWgRAJQgFACgFAAQgMAAgJgOg");
        this.shape_2.setTransform(88.3,28.1);

        this.shape_3 = new createjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("ABvDvIAAj+IjMAAQgLC8iABQQgaASgSgSQgOgVAagTQBuhEAJigIhzAAQgUAAgEgXQAEgYAUAAIB1AAIAFidIhgAAQgaAAgCgXQAAgVAagDIHcAAQAaAAACAYQAAAVgaACIhSAAIAACdIBnAAQATAAADAYQgBAVgSACIhqAAIAAEAQgCAagYAAQgXgCAAgagAhbg+IDKAAIAAidIjGAAg");
        this.shape_3.setTransform(28.9,29.7);

        this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0.4,-0.3,236.5,56.7);


    (indexLib.happy_740_1431411938423 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_665_1431411938453();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,39,201);


    (indexLib.happy_331_1431411938423 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_299_1431411938451();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,16,244);


    (indexLib.happy_001_1431411938417 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_593_1431411938440();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,180,78);


    (indexLib.happy_410_1431411938415 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_245_1431411938489();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,476,424);


    (indexLib.fgjjhkljl = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.happy_974_1431411938455();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,52,49);


    (indexLib.元件1 = function() {
        this.initialize();

        // 图层 1
        this.instance = new indexLib.Bitmap5();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,38,38);


    (indexLib.happy_964_1431411938425 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层 1
        this.instance = new indexLib.fgjjhkljl();
        this.instance.setTransform(26,24.5,1,1,0,0,0,26,24.5);

        this.timeline.addTween(createjs.Tween.get(this.instance).to({regY:24.6,scaleX:1.34,scaleY:1.34,y:24.6},7).to({regY:24.5,scaleX:1,scaleY:1,y:24.5},7).wait(1));

    }).prototype = p = new createjs.MovieClip();
    p.nominalBounds = new createjs.Rectangle(0,0,52,49);


    (indexLib.happy_711_1431411938417 = function() {
        this.initialize();

        // 开始游戏
        this.instance = new indexLib.happy_766_1431411938416();
        this.instance.setTransform(319.7,69.1,1,1,0,0,0,118.7,28.1);

        // 图层 36
        this.instance_1 = new indexLib.happy_848_1431411938416();
        this.instance_1.setTransform(320,75,1,1,0,0,0,320,75);

        this.addChild(this.instance_1,this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0,0,640,150);


    (indexLib.happy_807_1431411938422 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层 2
        this.instance = new indexLib.happy_964_1431411938425();
        this.instance.setTransform(85.6,9,0.37,0.37,36,0,0,25.8,24.5);

        this.timeline.addTween(createjs.Tween.get(this.instance).to({regX:25.7,scaleX:0.44,scaleY:0.44,x:85.5,y:8.9},5).to({regX:25.8,scaleX:0.37,scaleY:0.37,x:85.6,y:9},5).wait(1));

        // 图层 1
        this.shape = new createjs.Shape();
        this.shape.graphics.bf(loader.getResult("happy_893_1431411938448"), null, new createjs.Matrix2D(1,0,0,1,-40.5,-90)).s().p("AmUKxIAA1hIMpAAIAAVhg");
        this.shape.setTransform(40.6,90);

        this.timeline.addTween(createjs.Tween.get(this.shape).wait(11));

    }).prototype = p = new createjs.MovieClip();
    p.nominalBounds = new createjs.Rectangle(0,-4,98.7,163);


    (indexLib.happy_301_1431411938419 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层 1
        this.instance = new indexLib.xingxin();
        this.instance.setTransform(16.5,17,1,1,0,0,0,16.5,17);

        this.timeline.addTween(createjs.Tween.get(this.instance).to({scaleX:1.17,scaleY:1.17},6).to({scaleX:1,scaleY:1},6).wait(1));

    }).prototype = p = new createjs.MovieClip();
    p.nominalBounds = new createjs.Rectangle(0,0,33,34);


    (indexLib.happy_287_1431411938422 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层 2
        this.instance = new indexLib.元件1();
        this.instance.setTransform(18.9,18.8,1,1,0,0,0,18.9,18.8);

        this.timeline.addTween(createjs.Tween.get(this.instance).to({scaleX:1.22,scaleY:1.22},6).to({scaleX:1,scaleY:1},6).wait(1));

        // 图层 1
        this.instance_1 = new indexLib.Bitmap4();
        this.instance_1.setTransform(0,41.1);

        this.timeline.addTween(createjs.Tween.get(this.instance_1).wait(13));

    }).prototype = p = new createjs.MovieClip();
    p.nominalBounds = new createjs.Rectangle(0,0,161,299.1);


    (indexLib.fdhfjfgjgk = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层 1
        this.instance = new indexLib.happy_410_1431411938415();
        this.instance.setTransform(238,212,1,1,0,0,0,238,212);

        this.timeline.addTween(createjs.Tween.get(this.instance).wait(34).to({scaleX:1.02,scaleY:0.98,y:217},5).to({scaleX:0.99,scaleY:1.02,y:208},5).to({scaleX:1.02,scaleY:0.98,y:217},4).to({scaleX:0.99,scaleY:1.02,y:208},4).to({regY:212.1,scaleX:1.01,scaleY:0.99,y:214.6},4).to({regY:212,scaleX:1,scaleY:1.01,y:210},4).to({scaleX:1,scaleY:1,y:212},4).wait(36));

    }).prototype = p = new createjs.MovieClip();
    p.nominalBounds = new createjs.Rectangle(0,0,476,424);


    (indexLib.happy_946_1431411938436 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_110 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(createjs.Tween.get(this).wait(110).call(this.frame_110).wait(1));

        // 图层 38
        this.instance = new indexLib.happy_301_1431411938419();
        this.instance.setTransform(574.5,737.1,1,1,0,0,0,16.5,17);
        this.instance._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({x:720.6,y:376.1},5).to({x:714.6,y:389.1},4).wait(48));

        // 图层 2
        this.instance_1 = new indexLib.happy_964_1431411938425();
        this.instance_1.setTransform(281.1,401.1,0.332,0.332,36,0,0,25.7,24.6);
        this.instance_1._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).to({x:202.7,y:161.4},5).to({x:211,y:175},4).wait(56));

        // 图层 3
        this.instance_2 = new indexLib.happy_301_1431411938419();
        this.instance_2.setTransform(626.9,224.1,0.454,0.454,0,0,0,16.5,16.9);
        this.instance_2._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).to({x:665.4,y:151.1},5).to({x:661.9,y:155.6},4).wait(46));

        // 图层 41
        this.instance_3 = new indexLib.happy_807_1431411938422();
        this.instance_3.setTransform(592.6,733.8,0.368,0.368,0,0,0,47.5,79.5);
        this.instance_3._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({scaleX:1.13,scaleY:1.13,x:628.8,y:673.1},5).to({scaleX:1,scaleY:1,x:622.6,y:683.6},4).wait(43));

        // 图层 42
        this.instance_4 = new indexLib.happy_287_1431411938422();
        this.instance_4.setTransform(314.6,736.5,0.118,0.118,0,0,0,80.7,149.5);
        this.instance_4._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_4).wait(52).to({_off:false},0).to({regX:80.5,scaleX:1.07,scaleY:1.06,x:238.1,y:595.6},5).to({scaleX:1,scaleY:1,x:243.6,y:604.6},4).wait(50));

        // 图层 43
        this.instance_5 = new indexLib.happy_331_1431411938423();
        this.instance_5.setTransform(408.1,694.6,0.25,0.25,0,0,0,8,122);
        this.instance_5._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_5).wait(62).to({_off:false},0).to({scaleX:1,scaleY:1.09,x:414.1,y:592.1},5).to({scaleY:1,y:603.1},4).wait(40));

        // 图层 44
        this.instance_6 = new indexLib.happy_740_1431411938423();
        this.instance_6.setTransform(407.1,730.8,0.103,0.103,0,0,0,19.5,100.4);
        this.instance_6._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_6).wait(57).to({_off:false},0).to({regY:100.5,scaleX:1.15,scaleY:1.15,x:386.6,y:625.2},5).to({scaleX:1,scaleY:1,x:389.6,y:640.6},4).wait(45));

        // 图层 1 (mask)
        var mask = new createjs.Shape();
        mask._off = true;
        var mask_graphics_14 = new createjs.Graphics().p("Egj4BIwIuHmjMAAAiK8MBj/AAAMAAACLQQosEaluB1g");

        this.timeline.addTween(createjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:440.1,y:351.6}).wait(97));

        // 图层 54
        this.instance_7 = new indexLib.happy_672_1431411938428();
        this.instance_7.setTransform(58,102,1,1,0,0,0,65,102);
        this.instance_7._off = true;

        this.instance_7.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_7).wait(43).to({_off:false},0).to({x:299,y:776},8).wait(60));

        // 图层 46
        this.instance_8 = new indexLib.happy_133_1431411938424();
        this.instance_8.setTransform(61.5,422,1,1,0,0,0,40.5,42);
        this.instance_8._off = true;

        this.instance_8.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).to({x:263.5,y:805},8).wait(64));

        // 图层 30
        this.instance_9 = new indexLib.happy_833_1431411938427();
        this.instance_9.setTransform(654.5,-303,1,1,0,0,0,112.5,191);
        this.instance_9._off = true;

        this.instance_9.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_9).wait(33).to({_off:false},0).to({x:475.5,y:819},11).wait(67));

        // 图层 49
        this.instance_10 = new indexLib.happy_739_1431411938425();
        this.instance_10.setTransform(85.5,-113,1,1,0,0,0,58.5,47);
        this.instance_10._off = true;

        this.instance_10.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({x:395.5,y:800},8).wait(73));

        // 图层 48
        this.instance_11 = new indexLib.happy_051_1431411938425();
        this.instance_11.setTransform(140,-147.1,1,1,0,0,0,38,46);
        this.instance_11._off = true;

        this.instance_11.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_11).wait(28).to({_off:false},0).to({x:401,y:771},8).wait(75));

        // 图层 51
        this.instance_12 = new indexLib.happy_912_1431411938426();
        this.instance_12.setTransform(100,-148,1,1,0,0,0,23,36);
        this.instance_12._off = true;

        this.instance_12.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_12).wait(25).to({_off:false},0).to({x:372,y:799},8).wait(78));

        // 图层 52
        this.instance_13 = new indexLib.happy_284_1431411938427();
        this.instance_13.setTransform(78.5,348,1,1,0,0,0,31.5,36);
        this.instance_13._off = true;

        this.instance_13.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_13).wait(22).to({_off:false},0).to({x:342.3,y:862.8},8).wait(81));

        // 图层 53
        this.instance_14 = new indexLib.happy_695_1431411938427();
        this.instance_14.setTransform(105,150.5,1,1,0,0,0,28,45.5);
        this.instance_14._off = true;

        this.instance_14.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_14).wait(19).to({_off:false},0).to({x:389,y:861.6},8).wait(84));

        // 图层 55
        this.instance_15 = new indexLib.happy_728_1431411938428();
        this.instance_15.setTransform(776.1,-27,1,1,0,0,0,20,39);
        this.instance_15._off = true;

        this.instance_15.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_15).wait(16).to({_off:false},0).to({x:515,y:859.8},8).wait(87));

        // 图层 57
        this.instance_16 = new indexLib.happy_484_1431411938429();
        this.instance_16.setTransform(852,592.5,1,1,0,0,0,85,81.5);
        this.instance_16._off = true;

        this.instance_16.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_16).wait(14).to({_off:false},0).to({x:627,y:812.5},6).wait(91));

        // 图层 50
        this.instance_17 = new indexLib.happy_132_1431411938426();
        this.instance_17.setTransform(795.1,498.5,1,1,0,0,0,39,34.5);
        this.instance_17._off = true;

        this.instance_17.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_17).wait(16).to({_off:false},0).to({x:605,y:765.5},8).wait(87));

        // 图层 58
        this.instance_18 = new indexLib.happy_213_1431411938430();
        this.instance_18.setTransform(832,-152.2,1,1,0,0,0,88,98);
        this.instance_18._off = true;

        this.instance_18.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_18).wait(18).to({_off:false},0).to({x:556,y:812},8).wait(85));

        // 图层 56
        this.instance_19 = new indexLib.happy_456_1431411938429();
        this.instance_19.setTransform(805.1,287,1,1,0,0,0,29,43);
        this.instance_19._off = true;

        this.instance_19.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_19).wait(20).to({_off:false},0).to({x:531.8,y:859.1},10).wait(81));

        // 图层 59
        this.instance_20 = new indexLib.happy_275_1431411938430();
        this.instance_20.setTransform(42,287,1,1,0,0,0,81,97);
        this.instance_20._off = true;

        this.instance_20.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_20).wait(23).to({_off:false},0).to({x:234,y:810},8).wait(80));

        // 图层 60
        this.instance_21 = new indexLib.happy_900_1431411938431();
        this.instance_21.setTransform(823.6,67.9,1,1,0,0,0,67.5,88);
        this.instance_21._off = true;

        this.instance_21.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_21).wait(25).to({_off:false},0).to({x:545.5,y:742},8).wait(78));

        // 图层 61
        this.instance_22 = new indexLib.happy_998_1431411938431();
        this.instance_22.setTransform(310.5,-135.1,1,1,0,0,0,29.5,34);
        this.instance_22._off = true;

        this.instance_22.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_22).wait(28).to({_off:false},0).to({x:424.5,y:741},8).wait(75));

        // 图层 62
        this.instance_23 = new indexLib.happy_815_1431411938432();
        this.instance_23.setTransform(157,-214.6,1,1,0,0,0,110,113.5);
        this.instance_23._off = true;

        this.instance_23.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_23).wait(32).to({_off:false},0).to({x:391,y:798.5},8).wait(71));

        // 图层 63
        this.instance_24 = new indexLib.happy_518_1431411938432();
        this.instance_24.setTransform(787.1,-130.6,1,1,0,0,0,31,62.5);
        this.instance_24._off = true;

        this.instance_24.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_24).wait(34).to({_off:false},0).to({x:523,y:716.5},8).wait(69));

        // 图层 64
        this.instance_25 = new indexLib.happy_838_1431411938433();
        this.instance_25.setTransform(662,-167.5,1,1,0,0,0,29,55.5);
        this.instance_25._off = true;

        this.instance_25.mask = mask;

        this.timeline.addTween(createjs.Tween.get(this.instance_25).wait(37).to({_off:false},0).to({x:507,y:731.5},8).wait(66));

        // Layer 4
        this.instance_26 = new indexLib.happy_345_1431411938434();
        this.instance_26.setTransform(440,883.5,1,1,0,0,0,249,144.5);

        this.timeline.addTween(createjs.Tween.get(this.instance_26).wait(111));

    }).prototype = p = new createjs.MovieClip();
    p.nominalBounds = new createjs.Rectangle(191,739,498,289);


    (indexLib.shouye = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_140 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(createjs.Tween.get(this).wait(140).call(this.frame_140).wait(1));

        this.instance = new indexLib.happy_711_1431411938417();
        this.instance.setTransform(320,616,1,1,0,0,0,320,75);
        this.instance.alpha = 0;
        this.instance._off = true;
        this.instance.on("click", function() {
            //开始游戏
            $(".index.wrapper").hide();
            $(".option.wrapper").show();
        });

        this.timeline.addTween(createjs.Tween.get(this.instance).wait(98).to({_off:false},0).to({alpha:1},11).wait(32));

        // 任性买买买
        this.instance_1 = new indexLib.happy_001_1431411938417();
        this.instance_1.setTransform(695,75,1,1,0,0,0,55,39);
        this.instance_1._off = true;

        this.instance_1.on("click", function() {
            //任性买买买
            
        });

        this.timeline.addTween(createjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({x:480},8).to({x:495},7).wait(7));

        // 我的奖品
        this.instance_2 = new indexLib.happy_553_1431411938417();
        this.instance_2.setTransform(440, window.innerHeight - 45,1,1,0,0,0,120,30);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;
        this.instance_2.on("click", function() {
            //我的奖品
            initMine();
        });

        this.timeline.addTween(createjs.Tween.get(this.instance_2).wait(114).to({_off:false},0).to({x:470,alpha:1},12,createjs.Ease.get(1)).wait(15));

        // 查看奖品
        this.instance_3 = new indexLib.happy_315_1431411938418();
        this.instance_3.setTransform(200, window.innerHeight - 45,1,1,0,0,0,120,30);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;

        this.instance_3.on("click", function() {
            //查看奖品
            initView();
        });

        this.timeline.addTween(createjs.Tween.get(this.instance_3).wait(114).to({_off:false},0).to({x:170,alpha:1},12,createjs.Ease.get(1)).wait(15));

        // 图层 37
        this.instance_4 = new indexLib.happy_232_1431411938418();
        this.instance_4.setTransform(320, window.innerHeight + 45,1,1,0,0,0,320,45);
        this.instance_4._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_4).wait(106).to({_off:false},0).to({scaleY:1.11,y:990},8).to({scaleY:1,y: window.innerHeight - 45},7).wait(20));

        // 矢量智能对象 拷贝 8
        this.instance_5 = new indexLib.happy_410_1431411938415();
        this.instance_5.setTransform(320,-322,1,1,0,0,0,238,212);
        this.instance_5._off = true;

        this.instance_6 = new indexLib.fdhfjfgjgk();
        this.instance_6.setTransform(320,278,1,1,0,0,0,238,212);

        this.timeline.addTween(createjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},68).to({state:[{t:this.instance_5}]},11).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},42).wait(1));
        this.timeline.addTween(createjs.Tween.get(this.instance_5).wait(68).to({_off:false},0).to({scaleX:1.02,scaleY:0.97,y:293.5},11,createjs.Ease.get(1)).to({scaleX:0.98,scaleY:1.02,y:264.5},5).to({scaleX:1.02,scaleY:0.97,y:289.5},5).to({scaleX:1,scaleY:1,y:275},5).to({y:278},4).to({_off:true},42).wait(1));

        // loading
        this.instance_7 = new indexLib.happy_946_1431411938436();
        this.instance_7.setTransform(304,840.5,1,1,0,0,0,424,534.5);
        this.instance_7._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({y:538.5},8).to({y:546.5},5).wait(118));

        // 60076_Front_11 拷贝
        this.instance_8 = new indexLib.happy_206_1431411938434();
        this.instance_8.setTransform(611.5,window.innerHeight + 80.5,1,1,0,0,0,116.5,78.5);
        this.instance_8._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({y:window.innerHeight - 47.5},7).to({y:window.innerHeight - 37.5},6).wait(125));

        // 60076_Front_11
        this.instance_9 = new indexLib.happy_412_1431411938435();
        this.instance_9.setTransform(-5,window.innerHeight + 80.5,1,1,0,0,0,115,81.5);
        this.instance_9._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({y:window.innerHeight - 61.5},7).to({y:window.innerHeight - 41.5},6).wait(125));

    }).prototype = p = new createjs.MovieClip();
    p.nominalBounds = new createjs.Rectangle(0,0,640,1040);


    // stage content:
    (indexLib.init = function() {
        this.initialize();

        // 矢量智能对象 拷贝 8
        this.instance = new indexLib.shouye();
        this.instance.setTransform(424,589.5,1,1,0,0,0,424,589.5);

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(320,520,640,1040);
}