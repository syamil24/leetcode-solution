"use strict";

// Combination Sum II
var combinationSum2 = function combinationSum2(candidates, target) {
  candidates = candidates.sort(function (a, b) {
    return a - b;
  });
  var result = new Set();
  var tempArr = [];
  var sum = 0;

  for (var i = 0; i < candidates.length; i++) {
    recursive(candidates, target, i, sum);
    console.log(result);
  }

  function recursive(array, value, index, total) {
    total += array[index];
    if (total < value) index++;else if (total > value) {
      index++;
      recursive(array, value, index, total);
    } else if (total = value) {
      tempArr.push(array[index]);
      result.add(tempArr);
      return result;
    }
    console.log("temp is " + tempArr);
    recursive(array, value, index++, total);
  }
};

[1, 1, 2, 5, 6, 7, 19];
combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);