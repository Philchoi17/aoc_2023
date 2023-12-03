const readInput = require("../utils/read-input");

const numMap = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

async function solution() {
  const input = await readInput("./input.txt");

  let total = 0;
  input.forEach((line) => {
    const [first] = line.match(
      /[0-9]|one|two|three|four|five|six|seven|eight|nine|zero/
    );
    const [second] = line
      .split("")
      .reverse()
      .join("")
      .match(/[0-9]|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|orez/);

    const num = Number(
      numMap[first] + numMap[second.split("").reverse().join("")]
    );

    total += num;
  });

  console.log(total);

  // let total = 0;
  // for (let i = 0; i < input.length; i++) {
  //   const check = Object.keys(numMap)
  //     .map((n) => ({
  //       value: n,
  //       index: input[i].indexOf(n),
  //     }))
  //     .filter((j) => j["index"] !== -1);

  //   const indexes = check.map((a) => a["index"]);

  //   console.log("indexes =", indexes);
  //   console.log("check =", check);

  //   if (indexes.length <= 1) {
  //     const find = check.find((j) => j["index"] === indexes[0]);
  //     total += Number(numMap[find.value]) * 2;
  //   } else {
  //     const min = Math.min(...indexes),
  //       max = Math.max(...indexes);
  //     const maxVal = check.find((j) => j["index"] === max),
  //       minVal = check.find((j) => j["index"] === min);

  //     total += Number(`${numMap[minVal.value]}${numMap[maxVal.value]}`);
  //   }
  // }
}

solution();
