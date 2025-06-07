const createCounter = require('./solution');

describe('createCounter', () => {
    test('Example 1: init = 5, calls = ["increment","reset","decrement"]', () => {
        const counter = createCounter(5);
        expect(counter.increment()).toBe(6);
        expect(counter.reset()).toBe(5);
        expect(counter.decrement()).toBe(4);
    });

    test('Example 2: init = 0, calls = ["increment","increment","decrement","reset","reset"]', () => {
        const counter = createCounter(0);
        expect(counter.increment()).toBe(1);
        expect(counter.increment()).toBe(2);
        expect(counter.decrement()).toBe(1);
        expect(counter.reset()).toBe(0);
        expect(counter.reset()).toBe(0);
    });

    test('Multiple increments and decrements', () => {
        const counter = createCounter(10);
        expect(counter.increment()).toBe(11);
        expect(counter.increment()).toBe(12);
        expect(counter.decrement()).toBe(11);
        expect(counter.decrement()).toBe(10);
        expect(counter.decrement()).toBe(9);
        expect(counter.reset()).toBe(10);
        expect(counter.decrement()).toBe(9);
    });

    test('Reset after several operations', () => {
        const counter = createCounter(3);
        expect(counter.decrement()).toBe(2);
        expect(counter.decrement()).toBe(1);
        expect(counter.increment()).toBe(2);
        expect(counter.reset()).toBe(3);
        expect(counter.increment()).toBe(4);
    });

    test('No operations returns nothing', () => {
        const counter = createCounter(7);
        // No calls, nothing to assert
        expect(typeof counter.increment).toBe('function');
        expect(typeof counter.decrement).toBe('function');
        expect(typeof counter.reset).toBe('function');
    });
});
