// 217. Contains Duplicate — SOLUTIONS
// Practice file lives at: 01-arrays-and-hashing/01-contains-duplicate.js
//
// Style: John Smilga / Coding Addict — vanilla JS, array methods, small functions.

// ---------- Solution 1: Brute force (the "I just started JS" version) ----------
// Walk every pair and compare. Easy to read, but O(n^2) — too slow for big inputs.
function containsDuplicateBrute(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
}

// ---------- Solution 2: Smilga style with array methods ----------
// Readable, vanilla JS, leaning on built-in array methods.
// We track numbers we've already seen in a plain array and use `includes`.
// Clean and beginner-friendly, but `includes` is O(n) so overall O(n^2).
function containsDuplicateSmilga(nums) {
  const seen = [];

  for (const num of nums) {
    if (seen.includes(num)) return true;
    seen.push(num);
  }

  return false;
}

// ---------- Solution 3: Interview-optimal with a Set ----------
// A Set gives us O(1) lookups, so the whole function is O(n) time, O(n) space.
// This is the answer you want to give in an interview.
function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
}

// ---------- One-liner bonus (cute, but explain it in interviews) ----------
// new Set(nums) removes duplicates. If the size shrank, there were duplicates.
const containsDuplicateOneLiner = (nums) => new Set(nums).size !== nums.length;

// ---------- Tests - run with: node solutions/01-arrays-and-hashing/01-contains-duplicate.js ----------
console.log(containsDuplicate([1, 2, 3, 1])); // Expected: true
console.log(containsDuplicate([1, 2, 3, 4])); // Expected: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Expected: true
