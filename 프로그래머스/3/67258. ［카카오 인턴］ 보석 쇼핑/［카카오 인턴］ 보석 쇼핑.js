function solution(gems) {
    let totalGems = new Set(gems).size;
    let gemsMap = new Map();
    let left = 0, right = 0;
    let answer = [0, gems.length - 1];

    while (right < gems.length) {
        if (gemsMap.has(gems[right])) {
            gemsMap.set(gems[right], gemsMap.get(gems[right]) + 1);
        } else {
            gemsMap.set(gems[right], 1);
        }

        while (gemsMap.size === totalGems) {
            if (right - left < answer[1] - answer[0]) {
                answer = [left, right];
            }

            if (gemsMap.get(gems[left]) === 1) {
                gemsMap.delete(gems[left]);
            } else {
                gemsMap.set(gems[left], gemsMap.get(gems[left]) - 1);
            }

            left += 1;
        }

        right += 1;
    }

    return [answer[0] + 1, answer[1] + 1];
}