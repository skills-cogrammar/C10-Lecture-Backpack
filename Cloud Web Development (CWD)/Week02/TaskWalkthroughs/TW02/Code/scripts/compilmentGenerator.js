let userName = prompt("What is your name? ");
let animal = prompt("What is your favourite animal? ");
let age = prompt("How old are you? ");

let compliment = `Hi ${userName}. Your energy is best encapsulated with the nature of a ${animal} :). `;

if (age >= 30) {
    compliment = compliment + `You are ${age} years old? But you don't look a day over ${age-10}!`;
} else {
    compliment = compliment + `${age} years old is a wonderful age to be! Remember to live your life to the fullest!`;
}

alert(compliment);