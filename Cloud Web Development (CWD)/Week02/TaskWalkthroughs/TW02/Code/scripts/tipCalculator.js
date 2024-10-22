const { round } = require("mathjs");

let total = prompt("What was the total of the bill?");
let numPeople = prompt("How many people are splitting the bill?");
let tipPercent = prompt("What percentage of the bill would you like to tip? (Just enter a number)");

let subTotal = total/numPeople;
let tipAmount = (subTotal/100)*tipPercent;

let result = subTotal + tipAmount;
result = round(result);

alert(`Each person needs to pay £${result}.`);
