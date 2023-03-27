

interface ClassDictionary {
	[key: string]: any;
}

type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean ;

type ArgType = string | number | Array<any> | object | undefined | null | boolean;

interface ClassArray extends Array<ClassValue> { }

function getArgType(arg: ArgType) {
    let output = '';

    if(Array.isArray(arg)) {
        output = 'array'
    } else if ( arg === null ) {
        output = 'null'
    } else {
        output = typeof(arg);
    }

    return output;
}

function isClassDictionary(arg: any): arg is ClassDictionary {
    
    const argType = getArgType(arg);
    const isEmpty = Object.keys(arg).length === 0;
    
    if(argType !== 'object' || isEmpty) return false
    
    return true;
}

function gatherObject(arg: ClassDictionary) {
    let classes = [];
    if (arg.toString !== Object.prototype.toString) {
        classes.push(arg.toString());
    } else {
        for (const key in arg) {
            if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
                classes.push(key)
            }
        }
    }

    return classes.join(' ');
}

function classNames(...args: ClassArray): string {
    let classes = [];
    for (const arg of args) {
        if (!arg) continue;
        const argType = getArgType(arg);

        switch(argType) {
            case 'number':
            case 'string':
            case 'boolean':
                classes.push(arg);
                break;
            case 'array': 
                const recursiveClasses = classNames(...arg);
                if(recursiveClasses) {
                    classes.push(recursiveClasses);
                }
                break;
            case 'object': 
                if(isClassDictionary(arg)) {
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
console.log(
  classNames("foo", { bar: true, duck: false }, "baz", { quux: true })
); // => 'foo bar baz quux'
console.log(classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")); // => 'bar 1'
console.log(classNames('bar', [1, null, 'baz'], {baz: true}, '3')); // => 'bar 1 baz baz 3'
console.log(classNames('bar', [1, null, 'baz', ['foo', 'test']], {baz: true}, '3')); // => 'bar 1 baz foo test baz 3'
console.log(classNames([1, 'baz', [2, 'foo']])); // => 'foo bar'
