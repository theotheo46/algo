console.log(trim('_abc_', '_')); // => 'abc'
console.log(trim('-_-abc-_-', '_-')); // => 'abc'
console.log(trim('\xA0foo')); // "foo"
console.log(trim('\xA0foo', ' ')); // " foo"
console.log(trim('-_-ab c -_-', '_-')); // ab c

const arr = ['  foo  ', '  bar  '].map(value => trim(value)); // => ['foo', 'bar']
console.log(arr);


function trim(s : string, p? : string) : string{
    if (p === undefined) {
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        return s.replace(rtrim,'');
    }
    else {
        var rtrim = new RegExp('^['+ p + ']+|['+ p + ']+$', 'g');   
        return s.replace(rtrim,'');

    }
}
