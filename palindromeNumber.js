/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    
    return x.toString(10).split("").reverse().join("") === x.toString(10)
};