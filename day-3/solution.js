const readInput = require("../utils/read-input");

// const RE = /[!@#%^&*()_+-=[]{}|;':",\/<>?~`]/;
const sc = "!@#$%^&*()_+-=~`{[]}/?<>,;:\\'\"/";
const d = /[0-9]/;

const checks = {
  T: [-1, 0],
  TR: [-1, 1],
  TL: [-1, -1],
  R: [0, 1],
  B: [1, 0],
  BR: [1, 1],
  BL: [1, -1],
  L: [0, -1],
};

async function partOne() {
  const input = await readInput("./sample.txt");
  const grid = input.map((row) => row.split(""));

  for (let r = 0; r < grid.length; r++) {
    let nums = [];
    let n = "";
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c].match(d)) {
        n += grid[r][c];
      } else {
        if (n !== "") nums.push(n);
        n = "";
      }
    }
    console.log(nums);
  }
}

// for (let r = 0; r < grid.length; r++) {
//   for (let c = 0; c < grid[r].length; c++) {
//     const point = [r, c];
//     const val = grid[point[0]][point[1]];

//     if (!sc.indexOf(val) !== -1) {
//       if (val.match(d)) {
//         const startingPoint = point;
//         let _startingPoint = [...point];
//         let startNum = grid[_startingPoint[0]][_startingPoint[1]];
//         while (startNum) {
//           _startingPoint = [_startingPoint[0], _startingPoint[1] + 1];
//           startNum = grid[_startingPoint[0]][_startingPoint[1]];
//           if (String(startNum).match(d)) {
//             console.log("still number", startNum);
//           } else {
//             console.log("here", startNum);
//           }
//         }
//       }
//     }
//   }
// }
// }

partOne();
