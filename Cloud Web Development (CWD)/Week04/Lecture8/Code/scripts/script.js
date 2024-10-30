// Procedural Programming - Using Functions
// let lecturerName = "Pieter";
// let lecturerSurname = "Hills";

// function displayLecturer() {
//   console.log(`${lecturerName} ${lecturerSurname} says hi!`);
// }

// displayLecturer();
let lName = "Susan";
let lSurname = "Smith";

// Object literal
let lecturer = {
  // Object properties
  lName: "Pieter",
  lSurname: "Hills",
  eyeColour: "Green/Blue",

  message(msg) {
    console.log(`${this.lName} ${this.lSurname} ${msg}`);
  },

  getEyes() {
    console.log(`${this.lName} ${this.lSurname} has ${this.eyeColour}`);
  },
};

console.log(lecturer.lName);
lecturer.message("says hi.");
// lecturer.message("wants to know how you are?");
// lecturer.getEyes();

// //object.method(argument);
// console.log("Done");

let students = [];

//Object constructor
function student(sName, sSurname, sMarks) {
  this.sName = sName;
  this.sSurname = sSurname;
  this.sMarks = sMarks;

  this.calcAvg = () => {
    let sum = 0;

    for (let i = 0; i < sMarks.length; i++) {
      sum += sMarks[i]; // sum = sum + sMarks[i]
    }

    return (sum / sMarks.length).toFixed(2);
  };

  this.getName = () => {
    return sName;
  };

  this.getSurname = () => {
    return sSurname;
  };
}

// let stud1 = new student("John", "Smith", [88, 76, 89]);
// let stud2 = new student("Jane", "Do", [100, 98]);
// let stud3 = new student("Gareth", "Emery", [88, 77, 90]);
// console.log(stud1.calcAvg());
// students.push(stud1);
// students.push(stud2);
// students.push(stud3);

let another;
do {
  let personName = prompt("Please enter student Name");
  let personSurname = prompt("Please enter student Surname");

  let marks = [];
  for (let i = 0; i < 2; i++) {
    marks.push(Number(prompt(`Enter mark ${i + 1}`)));
  }

  let stud = new student(personName, personSurname, marks);
  students.push(stud);

  another = prompt("Add another? (y/n)");
} while (another == "y");

// console.table(students);

for (let j = 0; j < students.length; j++) {
  console.log(
    `Full Name: ${students[j].getName()} ${students[
      j
    ].getSurname()} Average: ${students[j].calcAvg()}%`
  );
}
