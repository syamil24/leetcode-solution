/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let j = 0;
  let sum = m + n;
  let startIndex = nums1.length - n;
  for (i = 0; i < nums1.length; i++) {
    if (nums2.length > 0 && nums1[i] == 0 && i >= startIndex) {
      nums1[i] = nums2[j];
      j++;
    }
  }
  nums1.sort((a, b) => a - b);
  console.log("Final Output::" + nums1);
  return nums1;
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
