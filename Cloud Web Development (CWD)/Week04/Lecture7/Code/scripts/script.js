// let count = 0;

function one() {
  console.log("one");
  // count++;
  // if (count == 5) {
  //   clearInterval(timer);
  // }
}

function two() {
  console.log("two");
  clearTimeout(timer);
}

let timer = setTimeout(one, 2000);
// setTimeout(one, 2000);
two();

// setTimeout(function () {
//   let input = prompt("Please enter your name");
//   alert(`Welcome back ${input}`);
// }, 2000);

setTimeout(() => {
  let input = prompt("Please enter your name");
  alert(`Welcome back ${input}`);
}, 2000);

// let scores = [89, 77, 90, 56, 44, 88, 22];
// let result = scores.filter((value) => value >= 60);

// console.log(`Original: ${scores}`);
// console.log(`Filter: ${result}`);

//With array.map() Higher-Order
// function double(nums) {
//   // let multiply = (nums) => {
//   //   return nums * 2;
//   // };
//   // let multiply = (value) => value * 2;

//   // let doubleNum = nums.map(multiply);

//   let nums2 = nums.map((nums) => nums * 2);
//   // let doubleNum2 = doubleNum.map((value) => value * 2);

//   return nums2;
// }

//Without Higher-Order
// function double(nums) {
//   let doubleNum = [];

//   for (let i = 0; i < nums.length; i++) {
//     doubleNum.push(nums[i] * 2);
//     console.log(doubleNum);
//   }

//   return doubleNum;
// }

// let result = double(scores);
// console.log(`Original: ${scores}`);
// console.log(`Doubled: ${result}`);

// function higherOrder() {
//   return function greet() {
//     // return "Hi there.";
//     return function evening() {
//       return "Hope you are having a good evening";
//     };
//   };

//   // let msg = greet();
//   // console.log(msg);

//   // console.log(greet());
//   // return greet();
// }

// console.log(higherOrder()()());

// // let test1 = higherOrder();
// // let test2 = test1();
// // console.log(test2);

// // let test = higherOrder()();
// // console.log(test);

// // let test = greet();
// // console.log(test);

// // let test = higherOrder();
// // console.log(test);

// // let studName1 = "John";
// // console.log(studName1);
// // studName1 = "Susan";
// // console.log(studName1);

// // let studNames2 = ["Johnny", "Susan", "Brett", "Mary"];
// // console.log(studNames2);

// // studNames2[0] = "John";
// // console.log(studNames2);
