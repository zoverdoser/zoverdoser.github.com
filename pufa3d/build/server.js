'use strict'
var gaze = require('gaze');
var fs = require('fs');
var glob = require('glob');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
for(var i in config.entry){
	config.entry[i].unshift('webpack-dev-server/client?http://localhost:8080', "webpack/hot/dev-server");
}
// config.entry.unshift('webpack-dev-server/client?http://localhost:8080', "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());

gaze(__dirname+'/../flash/*.js', function(err, watcher) {
  this.on('changed', function(filepath) {
    readJs(filepath);
  });
});

glob.sync(__dirname + '/../flash/*.js').forEach(function(file) {
    readJs(file);
});

function readJs(file){
	fs.readFile(file, "utf8", function(err, data){  
        if(err)  
            console.log("读取文件fail " + err);  
        else{  
            var strArr=data.match(/^(\(function)[\s\S]*(\(lib = lib)/);
            if(strArr&&strArr.length>0){
            	writeJs(file,strArr[0]);
            }
        }  
    }); 
}
function writeJs(file,str){
	str="module.exports="+str.replace("(lib = lib",";");
    fs.writeFile(file, str, function (err) {
      if (err) throw err;
      console.log('It\'s saved!');
    });
    
}

// 这里配置：请求http://localhost:9090/api，
// 相当于通过本地node服务代理请求到了http://cnodejs.org/api
// var proxy = [{
//     path: "/api/*",
//     target: "https://cnodejs.org",
//     host: "cnodejs.org"
// }]
//启动服务
var app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot:true,
    historyApiFallback: true,
    // proxy:proxy
});
app.listen(8080);