// 1. Function declaration
function add(a, b) {
  return a + b;
}
console.log('add(2,3) =', add(2, 3));

// 2. Arrow function
const square = (n) => n * n;
console.log('square(5) =', square(5));

// 3. Default params
const greet = (name = 'world') => `Hello, ${name}!`;
console.log(greet());
console.log(greet('Inam'));

// 4. Function calling another function
function sumOfSquares(a, b) {
  return square(a) + square(b);
}
console.log('sumOfSquares(3,4) =', sumOfSquares(3, 4));

// ─── EXAMPLE ───
// Q: write a function that returns the larger of two numbers
function max(a, b) {
  return a > b ? a : b;
}
console.log('max(7,3) =', max(7, 3));

// ─── PRACTICE ───
// Q: write a function `isEven(n)` that returns true if n is even, false otherwise
function isEven(n) {
  // TODO
}
// console.log(isEven(4)); // true
// console.log(isEven(7)); // false


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════

// 1. Function declaration — returns a + b
function myAdd(a, b) {
  // TODO
}
console.log(myAdd(2, 3));   // Expected: 5
console.log(myAdd(10, 20)); // Expected: 30

// 2. Arrow function — returns n * n
const mySquare = (n) => {
  // TODO
};
console.log(mySquare(5));  // Expected: 25
console.log(mySquare(12)); // Expected: 144

// 3. Arrow function with default param — returns "Hello, <name>!"
const myGreet = (name = "world") => {
  // TODO
};
console.log(myGreet());       // Expected: "Hello, world!"
console.log(myGreet("Inam")); // Expected: "Hello, Inam!"

// 4. Function that calls another function — uses mySquare() inside
function mySumOfSquares(a, b) {
  // TODO — use mySquare
}
console.log(mySumOfSquares(3, 4)); // Expected: 25

// 5. Returns the larger of two values
function myMax(a, b) {
  // TODO
}
console.log(myMax(7, 3));   // Expected: 7
console.log(myMax(2, 10));  // Expected: 10

// 6. Returns true if n is even, false otherwise
function myIsEven(n) {
  // TODO
}
console.log(myIsEven(4));  // Expected: true
console.log(myIsEven(7));  // Expected: false
console.log(myIsEven(0));  // Expected: true
