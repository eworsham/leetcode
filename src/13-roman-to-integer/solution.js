/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Map to store values of all possible roman numeral values
    const romanNumeralIntValues = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    // Loop through each character in the string, adding or subtracting values based on Roman numeral rules
    let romanNumberIntValue = 0;
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanNumeralIntValues.get(s[i]);
        const nextValue = romanNumeralIntValues.get(s[i + 1]);
        if (nextValue && currentValue < nextValue) {
            romanNumberIntValue -= currentValue;
        } else {
            romanNumberIntValue += currentValue;
        }
    }

    return romanNumberIntValue;
};

module.exports = romanToInt;