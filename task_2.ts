// credit - сумма кредита
// 0.17*credit - переплата в год
// (0.17*credit)*5 - pereplata

function pereplata(credit: number): number {
    return credit * 0.17 * 5;
}
console.log(pereplata(2000))

// second solution
// let perepalta = 0;
//     const yearly = credit / 5;
//     for (let i = 1; i <= 5; i++) {
//         perepalta = perepalta + credit * 0.17;
//         credit = credit - yearly;
//         i++;
//     }

//     return perepalta;