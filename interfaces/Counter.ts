interface Counter {
    (start: number): string;
    interval: number;
    reset(): void
}

function getCounter(): Counter {
    let counter = function (_start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
}

let count = getCounter();
count(10);
count.reset();
count.interval = 5.0;

console.log('Hybrid Types Interface');
console.log('count', count);