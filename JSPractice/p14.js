function doThing(userInput){
    // JS passes objects like arrays by reference, not copying.
    let newArry = userInput.slice();

    newArry[0] = userInput[userInput.length - 1];
    newArry[newArry.length - 1] = userInput[0];

    console.log(userInput);

    return newArry;
}

input = [1, 2, 3, 4, 5];

console.log(doThing(input));
