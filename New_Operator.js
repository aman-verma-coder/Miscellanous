function personMaker(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}
personMaker.prototype.talk = function () {
    console.log(`Hii There! I am ${this.name} and I am ${this.age} years old`);
}
let p1 = new personMaker("Aman", 21);
let p2 = new personMaker("Dream Girl", 22);