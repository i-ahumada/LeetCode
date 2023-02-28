/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numsMap = new Map();
    
    for(num of nums) {
        if(numsMap.has(num)) {
            if(numsMap.get(num) == 2) {
                numsMap.delete(num);
            } else {
                numsMap.set(num, 2);
            }
        } else {
            numsMap.set(num, 1);
        }
    } 
    
    return numsMap.keys().next().value;
};