function isObject(item: unknown) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }


  type Indexed<T = unknown> = {
    [key in string]: T;
  };


  
function merge(target: Indexed, source: Indexed): Indexed {
    let output = {...target};
    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach(key => {
        if (isObject(source[key])) {
          if (!(key in target))
            output = {...output, [key]: source[key]};
          else
            output[key] = merge(target[key] as Indexed<unknown>, source[key] as Indexed<unknown>);
        } else {
          output = {...output, [key]: source[key]};
        }
      });
    }
    return output;
  }

  function merge1(lhs: Indexed, rhs: Indexed): Indexed {
    for (let p in rhs) {
        if (!rhs.hasOwnProperty(p)) {
            continue;
        }

        try {
            if (rhs[p].constructor === Object) {
                rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
            } else {
                lhs[p] = rhs[p];
            }
        } catch(e) {
            lhs[p] = rhs[p];
        }
    }

    return lhs;
}

  console.log(merge({a: {b: {a: 2}}, d: 5}, {a: {b: {c: 1}}}));

  console.log(merge( {a: {b: {c: 1}}}, {}));

  console.log(merge({a: {b: {a: 2}}, d: 5}, {a: {b: {a: 3}}}));
