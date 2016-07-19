/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let idxMap = {};
    for(let i=0;i<nums.length;i++){
        let n = idxMap[nums[i]];
        if(n==null){
            idxMap[nums[i]]=i;
        }
        n = idxMap[target-nums[i]];
        if(n!=null && n<i){
            return [n,i];
        }
    }
    return [];
};

console.log(getIndexList([0,4,3,0],0));