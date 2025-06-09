/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let output = [];

    arr.forEach((num, i) => {
        if (fn(num, i)) output.push(num);
    });

    return output
};

module.exports = filter;