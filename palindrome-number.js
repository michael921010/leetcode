/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < -Math.pow(2, 31) || Math.pow(2, 31) - 1 < x) return false;

  const ltr = x.toString();
  const rtl = ltr.split("").reverse().join("");

  return ltr === rtl;
};

const input = -121;
const output = isPalindrome(input);

console.log(output);
