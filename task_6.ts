const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

console.log(numbers2.some(el => el % 5 === 0 && el % 3 === 0))

console.log(numbers2.some(function (el: number) {
    return el % 5 === 0 && el % 3 === 0
}))