var createjs = require('libs/createjs-2015.05.21.min');
var $ = require('jquery');

var game;
var Loader = {};
var images = images || {};
var ss = ss || {};
var lib = lib || {};
var totalJson;
var dtd = $.Deferred();

Loader = function(loadName, jsonNum) {
    this.totalJson = jsonNum;
    this.loadName = loadName;
    this.images = {};
    this.ss = {};
    this.lib = {};
    this.dtd = $.Deferred();
};

Loader.prototype = {
    init: function() {
        game = require("js/export/" + this.loadName + ".js");
        game(this.lib, this.images, createjs, this.ss)
        this.loadInt();
        return this.dtd.promise();
    },
    loadInt: function() {
        var tempImgArr = [];
        var that = this;

        for (var i = 0; i < that.totalJson; i++) {
            if (i == 0) {
                var json = require("json!images/" + that.loadName + "/" + that.loadName + "_atlas_.json");
                that.ss[that.loadName + "_atlas_"] = new createjs.SpriteSheet(json);
            } else {
                var json = require("json!images/" + that.loadName + "/" + that.loadName + "_atlas_" + (i + 1) + ".json");
                that.ss[that.loadName + "_atlas_" + (i + 1)] = new createjs.SpriteSheet(json);
            }
            for (var j = 0; j < json.images.length; j++) {
                tempImgArr.push({
                    "id": "json",
                    "src": json.images[j]
                });
            }
        }

        tempImgArr = tempImgArr.concat(that.lib.properties.manifest);

        var cur = 0;
        var len = tempImgArr.length;
        for (var i = 0; i < len; i++) {
            var imgObj = new Image();
            imgObj.onload = function() {
                cur++;
                if (this.id != "json") {
                    that.images[this.id] = this;
                }
                that.loadProgess(parseInt(cur / len * 100));
                if (cur >= len) {
                    that.handleComplete();
                }
            }
            imgObj.src = tempImgArr[i]['src'];
            imgObj.id = tempImgArr[i]['id'];
        }
    },
    loadProgess: function(value) {},
    handleComplete: function() {
        var exportRoot = this.lib;
        this.dtd.resolve(exportRoot);
    }
};

module.exports = Loader;