//The sum of a range
function range(start, end, step = 1) {
  let arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
}
const arrOfNum = range(5, 10);

function sum(numArr) {
  let result = 0;
  for (let j = 0; j < numArr.length; j++) {
    result += numArr[j];
  }
  return result;
}
// console.log(sum(arrOfNum));

// Reversing an Array

const arrTest = [1, 2, 3, 4];

function reverseArray(array) {
  let arr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
}
// console.log("reverseArray: ", reverseArray(arrTest), "arrTest: ", arrTest);

function reverseArrayInPlace(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    array.push(array[i]);
  }
  for (let j = (array.length - 1) / 2; j >= 0; j--) {
    array.shift();
  }
  return array;
}

console.log(
  "reverseArrayInPlace: ",
  reverseArrayInPlace(arrTest),
  "arrTest: ",
  arrTest
);
