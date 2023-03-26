interface StepFn {
    (val: number): StepFn;
    (): number;
}

function add(): number;
function add(val: number): StepFn 
function add(val?: number): number | StepFn {
  let total = 0;
  let result: StepFn | number;

  function step(): number;
  function step(val: number): StepFn;
  function step(val?: number | undefined): number | StepFn {
    if (val === undefined) {
      result = total;
      total = 0;

      return result;
    } else {
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

console.log(add())
