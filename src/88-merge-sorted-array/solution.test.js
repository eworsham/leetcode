const merge = require('./solution');

test('Example 1: merges [1,2,3] and [2,5,6] into [1,2,2,3,5,6]', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
});

test('Example 2: merges [1] and [] into [1]', () => {
    const nums1 = [1];
    const m = 1;
    const nums2 = [];
    const n = 0;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
});

test('Example 3: merges [] and [1] into [1]', () => {
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
});