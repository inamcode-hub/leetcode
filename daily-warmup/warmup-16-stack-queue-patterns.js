// ─── WARMUP 16 — STACK & QUEUE PATTERNS (Essential Data Structures) ───
// Stacks and queues aren't just data structures — they're PATTERNS.
// Stack = DFS, matching, monotonic. Queue = BFS, level-order.

// ╔═══════════════════════════════════╗
// ║  STACK PATTERNS                   ║
// ╚═══════════════════════════════════╝

// PATTERN 1: MATCHING — parentheses, brackets, tags
function isValid(s) {
  const stack = [];
  const map = { ")": "(", "}": "{", "]": "[" };

  for (const ch of s) {
    if (ch in map) {
      if (stack.pop() !== map[ch]) return false;
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0;
}
console.log("valid:", isValid("()[]{}")); // true
console.log("valid:", isValid("(]"));     // false
console.log("valid:", isValid("{[]}")); // true

// PATTERN 2: MONOTONIC STACK — "next greater/smaller element"
// Keep stack in increasing/decreasing order. When you find an element
// that breaks the pattern, pop and process.

// Next Greater Element: for each element, find the first bigger one to its right
function nextGreater(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = []; // stores INDICES

  for (let i = 0; i < nums.length; i++) {
    // While current element is greater than what's on the stack
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = nums[i]; // nums[i] is the next greater for nums[idx]
    }
    stack.push(i);
  }
  return result;
}
console.log("next greater:", nextGreater([2, 1, 2, 4, 3])); // [4, 2, 4, -1, -1]

// PATTERN 3: STACK FOR DFS — iterative depth-first search
// Instead of recursion, use an explicit stack
function dfsIterative(root) {
  if (!root) return [];
  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    // Push right first so left is processed first (LIFO)
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
}

// PATTERN 4: MIN STACK — track minimum alongside values
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    const min = this.minStack.length
      ? Math.min(val, this.minStack[this.minStack.length - 1])
      : val;
    this.minStack.push(min);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const ms = new MinStack();
ms.push(3); ms.push(5); ms.push(1); ms.push(4);
console.log("min:", ms.getMin()); // 1
ms.pop(); ms.pop();
console.log("min after pops:", ms.getMin()); // 3

// PATTERN 5: Evaluate Reverse Polish Notation (postfix)
function evalRPN(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (["+", "-", "*", "/"].includes(token)) {
      const b = stack.pop();
      const a = stack.pop();
      if (token === "+") stack.push(a + b);
      if (token === "-") stack.push(a - b);
      if (token === "*") stack.push(a * b);
      if (token === "/") stack.push(Math.trunc(a / b)); // truncate toward zero
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0];
}
console.log("RPN:", evalRPN(["2", "1", "+", "3", "*"])); // 9 = (2+1)*3


// ╔═══════════════════════════════════╗
// ║  QUEUE PATTERNS                   ║
// ╚═══════════════════════════════════╝

// PATTERN 6: BFS — breadth-first search uses a queue
// Level-order traversal of a tree
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
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

const tree = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log("level order:", levelOrder(tree)); // [[3],[9,20],[15,7]]

// PATTERN 7: BFS on a grid — find shortest path
function shortestPath(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  if (grid[0][0] === 1) return -1; // blocked

  const queue = [[0, 0, 1]]; // [row, col, distance]
  grid[0][0] = 1; // mark visited

  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while (queue.length) {
    const [r, c, dist] = queue.shift();

    if (r === rows - 1 && c === cols - 1) return dist;

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 0) {
        grid[nr][nc] = 1; // mark visited
        queue.push([nr, nc, dist + 1]);
      }
    }
  }
  return -1;
}

console.log("shortest:", shortestPath([
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
])); // 5

// PATTERN 8: RECENT COUNTER — queue of timestamps
class RecentCounter {
  constructor() {
    this.queue = [];
  }

  ping(t) {
    this.queue.push(t);
    // Remove pings older than 3000ms ago
    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }
    return this.queue.length;
  }
}

const rc = new RecentCounter();
console.log("ping:", rc.ping(1));    // 1
console.log("ping:", rc.ping(100));  // 2
console.log("ping:", rc.ping(3001)); // 3
console.log("ping:", rc.ping(3002)); // 3 (ping at 1 dropped off)


// ─── EXAMPLE ───
// Q: Daily Temperatures — for each day, how many days until warmer?
// Uses monotonic decreasing stack
function dailyTemperatures(temps) {
  const result = new Array(temps.length).fill(0);
  const stack = []; // stores indices

  for (let i = 0; i < temps.length; i++) {
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = i - idx; // days waited
    }
    stack.push(i);
  }
  return result;
}
console.log("daily temps:", dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// [1, 1, 4, 2, 1, 1, 0, 0]


// ─── PRACTICE ───
// Q1: implement a queue using two stacks (classic interview question!)
class MyQueue {
  constructor() {
    // TODO — use this.pushStack and this.popStack
  }
  push(x) { /* TODO */ }
  pop() { /* TODO — hint: if popStack empty, move all from pushStack */ }
  peek() { /* TODO */ }
  empty() { /* TODO */ }
}
// const q = new MyQueue();
// q.push(1); q.push(2);
// console.log(q.peek()); // 1
// console.log(q.pop());  // 1
// console.log(q.empty()); // false

// Q2: Next Smaller Element — like nextGreater but find first SMALLER to the right
function nextSmaller(nums) {
  // TODO (hint: same as nextGreater but flip the comparison)
}
// console.log(nextSmaller([4, 2, 1, 5, 3])); // [2, 1, -1, 3, -1]

// Q3: Check if a string of brackets is balanced including nested: "((()))" yes, "(()" no
function isBalanced(s) {
  // TODO (hint: just count — increment for '(', decrement for ')', never go negative)
}
// console.log(isBalanced("((()))")); // true
// console.log(isBalanced("(()"));    // false
// console.log(isBalanced(")("));     // false


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════
// STACK:
// 1. `isValid(s)` — matching brackets with stack + map
// 2. `nextGreater(nums)` — monotonic stack, stores indices
// 3. MinStack class — stack + minStack side by side
// 4. `evalRPN(tokens)` — evaluate postfix with stack
// 5. `dailyTemperatures(temps)` — monotonic decreasing stack
//
// QUEUE:
// 6. `levelOrder(root)` — BFS with queue, process level by level
// 7. `shortestPath(grid)` — BFS on grid, queue stores [r, c, dist]
// 8. MyQueue class using two stacks
