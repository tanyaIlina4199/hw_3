const numbers = [7, -4, 32, -90, 54, 32, -21]
console.log("arrow")
console.log(numbers.filter((value: number) => {
    return value > 0
}))

console.log("\n functional")
console.log(numbers.filter(function (value) {
    return value > 0
}))