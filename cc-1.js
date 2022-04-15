const prompt = require('prompt-sync') ({signit: true});

var balance = 100;
var newBalance = null;

//Question1

var bankAction = prompt("Would you like to Deposit or Withdraw?");

if(bankAction === "deposit") {
    var howMuch = prompt("How much would you like to deposit?");
    if (howMuch === howMuch) {
        parseFloat(howMuch);
        var newBalance = parseFloat(howMuch) + parseFloat(balance);
        if (newBalance > 0) {
            console.log("You got mooonnnneeey!!!");
        }
        else if (newBalance < 0) {
            console.log("Low funds!");
        }
    }
} else if (bankAction === "withdraw") {
    var howMuch = prompt("How much would you like to withdraw?");
    if (howMuch === howMuch) {
        parseFloat(howMuch);
        var newBalance = parseFloat(balance) - parseFloat(howMuch);
        if (newBalance > 0) {
            console.log("You got moooonnnneeeyy!!!");
        }
        else if (newBalance < 0) {
            console.log("Low funds!");
        }
    }
}