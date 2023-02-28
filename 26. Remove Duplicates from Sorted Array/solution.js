/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let set = new Set(nums);
    let i = 0;
    for(num of set) {
        nums[i] = num;
        i++;
    }

    return i;
};