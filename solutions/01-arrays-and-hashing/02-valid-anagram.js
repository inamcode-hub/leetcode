// 242. Valid Anagram — SOLUTIONS
// Practice file lives at: 01-arrays-and-hashing/02-valid-anagram.js
//
// Problem: return true if string `t` is an anagram of `s`
// (uses all the same letters, exactly once).
//
// Style: John Smilga / Coding Addict — vanilla JS, array methods, small functions.

// ---------- Quick win: anagrams MUST be the same length ----------
// Every solution below starts with this guard, because checking length is O(1)
// and saves us from doing real work on impossible cases.

// ---------- Solution 1: Sort and compare (your current approach) ----------
// Convert each string to an array, sort it, join it back, then compare.
// Pros: dead simple, 1 line of real logic.
// Cons: sorting is O(n log n) — slower than counting, and uses extra memory.
function isAnagramSort(s, t) {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
}

// ---------- Solution 2: Smilga-style frequency object ----------
// This is the pattern Smilga uses constantly: build a "count" object,
// loop through with forEach, and read it back. Very readable.
//
// Step 1: count letters in s
// Step 2: subtract letters in t
// Step 3: if any count is non-zero, it's not an anagram
//
// Time: O(n), Space: O(1) — at most 26 keys for lowercase English letters.
function isAnagramFreq(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  // Count every letter in s
  // (Smilga-style: spread into array so forEach works on a string)
  [...s].forEach((letter) => {
    count[letter] = (count[letter] || 0) + 1;
  });

  // Subtract every letter in t
  [...t].forEach((letter) => {
    count[letter] = (count[letter] || 0) - 1;
  });

  // If any count is not zero, the strings don't match
  // Object.values gives us an array of all the counts
  return Object.values(count).every((value) => value === 0);
}

// ---------- Solution 3: Two frequency maps + compare ----------
// More explicit version — build TWO count objects and compare them.
// Slightly more memory but easier to debug because you can console.log both.
function isAnagramTwoMaps(s, t) {
  if (s.length !== t.length) return false;

  const countLetters = (str) => {
    const map = {};
    [...str].forEach((letter) => {
      map[letter] = (map[letter] || 0) + 1;
    });
    return map;
  };

  const sCount = countLetters(s);
  const tCount = countLetters(t);

  // Compare every key in sCount against tCount
  // Object.keys gives an array of property names
  return Object.keys(sCount).every(
    (letter) => sCount[letter] === tCount[letter],
  );
}

// ---------- Solution 4: Single-loop counter (cleaner, interview-ready) ----------
// Walk both strings at the same time in ONE loop.
// Add for s, subtract for t — at the end every count must be 0.
//
// This is the version most interviewers love: O(n) time, single pass, tight code.
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
    count[t[i]] = (count[t[i]] || 0) - 1;
  }

  return Object.values(count).every((value) => value === 0);
}

// ---------- Solution 5: Map version (instead of plain object) ----------
// JavaScript's Map class is the "proper" hash map.
// Slightly more code but Map.get/Map.set is the textbook hash-table API.
function isAnagramMap(s, t) {
  if (s.length !== t.length) return false;

  const count = new Map();

  for (let i = 0; i < s.length; i++) {
    count.set(s[i], (count.get(s[i]) || 0) + 1);
    count.set(t[i], (count.get(t[i]) || 0) - 1);
  }

  // Check every value in the Map is 0
  for (const value of count.values()) {
    if (value !== 0) return false;
  }
  return true;
}

// ---------- Tests ----------
// Run with: node solutions/01-arrays-and-hashing/02-valid-anagram.js
console.log(isAnagram('anagram', 'nagaram')); // Expected: true
console.log(isAnagram('rat', 'car')); // Expected: false
console.log(isAnagram('listen', 'silent')); // Expected: true
console.log(isAnagram('hello', 'world')); // Expected: false
console.log(isAnagram('a', 'a')); // Expected: true
console.log(isAnagram('ab', 'a')); // Expected: false (different lengths)
