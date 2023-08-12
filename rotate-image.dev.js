"use strict";

// 48. Rotate Image
var rotate = function rotate(matrix) {
  for (var row = 0; row < matrix.length; row++) {
    for (var col = row; col < matrix[0].length; col++) {
      var _ref = [matrix[col][row], matrix[row][col]];
      matrix[row][col] = _ref[0];
      matrix[col][row] = _ref[1];
    }
  }

  var i = 0;

  while (i < matrix.length) {
    matrix[i].reverse();
    i++;
  } // for (const row of matrix) {
  //   row.reverse();
  // }


  console.log(matrix);
};

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);