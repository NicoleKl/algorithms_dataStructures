/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let indexMap = {};

  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];

    let diff = target - item;

    if (indexMap[item] !== undefined) return [indexMap[item], i];

    indexMap[diff] = i;
  }
};
