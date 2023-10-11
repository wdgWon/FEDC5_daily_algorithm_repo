function solution(citations) {
    citations.sort((a,b) => b - a);
    let Hindex = 0;
    
    for(let i = 0; i < citations.length; i++) {
        if(citations[i] > i) {
            Hindex = i + 1;
        }
    }
    
    return Hindex;
}
