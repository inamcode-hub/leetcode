// 226. Invert Binary Tree
// Given the root of a binary tree, invert it (mirror it) and return the root.
//
// Example:     4            4
//            / \    ->    / \
//           2   7        7   2
//          / \ / \      / \ / \
//         1  3 6  9    9  6 3  1
//
// Hint: Recursively swap left and right children

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function invertTree(root) {
  // Your solution here
}

// Helper: level-order traversal to array
function toArray(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return result;
}

// Test
const root = new TreeNode(4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);
console.log(toArray(invertTree(root))); // Expected: [4, 7, 2, 9, 6, 3, 1]
