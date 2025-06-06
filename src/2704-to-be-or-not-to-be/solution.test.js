const expectFn = require('./solution');

test('Assertion toBe', () => {
  expectFn(5).toBe(5);
});

test('Error message toBe', () => {
    try {
        expectFn(5).toBe(6);
    } catch (e) {
        expect(e.message).toEqual('Not Equal');
    }
});

test('Assertion notToBe', () => {
    expectFn(5).notToBe(6);
});

test('Error message notToBe', () => {
    try {
        expectFn(5).notToBe(5);
    } catch (e) {
        expect(e.message).toEqual('Equal');
    }
});