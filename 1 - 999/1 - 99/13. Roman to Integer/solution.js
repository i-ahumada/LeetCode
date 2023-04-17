/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map(
        [["M", 1000],  
        ["D", 500],  
        ["C", 100],  
        ["L", 50],  
        ["X", 10],  
        ["V", 5],  
        ["I", 1]]);
    let accumulator = 0;
    for(let i = 0; i < s.length; i++) {
        if (map.get(s[i]) < map.get(s[i + 1])) {
            accumulator += map.get(s[i + 1]) - map.get(s[i]);
            i++;
        } else {
            accumulator += map.get(s[i]);
        }
    }

    return accumulator;
};