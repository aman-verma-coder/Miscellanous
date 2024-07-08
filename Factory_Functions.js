function personMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hey! I am ${this.name} and I am ${this.age} years old.`);
        }
    };
    return (person);
};
let person1 = personMaker('Aman', 21);
let person2 = personMaker('Rahul', 25);
console.log(`Person 1 is ${person1.name} and his age is ${person1.age}`);
console.log(`Person 2 is ${person2.name} and his age is ${person2.age}`);