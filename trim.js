console.log(trim('_abc_', '_')); // => 'abc'
console.log(trim('-_-abc-_-', '_-')); // => 'abc'
console.log(trim('\xA0foo')); // "foo"
console.log(trim('\xA0foo', ' ')); // " foo"
console.log(trim('-_-ab c -_-', '_-')); // ab c
var arr = ['  foo  ', '  bar  '].map(function (value) { return trim(value); }); // => ['foo', 'bar']
console.log(arr);
function trim(string, chars) {
    if (string && !chars) {
        return string.trim();
    }
    var reg = new RegExp("[".concat(chars, "]"), "gi");
    return string.replace(reg, "");
}
