function get(obj, path, defaultValue) {
    const keys = path.split(".");
    const go = (acc, v) => (acc === undefined) ? acc : acc[v];
    const res = keys.reduce(go, obj);
    return (res === undefined) ? defaultValue : res;
}

const obj = {
  a: { 
    b: {
      c: 'd' 
    },
    e: 'f'
  }
};

console.log(get(obj, 'a.x.e'));


/**
  * set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
  * set(3, 'foo.bar', 'baz'); // 3
*/