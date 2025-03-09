const readlineSync = require("readline-sync");

function doThing(userInput){
    return userInput;
}

while (true){
    let input = readlineSync.question("Enter: ");
    console.log(doThing(input));
}