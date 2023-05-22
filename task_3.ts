const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (const studentKey in student) {
    console.log(studentKey);
}

for (const studentKey in student) {
    console.log(student[studentKey as keyof typeof student]);
}