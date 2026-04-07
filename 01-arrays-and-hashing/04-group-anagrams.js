// 49. Group Anagrams
// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.
//
// Example: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//
// Hint: Anagrams have the same sorted characters. Use sorted string as a key.

function groupAnagrams(strs) {
  // Your solution here
}

// Tests
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Expected: [["eat","tea","ate"],["tan","nat"],["bat"]] (order may vary)
console.log(groupAnagrams([""])); // Expected: [[""]]
console.log(groupAnagrams(["a"])); // Expected: [["a"]]
