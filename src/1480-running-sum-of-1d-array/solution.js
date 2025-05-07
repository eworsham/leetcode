/**
 * Solution to LeetCode problem 1480. Running Sum of 1d Array
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
    let sumArray = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        sumArray[i] = sumArray[i - 1] + nums[i]
    }
    return sumArray;
};

module.exports = runningSum;