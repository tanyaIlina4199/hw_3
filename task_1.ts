interface Husband {
  name?: string,
  age?: number
}

const myHusband: Husband = {
  name: "Zhenya",
  age: 70
}
console.log(myHusband)
delete myHusband.age
delete myHusband.name
console.log(myHusband)