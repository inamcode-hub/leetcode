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
// 1. Create an array `nums` with values 1..5, log first and last element
// 2. Use push() to add a value at the end and unshift() to add at the start
// 3. Loop the array with a classic `for` loop and print index + value
// 4. Loop the array with `for...of` and print each value
// 5. Use map() to double every value
// 6. Use filter() to keep only even values
// 7. Use reduce() to get the total sum
// 8. Function `findMax(arr)` that returns the largest value (no Math.max)
// 9. Function `squares(arr)` that returns a new array of squared values
