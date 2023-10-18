function solution(k, d) {
    let count = 0;
    for(let i = 0; i <= d/k; i++) {
        const len = Math.sqrt(((d ** 2) - ((k * i) ** 2)));
        count += (Math.floor(len / k) + 1);
    }
    return count;
}