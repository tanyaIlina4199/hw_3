let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    tamara: 664,
    alexandra: 199,
   // tanya: 555 
}

let sumZP = 0;
let count = 0; 
for (const salariesKey in salaries) { //
    count++;
    sumZP = sumZP + salaries[salariesKey as keyof typeof salaries];
}

console.log(sumZP / count);