// 1. Create
const user = {
  name: "Inam",
  age: 30,
  skills: ["js", "react"],
};

// 2. Access
console.log(user.name);
console.log(user["age"]);

// 3. Add / update
user.city = "Toronto";
user.age = 31;
console.log(user);

// 4. Keys / values / entries
console.log("keys:", Object.keys(user));
console.log("values:", Object.values(user));
for (const [k, v] of Object.entries(user)) {
  console.log(k, "=>", v);
}

// 5. Destructuring
const { name, age } = user;
console.log("destructured:", name, age);

// 6. Use as a hashmap (very common in leetcode!)
const count = {};
const arr = ["a", "b", "a", "c", "b", "a"];
for (const ch of arr) {
  count[ch] = (count[ch] || 0) + 1;
}
console.log("counts:", count); // { a: 3, b: 2, c: 1 }

// ─── EXAMPLE ───
// Q: given [1,2,2,3,3,3], build a frequency map
function buildFreq(arr) {
  const freq = {};
  for (const n of arr) {
    freq[n] = (freq[n] || 0) + 1;
  }
  return freq;
}
console.log("freq =", buildFreq([1, 2, 2, 3, 3, 3])); // {1:1, 2:2, 3:3}

// ─── PRACTICE ───
// Q: given an array, return the value that appears the most times
function mostCommon(arr) {
  // TODO  (hint: build a freq map, then loop entries and track the best)
}
// console.log(mostCommon([1,2,2,3,3,3])); // 3
