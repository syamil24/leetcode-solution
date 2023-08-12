let threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let result = nums[0] + nums[1] + nums[2];
  if (result == target) return target;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum == target) return target;
      else if (Math.abs(sum - target) < Math.abs(result - target)) result = sum;
      left++;
      right--;
    }
  }
  return result;
};
