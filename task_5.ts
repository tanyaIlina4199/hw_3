function getSumBetween(chisloFirst: number, chisloLast: number): number {
    if (chisloFirst === chisloLast) {
        return chisloFirst || chisloLast;
    }

    let first = chisloFirst;
    let last = chisloLast;
    if (chisloFirst > chisloLast) {
        first = chisloLast;
        last = chisloFirst;
    }

    let sum = 0;
    while (first <= last) {
      sum = sum + first;
      first++;
    }
  
    return sum;
  }
  
  console.log(getSumBetween(2, 2));