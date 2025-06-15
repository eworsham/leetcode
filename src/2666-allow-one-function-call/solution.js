/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    
    return function(...args) {
        let result;
        if (!called) {
            result = fn(...args);
            called = true;
        }
        return result;
    }
};

module.exports = once;