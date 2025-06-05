const createCounter = require('./solution');

describe('Start at 10, 3 calls', () => {
    test('Example 1: n = 10, 3 calls', () => {
        const n = 10;
        const counter = createCounter(n);
        expect(counter()).toBe(10);
        expect(counter()).toBe(11);
        expect(counter()).toBe(12);
    });

    test('Start at -2, 5 calls', () => {
        const n = -2;
        const counter = createCounter(n);
        expect(counter()).toBe(-2);
        expect(counter()).toBe(-1);
        expect(counter()).toBe(0);
        expect(counter()).toBe(1);
        expect(counter()).toBe(2);
    });
});