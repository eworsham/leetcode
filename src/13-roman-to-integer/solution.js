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

    // Loop through string calculating value of roman numeral
    let romanNumeralIntValue = 0;
    let currentIndex = 0;
    while (currentIndex < s.length) {
        // Grab current and next roman numeral
        const currentRomanNumeral = s.charAt(currentIndex);
        const nextRomanNumeral = s.charAt(currentIndex + 1);
        
        // 'I' can be placed before V and X to make 4 and 9
        // 'X' can be placed before L and C to make 40 and 90
        // 'C' can be placed before D and M to make 400 and 900
        if (
            ( currentRomanNumeral === 'I' && ( nextRomanNumeral === 'V' || nextRomanNumeral === 'X' ) ) ||
            ( currentRomanNumeral === 'X' && ( nextRomanNumeral === 'L' || nextRomanNumeral === 'C' ) ) ||
            ( currentRomanNumeral === 'C' && ( nextRomanNumeral === 'D' || nextRomanNumeral === 'M' ) )
        ) {
            romanNumeralIntValue += romanNumeralIntValues.get(nextRomanNumeral) - romanNumeralIntValues.get(currentRomanNumeral);
            currentIndex += 2;
        } else {
            romanNumeralIntValue += romanNumeralIntValues.get(currentRomanNumeral)
            currentIndex++;
        }
    }

    // Return value of roman numeral
    return romanNumeralIntValue;
};

module.exports = romanToInt;