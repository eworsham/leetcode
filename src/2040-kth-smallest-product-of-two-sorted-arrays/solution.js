/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function(nums1, nums2, k) {
    // Grab edge values
    const nums1First = nums1[0];
    const nums1Last = nums1[nums1.length - 1];
    const nums2First = nums2[0];
    const nums2Last = nums2[nums2.length - 1];

    // Use edge values to determine lowest and highest possible products
    const p1 = nums1First * nums1Last;
    const p2 = nums1First * nums2First;
    const p3 = nums2First * nums1Last;
    const p4 = nums2First * nums2Last;
    const low = Math.min(p1, p2, p3, p4);
    const high = Math.max(p1, p2, p3, p4);


    
};

module.exports = kthSmallestProduct;