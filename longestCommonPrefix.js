/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""
    let key = strs.shift().split("")
    
    let results = strs.reduce((acc, i) => {
        let chars = i.split("")

        if (key.length > chars.length) {
          chars.length = key.length
        }
        for(x = 0; x < chars.length; x++){
            if (chars[x] !== key[x]){
                acc.length = x
                break
            }
        }
        return acc
    }, key)
    
    return results.join("")
};