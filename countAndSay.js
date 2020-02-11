/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let index = 0
  if (n === 1) return "1"

  return iterate(["1"])

  function iterate(arr){
    let total = 0,
      results = "",
      lastChar;

    while (arr.length){
      let char = arr.shift();
      if (!lastChar || char === lastChar){
        total++
      } else {
        results += total.toString() + lastChar
        total = 1
      }
      lastChar = char
    }

    results += total.toString() + lastChar

    if (++index < (n - 1)){
      return iterate(results.split(""))
    }

    return results
  }
};