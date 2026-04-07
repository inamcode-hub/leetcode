// 322. Coin Change
// Given coins of different denominations and a total amount,
// return the fewest number of coins needed to make that amount.
// Return -1 if it cannot be made.
//
// Example 1: coins = [1,5,10], amount = 12 -> Output: 3 (10+1+1)
// Example 2: coins = [2], amount = 3 -> Output: -1
//
// Hint: Bottom-up DP. dp[i] = min coins for amount i.
// dp[i] = min(dp[i - coin] + 1) for each coin

function coinChange(coins, amount) {
  // Your solution here
}

// Tests
console.log(coinChange([1, 5, 10], 12)); // Expected: 3
console.log(coinChange([2], 3)); // Expected: -1
console.log(coinChange([1], 0)); // Expected: 0
