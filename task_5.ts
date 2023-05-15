let z: string = "я учу typescript!"
console.log(z.slice(2, 5))
console.log(z.slice(6, 16))

console.log(z.substring(2, 5))
console.log(z.substring(6, 16))


console.log(z.slice(z.indexOf("у"), z.lastIndexOf("у") + 1))
console.log(z.slice(z.indexOf("t"), z.lastIndexOf("t") + 1))

