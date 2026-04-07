// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears
// at least twice in the array, and return false if every element is distinct.
//
// Example 1: Input: nums = [1,2,3,1] -> Output: true
// Example 2: Input: nums = [1,2,3,4] -> Output: false
//
// Hint: Think about what data structure lets you check existence in O(1)

function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}

// Tests - run with: node 01-contains-duplicate.js
console.log(containsDuplicate([1, 2, 3, 1])); // Expected: true
console.log(containsDuplicate([1, 2, 3, 4])); // Expected: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Expected: true
