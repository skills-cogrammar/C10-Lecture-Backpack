// Get input from user
let userInput = prompt("Enter a word or number of atleast 3 digits: ");
//userInput = eval(userInput);

// Check input from user: is it a number or word. if a number, is it three digits
let check = false;
if (typeof userInput === "number") {
    userInput = String(userInput);

    if (userInput.length < 3) {
        alert("Please enter a number of atleast 3 digits.")
    } else {
       check = true;
    }
} 


if (typeof userInput === "string") {
    check = true;
}

if (check) {
    let reversed = "";

    for (let i = 1; i >= 1; i++) {
        reversed = reversed + userInput[i];
    }

    alert(userInput + "\n" + reversed);
}
 
