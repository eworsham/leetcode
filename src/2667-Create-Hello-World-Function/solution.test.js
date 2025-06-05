const createHelloWorld = require('./solution');

test('The function returned by createHelloWorld should always return "Hello World"', () => { 
    const f = createHelloWorld();
    expect(f()).toEqual("Hello World");
})

test('The function returned by createHelloWorld should ignore any arguments passed to it', () => {
    const f = createHelloWorld();
    expect(f({}, null, 42)).toEqual("Hello World");
});