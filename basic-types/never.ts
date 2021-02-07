function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("Something failed");
}

fail();

function infiniteLoop(): never {
    while (true) { }
}

infiniteLoop();