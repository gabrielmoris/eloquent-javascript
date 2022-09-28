//Flattening
//use reduce method with the concat to flaten an array of arrays into single array
const array = [[1, 2], 3, [4, 5]];
function flattening(arr) {
  const solution = arr.reduce((previous, current) => {
    return previous.concat(current);
  });
  return solution;
}
console.log(flattening(array));

//Your own loop
//write a higher order function that provides something like a loop statement.
//Takes a value, a test function, update function and body function.
//Each iteration runs the test function and stops if it is false
//Then calls the body function giving the current value
//calls the update function to create a new value
