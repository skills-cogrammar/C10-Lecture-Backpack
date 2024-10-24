function sayHi(answer = "Unsure") {
  let userName = prompt("Please enter your name");
  let output = `Hi ${userName}. How are you? ${answer}`;
  return output;
}

// // let person = sayHi();
// // console.log(person);
// // console.log(sayHi("ok"));
// // console.log(sayHi("I'm hungry"));
console.log(sayHi()); // Make use of default
console.log(sayHi("I'm hungry")); // Make use of argument

console.log(j);
j = 20;
console.log(j);
j = 30;
console.log(j);
console.log(typeof j);
