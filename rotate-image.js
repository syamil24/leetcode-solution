// 48. Rotate Image

let rotate = function (matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = row; col < matrix[0].length; col++) {
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }

  let i = 0;
  while (i < matrix.length) {
    matrix[i].reverse();
    i++;
  }
  // for (const row of matrix) {
  //   row.reverse();
  // }

  console.log(matrix);
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
