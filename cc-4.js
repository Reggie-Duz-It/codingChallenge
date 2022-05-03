//EASY: Write a function that would allow you to do this:

var run = function (running) {
    var running = "running";
    return `Today's excercise: ${running}`
}

var swim = function (swimming) {
    var swimming = "swimming";
    return `Today's excercise: ${swimming}`
}

console.log(run());
console.log(swim());


//MEDIUM: Write a function that would allow you to do this:

// var sharePizza = function cutPizzaSlices(num){
//  var num = 8;
//  return num / 2;

// }

var sharePizza = function cutPizzaSlices(slice, num) {
    var num = 8;
    var result = num / slice;
    return `Each person gets ${result.toFixed(2)} slices of Pizza`
}



console.log(sharePizza(2));
