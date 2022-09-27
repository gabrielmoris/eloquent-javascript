//Flattening
//use reduce method with the concat to flaten an array of arrays into single array

function flattening(arr) {
  const array = arr;
  const solution = array.reduce((previous, current) => {
    return previous.concat(current);
  });
  return solution;
}
console.log(flattening([[1, 2], 3, [4, 5]]));
