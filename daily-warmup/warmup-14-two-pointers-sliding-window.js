// ─── WARMUP 14 — TWO POINTERS & SLIDING WINDOW (Top Leetcode Patterns) ───
// These two patterns solve 20%+ of all leetcode problems.
// Learn the TEMPLATES here, then apply them to any problem.

// ╔═══════════════════════════════════╗
// ║  TWO POINTERS                     ║
// ╚═══════════════════════════════════╝

// PATTERN A: Opposite ends — left starts at 0, right starts at end
// Used in: palindrome, two sum (sorted), container with most water, 3sum

// Template:
// let left = 0, right = arr.length - 1;
// while (left < right) {
//   if (condition) { /* found answer */ }
//   else if (need_bigger) left++;
//   else right--;
// }

// 1. Two Sum on SORTED array — classic opposite-end pointers
function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;   // need bigger sum
    else right--;               // need smaller sum
  }
  return [-1, -1];
}
console.log("twoSumSorted:", twoSumSorted([1, 3, 5, 7, 9], 8)); // [0, 4] -> 1+7

// 2. Valid Palindrome — compare from outside in
function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log("palindrome:", isPalindrome("A man, a plan, a canal: Panama")); // true

// 3. Container With Most Water — move the shorter side
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
}
console.log("maxArea:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

// PATTERN B: Same direction — both start at 0, fast runs ahead
// Used in: remove duplicates, move zeroes, partition

// 4. Remove Duplicates from sorted array — slow/fast pointers
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1; // length of unique portion
}
const dupArr = [1, 1, 2, 2, 3, 4, 4];
const newLen = removeDuplicates(dupArr);
console.log("unique:", dupArr.slice(0, newLen)); // [1,2,3,4]

// 5. Move Zeroes — keep non-zero order, push zeroes to end
function moveZeroes(nums) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
}
const zeros = [0, 1, 0, 3, 12];
moveZeroes(zeros);
console.log("moved zeroes:", zeros); // [1,3,12,0,0]


// ╔═══════════════════════════════════╗
// ║  SLIDING WINDOW                   ║
// ╚═══════════════════════════════════╝

// Template (variable-size window):
// let left = 0;
// for (let right = 0; right < arr.length; right++) {
//   // expand: add arr[right] to window
//   while (window is invalid) {
//     // shrink: remove arr[left] from window
//     left++;
//   }
//   // update answer
// }

// 6. Max Profit (Buy/Sell Stock) — simplest sliding window
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}
console.log("maxProfit:", maxProfit([7, 1, 5, 3, 6, 4])); // 5

// 7. Longest Substring Without Repeating Characters — window + Set
function lengthOfLongestSubstring(s) {
  const set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    // Shrink window until no duplicate
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
console.log("longest substr:", lengthOfLongestSubstring("abcabcbb")); // 3

// 8. Fixed-size window — max sum of subarray of size k
function maxSumSubarray(nums, k) {
  let windowSum = 0;

  // Build first window
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  // Slide the window: add right, remove left
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i];       // add new right
    windowSum -= nums[i - k];   // remove old left
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
console.log("max sum k=3:", maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 9

// 9. Minimum Size Subarray Sum — variable window, shrink when sum >= target
function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]; // expand

    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left]; // shrink
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
console.log("min subarray len:", minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2


// ─── EXAMPLE ───
// Q: find if string has a permutation of pattern (anagram window)
function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  const count = new Array(26).fill(0);
  const a = "a".charCodeAt(0);

  // Count pattern characters
  for (const ch of s1) count[ch.charCodeAt(0) - a]++;

  // Slide window of size s1.length over s2
  let left = 0;
  for (let right = 0; right < s2.length; right++) {
    count[s2[right].charCodeAt(0) - a]--;

    if (right - left + 1 === s1.length) {
      if (count.every((c) => c === 0)) return true;
      count[s2[left].charCodeAt(0) - a]++;
      left++;
    }
  }
  return false;
}
console.log("checkInclusion:", checkInclusion("ab", "eidbaooo")); // true
console.log("checkInclusion:", checkInclusion("ab", "eidboaoo")); // false


// ─── PRACTICE ───
// Q1: given a SORTED array, return a new array of squares in sorted order
//     Example: [-4,-1,0,3,10] -> [0,1,9,16,100]
//     (hint: two pointers from ends, compare absolute values, fill result from the back)
function sortedSquares(nums) {
  // TODO
}
// console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]

// Q2: find the max average of a subarray of size k (fixed-size window)
function findMaxAverage(nums, k) {
  // TODO (hint: max sum window / k)
}
// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75

// Q3: given a string and number k, find the longest substring with at most k distinct characters
function longestKDistinct(s, k) {
  // TODO (hint: variable-size window with a Map to count chars, shrink when map.size > k)
}
// console.log(longestKDistinct("eceba", 2)); // 3 ("ece")
// console.log(longestKDistinct("aa", 1));    // 2


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════
// TWO POINTERS:
// 1. `twoSumSorted(nums, target)` — opposite ends on sorted array
// 2. `isPalindrome(s)` — opposite ends, skip non-alphanumeric
// 3. `removeDuplicates(nums)` — slow/fast on sorted array
// 4. `moveZeroes(nums)` — slow/fast, push zeroes to end
//
// SLIDING WINDOW:
// 5. `maxProfit(prices)` — track min price, max profit
// 6. `lengthOfLongestSubstring(s)` — variable window + Set
// 7. `maxSumSubarray(nums, k)` — fixed-size window
// 8. `minSubArrayLen(target, nums)` — variable window, shrink when sum >= target
// 9. `sortedSquares(nums)` — two pointers on sorted array with negatives
