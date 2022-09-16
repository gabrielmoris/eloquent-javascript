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
