// 15. 3Sum
// Given an integer array nums, return all triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.
// No duplicate triplets in the answer.
//
// Example: nums = [-1,0,1,2,-1,-4] -> Output: [[-1,-1,2],[-1,0,1]]
//
// Hint: Sort first, then for each number use two pointers on the remaining array

function threeSum(nums) {
  // Your solution here
}

// Tests
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // Expected: []
console.log(threeSum([0, 0, 0])); // Expected: [[0,0,0]]
