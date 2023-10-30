function solution(N, road, K) {
    const graph = Array.from({length: N+1}, () => new Array());
    const distances = Array(N+1).fill(Infinity);
    let count = 0;

    for (const [town1, town2, time] of road) {
        graph[town1].push({ town: town2, time });
        graph[town2].push({ town: town1, time });
    }

    const queue = [{ town: 1, time: 0 }];
    distances[1] = 0;

    while (queue.length > 0) {
        const { town, time } = queue.shift();

        if (time > K) continue;

        for (const { town: nextTown, time: nextTime } of graph[town]) {
            const total = time + nextTime;
            if (total < distances[nextTown]) {
                distances[nextTown] = total;
                queue.push({ town: nextTown, time: total });
            }
        }
    }

    for (let i = 1; i <= N; i++) {
        if (distances[i] <= K) {
            count++;
        }
    }

    return count;
}