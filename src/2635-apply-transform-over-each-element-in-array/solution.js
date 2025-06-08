/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let transformedArray = [];

    arr.forEach((num, i) => {
        transformedArray.push(fn(num, i))
    })

    return transformedArray;
};

module.exports = map;