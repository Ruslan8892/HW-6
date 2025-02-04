class Person {
constructor(name, age) {
    this.name = name;
    this.age = age;
}
sayHello() {
    console.log(`Hello, ${this.name}`);
}
}
class Student extends Person {
    constructor(name, age, studentld){
        super(name, age)
        this.studentld = studentld
    }
    study() {
        console.log(`${this.name} is studying`)
    }
}
const user = new Person('John', 30);
const student = new Student('Jonn', 30)
user.sayHello()
student.study()