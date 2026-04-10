// ─── WARMUP 10 — DESTRUCTURING & SPREAD (Leetcode Power Tools) ───
// These patterns show up EVERYWHERE in leetcode solutions.
// Master them here so you write cleaner, faster code in problems.

// 1. Array destructuring — grab values by position
const [first, second, third] = [10, 20, 30];
console.log("first:", first, "second:", second); // 10 20

// 2. SWAP without temp variable — used in sorting, two pointers, partitioning
let a = 1, b = 2;
[a, b] = [b, a];
console.log("swapped:", a, b); // 2 1

// In-place array swap (used in reverse, quicksort, rotate)
const arr = [1, 2, 3, 4, 5];
[arr[0], arr[4]] = [arr[4], arr[0]];
console.log("swapped in array:", arr); // [5,2,3,4,1]

// 3. Skip values with commas
const [, , thirdItem] = ["a", "b", "c", "d"];
console.log("skip to third:", thirdItem); // "c"

// 4. REST in destructuring — grab "the rest" into an array
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log("head:", head); // 1
console.log("tail:", tail); // [2,3,4,5]
// Leetcode use: separate first element from rest (linked list thinking)

// 5. Object destructuring with RENAME — cleaner variable names
const point = { x: 10, y: 20 };
const { x: col, y: row } = point;
console.log("col:", col, "row:", row); // 10 20

// 6. Nested destructuring — reach into deep structures
const data = { user: { name: "Inam", scores: [90, 85, 92] } };
const { user: { name, scores: [firstScore] } } = data;
console.log("name:", name, "first score:", firstScore); // "Inam" 90

// 7. Default values — prevent undefined
const { a: valA = 0, b: valB = 0 } = { a: 5 };
console.log("valA:", valA, "valB:", valB); // 5 0
// Leetcode use: map.get(key) || 0 is the same idea

// 8. Spread to CLONE — never mutate the original in leetcode!
const original = [1, 2, 3];
const clone = [...original];
clone.push(4);
console.log("original:", original); // [1,2,3] — safe!
console.log("clone:", clone);       // [1,2,3,4]

// 9. Spread to MERGE arrays
const left = [1, 2, 3];
const right = [4, 5, 6];
const merged = [...left, ...right];
console.log("merged:", merged); // [1,2,3,4,5,6]

// 10. Spread to build results in backtracking
// When you find a valid combo, you copy it: result.push([...current])
const result = [];
const current = [1, 2];
result.push([...current]); // snapshot, not reference
current.push(3);
result.push([...current]);
console.log("result:", result); // [[1,2], [1,2,3]] — each is independent

// 11. Destructuring in function params — clean leetcode helpers
function distance({ x: x1, y: y1 }, { x: x2, y: y2 }) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
console.log("distance:", distance({ x: 0, y: 0 }, { x: 3, y: 4 })); // 5

// 12. Destructuring in for...of — loop entries cleanly
const freq = new Map([["a", 3], ["b", 1], ["c", 2]]);
for (const [key, val] of freq) {
  console.log(`${key} => ${val}`);
}


// ─── EXAMPLE ───
// Q: given a matrix, swap two rows in-place
function swapRows(matrix, i, j) {
  [matrix[i], matrix[j]] = [matrix[j], matrix[i]];
}
const grid = [[1, 2], [3, 4], [5, 6]];
swapRows(grid, 0, 2);
console.log("swapped rows:", grid); // [[5,6],[3,4],[1,2]]


// ─── PRACTICE ───
// Q1: given [10, 20, 30, 40, 50], use destructuring to get first and last
//     into variables `first` and `last` (hint: rest + last element)
function firstAndLast(arr) {
  // TODO — return { first, last }
}
// console.log(firstAndLast([10, 20, 30, 40, 50])); // { first: 10, last: 50 }

// Q2: reverse an array IN-PLACE using a while loop + destructuring swap
function reverseInPlace(arr) {
  // TODO — two pointer swap
}
// const test = [1,2,3,4,5];
// reverseInPlace(test);
// console.log(test); // [5,4,3,2,1]

// Q3: given an array of [x,y] pairs, destructure in a loop and log each
//     Example: [[1,2],[3,4],[5,6]] -> "x=1 y=2", "x=3 y=4", etc.
function logPairs(pairs) {
  // TODO
}
// logPairs([[1,2],[3,4],[5,6]]);


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════

// 1. Array destructuring — grab first and second
const myArr1 = [10, 20, 30];
// TODO: const [myFirst, mySecond] = myArr1;
console.log("first:", /* myFirst */);   // Expected: 10
console.log("second:", /* mySecond */); // Expected: 20

// 2. Swap two variables without a temp
let myX = 1, myY = 2;
// TODO: [myX, myY] = [myY, myX]
console.log("swapped:", myX, myY); // Expected: 2 1

// 3. Swap two elements in an array in-place
const myArr2 = [10, 20, 30, 40, 50];
// TODO: swap index 0 and index 4 using [arr[0], arr[4]] = [arr[4], arr[0]]
console.log("swapped arr:", myArr2); // Expected: [50, 20, 30, 40, 10]

// 4. Rest — split head from tail
const myArr3 = [1, 2, 3, 4, 5];
// TODO: const [myHead, ...myTail] = myArr3;
console.log("head:", /* myHead */); // Expected: 1
console.log("tail:", /* myTail */); // Expected: [2, 3, 4, 5]

// 5. Object destructuring with rename
const myPoint = { x: 10, y: 20 };
// TODO: const { x: myCol, y: myRow } = myPoint;
console.log("col:", /* myCol */); // Expected: 10
console.log("row:", /* myRow */); // Expected: 20

// 6. Nested destructuring — pull deep values
const myData = { user: { name: "Inam", scores: [90, 85, 92] } };
// TODO: const { user: { name: myName, scores: [myFirstScore] } } = myData;
console.log("name:", /* myName */);        // Expected: "Inam"
console.log("first score:", /* myFirstScore */); // Expected: 90

// 7. Clone an array with spread — prove original is safe
const myOriginal = [1, 2, 3];
const myClone = []; // TODO: [...myOriginal]
myClone.push(4);
console.log("original:", myOriginal); // Expected: [1, 2, 3] — not changed!
console.log("clone:", myClone);       // Expected: [1, 2, 3, 4]

// 8. Push a snapshot into result (backtracking pattern)
const myResult = [];
const myCurrent = [1, 2];
// TODO: myResult.push([...myCurrent])
myCurrent.push(3);
// TODO: myResult.push([...myCurrent])
console.log("result:", myResult); // Expected: [[1,2], [1,2,3]]

// 9. Destructure inside for...of on a Map
const myMap = new Map([["a", 1], ["b", 2], ["c", 3]]);
// TODO: for (const [key, val] of myMap) — log each
// Expected: a => 1, b => 2, c => 3

// 10. Reverse array in-place using two pointers + destructuring swap
function myReverseInPlace(arr) {
  // TODO: let left = 0, right = arr.length - 1; while loop + swap
}
const myTest = [1, 2, 3, 4, 5];
myReverseInPlace(myTest);
console.log("reversed:", myTest); // Expected: [5, 4, 3, 2, 1]

const myTest2 = [10, 20, 30];
myReverseInPlace(myTest2);
console.log("reversed:", myTest2); // Expected: [30, 20, 10]
