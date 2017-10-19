'use strict'
var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var glob = require('glob');

var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var vue = require("vue-loader");

var isProduction = function() {
    return process.env.NODE_ENV == 'production';
}
var isDevelopment = function() {
    return process.env.NODE_ENV == 'development';
}

function getEntry() {
    var entry = {};
    glob.sync(__dirname + '/../js/app/*.js').forEach(function(name) {
        var n = name.match(/([^/]+?)\.js/)[1];
        if (isProduction()||isDevelopment()) {
            entry[n] = ['../js/app/' + n + '.js'];
        }else{
            entry[n] = ['./js/app/' + n + '.js'];
        }
    });

    return entry;
}

//webpack插件
var plugins = [
    //提公用js到common.js文件中
    new webpack.optimize.CommonsChunkPlugin('js/common.js'),
    //将样式统一发布到style.css中
    new ExtractTextPlugin("style.css", {
        allChunks: true,
        disable: false
    }),
    // 使用 ProvidePlugin 加载使用率高的依赖库
    new webpack.ProvidePlugin({
      $: 'jquery',
      createjs:"libs/createjs-2015.05.21.min.js"
    }),

];
var entry = ['./src/main'],
    cdnPrefix = "",
    buildPath = "/../dist/",
    publishPath = cdnPrefix + "/dist/";
    
//环境判断
if (isProduction()) {
    publishPath = cdnPrefix + "/dist/";
    //plugins.push(new webpack.optimize.UglifyJsPlugin());
    plugins=plugins.concat([
        new webpack.DefinePlugin({
              TEST:false,
          }),
    ]);
}else{
    publishPath ="/dist/";
    plugins=plugins.concat([
        new webpack.DefinePlugin({
              TEST:true,
          }),
    ]);
}
//编译输出路径
module.exports = {
    debug: true,
    entry: getEntry(),
    output: {
        path: __dirname + buildPath,
        filename: 'js/[name].js',
        publicPath: publishPath,
        chunkFilename:"[id].build.js?[chunkhash]"
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue',
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", 'css-loader?sourceMap!sass-loader!cssnext-loader')
        },
        // , {
        //     test: /\.css$/,
        //     loader: ExtractTextPlugin.extract(
        //         "style-loader", "css-loader?sourceMap!cssnext-loader")
        // }
        // {test    : require.resolve('jquery'), loader: 'expose?$'},
        { 
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
        },
        {
            test: /\.js$/,
            exclude: /node_modules|libs|flash|vue\/dist/,
            loader: 'babel'
        },
        {
            test: /\.(png|jpg|gif|svg)$/, loader: 'url', query: {
                limit: 1000,
                name: 'images/[name].[ext]'
            }
        }, 
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, 
        {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, 
        {
            test: /\.json$/,
            loader: 'json'
        }, 
        {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    vue: {
        css: ExtractTextPlugin.extract("css"),
        sass: ExtractTextPlugin.extract("css!sass-loader")
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    resolve: {
        modulesDirectories: ['', 'js', 'node_modules'],
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js'],
        //别名
        alias: {
            'js': path.resolve(__dirname, '../js'),
        }
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    plugins: plugins,
    devtool: '#source-map'
};
