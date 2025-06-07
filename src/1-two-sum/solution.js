/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        if (nums.includes(difference, i + 1)) {
            return [i, nums.indexOf(difference, i + 1)];
        }
    }
};

module.exports = twoSum;