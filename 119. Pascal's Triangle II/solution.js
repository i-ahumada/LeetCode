/**
 * @param {number} rowIndex
 * @return {number[]}
 */

function factorialize(n) {
    if(n == 0) {
        return 1;
    } else {
        return (n * factorialize(n-1));
    }
}

var getRow = function(rowIndex) {

    let row = []; 
    for(i = 1; i < rowIndex; i++) {
        row.push(factorialize(rowIndex)/(factorialize(i)*factorialize(rowIndex-i))); 
    }
    row.unshift(1);
    row[rowIndex] = 1;

    return row;
};