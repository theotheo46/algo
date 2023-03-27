function unzip() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    if (!Array.isArray(arr[0])) {
        throw new Error("".concat(arr, " is not array"));
    }
    var elements = arr.length;
    var longest = arr.reduce(function (p, v) {
        return (p.length > v.length ? p : v);
    });
    var final = [];
    for (var i = 0; i < longest.length; i++) {
        var temp = [];
        for (var j = 0; j < elements; j++) {
            temp.push(arr[j][i]);
        }
        final.push(temp);
    }
    return final;
}
;
console.log(unzip([1, 2, 3], [4], [5, 6])); // => [[1, 4, 5], [2, undefined, 6], [3, undefined, undefined]]
console.log(unzip([1, 2, 3])); // => [[1], [2], [3]]
console.log(unzip([1], [1, 2, 3], [4, 6, 7, 8, 9])); // => [[1, 1, 4], [undefined, 2, 6], [undefined, 3, 7], [undefined, undefined, 8], [undefined, undefined, 9]]
console.log(unzip({})); // => Error: [object Object] is not array
