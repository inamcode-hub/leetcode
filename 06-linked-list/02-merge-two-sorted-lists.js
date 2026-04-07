// 21. Merge Two Sorted Lists
// Merge two sorted linked lists into one sorted list.
//
// Example: list1 = [1,2,4], list2 = [1,3,4] -> [1,1,2,3,4,4]
//
// Hint: Use a dummy head node, compare both lists node by node

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  // Your solution here
}

// Helpers
function buildList(arr) {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    head = new ListNode(arr[i], head);
  }
  return head;
}

function toArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Tests
console.log(toArray(mergeTwoLists(buildList([1, 2, 4]), buildList([1, 3, 4])))); // Expected: [1,1,2,3,4,4]
console.log(toArray(mergeTwoLists(buildList([]), buildList([])))); // Expected: []
console.log(toArray(mergeTwoLists(buildList([]), buildList([0])))); // Expected: [0]
