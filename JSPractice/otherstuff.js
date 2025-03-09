const readlineSync = require("readline-sync");

function doThing(userInput){
    console.log(userInput)
}

while (true){
    let input = readlineSync.question("Enter: ");
    doThing(input);
}