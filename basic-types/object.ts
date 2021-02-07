declare function create(o: object | null): void;

console.log('Type object represents non-primitive types')
create({prop: 0});

console.log(create({hello: 'Maycon'}));