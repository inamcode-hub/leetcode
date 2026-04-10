// ─── WARMUP 13 — TREE NODES (Build & Traverse) ───
// Trees are in ~30% of leetcode problems. You MUST know how to
// build them, traverse them (DFS and BFS), and think recursively.

// 1. THE NODE — binary tree building block
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// 2. BUILD A TREE MANUALLY
//       1
//      / \
//     2   3
//    / \   \
//   4   5   6
const root = new TreeNode(1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6))
);

// 3. BUILD FROM ARRAY — leetcode gives trees as arrays like [1,2,3,null,4,5]
// Level-order: index 0 = root, children of i are at 2i+1 and 2i+2
function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const node = queue.shift();

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

const tree = buildTree([1, 2, 3, null, 4, 5, 6]);

// ─── DFS: DEPTH-FIRST SEARCH (uses recursion or stack) ───

// 4. PREORDER — root, left, right (good for copying a tree)
function preorder(root) {
  if (!root) return [];
  return [root.val, ...preorder(root.left), ...preorder(root.right)];
}
console.log("preorder:", preorder(root)); // [1,2,4,5,3,6]

// 5. INORDER — left, root, right (gives sorted order for BST!)
function inorder(root) {
  if (!root) return [];
  return [...inorder(root.left), root.val, ...inorder(root.right)];
}
console.log("inorder:", inorder(root)); // [4,2,5,1,3,6]

// 6. POSTORDER — left, right, root (good for deleting a tree)
function postorder(root) {
  if (!root) return [];
  return [...postorder(root.left), ...postorder(root.right), root.val];
}
console.log("postorder:", postorder(root)); // [4,5,2,6,3,1]

// 7. DFS with a HELPER — the standard leetcode pattern
// Most tree problems follow this structure:
function maxDepth(root) {
  if (!root) return 0; // base case
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return 1 + Math.max(leftDepth, rightDepth);
}
console.log("max depth:", maxDepth(root)); // 3

// ─── BFS: BREADTH-FIRST SEARCH (uses queue) ───

// 8. LEVEL ORDER TRAVERSAL — process level by level
function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length; // nodes at current level
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}
console.log("level order:", levelOrder(root)); // [[1],[2,3],[4,5,6]]

// 9. TREE TO ARRAY — flat level-order (for printing/testing)
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
console.log("toArray:", toArray(root)); // [1,2,3,4,5,6]

// 10. INVERT TREE — swap left and right at every node
function invertTree(root) {
  if (!root) return null;
  [root.left, root.right] = [root.right, root.left]; // swap!
  invertTree(root.left);
  invertTree(root.right);
  return root;
}

const invertTest = buildTree([4, 2, 7, 1, 3, 6, 9]);
console.log("before invert:", toArray(invertTest));
invertTree(invertTest);
console.log("after invert:", toArray(invertTest)); // [4,7,2,9,6,3,1]

// 11. CHECK IF SAME TREE — compare two trees
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
console.log("same?", isSameTree(buildTree([1, 2, 3]), buildTree([1, 2, 3]))); // true
console.log("same?", isSameTree(buildTree([1, 2, 3]), buildTree([1, 2, 4]))); // false

// 12. PATTERN: pass info DOWN with params, collect info UP with return values
// Example: check if tree is valid BST
function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return isValidBST(root.left, min, root.val) &&
         isValidBST(root.right, root.val, max);
}
console.log("valid BST?", isValidBST(buildTree([2, 1, 3]))); // true
console.log("valid BST?", isValidBST(buildTree([5, 1, 4, null, null, 3, 6]))); // false


// ─── EXAMPLE ───
// Q: find the sum of all node values in a tree
function treeSum(root) {
  if (!root) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
}
console.log("tree sum:", treeSum(root)); // 1+2+3+4+5+6 = 21


// ─── PRACTICE ───
// Q1: count the total number of nodes in a tree
function countNodes(root) {
  // TODO (hint: if null return 0, else 1 + count(left) + count(right))
}
// console.log(countNodes(root)); // 6

// Q2: find the minimum value in a binary tree (not BST — check all nodes)
function findMin(root) {
  // TODO (hint: recurse left and right, return min of all three: val, left, right)
}
// console.log(findMin(buildTree([3, 1, 4, 1, 5, 9, 2]))); // 1

// Q3: check if a tree is symmetric (mirror of itself)
//     Symmetric:    1         Not symmetric:  1
//                  / \                       / \
//                 2   2                     2   2
//                / \ / \                     \   \
//               3  4 4  3                    3    3
function isSymmetric(root) {
  // TODO (hint: write a helper isMirror(left, right) that checks:
  //   both null = true, one null = false, vals equal + isMirror(l.left, r.right) && isMirror(l.right, r.left))
}
// console.log(isSymmetric(buildTree([1, 2, 2, 3, 4, 4, 3]))); // true
// console.log(isSymmetric(buildTree([1, 2, 2, null, 3, null, 3]))); // false


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════
// 1. Class `TreeNode` with constructor(val, left, right)
// 2. Build a tree manually:  1 -> (2,3), 2 -> (4,5), 3 -> (null,6)
// 3. Function `buildTree(arr)` — level-order array to tree
// 4. Function `preorder(root)` — return array [root, left, right]
// 5. Function `inorder(root)` — return array [left, root, right]
// 6. Function `levelOrder(root)` — return 2D array of levels
// 7. Function `maxDepth(root)` — 1 + max(left, right)
// 8. Function `invertTree(root)` — swap left/right at every node
// 9. Function `isSameTree(p, q)` — compare two trees
// 10. Function `countNodes(root)` — total number of nodes
