function doThing(userInput, n){
    let newArray = [];

    for (let i = 0; i < userInput.length; i+=n){
        newArray.push(...userInput.slice(i, i+n).reverse());
    }

    return newArray;
}

const input = [1, 2, 3, 4, 5, 6];
const groupSize = 4;
console.log(doThing(input, groupSize));
