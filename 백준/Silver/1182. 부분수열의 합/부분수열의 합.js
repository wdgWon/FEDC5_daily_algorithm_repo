const fs = require("fs");
let input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 0
-7 -3 -2 5 8`
)
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [N, S] = input[0];
const nums = input[1];
let result = 0;

function dfs(i, sum) {
  const prev = sum;
  if (i >= N) return;

  sum += nums[i];

  if (sum === S) {
    result++;
  }

  dfs(i + 1, sum);
  dfs(i + 1, prev);
}

dfs(0, 0);

console.log(result);
