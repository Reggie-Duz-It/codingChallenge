//1 Convert the following function into an arrow function named "arrowMyFunction".
let arrowMyFunction = (num1, num2) => {
    return num1 + num2;
}

//2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
let arrowAdd100 = money => money + 100;

//3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string.
let letterCount = (string, char) => {
var re = new RegExp (char, "gi");
return string.match(re).length;
}

var str = "Reggie Duz It, Do It Reggie!";
console.log(str);
console.log(`The R letter appears ${letterCount(str,"R")} times`);