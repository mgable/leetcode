/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let prior;
    
    for (let x = 0; x < nums.length; x++){
        let current = nums[x]
        if (prior === current){
            nums.splice(x,1)
            --x;
        }
        
        prior = current;
    }
    
    return nums.length
};