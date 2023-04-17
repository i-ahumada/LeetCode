/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const numsSet1 = new Set(nums1);
    const numsSet2 = new Set(nums2);
    let arrayIntersection = [];
    numsSet1.forEach((value) => {
        if(numsSet2.has(value)) {
            arrayIntersection.push(value)
        }
    })
    
    return arrayIntersection;
};