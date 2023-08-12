"use strict";

// Unique Paths II
var uniquePathsWithObstacles = function uniquePathsWithObstacles(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;
  if (obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1) return 0; //declaration of 2D Array

  var table = Array.from({
    length: obstacleGrid.length
  }, function () {
    return new Array(obstacleGrid[0].length).fill(0);
  }); //This is for row
  //if found obstacle, break the loop, otherwise fill in the value with 1

  for (var i = 0; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === 1) break;
    table[i][0] = 1;
  } //This is for column
  //if found obstacle, break the loop, otherwise fill in the value with 1


  for (var _i = 0; _i < obstacleGrid[0].length; _i++) {
    if (obstacleGrid[0][_i] === 1) break;
    table[0][_i] = 1;
  }

  for (var _i2 = 1; _i2 < table.length; _i2++) {
    for (var j = 1; j < table[0].length; j++) {
      if (obstacleGrid[_i2][j] === 1) table[_i2][j] = 0;else table[_i2][j] = table[_i2 - 1][j] + table[_i2][j - 1];
    }
  }

  return table[table.length - 1][table[0].length - 1];
};
/******** * Explanation *******
 *
 *
 *
 *
 *
 * **/