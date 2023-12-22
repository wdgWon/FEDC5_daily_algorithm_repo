const fs = require("fs");
let input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
1 2 3 4 5 6
2 1 1 1`
)
  .trim()
  .split("\n");

const N = +input[0];
const nums = input[1].split(" ").map(Number);
const operators = input[2].split(" ").map(Number);
let minNum = Number.MAX_SAFE_INTEGER;
let maxNum = Number.MIN_SAFE_INTEGER;

function dfs(i, opers, sum) {
  if (i > N - 1) {
    minNum = Math.min(minNum, sum);
    maxNum = Math.max(maxNum, sum);
    return;
  }

  for (let j = 0; j < 4; j++) {
    if (opers[j] > 0) {
      const newOpers = [...opers];
      newOpers[j] -= 1;

      switch (j) {
        case 0:
          dfs(i + 1, newOpers, sum + nums[i]);
          break;
        case 1:
          dfs(i + 1, newOpers, sum - nums[i]);
          break;
        case 2:
          dfs(i + 1, newOpers, sum * nums[i]);
          break;
        case 3:
          dfs(i + 1, newOpers, parseInt(sum / nums[i]));
          break;
      }
    }
  }
}

dfs(1, operators, nums[0]);

console.log(`${maxNum}\n${minNum}`);
