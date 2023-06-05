class Apparatus {
    constructor(private wheel: string, private doors: number) {
    }
}

const firstApparatus = new Apparatus('Left-handed',3);
const secondApparatus = new Apparatus('Right-handed',5);

function getInfo(): string {
    return `This car has ${this.doors} doors and this is ${this.wheel} drive car`;
}

console.log(getInfo.call(firstApparatus))
console.log(getInfo.apply(secondApparatus))
const newGetInfo = getInfo.bind(secondApparatus)
console.log(newGetInfo())

