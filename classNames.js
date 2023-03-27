function getArgType(arg) {
    var output = '';
    if (Array.isArray(arg)) {
        output = 'array';
    }
    else if (arg === null) {
        output = 'null';
    }
    else {
        output = typeof (arg);
    }
    return output;
}
function isClassDictionary(arg) {
    var argType = getArgType(arg);
    var isEmpty = Object.keys(arg).length === 0;
    if (argType !== 'object' || isEmpty)
        return false;
    return true;
}
function gatherObject(arg) {
    var classes = [];
    if (arg.toString !== Object.prototype.toString) {
        classes.push(arg.toString());
    }
    else {
        for (var key in arg) {
            if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
                classes.push(key);
            }
        }
    }
    return classes.join(' ');
}
function classNames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (!arg)
            continue;
        var argType = getArgType(arg);
        switch (argType) {
            case 'number':
            case 'string':
            case 'boolean':
                classes.push(arg);
                break;
            case 'array':
                var recursiveClasses = classNames.apply(void 0, arg);
                if (recursiveClasses) {
                    classes.push(recursiveClasses);
                }
                break;
            case 'object':
                if (isClassDictionary(arg)) {
                    classes.push(gatherObject(arg));
                }
                break;
        }
    }
    return classes.join(' ');
}
console.log(classNames("foo", "bar")); // => 'foo bar'
console.log(classNames("foo", { bar: true })); // => 'foo bar'
console.log(classNames({ "foo-bar": true })); // => 'foo-bar'
console.log(classNames({ "foo-bar": false })); // => ''
console.log(classNames({ foo: true }, { bar: true })); // => 'foo bar'
console.log(classNames({ foo: true, bar: true })); // => 'foo bar'
console.log(classNames("foo", { bar: true, duck: false }, "baz", { quux: true })); // => 'foo bar baz quux'
console.log(classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")); // => 'bar 1'
console.log(classNames('bar', [1, null, 'baz'], { baz: true }, '3')); // => 'bar 1 baz baz 3'
console.log(classNames('bar', [1, null, 'baz', ['foo', 'test']], { baz: true }, '3')); // => 'bar 1 baz foo test baz 3'
console.log(classNames([1, 'baz', [2, 'foo']])); // => 'foo bar'
