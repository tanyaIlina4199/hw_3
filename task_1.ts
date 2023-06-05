class Car {
    constructor(protected brand: string, public typeOfEngine: string) {}
}

class SportCar extends Car {
    constructor(public brand: string, public typeOfEngine: string, private price: number, private maxSpeed: number) {
        super(brand, typeOfEngine);
    }

    printInfo(): string {
        return `This is ${this.brand}. It has ${this.typeOfEngine} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.price}`;
    }
}

class LuxuryCar extends Car {
    constructor(public brand: string, public typeOfEngine: string, private price: number, private maxSpeed: number) {
        super(brand, typeOfEngine);
    }


    printInfo(): string {
        return `This is ${this.brand}. It has ${this.typeOfEngine} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.price}`;
    }
}

const car1 = new LuxuryCar('Ferrari', 'Electro', 520000, 300)
const car2 = new SportCar('McLauren', 'Fuel', 467000, 500)
console.log(car1.printInfo())
console.log(car2.printInfo())


