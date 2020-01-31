/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let cache = {}, index = 0
    
    while(nums.length){
        let num = nums.shift(),
            otherNum = target - num
        if (cache[otherNum] !== undefined){
            return [cache[otherNum], index]
        }
        cache[num] = index
        index++
    }
};