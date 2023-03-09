"use strict";
exports.__esModule = true;
function isEqual(a, b) {
    if (a === b)
        return true;
    if (typeof a != 'object' || typeof b != 'object' || a == null || b == null)
        return false;
    var keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length)
        return false;
    if ((keysA.length == 0) && (keysB.length == 0))
        return true;
    for (var _i = 0, keysA_1 = keysA; _i < keysA_1.length; _i++) {
        var key = keysA_1[_i];
        if (keysB.indexOf(key) === -1)
            return false;
        if (!isEqual(a[key], b[key]))
            return false;
    }
    return true;
}
exports["default"] = isEqual;
var a = { a: 1 };
var b = { a: 1 };
console.log(isEqual(a, b)); // true
