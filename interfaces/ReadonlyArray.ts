console.log('ReadonlyArray not re-assign values after create');
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
console.log(ro);
// ro[2] = 12;