/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  let flat = nums.reduce((acc, i) => {
    acc = acc.concat(i); 
    return acc}, [])

  if (r * c !== flat.length){
    return nums
  }

  let results = [],
  index = 0;

  for (let i = 1; i <= r; i++){
    let row = []
    for (let j = 1; j <= c; j++){
      row.push(flat[index++])
    }
    results.push(row)
  }

  return results
};