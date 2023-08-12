"use strict";

// 78. Subsets
var subsets = function subsets(nums) {
  var result = [];

  var dfs = function dfs(i, nums, slate) {
    if (i == nums.length) result.push(slate.slice()); //exclude

    dfs(i + 1, nums); //include
  };
};