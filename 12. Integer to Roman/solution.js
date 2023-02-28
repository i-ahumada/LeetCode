/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = new Map(
        [["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]]);
    let romanNumber = "";
    for(val of roman) {
        const quotient = 0|num/val[1]
        if(quotient >= 1) {
            romanNumber += val[0].repeat(quotient)
            num -= quotient * val[1] 
        }
    }
    return romanNumber;
};