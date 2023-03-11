function cloneDeep<T extends object = object>(obj: T) {
    if (obj == null || typeof obj != "object") return obj;
    const output = Array.isArray(obj) ? [] : {};
    for (const key of Object.keys(obj)) {
      output[key] = cloneDeep(obj[key]);
    }
  return output;
}

export default cloneDeep;

const objects = [{ 'a': 1 }, { 'b': 2 }];
const deep = cloneDeep(objects);

console.log(deep[0] === objects[0]); // => false