const cancellable = require('./solution');

describe('cancellable', () => {
    let result;

    beforeEach(() => {
        result = [];
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');
        jest.spyOn(global, 'clearTimeout');
        jest.spyOn(global.performance, 'now').mockImplementation(() => 1000);
    });

    afterEach(() => {
        jest.useRealTimers();
        jest.restoreAllMocks();
    });

    test('Example 1: fn executes if not cancelled before t', () => {
        const fn = (x) => x * 5;
        const args = [2], t = 20, cancelTimeMs = 50;
        const start = Date.now();
        const log = (...argsArr) => {
            const diff = Math.floor(Date.now() - start);
            result.push({ "time": diff, "returned": fn(...argsArr) });
        };
        const cancel = cancellable(log, args, t);

        setTimeout(cancel, cancelTimeMs);

        jest.advanceTimersByTime(t); // 20ms
        // fn should be called
        expect(result.length).toBe(1);
        expect(result[0].returned).toBe(10);

        jest.advanceTimersByTime(cancelTimeMs - t); // 30ms more, total 50ms
        // cancel called, but after fn executed
        expect(result.length).toBe(1);
    });

    test('Example 2: fn does not execute if cancelled before t', () => {
        const fn = (x) => x ** 2;
        const args = [2], t = 100, cancelTimeMs = 50;
        const start = Date.now();
        const log = (...argsArr) => {
            const diff = Math.floor(Date.now() - start);
            result.push({ "time": diff, "returned": fn(...argsArr) });
        };
        const cancel = cancellable(log, args, t);

        setTimeout(cancel, cancelTimeMs);

        jest.advanceTimersByTime(cancelTimeMs); // 50ms, cancel called
        cancel();
        jest.advanceTimersByTime(t - cancelTimeMs); // 50ms more, total 100ms

        expect(result.length).toBe(0);
    });

    test('Example 3: fn executes if cancelled after t', () => {
        const fn = (x1, x2) => x1 * x2;
        const args = [2, 4], t = 30, cancelTimeMs = 100;
        const start = Date.now();
        const log = (...argsArr) => {
            const diff = Math.floor(Date.now() - start);
            result.push({ "time": diff, "returned": fn(...argsArr) });
        };
        const cancel = cancellable(log, args, t);

        setTimeout(cancel, cancelTimeMs);

        jest.advanceTimersByTime(t); // 30ms, fn should be called
        expect(result.length).toBe(1);
        expect(result[0].returned).toBe(8);

        jest.advanceTimersByTime(cancelTimeMs - t); // 70ms more, total 100ms
        // cancel called, but after fn executed
        expect(result.length).toBe(1);
    });

    test('fn executes exactly at t ms', () => {
        const fn = (x) => x + 1;
        const args = [41], t = 100, cancelTimeMs = 200;
        const start = Date.now();
        const log = (...argsArr) => {
            const diff = Math.floor(Date.now() - start);
            result.push({ "time": diff, "returned": fn(...argsArr) });
        };
        const cancel = cancellable(log, args, t);

        setTimeout(cancel, cancelTimeMs);

        jest.advanceTimersByTime(t); // 100ms
        expect(result.length).toBe(1);
        expect(result[0].returned).toBe(42);
    });

    test('fn does not execute if cancelled immediately', () => {
        const fn = (x) => x - 1;
        const args = [10], t = 100, cancelTimeMs = 0;
        const start = Date.now();
        const log = (...argsArr) => {
            const diff = Math.floor(Date.now() - start);
            result.push({ "time": diff, "returned": fn(...argsArr) });
        };
        const cancel = cancellable(log, args, t);

        setTimeout(cancel, cancelTimeMs);

        jest.advanceTimersByTime(cancelTimeMs); // 0ms, cancel called
        cancel();
        jest.advanceTimersByTime(t); // 100ms

        expect(result.length).toBe(0);
    });

    test('fn throws error but is only attempted once', () => {
        const fn = () => { throw new Error('fail'); };
        const args = [], t = 50;
        const log = (...argsArr) => {
            try {
                fn(...argsArr);
            } catch(e) {
                result.push(e.message);
            }
        };
        const cancel = cancellable(log, args, t);

        jest.advanceTimersByTime(t);
        expect(result.length).toBe(1);
        expect(result[0]).toBe('fail');

        jest.advanceTimersByTime(100);
        // still only one attempt
        expect(result.length).toBe(1);
    });

    test('multiple calls to cancel() do not affect behavior', () => {
        const fn = (x) => x * 2;
        const args = [5], t = 40;
        const log = (...argsArr) => {
            result.push(fn(...argsArr));
        };
        const cancel = cancellable(log, args, t);

        cancel();
        cancel();
        cancel();

        jest.advanceTimersByTime(t);
        expect(result.length).toBe(0);
    });

    test('canceling after t has no effect', () => {
        const fn = (x) => x + 10;
        const args = [7], t = 30, cancelTimeMs = 50;
        const log = (...argsArr) => {
            result.push(fn(...argsArr));
        };
        const cancel = cancellable(log, args, t);

        jest.advanceTimersByTime(t);
        expect(result.length).toBe(1);
        expect(result[0]).toBe(17);

        cancel();

        jest.advanceTimersByTime(20);
        expect(result.length).toBe(1);
    });
});