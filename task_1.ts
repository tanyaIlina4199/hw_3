let a = "Таня"
let b = "Ильина"
console.log(`Привет ${a.toLocaleUpperCase()} ${b.toLocaleUpperCase()}`)// все большие
console.log(`Привет ${a.toLocaleLowerCase()} ${b.toLocaleLowerCase()}`)// все маленькие
console.log(`Привет ${a.toLocaleUpperCase()} ${b.toLocaleLowerCase()}`)// большое+маленькое
console.log(`Привет ${a.toLocaleLowerCase()} ${b.toLocaleUpperCase()}`)//маленькое+большое
console.log(`Привет ${changeRegister(a)} ${changeRegister(b)}`)

let fullPhrase = "Привет ".concat(a).concat(" ").concat(b);
let full = fullPhrase.charAt(3);

console.log(fullPhrase);

function changeRegister(str: String) {
    let new_str = "";
    let len = str.length;
      for (let i = 0; i < len; i++) {
        if (i % 2 === 0) {
          new_str += str[i].toUpperCase();
        } else {
          new_str += str[i].toLowerCase();
        }
      }
      return new_str;
}

//`Привет <Имя> <Фамилия>`