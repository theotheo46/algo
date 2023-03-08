var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
function merge(target, source) {
    var output = __assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(function (key) {
            var _a, _b;
            if (isObject(source[key])) {
                if (!(key in target))
                    output = __assign(__assign({}, output), (_a = {}, _a[key] = source[key], _a));
                else
                    output[key] = merge(target[key], source[key]);
            }
            else {
                output = __assign(__assign({}, output), (_b = {}, _b[key] = source[key], _b));
            }
        });
    }
    return output;
}
function merge1(lhs, rhs) {
    for (var p in rhs) {
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
