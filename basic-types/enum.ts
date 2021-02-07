enum Color {
    Red,
    Green,
    Blue,
}

let c: Color = Color.Green;

console.log('Enum Color');
console.log(c);

enum Color {
    Red2 = 1,
    Green2,
    Blue2,
}

enum Color {
    Red3 = 1,
    Green3 = 2,
    Blue3= 4,
}
let colorName: string = Color[2];
console.log(colorName);