class Person {
    constructor(name, age) {
        console.log("Person Constructor is called")
        this.name = name;
        this.age = age;
    }
    call() {
        console.log(`Hi I am ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, age, marks) {
        console.log("Student Constructor is called")
        super(name, age);
        this.marks = marks;
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        console.log("Teacher Constructor is called")
        super(name, age);
        this.subject = subject;
    }
}
stu1 = new Student('Aman', 21, 95);
stu2 = new Student('Dream Girl', 22, 92);