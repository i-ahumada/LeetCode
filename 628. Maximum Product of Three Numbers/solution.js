/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let highestMultiplication = 1;
    let numsNeg = nums.filter(num => num<0)
    let highestNegativeMultiplication = 1;
    if(numsNeg.length > 1) {
        for(i = 0; i < 2; i++) {
            highestNegativeMultiplication *= Math.min(...numsNeg);
            numsNeg.splice(numsNeg.indexOf(Math.min(...numsNeg)),1)
        }
        highestNegativeMultiplication *= Math.max(...nums);
    } else {
        highestNegativeMultiplication = -Infinity;
    }
    for(i = 0; i < 3; i++) {
        highestMultiplication *= Math.max(...nums);
        nums.splice(nums.indexOf(Math.max(...nums)),1);
    }
    return Math.max(highestNegativeMultiplication, highestMultiplication);
};