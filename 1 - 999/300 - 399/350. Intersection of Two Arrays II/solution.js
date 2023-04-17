/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = new Map();
    let ans = [];
    for(num of nums1) {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1);
        }
    }
    
    for(num of nums2) {
        if(map.get(num) > 0) {
            ans.push(num)
            map.set(num, map.get(num) - 1);
        }
    }
    
    return ans;
};