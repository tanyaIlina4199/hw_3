let count = 42
let userName = '42'

let countStr1 = String(count)
let userNameNum1 = Number(userName)

console.log("countStr1: " + typeof countStr1)
console.log("userNameNum1: " + typeof userNameNum1)

let countStr2 = '' + count
let userNameNum2 = +userName

console.log("countStr2: " + typeof countStr2)
console.log("userNameNum2: " + typeof userNameNum2)
