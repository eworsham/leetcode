const twoSum = require('./solution');

test('Example 1: [2,7,11,15], target 9', () => {
    const result = twoSum([2,7,11,15], 9);
    expect(result.sort()).toEqual([0,1].sort());
});

test('Example 2: [3,2,4], target 6', () => {
    const result = twoSum([3,2,4], 6);
    expect(result.sort()).toEqual([1,2].sort());
});

test('Example 3: [3,3], target 6', () => {
    const result = twoSum([3,3], 6);
    expect(result.sort()).toEqual([0,1].sort());
});

test('Negative numbers: [-1,-2,-3,-4,-5], target -8', () => {
    const result = twoSum([-1,-2,-3,-4,-5], -8);
    expect(result.sort()).toEqual([2,4].sort());
});

test('Large numbers: [1000000000, 2, 7, 999999993], target 1000000002', () => {
    const result = twoSum([1000000000, 2, 7, 999999993], 1000000002);
    expect(result.sort()).toEqual([0,1].sort());
});
