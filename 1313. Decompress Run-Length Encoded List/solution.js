/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let ans = [];
    for(i = 0; i < nums.length; i+=2) {
        const x = new Int32Array(nums[i]).fill(nums[i + 1]);
        ans.push(...x);
    }

    return ans;
};
