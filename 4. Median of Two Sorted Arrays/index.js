/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newList = nums1.concat(nums2);
    newList.sort((a,b)=>a-b);

    let len = newList.length;
    if(len%2==1){
        return newList[Math.round((len-1)/2)];
    } else {
        return (newList[Math.round((len-2)/2)]+newList[Math.round(len/2)])/2;
    }
};

console.log(findMedianSortedArrays([1],[2,3,4,5,6,7,8,9,10]));