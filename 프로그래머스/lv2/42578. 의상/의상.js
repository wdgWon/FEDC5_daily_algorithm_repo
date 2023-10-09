function solution(clothes) {
    const hashMap = new Map();
    let result = 1;
    
    for(const [_, source] of clothes) {
        if(hashMap[source]) {
            hashMap[source] += 1;
        }
        else {
            hashMap[source] = 1;
        }
    }
    
    for(const src in hashMap) {
        result *= (hashMap[src]+1);
    }
    
    return result - 1;
}