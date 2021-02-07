// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date): void;
// }
//
// class Clock implements ClockInterface {
//     currentTime: Date = new Date();
//
//     setTime(d: Date): void {
//         this.currentTime = d;
//     }
//
//     // @ts-ignore
//     constructor(h: number, m: number) {}
// }

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(public h: number, public m: number) {}
    tick(): void {
        console.log("beep beep")
    }
}

class AnalogClock implements ClockInterface {
    constructor(public h: number, public m: number) {}
    tick(): void {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32)

digital.tick();
analog.tick();

const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(public h: number, public m: number) {}
    tick() {
        console.log("beep beep");
    }
};

let clock = new Clock(12, 17);
clock.tick();