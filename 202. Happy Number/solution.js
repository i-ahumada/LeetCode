/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let resultsSet = new Set();
    let result = 0;
    n = n.toString().split("");
    
    while(n != "1") {
        n.forEach((figure)=> result += figure**2);
        
        if(resultsSet.has(result)) {
            return false;
        }
        resultsSet.add(result);
        
        n = result.toString().split("");
        result = 0;
    }
    
    return true
};