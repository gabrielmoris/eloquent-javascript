//Looping a triangle
const triLoop = () => {
  let hashTag = "#";
  for (let i = 0; i <= 7; i++) {
    console.log(hashTag);
    hashTag += "#";
  }
};

// FizzBuzz
const fizzBuzz = () => {
  for (let i = 0; i < 100; i++) {
    let num = i + 1;
    if (num % 5 === 0 && num % 3 === 0) {
      console.log("FizzBuzz");
    } else if (num % 5 === 0) {
      console.log("Fizz");
    } else if (num % 3 === 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
};

const chessBoard = (gridNum) => {
  let isPair = false;
  let gridTemplate = "";
  for (let i = 0; i < gridNum; i++) {
    gridTemplate += "⬜  ";
  }
  for (let j = 0; j < gridNum * 2; j++) {
    if (!isPair) {
      gridTemplate.trim();
      gridTemplate += "  ";
      console.log(gridTemplate);
      isPair = true;
    } else {
      gridTemplate.trim();
      let pairGridTemplate = "  " + gridTemplate;
      console.log(pairGridTemplate);
      isPair = false;
    }
  }
};
chessBoard(9);
