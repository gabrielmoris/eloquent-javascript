//Flattening
//use reduce method with the concat to flaten an array of arrays into single array
const array = [[1, 2], 3, [4, 5]];
function flattening(arr) {
  const solution = arr.reduce((previous, current) => {
    return previous.concat(current);
  });
  return solution;
}
// console.log(flattening(array));

//Your own loop
//write a higher order function that provides something like a loop statement.
//Takes a value, a test function, update function and body function.
//Each iteration runs the test function and stops if it is false
//Then calls the body function giving the current value
//calls the update function to create a new value

function testFunction(currentValue, endValue) {
  if (currentValue === endValue) {
    return false;
  } else {
    return true;
  }
}

function updateFunction() {
  let value = 1;
  let result;
  return function () {
    return value++;
  };
}

function bodyFunction(value) {
  return value * 2;
}
const update = updateFunction();

function loop(value, testFunction, update, bodyFunction) {
  const updated = update();
  const loopValue = bodyFunction(value);

  if (testFunction(updated, 10)) {
    loop(loopValue, testFunction, update, bodyFunction);
  } else {
    result = loopValue;
  }
  return result;
}

// console.log(loop(1, testFunction, update, bodyFunction));

//Everything
//implement a function that takes an array as a argument and a predicate function
//2 versions, one with loop and another  using the some method

//With loop
function every(arr, predicate) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === predicate) {
      count++;
    }
  }
  if (count === arr.length) {
    return true;
  } else {
    return false;
  }
}

//with some method***

// just merely applying the some() method will not work, since latter returns true
// when one element in the array passes the test.

// To test if ALL elements pass the test with the some() method, use De Morgan’s laws,
// which states that !(A && B) === !A || !B

// We can modify De Morgan’s laws by using a double negation:
// (A && B) === ! (!A || !B)
function every2(arr, predicate) {
  return !arr.some((element) => !predicate(element));
}

// console.log(every2([1, 1, 1, 1, 1, 1], (n) => n === 1)); //true
// console.log(every2([1, 1, 11, 1, 1, 1], (n) => n === 1)); //false

//Dominant Wrirring Direction*
const SCRIPTS = require("./resources/scripts");
// Check the code with the range of codes of each script in scropts.js and return only the scripts which include
// that range
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}
//Makes an object with the count of each coincidence
function countBy(items, groupDirection) {
  let counts = [];
  for (let item of items) {
    let direction = groupDirection(item);
    let known = counts.findIndex((count) => count.direction == direction);
    if (known == -1) {
      counts.push({ direction, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ direction }) => direction != "none");
  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No dominant direction";
  const sorted = scripts.sort((a, b) => b.count - a.count);
  if (sorted[0].direction === "rtl") {
    return "Right to left";
  } else if (sorted[0].direction === "ltr") {
    return "Left to right";
  } else if (sorted[0].direction === "ttb") {
    return "Top to bottom";
  } else {
    //Not really neccesary
    return "No dominant direction";
  }
}
console.log(dominantDirection("Hey, مساء الخير"));
console.log(dominantDirection("HOLA"));
console.log(dominantDirection("Hola!, ꡏꡡꡃ ꡣꡡꡙ ꡐꡜꡞ, لخير"));
console.log(dominantDirection(",,.,!·$%%&//()=?++"));
