const readlineSync = require("readline-sync");

function doThing(userInput, n){
    let newString = "";
    for (character of userInput){
        for (let i = 0; i < n; i++){
            newString += character;
        }
    }

    return newString;
}

while (true){
    let input = readlineSync.question("Enter string: ");
    let repetitions = readlineSync.question("Repetitions: ");

    console.log(doThing(input, repetitions));
}