/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let start = 0,
        total = -(Number.MAX_SAFE_INTEGER)
    
    while(nums.length){
        let subtotal = 0;
        for (let x = start; x < nums.length; x++){
            subtotal += nums[x]
            if (subtotal > total){
                total = subtotal
            }
        }
        
        nums.shift();
    }
    
    return total

};
