class Person {
constructor(name, age) {
    this.name = name;
    this.age = age;
}
sayHello() {
    console.log(`Hello, ${this.name}`);
}
}
const user = new Person('John', 30);
user.sayHello()