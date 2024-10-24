// Closures
// Create the outer function which initialises the room with a code
// Store the code in a local variable

function startEscapeRoom (secretCode) {
    let myCode = secretCode;

    // Return an inner function which checks if the guesses are correct
    function guessTheCode (guess) {
        if (guess == myCode) {
            alert("Well Done! You guessed the code! You are free to go :)");
            return true;
        } else {
            alert("Incorrect code! Please try again :(");
            return false;
        }
    }

    return guessTheCode;
}

// Call the functions and prompt users
let guesser = startEscapeRoom("2289");
let guessed = false;

while (!guessed) {
    guessed = guesser(prompt("What do you think the code is?"));
}
