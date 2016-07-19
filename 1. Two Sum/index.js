/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let idxMap = new Map();
    for(let i=0;i<nums.length;i++){
        let n = idxMap.get(nums[i]);
        if(n==null){
            idxMap.set(nums[i],i);
        }
        n = idxMap.get(target-nums[i]);
        if(n!=null && n<i){
            result = [n,i];
            break;
        }
    }
    return result;
};

console.log(getIndexList([0,4,3,0],0));