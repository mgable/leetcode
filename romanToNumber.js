/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let key = {"I": 1,
    "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }, sum = 0, last;
      
  s.split("").forEach((num) => {
      if (last && key[last] < key[num]){
          sum -=  key[last]
          sum += key[num] - key[last]
      } else {
        sum += key[num]
      }
      last = num
  });

  return sum

};