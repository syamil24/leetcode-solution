// Find First and Last Position of Element in Sorted Array

// Solution 1

let searchRange = function (nums, target) {
  let start,
    end = null;
  let targetRange = [];
  if (nums.length == 0) return [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    if (start == null && target == nums[i] && target != nums[i + 1]) {
      start = i;
      end = start;
      break;
    } else if (start == null && target == nums[i] && target == nums[i + 1]) {
      start = i;
      continue;
    } else if (start != null && target == nums[i] && target == nums[i + 1]) {
      continue;
    } else if (start != null && target == nums[i] && target != nums[i + 1]) {
      end = i;
      break;
    }
  }
  if (nums.length == 0) return [-1, -1];
  if (start == null) return [-1, -1];
  console.log([start, end]);
  return [start, end];
};

//Solution2
let searchRange2 = function (nums, target) {
  let targetRange = [];
  if (nums.length == 0) return [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      targetRange.push(i);
      if (nums[i + 1] != target) break;
    }
  }

  if (nums.length == 0 || targetRange.length == 0) return [-1, -1];
  else if (targetRange.length == 1) targetRange.push(targetRange[0]);
  else if (targetRange.length >= 3)
    return [targetRange[0], targetRange[targetRange.length - 1]];
  console.log(targetRange);
  return targetRange;
};

searchRange2([5, 7, 7, 8, 8, 10], 6);
