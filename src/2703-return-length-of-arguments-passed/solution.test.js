const argumentsLength = require('./solution');
test('returns 1 when one argument is passed', () => {
    expect(argumentsLength(5)).toBe(1);
});

test('returns 3 when three arguments are passed', () => {
    expect(argumentsLength({}, null, "3")).toBe(3);
});

test('returns 0 when no arguments are passed', () => {
    expect(argumentsLength()).toBe(0);
});

test('returns correct length for mixed types', () => {
    expect(argumentsLength(1, "a", true, null, [1,2], {x:1})).toBe(6);
});

test('returns 100 when 100 arguments are passed', () => {
    const args = Array(100).fill(0);
    expect(argumentsLength(...args)).toBe(100);
});
