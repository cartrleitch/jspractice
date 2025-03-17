function doThing(userInput){
    const sortedArray = userInput.sort(function(a, b){return a.length - b.length;});

    return sortedArray;
}

input = ["hi", "dumbledore", "alpha", "torrent", "antidisestablishmentarianism", "am"];

console.log(doThing(input));
