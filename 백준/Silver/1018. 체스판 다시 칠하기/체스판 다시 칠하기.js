const fs = require("fs");
let input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `11 12
BWWBWWBWWBWW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBWWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW`
)
  .trim()
  .split("\n");

const [N, M] = input.splice(0, 1)[0].split(" ").map(Number);
const board = input;

const whiteStart = Array.from({ length: N }, () => Array(M).fill(0));
const blackStart = Array.from({ length: N }, () => Array(M).fill(0));
let result = Number.MAX_SAFE_INTEGER;

const blackBoard = blackStart.map((line, y) => {
  return line.map((_, x) => {
    if (y % 2 == 0) {
      if (x % 2 == 0) {
        return board[y][x] == "B" ? 0 : 1;
      } else {
        return board[y][x] == "W" ? 0 : 1;
      }
    } else {
      if (x % 2 == 0) {
        return board[y][x] == "W" ? 0 : 1;
      } else {
        return board[y][x] == "B" ? 0 : 1;
      }
    }
  });
});

const whiteBoard = whiteStart.map((line, y) => {
  return line.map((_, x) => {
    if (y % 2 == 0) {
      if (x % 2 == 0) {
        return board[y][x] == "W" ? 0 : 1;
      } else {
        return board[y][x] == "B" ? 0 : 1;
      }
    } else {
      if (x % 2 == 0) {
        return board[y][x] == "B" ? 0 : 1;
      } else {
        return board[y][x] == "W" ? 0 : 1;
      }
    }
  });
});

function diffCounter(currentBoard) {
  const y = N - 8;
  const x = M - 8;

  for (let i = 0; i <= y; i++) {
    for (let j = 0; j <= x; j++) {
      let count = 0;
      for (let k = i; k < 8 + i; k++) {
        for (let m = j; m < 8 + j; m++) {
          count += currentBoard[k][m];
        }
      }
      result = Math.min(count, result);
    }
  }
}

diffCounter(whiteBoard);
diffCounter(blackBoard);

console.log(result);
