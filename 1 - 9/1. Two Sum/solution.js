/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // array that will be returned, contains indexes of the two numbers that add up to target
    const map = {};
    
    
    for(i = 0; i < nums.length; i++) {
        const objective = target - nums[i];

        if(map[objective] != undefined) {
            return [map[objective], i];
        }
        map[nums[i]] = i;
    }
};