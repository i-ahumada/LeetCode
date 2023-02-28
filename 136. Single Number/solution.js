/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numsSet = new Set();
    
    for(num of nums) {
        if(numsSet.has(num)) {
            numsSet.delete(num);
        } else {
            numsSet.add(num);
        }
    } 
    
    return numsSet.keys().next().value;
};