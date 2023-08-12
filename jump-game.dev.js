"use strict";

// Jump Game II
var jump = function jump(nums) {
  if (nums.length == 1) return 0;
  var slow = 0;
  var fast = 0;
  var nextPossibleMax = 0;
  var jumps = 0;

  while (fast < nums.length - 1) {
    while (slow <= fast) {
      nextPossibleMax = Math.max(nextPossibleMax, slow + nums[slow]);
      slow++;
    }

    fast = nextPossibleMax;
    jumps++;
  }

  return jumps;
};

jump([2, 3, 1, 1, 4]);