// 78. Subsets

let subsets = function (nums) {
  let result = [];

  let dfs = function (i, nums, slate) {
    if (i == nums.length) result.push(slate.slice());

    //exclude
    dfs(i + 1, nums);

    //include
  };
};
