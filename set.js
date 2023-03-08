function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
function set(object, path, value) {
    var arr = path.split('.');
    if (isObject(object)) {
        var result = object;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] in result) {
                result = result[arr[i]];
            }
            else {
                result = defaultValue;
                break;
            }
        }
    }
    else
        return object;
}
/**
  * set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
  * set(3, 'foo.bar', 'baz'); // 3
*/
function get(obj, path, defaultValue) {
    var keys = path.split(".");
    var go = function (acc, v) { return (acc === undefined) ? acc : acc[v]; };
    var res = keys.reduce(go, obj);
    return (res === undefined) ? defaultValue : res;
}
var obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f'
    }
};
console.log(get(obj, 'a.b', '111'));
