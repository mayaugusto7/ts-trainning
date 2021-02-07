interface Point {
    readonly x: number;
    readonly y: number;
}

console.log('Readonly properties --readonly-- nao podem ser modificadas depois de inicializadas');

let p1:Point = { x: 10, y: 20};
console.log('p1', p1);
// p1.x = 5;