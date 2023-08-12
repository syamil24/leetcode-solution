// Combination Sum II
var combinationSum2 = function (candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  let result = new Set();
  let tempArr = [];
  let sum = 0;

  for (let i = 0; i < candidates.length; i++) {
    recursive(candidates, target, i, sum);
    console.log(result);
  }

  function recursive(array, value, index, total) {
    total += array[index];
    if (total < value) index++;
    else if (total > value) {
      index++;
      recursive(array, value, index, total);
    } else if ((total = value)) {
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
