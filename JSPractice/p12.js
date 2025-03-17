const readlineSync = require("readline-sync");

function doThing(userInput){
    let letters = new Map();

    for (char of userInput){
        if (letters.has(char)){
            letters.set(char, letters.get(char)+1); 
        }
        else {
            letters.set(char, 1); 
        }
    }

    for (letter of letters){
        if (letter[1] == 1){
            return letter[0];
        }
    }

    return "No Single Occurrence Found!";
}

while (true){
    let input = readlineSync.question("Enter: ");
    console.log(doThing(input));
}