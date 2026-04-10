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


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════

// 1. Create a user object with name, age, and skills array
const myUser = {}; // TODO: fill in name, age, skills

// 2. Access values with dot and bracket notation
// TODO: console.log(myUser.name) and console.log(myUser["age"])

// 3. Add a new property "city" and update "age"
// TODO: myUser.city = ... and myUser.age = ...
console.log("updated user:", myUser);

// 4. Print keys, values, entries
// TODO: console.log Object.keys, Object.values, Object.entries of myUser

// 5. Loop entries with for...of and destructure [key, value]
// TODO: for (const [k, v] of Object.entries(myUser)) ...

// 6. Destructure name and age out of the object
// TODO: const { ... } = myUser;

// 7. Build a frequency object from this array
const myLetters = ["a", "b", "a", "c", "b", "a"];
const myCount = {}; // TODO: loop myLetters and count each
console.log("counts:", myCount); // Expected: { a: 3, b: 2, c: 1 }

// 8. Returns a frequency map from any array
function myBuildFreq(arr) {
  // TODO
}
console.log(myBuildFreq([1, 2, 2, 3, 3, 3]));       // Expected: { 1: 1, 2: 2, 3: 3 }
console.log(myBuildFreq(["x", "y", "x", "z", "y"])); // Expected: { x: 2, y: 2, z: 1 }

// 9. Returns the value that appears the most times
function myMostCommon(arr) {
  // TODO — build freq, then loop entries and track the best
}
console.log(myMostCommon([1, 2, 2, 3, 3, 3]));             // Expected: 3
console.log(myMostCommon(["a", "b", "a", "c", "b", "a"])); // Expected: "a"
