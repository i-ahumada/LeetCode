/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let xReversed = x.toString().split("").reverse().join("")
   return x == xReversed;
};