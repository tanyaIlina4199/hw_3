import promptSync from "prompt-sync"

const prompt = promptSync();

let username = prompt("Please write username: ") //vupsen
let password = prompt("Please write password: ") //pupsen

function createUser(username: string, password: string): Object {
    const user = {
        name: username,
        pass: password
    }

    return user;
}

let user = createUser(username, password);
console.log(user);

username = prompt("Please write your username: ") //vupsen
password = prompt("Please write your password: ") //pupsen
validate(username, password, user);

function validate(username:string, password:string, user: object): void {
    let name = user["name" as keyof typeof user];
    let pass = user["pass" as keyof typeof user];

    if (name === username && pass === password) {
        console.log("Добро пожаловать!");
    }
}
