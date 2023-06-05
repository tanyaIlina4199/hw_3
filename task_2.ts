class Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const firstPerson = new Person('Alexey');
const secondPerson = new Person('Bobidze');

function getName(): string {
    return `My name is ${this.name}`;
}

console.log(getName.call(firstPerson))
console.log(getName.apply(secondPerson))
const newGetName = getName.bind(secondPerson)
console.log(newGetName())

