function solution(files) {
    function replaced(str, tmpArr) {
        const removeHead = str.replace(/[A-z .-]+/, (head) => {
            tmpArr.push(head.toLowerCase());
            return '';
        })
        const number = (/\d+/).exec(removeHead);
        tmpArr.push(number);
    }
    
    files.sort((a, b) => {
        const tmpA = [];
        const tmpB = [];
        replaced(a, tmpA);
        replaced(b, tmpB);
        
        return tmpA[0].localeCompare(tmpB[0]) || tmpA[1] - tmpB[1] ;
    })
    return files;
}