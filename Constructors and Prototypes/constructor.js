function createStudent(name, rollNo, marks) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
}

var student1 = new createStudent("abcd", 15, 78);
var student2 = new createStudent("pqrs", 20, 77);

console.log(student1);
console.log(student2);