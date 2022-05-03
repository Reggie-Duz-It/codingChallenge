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

var sharePizza = function cutPizzaSlices(slice, num) {
    var num = 8;
    var result = num / slice;
    return `Each person gets ${result.toFixed(2)} slices of Pizza`
}



console.log(sharePizza(2));


//Hard: 

var Person = (function() {
    var private = new WeakMap();

    function Person(ssn, name) {
     this.name = name;
      Person.prototype.getName = function() {
      return `${this.name}`;
     }
        
        var privateProperties = {
            ssn: ssn
        };
        private.set(this, privateProperties);
    }

    Person.prototype.getSSN = function() {
        return private.get(this).ssn;
    };


    return Person;
}());

var reggie = new Person(485297730, "Reginald");
console.log('Person Name: ' + reggie.getName() + ' Person SSN: ' + Object.getOwnPropertyNames(reggie) );
//Couldn't get the SSN to stop displaying name, I know it had something to with the Object.getOwnPropertyNames
