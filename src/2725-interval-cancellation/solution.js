/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args); // Call immediately
    const intervalId = setInterval(() => fn(...args), t);
    return () => clearInterval(intervalId);
};

module.exports = cancellable;