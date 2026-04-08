// 1. Basic class
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return `${this.name} says ${this.sound}`;
  }
}

const dog = new Animal("Rex", "woof");
console.log(dog.speak());

// 2. Class with state and methods (like a leetcode "Design" problem)
class Counter {
  constructor() {
    this.value = 0;
  }
  increment() { this.value++; }
  decrement() { this.value--; }
  get()       { return this.value; }
}

const c = new Counter();
c.increment();
c.increment();
c.increment();
c.decrement();
console.log("counter:", c.get()); // 2

// 3. Stack class — leetcode loves these
class Stack {
  constructor() { this.items = []; }
  push(x)  { this.items.push(x); }
  pop()    { return this.items.pop(); }
  peek()   { return this.items[this.items.length - 1]; }
  isEmpty(){ return this.items.length === 0; }
  size()   { return this.items.length; }
}

const st = new Stack();
st.push(1); st.push(2); st.push(3);
console.log("peek:", st.peek()); // 3
console.log("pop:", st.pop());   // 3
console.log("size:", st.size()); // 2

// ─── EXAMPLE ───
// Q: build a Queue class with enqueue / dequeue
class Queue {
  constructor() { this.items = []; }
  enqueue(x) { this.items.push(x); }
  dequeue()  { return this.items.shift(); }
  size()     { return this.items.length; }
}
const q = new Queue();
q.enqueue(1); q.enqueue(2); q.enqueue(3);
console.log("dequeue:", q.dequeue()); // 1
console.log("size:", q.size());       // 2

// ─── PRACTICE ───
// Q: build a class `Rectangle(w, h)` with a method `area()` that returns w*h
class Rectangle {
  // TODO
}
// const r = new Rectangle(4, 5);
// console.log(r.area()); // 20


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════
// 1. Class `Animal` with constructor(name, sound) and method speak()
// 2. Create an instance and call speak()
// 3. Class `Counter` with increment(), decrement(), get() methods
// 4. Class `Stack` with push, pop, peek, isEmpty, size
// 5. Class `Queue` with enqueue, dequeue, size
// 6. Class `Rectangle(w, h)` with method area()
