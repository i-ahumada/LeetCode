/**
 * @param {number[]} nums
 * @return {number[]}
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
    
    let arrayAns = []
    for(num of numsSet) {
        arrayAns.push(num)
    }
    return arrayAns;
};