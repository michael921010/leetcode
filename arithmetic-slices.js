/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function (nums) {
  const len = nums.length;

  if (len < 3 || 5000 < len) return 0;
  if (nums.some((val) => val < -1000 || 1000 < val)) return 0;

  let total = 0;
  let acc = 1;
  let diff = nums[1] - nums[0];

  for (let i = 2; i < len; i++) {
    if (nums[i - 1] + diff === nums[i]) {
      total += acc;
      acc++;
    } else {
      diff = nums[i] - nums[i - 1];
      acc = 1;
    }
  }

  return total;
};

const input = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const output = numberOfArithmeticSlices(input);

console.log(output);
