// SORT — DEFAULT SORT IS LEXICOGRAPHIC! Always pass a comparator for numbers.
const nums = [10, 2, 33, 4, 5];

console.log("wrong:", [...nums].sort());            // [10,2,33,4,5] (sorted as strings!)
console.log("asc:",   [...nums].sort((a, b) => a - b)); // [2,4,5,10,33]
console.log("desc:",  [...nums].sort((a, b) => b - a)); // [33,10,5,4,2]

// Sort objects by a field
const people = [
  { name: "A", age: 30 },
  { name: "B", age: 22 },
  { name: "C", age: 27 },
];
people.sort((a, b) => a.age - b.age);
console.log("by age:", people);

// Sort strings (default works for strings)
const words = ["banana", "apple", "cherry"];
words.sort();
console.log("words:", words);


// MATH essentials
console.log("max:",  Math.max(3, 7, 2));     // 7
console.log("min:",  Math.min(3, 7, 2));     // 2
console.log("abs:",  Math.abs(-5));          // 5
console.log("floor:", Math.floor(3.9));      // 3
console.log("ceil:",  Math.ceil(3.1));       // 4
console.log("round:", Math.round(3.5));      // 4
console.log("pow:",   Math.pow(2, 10));      // 1024
console.log("sqrt:",  Math.sqrt(16));        // 4

// Spread with Math.max — common trick
console.log("max of arr:", Math.max(...nums)); // 33

// Big / small starting values for loops
let best = -Infinity;
let worst = Infinity;
for (const n of nums) {
  if (n > best) best = n;
  if (n < worst) worst = n;
}
console.log("best:", best, "worst:", worst);

// Integer division & modulo
console.log("7 / 2 =", 7 / 2);                 // 3.5
console.log("Math.floor(7/2) =", Math.floor(7 / 2)); // 3
console.log("7 % 2 =", 7 % 2);                 // 1 (remainder)


// SPREAD / REST
const a = [1, 2, 3];
const b = [4, 5, 6];
const merged = [...a, ...b];
console.log("merged:", merged);

const copy = [...a];           // shallow copy
const obj  = { x: 1, y: 2 };
const obj2 = { ...obj, z: 3 }; // copy + extend
console.log("obj2:", obj2);

function sumAll(...args) {     // rest params
  return args.reduce((s, n) => s + n, 0);
}
console.log("sumAll:", sumAll(1, 2, 3, 4, 5));


// ─── EXAMPLE ───
// Q: given an array, return the second largest number
function secondLargest(arr) {
  const sorted = [...arr].sort((a, b) => b - a);
  return sorted[1];
}
console.log(secondLargest([5, 2, 8, 1, 9])); // 8

// ─── PRACTICE ───
// Q: given an array of numbers, return the average
function average(arr) {
  // TODO  (hint: use reduce to sum, then divide by arr.length)
}
// console.log(average([2,4,6,8])); // 5


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════

const myNums = [10, 2, 33, 4, 5];

// 1. Sort ascending and descending using a comparator
const myAsc = []; // TODO: [...myNums].sort(...)
const myDesc = []; // TODO: [...myNums].sort(...)
console.log("asc:", myAsc);   // Expected: [2, 4, 5, 10, 33]
console.log("desc:", myDesc);  // Expected: [33, 10, 5, 4, 2]

// 2. Sort array of objects by age
const myPeople = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 22 },
  { name: "Carol", age: 27 },
];
// TODO: myPeople.sort(...)
console.log("by age:", myPeople); // Expected: Bob(22), Carol(27), Alice(30)

// 3. Use Math methods — fill in the results
console.log("max:", Math.max(3, 7, 2));     // Expected: 7
console.log("min:", Math.min(3, 7, 2));     // Expected: 2
console.log("abs:", Math.abs(-5));           // Expected: 5
console.log("floor:", Math.floor(3.9));     // Expected: 3
console.log("ceil:", Math.ceil(3.1));       // Expected: 4
console.log("round:", Math.round(3.5));     // Expected: 4
console.log("pow:", Math.pow(2, 10));       // Expected: 1024
console.log("sqrt:", Math.sqrt(16));        // Expected: 4

// 4. Find the max of an array using spread
console.log("max of arr:", Math.max(...myNums)); // Expected: 33

// 5. Loop tracking best/worst with -Infinity / Infinity
let myBest = -Infinity;
let myWorst = Infinity;
// TODO: loop myNums, update myBest and myWorst
console.log("best:", myBest, "worst:", myWorst); // Expected: 33, 2

// 6. Integer division and modulo
console.log("7 / 2 =", 7 / 2);                          // Expected: 3.5
console.log("Math.floor(7/2) =", Math.floor(7 / 2));     // Expected: 3
console.log("7 % 2 =", 7 % 2);                           // Expected: 1

// 7. Spread: merge two arrays, copy an array, extend an object
const myA = [1, 2, 3];
const myB = [4, 5, 6];
const myMerged = []; // TODO: [...myA, ...myB]
const myCopy = [];   // TODO: [...myA]
const myObj = { x: 1, y: 2 };
const myObj2 = {};   // TODO: { ...myObj, z: 3 }
console.log("merged:", myMerged);  // Expected: [1,2,3,4,5,6]
console.log("copy:", myCopy);      // Expected: [1,2,3]
console.log("obj2:", myObj2);      // Expected: { x: 1, y: 2, z: 3 }

// 8. Sums all arguments using rest params and reduce
function mySumAll(...args) {
  // TODO — use args.reduce
}
console.log(mySumAll(1, 2, 3, 4, 5)); // Expected: 15
console.log(mySumAll(10, 20));         // Expected: 30

// 9a. Returns the second largest number
function mySecondLargest(arr) {
  // TODO — sort descending, return [1]
}
console.log(mySecondLargest([5, 2, 8, 1, 9])); // Expected: 8
console.log(mySecondLargest([10, 20, 30]));     // Expected: 20

// 9b. Returns the average of an array
function myAverage(arr) {
  // TODO — reduce to sum, divide by length
}
console.log(myAverage([2, 4, 6, 8]));    // Expected: 5
console.log(myAverage([10, 20, 30]));    // Expected: 20
