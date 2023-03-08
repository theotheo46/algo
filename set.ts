function isObject(item: unknown) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}




function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    let arr = path.split('.');
    if (isObject(object)) {
        let result = object;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] in (result as Indexed)) {
                result = result[arr[i]];
            } else {
                result = defaultValue;
                break;
            }
        }
    }
    else return object;
}


/**
  * set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
  * set(3, 'foo.bar', 'baz'); // 3
*/

