/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const len = strs.length;

  if (len < 1 || 200 < len) return "";
  if (strs.some((str) => str.length < 0 || 200 < str.length || str.toLowerCase() !== str)) return "";

  strs = strs.map((str) => str.split(""));
  let prefix = [];

  const minLen = Math.min(...strs.map((strArrary) => strArrary.length));
  const theShortestIndex = strs.findIndex((strArrary) => strArrary.length === minLen);
  const theShortestArray = strs[theShortestIndex];

  for (let i = 0; i < theShortestArray.length; i++) {
    const char = theShortestArray[i];

    const isDifferent = strs.some((strArray) => strArray[i] !== char);

    if (isDifferent) {
      break;
    } else {
      prefix.push(char);
    }
  }

  return prefix.join("");
};

const input = ["flower", "flow", "flight"];
const output = longestCommonPrefix(input);

console.log(output);
