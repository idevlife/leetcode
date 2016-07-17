/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let args = {};
    for(let i=0; i<nums.length; i++){
        if(args[nums[i]]==null){
            args[nums[i]]=[];
        }
        args[nums[i]].push(i);
    }
    let keys = Object.keys(args);
    let result = new Set();
    for(let i=0; i<keys.length; i++){
        let a = keys[i];
        let b = target-a+'';
        if(keys.indexOf(b)>-1){
            for(let f=0;f<args[a].length; f++){
                for(let s=0;s<args[b].length; s++){
                    if(args[a][f]!=args[b][s]){
                        result.add(args[a][f]);
                        result.add(args[b][s]);
                    }
                }
            }
        }
    }
    return [...result];
};

console.log(twoSum([3,2,4],6));