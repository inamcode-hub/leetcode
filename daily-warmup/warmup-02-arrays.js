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
