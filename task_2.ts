const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
console.log("arrow")
console.log(users.map((value: string, index: number) => {
    return "member " + (index + 1) + `: ${value}`
}))

console.log("\n functional")
console.log(users.map(function (value, index) {
    return "member " + (index + 1) + `: ${value}`;
}))