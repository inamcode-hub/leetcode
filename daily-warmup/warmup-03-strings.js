const s = "hello world";

// 1. Length, char access
console.log("length:", s.length);
console.log("first char:", s[0]);
console.log("charAt(6):", s.charAt(6));

// 2. Slice / substring
console.log("slice(0,5):", s.slice(0, 5));
console.log("slice(-5):", s.slice(-5));

// 3. Split / join
const words = s.split(" ");
console.log("words:", words);
console.log("joined with -:", words.join("-"));

// 4. Includes / indexOf
console.log("includes 'world':", s.includes("world"));
console.log("indexOf 'o':", s.indexOf("o"));

// 5. Loop chars
for (const c of s) {
  process.stdout.write(c + ".");
}
console.log();

// ─── EXAMPLE ───
// Q: reverse a string: "abc" -> "cba"
function reverseStr(s) {
  return s.split("").reverse().join("");
}
console.log("reverse =", reverseStr("hello")); // "olleh"

// ─── PRACTICE ───
// Q: count the number of vowels in a string ("leetcode" -> 4)
function countVowels(s) {
  // TODO  (hint: vowels are "aeiou", loop and check includes)
}
// console.log(countVowels("leetcode")); // 4


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════

const myStr = "hello world";

// 1. Log its length and first character
// TODO: console.log length and first char
// Expected: 11, "h"

// 2. Use slice() to get "hello" and the last 5 chars ("world")
const myFirst5 = ""; // TODO: myStr.slice(...)
const myLast5 = "";  // TODO: myStr.slice(...)
console.log("first5:", myFirst5); // Expected: "hello"
console.log("last5:", myLast5);   // Expected: "world"

// 3. Split into words, then join with "-"
const myWords = []; // TODO: myStr.split(...)
const myJoined = ""; // TODO: myWords.join(...)
console.log("words:", myWords);   // Expected: ["hello", "world"]
console.log("joined:", myJoined); // Expected: "hello-world"

// 4. Check includes and indexOf
// TODO: console.log includes "world" and indexOf "o"
// Expected: true, 4

// 5. Loop through every character with for...of
// TODO: for (const c of myStr) — print each

// 6. Reverses a string
function myReverseStr(str) {
  // TODO
}
console.log(myReverseStr("hello"));   // Expected: "olleh"
console.log(myReverseStr("abcdef"));  // Expected: "fedcba"

// 7. Counts vowels in a string (a, e, i, o, u)
function myCountVowels(str) {
  // TODO
}
console.log(myCountVowels("leetcode"));    // Expected: 4
console.log(myCountVowels("hello world")); // Expected: 3
