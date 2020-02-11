var searchInsert = function(nums, target) {
    for (let x = 0; x < nums.length; x++){
        let current = nums[x];
        if (current >= target){
            return x
        }
    }
    
    return nums.length;
};
