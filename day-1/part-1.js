const readFile = require("../utils/read-file.js");

function solution() {
  const input = readFile("./input.txt");

  let total = 0;
  for (let i = 0; i < input.length; i++) {
    const match = input[i].match(/[0-9]/g);
    const num = Number(match[0] + match[match.length - 1]);
    total += num;
  }

  return total;
}

console.log(solution());
