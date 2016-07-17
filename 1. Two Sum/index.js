/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    for(let i=min;i<=max;i++){
        let j = target-i;
        let indexI = nums.indexOf(i);
        let indexJ = nums.indexOf(j,indexI+1);
        if(indexI>-1 && indexJ>-1 && indexI!=indexJ){
            result = result.concat([indexI,indexJ]);
        }
    }
    return result;
};

console.log(getIndexList([0,4,3,0],0));