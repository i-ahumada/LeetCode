/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = []
    let counter = 0;
    let longestSubstring = 0;
    let i = 0;
    for(char in s) {
        i = arr.indexOf(char);
        arr.push(char);
        if(i) {
            arr.splice(0, i);
        }

        longestSubstring = Math.max(arr.length, longestSubstring);
    }

    return longestSubstring;
};  