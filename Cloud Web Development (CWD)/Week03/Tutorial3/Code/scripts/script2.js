function calcAvg(exams) {
  let sum = 0;
  for (let i = 1; i <= exams; i++) {
    let mark = Number(prompt(`Please enter mark ${i}`));
    sum += mark; //sum = sum + mark
  }
  // i++     i = i + 1    i += 1
  let average = sum / exams;

  return average;

  //   let test = "Hi";
  //   console.log(test);
}

function getStudent() {
  let userName = prompt("Please enter your name");
  let num = Number(prompt("How many exams did they attempt"));

  let avg = calcAvg(num);

  console.log(`Student: ${userName} Average: ${avg.toFixed(2)}%`);
}

getStudent();
