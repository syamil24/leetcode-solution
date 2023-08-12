// Unique Paths II
let uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;
  if (obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1)
    return 0;

  //declaration of 2D Array
  let table = Array.from({ length: obstacleGrid.length }, () =>
    new Array(obstacleGrid[0].length).fill(0)
  );

  //This is for row
  //if found obstacle, break the loop, otherwise fill in the value with 1
  for (let i = 0; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === 1) break;
    table[i][0] = 1;
  }

  //This is for column
  //if found obstacle, break the loop, otherwise fill in the value with 1
  for (let i = 0; i < obstacleGrid[0].length; i++) {
    if (obstacleGrid[0][i] === 1) break;
    table[0][i] = 1;
  }

  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[0].length; j++) {
      if (obstacleGrid[i][j] === 1) table[i][j] = 0;
      else table[i][j] = table[i - 1][j] + table[i][j - 1];
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
