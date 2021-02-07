interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any; // com essa configuração podemos definir novas propriedades
}

function createSquare(config: SquareConfig): { color: string, area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

console.log('Interface SquareConfig optional properties with ?')

let mySquare = createSquare({color: "black"});

console.log(mySquare);