console.log(trim('_abc_', '_')); // => 'abc'
console.log(trim('-_-abc-_-', '_-')); // => 'abc'
console.log(trim('\xA0foo')); // "foo"
console.log(trim('\xA0foo', ' ')); // " foo"
console.log(trim('-_-ab c -_-', '_-')); // ab c

const arr = ['  foo  ', '  bar  '].map(value => trim(value)); // => ['foo', 'bar']
console.log(arr);


function trim(string: string, chars?: string): string {
    if (string && !chars) {
        return string.trim();
    }

    const reg = new RegExp(`[${chars}]`, "gi");
    return string.replace(reg, "");
}
