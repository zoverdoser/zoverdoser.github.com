define(function(require, exports) {
    var BABYLON = require("babylonjs");

    var camera;
    if(BABYLON.Engine.isSupported()) {
        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true);

        BABYLON.SceneLoader.Load("./scenes/", "dog.babylon", engine, function(scene) {
            scene.executeWhenReady(function () {
                camera =  createFreeCamera(scene, {x: 4.1, y: 7, z: -10});
                camera.attachControl(canvas);
                camera.rotation = {};
                scene.activeCamera = camera;
                camera.rotation = {x: 0.4186, y: -0.413, z: 0};
                camera.attachControl(scene.getMeshByID('dog'));
                //var light = createLight(scene);
                onDeviceOrientation();
                //scene.debugLayer.show();
                engine.runRenderLoop(function() {
                    scene.render();
                });
                console.log(scene.meshes);
            });
        }, function(progress) {
            // To do: give progress feedback to user
        }, function() {
            console.log('load scene error');
        });
    }

    function createLight(scene) {
        var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(-0.5, -1, -0.5), scene);
        // Set a position in order to enable shadows later
        light.position = new BABYLON.Vector3(20, 40, 20);
        return light;
    }

    function createFreeCamera(scene, pos) {
        return new BABYLON.ArcRotateCamera("ArcRotateCamera", 0.5, 0.8, 10, new BABYLON.Vector3(0, 4, -4), scene);
        //return new BABYLON.FreeCamera("player camera", new BABYLON.Vector3(pos.x, pos.y, pos.z), scene);
    }

    function onDeviceOrientation() {
        var last = 0;
        window.addEventListener("deviceorientation", function(event) {
            console.log(event.alpha, event.beta, event.gamma);
            var moved = last - event.gamma;
            camera.alpha += moved *0.01;
        }, true);
    }
});
