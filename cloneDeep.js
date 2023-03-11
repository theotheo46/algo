"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cloneDeep(obj) {
    if (obj == null || typeof obj != "object")
        return obj;
    const output = Array.isArray(obj) ? [] : {};
    for (const key of Object.keys(obj)) {
        output[key] = cloneDeep(obj[key]);
    }
    return output;
}
exports.default = cloneDeep;
const objects = [{ 'a': 1 }, { 'b': 2 }];
const deep = cloneDeep(objects);
console.log(deep[0] === objects[0]); // => false
