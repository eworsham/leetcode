/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const timerId = setTimeout(() => fn(...args), t);
    return () => clearTimeout(timerId);
};

module.exports = cancellable;