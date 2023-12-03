const fs = require("fs");

async function readInput(path, splitBy = "\n") {
  const input = fs.readFileSync(path);
  return input.toString().split(splitBy);

  // return new Promise((resolve, reject) => {
  //   fs.readFile(path, (err, data) => {
  //     if (err) reject(err);
  //     resolve(data.toString().split(splitBy));
  //   });
  // });
}

module.exports = readInput;
