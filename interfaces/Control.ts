/*
 * Copyright (c) 2021. Maycon Augusto Ribeiro.
 */

console.log('Interfaces extending Classes');

class Control {
    private _state: any;

    get state(): any {
        return this._state;
    }

    set state(value: any) {
        this._state = value;
    }
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select(): void {}
}

class TextBox extends Control {
    select() {}
}

// class ImageControl implements SelectableControl {
//     private _state: any;
//
//     select(): void {
//
//     }
// }