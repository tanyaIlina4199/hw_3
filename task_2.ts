let stroka: string = 'я учу typescript!'

let uchu = "учу"
if (stroka.includes(uchu)) {
    console.log(uchu)
} else {
    console.log("Данной подстроки нет")
}

console.log(stroka.includes(uchu) ? uchu : console.log("Данной подстроки нет"))