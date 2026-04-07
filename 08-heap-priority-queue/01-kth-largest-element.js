// 703. Kth Largest Element in a Stream
// Design a class to find the kth largest element in a stream.
//
// For interview prep, start with the simpler version:
// 215. Kth Largest Element in an Array
// Given an integer array nums and an integer k, return the kth largest element.
//
// Example: nums = [3,2,1,5,6,4], k = 2 -> Output: 5
//
// Hint: Sort descending and return k-1 index. For optimal, use a min-heap of size k.

function findKthLargest(nums, k) {
  // Your solution here (sorting approach is fine to start)
}

// Tests
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Expected: 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Expected: 4
