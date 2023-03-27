/**
	take([1, 2, 3]); // => [1] 
	take([1, 2, 3], 2); // => [1, 2] 
	take([1, 2, 3], 5); // => [1, 2, 3] 
	take([1, 2, 3], 0); // => []

	const testErrCase1 = [123, [1, 2, 3], [1, 2, 3], [1, 2, 3]]
	const testErrCase2 = [1, [1], '1', true]

	for (let i = 0; i<4; i++) {
	  try {
	    take(testErrCase1[i], testErrCase2[i])
	  }
	  catch(err) {
	    console.log(err.toString()) // ValidationError: bad value
	  }
	 }
*/

function baseSlice(array: any, start: any, end: any) {
    var index = -1,
        length = array.length;

    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;

    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }


    class ValidationError extends Error {
        constructor(message : string) {
          super(message); // (1)
          this.name = "ValidationError"; // (2)
        }
        toString(){
            return this.name + ': ' + this.message;
          }
      }
  
  
  function take<T>(list: T | T[], num?: string | number | boolean | number[]): T[] {
    if (!Array.isArray(list)) {
        throw new ValidationError('bad value');
    }
    if (!(list && list.length)) {
        return [];
      }
      let n : number;
      if (num === undefined) {
        n = 1;
      }
      else {
        if (typeof(num) !== 'number') {
            throw new ValidationError('bad value');
        }
        else {
            n = num;
        }
      }
      return baseSlice(list, 0, n < 0 ? 0 : n);
  }
  

  console.log(take([1, 2, 3])); // => [1] 
  console.log(take([1, 2, 3], 2)); // => [1, 2] 
  console.log(take([1, 2, 3], 5)); // => [1, 2, 3] 
  console.log(take([1, 2, 3], 0)); // => []




  const testErrCase1 = [123, [1, 2, 3], [1, 2, 3], [1, 2, 3]]
  const testErrCase2 = [1, [1], '1', true]

  for (let i = 0; i<4; i++) {
    try {
      console.log(take(testErrCase1[i], testErrCase2[i] ))
    }
    catch(err) {
      console.log(err!.toString()) // ValidationError: bad value
    }
   } 
