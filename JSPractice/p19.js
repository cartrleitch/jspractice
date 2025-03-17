function doThing(l1, l2){
    let newArray = [];

    for (element of l1){
        if (l2.includes(element)){
            newArray.push(element);
        }
    }
    return newArray;
}

input1 = [1, 2, 3];
input2 = [2, 3, 4];

console.log(doThing(input1, input2));
