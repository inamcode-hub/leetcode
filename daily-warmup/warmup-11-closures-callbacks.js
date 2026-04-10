// ─── WARMUP 11 — CLOSURES & CALLBACKS (Leetcode Thinking Tools) ───
// Closures power memoization. Callbacks power custom sorting.
// These patterns make your leetcode solutions faster and cleaner.

// 1. CLOSURE — a function that "remembers" variables from its outer scope
function makeCounter() {
  let count = 0; // this variable is "closed over"
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// Each call remembers the previous count — that's closure!

// 2. CLOSURE for private state — like a mini class
function createStack() {
  const items = [];
  return {
    push: (x) => items.push(x),
    pop: () => items.pop(),
    peek: () => items[items.length - 1],
    size: () => items.length,
  };
}

const st = createStack();
st.push(10);
st.push(20);
console.log("peek:", st.peek()); // 20
console.log("size:", st.size()); // 2

// 3. MEMOIZE — cache expensive function results (leetcode DP optimization!)
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = args.join(",");
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}

// Slow fibonacci without memo
function fibSlow(n) {
  if (n < 2) return n;
  return fibSlow(n - 1) + fibSlow(n - 2);
}

// Fast fibonacci WITH memo
const fib = memoize(function (n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
});

console.log("fib(10):", fib(10)); // 55 — instant!
console.log("fib(40):", fib(40)); // 102334155 — still instant with memo

// 4. CALLBACK — passing a function as an argument
// You already do this with .sort(), .map(), .filter()!
const nums = [5, 3, 8, 1, 9];

// Custom comparator callback for sort
const ascending = (a, b) => a - b;
const descending = (a, b) => b - a;
console.log("asc:", [...nums].sort(ascending));   // [1,3,5,8,9]
console.log("desc:", [...nums].sort(descending)); // [9,8,5,3,1]

// 5. Sort objects with a callback — very common in leetcode
const intervals = [[3, 5], [1, 3], [2, 8], [0, 6]];
intervals.sort((a, b) => a[0] - b[0]); // sort by start time
console.log("sorted intervals:", intervals);

// Sort by multiple criteria: first by start, then by end
const events = [[1, 5], [1, 3], [2, 4], [2, 2]];
events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
console.log("multi-sort:", events); // [[1,3],[1,5],[2,2],[2,4]]

// 6. Higher-order function — returns a function
function multiplier(factor) {
  return (n) => n * factor;
}
const double = multiplier(2);
const triple = multiplier(3);
console.log("double(5):", double(5)); // 10
console.log("triple(5):", triple(5)); // 15
console.log("map with double:", [1, 2, 3].map(double)); // [2,4,6]

// 7. Compose functions — chain transformations
function compose(f, g) {
  return (x) => f(g(x));
}
const addOne = (n) => n + 1;
const square = (n) => n * n;
const addOneThenSquare = compose(square, addOne);
console.log("addOneThenSquare(4):", addOneThenSquare(4)); // 25 = (4+1)^2

// 8. forEach with index — useful for building adjacency lists
const words = ["hello", "world", "foo"];
words.forEach((word, index) => {
  console.log(`words[${index}] = "${word}"`);
});

// 9. Reduce with a callback — the most powerful array method
// Sum, product, flatten, group, count — reduce does it all
const sum = [1, 2, 3, 4, 5].reduce((acc, n) => acc + n, 0);
console.log("sum:", sum); // 15

// Reduce to build a frequency map (leetcode staple!)
const letters = ["a", "b", "a", "c", "b", "a"];
const freq = letters.reduce((map, ch) => {
  map[ch] = (map[ch] || 0) + 1;
  return map;
}, {});
console.log("freq via reduce:", freq); // { a: 3, b: 2, c: 1 }

// Reduce to group items
const people = [
  { name: "Alice", dept: "eng" },
  { name: "Bob", dept: "eng" },
  { name: "Carol", dept: "design" },
];
const grouped = people.reduce((groups, person) => {
  const key = person.dept;
  if (!groups[key]) groups[key] = [];
  groups[key].push(person.name);
  return groups;
}, {});
console.log("grouped:", grouped); // { eng: ["Alice","Bob"], design: ["Carol"] }


// ─── EXAMPLE ───
// Q: create a memoized version of factorial
const factorial = memoize(function (n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});
console.log("factorial(5):", factorial(5));   // 120
console.log("factorial(10):", factorial(10)); // 3628800


// ─── PRACTICE ───
// Q1: write `once(fn)` — returns a function that only calls fn the FIRST time.
//     After that it returns the same result without calling fn again.
function once(fn) {
  // TODO (hint: use a closure to track if it's been called)
}
// const sayHi = once(() => "hi!");
// console.log(sayHi()); // "hi!"
// console.log(sayHi()); // "hi!" (cached, fn not called again)

// Q2: sort these intervals by END time (not start time)
function sortByEnd(intervals) {
  // TODO — return sorted copy
}
// console.log(sortByEnd([[1,5],[3,2],[2,8],[0,1]])); // [[0,1],[3,2],[1,5],[2,8]]

// Q3: use reduce to find the maximum value in an array
function findMax(arr) {
  // TODO — use reduce, no Math.max
}
// console.log(findMax([3, 7, 2, 9, 1])); // 9


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════
// 1. Write `makeCounter()` that returns a function — each call returns count++
// 2. Write `memoize(fn)` that caches results by args.join(",")
// 3. Create a memoized fibonacci using your memoize
// 4. Sort an array of [start, end] intervals by start time
// 5. Sort by TWO criteria: first by start, then by end (a[0]-b[0] || a[1]-b[1])
// 6. Write `multiplier(factor)` that returns (n) => n * factor
// 7. Use reduce to sum an array
// 8. Use reduce to build a frequency map from an array of strings
// 9. Write `once(fn)` — a function wrapper that only calls fn once
// 10. Write `sortByEnd(intervals)` — sort intervals by their end value
