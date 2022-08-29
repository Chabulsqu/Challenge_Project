const prompt = require("prompt-sync")({ sigint: true });
const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(arr) {
    this.field = arr;
  }
  print() {
    console.log(this.field);
  }
  static generateField(height, width) {
    let newArr = [];
    let h = height;
    let w = width;
    let hatGenerated = false;
    while (h > 0) {
      let number;
      newArr.push([]);
      while (w > 0) {
        if (w === 1 && h === 1) {
          newArr[0][0] = pathCharacter;
          w--;
        }
        number = Math.floor(Math.random() * 3);
        if (number === 0) {
          newArr[height - h][width - w] = fieldCharacter;
        } else if (number === 1) {
          newArr[height - h][width - w] = hole;
        } else if (number === 2) {
          newArr[height - h][width - w] = hat;
          if (hatGenerated === true) {
            number = Math.floor(Math.random() * 2);
            if (number === 0) {
              newArr[height - h][width - w] = fieldCharacter;
            } else {
              newArr[height - h][width - w] = hole;
            }
          }
          hatGenerated = true;
        }
        w--;
      }
      w = width;
      h--;
    }
    if (hatGenerated === false) {
      newArr[Math.floor(Math.random() * height + 1)][
        Math.floor(Math.random() * width + 1)
      ] = hat;
    }
    return newArr
  }
}
const myField = new Field([
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
]);
let gameArea = Field.generateField(5, 5); // Modify width the height (rows) and width (columns) you like
let gameLost = false;
let gameWon = false;
let xCounter = 0;
let yCounter = 0;
console.log(gameArea);
let direction;
while (!gameLost && !gameWon) {
  direction = prompt("Please press any WASD key: ");
  if (direction === "w") {
    yCounter--;
    if (
      yCounter >= 0 &&
      xCounter >= 0 &&
      yCounter < gameArea.length &&
      xCounter < gameArea[0].length
    ) {
      if (gameArea[yCounter][xCounter] === hat) {
        gameWon = true;
      }
      gameArea[yCounter][xCounter] === hole
        ? (gameLost = true)
        : (gameArea[yCounter][xCounter] = pathCharacter);
    } else {
      gameLost = true;
    }
  } else if (direction === "a") {
    xCounter--;
    if (
      yCounter >= 0 &&
      xCounter >= 0 &&
      yCounter < gameArea.length &&
      xCounter < gameArea[0].length
    ) {
      if (gameArea[yCounter][xCounter] === hat) {
        gameWon = true;
      }
      gameArea[yCounter][xCounter] === hole
        ? (gameLost = true)
        : (gameArea[yCounter][xCounter] = pathCharacter);
    } else {
      gameLost = true;
    }
  } else if (direction === "s") {
    yCounter++;
    if (
      yCounter >= 0 &&
      xCounter >= 0 &&
      yCounter < gameArea.length &&
      xCounter < gameArea[0].length
    ) {
      if (gameArea[yCounter][xCounter] === hat) {
        gameWon = true;
      }
      gameArea[yCounter][xCounter] === hole
        ? (gameLost = true)
        : (gameArea[yCounter][xCounter] = pathCharacter);
    } else {
      gameLost = true;
    }
  } else if (direction === "d") {
    xCounter++;
    if (
      yCounter >= 0 &&
      xCounter >= 0 &&
      yCounter < gameArea.length &&
      xCounter < gameArea[0].length
    ) {
      if (gameArea[yCounter][xCounter] === hat) {
        gameWon = true;
      }
      gameArea[yCounter][xCounter] === hole
        ? (gameLost = true)
        : (gameArea[yCounter][xCounter] = pathCharacter);
    } else {
      gameLost = true;
    }
  }
  console.log(gameArea);
}

gameLost === true
  ? console.log("You've lost the game")
  : console.log("You've won the game");
