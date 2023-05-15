let random: number = getRandomFloat(1, 100);

console.log(random)
console.log(Math.floor(random))
console.log(Math.ceil(random))
console.log(Math.round(random))

function getRandomFloat(min: number, max: number) {
    return Math.random() * (max - min) + min;
}