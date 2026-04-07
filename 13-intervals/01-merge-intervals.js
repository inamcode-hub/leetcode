// 56. Merge Intervals
// Given an array of intervals, merge all overlapping intervals.
//
// Example: intervals = [[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]
//
// Hint: Sort by start time. If current interval overlaps with last merged, extend it.

function merge(intervals) {
  // Your solution here
}

// Tests
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1, 4], [4, 5]])); // Expected: [[1,5]]
