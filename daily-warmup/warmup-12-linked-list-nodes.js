// ─── WARMUP 12 — LINKED LIST NODES (Build the Foundation) ───
// Every linked list leetcode problem uses ListNode.
// Practice building, traversing, and manipulating nodes until it's automatic.

// 1. THE NODE — this is the building block
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 2. BUILD A LIST MANUALLY — wire up nodes one by one
const node3 = new ListNode(3);       // 3 -> null
const node2 = new ListNode(2, node3); // 2 -> 3 -> null
const node1 = new ListNode(1, node2); // 1 -> 2 -> 3 -> null
// node1 is the "head" — you always hold the head

// 3. TRAVERSE — walk from head to tail
console.log("--- traverse ---");
let curr = node1;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}

// 4. BUILD FROM ARRAY — helper you'll reuse in every problem
function buildList(arr) {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    head = new ListNode(arr[i], head);
  }
  return head;
}

const list = buildList([10, 20, 30, 40, 50]);

// 5. CONVERT TO ARRAY — for easy printing/testing
function toArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

console.log("list:", toArray(list)); // [10,20,30,40,50]

// 6. GET LENGTH — count nodes
function getLength(head) {
  let count = 0;
  while (head) {
    count++;
    head = head.next;
  }
  return count;
}
console.log("length:", getLength(list)); // 5

// 7. GET NTH NODE — access by index (0-based)
function getNth(head, n) {
  let i = 0;
  while (head) {
    if (i === n) return head;
    head = head.next;
    i++;
  }
  return null;
}
console.log("node at index 2:", getNth(list, 2).val); // 30

// 8. APPEND — add to the end
function append(head, val) {
  if (!head) return new ListNode(val);
  let curr = head;
  while (curr.next) {
    curr = curr.next;
  }
  curr.next = new ListNode(val);
  return head;
}
const appended = append(buildList([1, 2, 3]), 4);
console.log("appended:", toArray(appended)); // [1,2,3,4]

// 9. PREPEND — add to the front (O(1)!)
function prepend(head, val) {
  return new ListNode(val, head);
}
const prepended = prepend(buildList([2, 3, 4]), 1);
console.log("prepended:", toArray(prepended)); // [1,2,3,4]

// 10. DELETE NODE by value — classic pointer manipulation
function deleteNode(head, val) {
  // Dummy node trick — avoids special case for deleting head
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next; // skip over the node
      break;
    }
    prev = curr;
    curr = curr.next;
  }
  return dummy.next; // new head
}
console.log("delete 30:", toArray(deleteNode(buildList([10, 20, 30, 40]), 30))); // [10,20,40]
console.log("delete head:", toArray(deleteNode(buildList([10, 20, 30]), 10)));   // [20,30]

// 11. DUMMY NODE pattern — THE most important linked list trick
// When the head might change, create a dummy before head.
// At the end, return dummy.next as the new head.
// Used in: merge two lists, remove nth from end, partition list, etc.

// 12. REVERSE — the #1 linked list problem
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next; // save next
    curr.next = prev;       // reverse the link
    prev = curr;            // move prev forward
    curr = next;            // move curr forward
  }
  return prev; // prev is the new head
}
console.log("reverse:", toArray(reverseList(buildList([1, 2, 3, 4, 5])))); // [5,4,3,2,1]

// 13. FIND MIDDLE — slow/fast pointer (tortoise and hare)
function findMiddle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow; // slow is at the middle
}
console.log("middle of [1..5]:", findMiddle(buildList([1, 2, 3, 4, 5])).val); // 3
console.log("middle of [1..6]:", findMiddle(buildList([1, 2, 3, 4, 5, 6])).val); // 4


// ─── EXAMPLE ───
// Q: detect if a linked list has a cycle
function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

const cycleHead = buildList([1, 2, 3, 4]);
const tail = getNth(cycleHead, 3);
tail.next = getNth(cycleHead, 1); // create cycle: 4 -> 2
console.log("has cycle:", hasCycle(cycleHead)); // true
console.log("no cycle:", hasCycle(buildList([1, 2, 3]))); // false


// ─── PRACTICE ───
// Q1: write `insertAt(head, index, val)` that inserts a new node at the given index
function insertAt(head, index, val) {
  // TODO (hint: use dummy node, walk to index-1, wire in new node)
}
// console.log(toArray(insertAt(buildList([1,2,4,5]), 2, 3))); // [1,2,3,4,5]

// Q2: write `removeNthFromEnd(head, n)` that removes the nth node from the end
function removeNthFromEnd(head, n) {
  // TODO (hint: use two pointers — advance fast by n, then move both until fast hits end)
}
// console.log(toArray(removeNthFromEnd(buildList([1,2,3,4,5]), 2))); // [1,2,3,5]

// Q3: write `isPalindromeList(head)` — check if the list reads same forwards and backwards
function isPalindromeList(head) {
  // TODO (hint: find middle, reverse second half, compare both halves)
}
// console.log(isPalindromeList(buildList([1,2,3,2,1]))); // true
// console.log(isPalindromeList(buildList([1,2,3,4,5]))); // false


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════

// 1. ListNode class
class MyListNode {
  constructor(val = 0, next = null) {
    // TODO
  }
}

// 2. Converts array to linked list
function myBuildList(arr) {
  // TODO — loop from end, wrap each in MyListNode
}

// 3. Converts linked list to array (for printing)
function myToArray(head) {
  // TODO — walk with while, push vals
}

// Test 2 & 3 together
console.log(myToArray(myBuildList([10, 20, 30, 40, 50]))); // Expected: [10,20,30,40,50]
console.log(myToArray(myBuildList([1, 2, 3])));             // Expected: [1,2,3]

// 4. Count the number of nodes
function myGetLength(head) {
  // TODO
}
console.log(myGetLength(myBuildList([1, 2, 3, 4, 5]))); // Expected: 5
console.log(myGetLength(myBuildList([])));                // Expected: 0

// 5. Add a node at the end
function myAppend(head, val) {
  // TODO — walk to last node, set .next
}
console.log(myToArray(myAppend(myBuildList([1, 2, 3]), 4))); // Expected: [1,2,3,4]

// 6. Add a node at the front (O(1))
function myPrepend(head, val) {
  // TODO — return new MyListNode(val, head)
}
console.log(myToArray(myPrepend(myBuildList([2, 3, 4]), 1))); // Expected: [1,2,3,4]

// 7. Remove first node with given value (use dummy node!)
function myDeleteNode(head, val) {
  // TODO — dummy -> head, walk prev/curr, skip the matching node
}
console.log(myToArray(myDeleteNode(myBuildList([10, 20, 30, 40]), 30))); // Expected: [10,20,40]
console.log(myToArray(myDeleteNode(myBuildList([10, 20, 30]), 10)));     // Expected: [20,30]

// 8. Reverse a linked list — prev/curr/next pointers
function myReverseList(head) {
  // TODO — let prev = null, curr = head; flip links
}
console.log(myToArray(myReverseList(myBuildList([1, 2, 3, 4, 5])))); // Expected: [5,4,3,2,1]
console.log(myToArray(myReverseList(myBuildList([10, 20]))));         // Expected: [20,10]

// 9. Find the middle node — slow/fast pointers
function myFindMiddle(head) {
  // TODO — slow moves 1 step, fast moves 2 steps
}
console.log(myFindMiddle(myBuildList([1, 2, 3, 4, 5])).val); // Expected: 3
console.log(myFindMiddle(myBuildList([1, 2, 3, 4, 5, 6])).val); // Expected: 4

// 10. Detect if linked list has a cycle — Floyd's algorithm
function myHasCycle(head) {
  // TODO — slow/fast, if they meet -> true
}
// Test with cycle
const myCycleList = myBuildList([1, 2, 3, 4]);
let myTail = myCycleList;
while (myTail.next) myTail = myTail.next;
myTail.next = myCycleList.next; // 4 -> 2 (cycle)
console.log(myHasCycle(myCycleList));             // Expected: true
console.log(myHasCycle(myBuildList([1, 2, 3])));  // Expected: false
