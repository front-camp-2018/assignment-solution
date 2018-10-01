/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => typeof str === 'string'
  ? str.split('').reverse().join('')
  : new Error('this is not a string');

export default turnMeBaby;
