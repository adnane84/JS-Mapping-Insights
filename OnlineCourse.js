// Exercise 14: Online Course Enrollment
// Develop a program for managing online course enrollment using a Map. 
// Store course names as keys and the list of enrolled students as values. 
// Implement functions to enroll students, drop students, and display enrolled students for a given course.

class CourseEnrollment {
  constructor() {
    this.courseMap = new Map();
  }

  enrollStudent(courseName, studentName) {
    if (this.courseMap.has(courseName)) {
      this.courseMap.get(courseName).push(studentName);
    } else {
      this.courseMap.set(courseName, [studentName]);
    }
  }

  dropStudent(courseName, studentName) {
    if (this.courseMap.has(courseName)) {
      const enrolledStudents = this.courseMap.get(courseName);
      const index = enrolledStudents.indexOf(studentName);
      if (index !== -1) {
        enrolledStudents.splice(index, 1);
        console.log(`${studentName} dropped from ${courseName}`);
      } else {
        console.log(`${studentName} is not enrolled in ${courseName}`);
      }
    } else {
      console.log(`${courseName} does not exist.`);
    }
  }

  displayEnrolledStudents(courseName) {
    if (this.courseMap.has(courseName)) {
      const enrolledStudents = this.courseMap.get(courseName);
      console.log(`Enrolled students in ${courseName}: ${enrolledStudents.join(', ')}`);
    } else {
      console.log(`${courseName} does not exist.`);
    }
  }
}

const courseEnrollment = new CourseEnrollment();

courseEnrollment.enrollStudent("Mathematics", "Alice");
courseEnrollment.enrollStudent("Mathematics", "Bob");
courseEnrollment.enrollStudent("History", "Charlie");
courseEnrollment.enrollStudent("History", "David");

courseEnrollment.displayEnrolledStudents("Mathematics");
courseEnrollment.displayEnrolledStudents("History");

courseEnrollment.dropStudent("Mathematics", "Bob");
courseEnrollment.displayEnrolledStudents("Mathematics");
