// ([1, 1, 1], 2) -> 2
// ([1, 2, 1], 3) -> 2
// ([1, 2, 5, 3], 3) -> 2
// ([10, 5, 6, 7, 8, 7], 15) -> 3

function subarraySum(nums, k) {
    let max_ending_here = 0, max_so_far = Number.MIN_VALUE;
              for (let i = 0; i < k; i++) {
   
                  // include current element to previous subarray only
                  // when it can add to a bigger number than itself.
                  if (arr[i] <= max_ending_here + arr[i]) {
                      max_ending_here += nums[i];
                  }
   
                  // Else start the max subarray from current element
                  else {
                      max_ending_here = nums[i];
                  }
                  if (max_ending_here > max_so_far) {
                      max_so_far = max_ending_here;
                  }
              }
              return max_so_far;
  }
