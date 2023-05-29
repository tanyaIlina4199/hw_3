let ingredients = new Map<string, number>([
    ["cucumber", 500],
    ["tomato", 200],
    ["salt", 10],
    ["sour cream", 110]
]);

ingredients.forEach((gramm: number, name: string) => {
    if (gramm > 100) {
        console.log(name);
    }
})

console.log("\nfunctional")
ingredients.forEach(function (gramm: number, name: string) {
    if (gramm > 100) {
        console.log(name);
    }
})