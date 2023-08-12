// Spiral Matrix II

let generateMatrix = function (n) {
  let row1 = 0,
    row2 = n - 1;
  let col1 = 0,
    col2 = n - 1;
  let arr = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let val = 1;

  while (row1 <= row2 && col1 <= col2) {
    for (let i = col1; i <= col2; i++) arr[row1][i] = val++;

    for (let j = row1 + 1; j <= row2; j++) arr[j][col2] = val++;

    if (row1 < row2 && col1 < col2) {
      for (let i = col2 - 1; i > col1; i--) arr[row2][i] = val++;
      for (let j = row2; j > row1; j--) arr[j][col1] = val++;
    }

    row1++;
    row2--;
    col1++;
    col2--;
  }

  //   console.log(arr);
  return arr;
};

generateMatrix(3);
