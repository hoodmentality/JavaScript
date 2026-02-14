function createStudent(name, rollNo, marks) {
    var student = {}; // new Object();
    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks;
    return student;
}

var student1 = createStudent("Shriram Rai", 81, 80);
var student2 = createStudent("Dhara Periwal", 31, 80);

console.log(student1);
console.log(student2);