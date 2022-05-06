const prompt = require('prompt-sync') ({signit: true});
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

class pii {
    #name;
    #ssn;
    constructor(name, ssn) {
        this.#name = name;
        this.#ssn = ssn;

    }

    getName() {
    return this.#name;
    }
}

const Jerry = new pii("Jerry", 254382004);
console.log(Jerry.getName());

//Very Hard

class Person {
    constructor (pName, pJob, pAge) {
     this.pName = pName;
     this.pJob = pJob;
     this.pAge = pAge;
    }

    excercise() {
        console.log("Runninig is fun...said no one ever!");
    }

    fetchJob() {
        console.log(`${this.pName} is a ${this.pJob}`);
    }
}

class Programmer extends Person {
    busy = true;
    languageArr = [];
    constructor (pName, pJob, pAge, languages){
        super(pName, pJob, pAge);
        this.languages = languages;
        
        
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy === true){
            console.log(`${this.pName} is cannot accept new task right now!`);
        }
        else if(this.busy === false) {
            console.log(`${this.pName} would love to accept a new task.`);
        }
    }

     learnLanguages() {
         this.languages = prompt("What language did you learn today?");
         this.languageArr.push(this.languages);
        return `Language learned!`;
        
     }
    listLanguages(){
         for (let i = 0; i < this.languageArr.length; i++){
          console.log(this.languageArr[i]);
         }
        
    }

}
const Terry = new Programmer("Terry", "Web Developer", 27,);
Terry.fetchJob();
console.log(Terry.busy);
Terry.completeTask();
console.log(Terry.busy);
console.log(Terry.busy);
Terry.acceptNewTask();
console.log(Terry.busy);
Terry.offerNewTask();
Terry.completeTask();
Terry.offerNewTask();
console.log(Terry.learnLanguages());
console.log(Terry.learnLanguages());
console.log(Terry.learnLanguages());
console.log(Terry.learnLanguages());
Terry.listLanguages();



