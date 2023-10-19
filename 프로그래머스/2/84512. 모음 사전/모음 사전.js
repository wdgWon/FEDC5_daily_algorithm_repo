function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const dictionary = new Map();
    let count = 0;
    
    function dfs(alphabet, str) {
        const newStr = str + alphabet;
        dictionary.set(newStr, count++);
        
        if(newStr.length == 5) return;
        
        for(const vowel of vowels) {
            dfs(vowel, newStr);
        }
    }
    
    dfs("", "");
    return dictionary.get(word)
}
