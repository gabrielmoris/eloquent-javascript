// A vector type
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(className) {
    this.x = this.x + className.x;
    this.y = this.y + className.y;
    return this;
  }
  minus(className) {
    this.x = this.x - className.x;
    this.y = this.y - className.y;
    return this;
  }
  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5

//Groups
class Group {
  constructor() {
    this.collection = [];
  }
  // this creates a new group with the items in the object || arr
  static from(value) {
    let group = new Group();
    for (let item of value) {
      group.add(item);
    }
    return group;
  }
  add(value) {
    this.collection.push(value);
  }
  delete(value) {
    this.collection = this.collection.filter((item) => item != value);
  }
  has(value) {
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i] === value) {
        return true;
      }
      return false;
    }
  }
}

// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// // → false

//Iterable groups

// The next method starts by checking whether the bottom of the matrix has been reached. If it hasn’t,
// it first creates the object holding the current value and then updates its position,
// moving to the next row if necessary.

class Group2 {
  constructor() {
    this.collection = [];
  }
  static from(value) {
    let group = new Group2();
    for (let item of value) {
      group.add(item);
    }
    return group;
  }

  add(value) {
    this.collection.push(value);
  }
  delete(value) {
    this.collection = this.collection.filter((item) => item != value);
  }
  has(value) {
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i] === value) {
        return true;
      }
      return false;
    }
  }
  //here I put the iterator
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(g) {
    this.iterator = 0;
    this.group = g.collection;
  }

  next() {
    if (this.iterator == this.group.length) return { done: true };
    let value = this.group[this.iterator];
    this.iterator++;
    return { value, done: false };
  }
}

for (let value of Group2.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

// Borrowing a method
