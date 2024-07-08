class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi! I am ${this.name} and I am ${this.age} years old.`);
    }
}
let p1 = new Person('Aman', 21);
let p2 = new Person('Dream Girl', 22);