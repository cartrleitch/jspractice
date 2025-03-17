function doThing(userInput){
    for (let i = 0; i < userInput.length; i++){
        let newElement = "";
        if (userInput[i] % 3 == 0){
            newElement = "Foo"
        }
        if (userInput[i] % 5 == 0){
            newElement += "Bar"
        }
        if (newElement != ""){
            userInput[i] = newElement;
        }
    }

    return userInput;
}

input = [1,3,5,15,20];

console.log(doThing(input));
