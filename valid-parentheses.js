const levels = {
  "(": -1,
  ")": 1,
  "{": -2,
  "}": 2,
  "[": -3,
  "]": 3,
};
const compared = Object.keys(levels);

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const splited = s.split("");
  const len = splited.length;

  if (len < 1 || 1e4 < len) return 0;
  if (splited.some((_s) => !compared.includes(_s))) return 0;

  let stack = [];

  while (splited.length > 0) {
    const [char] = splited.splice(0, 1);
    const val = levels[char];

    if (val < 0) {
      stack.push(char);
    } else {
      const checkChar = stack.slice(-1);

      if (levels[checkChar] === -val) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const input = "([]{})";
const output = isValid(input);

console.log(output);
