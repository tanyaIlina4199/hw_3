const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
console.log("functional")
fibonacci.forEach(function (value) {
    console.log(value);
})

console.log("\n arrow")
fibonacci.forEach((value) => console.log(value));