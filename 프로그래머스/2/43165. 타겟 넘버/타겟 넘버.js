function solution(numbers, target) {
    var answer = 0
    
    function dfs(numbers, idx, curX) {
        if(idx === numbers.length && curX === target){
            answer++;
            return;
        } else if (idx === numbers.length && curX !== target){
            return;
        }
        dfs(numbers, idx+1, curX + numbers[idx]);
        dfs(numbers, idx+1, curX - numbers[idx]);
    }
    
    dfs(numbers, 0, 0);
    
    return answer;
}