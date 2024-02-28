// index.js

/**
 * Rounds a floating-point number to a specified number of decimal places.
 * @param {number} num - The number to round.
 * @param {number} decimals - The number of decimal places to round to.
 * @returns {number} - The rounded number.
 */
function roundNumber(num, decimals) {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

module.exports = roundNumber;