var $ = require("jquery");
var Shake = {
    SHAKE_THRESHOLD: 3000,
    isYao: false,
    last_update: 0,
    x: 0,
    y: 0,
    z: 0,
    last_x: 0,
    last_y: 0,
    last_z: 0,
    callback: null,

    init: function(callback) {
        Shake.checkDev(callback);
        Shake.callback = callback;
        Shake.isYao = false;
        Shake.last_update = 0;
        Shake.x = Shake.y = Shake.z = Shake.last_x = Shake.last_y = Shake.last_z = 0;
    },

    checkDev: function(callback) {
        if(window.DeviceMotionEvent) {
            $(window).on("devicemotion", Shake.deviceMotionHandler);
        }
    },

    deviceMotionHandler: function(eventData) {
        var acceleration = eventData.originalEvent.accelerationIncludingGravity;
        var curTime = +new Date();
        if (curTime - Shake.last_update > 100 && !Shake.isYao) {
            var diffTime = curTime - Shake.last_update;
            Shake.last_update = curTime;
            Shake.x = acceleration.x;
            Shake.y = acceleration.y;
            Shake.z = acceleration.z;
            var speed = Math.abs(Shake.x + Shake.y + Shake.z - Shake.last_x - Shake.last_y - Shake.last_z) / diffTime * 10000;
            if (speed > Shake.SHAKE_THRESHOLD) {
                if(typeof Shake.callback == "function") {
                    Shake.remove();
                    Shake.callback();
                    initShake();
                }
            }
            Shake.last_x = Shake.x;
            Shake.last_y = Shake.y;
            Shake.last_z = Shake.z;
        }  
    },

    remove: function() {
        $(window).off("devicemotion");
    }
};
module.exports = Shake;