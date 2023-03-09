type Indexed<T = unknown> = {
    [key in string]: T;
  };

function isString(x : string) {
    return Object.prototype.toString.call(x) === "[object String]"
  }

  function isObject(x : unknown) {
    return typeof x === 'object' && !Array.isArray(x) && x !== null;
  }

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    if (!isObject(object)) {
        throw new Error('Object is not object');
      }
    if (!isString(path)) {
        throw new Error('Path is not string');
      }
      let schema = object as Indexed;
      const decomposedPath = path.split('.');

      const len = decomposedPath.length;
      for (let i = 0; i < len - 1; i++) {
        const elem = decomposedPath[i];
        if (!schema[elem]) {
            schema[elem] = {};
        }
        schema = schema[elem] as Indexed;
      }         
      schema[decomposedPath[len - 1]] = value;
    return object;
}

console.log(set({foo: 5, bar: {baz: 1}}, 'bar.baz', 10));

/**
  * set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
  * set(3, 'foo.bar', 'baz'); // 3
*/

