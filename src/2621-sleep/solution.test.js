const sleepFn = require('./solution');
const sleep = require('./solution');

describe('sleep', () => {
    test('resolves after approximately 100ms', async () => {
        const millis = 100;
        const t = Date.now();
        await sleep(millis);
        const elapsed = Date.now() - t;
        expect(elapsed).toBeGreaterThanOrEqual(millis - 10);
        expect(elapsed).toBeLessThan(millis + 50);
    });

    test('resolves after approximately 200ms', async () => {
        const millis = 200;
        const t = Date.now();
        await sleep(millis);
        const elapsed = Date.now() - t;
        expect(elapsed).toBeGreaterThanOrEqual(millis - 10);
        expect(elapsed).toBeLessThan(millis + 50);
    });

    test('resolves after approximately 1ms', async () => {
        const millis = 1;
        const t = Date.now();
        await sleep(millis);
        const elapsed = Date.now() - t;
        expect(elapsed).toBeGreaterThanOrEqual(0);
        expect(elapsed).toBeLessThan(millis + 50);
    });

    test('resolves after approximately 1000ms', async () => {
        const millis = 1000;
        const t = Date.now();
        await sleep(millis);
        const elapsed = Date.now() - t;
        expect(elapsed).toBeGreaterThanOrEqual(millis - 10);
        expect(elapsed).toBeLessThan(millis + 100);
    });

    test('returns a Promise', () => {
        const result = sleep(100);
        expect(result).toBeInstanceOf(Promise);
    });
});