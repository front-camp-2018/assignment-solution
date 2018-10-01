/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([9, 5, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  const map = {};
  const result = [];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    const item = arr[i];

    if (typeof map[item] !== 'undefined') {
      Array.prototype.push.call(result, map[item], item);
      break;
    }

    map[base - item] = item;
  }

  return result;
};

export default twoSums;
