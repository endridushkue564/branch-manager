/**
 * Filename: complexCode.js
 * Description: This code demonstrates a complex and elaborate implementation of a university course management system.
 * Author: [Your Name]
 * Date: [Current Date]
 */

// Class Definitions
class Course {
  constructor(name, code, duration) {
    this.name = name;
    this.code = code;
    this.duration = duration;
    this.students = [];
    this.teachers = [];
  }

  enrollStudent(student) {
    this.students.push(student);
  }

  assignTeacher(teacher) {
    this.teachers.push(teacher);
  }
}

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Student extends Person {
  constructor(name, age, gender, studentId) {
    super(name, age, gender);
    this.studentId = studentId;
  }

  joinCourse(course) {
    course.enrollStudent(this);
  }
}

class Teacher extends Person {
  constructor(name, age, gender, teacherId) {
    super(name, age, gender);
    this.teacherId = teacherId;
  }

  assignCourse(course) {
    course.assignTeacher(this);
  }
}

// University Courses
const mathCourse = new Course("Mathematics", "MATH101", 12);
const physicsCourse = new Course("Physics", "PHYS101", 10);
const chemistryCourse = new Course("Chemistry", "CHEM101", 8);

// Students
const student1 = new Student("John Doe", 20, "Male", 1001);
const student2 = new Student("Jane Smith", 21, "Female", 1002);

// Teachers
const teacher1 = new Teacher("Dr. James Brown", 40, "Male", 2001);
const teacher2 = new Teacher("Prof. Emily Davis", 35, "Female", 2002);

// Enroll Students and Assign Teachers
student1.joinCourse(mathCourse);
student2.joinCourse(physicsCourse);

teacher1.assignCourse(mathCourse);
teacher2.assignCourse(physicsCourse);
teacher2.assignCourse(chemistryCourse);

// Display Course Information
console.log("Course: " + mathCourse.name);
console.log("Code: " + mathCourse.code);
console.log("Duration: " + mathCourse.duration + " weeks");
console.log("Students Enrolled: " + mathCourse.students.length);
console.log("Assigned Teachers: " + mathCourse.teachers.length);
console.log("\nCourse: " + physicsCourse.name);
console.log("Code: " + physicsCourse.code);
console.log("Duration: " + physicsCourse.duration + " weeks");
console.log("Students Enrolled: " + physicsCourse.students.length);
console.log("Assigned Teachers: " + physicsCourse.teachers.length);
console.log("\nCourse: " + chemistryCourse.name);
console.log("Code: " + chemistryCourse.code);
console.log("Duration: " + chemistryCourse.duration + " weeks");
console.log("Students Enrolled: " + chemistryCourse.students.length);
console.log("Assigned Teachers: " + chemistryCourse.teachers.length);

// Additional Functionality
// ...

// ... continue with additional code and functionalities to extend the course management system
// ... (at least 200 lines of code)