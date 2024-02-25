//Hacker Rank Question 2d Array Hourglass Question

let input = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

let input2 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

var hourglassSum = function (arr) {
  let sumOfHourglass = [];
  let temp1 = 0;
  let temp2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 2) {
      for (let j = 0; j < arr[i].length; j++) {
        if (j < arr[i].length - 2) {
          temp1 = i + 3;
          temp2 = j + 3;
          let temp = sum(temp1, temp2, arr);
          sumOfHourglass.push(temp);
        }
      }
    }
  }
  sumOfHourglass.sort((a, b) => a - b);
  console.log(sumOfHourglass);
};

var sum = function (row, column, arr) {
  let sum = 0;
  let middleMan = arr[row - 2][column - 2];
  for (let i = row - 3; i < row; i++) {
    if (i == row - 2) {
      continue;
    }
    for (let j = column - 3; j < column; j++) {
      sum = sum + arr[i][j];
      if (row == 3 && column == 4) {
        console.log("Test :: " + arr[i][j]);
      }
    }
  }
  sum = sum + middleMan;
  return sum;
};

hourglassSum(input2);
