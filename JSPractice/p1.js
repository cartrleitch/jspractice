const readlineSync = require("readline-sync");

function doThing(userInput){
    let newWords = "";
    let wordList = userInput.split(" ");
    let temp_word = "";
    for (let wordIndex = wordList.length - 1; wordIndex >= 0; wordIndex-- ){
        for (characterIndex in wordList[wordIndex]){
            if (wordList[wordIndex][characterIndex].toUpperCase() == wordList[wordIndex][characterIndex]){
                temp_word += wordList[wordIndex][characterIndex].toLowerCase();
            }
            else {
                temp_word += wordList[wordIndex][characterIndex].toUpperCase();
            }
        }
        newWords += temp_word + " ";
        temp_word = "";
    }
    
    return newWords;
}

while (true){
    let input = readlineSync.question("Enter: ");
    console.log(doThing(input));
}