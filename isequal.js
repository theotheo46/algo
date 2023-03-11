"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEqual(a, b) {
    if (a === b)
        return true;
    if (typeof a != 'object' || typeof b != 'object' || a == null || b == null)
        return false;
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length)
        return false;
    if ((keysA.length == 0) && (keysB.length == 0))
        return true;
    for (let key of keysA) {
        if (keysB.indexOf(key) === -1)
            return false;
        if (!isEqual(a[key], b[key]))
            return false;
    }
    return true;
}
exports.default = isEqual;
const a = { a: 1 };
const b = { a: 1 };
console.log(isEqual(a, b)); // true
