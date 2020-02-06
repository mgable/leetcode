/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0,
    last;

    while (index < nums.length){
      if (nums[index] === last){
        nums.splice(index,1)
      } else {
        last = nums[index++]
      }
    }
  return nums.length
};