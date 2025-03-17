const readlineSync = require("readline-sync");

function doThing(userInput){
    let newWord = "";
    let tempWord = "";
    let wordArr = userInput.split(" ");

    for (word of wordArr){
        tempWord = word.toLowerCase().split("");
        tempWord[0] = tempWord[0].toUpperCase();
        tempWord[tempWord.length-1] = tempWord[tempWord.length-1].toUpperCase()
        newWord += tempWord.join("") + " ";
    }

    return newWord;
}

while (true){
    let input = readlineSync.question("Enter: ");
    console.log(doThing(input));
}