// 104. Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// Maximum depth = number of nodes along the longest root-to-leaf path.
//
// Example: [3,9,20,null,null,15,7] -> Output: 3
//
// Hint: Recursion. Depth = 1 + max(depth(left), depth(right))

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root) {
  // Your solution here
}

// Tests
const root = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxDepth(root)); // Expected: 3
console.log(maxDepth(null)); // Expected: 0
