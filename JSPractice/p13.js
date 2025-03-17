function doThing(userInput){
    let cumulativeSum = 0;
    for (num of userInput){
        if (num % 2 != 0){
            cumulativeSum += num;
        }
    }

    return cumulativeSum;
}

let input = [1, 2, 3, 4, 5, 9, 100];

console.log(doThing(input));
