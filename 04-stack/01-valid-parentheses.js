// 20. Valid Parentheses
// Given a string s containing just '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
// Open brackets must be closed by the same type and in the correct order.
//
// Example 1: s = "()" -> true
// Example 2: s = "()[]{}" -> true
// Example 3: s = "(]" -> false
//
// Hint: Push opening brackets onto a stack. Pop and compare for closing ones.

function isValid(s) {
  // Your solution here
}

// Tests
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("([)]")); // Expected: false
console.log(isValid("{[]}")); // Expected: true
