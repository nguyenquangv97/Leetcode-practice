/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i] ;
    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    } else {
      hashMap.set(nums[i], i);
    }
  }
};

console.log(twoSum([1, 2, 3, 4], 5));
