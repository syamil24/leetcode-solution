let minPathSum = function (grid) {
  let topRightVal = grid[0][0];
  let firstFinalIndex = grid.length - 1;
  let secondFinalIndex = grid[firstFinalIndex].length - 1;
  let topBottomVal = grid[firstFinalIndex][secondFinalIndex];
  let sum = 0;
  q;
  //   console.log(topRightVal);
  //   console.log(topBottomVal);

  for (let i = 0; i < grid.length; i++) {
    const grid1 = grid[i];
    for (let j = 0; j < grid[i].length; j++) {
      if (i == 0 || j == 0) continue;

      const grid2 = grid[i][j];

      //   console.log(grid2);
    }
  }
};

minPathSum([
  [1, 2, 3],
  [4, 5, 6],
]);

console.log("Min array is " + Math.min(1, 2));
