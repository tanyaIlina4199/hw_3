const binary = [0, 0, 0, 0]
let binStr = binary.toString();

while (binStr.includes(",")) {
    binStr = binStr.replace(",", "1");
}

console.log(binStr)