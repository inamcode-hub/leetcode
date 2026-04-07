// 141. Linked List Cycle
// Given head, determine if the linked list has a cycle.
//
// Hint: Floyd's Tortoise and Hare - use slow (1 step) and fast (2 steps) pointers.
// If they meet, there's a cycle.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function hasCycle(head) {
  // Your solution here
}

// Tests
// Cycle test
const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // cycle back to node2
console.log(hasCycle(node1)); // Expected: true

// No cycle test
const a = new ListNode(1);
const b = new ListNode(2);
a.next = b;
console.log(hasCycle(a)); // Expected: false
