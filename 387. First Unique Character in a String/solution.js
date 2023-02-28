/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])){
            set.delete(s[i]);
        } else {
            map.set(s[i], i);
            set.add(s[i]);
        }
    }
    const ans = set.values().next().value;
    return ans? map.get(ans): -1;
};