/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let nums1Index = m - 1 // Track index of nums1
    let nums2Index = n - 1 // Track index of nums2
    let mergedIndex = n + m - 1 // Track index of merged array

    while (nums2Index >= 0) { // Loop until all of nums2 are checked
        if (nums1Index >= 0) { // Check if all elements in num1 have been compared already
            if (nums1[nums1Index] > nums2[nums2Index]) { // Compare values
                nums1[mergedIndex] = nums1[nums1Index]
                nums1Index--
            } else {
                nums1[mergedIndex] = nums2[nums2Index]
                nums2Index--
            }
        } else {
            nums1[mergedIndex] = nums2[nums2Index]
            nums2Index--
        }
        mergedIndex--
    }
};

module.exports = merge;