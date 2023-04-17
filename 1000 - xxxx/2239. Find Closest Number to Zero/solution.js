/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    a = Math.min(...nums.map(Math.abs))
    return nums.includes(a)?a:-a;
};