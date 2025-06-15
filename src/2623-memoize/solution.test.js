const memoize = require('./solution');

describe('memoize', () => {
    test('Example 1: sum', () => {
        let callCount = 0;
        const sum = (a, b) => {
            callCount++;
            return a + b;
        };
        const memoizedSum = memoize(sum);

        expect(memoizedSum(2, 2)).toBe(4); // call
        expect(memoizedSum(2, 2)).toBe(4); // call (cached)
        expect(callCount).toBe(1);         // getCallCount
        expect(memoizedSum(1, 2)).toBe(3); // call
        expect(callCount).toBe(2);         // getCallCount
    });

    test('Example 2: factorial', () => {
        let callCount = 0;
        let isTopLevel = false;
        function factorial(n) {
            if (!isTopLevel) {
                callCount++;
                isTopLevel = true;
                const result = _factorial(n);
                isTopLevel = false;
                return result;
            }
            if (n <= 1) return 1;
            return n * _factorial(n - 1);
        }
        function _factorial(n) {
            if (n <= 1) return 1;
            return n * _factorial(n - 1);
        }
        const memoFactorial = memoize(factorial);

        expect(memoFactorial(2)).toBe(2); // call
        expect(memoFactorial(3)).toBe(6); // call
        expect(memoFactorial(2)).toBe(2); // call (cached)
        expect(callCount).toBe(2);        // getCallCount
        expect(memoFactorial(3)).toBe(6); // call (cached)
        expect(callCount).toBe(2);        // getCallCount
    });

    test('Example 3: fib', () => {
        let callCount = 0;
        let isTopLevel = false;
        let memoFib;
        function fib(n) {
            if (!isTopLevel) {
                callCount++;
                isTopLevel = true;
                const result = _fib(n);
                isTopLevel = false;
                return result;
            }
            if (n <= 1) return n;
            return memoFib(n - 1) + memoFib(n - 2);
        }
        function _fib(n) {
            if (n <= 1) return n;
            return memoFib(n - 1) + memoFib(n - 2);
        }
        memoFib = memoize(fib);

        expect(memoFib(5)).toBe(5);
        expect(callCount).toBe(1);
    });

    test('Handles different arguments', () => {
        let callCount = 0;
        const fn = (a, b) => {
            callCount++;
            return a * b;
        };
        const memoizedFn = memoize(fn);

        expect(memoizedFn(2, 3)).toBe(6);
        expect(memoizedFn(2, 4)).toBe(8);
        expect(memoizedFn(2, 3)).toBe(6); // cached
        expect(callCount).toBe(2);
    });

    test('Handles zero and falsy values', () => {
        let callCount = 0;
        const fn = (a, b) => {
            callCount++;
            return a - b;
        };
        const memoizedFn = memoize(fn);

        expect(memoizedFn(0, 0)).toBe(0);
        expect(memoizedFn(0, 0)).toBe(0); // cached
        expect(memoizedFn(0, 1)).toBe(-1);
        expect(callCount).toBe(2);
    });
});