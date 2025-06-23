/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    let currentTime = new Date();
    const targetTime = new Date(currentTime.getTime() + millis);

    while (currentTime < targetTime) {
        currentTime = Date.now();
    }
}

module.exports = sleep;