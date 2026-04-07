// 33. Search in Rotated Sorted Array
// A sorted array is rotated at some pivot. Given the array and a target,
// return its index or -1. Must be O(log n).
//
// Example: nums = [4,5,6,7,0,1,2], target = 0 -> Output: 4
//
// Hint: Binary search but check which half is sorted, then decide which half to search

function search(nums, target) {
  // Your solution here
}

// Tests
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Expected: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Expected: -1
console.log(search([1], 0)); // Expected: -1
