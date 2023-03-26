function add(val) {
    let total = 0;
    let result;
    function step(val) {
        if (val === undefined) {
            result = total;
            total = 0;
            return result;
        }
        else {
            total += val;
        }
        return step;
    }
    if (typeof val === 'number') {
        return step(val);
    }
    return step();
}
console.log(add(1)(2)(3)(10)());
console.log(add());
