/**
* This function should return sum of two numbers
*
* @param {number} a - this is a number value
* @param {number} b - this is a number value
* @return {number} result of the sum values
* @example
* sum(1, 2);   // 3
* sum(0, 5);   // 5
* sum(-1, 13); // 12
*/
const sum = (a, b) => {
  const isFiniteNumber = data => typeof data === 'number' && isFinite(data);

  if (isFiniteNumber(a) && isFiniteNumber(b)) {
    return a + b;
  }

  throw Error;
};

export default sum;
