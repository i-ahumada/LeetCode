/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let highestArea = 0;

    while(l < r) {
        area = (r - l) * Math.min(height[l], height[r])
        highestArea = Math.max(highestArea, area);
        if(height[l] > height[r]) {
            r--
        } else {
            l++
        }
    }

    return highestArea;
};