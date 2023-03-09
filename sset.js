function get(obj, path, defaultValue) {
    const keys = path.split(".");
    const go = (acc, v) => (acc === undefined) ? acc : acc[v];
    const res = keys.reduce(go, obj);
    return (res === undefined) ? defaultValue : res;
}


function isString(x) {
  return Object.prototype.toString.call(x) === "[object String]"
}

function set1(object, path, value) {
  if (!isString(path)) {
    throw new Error('Path is not string');
  }
  const decomposedPath = path.split('.');
  const base = decomposedPath[0];
  if (base === undefined) {
      return object;
  }
  object[base] = {};
  value = decomposedPath.length <= 1 ? value : set1(object[base], decomposedPath.slice(1).join('.'), value);
  return {
      ...object,
      [base]: value,
  }
}



const setByString = (inputObj, paths, value) => {
    if (paths.length === 0) {
        return inputObj;
    }

    if (paths.length === 1) {
        const path = paths[0];
        inputObj[path] = value;
        return { ...inputObj, [path]: value };
    }
    const [path, ...rest] = paths;
    const currentNode = inputObj[path];
    const childNode = setByString(currentNode, rest, value);
    return { ...inputObj, [path]: childNode };
};


/* const obj = {
  a: { 
    b: {
      c: 'd' 
    },
    e: 'f'
  }
}; */

console.log(set1({ foo: 5 }, 'bar.baz', 10));


/**
  * set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
  * set(3, 'foo.bar', 'baz'); // 3
*/
