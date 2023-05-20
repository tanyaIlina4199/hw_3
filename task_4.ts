function getSumNumbers(chislo: number): void {
    let chisloStr = chislo.toString();
    let x = 0;
    let sumDigit = 0;
    while (chisloStr[x]) {
        let digit = Number.parseInt(chisloStr[x]);
        sumDigit = sumDigit + digit;
        x++;
    }

    console.log(sumDigit);
}

getSumNumbers(1234)