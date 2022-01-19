/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let cache = {};

  function recurseHappy(n) {
    if (cache[n]) return false;

    let numArr = new String(n).split("").map((n) => +n);
    numArr = numArr.map((n) => n ** 2);
    const sum = numArr.reduce((sum, cur) => sum + cur);
    if (sum === 1) return true;
    cache[n] = sum;
    return recurseHappy(sum);
  }

  return recurseHappy(n);
};
