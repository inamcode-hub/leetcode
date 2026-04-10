// Daily mini challenge — REWRITE THIS FROM SCRATCH each day.
// Combines functions + arrays + objects + a class.

// Task: given a list of words, return the most frequent one.
function mostFrequent(words) {
  const freq = {};
  for (const w of words) {
    freq[w] = (freq[w] || 0) + 1;
  }

  let best = null;
  let bestCount = 0;
  for (const [word, count] of Object.entries(freq)) {
    if (count > bestCount) {
      best = word;
      bestCount = count;
    }
  }
  return best;
}

console.log(mostFrequent(["a", "b", "a", "c", "b", "a"])); // "a"
console.log(mostFrequent(["leetcode", "is", "fun", "is"])); // "is"

// ─── EXAMPLE ───
// Q: return the LEAST frequent word from a list
function leastFrequent(words) {
  const freq = {};
  for (const w of words) freq[w] = (freq[w] || 0) + 1;

  let worst = null;
  let worstCount = Infinity;
  for (const [word, count] of Object.entries(freq)) {
    if (count < worstCount) {
      worst = word;
      worstCount = count;
    }
  }
  return worst;
}
console.log(leastFrequent(["a", "b", "a", "c", "b", "a"])); // "c"

// ─── PRACTICE ───
// Q: make `mostFrequent` case-insensitive ("Apple" and "apple" count as the same)
function mostFrequentCI(words) {
  // TODO  (hint: lowercase each word before counting)
}
// console.log(mostFrequentCI(["Apple","apple","banana","APPLE"])); // "apple"


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════

const testWords1 = ["a", "b", "a", "c", "b", "a"];
const testWords2 = ["leetcode", "is", "fun", "is"];
const testWords3 = ["Apple", "apple", "banana", "APPLE"];

// 1. Returns the most frequent word
function myMostFrequent(words) {
  // TODO — build freq object, loop entries, track best
}
console.log(myMostFrequent(testWords1)); // Expected: "a"
console.log(myMostFrequent(testWords2)); // Expected: "is"

// 2. Returns the least frequent word
function myLeastFrequent(words) {
  // TODO — build freq object, loop entries, track worst (start with Infinity)
}
console.log(myLeastFrequent(testWords1)); // Expected: "c"
console.log(myLeastFrequent(testWords2)); // Expected: "leetcode" (or "fun")

// 3. Case-insensitive version — "Apple" and "apple" count as same
function myMostFrequentCI(words) {
  // TODO — lowercase each word before counting
}
console.log(myMostFrequentCI(testWords3)); // Expected: "apple"
