const compose = require('./solution');
test('Example 1: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4', () => {
    const functions = [
        x => x + 1,
        x => x * x,
        x => 2 * x
    ];
    const fn = compose(functions);
    expect(fn(4)).toBe(65);
});

test('Example 2: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1', () => {
    const functions = [
        x => 10 * x,
        x => 10 * x,
        x => 10 * x
    ];
    const fn = compose(functions);
    expect(fn(1)).toBe(1000);
});

test('Example 3: functions = [], x = 42', () => {
    const functions = [];
    const fn = compose(functions);
    expect(fn(42)).toBe(42);
});

test('Edge case: functions = [x => x - 1], x = -1000', () => {
    const functions = [x => x - 1];
    const fn = compose(functions);
    expect(fn(-1000)).toBe(-1001);
});

test('Edge case: functions = [], x = 0', () => {
    const functions = [];
    const fn = compose(functions);
    expect(fn(0)).toBe(0);
});
