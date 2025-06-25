const isPalindrome = require('./solution');

test('returns true for palindrome number 121', () => {
    expect(isPalindrome(121)).toBe(true);
});

test('returns false for negative number -121', () => {
    expect(isPalindrome(-121)).toBe(false);
});

test('returns false for number 10', () => {
    expect(isPalindrome(10)).toBe(false);
});

test('returns true for single digit number 7', () => {
    expect(isPalindrome(7)).toBe(true);
});

test('returns true for 0', () => {
    expect(isPalindrome(0)).toBe(true);
});

test('returns false for 1000021', () => {
    expect(isPalindrome(1000021)).toBe(false);
});
