/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var input = s.split(""),
        charmap = {
            "(": "open",
            ")": "(",
            "[": "open",
            "]": "[",
            "{": "open",
            "}": "{"
        },
        results = [];
    
    while(input.length){
        let char = input.shift();
        if (charmap[char] === "open"){
            results.push(char);
        } else {
            let check = results.pop();
            if (charmap[char] !== check){
                return false;
            }
        }
    }
    
    return results.length ? false : true;
};