// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An anagram uses all the original letters exactly once.
//
// Example 1: s = "anagram", t = "nagaram" -> Output: true
// Example 2: s = "rat", t = "car" -> Output: false
//
// Hint: Count character frequencies

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  console.log(s.split('').sort().join(''));
  console.log(t.split('').sort().join(''));
  return s.split('').sort().join('') === t.split('').sort().join('');
}

// Tests
console.log(isAnagram('anagram', 'nagaram')); // Expected: true
console.log(isAnagram('rat', 'car')); // Expected: false
