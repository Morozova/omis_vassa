"use strict";
console.log('Hello TypeScript');
//number 
//string 
//boolean
//Any
//undefined
//enum
//bigint -> 100000n
//void -> no return
// fn -> type -> return
var z = '';
var cars = ['audi', 'bmw'];
//let cars2:Array<string> = ['audi', 'bmw']  
var carItems = ['audi', 2.0];
function getA(x, y) {
    if (x === void 0) { x = 18; }
    if (y === void 0) { y = 'text'; }
    console.log('this is void fn');
}
getA();
function getB() {
    return 'this is return fn';
}
getB();
//javascript
var months = {
    january: 1,
    february: 2
};
//typescript
var months2;
(function (months2) {
    months2[months2["january"] = 10] = "january";
    months2[months2["february"] = 20] = "february";
})(months2 || (months2 = {}));
var myMonths = months2.january;
if (typeof cars == "object") {
    console.log('this is a array');
}
var txt = 'Hello TypeScript';
var txtLenth = txt.length;
var txtLenth2 = txt.length;
function getAllArguments(x) {
    var r = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        r[_i - 1] = arguments[_i];
    }
}
function getM(x) {
    return 10;
}
var fn = function (n, m) {
    var a = n + m;
    return a;
};
getM(fn);
var sum = function (x, y) { return x + y; };
console.log("result: ", sum(2, 4));
var X = /** @class */ (function () {
    function X(_internal) {
        if (_internal === void 0) { _internal = 'hahaha'; }
        this._internal = _internal;
    }
    return X;
}());
