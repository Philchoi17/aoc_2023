const readInput = require("../utils/read-input.js");

const CONFIGURATION = {
  red: 12,
  green: 13,
  blue: 14,
};

async function partOne() {
  const input = await readInput("./input.txt");
  let total = 0;
  input.forEach((game) => {
    const points = game.split(":")[0].split(" ")[1];
    const rounds = game.split(":")[1].split(";");
    console.log("NEW GAME");
    let roundColors = [];
    rounds.forEach((j) => {
      const color = j.split(",");
      const roundColor = color.map((c) => ({
        color: c.match(/red|green|blue/)[0],
        number: Number(c.replace(/[a-z]/g, "").trim()),
        valid:
          CONFIGURATION[c.match(/red|green|blue/)[0]] >=
          Number(c.replace(/[a-z]/g, "").trim()),
      }));
      roundColors = [...roundColors, ...roundColor];
      console.log(roundColor);
    });
    if (roundColors.every((rc) => rc.valid)) total += Number(points);
  });
  console.log(total);
}

// partOne();

async function partTwo() {
  const input = await readInput("./input.txt");
  let total = 0;

  input.forEach((game) => {
    console.log("NEW GAME");
    const rounds = game.split(":")[1].split(";");
    let gameColors = {
      red: null,
      blue: null,
      green: null,
    };
    rounds.forEach((round) => {
      const colors = round.split(",");
      colors.forEach((c) => {
        const color = c.match(/red|green|blue/)[0];
        const number = Number(c.replace(/[a-z]/g, "").trim());
        if (!gameColors[color]) gameColors[color] = number;
        else if (gameColors[color] < number) gameColors[color] = number;
      });
    });
    total += Object.values(gameColors).reduce((a, c) => a * c, 1);
  });
  console.log(total);
}

partTwo();
