//Minimum
function minimum(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

// Recursion;
function isEven(number) {
  if (number >= 2) {
    number = number - 2;
    return isEven(number);
  } else if (number === 1) {
    return false;
  } else if (number === 0) {
    return true;
  } else {
    return isEven(-number);
  }
}

// console.log("-4", isEven(-4));
// console.log("4", isEven(4));
// console.log("50", isEven(50));
// console.log("75", isEven(75));

//Bean Counting

function countBs(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      counter++;
    }
  }
  return counter;
}

// console.log(countBs("Bubu Bebe biBi"));

function countChar(string, char) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      counter++;
    }
  }
  return counter;
}
// console.log(countChar("Bubu Bebe biBi", "e"));
