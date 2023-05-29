const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
console.log(numbers1.find((value: number) => {
    return value % 2 === 0
}))

console.log(numbers1.find(function (value: number) {
    return value %2 === 0
}))