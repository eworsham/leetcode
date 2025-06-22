const addTwoPromises = require('./solution');

describe('addTwoPromises', () => {
    it('should resolve with the sum of two resolved promises (2 + 2)', async () => {
        const result = await addTwoPromises(Promise.resolve(2), Promise.resolve(2));
        expect(result).toBe(4);
    });

    it('should resolve with the sum when promises resolve after different timeouts (2 + 5)', async () => {
        const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
        const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
        const result = await addTwoPromises(promise1, promise2);
        expect(result).toBe(7);
    });

    it('should resolve with the sum when one promise resolves to a negative number (10 + -12)', async () => {
        const promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50));
        const promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30));
        const result = await addTwoPromises(promise1, promise2);
        expect(result).toBe(-2);
    });

    it('should resolve with the sum when both promises resolve to zero', async () => {
        const result = await addTwoPromises(Promise.resolve(0), Promise.resolve(0));
        expect(result).toBe(0);
    });

    it('should resolve with the sum when both promises resolve to negative numbers', async () => {
        const result = await addTwoPromises(Promise.resolve(-3), Promise.resolve(-7));
        expect(result).toBe(-10);
    });
});