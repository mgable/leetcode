let roman = {
  "I":1,
  "V":5,
  "X":10,
  "L":50,
  "C":100,
  "D":500,
  "M":1000,
}


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let arr = s.split(""), prev = Number.MAX_SAFE_INTEGER

    return arr.reduce((acc, i) => {
      let value = roman[i]
      if (value > prev)
      {
        acc+= (value - prev ) - prev
      } else {
        acc+= roman[i]
      }
      prev = value
      return acc
    }, 0)
};