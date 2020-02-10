/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let x = 0; x < nums.length; x++){
        let current = nums[x];
        if (current === val){
            nums.splice(x,1)
            --x;
        }
    }
    
    return nums.length
};
