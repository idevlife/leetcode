/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // 回文 从左和从右 不变
    // 第一步 找到回文数的中心
    // 第二步 向左右拓展
    // 第三步 获取最大值

    if(s.length==1) return s;

    // 最大的回文数是s本身，所以我只需要遍历一半即可
    let len = s.length;
    let result = "";
    let max = -1;
    for(let i=0; i<len; i++){
        let c = s[i];
        let j = i;
        // ...aa...
        if(s[i]==s[i+1]){
            j=i+1;
        }
        if(j!=i){
            let k = 0;
            while(true){
                if(s[i-k]==null || s[j+k]==null || s[i-k]!=s[j+k]) {
                    k--;
                    if(max<(2*k+2)){
                        max = 2*k+2;
                        result = s.substr(i-k,max);
                    }
                    break;
                }
                k++;
            }
        }
        j=i;
        // ...aba...
        if(s[i]==s[i+2]){
            j = i+2;
        }
        if(j!=i){
            let k = 0;
            while(true){
                if(s[i-k]==null || s[j+k]==null || s[i-k]!=s[j+k]){
                    k--;
                    if(max<(2*k+3)){
                        max = 2*k+3;
                        result = s.substr(i-k,max);
                    }
                    break;
                }
                k++
            }
        }
    }
    return result;
};

console.log(longestPalindrome("jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel"));