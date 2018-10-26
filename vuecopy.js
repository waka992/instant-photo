/** copy vue.js
 * 2018.10.24
 * Yao
 */

/**  1. outest is the function which have two factory, one is global, another is the methods
 * 
 * */
(function (global, factory) {
    // define the import way below
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : 
    typeof define === 'function' && define.amd ? define(factory) : 
    (global.Vue = factory());
}(
    this, (function() { 'use strict';

    var emptyObject = Object.freeze({});

    // tools
    function isUndef (v) {
        return v === undefined || v === null
    }

    function isDef (v) {
        return v !== undefined && v !== null
    }

    function isTrue (v) {
        return v === true
    }

    function isFalse (v) {
        return v === false
    }
    
    // 判断基本类型
    function isPrimitive (value) {
        return (
            typeof value === 'string' ||
            typeof value === 'number' ||
            typeof value === 'symbol' ||
            typeof value === 'boolean'
        )
    }

    function isObject (obj) {
        return obj !== null && typeof obj === 'object'
    }

    // get raw type
    var _toString = Object.prototype.toString;

    function toRawType (value) {
        return _toString.call(value).slice(8, -1)
    }

    function isPlainObject(obj) {
        return _toString.call(obj) === '[object Object]'
    }

    function isRegExp (v) {
        return _toString.call(v) === '[object RegExp'
    }

    // check if val is a valid array index
    function isValidArrayIndex(val) {
        var n = parseFloat(String(val));
        return n >= 0 && Math.floor(n) === n && isFinite(val) // 验证一个无穷大的正整数
    }

    // convert a value to a string 
    function toString (val) {
        return val == null
        ? ''
        : typeof val === 'object'
            ? JSON.stringify(val, null, 2) // space 2 加回车
            : String(val)
    }

    // if convert fails, return original string
    function toNumber (val) {
        var n = parseFloat(val);
        return isNaN(n) ? val : n
    }

    // make a map and return a function for checking if a key is in that map
    function makeMap (
        str,
        expectsLowerCase
    ) {
       var map = Object.create(null);
       var list = str.split(',');
       for (var i = 0; i < list.length; i++) {
           map[list[i]] = true;
       } 
       return expectsLowerCase
        ? function (val) { return map[val.toLowerCase()]; }
        : function (val) { return map[val]; }
    }

    // check if a build-in tag
    var isBuiltInTag = makeMap('slot,component', true) // get a map include 'slot', 'component'

    // check if a reseved attribute
    var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is') // same to up line

    // remove an item from array
    function remove (arr, item) {
        if (arr.length) {
            var index = arr.indexOf(item);
            if (index > -1) {
                return arr.splice(index, 1)
            }
        }
    }

    // check whether the object has the property
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function hasOwn (obj, key) {
        return hasOwnProperty.call(obj, key)
    }

    // create a cached version of a pure function
    function cachced (fn) {
        var cache = Object.create(null);
    }

    }
)));
