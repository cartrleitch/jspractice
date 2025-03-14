function doThing(userInput){
    return new Set(userInput).size;
}

const list = [1,1,2,2,3,3,4,5,5,5,5,6,7,8,10,10,10,10]
console.log(doThing(list));
