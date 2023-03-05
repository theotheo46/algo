function bubbleSort(arr) {
    
  var i, j;
  var len = arr.length;
   
  var swapped  = false;
   
  for(i =0; i < len; i++){
     
    swapped  = false;
     
    for(j = 0; j < len; j++){
        if(arr[j] > arr[j + 1]){
          swap(arr, j, j+1);
          swapped  = true;
        }
    }
     
    if(!swapped ){
      break;
    }
  }
}

  function swap(arr, i, j) {
    const tmp = arr[i];

    arr[i] = arr[j];
    arr[j] = tmp;
}

var arr = [243, 45, 23, 356, 3, 5346, 35, 5];
 

console.log(arr);
bubbleSort(arr)
console.log(arr);