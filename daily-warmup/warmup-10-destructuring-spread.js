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
// 1. Array destructuring: grab first, second from [10,20,30]
// 2. Swap two variables without a temp using [a,b] = [b,a]
// 3. Swap two elements in an array in-place using destructuring
// 4. Use rest (...) to split [head, ...tail] from [1,2,3,4,5]
// 5. Object destructuring with rename: { x: col, y: row }
// 6. Nested destructuring: pull a deep value out of { user: { name, scores: [first] } }
// 7. Clone an array with spread [...arr] and prove the original is safe
// 8. Push a snapshot [...current] into a result array (backtracking pattern)
// 9. Destructure inside for...of: for (const [key, val] of map)
// 10. Function `reverseInPlace(arr)` using two pointers + swap
