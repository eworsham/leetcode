/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringX = x.toString();

    for(let i = 0; i < stringX.length / 2; i++) {
        if (stringX[i] !== stringX[stringX.length - 1 - i]) return false;
    }

    return true;
};

module.exports = isPalindrome;