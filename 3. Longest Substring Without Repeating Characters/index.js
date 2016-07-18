/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let strList = s.split("");
    let maxNumList = [0];
    let preList = [];
    let subList = [];
    for(let i=0;i<strList.length;i++){
        maxNumList[i]=1;
        let c = s[i];
        if(subList.indexOf(c)==-1){
            subList.push(c);
        } else if(subList.indexOf(c)==0){
            subList = subList.slice(1).concat([c]);
        } else {
            subList = [];
            console.log(i,preList.lastIndexOf(c));
            for(let j=i;j>=preList.lastIndexOf(c);j--){
                if(subList.indexOf(strList[j])==-1){
                    subList.push(strList[j]);
                } else {
                    break;
                }
            }
            subList.reverse();
        }
        preList.push(c);
        maxNumList[i]=subList.length;
    }
    return Math.max(...maxNumList);
};

console.log(lengthOfLongestSubstring("tvqnkvovks"));