declare function getValue(key: string): any;

const str:string = getValue("myString");

console.log(str);

let looselyTyped: any = 4;

console.log('looselyTyped.ifItExists()');
console.log(looselyTyped.ifItExists());

console.log('looselyTyped.toFixed()');
console.log(looselyTyped.toFixed());

let strictlyTyped: unknown = 4;
console.log('strictlyTyped:.toFixed();');
// console.log(strictlyTyped.toFixed());