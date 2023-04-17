/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let map = new Map();
    let minIdSum = Number.MAX_VALUE;
    let ans = [];
    for(i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }
    for(i = 0; i < list2.length; i++) {
        if(map.has(list2[i])) {
            const idSum = map.get(list2[i]) + i
            if(idSum < minIdSum) {
                minIdSum = idSum;
                ans = [list2[i]];
            } else if(idSum == minIdSum) {
                ans.push(list2[i])
            }
        }
    }
    
    return ans;
};