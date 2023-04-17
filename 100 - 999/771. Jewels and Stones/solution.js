/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let set = new Set(jewels);
    let counter = 0;
    for(char of stones) {
        if(set.has(char)) {
            counter++;
        }
    }
    
    return counter;
};