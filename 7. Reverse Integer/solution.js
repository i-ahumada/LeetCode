/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = ("" + x).split('').reverse();
    if(x < 0) {
        reversed.pop();
        reversed.unshift('-');
    }
    reversed = reversed.join("");
    if(reversed < -Math.pow(2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }
    return reversed;
};