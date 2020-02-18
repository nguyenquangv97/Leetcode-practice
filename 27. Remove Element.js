/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (!nums) {
    return 0;
  }
  if (nums.indexOf(val) !== -1)
    removeElement(nums.splice(nums.indexOf(val), 1))
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3)); // => 2
