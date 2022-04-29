var names = ["Bob", "John", "Sam", "Ben"];
var num = [2, 4, 6, 8];
var booli = [2 > 4, 8 > 4, 1 == 1, 9 < 1];

const prompt = require('prompt-sync') ({signit: true});
var input = prompt('Add in a piece of data');
var inputNum = Number(prompt('Add in a piece of data'));
var inputBool = Boolean(prompt('Add in a piece of data'));



// function pushTo(a, b, c) {
// if (typeof a == "string") {
//     names.push(a);
// }


// if (typeof b == "number") {
//     num.push(b);
// }

// if (typeof c === "boolean") {
//     booli.push(c);
// }
// console.log(names);
// console.log(num);
// console.log(booli);
// }

function pushTo(arr ,b){
    if (typeof b == typeof arr[0]) {
        arr.push(b);
    }
    return arr;
}

console.log(pushTo([],"12"));