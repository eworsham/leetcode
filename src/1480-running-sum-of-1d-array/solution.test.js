const runningSum = require('./solution');

test('runningSum([1, 2, 3, 4]) should return [1, 3, 6, 10]', () => {
  expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
});

test('runningSum([1, 1, 1, 1, 1]) should return [1, 2, 3, 4, 5]', () => {
  expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
});

test('runningSum([3, 1, 2, 10, 1]) should return [3, 4, 6, 16, 17]', () => {
  expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
});
