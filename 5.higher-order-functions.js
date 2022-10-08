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

console.log(every2([1, 1, 1, 1, 1, 1], (n) => n === 1)); //true
console.log(every2([1, 1, 11, 1, 1, 1], (n) => n === 1)); //false

//Dominant Wrirring Direction
