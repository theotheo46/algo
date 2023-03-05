

function findEqualElements(a, b) {
	const temp1 = a.filter(x => b.includes(x));
	const temp2 = b.filter(x => a.includes(x));
	return (temp1.length < temp2.length) ? temp1 : temp2;
}


function findEqualElements1(arr1, arr2) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }

  return result;
}

// Примеры
console.log(findEqualElements1([1, 2, 3], [2])) // => [2]
console.log(findEqualElements1([2], [1, 2, 3])) // => [2]
console.log(findEqualElements1([1, 2, 2, 3], [2, 2, 2, 2])) // => [2, 2]
console.log(findEqualElements1([2, 2, 2, 2], [1, 2, 2, 3])) // => [2, 2]