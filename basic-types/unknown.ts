let notSure: unknown = 4;
notSure = 'maybe a string instead';
notSure = false;

console.log(notSure);

declare const maybe: unknown;
// const aNumber: number = maybe;