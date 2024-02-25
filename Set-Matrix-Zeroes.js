/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zeroPositionRow = [], zeroPositionCol = [], zeroPositionRowSet = new Set(), zeroPositionColSet = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] == 0){
                zeroPositionRowSet.add(i);
                zeroPositionColSet.add(j);
            }
        }
    }
    zeroPositionRow = Array.from(zeroPositionRowSet);
    zeroPositionCol = Array.from(zeroPositionColSet)

    let i = 0;
    if(zeroPositionRow.length > 0){
        while (i < zeroPositionRow.length) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[zeroPositionRow[i]][j] = 0;
            }
            i++
        }
    }
    i=0;
    if(zeroPositionCol.length > 0){
        while (i < zeroPositionCol.length) {
            for (let j = 0; j < matrix.length; j++) {
                matrix[j][zeroPositionCol[i]] = 0;
            }
            i++
        }
    }

    return matrix;
};
setZeroes([[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]]);
// setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])