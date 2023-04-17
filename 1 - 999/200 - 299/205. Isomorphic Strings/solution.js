/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapt = new Map();
    let maps = new Map();
    
    for(let i = 0; i < s.length; i++) {
        if(mapt.has(t[i]) && maps.has(s[i])) {
            if(mapt.get(t[i]) != s[i] && maps.get(s[i]) != t[i]) {
                return false                
            }
            
        }else if(mapt.has(t[i]) || maps.has(s[i])) {
            return false;
            
        } else {
            mapt.set(t[i], s[i])
            maps.set(s[i], t[i])
        }
    }
    
    return true;
};