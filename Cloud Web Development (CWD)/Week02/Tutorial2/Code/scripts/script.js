function addDisplay(input) {
  //   //   let display = document.getElementById("display").value;
  //   //   console.log(display);
  //   let num1 = 10;
  //   let num2 = 5;
  //   //   num2 = num1 + num2;
  //   num2 += num1;
  //   console.log(num2);
  //   console.log(input);

  document.getElementById("display").value += input;
}

function clearDisplay() {
  //   console.log("clearDisplay triggered");
  document.getElementById("display").value = "";
}

function calculate() {
  let result = document.getElementById("display").value;
  console.log(result);
  console.log(typeof result);

  //   let result2 = Number(result);
  //   console.log(result2);
  //   console.log(typeof result2);
  try {
    document.getElementById("display").value = eval(result);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
