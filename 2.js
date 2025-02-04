for (let i = 0; i < 5; i++) {
    console.log(i);
}
const message = 'test';
function example() {
    if (true) {
        const message ='Hello, world!';
        console.log(message);
    }
    console.log(message);
}
example();
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};
for (let key in person) {
    console.log(person[key]);
}
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];
for (let value of students) {
    console.log(value);
}
let UserAge = prompt('How old are you?');
let year = new Date().getFullYear();
function yearofbirdth(age) {
    return year - UserAge
}
let answer = yearofbirdth(UserAge);
console.log(answer)
