module.exports=(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"game_atlas_", frames: [[0,0,640,1040]]},
		{name:"game_atlas_2", frames: [[0,0,640,1040]]},
		{name:"game_atlas_3", frames: [[0,0,640,1040]]},
		{name:"game_atlas_4", frames: [[0,0,640,1040]]},
		{name:"game_atlas_5", frames: [[0,0,585,1019]]},
		{name:"game_atlas_6", frames: [[0,0,585,1019]]},
		{name:"game_atlas_7", frames: [[0,0,640,865]]},
		{name:"game_atlas_8", frames: [[0,0,640,865]]},
		{name:"game_atlas_9", frames: [[0,0,556,893]]},
		{name:"game_atlas_10", frames: [[0,0,518,882]]},
		{name:"game_atlas_11", frames: [[0,0,298,848]]},
		{name:"game_atlas_12", frames: [[0,426,540,393],[0,0,511,424]]},
		{name:"game_atlas_13", frames: [[0,733,415,110],[0,0,528,370],[0,372,509,359],[0,845,415,110],[417,733,183,190]]},
		{name:"game_atlas_14", frames: [[368,572,90,90],[346,247,90,90],[184,492,90,90],[532,554,90,90],[276,572,90,90],[92,492,90,90],[137,252,29,37],[385,754,53,68],[233,677,28,36],[366,469,81,101],[182,832,38,56],[610,78,17,17],[73,319,15,15],[516,97,69,69],[86,752,241,17],[587,97,53,68],[0,192,135,125],[86,841,39,37],[233,715,30,31],[0,492,90,90],[182,584,88,91],[361,824,39,56],[92,584,88,91],[610,0,28,37],[184,397,89,93],[147,677,84,73],[595,167,41,57],[578,247,55,67],[629,78,4,17],[0,0,174,190],[0,731,84,73],[441,374,90,93],[516,0,92,95],[610,739,28,36],[46,806,38,57],[176,0,168,168],[610,39,28,37],[19,319,16,16],[402,852,38,32],[366,397,69,69],[532,469,98,83],[0,863,27,37],[0,806,44,55],[482,852,28,36],[37,319,16,16],[449,469,81,101],[585,807,40,57],[542,807,41,57],[634,226,4,17],[86,771,53,68],[533,374,90,93],[460,572,54,68],[0,584,90,90],[329,754,54,67],[442,852,38,32],[90,319,15,15],[275,397,89,93],[440,784,51,66],[441,247,135,125],[366,664,88,88],[512,852,28,36],[319,823,40,57],[137,291,28,37],[222,841,67,25],[595,226,18,18],[272,664,92,85],[346,170,247,75],[291,841,21,36],[615,226,17,17],[493,784,47,66],[0,677,145,52],[107,319,15,15],[346,0,168,168],[0,340,439,55],[578,316,51,51],[276,492,82,75],[176,170,168,168],[460,646,88,91],[0,397,90,93],[92,397,90,93],[141,771,60,59],[456,739,95,43],[0,319,17,17],[550,646,88,91],[625,386,15,15],[55,319,16,16],[265,771,52,68],[137,192,32,58],[141,832,39,55],[553,739,55,66],[625,369,15,15],[203,771,60,59]]}
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



(lib._1 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.element_010_1500953638883_312 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.element_015_1500953638904_323 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.element_021_1500953638945_343 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.element_036_1500953639102_390 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.element_038_1500953639050_380 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.element_045_1500953638926_334 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.element_048_1500953638872_306 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.element_053_1500953638937_339 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.element_059_1500953639206_405 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.element_071_1500953638929_335 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.element_073_1500953638931_336 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.element_081_1500953639137_396 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.element_085_1500953639315_419 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.element_098_1500953640726_480 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.element_105_1500953640179_462 = function() {
	this.spriteSheet = ss["game_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_115_1500953640441_471 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.element_123_1500953639066_381 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.element_125_1500953639030_375 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.element_139_1500953638921_332 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.element_146_1500953639708_443 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.element_152_1500953638996_364 = function() {
	this.spriteSheet = ss["game_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_195_1500953639993_456 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.element_198_1500953639476_432 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.element_203_1500953638916_329 = function() {
	this.spriteSheet = ss["game_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_204_1500953639858_450 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.element_228_1500953638863_301 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.element_234_1500953639342_421 = function() {
	this.spriteSheet = ss["game_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_245_1500953638973_354 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.element_250_1500953639159_399 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.element_254_1500953638915_328 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.element_267_1500953639572_437 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.element_270_1500953639121_392 = function() {
	this.initialize(img.element_270_1500953639121_392);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,690,713);


(lib.element_298_1500953639171_400 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.element_299_1500953640112_460 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.element_301_1500953639293_417 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.element_303_1500953638895_318 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.element_304_1500953639650_440 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.element_308_1500953639373_423 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.element_322_1500953640668_478 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.element_335_1500953639026_374 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.element_336_1500953639091_388 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.element_385_1500953639394_424 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.element_426_1500953639242_408 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.element_426_1500953639276_413 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.element_427_1500953639184_401 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.element_427_1500953640497_472 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.element_431_1500953639681_441 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.element_437_1500953638943_341 = function() {
	this.spriteSheet = ss["game_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.element_446_1500953640592_475 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.element_454_1500953639602_438 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.element_467_1500953640037_457 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.element_468_1500953640152_461 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.element_480_1500953640085_459 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.element_483_1500953639024_372 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.element_499_1500953639747_444 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.element_502_1500953639155_398 = function() {
	this.spriteSheet = ss["game_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.element_506_1500953639077_382 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.element_508_1500953639025_373 = function() {
	this.spriteSheet = ss["game_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_509_1500953638995_363 = function() {
	this.spriteSheet = ss["game_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.element_543_1500953639119_391 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.element_546_1500953639953_453 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.element_549_1500953639419_426 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.element_555_1500953639440_428 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.element_564_1500953639049_379 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.element_577_1500953638873_307 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.element_579_1500953639011_367 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.element_587_1500953639272_411 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.element_591_1500953639975_455 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.element_594_1500953640569_474 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.element_606_1500953638993_362 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.element_610_1500953640629_476 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.element_621_1500953638976_355 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.element_623_1500953638969_352 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.element_631_1500953638906_324 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.element_641_1500953638934_337 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.element_653_1500953640317_465 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.element_661_1500953638788_298 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.element_690_1500953638900_321 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.element_691_1500953639085_385 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.element_707_1500953638880_310 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.element_718_1500953640652_477 = function() {
	this.spriteSheet = ss["game_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_725_1500953638979_357 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.element_741_1500953639089_387 = function() {
	this.spriteSheet = ss["game_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_762_1500953639240_407 = function() {
	this.spriteSheet = ss["game_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_765_1500953638991_361 = function() {
	this.spriteSheet = ss["game_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_770_1500953639899_451 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.element_797_1500953638870_305 = function() {
	this.spriteSheet = ss["game_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_802_1500953639021_370 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.element_815_1500953639312_418 = function() {
	this.spriteSheet = ss["game_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.element_827_1500953640433_470 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.element_827_1500953640714_479 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.element_829_1500953639100_389 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.element_840_1500953639769_445 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.element_868_1500953638935_338 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.element_892_1500953638924_333 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.element_907_1500953638919_331 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.element_914_1500953639706_442 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.element_939_1500953639001_365 = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_948_1500953638951_344 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.element_954_1500953639041_376 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.element_958_1500953638911_326 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.element_979_1500953638977_356 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.element_991_1500953638859_300 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.矢量智能对象 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.矢量智能对象拷贝 = function() {
	this.spriteSheet = ss["game_atlas_4"];
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


(lib.Block6 = function(mode,startPosition,loop) {
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
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(2,-5.5);

	this.instance_1 = new lib.element_098_1500953640726_480();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-5.5,90,90);


(lib.element_948_1500953638776_267 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_270_1500953639121_392();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_948_1500953638776_267, new cjs.Rectangle(0,0,690,713), null);


(lib.element_948_1500953638738_98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_509_1500953638995_363();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_948_1500953638738_98, new cjs.Rectangle(0,0,183,190), null);


(lib.element_944_1500953638739_101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/BRQMAAAiifMBj/AAAMAAACifg");
	this.shape.setTransform(320,520);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_944_1500953638739_101, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_883_1500953638781_292 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD729").s().p("AgqEiQgRh4AAiqQAAipARh5QASh4AYAAQAZAAASB4QARB5AACpQAACqgRB4QgSB4gZAAQgYAAgSh4g");
	this.shape.setTransform(6,41.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_883_1500953638781_292, new cjs.Rectangle(0,0,12,82.1), null);


(lib.element_879_1500953638734_82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD729").s().p("AgbBxQgMguAAhDQAAhCAMguQAMgvAPAAQARAAALAvQAMAuAABCQAABDgMAuQgLAvgRAAQgPAAgMgvg");
	this.shape.setTransform(4,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_879_1500953638734_82, new cjs.Rectangle(0,0,8,32), null);


(lib.element_852_1500953638780_290 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_502_1500953639155_398();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,415,110);


(lib.element_809_1500953638757_175 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Am3G4IAAtvINvAAIAANvg");
	this.shape.setTransform(44,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_809_1500953638757_175, new cjs.Rectangle(0,0,88,88), null);


(lib.element_790_1500953638738_97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD729").s().p("AgbBxQgMguAAhDQAAhCAMguQAMgvAPAAQARAAALAvQAMAuAABCQAABDgMAuQgLAvgRAAQgPAAgMgvg");
	this.shape.setTransform(4,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_790_1500953638738_97, new cjs.Rectangle(0,0,8,32), null);


(lib.element_932_1500953638744_128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_691_1500953639085_385();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_932_1500953638744_128, new cjs.Rectangle(0,0,82,75), null);


(lib.element_880_1500953638743_125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_939_1500953639001_365();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_880_1500953638743_125, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_874_1500953638743_123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_250_1500953639159_399();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_874_1500953638743_123, new cjs.Rectangle(0,0,84,73), null);


(lib.element_611_1500953638744_130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_195_1500953639993_456();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_611_1500953638744_130, new cjs.Rectangle(0,0,84,73), null);


(lib.element_337_1500953638744_129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_741_1500953639089_387();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_337_1500953638744_129, new cjs.Rectangle(0,0,640,865), null);


(lib.element_303_1500953638743_126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_549_1500953639419_426();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_303_1500953638743_126, new cjs.Rectangle(0,0,135,125), null);


(lib.element_452_1500953638740_105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_301_1500953639293_417();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_452_1500953638740_105, new cjs.Rectangle(0,0,168,168), null);


(lib.element_963_1500953638779_286 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_426_1500953639276_413();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_963_1500953638779_286, new cjs.Rectangle(0,0,16,16), null);


(lib.element_905_1500953638778_277 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_506_1500953639077_382();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_905_1500953638778_277, new cjs.Rectangle(0,0,15,15), null);


(lib.element_823_1500953638779_282 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_892_1500953638924_333();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_823_1500953638779_282, new cjs.Rectangle(0,0,16,16), null);


(lib.element_806_1500953638779_283 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_048_1500953638872_306();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_806_1500953638779_283, new cjs.Rectangle(0,0,15,15), null);


(lib.element_798_1500953638778_281 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_868_1500953638935_338();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_798_1500953638778_281, new cjs.Rectangle(0,0,15,15), null);


(lib.element_764_1500953638780_288 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_304_1500953639650_440();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_764_1500953638780_288, new cjs.Rectangle(0,0,16,16), null);


(lib.element_486_1500953638780_287 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_591_1500953639975_455();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_486_1500953638780_287, new cjs.Rectangle(0,0,18,18), null);


(lib.element_436_1500953638780_289 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_621_1500953638976_355();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_436_1500953638780_289, new cjs.Rectangle(0,0,17,17), null);


(lib.element_384_1500953638778_279 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_045_1500953638926_334();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_384_1500953638778_279, new cjs.Rectangle(0,0,17,17), null);


(lib.element_173_1500953638778_280 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_641_1500953638934_337();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_173_1500953638778_280, new cjs.Rectangle(0,0,15,15), null);


(lib.element_134_1500953638779_285 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_979_1500953638977_356();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_134_1500953638779_285, new cjs.Rectangle(0,0,15,15), null);


(lib.element_066_1500953638778_278 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_829_1500953639100_389();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_066_1500953638778_278, new cjs.Rectangle(0,0,17,17), null);


(lib.element_704_1500953638739_103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_059_1500953639206_405();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_704_1500953638739_103, new cjs.Rectangle(0,0,241,17), null);


(lib.element_656_1500953638730_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_245_1500953638973_354();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_656_1500953638730_64, new cjs.Rectangle(0,0,174,190), null);


(lib.element_631_1500953638775_264 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD729").s().p("AgbBxQgMguAAhDQAAhCAMguQAMgvAPAAQARAAALAvQAMAuAABCQAABDgMAuQgLAvgRAAQgPAAgMgvg");
	this.shape.setTransform(4,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_631_1500953638775_264, new cjs.Rectangle(0,0,8,32), null);


(lib.element_588_1500953638734_83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_991_1500953638859_300();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,59);


(lib.element_512_1500953638740_109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_053_1500953638937_339();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,69);


(lib.element_484_1500953638744_132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_322_1500953640668_478();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,69);


(lib.element_029_1500953638788_296 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_827_1500953640714_479();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_029_1500953638788_296, new cjs.Rectangle(0,0,95,43), null);


(lib.element_390_1500953638731_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_446_1500953640592_475();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_390_1500953638731_65, new cjs.Rectangle(0,0,4,17), null);


(lib.element_967_1500953638755_164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_587_1500953639272_411();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_967_1500953638755_164, new cjs.Rectangle(0,0,67,25), null);


(lib.element_839_1500953638762_207 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_508_1500953639025_373();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_839_1500953638762_207, new cjs.Rectangle(0,0,585,1019), null);


(lib.element_107_1500953638762_208 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_105_1500953640179_462();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_107_1500953638762_208, new cjs.Rectangle(0,0,585,1019), null);


(lib.element_094_1500953638762_209 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_762_1500953639240_407();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_094_1500953638762_209, new cjs.Rectangle(0,0,298,848), null);


(lib.element_094_1500953638762_204 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_718_1500953640652_477();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_094_1500953638762_204, new cjs.Rectangle(0,0,518,882), null);


(lib.element_062_1500953638762_205 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_797_1500953638870_305();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_062_1500953638762_205, new cjs.Rectangle(0,0,556,893), null);


(lib.element_257_1500953638754_163 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_690_1500953638900_321();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_257_1500953638754_163, new cjs.Rectangle(0,0,51,51), null);


(lib.element_104_1500953638771_252 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_606_1500953638993_362();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_104_1500953638771_252, new cjs.Rectangle(0,0,247,75), null);


(lib.element_822_1500953638764_218 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_623_1500953638969_352();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_822_1500953638764_218, new cjs.Rectangle(0,0,47,66), null);


(lib.element_811_1500953638764_219 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_454_1500953639602_438();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_811_1500953638764_219, new cjs.Rectangle(0,0,53,68), null);


(lib.element_726_1500953638763_214 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_468_1500953640152_461();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_726_1500953638763_214, new cjs.Rectangle(0,0,54,68), null);


(lib.element_486_1500953638764_220 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_015_1500953638904_323();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_486_1500953638764_220, new cjs.Rectangle(0,0,53,68), null);


(lib.element_368_1500953638764_217 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_483_1500953639024_372();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_368_1500953638764_217, new cjs.Rectangle(0,0,54,67), null);


(lib.element_317_1500953638765_222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_071_1500953638929_335();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_317_1500953638765_222, new cjs.Rectangle(0,0,53,68), null);


(lib.element_170_1500953638764_216 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_958_1500953638911_326();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_170_1500953638764_216, new cjs.Rectangle(0,0,55,66), null);


(lib.element_114_1500953638763_212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_204_1500953639858_450();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_114_1500953638763_212, new cjs.Rectangle(0,0,55,67), null);


(lib.element_086_1500953638763_215 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_907_1500953638919_331();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_086_1500953638763_215, new cjs.Rectangle(0,0,52,68), null);


(lib.element_077_1500953638765_221 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_546_1500953639953_453();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_077_1500953638765_221, new cjs.Rectangle(0,0,51,66), null);


(lib.element_864_1500953638770_243 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_021_1500953638945_343();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_864_1500953638770_243, new cjs.Rectangle(0,0,28,36), null);


(lib.element_546_1500953638770_245 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_303_1500953638895_318();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_546_1500953638770_245, new cjs.Rectangle(0,0,28,37), null);


(lib.element_431_1500953638769_241 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_010_1500953638883_312();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_431_1500953638769_241, new cjs.Rectangle(0,0,29,37), null);


(lib.element_429_1500953638769_240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_336_1500953639091_388();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_429_1500953638769_240, new cjs.Rectangle(0,0,27,37), null);


(lib.element_422_1500953638769_237 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_139_1500953638921_332();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_422_1500953638769_237, new cjs.Rectangle(0,0,28,37), null);


(lib.element_321_1500953638770_247 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_564_1500953639049_379();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_321_1500953638770_247, new cjs.Rectangle(0,0,28,36), null);


(lib.element_149_1500953638770_246 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_426_1500953639242_408();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_149_1500953638770_246, new cjs.Rectangle(0,0,28,36), null);


(lib.element_114_1500953638770_244 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_610_1500953640629_476();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_114_1500953638770_244, new cjs.Rectangle(0,0,21,36), null);


(lib.element_103_1500953638769_238 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_579_1500953639011_367();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_103_1500953638769_238, new cjs.Rectangle(0,0,28,37), null);


(lib.element_039_1500953638771_248 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_298_1500953639171_400();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_039_1500953638771_248, new cjs.Rectangle(0,0,28,36), null);


(lib.element_283_1500953638771_249 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_081_1500953639137_396();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_283_1500953638771_249, new cjs.Rectangle(0,0,39,37), null);


(lib.element_262_1500953638771_250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_085_1500953639315_419();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_262_1500953638771_250, new cjs.Rectangle(0,0,30,31), null);


(lib.element_340_1500953638780_291 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/BRQMAAAiifMBj/AAAMAAACifg");
	this.shape.setTransform(320,520);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_340_1500953638780_291, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_382_1500953638776_269 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_036_1500953639102_390();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_382_1500953638776_269, new cjs.Rectangle(0,0,81,101), null);


(lib.element_222_1500953638775_265 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_707_1500953638880_310();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_222_1500953638775_265, new cjs.Rectangle(0,0,168,168), null);


(lib.element_299_1500953638773_260 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_827_1500953640433_470();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,59);


(lib.element_571_1500953638742_118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_948_1500953638951_344();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_571_1500953638742_118, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_417_1500953638742_119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_073_1500953638931_336();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_417_1500953638742_119, new cjs.Rectangle(0,0,135,125), null);


(lib.element_175_1500953638742_121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_203_1500953638916_329();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_175_1500953638742_121, new cjs.Rectangle(0,0,640,865), null);


(lib.element_217_1500953638776_271 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_308_1500953639373_423();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,32);


(lib.element_197_1500953638749_149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_499_1500953639747_444();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,32);


(lib.element_291_1500953638740_110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_653_1500953640317_465();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_291_1500953638740_110, new cjs.Rectangle(0,0,168,168), null);


(lib.element_915_1500953638732_71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_123_1500953639066_381();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_915_1500953638732_71, new cjs.Rectangle(0,0,39,56), null);


(lib.element_849_1500953638732_73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_427_1500953640497_472();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_849_1500953638732_73, new cjs.Rectangle(0,0,40,57), null);


(lib.element_610_1500953638732_75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_431_1500953639681_441();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_610_1500953638732_75, new cjs.Rectangle(0,0,41,57), null);


(lib.element_601_1500953638731_69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_577_1500953638873_307();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_601_1500953638731_69, new cjs.Rectangle(0,0,40,57), null);


(lib.element_564_1500953638731_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_954_1500953639041_376();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_564_1500953638731_66, new cjs.Rectangle(0,0,39,55), null);


(lib.element_420_1500953638731_68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_299_1500953640112_460();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_420_1500953638731_68, new cjs.Rectangle(0,0,38,57), null);


(lib.element_339_1500953638732_72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_385_1500953639394_424();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_339_1500953638732_72, new cjs.Rectangle(0,0,44,55), null);


(lib.element_089_1500953638732_70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_198_1500953639476_432();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_089_1500953638732_70, new cjs.Rectangle(0,0,41,57), null);


(lib.element_068_1500953638733_76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_038_1500953639050_380();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_068_1500953638733_76, new cjs.Rectangle(0,0,38,56), null);


(lib.element_499_1500953638733_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_267_1500953639572_437();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_499_1500953638733_78, new cjs.Rectangle(0,0,92,95), null);


(lib.element_327_1500953638733_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_770_1500953639899_451();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_327_1500953638733_79, new cjs.Rectangle(0,0,90,93), null);


(lib.element_197_1500953638733_81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_802_1500953639021_370();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_197_1500953638733_81, new cjs.Rectangle(0,0,90,93), null);


(lib.element_099_1500953638733_80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_543_1500953639119_391();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_099_1500953638733_80, new cjs.Rectangle(0,0,89,93), null);


(lib.element_802_1500953638737_94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_254_1500953638915_328();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_802_1500953638737_94, new cjs.Rectangle(0,0,90,93), null);


(lib.element_747_1500953638738_96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_467_1500953640037_457();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_747_1500953638738_96, new cjs.Rectangle(0,0,90,93), null);


(lib.element_289_1500953638737_95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_146_1500953639708_443();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_289_1500953638737_95, new cjs.Rectangle(0,0,89,93), null);


(lib.Block5 = function(mode,startPosition,loop) {
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

	// 图层 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.instance_1 = new lib.element_480_1500953640085_459();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.element_020_1500953638734_84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_228_1500953638863_301();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_020_1500953638734_84, new cjs.Rectangle(0,0,4,17), null);


(lib.element_017_1500953638749_150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_815_1500953639312_418();
	this.instance.parent = this;
	this.instance.setTransform(42.4,25.5);

	this.instance_1 = new lib.element_765_1500953638991_361();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.6,33.6);

	this.instance_2 = new lib.element_437_1500953638943_341();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.8,42.7);

	this.instance_3 = new lib.element_234_1500953639342_421();
	this.instance_3.parent = this;
	this.instance_3.setTransform(50.9,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.4,25.5,511,424);


(lib.element_010_1500953638740_107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_152_1500953638996_364();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,415,110);


(lib.element_006_1500953638736_88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Am3HHIAAuNINvAAIAAONg");
	this.shape.setTransform(44,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_006_1500953638736_88, new cjs.Rectangle(0,0,88,91), null);


(lib.矢量智能对象拷贝_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.矢量智能对象拷贝();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.矢量智能对象拷贝_1, new cjs.Rectangle(0,0,640,1040), null);


(lib.矢量智能对象_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.矢量智能对象();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.矢量智能对象_1, new cjs.Rectangle(0,0,640,1040), null);


(lib.element_942_1500953638753_154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_631_1500953638775_264();
	this.instance.parent = this;
	this.instance.setTransform(4,16,0.462,1,0,0,0,4,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,-1,9,38);


(lib.Block3 = function(mode,startPosition,loop) {
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

	// 图层 2
	this.instance = new lib.element_006_1500953638736_88();
	this.instance.parent = this;
	this.instance.setTransform(44,45.5,1,1,0,0,0,44,45.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层 1
	this.instance_1 = new lib._5();
	this.instance_1.parent = this;

	this.instance_2 = new lib.element_840_1500953639769_445();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,91);


(lib.element_913_1500953638744_131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_217_1500953638776_271("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19,16,1,1,0,0,0,19,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:27},6).to({x:19},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,32);


(lib.element_510_1500953638743_124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_299_1500953638773_260("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30,29.5,1,1,0,0,0,30,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8},6).to({scaleX:1,scaleY:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,59);


(lib.element_399_1500953638743_127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_010_1500953638740_107("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(207.5,55,1,1,0,0,0,207.5,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_399_1500953638743_127, new cjs.Rectangle(0,0,415,110), null);


(lib.element_772_1500953638775_266 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_883_1500953638781_292();
	this.instance.parent = this;
	this.instance.setTransform(225.1,225.1,1,1,-45,0,0,6,225.1);

	this.instance_1 = new lib.element_883_1500953638781_292();
	this.instance_1.parent = this;
	this.instance_1.setTransform(225.1,225.1,1,1,-90,0,0,6.1,225.1);

	this.instance_2 = new lib.element_883_1500953638781_292();
	this.instance_2.parent = this;
	this.instance_2.setTransform(225.2,225,1,1,-135,0,0,6.1,225.2);

	this.instance_3 = new lib.element_883_1500953638781_292();
	this.instance_3.parent = this;
	this.instance_3.setTransform(225.2,225,1,1,180,0,0,6,225.2);

	this.instance_4 = new lib.element_883_1500953638781_292();
	this.instance_4.parent = this;
	this.instance_4.setTransform(225.2,225,1,1,135,0,0,6,225.2);

	this.instance_5 = new lib.element_883_1500953638781_292();
	this.instance_5.parent = this;
	this.instance_5.setTransform(225.1,225,1,1,90,0,0,6,225.2);

	this.instance_6 = new lib.element_883_1500953638781_292();
	this.instance_6.parent = this;
	this.instance_6.setTransform(225.1,225.2,1,1,45,0,0,6,225.2);

	this.instance_7 = new lib.element_883_1500953638781_292();
	this.instance_7.parent = this;
	this.instance_7.setTransform(225.2,225.1,1,1,0,0,0,6,225.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_772_1500953638775_266, new cjs.Rectangle(0,0,450.3,450.2), null);


(lib.element_737_1500953638737_93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_879_1500953638734_82();
	this.instance.parent = this;
	this.instance.setTransform(4,16,0.462,1,0,0,0,4,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,-1,9,38);


(lib.element_718_1500953638753_156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_942_1500953638753_154("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(49.8,50.1,1,1,-45,0,0,4.1,49.8);

	this.instance_1 = new lib.element_942_1500953638753_154("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.8,50.1,1,1,-90,0,0,4.1,49.8);

	this.instance_2 = new lib.element_942_1500953638753_154("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.9,50,1,1,-135,0,0,4.1,49.9);

	this.instance_3 = new lib.element_942_1500953638753_154("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(49.9,50,1,1,180,0,0,4,49.9);

	this.instance_4 = new lib.element_942_1500953638753_154("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(49.8,50,1,1,135,0,0,4,49.9);

	this.instance_5 = new lib.element_942_1500953638753_154("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(49.7,50,1,1,90,0,0,4,50);

	this.instance_6 = new lib.element_942_1500953638753_154("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(49.8,50,1,1,45,0,0,4,50);

	this.instance_7 = new lib.element_942_1500953638753_154("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(49.8,50,1,1,0,0,0,4,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_718_1500953638753_156, new cjs.Rectangle(-1,-1,105.7,105.9), null);


(lib.element_817_1500953638779_284 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 15
	this.instance = new lib.element_452_1500953638740_105();
	this.instance.parent = this;
	this.instance.setTransform(50.5,59.6,0.099,0.099,0,0,0,84,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.79,scaleY:0.79},9).to({regY:83.9,scaleX:1.07,scaleY:1.07,y:59.5,alpha:0},3).to({_off:true},1).wait(1));

	// Layer 14
	this.instance_1 = new lib.element_384_1500953638778_279();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.7,66.6,0.225,0.225,0,0,0,8.7,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:8.5,regY:8.5,scaleX:1,scaleY:1,x:97.4,y:88},5,cjs.Ease.get(-1)).to({_off:true},1).wait(8));

	// 图层 44
	this.instance_2 = new lib.element_066_1500953638778_278();
	this.instance_2.parent = this;
	this.instance_2.setTransform(38.9,55.3,0.225,0.225,0,0,0,8.4,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:8.5,regY:8.5,scaleX:1,scaleY:1,x:0.5,y:38},6,cjs.Ease.get(-1)).to({_off:true},1).wait(7));

	// 图层 45
	this.instance_3 = new lib.element_486_1500953638780_287();
	this.instance_3.parent = this;
	this.instance_3.setTransform(55.2,49.2,0.225,0.225,0,0,0,9.1,8.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:9,regY:9,scaleX:1,scaleY:1,x:72.8,y:10.7},8,cjs.Ease.get(-1)).to({_off:true},1).wait(5));

	// 图层 46
	this.instance_4 = new lib.element_436_1500953638780_289();
	this.instance_4.parent = this;
	this.instance_4.setTransform(50.3,72.4,0.225,0.225,0,0,0,8.4,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:8.5,regY:8.5,scaleX:1,scaleY:1,x:51.2,y:114},5,cjs.Ease.get(-1)).to({_off:true},1).wait(8));

	// 图层 47
	this.instance_5 = new lib.element_798_1500953638778_281();
	this.instance_5.parent = this;
	this.instance_5.setTransform(40.6,68,0.225,0.225,0,0,0,7.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,x:8.2,y:94.2},9,cjs.Ease.get(-1)).to({_off:true},1).wait(4));

	// 图层 48
	this.instance_6 = new lib.element_134_1500953638779_285();
	this.instance_6.parent = this;
	this.instance_6.setTransform(60.4,53.8,0.225,0.225,0,0,0,7.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:7.5,scaleX:1,scaleY:1,x:96.1,y:31.4},5,cjs.Ease.get(-1)).to({_off:true},1).wait(8));

	// 图层 49
	this.instance_7 = new lib.element_173_1500953638778_280();
	this.instance_7.parent = this;
	this.instance_7.setTransform(62.1,58.8,0.225,0.225,0,0,0,7.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:7.5,scaleX:1,scaleY:1,x:103.8,y:53.5},7,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// 图层 50
	this.instance_8 = new lib.element_905_1500953638778_277();
	this.instance_8.parent = this;
	this.instance_8.setTransform(42.2,51,0.225,0.225,0,0,0,7.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:7.5,scaleX:1,scaleY:1,x:15,y:18.8},6,cjs.Ease.get(-1)).to({_off:true},1).wait(7));

	// 图层 51
	this.instance_9 = new lib.element_806_1500953638779_283();
	this.instance_9.parent = this;
	this.instance_9.setTransform(44.3,71,0.225,0.225,0,0,0,7.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:7.5,scaleX:1,scaleY:1,x:24.7,y:107.8},9,cjs.Ease.get(-1)).to({_off:true},1).wait(4));

	// 图层 52
	this.instance_10 = new lib.element_823_1500953638779_282();
	this.instance_10.parent = this;
	this.instance_10.setTransform(38,62.3,0.225,0.225,0,0,0,8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1,scaleY:1,x:-3.3,y:68.8},6,cjs.Ease.get(-1)).to({_off:true},1).wait(7));

	// 图层 53
	this.instance_11 = new lib.element_963_1500953638779_286();
	this.instance_11.parent = this;
	this.instance_11.setTransform(57,70.3,0.225,0.225,0,0,0,8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1,scaleY:1,x:81.1,y:104.3},5,cjs.Ease.get(-1)).to({_off:true},1).wait(8));

	// 图层 54
	this.instance_12 = new lib.element_764_1500953638780_288();
	this.instance_12.parent = this;
	this.instance_12.setTransform(48.7,48.2,0.225,0.225,0,0,0,8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1,scaleY:1,x:44.1,y:6.2},7,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.2,46.4,27.7,28);


(lib.element_152_1500953638777_272 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.element_017_1500953638749_150("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.4,113.8,1,1.2,0,0,0,17.3,49.3);
	this.instance.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// Layer 1
	this.instance_1 = new lib.element_948_1500953638776_267();
	this.instance_1.parent = this;
	this.instance_1.setTransform(329,558.6,1,1,0,0,0,329,558.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:329.1,scaleX:0.96,scaleY:0.99,x:329.1},3).to({regX:329,scaleX:1,scaleY:1,x:329},3).to({regX:329.1,scaleX:0.96,scaleY:0.99,x:329.1},3).to({regX:329,scaleX:1,scaleY:1,x:329},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,690,713);


(lib.element_804_1500953638739_102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.element_289_1500953638737_95();
	this.instance.parent = this;
	this.instance.setTransform(40.5,54.5,1,1,0,0,0,44.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_804_1500953638739_102, new cjs.Rectangle(-4,8,89,93), null);


(lib.element_479_1500953638740_106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.element_718_1500953638753_156();
	this.instance.parent = this;
	this.instance.setTransform(49.9,50,1,1,0,0,0,49.9,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.element_718_1500953638753_156();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.9,50,1.1,1.1,0,0,0,49.9,50);
	this.instance_1.filters = [new cjs.BlurFilter(7, 7, 3)];
	this.instance_1.cache(-3,-3,110,110);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_479_1500953638740_106, new cjs.Rectangle(-16,-16,139,139), null);


(lib.element_465_1500953638753_157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1));

	// 图层 38
	this.instance = new lib.element_086_1500953638763_215();
	this.instance.parent = this;
	this.instance.setTransform(3.5,2,1,1,0,0,0,26,34);

	this.instance_1 = new lib.element_822_1500953638764_218();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,3,1,1,0,0,0,23.5,33);

	this.instance_2 = new lib.element_368_1500953638764_217();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5.5,2.5,1,1,0,0,0,27,33.5);

	this.instance_3 = new lib.element_726_1500953638763_214();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.5,3,1,1,0,0,0,27,34);

	this.instance_4 = new lib.element_170_1500953638764_216();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4,3,1,1,0,0,0,27.5,33);

	this.instance_5 = new lib.element_114_1500953638763_212();
	this.instance_5.parent = this;
	this.instance_5.setTransform(4,3.5,1,1,0,0,0,27.5,33.5);

	this.instance_6 = new lib.element_317_1500953638765_222();
	this.instance_6.parent = this;
	this.instance_6.setTransform(5,2,1,1,0,0,0,26.5,34);

	this.instance_7 = new lib.element_077_1500953638765_221();
	this.instance_7.parent = this;
	this.instance_7.setTransform(6,3,1,1,0,0,0,25.5,33);

	this.instance_8 = new lib.element_811_1500953638764_219();
	this.instance_8.parent = this;
	this.instance_8.setTransform(4,2,1,1,0,0,0,26.5,34);

	this.instance_9 = new lib.element_486_1500953638764_220();
	this.instance_9.parent = this;
	this.instance_9.setTransform(4,2,1,1,0,0,0,26.5,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-32,52,68);


(lib.Block2 = function(mode,startPosition,loop) {
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

	// 图层 2
	this.instance = new lib.element_006_1500953638736_88();
	this.instance.parent = this;
	this.instance.setTransform(44,45.5,1,1,0,0,0,44,45.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层 1
	this.instance_1 = new lib._4();
	this.instance_1.parent = this;

	this.instance_2 = new lib.element_115_1500953640441_471();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,91);


(lib.Block1 = function(mode,startPosition,loop) {
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

	// 图层 2
	this.instance = new lib.element_006_1500953638736_88();
	this.instance.parent = this;
	this.instance.setTransform(44,45.5,1,1,0,0,0,44,45.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层 1
	this.instance_1 = new lib._3();
	this.instance_1.parent = this;

	this.instance_2 = new lib.element_125_1500953639030_375();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,91);


(lib.element_926_1500953638788_297 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 5
	this.chanceNum = new cjs.Text("5", "24px 'Adobe Heiti Std R'", "#FFFFFF");
	this.chanceNum.name = "chanceNum";
	this.chanceNum.textAlign = "center";
	this.chanceNum.lineHeight = 30;
	this.chanceNum.lineWidth = 34;
	this.chanceNum.parent = this;
	this.chanceNum.setTransform(48.6,2.8,1.271,1.271);

	this.timeline.addTween(cjs.Tween.get(this.chanceNum).wait(1));

	// 图层 1
	this.instance = new lib.element_029_1500953638788_296();
	this.instance.parent = this;
	this.instance.setTransform(47.5,21.5,1,1,0,0,0,47.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_926_1500953638788_297, new cjs.Rectangle(0,0,95,43.4), null);


(lib.BlockMC4 = function(mode,startPosition,loop) {
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

	// Layer 1
	this.instance = new lib.element_594_1500953640569_474();
	this.instance.parent = this;

	this.instance_1 = new lib.element_327_1500953638733_79();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45,42,1,1,0,0,0,45,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,85);


(lib.BlockMC1 = function(mode,startPosition,loop) {
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

	// Layer 1
	this.instance = new lib.element_809_1500953638757_175();
	this.instance.parent = this;
	this.instance.setTransform(44,41.9,1,1,0,0,0,44,44);
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.element_555_1500953639440_428();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-2);

	this.instance_2 = new lib.element_099_1500953638733_80();
	this.instance_2.parent = this;
	this.instance_2.setTransform(44.5,47.5,1,1,0,0,0,44.5,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.1,88,88.2);


(lib.BlockMC3 = function(mode,startPosition,loop) {
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

	// Layer 1
	this.instance = new lib.element_335_1500953639026_374();
	this.instance.parent = this;

	this.instance_1 = new lib.element_499_1500953638733_78();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48,45.5,1,1,0,0,0,46,47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,83);


(lib.BlockMC2 = function(mode,startPosition,loop) {
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

	// Layer 1
	this.instance = new lib.element_427_1500953639184_401();
	this.instance.parent = this;

	this.instance_1 = new lib.element_197_1500953638733_81();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41,50.5,1,1,0,0,0,45,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81,101);


(lib.element_233_1500953638762_206 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// POWER UP ball copy
	this.instance = new lib.element_107_1500953638762_208();
	this.instance.parent = this;
	this.instance.setTransform(292.5,509.5,1,1,0,0,0,292.5,509.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// POWER UP ball
	this.instance_1 = new lib.element_839_1500953638762_207();
	this.instance_1.parent = this;
	this.instance_1.setTransform(292.5,509.5,1,1,0,0,0,292.5,509.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// POWER UP beam back
	this.instance_2 = new lib.element_094_1500953638762_209();
	this.instance_2.parent = this;
	this.instance_2.setTransform(323,424,1,1,0,0,0,149,424);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_233_1500953638762_206, new cjs.Rectangle(0,0,585,1019), null);


(lib.element_353_1500953638754_162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_100 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100).call(this.frame_100).wait(1));

	// Symbol 6
	this.instance = new lib.element_390_1500953638731_65();
	this.instance.parent = this;
	this.instance.setTransform(431.2,27.5,1,1,0,0,0,2,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:59},99).to({_off:true},1).wait(1));

	// Symbol 7
	this.instance_1 = new lib.element_704_1500953638739_103();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.8,27,1.546,1,0,0,0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0,x:57},99).to({_off:true},1).wait(1));

	// Symbol 8
	this.instance_2 = new lib.element_020_1500953638734_84();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54.9,27.5,1,1,0,0,0,1.9,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:true},1).wait(1));

	// 图层 60
	this.instance_3 = new lib.element_257_1500953638754_163();
	this.instance_3.parent = this;
	this.instance_3.setTransform(27.5,27.5,1,1,0,0,0,25.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(101));

	// 图层 61
	this.instance_4 = new lib.element_661_1500953638788_298();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,439,55);


(lib.element_354_1500953638734_86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_772_1500953638775_266();
	this.instance.parent = this;
	this.instance.setTransform(228.5,228.4,0.783,0.783,21.4,0,0,225.3,225.1);
	this.instance.alpha = 0.281;

	this.instance_1 = new lib.element_772_1500953638775_266();
	this.instance_1.parent = this;
	this.instance_1.setTransform(228.5,228.4,1,1,0,0,0,225.2,225.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_354_1500953638734_86, new cjs.Rectangle(3.3,3.3,450.3,450.2), null);


(lib.element_907_1500953638741_115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.element_802_1500953638737_94();
	this.instance.parent = this;
	this.instance.setTransform(44,45.5,1,1,0,0,0,45,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_907_1500953638741_115, new cjs.Rectangle(-1,-1,90,93), null);


(lib.element_695_1500953638741_114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_197_1500953638749_149("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19,16,1,1,0,0,0,19,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:27},6).to({x:19},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,32);


(lib.element_644_1500953638741_116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.element_802_1500953638737_94();
	this.instance.parent = this;
	this.instance.setTransform(42,46.5,1,1,0,0,0,45,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_644_1500953638741_116, new cjs.Rectangle(-3,0,90,93), null);


(lib.element_522_1500953638741_113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.element_747_1500953638738_96();
	this.instance.parent = this;
	this.instance.setTransform(42.5,46.5,1,1,0,0,0,45,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_522_1500953638741_113, new cjs.Rectangle(-2.5,0,90,93), null);


(lib.element_358_1500953638742_120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_852_1500953638780_290("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(207.5,55,1,1,0,0,0,207.5,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_358_1500953638742_120, new cjs.Rectangle(0,0,415,110), null);


(lib.element_025_1500953638742_117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_588_1500953638734_83("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30,29.5,1,1,0,0,0,30,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8},6).to({scaleX:1,scaleY:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,59);


(lib.Block4 = function(mode,startPosition,loop) {
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

	// 图层 2
	this.instance = new lib.element_006_1500953638736_88();
	this.instance.parent = this;
	this.instance.setTransform(44,45.5,1,1,0,0,0,44,45.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层 1
	this.instance_1 = new lib._6();
	this.instance_1.parent = this;

	this.instance_2 = new lib.element_725_1500953638979_357();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,91);


(lib.element_140_1500953638752_153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.element_103_1500953638769_238();
	this.instance.parent = this;
	this.instance.setTransform(79,18.5,1,1,0,0,0,14,18.5);

	this.instance_1 = new lib.element_114_1500953638770_244();
	this.instance_1.parent = this;
	this.instance_1.setTransform(79.5,19,1,1,0,0,0,10.5,18);

	this.instance_2 = new lib.element_431_1500953638769_241();
	this.instance_2.parent = this;
	this.instance_2.setTransform(78.5,18.5,1,1,0,0,0,14.5,18.5);

	this.instance_3 = new lib.element_429_1500953638769_240();
	this.instance_3.parent = this;
	this.instance_3.setTransform(78.5,18.5,1,1,0,0,0,13.5,18.5);

	this.instance_4 = new lib.element_149_1500953638770_246();
	this.instance_4.parent = this;
	this.instance_4.setTransform(79,19,1,1,0,0,0,14,18);

	this.instance_5 = new lib.element_039_1500953638771_248();
	this.instance_5.parent = this;
	this.instance_5.setTransform(79,19,1,1,0,0,0,14,18);

	this.instance_6 = new lib.element_321_1500953638770_247();
	this.instance_6.parent = this;
	this.instance_6.setTransform(79,19,1,1,0,0,0,14,18);

	this.instance_7 = new lib.element_864_1500953638770_243();
	this.instance_7.parent = this;
	this.instance_7.setTransform(80,19,1,1,0,0,0,14,18);

	this.instance_8 = new lib.element_546_1500953638770_245();
	this.instance_8.parent = this;
	this.instance_8.setTransform(79,18.5,1,1,0,0,0,14,18.5);

	this.instance_9 = new lib.element_422_1500953638769_237();
	this.instance_9.parent = this;
	this.instance_9.setTransform(80,18.5,1,1,0,0,0,14,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65,0,28,37);


(lib.element_106_1500953638753_155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_790_1500953638738_97();
	this.instance.parent = this;
	this.instance.setTransform(4,16,0.462,1,0,0,0,4,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,-1,9,38);


(lib.element_075_1500953638731_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// 1
	this.instance = new lib.element_089_1500953638732_70();
	this.instance.parent = this;
	this.instance.setTransform(21.5,28.5,1,1,0,0,0,20.5,28.5);

	this.instance_1 = new lib.element_914_1500953639706_442();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,-2);

	this.instance_2 = new lib.element_915_1500953638732_71();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.5,28,1,1,0,0,0,19.5,28);

	this.instance_3 = new lib.element_420_1500953638731_68();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21,28.5,1,1,0,0,0,19,28.5);

	this.instance_4 = new lib.element_339_1500953638732_72();
	this.instance_4.parent = this;
	this.instance_4.setTransform(22,28.5,1,1,0,0,0,22,27.5);

	this.instance_5 = new lib.element_068_1500953638733_76();
	this.instance_5.parent = this;
	this.instance_5.setTransform(21,29,1,1,0,0,0,19,28);

	this.instance_6 = new lib.element_610_1500953638732_75();
	this.instance_6.parent = this;
	this.instance_6.setTransform(21.5,28.5,1,1,0,0,0,20.5,28.5);

	this.instance_7 = new lib.element_564_1500953638731_66();
	this.instance_7.parent = this;
	this.instance_7.setTransform(22.5,28.5,1,1,0,0,0,19.5,27.5);

	this.instance_8 = new lib.element_849_1500953638732_73();
	this.instance_8.parent = this;
	this.instance_8.setTransform(22,28.5,1,1,0,0,0,20,28.5);

	this.instance_9 = new lib.element_601_1500953638731_69();
	this.instance_9.parent = this;
	this.instance_9.setTransform(22,28.5,1,1,0,0,0,20,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,41,57);


(lib.element_066_1500953638737_90 = function(mode,startPosition,loop) {
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
	this.instance = new lib.矢量智能对象拷贝_1();
	this.instance.parent = this;
	this.instance.setTransform(320.1,520.2,1,1,0,0,0,320,520);

	this.instance_1 = new lib.矢量智能对象_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(320.1,520.2,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.2,640,1040);


(lib.element_016_1500953638747_147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.d3 = new lib.element_075_1500953638731_67();
	this.d3.parent = this;
	this.d3.setTransform(-24,28.5,1,1,0,0,0,22,28.5);

	this.d2 = new lib.element_075_1500953638731_67();
	this.d2.parent = this;
	this.d2.setTransform(21,28.5,1,1,0,0,0,22,28.5);

	this.d1 = new lib.element_075_1500953638731_67();
	this.d1.parent = this;
	this.d1.setTransform(67,28.5,1,1,0,0,0,22,28.5);

	this.d0 = new lib.element_075_1500953638731_67();
	this.d0.parent = this;
	this.d0.setTransform(112,28.5,1,1,0,0,0,22,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.d0},{t:this.d1},{t:this.d2},{t:this.d3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,0,177,57);


(lib.element_850_1500953638740_108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_737_1500953638737_93("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(49.8,50.1,1,1,-45,0,0,4.1,49.8);

	this.instance_1 = new lib.element_737_1500953638737_93("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.8,50.1,1,1,-90,0,0,4.1,49.8);

	this.instance_2 = new lib.element_737_1500953638737_93("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.9,50,1,1,-135,0,0,4.1,49.9);

	this.instance_3 = new lib.element_737_1500953638737_93("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(49.9,50,1,1,180,0,0,4,49.9);

	this.instance_4 = new lib.element_737_1500953638737_93("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(49.8,50,1,1,135,0,0,4,49.9);

	this.instance_5 = new lib.element_737_1500953638737_93("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(49.7,50,1,1,90,0,0,4,50);

	this.instance_6 = new lib.element_737_1500953638737_93("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(49.8,50,1,1,45,0,0,4,50);

	this.instance_7 = new lib.element_737_1500953638737_93("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(49.8,50,1,1,0,0,0,4,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_850_1500953638740_108, new cjs.Rectangle(-1,-1,105.7,105.9), null);


(lib.element_819_1500953638749_151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.element_850_1500953638740_108();
	this.instance.parent = this;
	this.instance.setTransform(49.9,50,1,1,0,0,0,49.9,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.element_850_1500953638740_108();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.9,50,1.1,1.1,0,0,0,49.9,50);
	this.instance_1.filters = [new cjs.BlurFilter(7, 7, 3)];
	this.instance_1.cache(-3,-3,110,110);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_819_1500953638749_151, new cjs.Rectangle(-16,-16,139,139), null);


(lib.element_680_1500953638741_112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.element_354_1500953638734_86();
	this.instance.parent = this;
	this.instance.setTransform(228.4,228.4,0.308,0.308,0,0,0,228.4,228.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:228.5,regY:228.5,scaleX:0.41,scaleY:0.41,rotation:6.3,x:228.5,alpha:1},2).to({regX:228.4,scaleX:0.95,scaleY:0.95,rotation:41.8},11).wait(1));

	// Layer 1
	this.instance_1 = new lib.element_354_1500953638734_86();
	this.instance_1.parent = this;
	this.instance_1.setTransform(228.4,228.3,1,1,0,0,0,228.4,228.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.74,scaleY:1.74,rotation:70.7,x:228.5,y:228.2},11).to({scaleX:1.88,scaleY:1.88,rotation:83.7,x:228.4,y:228.3,alpha:0.328},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.3,3.3,450.3,450.2);


(lib.Dust = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// 椭圆 1-er667u
	this.instance = new lib.element_452_1500953638740_105();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-0.1,0.031,0.031,0,0,0,83.9,83.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:84.2,regY:84,scaleX:0.34,scaleY:0.34,x:-0.4,y:-0.2},6,cjs.Ease.get(1)).to({regX:84.1,scaleX:0.46,scaleY:0.46,alpha:0},3).wait(1));

	// Symbol 2
	this.instance_1 = new lib.element_479_1500953638740_106();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.1,0.126,0.126,0,0,0,49.7,49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.47,scaleY:0.47},4,cjs.Ease.get(1)).to({regX:49.9,regY:49.9,scaleX:0.64,scaleY:0.64,x:0.1,alpha:0},2).to({_off:true},1).wait(3));

	// 椭圆 1-er667u
	this.instance_2 = new lib.element_452_1500953638740_105();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.1,-0.1,0.031,0.031,0,0,0,83.9,83.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:84.2,regY:84,scaleX:0.34,scaleY:0.34,x:-0.4,y:-0.2},6,cjs.Ease.get(1)).to({regX:84.1,scaleX:0.46,scaleY:0.46,alpha:0},3).wait(1));

	// Symbol 2
	this.instance_3 = new lib.element_479_1500953638740_106();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-0.1,0.126,0.126,0,0,0,49.7,49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.47,scaleY:0.47},4,cjs.Ease.get(1)).to({regX:49.9,regY:49.9,scaleX:0.64,scaleY:0.64,x:0.1,alpha:0},2).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-18,42,43);


(lib.element_861_1500953638759_189 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Block6();
	this.instance.parent = this;
	this.instance.setTransform(808,-169,1,1,0,0,0,45,45);

	this.instance_1 = new lib.Block5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(810,-61,1,1,0,0,0,45,45);

	this.instance_2 = new lib.Block4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(728.4,444.3,1,1,0,0,0,44,45.5);

	this.instance_3 = new lib.Block3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(728.4,326.3,1,1,0,0,0,44,45.5);

	this.instance_4 = new lib.Block2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(728.4,227.3,1,1,0,0,0,44,45.5);

	this.instance_5 = new lib.Block1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(728.4,118.9,1,1,0,0,0,44,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.dust = new lib.Dust();
	this.dust.parent = this;
	this.dust.setTransform(673.3,-44.3,1.569,1.569,0,0,0,0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.dust).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_861_1500953638759_189, new cjs.Rectangle(651.1,-219.5,203.9,709.3), null);


(lib.element_690_1500953638761_203 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 58
	this.instance = new lib.element_094_1500953638762_204();
	this.instance.parent = this;
	this.instance.setTransform(297,640,1,1,0,0,0,259,441);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

	// 图层 57
	this.instance_1 = new lib.element_062_1500953638762_205();
	this.instance_1.parent = this;
	this.instance_1.setTransform(295,645.5,1,1,0,0,0,278,446.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},7).to({alpha:1},6).wait(1));

	// Layer 2
	this.instance_2 = new lib.element_680_1500953638741_112("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(299.1,701.1,0.751,0.751,0,0,0,228.4,228.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14));

	// KNIGHTS UNITE CENTER
	this.instance_3 = new lib.element_233_1500953638762_206();
	this.instance_3.parent = this;
	this.instance_3.setTransform(292.5,509.5,1,1,0,0,0,292.5,509.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:509.6,scaleX:0.9,scaleY:0.9,y:509.6,alpha:0.398},7).to({regY:509.5,scaleX:1,scaleY:1,y:509.5,alpha:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,585,1092);


(lib.element_645_1500953638768_236 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 55
	this.b3 = new lib.element_140_1500953638752_153();
	this.b3.parent = this;
	this.b3.setTransform(38.3,20.3,1,1,0,0,0,80.3,20.3);

	this.b2 = new lib.element_140_1500953638752_153();
	this.b2.parent = this;
	this.b2.setTransform(59.3,20.3,1,1,0,0,0,80.3,20.3);

	this.b1 = new lib.element_140_1500953638752_153();
	this.b1.parent = this;
	this.b1.setTransform(80.3,20.3,1,1,0,0,0,80.3,20.3);

	this.instance = new lib.element_262_1500953638771_250();
	this.instance.parent = this;
	this.instance.setTransform(15,19.5,1,1,0,0,0,15,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.b1},{t:this.b2},{t:this.b3}]}).wait(1));

	// 图层 56
	this.instance_1 = new lib.element_283_1500953638771_249();
	this.instance_1.parent = this;
	this.instance_1.setTransform(109.5,18.5,1,1,0,0,0,19.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_645_1500953638768_236, new cjs.Rectangle(0,0,129,37), null);


(lib.element_252_1500953638737_92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.element_106_1500953638753_155("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(49.8,50.1,1,1,-45,0,0,4.1,49.8);

	this.instance_1 = new lib.element_106_1500953638753_155("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.8,50.1,1,1,-90,0,0,4.1,49.8);

	this.instance_2 = new lib.element_106_1500953638753_155("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.9,50,1,1,-135,0,0,4.1,49.9);

	this.instance_3 = new lib.element_106_1500953638753_155("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(49.9,50,1,1,180,0,0,4,49.9);

	this.instance_4 = new lib.element_106_1500953638753_155("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(49.8,50,1,1,135,0,0,4,49.9);

	this.instance_5 = new lib.element_106_1500953638753_155("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(49.7,50,1,1,90,0,0,4,50);

	this.instance_6 = new lib.element_106_1500953638753_155("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(49.8,50,1,1,45,0,0,4,50);

	this.instance_7 = new lib.element_106_1500953638753_155("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(49.8,50,1,1,0,0,0,4,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_252_1500953638737_92, new cjs.Rectangle(-1,-1,105.7,105.9), null);


(lib.element_879_1500953638741_111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 椭圆 1-er667u
	this.instance = new lib.element_222_1500953638775_265();
	this.instance.parent = this;
	this.instance.setTransform(34.8,35,0.031,0.031,0,0,0,83.9,83.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:84.2,regY:84,scaleX:0.34,scaleY:0.34,x:34.5,y:34.9},6,cjs.Ease.get(1)).to({regX:84.1,scaleX:0.46,scaleY:0.46,alpha:0},3).wait(1));

	// Symbol 2
	this.instance_1 = new lib.element_819_1500953638749_151();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.9,35,0.126,0.126,0,0,0,49.7,49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.47,scaleY:0.47},4,cjs.Ease.get(1)).to({regX:49.9,regY:49.9,scaleX:0.64,scaleY:0.64,x:35,alpha:0},2).to({_off:true},1).wait(3));

	// 椭圆 1-er667u
	this.instance_2 = new lib.element_222_1500953638775_265();
	this.instance_2.parent = this;
	this.instance_2.setTransform(34.8,35,0.031,0.031,0,0,0,83.9,83.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:84.2,regY:84,scaleX:0.34,scaleY:0.34,x:34.5,y:34.9},6,cjs.Ease.get(1)).to({regX:84.1,scaleX:0.46,scaleY:0.46,alpha:0},3).wait(1));

	// Symbol 2
	this.instance_3 = new lib.element_819_1500953638749_151();
	this.instance_3.parent = this;
	this.instance_3.setTransform(34.9,35,0.126,0.126,0,0,0,49.7,49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.47,scaleY:0.47},4,cjs.Ease.get(1)).to({regX:49.9,regY:49.9,scaleX:0.64,scaleY:0.64,x:35,alpha:0},2).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17,17.1,43,43);


(lib.element_475_1500953638777_276 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.element_252_1500953638737_92();
	this.instance.parent = this;
	this.instance.setTransform(49.9,50,1,1,0,0,0,49.9,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.element_252_1500953638737_92();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.9,50,1.1,1.1,0,0,0,49.9,50);
	this.instance_1.filters = [new cjs.BlurFilter(7, 7, 3)];
	this.instance_1.cache(-3,-3,110,110);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_475_1500953638777_276, new cjs.Rectangle(-16,-16,139,139), null);


(lib.element_430_1500953638739_100 = function(mode,startPosition,loop) {
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

	// Layer 1
	this.effect0 = new lib.element_690_1500953638761_203();
	this.effect0.parent = this;
	this.effect0.setTransform(292.5,546,1,1,0,0,0,292.5,546);

	this.effect1 = new lib.element_152_1500953638777_272();
	this.effect1.parent = this;
	this.effect1.setTransform(295,668.2,1,1,0,0,0,345,356.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.effect0}]}).to({state:[{t:this.effect1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,585,1092);


(lib.element_568_1500953638771_251 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.element_817_1500953638779_284("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(66,71.7,1,1,0,0,0,49,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.element_631_1500953638906_324();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.5,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// +
	this.batter = new lib.element_645_1500953638768_236();
	this.batter.parent = this;
	this.batter.setTransform(237.5,26.5,1,1,0,0,0,64.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.batter).wait(1));

	// combo
	this.c1 = new lib.element_465_1500953638753_157();
	this.c1.parent = this;
	this.c1.setTransform(283.6,323.6,1,1,0,0,0,247.1,251.6);

	this.c0 = new lib.element_465_1500953638753_157();
	this.c0.parent = this;
	this.c0.setTransform(334.6,323.6,1,1,0,0,0,247.1,251.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c0},{t:this.c1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.element_568_1500953638771_251, new cjs.Rectangle(14,8,288.1,100), null);


(lib.element_974_1500953638776_268 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 15
	this.close = new lib.element_944_1500953638739_101();
	this.close.parent = this;
	this.close.setTransform(320,520,1,1,0,0,0,320,520);
	this.close.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.close).wait(86));

	// 组 8
	this.instance = new lib.element_512_1500953638740_109("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(192.5,610.5,1,1,0,0,0,34.5,34.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).to({x:283.9},11,cjs.Ease.get(1)).wait(1).to({x:284.5},0).to({y:707.5},11,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).to({x:193.5},11,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).to({y:609.5},11).wait(2).to({startPosition:0},0).to({x:205.5,y:575.5,alpha:0},5).to({_off:true},1).wait(12));

	// 图层 60
	this.instance_1 = new lib.element_913_1500953638744_131("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(104,584,1,1,0,0,0,19,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},19).wait(67));

	// 图层 3
	this.instance_2 = new lib.element_879_1500953638741_111("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(280.8,682.2,1.569,1.569,0,0,0,34.9,35);

	this.instance_3 = new lib.element_879_1500953638741_111("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(370.8,682.2,1.569,1.569,0,0,0,34.9,35);

	this.instance_4 = new lib.element_879_1500953638741_111("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(460.8,682.2,1.569,1.569,0,0,0,34.9,35);

	this.instance_5 = new lib.element_879_1500953638741_111("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(184.8,583.9,1.569,1.569,0,0,0,34.9,35);

	this.instance_6 = new lib.element_879_1500953638741_111("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(280.8,586.2,1.569,1.569,0,0,0,34.9,35);

	this.instance_7 = new lib.element_879_1500953638741_111("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(370.8,586.2,1.569,1.569,0,0,0,34.9,35);

	this.instance_8 = new lib.element_879_1500953638741_111("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(460.8,586.2,1.569,1.569,0,0,0,34.9,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},71).wait(15));

	// 图层 61
	this.instance_9 = new lib.element_611_1500953638744_130();
	this.instance_9.parent = this;
	this.instance_9.setTransform(185,582.5,1,1,0,0,0,42,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({x:276.4},11,cjs.Ease.get(1)).wait(1).to({x:277},0).to({y:679.5},11).wait(1).to({x:186},11,cjs.Ease.get(1)).wait(1).to({y:581.5},11).to({_off:true},5).wait(15));

	// 图层 62
	this.instance_10 = new lib.element_303_1500953638743_126();
	this.instance_10.parent = this;
	this.instance_10.setTransform(184.5,582.5,1,1,0,0,0,67.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},1).wait(67));

	// 图层 11 拷贝
	this.instance_11 = new lib.element_932_1500953638744_128();
	this.instance_11.parent = this;
	this.instance_11.setTransform(280,581.5,1,1,0,0,0,41,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({x:186},12,cjs.Ease.get(1)).wait(24).to({y:679.5},11,cjs.Ease.get(1)).wait(20));

	// 图层 12 拷贝 9
	this.instance_12 = new lib.element_874_1500953638743_123();
	this.instance_12.parent = this;
	this.instance_12.setTransform(279,679.5,1,1,0,0,0,42,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(31).to({y:582.5},11,cjs.Ease.get(1)).to({_off:true},29).wait(15));

	// element_511_1500450251780_86
	this.instance_13 = new lib.element_382_1500953638776_269();
	this.instance_13.parent = this;
	this.instance_13.setTransform(186.5,685.5,1,1,0,0,0,40.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(43).to({x:280.5},11,cjs.Ease.get(1)).to({_off:true},17).wait(15));

	// element_511_1500450251780_86
	this.instance_14 = new lib.element_656_1500953638730_64();
	this.instance_14.parent = this;
	this.instance_14.setTransform(414,641,1,1,0,0,0,87,95);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},71).wait(15));

	// 图层 63
	this.instance_15 = new lib.element_399_1500953638743_127();
	this.instance_15.parent = this;
	this.instance_15.setTransform(317.5,461,1,1,0,0,0,207.5,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(86));

	// 图层 64
	this.instance_16 = new lib.element_510_1500953638743_124("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(221,417.5,1,1,0,0,0,30,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(86));

	// 椭圆 2
	this.instance_17 = new lib.element_337_1500953638744_129();
	this.instance_17.parent = this;
	this.instance_17.setTransform(320,555.5,1,1,0,0,0,320,432.5);
	this.instance_17.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(86));

	// 图层 59
	this.instance_18 = new lib.element_880_1500953638743_125();
	this.instance_18.parent = this;
	this.instance_18.setTransform(320,520,1,1,0,0,0,320,520);
	this.instance_18.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.element_848_1500953638743_122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 椭圆 1-er667u
	this.instance = new lib.element_291_1500953638740_110();
	this.instance.parent = this;
	this.instance.setTransform(34.8,35,0.031,0.031,0,0,0,83.9,83.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:84.2,regY:84,scaleX:0.34,scaleY:0.34,x:34.5,y:34.9},6,cjs.Ease.get(1)).to({regX:84.1,scaleX:0.46,scaleY:0.46,alpha:0},3).wait(1));

	// Symbol 2
	this.instance_1 = new lib.element_475_1500953638777_276();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.9,35,0.126,0.126,0,0,0,49.7,49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.47,scaleY:0.47},4,cjs.Ease.get(1)).to({regX:49.9,regY:49.9,scaleX:0.64,scaleY:0.64,x:35,alpha:0},2).to({_off:true},1).wait(3));

	// 椭圆 1-er667u
	this.instance_2 = new lib.element_291_1500953638740_110();
	this.instance_2.parent = this;
	this.instance_2.setTransform(34.8,35,0.031,0.031,0,0,0,83.9,83.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:84.2,regY:84,scaleX:0.34,scaleY:0.34,x:34.5,y:34.9},6,cjs.Ease.get(1)).to({regX:84.1,scaleX:0.46,scaleY:0.46,alpha:0},3).wait(1));

	// Symbol 2
	this.instance_3 = new lib.element_475_1500953638777_276();
	this.instance_3.parent = this;
	this.instance_3.setTransform(34.9,35,0.126,0.126,0,0,0,49.7,49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.47,scaleY:0.47},4,cjs.Ease.get(1)).to({regX:49.9,regY:49.9,scaleX:0.64,scaleY:0.64,x:35,alpha:0},2).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17,17.1,43,43);


(lib.element_079_1500953638736_89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.close = new lib.element_340_1500953638780_291();
	this.close.parent = this;
	this.close.setTransform(320,520,1,1,0,0,0,320,520);
	this.close.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.close).wait(86));

	// 组 8
	this.instance = new lib.element_484_1500953638744_132("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(192.5,610.5,1,1,0,0,0,34.5,34.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).to({x:283.9},11,cjs.Ease.get(1)).wait(1).to({x:284.5},0).to({y:707.5},11,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).to({x:193.5},11,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).to({y:609.5},11).wait(2).to({startPosition:0},0).to({x:205.5,y:575.5,alpha:0},5).to({_off:true},1).wait(12));

	// 图层 60
	this.instance_1 = new lib.element_695_1500953638741_114("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(104,584,1,1,0,0,0,19,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},19).wait(67));

	// 图层 5
	this.instance_2 = new lib.element_848_1500953638743_122("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(280.8,682.2,1.569,1.569,0,0,0,34.9,35);

	this.instance_3 = new lib.element_848_1500953638743_122("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(370.8,682.2,1.569,1.569,0,0,0,34.9,35);

	this.instance_4 = new lib.element_848_1500953638743_122("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(460.8,682.2,1.569,1.569,0,0,0,34.9,35);

	this.instance_5 = new lib.element_848_1500953638743_122("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(184.8,583.9,1.569,1.569,0,0,0,34.9,35);

	this.instance_6 = new lib.element_848_1500953638743_122("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(280.8,586.2,1.569,1.569,0,0,0,34.9,35);

	this.instance_7 = new lib.element_848_1500953638743_122("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(370.8,586.2,1.569,1.569,0,0,0,34.9,35);

	this.instance_8 = new lib.element_848_1500953638743_122("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(460.8,586.2,1.569,1.569,0,0,0,34.9,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},71).wait(15));

	// 图层 61
	this.instance_9 = new lib.element_907_1500953638741_115();
	this.instance_9.parent = this;
	this.instance_9.setTransform(185,582.5,1,1,0,0,0,42,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({x:276.4},11,cjs.Ease.get(1)).wait(1).to({x:277},0).to({y:679.5},11).wait(1).to({x:186},11,cjs.Ease.get(1)).wait(1).to({y:581.5},11).to({_off:true},5).wait(15));

	// 图层 62
	this.instance_10 = new lib.element_417_1500953638742_119();
	this.instance_10.parent = this;
	this.instance_10.setTransform(184.5,582.5,1,1,0,0,0,67.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},1).wait(67));

	// 图层 11 拷贝
	this.instance_11 = new lib.element_522_1500953638741_113();
	this.instance_11.parent = this;
	this.instance_11.setTransform(280,581.5,1,1,0,0,0,41,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({x:186},12,cjs.Ease.get(1)).wait(24).to({y:679.5},11,cjs.Ease.get(1)).wait(20));

	// 图层 12 拷贝 9
	this.instance_12 = new lib.element_644_1500953638741_116();
	this.instance_12.parent = this;
	this.instance_12.setTransform(279,679.5,1,1,0,0,0,42,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(31).to({y:582.5},11,cjs.Ease.get(1)).to({_off:true},29).wait(15));

	// element_511_1500450251780_86
	this.instance_13 = new lib.element_804_1500953638739_102();
	this.instance_13.parent = this;
	this.instance_13.setTransform(186.5,685.5,1,1,0,0,0,40.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(43).to({x:280.5},11,cjs.Ease.get(1)).to({_off:true},17).wait(15));

	// element_511_1500450251780_86
	this.instance_14 = new lib.element_948_1500953638738_98();
	this.instance_14.parent = this;
	this.instance_14.setTransform(415.5,641,1,1,0,0,0,91.5,95);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},71).wait(15));

	// 图层 63
	this.instance_15 = new lib.element_358_1500953638742_120();
	this.instance_15.parent = this;
	this.instance_15.setTransform(317.5,461,1,1,0,0,0,207.5,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(86));

	// 图层 64
	this.instance_16 = new lib.element_025_1500953638742_117("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(221,417.5,1,1,0,0,0,30,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(86));

	// 椭圆 2
	this.instance_17 = new lib.element_175_1500953638742_121();
	this.instance_17.parent = this;
	this.instance_17.setTransform(320,555.5,1,1,0,0,0,320,432.5);
	this.instance_17.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(86));

	// 图层 59
	this.instance_18 = new lib.element_571_1500953638742_118();
	this.instance_18.parent = this;
	this.instance_18.setTransform(320,520,1,1,0,0,0,320,520);
	this.instance_18.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.chance = new lib.element_926_1500953638788_297();
	this.chance.parent = this;
	this.chance.setTransform(550,324,1,1,0,0,0,47.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.chance).wait(1));

	// 图层 3
	this.demo0 = new lib.element_974_1500953638776_268();
	this.demo0.parent = this;
	this.demo0.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.demo0).wait(1));

	// 图层 2
	this.demo1 = new lib.element_079_1500953638736_89();
	this.demo1.parent = this;
	this.demo1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.demo1).wait(1));

	// 组 3
	this.effectBox = new lib.element_430_1500953638739_100();
	this.effectBox.parent = this;
	this.effectBox.setTransform(327.5,450,1,1,0,0,0,292.5,546);

	this.timeline.addTween(cjs.Tween.get(this.effectBox).wait(1));

	// 组 7
	this.combo = new lib.element_568_1500953638771_251();
	this.combo.parent = this;
	this.combo.setTransform(464.5,253,1,1,0,0,0,140.5,57);

	this.timeline.addTween(cjs.Tween.get(this.combo).wait(1));

	// 组 9
	this.countDown = new lib.element_353_1500953638754_162();
	this.countDown.parent = this;
	this.countDown.setTransform(319,323.5,1,1,0,0,0,274,27.5);

	this.timeline.addTween(cjs.Tween.get(this.countDown).wait(1));

	// Layer 5
	this.score = new lib.element_016_1500953638747_147();
	this.score.parent = this;
	this.score.setTransform(138,179.5,1,1,0,0,0,65,28.5);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// 图层 59
	this.instance = new lib.element_104_1500953638771_252();
	this.instance.parent = this;
	this.instance.setTransform(123.5,200.5,1,1,0,0,0,123.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 得分
	this.instance_1 = new lib.element_967_1500953638755_164();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.5,130.5,1,1,0,0,0,33.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 组 1
	this.blocks = new lib.element_861_1500953638759_189();
	this.blocks.parent = this;
	this.blocks.setTransform(320,634,1,1,0,0,0,275,277);

	this.timeline.addTween(cjs.Tween.get(this.blocks).wait(1));

	// Layer 1
	this.bg = new lib.element_066_1500953638737_90();
	this.bg.parent = this;
	this.bg.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,424,900,1136.2);
// library properties:
lib.properties = {
	width: 640,
	height: 1040,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/game/element_270_1500953639121_392.png", id:"element_270_1500953639121_392"},
		{src:"images/game/game_atlas_.png", id:"game_atlas_"},
		{src:"images/game/game_atlas_2.png", id:"game_atlas_2"},
		{src:"images/game/game_atlas_3.png", id:"game_atlas_3"},
		{src:"images/game/game_atlas_4.png", id:"game_atlas_4"},
		{src:"images/game/game_atlas_5.png", id:"game_atlas_5"},
		{src:"images/game/game_atlas_6.png", id:"game_atlas_6"},
		{src:"images/game/game_atlas_7.png", id:"game_atlas_7"},
		{src:"images/game/game_atlas_8.png", id:"game_atlas_8"},
		{src:"images/game/game_atlas_9.png", id:"game_atlas_9"},
		{src:"images/game/game_atlas_10.png", id:"game_atlas_10"},
		{src:"images/game/game_atlas_11.png", id:"game_atlas_11"},
		{src:"images/game/game_atlas_12.png", id:"game_atlas_12"},
		{src:"images/game/game_atlas_13.png", id:"game_atlas_13"},
		{src:"images/game/game_atlas_14.png", id:"game_atlas_14"}
	],
	preloads: []
};




});