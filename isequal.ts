function isEqual(a: object, b: object): boolean {
    if (a === b) return true;

    if (typeof a != 'object' || typeof b != 'object' || a == null || b == null) return false;

    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.length != keysB.length) return false;
    if ((keysA.length == 0) && (keysB.length == 0)) return true;
    
    for (let key of keysA) {
        if (keysB.indexOf(key) === -1) return false;
        if (!isEqual(a[key as keyof typeof a], b[key as keyof typeof b])) return false;
    }

    return true;
}

export default isEqual

const a = { a: 1 };
const b = { a: 1 };
console.log(isEqual(a, b)); // true
