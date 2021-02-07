interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

console.log('Indexable Types');
console.log(myArray[0]);

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

interface NotOkay {
    // [x: number]: Animal;
    [x: string]: Dog;
}