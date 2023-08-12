"use strict";

// Spiral Matrix II
var generateMatrix = function generateMatrix(n) {
  var row1 = 0,
      row2 = n - 1;
  var col1 = 0,
      col2 = n - 1;
  var arr = new Array(n).fill(0).map(function () {
    return new Array(n).fill(0);
  });
  var val = 1;

  while (row1 <= row2 && col1 <= col2) {
    for (var i = col1; i <= col2; i++) {
      arr[row1][i] = val++;
    }

    for (var j = row1 + 1; j <= row2; j++) {
      arr[j][col2] = val++;
    }

    if (row1 < row2 && col1 < col2) {
      for (var _i = col2 - 1; _i > col1; _i--) {
        arr[row2][_i] = val++;
      }

      for (var _j = row2; _j > row1; _j--) {
        arr[_j][col1] = val++;
      }
    }

    row1++;
    row2--;
    col1++;
    col2--;
  } //   console.log(arr);


  return arr;
};

generateMatrix(3);