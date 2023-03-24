// ([1, 1, 1], 2) -> 2
// ([1, 2, 1], 3) -> 2
// ([1, 2, 5, 3], 3) -> 2
// ([10, 5, 6, 7, 8, 7], 15) -> 3

function subarraySum(arr, sum) {
    var len = arr.length;
    var count = 0;
 
    for(var i = 0; i < len; i++){
       var n = 0;
      
       for(var j = i; j < len; j++){    
          n += arr[j];
       
          if(n === sum) {
            count++;
            break;
          }
       }
    }
 
    return count;
};

 console.log(subarraySum([1, 2, 5, 3], 3));
