

type Nullable<T> = T | null;

const TYPE_ERROR = 'Something wrong with type of input param';


const tree = (n: number | string): Nullable<string> => {
    if ((typeof n !== "string") && (typeof n !== "number")) {
        throw new TypeError(TYPE_ERROR);
    }
    if (n as number < 3) { return null}
    let result = '';
    let line = n as number;
    while(line-- > 1) {
        result = result.concat(Array(line).join(' ')).concat(Array((n as number - line) * 2).join('*')).concat(Array(line).join(' ')).concat('\n')
    }
    result = result.concat(Array(n as number - 1).join(' ')).concat(Array(2).join('|')).concat(Array(n as number - 1).join(' ')).concat('\n')
    return result;
}
console.log(tree('5'));

const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
const s = tree(5);
console.log(s?.localeCompare(expected));

