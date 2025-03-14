const readlineSync = require("readline-sync");

function doThing(userInput){
    let newString = "";

    for (let i = 0; i < userInput.length; i++){
        if (i % 2 == 0){
            newString += userInput[i].toUpperCase();
        }
        else {
            newString += userInput[i].toLowerCase();
        }
    }

    return newString;
}

while (true){
    let input = readlineSync.question("Enter: ");
    console.log(doThing(input));
}