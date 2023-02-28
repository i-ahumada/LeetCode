/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let productOfAll = 0;
    const hasPlus1_0 = nums.indexOf(0) != nums.lastIndexOf(0);
    const has0 = nums.includes(0);
    if(hasPlus1_0) {
        nums.fill(0);
    } else {
        productOfAll = [...nums].filter((x)=> x!=0).reduce((a,b) => a * b, 1);
        if(has0) {
            nums = nums.map((x) => x?0:productOfAll);
        } else {
            nums = nums.map((x) => x?productOfAll/x:productOfAll);
        }
    }

    return nums;
};