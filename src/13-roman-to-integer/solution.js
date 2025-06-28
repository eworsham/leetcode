/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Store values of all possible roman numeral values
    const romanNumeralValues = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000
    };

    // Loop through each character in the string, adding or subtracting values based on Roman numeral rules
    let totalValue = 0;
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanNumeralValues[s[i]];
        const nextValue = romanNumeralValues[s[i + 1]];
        if (nextValue && currentValue < nextValue) {
            totalValue -= currentValue;
        } else {
            totalValue += currentValue;
        }
    }

    return totalValue;
};

module.exports = romanToInt;