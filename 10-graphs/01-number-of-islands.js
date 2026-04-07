// 200. Number of Islands
// Given a 2D grid of '1's (land) and '0's (water), count the number of islands.
// An island is surrounded by water and formed by connecting adjacent land horizontally/vertically.
//
// Example:
// grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ] -> Output: 3
//
// Hint: Loop through grid. When you find '1', do DFS/BFS to mark all connected '1's as visited.

function numIslands(grid) {
  // Your solution here
}

// Tests
console.log(numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
])); // Expected: 1

console.log(numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
])); // Expected: 3
