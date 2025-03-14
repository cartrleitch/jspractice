function doThing(userInput){
    let max = Math.max(...userInput);
    let min = Math.min(...userInput);
    return `${max} - ${min} = ${max - min}`;
}

const input = [10, 3, 5, 20, 50, 2, 4, 9];
console.log(doThing(input));
