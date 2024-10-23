let lecture = "Learning about functions";

// // console.log(`The global id: ${id}`);

// function getUser(average, num) {
//   let person = prompt("Please enter your name");
//   console.log(`${num}. Hi ${person} your average is ${average}%`);

//   // let lecture = "What will happen?";
//   console.log(lecture);
//   lecture = "What will happen?";

//   if (person == "John") {
//     let surname = "Jones";
//     console.log(`Surname (inside if): ${surname}`);
//   }
//   console.log(`The global id: ${id}`);
//   // console.log(`Surname (inside function): ${surname}`);
//   // let lecture = "Unsure";
//   return 40 * 22;

//   // console.log("Howdy");
// }

// function one() {}
let one = () => {};
// function two(value1) {}
let two = (value1) => {};
// function three(value4, value5) {}
let three = (value4, value5) => {};

// function getUser(average, num) {}
let getUser = (average, num) => {
  let person = prompt("Please enter your name");
  console.log(`${num}. Hi ${person} your average is ${average}%`);

  //this
  // let lecture = "What will happen?";
  console.log(lecture);
  lecture = "What will happen?";

  if (person == "John") {
    let surname = "Jones";
    console.log(`Surname (inside if): ${surname}`);
  }
  // console.log(`The global id: ${id}`);
  // console.log(`Surname (inside function): ${surname}`);
  // let lecture = "Unsure";
  return 40 * 22;

  // console.log("Howdy");
};

// let test = getUser;
// for (let i = 50; i <= 52; i++) {
// let id = prompt("Please enter your id number");
// let newValue = test(89, id);
// }
let newValue = getUser(89, 732547);
console.log(newValue);
// console.log(lecture);

// function outer(value1) {
//   console.log(value1);
//   return function inner(value2) {
//     console.log(value2);

//     console.log(`Total is: ${value1 * value2}`);
//   };
// }

// // outer(30);
// // outer(40)(50);
// let test1 = outer(10);
// test1(20);
// test1(500);
