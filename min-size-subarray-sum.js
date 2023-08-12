// 209. Minimum Size Subarray Sum

/* My Solution
var minSubArrayLen = function (target, nums) {
  let result = nums.length;
  let temp = 0;

  console.log("Length is " + nums.length);
  for (let i = 0; i < nums.length; i++) {
    temp = loop(nums, i);
    result = Math.min(result, temp);
  }

  function loop(array, index) {
    let sum = 0;
    let count = 1;
    for (let i = index; i < array.length; i++) {
      sum += array[i];
      if (sum >= target) {
        return count;
      } else if (count == array.length && sum < target) return 0;
      count++;
    }
    // console.log("Count is " + count);
    return array.length;
  }

  console.log(result);
  return result;
};
*/

///--------------------- ONLINE SOLUTION --------------------------- ///

var minSubArrayLen = function (target, nums) {
  let min = nums.length + 1;
  let val = 0;
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    val += nums[i];

    while (val >= target) {
      min = Math.min(min, i + 1 - left);
      val -= nums[left];
      left++;
    }
  }

  console.log(min);
  return min != nums.length + 1 ? min : 0;
};

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
