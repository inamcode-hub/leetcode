// 155. Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element,
// all in O(1) time.
//
// Example:
//   MinStack minStack = new MinStack();
//   minStack.push(-2); minStack.push(0); minStack.push(-3);
//   minStack.getMin(); // return -3
//   minStack.pop();
//   minStack.top();    // return 0
//   minStack.getMin(); // return -2
//
// Hint: Use two stacks - one for values, one to track the current minimum

class MinStack {
  constructor() {
    // Your solution here
  }

  push(val) {
    // Your solution here
  }

  pop() {
    // Your solution here
  }

  top() {
    // Your solution here
  }

  getMin() {
    // Your solution here
  }
}

// Tests
const stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin()); // Expected: -3
stack.pop();
console.log(stack.top()); // Expected: 0
console.log(stack.getMin()); // Expected: -2
