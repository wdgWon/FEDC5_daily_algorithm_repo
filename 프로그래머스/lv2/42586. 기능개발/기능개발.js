function solution(progresses, speeds) {
    // reverse로 스택을 만드는게 구현하기 좋아보임
    
    // count 변수를 만들어서 현재 몇일차인지 기록, 이후 스택에서 순서대로 speeds의 해당 인덱스를 곱함
    // 100 이상일 시 pop, 아니면 100 넘을때까지 count를 증가
    
    let 작업일 = 0;
    const result = [];
    
    for(let i = 0; i < progresses.length; i++) {
        const 진행속도 = speeds[i];
        const 남은작업 = 100 - progresses[i] - (진행속도 * 작업일);
              
        if(남은작업 > 0) {
            작업일 += Math.ceil( 남은작업 / 진행속도 );
            result.push(0);
        }
        // progresses.pop();
        result[result.length-1] += 1;
    }
    
    return result;
}