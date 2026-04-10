// WHILE LOOP — needed for two-pointer & binary search problems
let i = 0;
while (i < 5) {
  console.log("while i =", i);
  i++;
}

// TWO POINTERS pattern
const arr = [1, 2, 3, 4, 5, 6];
let left = 0;
let right = arr.length - 1;
while (left < right) {
  console.log("pair:", arr[left], arr[right]);
  left++;
  right--;
}

// REVERSE an array in-place using two pointers
const r = [1, 2, 3, 4, 5];
let l = 0, h = r.length - 1;
while (l < h) {
  [r[l], r[h]] = [r[h], r[l]]; // swap with destructuring
  l++; h--;
}
console.log("reversed:", r);


// RECURSION — base case + recursive call
function factorial(n) {
  if (n <= 1) return 1;          // base case
  return n * factorial(n - 1);   // recursive call
}
console.log("5! =", factorial(5)); // 120

// Sum 1..n recursively
function sumTo(n) {
  if (n === 0) return 0;
  return n + sumTo(n - 1);
}
console.log("sumTo(10) =", sumTo(10)); // 55

// Fibonacci (slow but classic)
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log("fib(7) =", fib(7)); // 13


// TERNARY + nullish/OR defaults — write less code
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status);

const name = "" || "guest";    // "" is falsy → "guest"
const value = null ?? "default"; // ?? only triggers on null/undefined
console.log(name, value);


// TRUTHY / FALSY — memorize the falsy list:
//   false, 0, "", null, undefined, NaN
// Everything else is truthy.
if ([]) console.log("empty array is TRUTHY");      // prints
if ({}) console.log("empty object is TRUTHY");     // prints
if (!"") console.log("empty string is FALSY");     // prints


// ─── EXAMPLE ───
// Q: check if a string is a palindrome using two pointers
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

// ─── PRACTICE ───
// Q: write a recursive `power(base, exp)` that returns base^exp (no Math.pow)
function power(base, exp) {
  // TODO  (hint: base case exp === 0 returns 1, else base * power(base, exp-1))
}
// console.log(power(2, 5)); // 32


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════

// 1. While loop — print 0..4
let myI = 0;
// TODO: while loop that prints myI and increments
// Expected output: 0, 1, 2, 3, 4

// 2. Two pointers — print pairs from outside in
const myPairs = [1, 2, 3, 4, 5, 6];
let myLeft = 0;
let myRight = myPairs.length - 1;
// TODO: while (myLeft < myRight) — log pair, move both
// Expected: (1,6) (2,5) (3,4)

// 3. Reverse an array in-place using two pointers + swap
const myRev = [1, 2, 3, 4, 5];
// TODO: two pointers, swap with [a,b] = [b,a], move inward
console.log("reversed:", myRev); // Expected: [5, 4, 3, 2, 1]

// 4. Recursive factorial — base case: n <= 1 returns 1
function myFactorial(n) {
  // TODO
}
console.log(myFactorial(5));  // Expected: 120
console.log(myFactorial(0));  // Expected: 1
console.log(myFactorial(7));  // Expected: 5040

// 5. Recursive sum 1..n — base case: n === 0 returns 0
function mySumTo(n) {
  // TODO
}
console.log(mySumTo(10));  // Expected: 55
console.log(mySumTo(5));   // Expected: 15

// 6. Recursive fibonacci — base case: n < 2 returns n
function myFib(n) {
  // TODO
}
console.log(myFib(7));   // Expected: 13
console.log(myFib(10));  // Expected: 55

// 7. Ternary — set status based on age
const myAge = 20;
const myStatus = ""; // TODO: myAge >= 18 ? "adult" : "minor"
console.log("status:", myStatus); // Expected: "adult"

// 8. || default and ?? nullish default
const myName = "" || "guest";
const myValue = null ?? "default";
console.log("name:", myName);   // Expected: "guest"
console.log("value:", myValue); // Expected: "default"

// 9. Checks if a string is a palindrome using two pointers
function myIsPalindrome(s) {
  // TODO — left/right pointers, compare characters moving inward
}
console.log(myIsPalindrome("racecar")); // Expected: true
console.log(myIsPalindrome("hello"));   // Expected: false
console.log(myIsPalindrome("abba"));    // Expected: true

// 10. Recursive power — base case: exp === 0 returns 1
function myPower(base, exp) {
  // TODO — base * myPower(base, exp - 1)
}
console.log(myPower(2, 5));  // Expected: 32
console.log(myPower(3, 3));  // Expected: 27
console.log(myPower(5, 0));  // Expected: 1
