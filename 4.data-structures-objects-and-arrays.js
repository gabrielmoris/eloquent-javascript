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

// console.log(
//   "reverseArrayInPlace: ",
//   reverseArrayInPlace(arrTest),
//   "arrTest: ",
//   arrTest
// );

//A List
const arrArgument = [1, 2, 3, 4, 5, 6, 7, 8];
//create a list from array
function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list,
    };
  }
  return list;
}
const listFromArr = arrayToList(arrArgument);
console.log("Create a List from Array: ", listFromArr);

//create an array from a list
function listToArray() {
  let arr = [];
  return function pushList(list) {
    if (list != null) {
      arr.push(list.value);
      return pushList(list.rest);
    }
    return arr;
  };
}

console.log("Create Array From List:", listToArray()(listFromArr));
//helper fucntion prepend(element,list){}

function prepend(element, list) {
  let newElement = element;
  newElement.rest = list;
  return newElement;
}

// console.log("prepend:", prepend({ value: 19 }, listFromArr));

//nth function gives me the element in the nth position

function nth() {
  let counter = 1;
  return function checkNumber(list, number) {
    if (counter != number) {
      counter++;
      return checkNumber(list.rest, number);
    } else {
      return list;
    }
  };
}

console.log("8th value of the list", nth()(listFromArr, 8));

//Deep Comparison
