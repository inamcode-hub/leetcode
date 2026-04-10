// ─── WARMUP 17 — RECURSION & BACKTRACKING (Think Like a Tree) ───
// Backtracking = try a choice, explore, undo the choice.
// This pattern solves: subsets, permutations, combos, N-queens, sudoku, word search.

// ╔═══════════════════════════════════╗
// ║  RECURSION REFRESHER              ║
// ╚═══════════════════════════════════╝

// Every recursion needs: 1) BASE CASE  2) RECURSIVE CALL that shrinks the problem

// 1. Sum of array — recursion version
function sumArray(arr) {
  if (arr.length === 0) return 0; // base case
  return arr[0] + sumArray(arr.slice(1)); // shrink by removing first element
}
console.log("sum:", sumArray([1, 2, 3, 4, 5])); // 15

// 2. Flatten a nested array — recursion handles any depth
function flatten(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item)); // recurse on nested arrays
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log("flatten:", flatten([1, [2, [3, 4], 5], [6, 7]])); // [1,2,3,4,5,6,7]


// ╔═══════════════════════════════════════════╗
// ║  BACKTRACKING TEMPLATE                    ║
// ╚═══════════════════════════════════════════╝
//
// function backtrack(choices, path, result) {
//   if (done) {
//     result.push([...path]);  // <-- COPY the path!
//     return;
//   }
//   for (const choice of choices) {
//     path.push(choice);         // 1. CHOOSE
//     backtrack(remaining, path, result);  // 2. EXPLORE
//     path.pop();                // 3. UN-CHOOSE (backtrack!)
//   }
// }

// 3. SUBSETS — include or skip each element
function subsets(nums) {
  const result = [];

  function backtrack(start, current) {
    result.push([...current]); // every partial path is a valid subset

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);     // choose
      backtrack(i + 1, current); // explore (i+1 = no reuse)
      current.pop();             // un-choose
    }
  }

  backtrack(0, []);
  return result;
}
console.log("subsets:", subsets([1, 2, 3]));
// [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]

// 4. PERMUTATIONS — use every element exactly once, order matters
function permutations(nums) {
  const result = [];

  function backtrack(current, remaining) {
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);                   // choose
      const next = [...remaining.slice(0, i), ...remaining.slice(i + 1)]; // remove used
      backtrack(current, next);                      // explore
      current.pop();                                 // un-choose
    }
  }

  backtrack([], nums);
  return result;
}
console.log("permutations:", permutations([1, 2, 3]));
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 5. COMBINATION SUM — pick numbers that sum to target (can reuse)
function combinationSum(candidates, target) {
  const result = [];

  function backtrack(start, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }
    if (remaining < 0) return; // pruning — stop if overshot

    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      backtrack(i, current, remaining - candidates[i]); // i, not i+1 = reuse OK
      current.pop();
    }
  }

  backtrack(0, [], target);
  return result;
}
console.log("combo sum:", combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]

// 6. COMBINATIONS — choose k items from n
function combine(n, k) {
  const result = [];

  function backtrack(start, current) {
    if (current.length === k) {
      result.push([...current]);
      return;
    }

    for (let i = start; i <= n; i++) {
      current.push(i);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack(1, []);
  return result;
}
console.log("C(4,2):", combine(4, 2)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

// 7. PHONE LETTER COMBINATIONS — map digits to letters, build all combos
function letterCombinations(digits) {
  if (!digits.length) return [];

  const phone = {
    "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
    "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz",
  };

  const result = [];

  function backtrack(index, current) {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    for (const letter of phone[digits[index]]) {
      backtrack(index + 1, current + letter); // strings are immutable — no need to pop!
    }
  }

  backtrack(0, "");
  return result;
}
console.log("phone:", letterCombinations("23"));
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// 8. GENERATE PARENTHESES — only add valid brackets
function generateParenthesis(n) {
  const result = [];

  function backtrack(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
}
console.log("parens:", generateParenthesis(3));
// ["((()))","(()())","(())()","()(())","()()()"]


// ─── EXAMPLE ───
// Q: Word Search — find if word exists in a grid by moving up/down/left/right
function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  function backtrack(r, c, idx) {
    if (idx === word.length) return true; // found all letters
    if (r < 0 || r >= rows || c < 0 || c >= cols) return false;
    if (board[r][c] !== word[idx]) return false;

    const temp = board[r][c];
    board[r][c] = "#"; // mark visited

    const found =
      backtrack(r + 1, c, idx + 1) ||
      backtrack(r - 1, c, idx + 1) ||
      backtrack(r, c + 1, idx + 1) ||
      backtrack(r, c - 1, idx + 1);

    board[r][c] = temp; // un-mark (backtrack!)
    return found;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (backtrack(r, c, 0)) return true;
    }
  }
  return false;
}

const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
console.log("word search ABCCED:", exist(board, "ABCCED")); // true


// ─── PRACTICE ───
// Q1: Subsets II — same as subsets but input can have duplicates.
//     [1,2,2] -> [[],[1],[1,2],[1,2,2],[2],[2,2]] (no duplicate subsets)
function subsetsWithDup(nums) {
  // TODO (hint: sort first, then skip nums[i] === nums[i-1] when i > start)
}
// console.log(subsetsWithDup([1, 2, 2]));

// Q2: Permutations of a string — return all unique arrangements
function permuteString(s) {
  // TODO (hint: convert to array, use permutations pattern, join at the end)
}
// console.log(permuteString("abc")); // ["abc","acb","bac","bca","cab","cba"]

// Q3: Combination Sum II — like combo sum but each number can only be used ONCE
//     and no duplicate combos
function combinationSum2(candidates, target) {
  // TODO (hint: sort, use i+1, skip duplicates with candidates[i] === candidates[i-1])
}
// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// [[1,1,6],[1,2,5],[1,7],[2,6]]


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════

// 1. Subsets — return all subsets of nums
function mySubsets(nums) {
  const result = [];
  function backtrack(start, current) {
    // TODO — push [...current], then loop from start, choose/explore/unchoose
  }
  backtrack(0, []);
  return result;
}
console.log(mySubsets([1, 2, 3]));
// Expected: [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]

// 2. Permutations — return all orderings of nums
function myPermutations(nums) {
  const result = [];
  function backtrack(current, remaining) {
    // TODO — if remaining empty, push [...current]
    //        else loop remaining, pick one, recurse with rest
  }
  backtrack([], nums);
  return result;
}
console.log(myPermutations([1, 2, 3]));
// Expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 3. Combination Sum — combos that sum to target (can reuse numbers)
function myCombinationSum(candidates, target) {
  const result = [];
  function backtrack(start, current, remaining) {
    // TODO — if remaining === 0 push, if < 0 return, else loop from start (reuse = i not i+1)
  }
  backtrack(0, [], target);
  return result;
}
console.log(myCombinationSum([2, 3, 6, 7], 7)); // Expected: [[2,2,3], [7]]
console.log(myCombinationSum([2, 3, 5], 8));     // Expected: [[2,2,2,2],[2,3,3],[3,5]]

// 4. Combinations — choose k items from 1..n
function myCombine(n, k) {
  const result = [];
  function backtrack(start, current) {
    // TODO — if current.length === k, push copy
  }
  backtrack(1, []);
  return result;
}
console.log(myCombine(4, 2)); // Expected: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

// 5. Phone letter combinations
function myLetterCombinations(digits) {
  if (!digits.length) return [];
  const phone = {
    "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
    "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz",
  };
  const result = [];
  function backtrack(index, current) {
    // TODO — if index === digits.length, push current; else loop letters
  }
  backtrack(0, "");
  return result;
}
console.log(myLetterCombinations("23"));
// Expected: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// 6. Generate valid parentheses
function myGenerateParenthesis(n) {
  const result = [];
  function backtrack(current, open, close) {
    // TODO — if length === 2*n push; if open < n add "("; if close < open add ")"
  }
  backtrack("", 0, 0);
  return result;
}
console.log(myGenerateParenthesis(3));
// Expected: ["((()))","(()())","(())()","()(())","()()()"]

// 7. Word Search — find word in a grid
function myExist(board, word) {
  // TODO — loop all cells, try backtracking from each
  //        mark visited with "#", restore after (backtrack!)
  function backtrack(r, c, idx) {
    // TODO
  }
  return false; // TODO: replace with actual logic
}
const myBoard = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
console.log(myExist(myBoard, "ABCCED")); // Expected: true
console.log(myExist([["A","B"],["C","D"]], "ABDC")); // Expected: true
