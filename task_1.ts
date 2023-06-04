class Animal {
    static animalType: string = 'dog';

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printAnimal() {
        return `This is a ${Animal.animalType}. It's name is ${this.name}`
    }
}

const dog = new Animal('Bob');
console.log(dog.printAnimal())