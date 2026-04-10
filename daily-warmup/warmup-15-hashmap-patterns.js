// ─── WARMUP 15 — HASHMAP PATTERNS (The Leetcode Swiss Army Knife) ───
// If you don't know where to start on a problem, try a hashmap.
// These patterns solve HUNDREDS of leetcode problems.

// ╔═══════════════════════════════════╗
// ║  PATTERN 1: FREQUENCY COUNT       ║
// ╚═══════════════════════════════════╝
// "How many times does each thing appear?"

// 1a. With plain object — fastest to write
function freqCount(arr) {
  const count = {};
  for (const item of arr) {
    count[item] = (count[item] || 0) + 1;
  }
  return count;
}
console.log("freq:", freqCount(["a", "b", "a", "c", "b", "a"]));
// { a: 3, b: 2, c: 1 }

// 1b. With Map — better for non-string keys
function freqCountMap(arr) {
  const count = new Map();
  for (const item of arr) {
    count.set(item, (count.get(item) || 0) + 1);
  }
  return count;
}
console.log("freq map:", freqCountMap([1, 2, 1, 3, 2, 1]));

// 1c. Check if two strings are anagrams — compare frequency maps
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
    count[t[i]] = (count[t[i]] || 0) - 1;
  }
  return Object.values(count).every((v) => v === 0);
}
console.log("anagram:", isAnagram("listen", "silent")); // true

// 1d. Top K frequent — count then sort or bucket
function topKFrequent(nums, k) {
  const count = {};
  for (const n of nums) count[n] = (count[n] || 0) + 1;

  return Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => Number(num));
}
console.log("top 2:", topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]


// ╔═══════════════════════════════════╗
// ║  PATTERN 2: TWO SUM / COMPLEMENT ║
// ╚═══════════════════════════════════╝
// "Have I seen the other piece I need?"

// 2a. Classic Two Sum — store {value: index}, look for complement
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in map) return [map[complement], i];
    map[nums[i]] = i;
  }
  return [];
}
console.log("twoSum:", twoSum([2, 7, 11, 15], 9)); // [0, 1]

// 2b. Contains duplicate — Set is just a hashmap with no values
function containsDuplicate(nums) {
  const seen = new Set();
  for (const n of nums) {
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
}
console.log("has dup:", containsDuplicate([1, 2, 3, 1])); // true

// 2c. Find pairs that sum to target — similar to two sum
function countPairs(nums, target) {
  const seen = new Set();
  const pairs = [];
  for (const n of nums) {
    const comp = target - n;
    if (seen.has(comp)) {
      pairs.push([comp, n]);
    }
    seen.add(n);
  }
  return pairs;
}
console.log("pairs:", countPairs([1, 2, 3, 4, 5], 6)); // [[1,5],[2,4]]


// ╔═══════════════════════════════════╗
// ║  PATTERN 3: GROUP BY KEY          ║
// ╚═══════════════════════════════════╝
// "Put items into buckets by some property."

// 3a. Group Anagrams — use sorted string as key
function groupAnagrams(strs) {
  const map = {};
  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }
  return Object.values(map);
}
console.log("groups:", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// 3b. Group numbers by remainder — useful for partitioning
function groupByRemainder(nums, divisor) {
  const groups = {};
  for (const n of nums) {
    const key = n % divisor;
    if (!groups[key]) groups[key] = [];
    groups[key].push(n);
  }
  return groups;
}
console.log("by mod 3:", groupByRemainder([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
// { 0: [3,6,9], 1: [1,4,7], 2: [2,5,8] }


// ╔═══════════════════════════════════╗
// ║  PATTERN 4: PREFIX SUM + MAP      ║
// ╚═══════════════════════════════════╝
// "How many subarrays sum to target?"
// This is a harder pattern but shows up in interviews often.

// 4a. Subarray Sum Equals K — store prefix sums in a map
function subarraySum(nums, k) {
  const prefixCount = { 0: 1 }; // empty prefix has sum 0
  let sum = 0;
  let count = 0;

  for (const num of nums) {
    sum += num;
    // If (sum - k) was a previous prefix sum, then the subarray between them sums to k
    if ((sum - k) in prefixCount) {
      count += prefixCount[sum - k];
    }
    prefixCount[sum] = (prefixCount[sum] || 0) + 1;
  }
  return count;
}
console.log("subarraySum:", subarraySum([1, 1, 1], 2)); // 2
console.log("subarraySum:", subarraySum([1, 2, 3], 3)); // 2 (either [1,2] or [3])

// 4b. Simple prefix sum array — precompute to answer range queries fast
function buildPrefixSum(nums) {
  const prefix = [0]; // prefix[0] = 0 for convenience
  for (const n of nums) {
    prefix.push(prefix[prefix.length - 1] + n);
  }
  return prefix;
}
// Sum of range [i, j] = prefix[j+1] - prefix[i]
const prefix = buildPrefixSum([1, 2, 3, 4, 5]);
console.log("prefix:", prefix); // [0,1,3,6,10,15]
console.log("sum [1..3]:", prefix[4] - prefix[1]); // 2+3+4 = 9


// ╔═══════════════════════════════════╗
// ║  PATTERN 5: INDEX MAP             ║
// ╚═══════════════════════════════════╝
// "Where did I last see this value?"

// 5a. First non-repeating character
function firstUnique(s) {
  const count = {};
  for (const ch of s) count[ch] = (count[ch] || 0) + 1;
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) return i;
  }
  return -1;
}
console.log("first unique:", firstUnique("leetcode")); // 0 ('l')
console.log("first unique:", firstUnique("aabb"));     // -1


// ─── EXAMPLE ───
// Q: given an array, find the longest consecutive sequence
// [100, 4, 200, 1, 3, 2] -> 4 (the sequence is [1,2,3,4])
function longestConsecutive(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (const n of set) {
    // Only start counting from sequence beginning
    if (!set.has(n - 1)) {
      let length = 1;
      let current = n;
      while (set.has(current + 1)) {
        current++;
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}
console.log("longest consecutive:", longestConsecutive([100, 4, 200, 1, 3, 2])); // 4


// ─── PRACTICE ───
// Q1: given a string, return true if it can be rearranged into a palindrome
//     (hint: at most ONE character can have odd frequency)
function canFormPalindrome(s) {
  // TODO
}
// console.log(canFormPalindrome("aab"));    // true ("aba")
// console.log(canFormPalindrome("code"));   // false

// Q2: given two arrays, return true if one is a subset of the other
//     [1,2,3] is subset of [1,2,3,4,5] -> true
function isSubset(small, big) {
  // TODO (hint: put big in a frequency map, then check each small value)
}
// console.log(isSubset([1, 2, 3], [1, 2, 3, 4, 5]));    // true
// console.log(isSubset([1, 2, 6], [1, 2, 3, 4, 5]));    // false

// Q3: given an array, find two numbers that appear the same number of times
//     (return any pair) — Example: [1,1,2,2,3] -> [1,2] (both appear twice)
function sameFrequencyPair(nums) {
  // TODO (hint: build freq map, then group by frequency value)
}
// console.log(sameFrequencyPair([1, 1, 2, 2, 3])); // [1, 2]


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════
// FREQUENCY:
// 1. `freqCount(arr)` — returns {item: count} object
// 2. `isAnagram(s, t)` — single-loop counter to check anagram
// 3. `topKFrequent(nums, k)` — count + sort entries
//
// TWO SUM / COMPLEMENT:
// 4. `twoSum(nums, target)` — store {value: index}, find complement
// 5. `containsDuplicate(nums)` — Set has/add
//
// GROUP BY:
// 6. `groupAnagrams(strs)` — sorted string as key
//
// PREFIX SUM:
// 7. `buildPrefixSum(nums)` — prefix array for range sum queries
// 8. `subarraySum(nums, k)` — count subarrays that sum to k
//
// INDEX MAP:
// 9. `firstUnique(s)` — count then find first with count 1
// 10. `longestConsecutive(nums)` — Set + only start from sequence beginning
