/**
 * @param {number[]} pref
 * @return {number[]}
 */

var findArray = function(pref) {
    let arr = [pref[0]];
    let accum = pref[0];
    
    for(let i = 1; i < pref.length; i++) {
        arr.push(accum ^ pref[i])
        accum ^= arr[i];  
    }

    return arr;
};