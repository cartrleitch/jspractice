l1 = [1, 2, 3]
l2 = [4, 5, 6]

function doThing(list1, list2){
    let newList = [];
    
    for (let i = 0; i < list1.length; i++){
        newList.push(list1[i])
        newList.push(list2[i])
    }

    return newList;
}

console.log(doThing(l1, l2));
