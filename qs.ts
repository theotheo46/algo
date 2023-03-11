type StringIndexed = Record<string, any>;

const obj: StringIndexed = {
    key: 1,
    key2: 'test',
    key3: false,
    key4: true,
    key5: [1, 2, 3],
    key6: {a: 1},
    key7: {b: {d: 2}},
};


function format(k: string,v: unknown) : string {
    return v !== null ? `${k}=${v}` : '';
}


function queryStringify(obj: StringIndexed) : string {
    const arr = Object.entries(obj).map(([k,v]) => Array.isArray(v) ? v.map(arr => queryStringify({[k]:arr})) : format(k,v));
    console.log(arr);
    return ''
}



/* const to_qs = (obj: StringIndexed) => {
    return [].concat(...Object.entries(obj)
                       .map(([k,v]) => Array.isArray(v) 
                          ? v.map(arr => to_qs({[k]:arr})) 
                          : format(k,v)))
           .filter(x => x)
           .join('&');
}


to_qs(obj); // 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2' */

queryStringify(obj);