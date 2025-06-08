const mapFn = require('./solution');

test('Example 1: plusone', () => {
    const arr = [1, 2, 3];
    function plusone(n) { return n + 1; }
    expect(mapFn(arr, plusone)).toEqual([2, 3, 4]);
});

test('Example 2: plusI', () => {
    const arr = [1, 2, 3];
    function plusI(n, i) { return n + i; }
    expect(mapFn(arr, plusI)).toEqual([1, 3, 5]);
});

test('Example 3: constant', () => {
    const arr = [10, 20, 30];
    function constant() { return 42; }
    expect(mapFn(arr, constant)).toEqual([42, 42, 42]);
});

test('Empty array returns empty array', () => {
    const arr = [];
    function fn(n) { return n * 2; }
    expect(mapFn(arr, fn)).toEqual([]);
});

test('Negative numbers', () => {
    const arr = [-1, -2, -3];
    function abs(n) { return Math.abs(n); }
    expect(mapFn(arr, abs)).toEqual([1, 2, 3]);
});

test('Large numbers', () => {
    const arr = [1e9, -1e9];
    function identity(n) { return n; }
    expect(mapFn(arr, identity)).toEqual([1e9, -1e9]);
});
