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
// 1. Function declaration `add(a, b)` that returns a + b
// 2. Arrow function `square(n)` that returns n * n
// 3. Arrow function `greet(name)` with default "world", returns "Hello, <name>!"
// 4. Function `sumOfSquares(a, b)` that uses square() inside it
// 5. Function `max(a, b)` that returns the larger value
// 6. Function `isEven(n)` that returns true/false
//
// Then console.log each one to test it.
