/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    const length = nums.length
    let pairs = 0;
    for(let i = 0; i < length; i++) {
        const num = nums.shift(), obj1 = num + k, obj2 = num - k
        pairs += [...nums].filter((a) => a == obj1 || a == obj2).length
    }
    return pairs;
};