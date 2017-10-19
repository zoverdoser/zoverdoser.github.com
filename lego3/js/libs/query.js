var Strings = require('./strings');

var Query = {};

/**
 * 解析Query形式字符串
 * @param str
 * @param key
 * @returns {string}
 */
Query.parse = function (str, key) {
    var value = str.match(new RegExp('(?:\\?|&)' + Strings.quote(key) + '=(.*?)(?:$|&)', 'i')); 
    return value ? decodeURIComponent(value[1]) : '';
};

/**
 * 获取URL查询字符串
 * @param key
 * @returns {*}
 */
Query.get = function (key) {
    // return this.parse(window.location.search, key);
    return this.parse(window.location.search, key);
};

module.exports = Query;