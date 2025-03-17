function doThing(userInput){
    userInput.sort((a, b) => a - b)

    return userInput[1];
}

input = [3, 1, 4, 5];

console.log(doThing(input));
