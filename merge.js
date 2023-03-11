"use strict";
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
function merge(target, source) {
    let output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target))
                    output = Object.assign(Object.assign({}, output), { [key]: source[key] });
                else
                    output[key] = merge(target[key], source[key]);
            }
            else {
                output = Object.assign(Object.assign({}, output), { [key]: source[key] });
            }
        });
    }
    return output;
}
function merge1(lhs, rhs) {
    for (let p in rhs) {
        if (!rhs.hasOwnProperty(p)) {
            continue;
        }
        try {
            if (rhs[p].constructor === Object) {
                rhs[p] = merge(lhs[p], rhs[p]);
            }
            else {
                lhs[p] = rhs[p];
            }
        }
        catch (e) {
            lhs[p] = rhs[p];
        }
    }
    return lhs;
}
console.log(merge({ a: { b: { a: 2 } }, d: 5 }, { a: { b: { c: 1 } } }));
console.log(merge({ a: { b: { c: 1 } } }, {}));
console.log(merge({ a: { b: { a: 2 } }, d: 5 }, { a: { b: { a: 3 } } }));
