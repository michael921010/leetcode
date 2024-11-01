/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const len = nums.length;

  if (len < 2 || 1e4 < len) return [];
  if (nums.some((val) => val < -1e9 || 1e9 < val)) return [];
  if (target < -1e9 || 1e9 < target) return [];

  for (let i = 0; i < len; i++) {
    const a = nums[i];

    for (let j = i + 1; j < len; j++) {
      const b = nums[j];

      if (a + b === target) return [i, j];
    }
  }

  return [];
};

const input = [2, 7, 11, 15];
const target = 9;
const output = twoSum(input, target);

console.log(output);
