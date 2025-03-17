const readlineSync = require("readline-sync");

function doThing(userInput){
    let numArray = userInput.split("");
    let newNum = "";

    for (let i = numArray.length-1; i >= 0; i--){
        newNum += numArray[i];
    }

    return parseInt(newNum);
}

while (true){
    let input = readlineSync.question("Enter: ");
    console.log(doThing(input));
}