// 206. Reverse Linked List
// Given the head of a singly linked list, reverse it and return the new head.
//
// Example: [1,2,3,4,5] -> [5,4,3,2,1]
//
// Hint: Use three pointers: prev, curr, next. Flip each pointer.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  // Your solution here
}

// Helper: build list from array
function buildList(arr) {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    head = new ListNode(arr[i], head);
  }
  return head;
}

// Helper: list to array for easy printing
function toArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Tests
console.log(toArray(reverseList(buildList([1, 2, 3, 4, 5])))); // Expected: [5,4,3,2,1]
console.log(toArray(reverseList(buildList([1, 2])))); // Expected: [2,1]
console.log(toArray(reverseList(buildList([])))); // Expected: []
