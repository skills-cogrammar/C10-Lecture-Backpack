// // Object literal
// let person1 = {
//   name: "Pieter",
//   surname: "Hills",
// };

// // JSON object
// let person2 = {
//   name: "Pieter",
//   surname: "Hills",
//   picture: "http://some.com/img.jpg",
// };

// console.log(person2);

// let temp = JSON.stringify(person2);
// console.log(temp);

// let temp2 = JSON.parse(temp);
// console.log(temp2);

// console.log("Start");

// fetch("https://zenquotes.io/api/today")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     console.log(data[0].q);
//     console.log(data[0].a);
//     console.log(data[0].h);
//   })
//   .catch((error) => console.log(error));

// console.log("Finish");

// console.log("Start");

// let myPromise = new Promise(function (resolve, reject) {
//   let random = Math.floor(Math.random() * 10);

//   if (random >= 6) {
//     resolve(`Value correct [Resolved] ${random}`);
//   } else {
//     reject(`Value incorrect [Rejected] ${random}`);
//   }
// });

// myPromise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// console.log("Finish");

// console.log("Start");

// function getValue() {
//   fetch("https://zenquotes.io/api/today")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       console.log(data[0].q);
//       console.log(data[0].a);
//       console.log(data[0].h);
//     })
//     .catch((error) => console.log(error));
// }

// getValue();

// console.log("Finish");

console.log("Start");

async function getValue() {
  try {
    let response = await fetch("https://zenquotes.io/api/today");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getValue();

console.log("Finish");

// try {
//   let num = "Happy";
//   let num2 = "John";
//   let num = parseInt(num[99]);
//   console.log(`Good: ${total}`);
// } catch (error) {
//   console.log(error);
// }
