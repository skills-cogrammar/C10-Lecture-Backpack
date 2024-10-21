// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// console.log("Done");

// let heading = "Control Structures (Loops and Iterations)";
// // console.log(heading);
// // console.log(heading.length);
// // console.log(heading[0]);

// for (let x = 0; x < heading.length; x++) {
//   console.log(heading[x]);
//   if (x == 6) {
//     continue;
//   }
// }

// console.log("Done");

// let numbers = "123456789012345678901234567890";

// for (let x = 0; x < numbers.length; x++) {
//   if (x % 2 == 0) {
//     continue;
//   }

//   console.log(numbers[x]);
// }

// console.log("Done");

// let sum = 0;

// for (let i = 1; i < 4; i++) {
//   let mark = Number(prompt("Please enter a mark"));

//   sum += mark; // sum = sum + mark;

//   console.log(`${i}. ${mark}`);
//   console.log(`Total: ${sum}`);
//   // console.log(i + "." + mark)
// }

// let avg = sum / 3;
// console.log(`Average: ${avg.toFixed(2)}%`);

// let num = 0;

// while (num < 10) {
//   console.log(num);
//   num++;
// }

// let another = "y";
let another = prompt("Do you want to enter a mark? y/n");
let sum = 0;
let count = 0;

while (another == "y") {
  let mark = Number(prompt("Please enter a mark"));

  if (isNaN(mark)) {
    continue;
  }

  count++; // count = count + 1; count += 1;
  sum += mark; // sum = sum + mark;
  console.log(`${count}. ${mark}`);
  console.log(`Total: ${sum}`);

  another = prompt("Do you want to enter another mark? y/n");
}

if (count > 0) {
  let average = sum / count;
  console.log(`Average: ${average.toFixed(2)}%`);
} else {
  console.log(`No marks entered, cannot calculate Average`);
}

console.log("Done");

// let another;
// let sum = 0;
// let count = 0;

// do {
//   let mark = Number(prompt("Please enter a mark"));

//   count++; // count = count + 1; count += 1;
//   sum += mark; // sum = sum + mark;
//   console.log(`${count}. ${mark}`);
//   console.log(`Total: ${sum}`);

//   another = prompt("Do you want to enter another mark? y/n");
// } while (another == "y");

// if (count > 0) {
//   let average = sum / count;
//   console.log(`Average: ${average.toFixed(2)}%`);
// } else {
//   console.log(`No marks entered, cannot calculate Average`);
// }

// console.log("Done");
