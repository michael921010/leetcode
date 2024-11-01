/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  if (n < 1 || 1e4 < n) return [];

  let result = [];

  for (let i = 0; i < n; i++) {
    const val = i + 1;

    if (val % (3 * 5) === 0) {
      result.push("FizzBuzz");
      continue;
    } else if (val % 3 === 0) {
      result.push("Fizz");
      continue;
    } else if (val % 5 === 0) {
      result.push("Buzz");
      continue;
    } else {
      result.push(val.toString());
    }
  }

  return result;
};

const input = 3;
const output = fizzBuzz(input);

console.log(output);
