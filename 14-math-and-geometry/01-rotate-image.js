// 48. Rotate Image
// Given an n x n 2D matrix, rotate it 90 degrees clockwise. Do it in-place.
//
// Example: [[1,2,3],[4,5,6],[7,8,9]] -> [[7,4,1],[8,5,2],[9,6,3]]
//
// Hint: First transpose the matrix (swap rows and columns), then reverse each row.

function rotate(matrix) {
  // Your solution here (modify matrix in-place)
}

// Tests
const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(matrix1);
console.log(matrix1); // Expected: [[7,4,1],[8,5,2],[9,6,3]]

const matrix2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
rotate(matrix2);
console.log(matrix2); // Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
