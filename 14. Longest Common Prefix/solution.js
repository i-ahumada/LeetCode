/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort((a,b) => a.length - b.length);
    let longestPrefix = "";
    for(let i = 0; i < strs[0].length; i++){
        for(let j = 1; j < strs.length; j++){
            if(strs[0][i] != strs[j][i]) {
                return longestPrefix;
            }
        }
        longestPrefix += strs[0][i];
    }
    return longestPrefix;
};