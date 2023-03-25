function add(val) {
    if (val === undefined) {
        return 0;
    }
    //  function add(val: number) {
    return (val1) => {
        return () => {
            return val + val1;
        };
    };
}
//console.log(add(1)(2)());
console.log(add());
