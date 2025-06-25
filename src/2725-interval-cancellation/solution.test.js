const cancellable = require('./solution');

describe('cancellable', () => {
    let result;
    let originalNow;

    beforeEach(() => {
        result = [];
        jest.useFakeTimers();
        // Mock performance.now() to simulate time passage
        let now = 0;
        originalNow = global.performance.now;
        jest.spyOn(global.performance, 'now').mockImplementation(() => now);
        jest.spyOn(global, 'setInterval');
        jest.spyOn(global, 'clearInterval');
        jest.spyOn(global, 'setTimeout');
        jest.spyOn(global, 'clearTimeout');
        // Helper to advance both timers and performance.now
        global.__advanceTime = (ms) => {
            now += ms;
            jest.advanceTimersByTime(ms);
        };
    });

    afterEach(() => {
        jest.useRealTimers();
        jest.restoreAllMocks();
        if (originalNow) global.performance.now = originalNow;
    });

    test('Example 1: fn(x) = x * 2, args = [4], t = 35, cancel at 190ms', () => {
        const fn = (x) => x * 2;
        const args = [4], t = 35, cancelTimeMs = 190;
        const log = (...argsArr) => {
            const diff = Math.floor(global.performance.now());
            result.push({ "time": diff, "returned": fn(...argsArr) });
        };
        const cancel = cancellable(log, args, t);

        setTimeout(cancel, cancelTimeMs);

        // Simulate time passing
        for (let ms = 0; ms < cancelTimeMs; ms += t) {
            global.__advanceTime(t);
        }

        // Cancel at 190ms
        global.__advanceTime(cancelTimeMs - t * Math.floor((cancelTimeMs - 1) / t));
        cancel();

        expect(result).toEqual([
            { "time": 0, "returned": 8 },
            { "time": 35, "returned": 8 },
            { "time": 70, "returned": 8 },
            { "time": 105, "returned": 8 },
            { "time": 140, "returned": 8 },
            { "time": 175, "returned": 8 }
        ]);
    });

    test('Example 2: fn(x1, x2) = x1 * x2, args = [2, 5], t = 30, cancel at 165ms', () => {
        const fn = (x1, x2) => x1 * x2;
        const args = [2, 5], t = 30, cancelTimeMs = 165;
        const log = (...argsArr) => {
            const diff = Math.floor(global.performance.now());
            result.push({ "time": diff, "returned": fn(...argsArr) });
        };
        const cancel = cancellable(log, args, t);

        setTimeout(cancel, cancelTimeMs);

        // Simulate time passing
        for (let ms = 0; ms < cancelTimeMs; ms += t) {
            global.__advanceTime(t);
        }

        // Cancel at 165ms
        global.__advanceTime(cancelTimeMs - t * Math.floor((cancelTimeMs - 1) / t));
        cancel();

        expect(result).toEqual([
            { "time": 0, "returned": 10 },
            { "time": 30, "returned": 10 },
            { "time": 60, "returned": 10 },
            { "time": 90, "returned": 10 },
            { "time": 120, "returned": 10 },
            { "time": 150, "returned": 10 }
        ]);
    });

    test('Example 3: fn(x1, x2, x3) = x1 + x2 + x3, args = [5, 1, 3], t = 50, cancel at 180ms', () => {
        const fn = (x1, x2, x3) => x1 + x2 + x3;
        const args = [5, 1, 3], t = 50, cancelTimeMs = 180;
        const log = (...argsArr) => {
            const diff = Math.floor(global.performance.now());
            result.push({ "time": diff, "returned": fn(...argsArr) });
        };
        const cancel = cancellable(log, args, t);

        setTimeout(cancel, cancelTimeMs);

        // Simulate time passing
        for (let ms = 0; ms < cancelTimeMs; ms += t) {
            global.__advanceTime(t);
        }

        // Cancel at 180ms
        global.__advanceTime(cancelTimeMs - t * Math.floor((cancelTimeMs - 1) / t));
        cancel();

        expect(result).toEqual([
            { "time": 0, "returned": 9 },
            { "time": 50, "returned": 9 },
            { "time": 100, "returned": 9 },
            { "time": 150, "returned": 9 }
        ]);
    });
});