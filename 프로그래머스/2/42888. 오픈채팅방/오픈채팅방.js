function solution(record) {
    record = record.map(status => status.split(" "))
    const hash = {}
    const messages = [];
    
    // 최종적으로 변경된 uid의 name을 hash에 기록
    for(const [transition, uid, name] of record) {
        if(transition != "Leave") {
            hash[uid] = name;
        }
    }
    
    // hash에 담긴 uid의 name을 메세지에 푸시
    for(const [transition, uid] of record) {
        switch(transition) {
            case "Enter":
                messages.push(`${hash[uid]}님이 들어왔습니다.`);
                break;
            case "Leave":
                messages.push(`${hash[uid]}님이 나갔습니다.`);
                break;
            default:
                break;
        }
    }
    return messages
}