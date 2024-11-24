function compute(str) {
  let arr = str.split(/([+|\-|*|\/])/);

  let result = 0;

  while (arr.includes("/") || arr.includes("*")) {
    const index = arr.findIndex((char) => ["/", "*"].includes(char));

    if (index === -1) {
      throw new Error("Error");
    } else {
      const char = arr[index];

      const a = Number(arr[index - 1]);
      const b = Number(arr[index + 1]);

      if (char === "*") {
        // multiple
        result = a * b;
      } else {
        // divide
        if (b === 0) {
          throw new Error("Error");
        }

        result = a / b;
      }

      arr.splice(index - 1, 3);

      arr = [...arr.slice(0, index - 1), result.toString(), ...arr.slice(index - 1)];
      arr.splice(index - 1, 1, result.toString());
    }
  }

  while (arr.includes("+") || arr.includes("-")) {
    const index = arr.findIndex((char) => ["+", "-"].includes(char));

    if (index === -1) {
      throw new Error("Error");
    } else {
      const char = arr[index];

      const a = Number(arr[index - 1]);
      const b = Number(arr[index + 1]);

      if (char === "+") {
        // add
        result = a + b;
      } else {
        // plus

        result = a - b;
      }

      arr.splice(index - 1, 3);

      arr = [...arr.slice(0, index - 1), result.toString(), ...arr.slice(index - 1)];
      arr.splice(index - 1, 1, result.toString());
    }
  }

  return Number(arr[0]);
}

const input1 = "1+2*3-4/2";
console.log(`${input1} = ${compute(input1)}`);

const input2 = "11+12";
console.log(`${input2} = ${compute(input2)}`);
