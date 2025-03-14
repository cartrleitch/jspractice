const readlineSync = require("readline-sync");

function doThing(userInput){
    let vowelless = "";
    const vowels = ['a', 'e', 'i', 'o', 'u']

    for (character of userInput){
        if (!vowels.includes(character)){
            vowelless += character;
        }
    }
    return vowelless;
}

while (true){
    let input = readlineSync.question("Enter: ");
    console.log(doThing(input));
}