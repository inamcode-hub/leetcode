// ─── WARMUP 18 — BINARY SEARCH PATTERNS (Divide and Conquer) ───
// Binary search isn't just "find target in sorted array."
// It's a TEMPLATE for any problem where you can cut the search space in half.

// ╔═══════════════════════════════════╗
// ║  THE CLASSIC TEMPLATE             ║
// ╚═══════════════════════════════════╝

// 1. Standard binary search — find exact target
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1; // not found
}
console.log("search 9:", binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log("search 2:", binarySearch([-1, 0, 3, 5, 9, 12], 2)); // -1


// ╔═══════════════════════════════════╗
// ║  FIND BOUNDARY (left-most / right-most) ║
// ╚═══════════════════════════════════╝

// 2. Find FIRST occurrence (left boundary)
// "What's the first index where nums[i] >= target?"
function lowerBound(nums, target) {
  let left = 0;
  let right = nums.length; // note: right = length, not length-1

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) left = mid + 1;
    else right = mid; // don't skip mid — it might be the answer
  }
  return left; // first index where nums[i] >= target
}
console.log("lower bound of 5:", lowerBound([1, 3, 5, 5, 5, 7, 9], 5)); // 2

// 3. Find LAST occurrence (right boundary)
// "What's the last index where nums[i] <= target?"
function upperBound(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) left = mid + 1;
    else right = mid;
  }
  return left - 1; // last index where nums[i] <= target
}
console.log("upper bound of 5:", upperBound([1, 3, 5, 5, 5, 7, 9], 5)); // 4

// 4. Count occurrences of target in sorted array
function countOccurrences(nums, target) {
  const first = lowerBound(nums, target);
  const last = upperBound(nums, target);
  if (first > last) return 0;
  return last - first + 1;
}
console.log("count 5s:", countOccurrences([1, 3, 5, 5, 5, 7, 9], 5)); // 3
console.log("count 4s:", countOccurrences([1, 3, 5, 5, 5, 7, 9], 4)); // 0


// ╔═══════════════════════════════════╗
// ║  ROTATED ARRAY                    ║
// ╚═══════════════════════════════════╝

// 5. Search in rotated sorted array — figure out which half is sorted
function searchRotated(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
console.log("rotated search:", searchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // 4

// 6. Find minimum in rotated sorted array
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1; // min is in right half
    } else {
      right = mid; // min could be mid itself
    }
  }
  return nums[left];
}
console.log("min rotated:", findMin([3, 4, 5, 1, 2])); // 1
console.log("min rotated:", findMin([4, 5, 6, 7, 0, 1, 2])); // 0


// ╔═══════════════════════════════════╗
// ║  BINARY SEARCH ON ANSWER          ║
// ╚═══════════════════════════════════╝
// "Binary search the answer" — when you can check if an answer works in O(n)

// 7. Koko eating bananas — find minimum speed to finish in h hours
// Each pile takes Math.ceil(pile / speed) hours
function minEatingSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // Can Koko finish at this speed?
    const hours = piles.reduce((sum, pile) => sum + Math.ceil(pile / mid), 0);

    if (hours <= h) {
      right = mid; // try slower
    } else {
      left = mid + 1; // need faster
    }
  }
  return left;
}
console.log("koko speed:", minEatingSpeed([3, 6, 7, 11], 8)); // 4

// 8. Square root — binary search for floor(sqrt(x))
function mySqrt(x) {
  if (x < 2) return x;
  let left = 1;
  let right = Math.floor(x / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid < x) left = mid + 1;
    else right = mid - 1;
  }
  return right; // floor of sqrt
}
console.log("sqrt(8):", mySqrt(8));   // 2
console.log("sqrt(16):", mySqrt(16)); // 4


// ─── EXAMPLE ───
// Q: Find Peak Element — a[i] > a[i-1] AND a[i] > a[i+1]
// Binary search: if mid < mid+1, peak is to the right
function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1; // peak is to the right
    } else {
      right = mid; // peak is mid or to the left
    }
  }
  return left;
}
console.log("peak:", findPeakElement([1, 2, 3, 1])); // 2
console.log("peak:", findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 5 (or 1)


// ─── PRACTICE ───
// Q1: Search Insert Position — return index where target would be inserted
//     in sorted array. Example: [1,3,5,6], target=5 -> 2, target=2 -> 1
function searchInsert(nums, target) {
  // TODO (hint: this is literally lowerBound!)
}
// console.log(searchInsert([1, 3, 5, 6], 5)); // 2
// console.log(searchInsert([1, 3, 5, 6], 2)); // 1
// console.log(searchInsert([1, 3, 5, 6], 7)); // 4

// Q2: First Bad Version — versions 1..n, isBadVersion(v) returns true/false
//     Find the FIRST bad version. (hint: left boundary search)
function firstBadVersion(n, isBadVersion) {
  // TODO
}
// const isBad = (v) => v >= 4;
// console.log(firstBadVersion(5, isBad)); // 4

// Q3: Binary search on a 2D matrix — matrix is sorted row by row,
//     each row's first element is greater than the last row's last element
function searchMatrix(matrix, target) {
  // TODO (hint: treat it as a single sorted array of m*n elements,
  //   convert index to [row, col] with Math.floor(mid / cols) and mid % cols)
}
// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));  // true
// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // false


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════

// 1. Classic binary search — return index or -1
function myBinarySearch(nums, target) {
  // TODO — left <= right, check mid
}
console.log(myBinarySearch([-1, 0, 3, 5, 9, 12], 9));  // Expected: 4
console.log(myBinarySearch([-1, 0, 3, 5, 9, 12], 2));  // Expected: -1
console.log(myBinarySearch([1, 2, 3, 4, 5, 6], 1));    // Expected: 0

// 2. Lower bound — first index where nums[i] >= target
function myLowerBound(nums, target) {
  // TODO — left < right, don't skip mid on match
}
console.log(myLowerBound([1, 3, 5, 5, 5, 7, 9], 5)); // Expected: 2
console.log(myLowerBound([1, 3, 5, 5, 5, 7, 9], 4)); // Expected: 2
console.log(myLowerBound([1, 3, 5, 5, 5, 7, 9], 6)); // Expected: 5

// 3. Upper bound — last index where nums[i] <= target
function myUpperBound(nums, target) {
  // TODO
}
console.log(myUpperBound([1, 3, 5, 5, 5, 7, 9], 5)); // Expected: 4
console.log(myUpperBound([1, 3, 5, 5, 5, 7, 9], 6)); // Expected: 4

// 4. Search in rotated sorted array
function mySearchRotated(nums, target) {
  // TODO — check which half is sorted, narrow down
}
console.log(mySearchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // Expected: 4
console.log(mySearchRotated([4, 5, 6, 7, 0, 1, 2], 3)); // Expected: -1
console.log(mySearchRotated([1], 0));                      // Expected: -1

// 5. Find minimum in rotated sorted array
function myFindMin(nums) {
  // TODO — if mid > right, min is in right half
}
console.log(myFindMin([3, 4, 5, 1, 2]));       // Expected: 1
console.log(myFindMin([4, 5, 6, 7, 0, 1, 2])); // Expected: 0
console.log(myFindMin([1, 2, 3, 4, 5]));        // Expected: 1

// 6. Integer square root — binary search the answer
function myMySqrt(x) {
  // TODO — binary search for floor(sqrt(x))
}
console.log(myMySqrt(8));   // Expected: 2
console.log(myMySqrt(16));  // Expected: 4
console.log(myMySqrt(100)); // Expected: 10

// 7. Find peak element — go toward uphill side
function myFindPeak(nums) {
  // TODO — if mid < mid+1, peak is right; else left
}
console.log(myFindPeak([1, 2, 3, 1]));          // Expected: 2
console.log(myFindPeak([1, 2, 1, 3, 5, 6, 4])); // Expected: 5 (or 1)

// 8. Search insert position — where target would go in sorted array
function mySearchInsert(nums, target) {
  // TODO — same as lowerBound
}
console.log(mySearchInsert([1, 3, 5, 6], 5)); // Expected: 2
console.log(mySearchInsert([1, 3, 5, 6], 2)); // Expected: 1
console.log(mySearchInsert([1, 3, 5, 6], 7)); // Expected: 4
console.log(mySearchInsert([1, 3, 5, 6], 0)); // Expected: 0
