function solution(n, wires) {
    const adj = Array.from(Array(n+1), () => new Array());
    for(let i=0; i<wires.length; i++){
        const [a, b] = wires[i];
        adj[a].push(b);
        adj[b].push(a);
    }

    const counts = new Array(n+1).fill(1);

    const dfs = (node, prev) => {
        for(const next of adj[node]){
            if(next === prev) continue;
            dfs(next, node);
            counts[node] += counts[next];
        }
    }

    dfs(1, 0);

    let answer = Infinity;
    for(let i=2; i<=n; i++){
        const diff = Math.abs(counts[1] - 2*counts[i]);
        answer = Math.min(answer, diff);
    }

    return answer;
}
