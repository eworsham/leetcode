const kthSmallestProduct = require('./solution');

test('Example 1: nums1 = [2,5], nums2 = [3,4], k = 2', () => {
    expect(kthSmallestProduct([2,5], [3,4], 2)).toBe(8);
});

test('Example 2: nums1 = [-4,-2,0,3], nums2 = [2,4], k = 6', () => {
    expect(kthSmallestProduct([-4,-2,0,3], [2,4], 6)).toBe(0);
});

test('Example 3: nums1 = [-2,-1,0,1,2], nums2 = [-3,-1,2,4,5], k = 3', () => {
    expect(kthSmallestProduct([-2,-1,0,1,2], [-3,-1,2,4,5], 3)).toBe(-6);
});
