const filterFn = require('./solution');

describe('filter', () => {
    test('Example 1: filters values greater than 10', () => {
        const arr = [0, 10, 20, 30];
        function greaterThan10(n) { return n > 10; }
        expect(filterFn(arr, greaterThan10)).toEqual([20, 30]);
    });

    test('Example 2: filters by first index', () => {
        const arr = [1, 2, 3];
        function firstIndex(n, i) { return i === 0; }
        expect(filterFn(arr, firstIndex)).toEqual([1]);
    });

    test('Example 3: filters out falsey values', () => {
        const arr = [-2, -1, 0, 1, 2];
        function plusOne(n) { return n + 1; }
        expect(filterFn(arr, plusOne)).toEqual([-2, 0, 1, 2]);
    });

    test('Empty array returns empty array', () => {
        expect(filterFn([], n => n > 0)).toEqual([]);
    });

    test('All elements filtered out', () => {
        const arr = [1, 2, 3];
        function alwaysFalse() { return false; }
        expect(filterFn(arr, alwaysFalse)).toEqual([]);
    });

    test('All elements kept', () => {
        const arr = [1, 2, 3];
        function alwaysTrue() { return true; }
        expect(filterFn(arr, alwaysTrue)).toEqual([1, 2, 3]);
    });

    test('Handles negative numbers', () => {
        const arr = [-109, 0, 109];
        function isNegative(n) { return n < 0; }
        expect(filterFn(arr, isNegative)).toEqual([-109]);
    });

    test('Handles large arrays', () => {
        const arr = Array.from({ length: 1000 }, (_, i) => i);
        function even(n) { return n % 2 === 0; }
        expect(filterFn(arr, even).length).toBe(500);
    });
});
