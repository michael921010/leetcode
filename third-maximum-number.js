/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  const len = nums.length;
  const MAX = Math.max(...nums);

  if (len < 1 || 1e4 < len) return MAX;
  if (nums.some((val) => val < -Math.pow(2, 31) || Math.pow(2, 31) - 1 < val)) return MAX;

  let count = 0;
  let maxVal = MAX;

  while (count < 3 && nums.length > 0) {
    maxVal = Math.max(...nums);
    nums = nums.filter((n) => n !== maxVal);
    count++;
  }

  return count < 3 ? MAX : maxVal;
};

const input = [3, 2, 1];
const output = thirdMax(input);

console.log(output);
