myList = [1, 2, 3, 4, 5]

function doThing(list){
    let cumultativeList = [];

    for (let i = 0; i < list.length; i++){
        cumultativeList.push(myList.slice(0, i+1).reduce((partialSum, a) => partialSum + a, 0));
    }

    return cumultativeList;
}

console.log(doThing(myList));
