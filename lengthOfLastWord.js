/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.trim().split("").reverse(),
        start = 0;

    while (arr.length){
        let char = arr.shift();
        if (char !== " "){
            start++
        } else {
            return start
        }
    }
    
    return start;
};