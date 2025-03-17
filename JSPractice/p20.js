function doThing(l1, l2){
    let l1Map = new Map();
    let l2Map = new Map();

    if (l1.length == l2.length){
        for (let i = 0; i < l1.length; i++){
            if (i + 1 < l1.length){
                l1Map.set(l1[i], l1[i+1]);
                l2Map.set(l2[i], l2[i+1]);
            }
            else{
                l1Map.set(l1[i], l1[0]);
                l2Map.set(l2[i], l2[0]);
            }
        }
        
        let truthValue = 0;
        for (element of l1){
            if (l1Map.get(element) == l2Map.get(element)){
                truthValue += 1;
            }
        }
        return truthValue == l1.length;
    }
    return "Unequal length array!"
}

input1 = [1, 2, 3, 4];
input2 = [3, 4, 1, 2];
input3 = [3, 4, 2, 1];


console.log(doThing(input1, input2));
