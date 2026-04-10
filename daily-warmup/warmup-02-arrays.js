// 1. Create and print
const nums = [1, 2, 3, 4, 5];
console.log("nums:", nums);
console.log("first:", nums[0], "last:", nums[nums.length - 1]);

// 2. Add / remove
nums.push(6);          // end
nums.unshift(0);       // start
console.log("after push/unshift:", nums);

// 3. Loop — for
for (let i = 0; i < nums.length; i++) {
  console.log("index", i, "value", nums[i]);
}

// 4. Loop — for...of
for (const n of nums) {
  console.log("value:", n);
}

// 5. map / filter / reduce
const doubled = nums.map((n) => n * 2);
const evens   = nums.filter((n) => n % 2 === 0);
const total   = nums.reduce((acc, n) => acc + n, 0);
console.log("doubled:", doubled);
console.log("evens:", evens);
console.log("total:", total);

// ─── EXAMPLE ───
// Q: given an array, find the max value without using Math.max
function findMax(arr) {
  let best = arr[0];
  for (const n of arr) {
    if (n > best) best = n;
  }
  return best;
}
console.log("findMax =", findMax([3, 1, 4, 1, 5, 9, 2, 6])); // 9

// ─── PRACTICE ───
// Q: given [1,2,3,4], return a new array of squares [1,4,9,16] using map
function squares(arr) {
  // TODO
}
// console.log(squares([1,2,3,4])); // [1,4,9,16]


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════

// 1. Create an array with values 1..5, log first and last element
const myNums = [1, 2, 3, 4, 5];
// TODO: console.log first and last element

// 2. Use push() to add 6 at the end, unshift() to add 0 at the start
// TODO: push and unshift on myNums
console.log("after push/unshift:", myNums); // Expected: [0,1,2,3,4,5,6]

// 3. Loop with classic for — print index + value
// TODO: for (let i = 0; ...)

// 4. Loop with for...of — print each value
// TODO: for (const n of myNums)

// 5. Use map() to double every value
const myDoubled = []; // TODO: myNums.map(...)
console.log("doubled:", myDoubled); // Expected: [0,2,4,6,8,10,12]

// 6. Use filter() to keep only even values
const myEvens = []; // TODO: myNums.filter(...)
console.log("evens:", myEvens); // Expected: [0,2,4,6]

// 7. Use reduce() to get the total sum
const myTotal = 0; // TODO: myNums.reduce(...)
console.log("total:", myTotal); // Expected: 21

// 8. Returns the largest value in the array (no Math.max)
function myFindMax(arr) {
  // TODO
}
console.log(myFindMax([3, 1, 4, 1, 5, 9, 2, 6])); // Expected: 9
console.log(myFindMax([10, 20, 5]));                // Expected: 20

// 9. Returns a new array of squared values
function mySquares(arr) {
  // TODO — use map
}
console.log(mySquares([1, 2, 3, 4])); // Expected: [1, 4, 9, 16]
console.log(mySquares([5, 10]));      // Expected: [25, 100]
