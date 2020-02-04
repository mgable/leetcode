/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let results = strs.shift();
    
    while (strs.length && results.length) {
        let key = strs.shift();
        if (key.length < results.length){
           results =  results.substring(0, key.length);
        } else {
          key = key.substring(0, results.length)
        }
        
        while (results !== key && key.length){
           key = key.substring(0, key.length - 1)
           results =  results.substring(0, key.length);
        }
    }

    return results || "";
}