// 53. Maximum Subarray (Kadane's Algorithm)
// Given an integer array nums, find the subarray with the largest sum.
//
// Example: nums = [-2,1,-3,4,-1,2,1,-5,4] -> Output: 6 ([4,-1,2,1])
//
// Hint: Track current sum. If it goes negative, reset to 0.
// Keep track of the maximum sum seen.

function maxSubArray(nums) {
  // Your solution here
}

// Tests
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // Expected: 23
