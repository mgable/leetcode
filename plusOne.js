/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let revArray = digits.reverse(),
      add = true,
      index = 0

    while(add){
      if (revArray[index] === 9){
        revArray[index++] = 0
      } else {
        revArray[index] ? revArray[index] += 1: revArray[index] = 1;
        add = false;
      }
    }

    return revArray.reverse();
};