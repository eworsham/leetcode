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

// Test Cases
console.log(runningSum([1,2,3,4])); // Expected results [ 1, 2, 6, 10 ]
console.log(runningSum([1,1,1,1,1])); // Expected results [ 1, 2, 3, 4, 5 ]
console.log(runningSum([3,1,2,10,1])); // Expected results [ 3, 4, 6, 16, 17 ]