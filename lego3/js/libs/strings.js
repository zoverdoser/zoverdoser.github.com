var Strings = {};

/**
 * 将正则字符串转义为普通字符串
 * @param {String} str 字符串
 * @returns {String}
 */
Strings.quote = function (str) {
    return str.replace(/[-[\]{}()*+?.\\^$|,#\s]/g, '\\$&');
};

/**
 * 重复拼接字符串
 * @param {String} str 字符串
 * @param {Number} count 重复次数
 * @returns {String}
 */
Strings.repeat = function (str, count) {
    return new Array(count + 1).join(str);
};

/**
 * 删除首尾空白
 * @param {String} str
 * @returns {String}
 */
Strings.trim = function (str) {
    return str.replace(/^\s+|\s+$/g, '');
};

/**
 * 取字符串长度(双字节视为两个字符)
 * @param {String} str
 * @returns {Number}
 */
Strings.byteLength = function (str) {
    var result = str.match(/[^\x00-\xff]/g);
    return str.length + (result ? result.length : 0);
};

/**
 * 截取字符串(双字节视为两个字符)
 * @param {String} str          字符串
 * @param {Number} length       截取长度
 * @returns {String}
 */
Strings.subByte = function (str, length) {
    var len = str.length;
    var count = 0;
    var ret = '';

    for (var i = 0; i < len; i++) {
        var char = str.charAt(i);
        if (++count > length || char.charCodeAt(0) > 0xff && ++count > length) {
            break;
        }
        ret += char;
    }

    return ret;
};

/**
 * Unicode编码
 * @param {String} str
 * @returns {String}
 */
Strings.toUnicode = function (str) {
    var ret = '';

    for (var i = 0, len = str.length; i < len; i++) {
        var tmp = str.charCodeAt(i).toString(16);
        ret += '\\u' + ('0000' + tmp).slice(-4);
    }

    return ret;
};

/**
 * Unicode解码
 * @param {String} str
 * @returns {String}
 */
Strings.fromUnicode = function (str) {
    var arr = str.split(/\\u/).map(function (a) {
        return a ? parseInt(a, 16) : 0;
    });

    return String.fromCharCode.apply(null, arr);
};

/**
 * HTML编码
 * @param {String} str
 * @returns {String}
 */
Strings.htmlEncode = function (str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
};

/**
 * HTML解码
 * @param {String} str
 * @returns {String}
 */
Strings.htmlDecode = function (str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    return div.innerText || div.textContent;
};

module.exports = Strings;