var obj = {
    key: 1,
    key2: 'test',
    key3: false,
    key4: true,
    key5: [1, 2, 3],
    key6: { a: 1 },
    key7: { b: { d: 2 } }
};
function format(k, v) {
    return v !== null ? "".concat(k, "=").concat(v) : '';
}
function queryStringify(obj) {
    var arr = Object.entries(obj).map(function (_a) {
        var k = _a[0], v = _a[1];
        return Array.isArray(v) ? v.map(function (arr) {
            var _a;
            return queryStringify((_a = {}, _a[k] = arr, _a));
        }) : format(k, v);
    });
    console.log(arr);
    return '';
}
/* const to_qs = (obj: StringIndexed) => {
    return [].concat(...Object.entries(obj)
                       .map(([k,v]) => Array.isArray(v)
                          ? v.map(arr => to_qs({[k]:arr}))
                          : format(k,v)))
           .filter(x => x)
           .join('&');
}


to_qs(obj); // 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2' */
queryStringify(obj);
