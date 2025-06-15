const once = require('./solution');

describe('once', () => {
    test('should call the function only once with sum', () => {
        const fn = jest.fn((a, b, c) => a + b + c);
        const onceFn = once(fn);

        expect(onceFn(1, 2, 3)).toBe(6);
        expect(onceFn(2, 3, 6)).toBeUndefined();
        expect(fn).toHaveBeenCalledTimes(1);
    });

    test('should call the function only once with product', () => {
        const fn = jest.fn((a, b, c) => a * b * c);
        const onceFn = once(fn);

        expect(onceFn(5, 7, 4)).toBe(140);
        expect(onceFn(2, 3, 6)).toBeUndefined();
        expect(onceFn(4, 6, 8)).toBeUndefined();
        expect(fn).toHaveBeenCalledTimes(1);
    });

    test('should work with no arguments', () => {
        const fn = jest.fn(() => 42);
        const onceFn = once(fn);

        expect(onceFn()).toBe(42);
        expect(onceFn()).toBeUndefined();
        expect(fn).toHaveBeenCalledTimes(1);
    });

    test('should work with multiple calls and different arguments', () => {
        const fn = jest.fn((...args) => args.join('-'));
        const onceFn = once(fn);

        expect(onceFn('a', 'b')).toBe('a-b');
        expect(onceFn('x', 'y')).toBeUndefined();
        expect(onceFn('1', '2', '3')).toBeUndefined();
        expect(fn).toHaveBeenCalledTimes(1);
    });

    test('should return undefined if called after first call, even with no arguments', () => {
        const fn = jest.fn(() => 'called');
        const onceFn = once(fn);

        expect(onceFn()).toBe('called');
        expect(onceFn()).toBeUndefined();
        expect(onceFn()).toBeUndefined();
        expect(fn).toHaveBeenCalledTimes(1);
    });
});
