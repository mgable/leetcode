/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let results = []

    function permute(current = [], cache = {}){
      if (current.length === nums.length){
        results.push(current.slice())
        return
      }
      for (const num of nums){
        if (!cache[num]){
          cache[num] = true
          current.push(num)
          permute(current, cache)
          current.pop()
          cache[num] = false
        }
      }
    }

    permute()
    return results
};
