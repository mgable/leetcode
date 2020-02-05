/**
 * @param {string} s
 * @return {boolean}
 */

let map = {
    "(": false,
    ")": "(",
    "[": false,
    "]": "[",
    "{": false,
    "}": "{"
}
var isValid = function(s) {
    let results = [],
        arr = s.split("")
    
    while(arr.length){
        let char = arr.shift()
        if (map[char]){ // close
          let openChar = results.pop()
          if (openChar !== map[char]) {
            return false
          }
        } else {
          results.push(char) // open
        }
    }
    return results.length ? false : true
};