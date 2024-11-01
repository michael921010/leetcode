const table = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const compared = Object.keys(table);

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const splited = s.split("");
  const len = splited.length;

  if (len < 1 || 15 < len) return 0;
  if (splited.some((_s) => !compared.includes(_s))) return 0;

  let total = 0;

  for (let i = 0; i < len; i++) {
    const c1 = splited[i];
    const n1 = table[c1];

    const c2 = splited[i + 1];
    const n2 = table[c2];

    if (n1 < n2) {
      total += -n1;
    } else {
      total += n1;
    }
  }

  return total;
};

const input = "MCMXCIV";
const output = romanToInt(input);

console.log(output);
