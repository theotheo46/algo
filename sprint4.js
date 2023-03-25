const TYPE_ERROR = 'Something wrong with type of input param';
const tree = (n) => {
    if ((typeof n !== "string") && (typeof n !== "number")) {
        throw new TypeError(TYPE_ERROR);
    }
    if (n < 3) {
        return null;
    }
    let result = '';
    let line = n;
    while (line-- > 1) {
        result = result.concat(Array(line).join(' ')).concat(Array((n - line) * 2).join('*')).concat(Array(line).join(' ')).concat('\n');
    }
    result = result.concat(Array(n - 1).join(' ')).concat(Array(2).join('|')).concat(Array(n - 1).join(' ')).concat('\n');
    return result;
};
console.log(tree('5'));
const expected = '   *   \n' +
    '  ***  \n' +
    ' ***** \n' +
    '*******\n' +
    '   |   \n';
const s = tree(5);
console.log(s?.localeCompare(expected));
