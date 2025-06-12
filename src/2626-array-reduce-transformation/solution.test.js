const reduceFn = require('./solution');
describe('reduceFn', () => {
    test('Example 1: sums all elements', () => {
        const nums = [1, 2, 3, 4];
        const fn = function sum(accum, curr) { return accum + curr; };
        const init = 0;
        expect(reduceFn(nums, fn, init)).toBe(10);
    });

    test('Example 2: sums with squares', () => {
        const nums = [1, 2, 3, 4];
        const fn = function sum(accum, curr) { return accum + curr * curr; };
        const init = 100;
        expect(reduceFn(nums, fn, init)).toBe(130);
    });

    test('Example 3: empty array returns init', () => {
        const nums = [];
        const fn = function sum(accum, curr) { return 0; };
        const init = 25;
        expect(reduceFn(nums, fn, init)).toBe(25);
    });

    test('Single element array', () => {
        const nums = [5];
        const fn = (accum, curr) => accum * curr;
        const init = 2;
        expect(reduceFn(nums, fn, init)).toBe(10);
    });

    test('All zeros', () => {
        const nums = [0, 0, 0];
        const fn = (accum, curr) => accum + curr;
        const init = 7;
        expect(reduceFn(nums, fn, init)).toBe(7);
    });

    test('Subtraction', () => {
        const nums = [10, 2, 1];
        const fn = (accum, curr) => accum - curr;
        const init = 20;
        expect(reduceFn(nums, fn, init)).toBe(7);
    });
});
