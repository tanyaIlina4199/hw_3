const temp: any[] = [null, 2, "3"]

let elem2 = "bbb";
let elem3 = "eee";

temp.forEach((value: any, index: number) => {
    if (index === 1) {
        elem2 = value != null ? value : "bbb";
    }

    if (index === 2) {
        elem3 = value != null ? value : "eee";
    }
})

console.log("elem2: " + elem2)
console.log("elem3: " + elem3)
