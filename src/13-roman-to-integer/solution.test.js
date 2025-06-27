const romanToInt = require('./solution');
test('converts "III" to 3', () => {
    expect(romanToInt("III")).toBe(3);
});

test('converts "LVIII" to 58', () => {
    expect(romanToInt("LVIII")).toBe(58);
});

test('converts "MCMXCIV" to 1994', () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
});

test('converts "IV" to 4', () => {
    expect(romanToInt("IV")).toBe(4);
});

test('converts "IX" to 9', () => {
    expect(romanToInt("IX")).toBe(9);
});

test('converts "XL" to 40', () => {
    expect(romanToInt("XL")).toBe(40);
});

test('converts "XC" to 90', () => {
    expect(romanToInt("XC")).toBe(90);
});

test('converts "CD" to 400', () => {
    expect(romanToInt("CD")).toBe(400);
});

test('converts "CM" to 900', () => {
    expect(romanToInt("CM")).toBe(900);
});

test('converts "XXVII" to 27', () => {
    expect(romanToInt("XXVII")).toBe(27);
});

test('converts "XII" to 12', () => {
    expect(romanToInt("XII")).toBe(12);
});
