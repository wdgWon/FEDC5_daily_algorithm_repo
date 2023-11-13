// function solution(board) {
//     const N = board.length;
//     let result = Infinity;
    
//     function dfs(x, y, visit, cost) {
//         if(x < 0 || y < 0 || x >= N || y >= N || board[y][x] === 1 || visit.includes(''+x+y)) return;
        
//         const arr = visit.at(-2) || "empty";
//         const [prevX, prevY] = [...arr].map(Number);
        
//         // 직선, 코너 유무 판단
//         if(arr === "empty" || prevX-x === 0 || prevY-y === 0) {
//             cost += 100;
//         } else {
//             cost += 600;
//         }
        
//         // 현재 가격이 이전 경로 가격보다 비싸면 반복 종료
//         if(cost >= result) return;
//         else if(x === N-1 && y === N-1) {
//             result = cost;
//             return;
//         }
        
//         // 4방면 dfs
//         const newVisit = [...visit, ''+x+y];
//         dfs(x+1, y, newVisit, cost);
//         dfs(x, y+1, newVisit, cost);
//         dfs(x-1, y, newVisit, cost);
//         dfs(x, y-1, newVisit, cost);
//     }
    
//     dfs(0, 0, [], 0);
    
//     return result - 100;
// }

function solution(board) {
    const N = board.length;
    const DIRECTIONS = [[1, 0], [-1, 0], [0, -1], [0, 1]];
    const dp = Array(N).fill().map(() => Array(N).fill().map(() => Array(4).fill(Infinity)));

    const isValid = (x, y) => x >= 0 && x < N && y >= 0 && y < N && board[x][y] !== 1;
    
    const queue = [[0, 0, 0, 0], [0, 0, 0, 3]];
    
    while(queue.length) {
        const [x, y, cost, dir] = queue.shift();
        
        for(let i = 0; i < DIRECTIONS.length; i++) {
            const [mx, my] = DIRECTIONS[i];
            const [nextX, nextY] = [x + mx, y + my];
            
            if(isValid(nextX, nextY)) {
                let new_cost = cost + 100;
                if(dir !== i) new_cost += 500;
                if(new_cost < dp[nextX][nextY][i]) {
                    dp[nextX][nextY][i] = new_cost;
                    queue.push([nextX, nextY, new_cost, i]);
                }
            }
        }
    }
    return Math.min(...dp[N - 1][N - 1]);
}