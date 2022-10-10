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
