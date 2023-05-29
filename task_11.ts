interface Person {
    name?: string,
    surname?: string,
    age?: string
}

function create(firstName?: any, lastName?: any, presonAge?: any): Person {
    firstName = firstName == null ? "Аноном" : firstName;
    lastName = lastName == null ? "Анонимович" : lastName;
    presonAge = presonAge == null ? "? лет" : presonAge;

    const person: Person = {
        name: firstName,
        surname: lastName,
        age: presonAge
    }

    return person;
}

const test = create(null, "fhfhfh", "34")
console.log(test)