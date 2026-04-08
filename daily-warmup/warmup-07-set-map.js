// SET — unique values, fast lookup
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // duplicate, ignored
set.add(3);
console.log("set:", set);            // Set(3) {1,2,3}
console.log("has 2?", set.has(2));   // true
console.log("size:", set.size);      // 3
set.delete(1);
console.log("after delete:", set);

// Quick dedupe trick (very common in leetcode!)
const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(arr)];
console.log("unique:", unique); // [1,2,3,4]

// Loop a set
for (const v of set) console.log("set value:", v);


// MAP — like object but keys can be anything, keeps insertion order
const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
console.log("get a:", map.get("a")); // 1
console.log("has b?", map.has("b")); // true
console.log("size:", map.size);      // 3

// Loop a map
for (const [key, value] of map) {
  console.log(key, "=>", value);
}

// Frequency counter using Map
const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const freq = new Map();
for (const w of words) {
  freq.set(w, (freq.get(w) || 0) + 1);
}
console.log("freq:", freq);


// ─── EXAMPLE ───
// Q: given an array, return true if any value appears twice
function hasDuplicate(arr) {
  const seen = new Set();
  for (const n of arr) {
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
}
console.log(hasDuplicate([1, 2, 3, 1])); // true
console.log(hasDuplicate([1, 2, 3]));    // false

// ─── PRACTICE ───
// Q: given two arrays, return their intersection (values in both)
function intersection(a, b) {
  // TODO  (hint: put `a` in a Set, then filter `b` by what's in the set)
}
// console.log(intersection([1,2,3], [2,3,4])); // [2,3]


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════
// 1. Create a Set, add values (with a duplicate), check has(), delete one
// 2. Dedupe an array using [...new Set(arr)]
// 3. Create a Map, set 3 keys, use get/has/size
// 4. Loop a Map with for...of and destructure [key, value]
// 5. Build a frequency Map from ["a","b","a","c","b","a"]
// 6. Function `hasDuplicate(arr)` using a Set
// 7. Function `intersection(a, b)` returning common values
