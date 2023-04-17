/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function hashKey(str) {
    return str.split("").sort().join("");
}
var groupAnagrams = function(strs) {
    strs.sort()
    let map = new Map();
    let ansPosition = 0;
    let ans = [];
    for(let i = 0; i < strs.length; i++) {
        const key = hashKey(strs[i]);
        if(map.has(key)) {
            ans[map.get(key)].push(strs[i]);
        } else {
            ans.push([strs[i]]);
            map.set(key, ansPosition++);
        }
    }
    
    return ans.reverse();
};