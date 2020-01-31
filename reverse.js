/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0;

    let value = (x.toString().split("").reverse());
    
    if (isNegative) {
      value.unshift(value.pop())
    }
    
    value = value.join("");
    
    if (Math.abs(value) >= Math.pow(2,31) - 1) {
        return 0;
    }

    return value
};

