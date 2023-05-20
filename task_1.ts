function getSum(chisloLast: number): void {
  let sum = 0;
  let j = 0;
  while (j <= chisloLast) {
    sum = sum + j;
    j++;
  }

  console.log(sum);
}

getSum(100);