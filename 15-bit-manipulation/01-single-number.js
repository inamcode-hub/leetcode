// 136. Single Number
// Given a non-empty array where every element appears twice except one, find that single one.
// Must be O(n) time and O(1) space.
//
// Example 1: nums = [2,2,1] -> Output: 1
// Example 2: nums = [4,1,2,1,2] -> Output: 4
//
// Hint: XOR (^) cancels out duplicates! a ^ a = 0, a ^ 0 = a

function singleNumber(nums) {
  // Your solution here
}

// Tests
console.log(singleNumber([2, 2, 1])); // Expected: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Expected: 4
console.log(singleNumber([1])); // Expected: 1
