let exist = function (board, word) {
  let chars = word.split("");
  let result = false;
  let loopResult = [];
  let tempWord = [];
  let boardIndex = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == chars[0] && chars.length == 1) {
        return true;
      } else if (board[i][j] == chars[0]) {
        tempWord.push(board[i][j]);
        loopResult = loop(board, chars, i, j, 1, tempWord, boardIndex);
        console.log("Loop Result is " + loopResult);
        if (loopResult != undefined) {
          loopResult = loopResult.join("");
          if (loopResult == word) {
            result = true;
            return result;
          }
        }
        tempWord = [];
        boardIndex = [];
      }
    }
  }

  return result;
};

let compare = (arr, index1, index2) => {
  let comparisonResult = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == index1 && arr[i][1] == index2) {
      comparisonResult = true;
      return comparisonResult;
    }
  }
  // console.log(comparisonResult);
  return comparisonResult;
};

let loop = function (
  boards,
  characters,
  i,
  j,
  charIndex,
  tempWord,
  boardIndexArray
) {
  boardIndexArray.push([i, j]);
  if (
    boards[i + 1] != undefined &&
    boards[i + 1][j] == characters[charIndex] &&
    !compare(boardIndexArray, i + 1, j)
  ) {
    console.log("Inside loop 4");
    i++;
    tempWord.push(characters[charIndex]);
    charIndex++;
    loop(boards, characters, i, j, charIndex, tempWord, boardIndexArray);
  }
  if (
    boards[i][j + 1] != undefined &&
    boards[i][j + 1] == characters[charIndex] &&
    !compare(boardIndexArray, i, j + 1)
  ) {
    console.log("Inside loop 1");
    j++;
    tempWord.push(characters[charIndex]);
    charIndex++;
    loop(boards, characters, i, j, charIndex, tempWord, boardIndexArray);
  }
  if (
    boards[i][j - 1] != undefined &&
    boards[i][j - 1] == characters[charIndex] &&
    !compare(boardIndexArray, i, j - 1)
  ) {
    console.log("Inside loop 2");
    j--;
    tempWord.push(characters[charIndex]);
    charIndex++;
    loop(boards, characters, i, j, charIndex, tempWord, boardIndexArray);
  }
  if (
    boards[i - 1] != undefined &&
    boards[i - 1][j] == characters[charIndex] &&
    !compare(boardIndexArray, i - 1, j)
  ) {
    console.log("Inside loop 3");
    i--;
    tempWord.push(characters[charIndex]);
    charIndex++;
    loop(boards, characters, i, j, charIndex, tempWord, boardIndexArray);
  } else {
    return;
  }
  return tempWord;
};

let boards = [
  ["C", "A", "A"],
  ["A", "A", "A"],
  ["B", "C", "D"],
];
let words = "AAB";

let isWordExists = exist(boards, words);
console.log(isWordExists);
