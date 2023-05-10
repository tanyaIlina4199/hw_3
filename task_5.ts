let dostup = "доступ" 
let morpeh = "морпех"
let naled = "наледь"
let poperek = "попрек"
let rubilo = "рубило"

console.log(dostup.length + morpeh.length + naled.length + poperek.length + rubilo.length)

let all = dostup + morpeh + naled + poperek + rubilo
let countLetters: number = 0;
while (all[countLetters] != undefined) {
    countLetters++
}

console.log(countLetters)