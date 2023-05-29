const numbers3 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

console.log(numbers3.every(el => {
    let pow = Math.pow(el, 2);
    let arrayOfDigit = pow.toString().split("");
    let sumOfDigit = arrayOfDigit.map((value) => Number.parseInt(value))
                                .reduce((prev, cur) => prev + cur);

    return sumOfDigit % 2 === 0;
}))

console.log(numbers3.every(function (el) {
    let pow = Math.pow(el, 2);
    let arrayOfDigit = pow.toString().split("");
    let sumOfDigit = arrayOfDigit.map((value) => Number.parseInt(value))
                                .reduce((prev, cur) => prev + cur);
                                
    return sumOfDigit % 2 === 0;
}))