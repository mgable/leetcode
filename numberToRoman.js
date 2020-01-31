let thousands = ["", "M","MM","MMM", "MMM"]
let hundreds = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
let tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
let ones = ["","I","II","III","IV","V","VI","VII","VIII","IX"]

function intToRoman(num) {
  let thousand = Math.floor(num / 1000)
  let hundred = Math.floor(num / 100 % 10)
  let ten = Math.floor(num / 10 % 10)
  let one = Math.floor(num / 1 % 10)
  return thousands[thousand] + hundreds[hundred] + tens[ten] + ones[one]
}