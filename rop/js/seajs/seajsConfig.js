var noCacheTimeStamp = new Date().getTime()
seajs.config({
    debug: false,
    map: [
        [/^.*$/, function(url) {
                if(!/views|API/.test(url)) {
                    return url;
                }

                url += (url.indexOf('?') === -1 ? '?' : '&') + noCacheTimeStamp;

                return url;
        }]
    ],
    alias: {
        'jquery': 'libs/jquery-2.1.4.js',
        'underscore': 'libs/underscore-min.js'
    },
    paths: {
        'tmpl': '../../',
    },
    base:"./js" 
});