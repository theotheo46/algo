// omit({ name: 'Benjy', age: 18 }, [ 'name' ]); // => { age: 18 }

// omit(obj: Object, fields: string[]): Object
function omit<T extends object>(obj: T, fields: (keyof T)[]) {
    const input = Object.entries(obj).filter(([k, v]) => !fields.includes(k as keyof T));
    const output : any = {};
    for(let i in input) 
    { 
        output[input[i][0]] = input[i][1];
    }
    return output;
}


console.log(omit({ name: 'Benjy', age: 18 }, [ 'name' ]));
