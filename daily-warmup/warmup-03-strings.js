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
// 1. Create a string s = "hello world", log its length and first char
// 2. Use slice() to get "hello" and the last 5 chars
// 3. Use split(" ") to break it into words, then join with "-"
// 4. Check if it includes "world", and find the index of "o"
// 5. Loop through every character with for...of and print them
// 6. Function `reverseStr(s)` that reverses a string
// 7. Function `countVowels(s)` that counts vowels in a string
