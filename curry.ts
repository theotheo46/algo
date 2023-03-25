type StepFn = (val: number) => number | StepFn;

function add(val?: number): number | StepFn {
    if (val === undefined) {return 0}
  //  function add(val: number) {
    return (val1 : number) => {
        return () => 
        { 
            return val + val1
        };
    }
}


console.log(add(1)(2)());

console.log(add())
