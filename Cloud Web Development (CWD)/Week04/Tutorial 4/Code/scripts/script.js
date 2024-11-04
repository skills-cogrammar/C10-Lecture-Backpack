// Using object literals
// let student = {
//   _name: "John",
//   surname: "Smith",

//   sayHi: function () {
//     return `${this.name} ${this.surname} says hi`;
//   },

//   // changeName: function (value) {
//   //   this._name = value;
//   // },

//   get name() {
//     // name: function () {
//     return this._name;
//   },

//   set name(newName) {
//     this._name = newName;
//   },
// };

// student.name = "Jane";
// // student.changeName("Billy");
// console.log(student.sayHi());
// console.log(student.name);

// Using object constructors
// function student(x, y) {
//   this.sName = x;
//   this.sSurname = y;

//   // this.sayHi = function () {
//   //   return `${this.sName} ${this.sSurname} says hi`;
//   // };

//   this.sayHi = () => {
//     return `${this.sName} ${this.sSurname} says hi`;
//   };
// }

// let stud1 = new student("John", "Smith");
// let stud2 = new student("Jane", "Do");

// console.log(stud1.sayHi());
// console.log(stud2.sayHi());

// let var1 = 22;
// console.log(var1 / 2);
// console.log(typeof var1);

// var1 = "Johnny";
// console.log(var1 / 2);
// console.log(typeof var1);

// Using a class
class student {
  constructor(x, y) {
    this.sName = x;
    this.sSurname = y;
  }

  // this.sayHi = function () {
  //   return `${this.sName} ${this.sSurname} says hi`;
  // };

  sayHi = () => {
    return `${this.sName} ${this.sSurname} says hi`;
  };
}

let stud1 = new student("John", "Smith");
let stud2 = new student("Jane", "Do");

// stud1.sName = "Frank";
console.log(stud1.sayHi());
console.log(stud2.sayHi());
// console.log(stud1.sayHi());
