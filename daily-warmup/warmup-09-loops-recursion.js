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
// 1. Use a while loop to print 0..4
// 2. Two pointers (left, right) on [1..6] — print pairs from outside in
// 3. Reverse an array in-place using two pointers + swap
// 4. Recursive `factorial(n)` with a base case
// 5. Recursive `sumTo(n)` that returns 1+2+...+n
// 6. Recursive `fib(n)` for fibonacci
// 7. Use a ternary to set status = age >= 18 ? "adult" : "minor"
// 8. Show || default and ?? nullish default
// 9. Function `isPalindrome(s)` using two pointers
// 10. Function `power(base, exp)` recursively
