// ─── WARMUP 20 — DP, GREEDY & BIT MANIPULATION ───
// The final boss patterns. DP = build up from smaller problems.
// Greedy = make the locally best choice. Bits = low-level tricks.

// ╔═══════════════════════════════════╗
// ║  DYNAMIC PROGRAMMING              ║
// ╚═══════════════════════════════════╝

// DP TEMPLATE:
// 1. Define dp[i] = "answer for sub-problem of size i"
// 2. Find the BASE CASE (smallest sub-problem you know the answer to)
// 3. Find the RECURRENCE (how dp[i] relates to smaller dp values)
// 4. Fill the table bottom-up

// 1. Climbing Stairs — dp[i] = dp[i-1] + dp[i-2] (it's Fibonacci!)
function climbStairs(n) {
  if (n <= 2) return n;
  let prev2 = 1; // dp[1]
  let prev1 = 2; // dp[2]

  for (let i = 3; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}
console.log("stairs(5):", climbStairs(5)); // 8

// 2. House Robber — can't rob adjacent houses
// dp[i] = max(rob this house + dp[i-2], skip = dp[i-1])
function rob(nums) {
  let prev2 = 0; // dp[i-2]
  let prev1 = 0; // dp[i-1]

  for (const num of nums) {
    const curr = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}
console.log("rob:", rob([2, 7, 9, 3, 1])); // 12

// 3. Coin Change — fewest coins to make amount
// dp[i] = min coins for amount i
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i && dp[i - coin] !== Infinity) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
console.log("coins:", coinChange([1, 5, 10], 12)); // 3 (10+1+1)

// 4. Longest Increasing Subsequence (LIS)
// dp[i] = length of LIS ending at index i
function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}
console.log("LIS:", lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4 ([2,3,7,101])

// 5. 0/1 Knapsack — pick items to maximize value within weight limit
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = new Array(capacity + 1).fill(0);

  for (let i = 0; i < n; i++) {
    // Go backwards so each item is used at most once
    for (let w = capacity; w >= weights[i]; w--) {
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
    }
  }
  return dp[capacity];
}
console.log("knapsack:", knapsack([1, 3, 4, 5], [1, 4, 5, 7], 7)); // 9

// 6. WHEN TO USE DP — recognize the signals:
// - "How many ways..."  -> count paths (climbing stairs, unique paths)
// - "Minimum/maximum..."  -> optimize (coin change, house robber)
// - "Can you reach..."  -> yes/no (word break, jump game)
// - Overlapping subproblems  -> same calculation repeated
// - Optimal substructure  -> optimal solution uses optimal sub-solutions


// ╔═══════════════════════════════════╗
// ║  GREEDY                           ║
// ╚═══════════════════════════════════╝

// Greedy = make the locally best choice at each step.
// Only works when local optimum leads to global optimum.

// 7. Maximum Subarray (Kadane's Algorithm)
function maxSubArray(nums) {
  let current = nums[0];
  let best = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]); // extend or start fresh
    best = Math.max(best, current);
  }
  return best;
}
console.log("max subarray:", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

// 8. Jump Game — can you reach the last index?
function canJump(nums) {
  let farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) return false; // stuck
    farthest = Math.max(farthest, i + nums[i]);
  }
  return true;
}
console.log("can jump:", canJump([2, 3, 1, 1, 4])); // true
console.log("can jump:", canJump([3, 2, 1, 0, 4])); // false

// 9. Best Time to Buy and Sell Stock II — buy/sell multiple times
function maxProfitII(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    // Greedy: take every uphill
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}
console.log("multi trade:", maxProfitII([7, 1, 5, 3, 6, 4])); // 7 (buy@1 sell@5 + buy@3 sell@6)

// 10. WHEN TO USE GREEDY vs DP:
// Greedy: problem has "greedy choice property" — local best = global best
// DP: choices depend on future decisions, need to try all paths
// Tip: if greedy doesn't work, try DP. If DP is too slow, find the greedy insight.


// ╔═══════════════════════════════════╗
// ║  BIT MANIPULATION                 ║
// ╚═══════════════════════════════════╝

// Key operators:
// &  AND — both bits are 1
// |  OR  — at least one bit is 1
// ^  XOR — bits are different
// ~  NOT — flip all bits
// << left shift  (multiply by 2)
// >> right shift (divide by 2)

// 11. XOR basics — the magic operator
console.log("\n--- XOR ---");
console.log("5 ^ 5 =", 5 ^ 5);   // 0 — same number XOR'd cancels out
console.log("5 ^ 0 =", 5 ^ 0);   // 5 — XOR with 0 keeps the number
console.log("5 ^ 3 =", 5 ^ 3);   // 6 — 101 ^ 011 = 110

// 12. Single Number — find the one that appears once (all others twice)
function singleNumber(nums) {
  let result = 0;
  for (const n of nums) {
    result ^= n; // duplicates cancel, single remains
  }
  return result;
}
console.log("single:", singleNumber([4, 1, 2, 1, 2])); // 4

// 13. Check if number is power of 2
// Powers of 2 have exactly one '1' bit: 1, 10, 100, 1000...
// n & (n-1) removes the lowest set bit — if result is 0, only had one bit
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
console.log("pow2(8):", isPowerOfTwo(8));   // true (1000)
console.log("pow2(6):", isPowerOfTwo(6));   // false (110)

// 14. Count set bits (number of 1s in binary)
function countBits(n) {
  let count = 0;
  while (n > 0) {
    n = n & (n - 1); // remove lowest set bit
    count++;
  }
  return count;
}
console.log("bits in 11:", countBits(11)); // 3 (1011)

// 15. Common bit tricks
console.log("\n--- Bit tricks ---");
console.log("is even:", (4 & 1) === 0);     // true — check last bit
console.log("is odd:", (7 & 1) === 1);      // true
console.log("multiply by 2:", 5 << 1);      // 10
console.log("divide by 2:", 10 >> 1);       // 5
console.log("swap without temp:");
let x = 3, y = 7;
x = x ^ y; y = x ^ y; x = x ^ y; // XOR swap
console.log("x:", x, "y:", y); // 7, 3

// 16. Get, set, clear a specific bit
function getBit(n, i) { return (n >> i) & 1; }
function setBit(n, i) { return n | (1 << i); }
function clearBit(n, i) { return n & ~(1 << i); }

console.log("bit 2 of 5 (101):", getBit(5, 2));   // 1
console.log("set bit 1 of 5:", setBit(5, 1));      // 7 (111)
console.log("clear bit 2 of 5:", clearBit(5, 2));  // 1 (001)


// ─── EXAMPLE ───
// Q: given an array where every number appears 3 times except one, find the single one
// (XOR won't work because XOR only cancels pairs)
function singleNumberII(nums) {
  // Count bits: for each bit position, sum all bits. If count % 3 !== 0, the single number has that bit
  let result = 0;
  for (let bit = 0; bit < 32; bit++) {
    let sum = 0;
    for (const n of nums) {
      sum += (n >> bit) & 1;
    }
    if (sum % 3 !== 0) {
      result |= (1 << bit);
    }
  }
  return result;
}
console.log("single II:", singleNumberII([2, 2, 3, 2])); // 3


// ─── PRACTICE ───
// Q1: Unique Paths — robot on m x n grid, can only move right or down.
//     How many unique paths from top-left to bottom-right?
function uniquePaths(m, n) {
  // TODO (hint: dp[i][j] = dp[i-1][j] + dp[i][j-1], first row and col are all 1s)
}
// console.log(uniquePaths(3, 7)); // 28
// console.log(uniquePaths(3, 2)); // 3

// Q2: Word Break — given a string and a dictionary, can the string be segmented?
//     "leetcode" with dict ["leet","code"] -> true
function wordBreak(s, wordDict) {
  // TODO (hint: dp[i] = can we segment s[0..i-1]?
  //   dp[0] = true (empty string)
  //   dp[i] = true if any dp[j] is true AND s[j..i] is in the dictionary)
}
// console.log(wordBreak("leetcode", ["leet", "code"])); // true
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false

// Q3: Missing Number — array of n numbers from 0 to n, one is missing. Find it with XOR.
function missingNumber(nums) {
  // TODO (hint: XOR all indices 0..n with all values — the missing one won't cancel)
}
// console.log(missingNumber([3, 0, 1]));    // 2
// console.log(missingNumber([0, 1]));       // 2
// console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════

// --- DP ---

// 1. Climbing stairs — how many ways to reach step n (1 or 2 steps)
function myClimbStairs(n) {
  // TODO — two variables like Fibonacci
}
console.log(myClimbStairs(2));  // Expected: 2
console.log(myClimbStairs(3));  // Expected: 3
console.log(myClimbStairs(5));  // Expected: 8

// 2. House robber — max money without robbing adjacent houses
function myRob(nums) {
  // TODO — prev2, prev1; each step: max(prev1, prev2 + num)
}
console.log(myRob([2, 7, 9, 3, 1])); // Expected: 12
console.log(myRob([1, 2, 3, 1]));     // Expected: 4

// 3. Coin change — fewest coins to make amount
function myCoinChange(coins, amount) {
  // TODO — dp array filled with Infinity, dp[0] = 0
}
console.log(myCoinChange([1, 5, 10], 12)); // Expected: 3
console.log(myCoinChange([2], 3));          // Expected: -1
console.log(myCoinChange([1], 0));          // Expected: 0

// 4. Longest increasing subsequence
function myLengthOfLIS(nums) {
  // TODO — dp[i] = 1, then for each j < i where nums[j] < nums[i]: dp[i] = max(dp[i], dp[j]+1)
}
console.log(myLengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Expected: 4
console.log(myLengthOfLIS([0, 1, 0, 3, 2, 3]));             // Expected: 4

// --- GREEDY ---

// 5. Maximum subarray — Kadane's algorithm
function myMaxSubArray(nums) {
  // TODO — current = max(num, current + num), track best
}
console.log(myMaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Expected: 6
console.log(myMaxSubArray([1]));                                // Expected: 1
console.log(myMaxSubArray([5, 4, -1, 7, 8]));                  // Expected: 23

// 6. Jump game — can you reach the last index?
function myCanJump(nums) {
  // TODO — track farthest reachable, if i > farthest return false
}
console.log(myCanJump([2, 3, 1, 1, 4])); // Expected: true
console.log(myCanJump([3, 2, 1, 0, 4])); // Expected: false

// --- BITS ---

// 7. Single number — find the one that appears once (others appear twice)
function mySingleNumber(nums) {
  // TODO — XOR all values
}
console.log(mySingleNumber([4, 1, 2, 1, 2])); // Expected: 4
console.log(mySingleNumber([2, 2, 1]));         // Expected: 1

// 8. Is the number a power of 2?
function myIsPowerOfTwo(n) {
  // TODO — n > 0 && (n & (n - 1)) === 0
}
console.log(myIsPowerOfTwo(8));   // Expected: true
console.log(myIsPowerOfTwo(6));   // Expected: false
console.log(myIsPowerOfTwo(1));   // Expected: true
console.log(myIsPowerOfTwo(16));  // Expected: true

// 9. Count the number of 1-bits in binary
function myCountBits(n) {
  // TODO — n & (n-1) removes lowest set bit, count iterations
}
console.log(myCountBits(11));  // Expected: 3 (binary: 1011)
console.log(myCountBits(128)); // Expected: 1 (binary: 10000000)
console.log(myCountBits(255)); // Expected: 8 (binary: 11111111)

// 10. Missing number — array has 0..n with one missing
function myMissingNumber(nums) {
  // TODO — XOR all indices 0..n with all values, missing one stays
}
console.log(myMissingNumber([3, 0, 1]));                // Expected: 2
console.log(myMissingNumber([0, 1]));                    // Expected: 2
console.log(myMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Expected: 8
