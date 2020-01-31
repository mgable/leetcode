/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isNegative = x < 0 ? -1 : 1, s, result = []
  if (isNegative === -1){
    x *= -1
  }
  s = x.toString(10).split("")

    while(s.length){
        result.push(s.pop())
    }
    let value = parseInt(result.join(""),10)
    if (Math.abs(value) >= Math.pow(2,31)-1){
        return 0
    }
    
    return isNegative * value
};