function doThing(userInput){
    return `${Math.max(...userInput)} - ${Math.min(...userInput)} = ${(Math.max(...userInput) - Math.min(...userInput))}`;
}

const input = [10, 3, 5, 20, 50, 2, 4, 9];
console.log(doThing(input));
