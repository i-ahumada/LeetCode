// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

/**
 * @param {character[][]} board
 * @return {boolean}
 */


// RorCorQ stands for row or column or quadrant
function hashKey(RorCorQ, value, num = "") {
    return RorCorQ + num + value;
}
var isValidSudoku = function(board) {
    let set = new Set();
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(board[i][j] != ".") {
                const quadrant = Math.floor(i/3) * 3 + Math.floor(j/3);
                const quadrantKey = hashKey('Q', quadrant, board[i][j]);
                const columnKey = hashKey('C', j, board[i][j]);
                const rowKey = hashKey('R', i, board[i][j]);
                if(set.has(quadrantKey) || (set.has(columnKey)) || set.has(rowKey)){
                return false;
                } else {
                set.add(quadrantKey);
                set.add(columnKey);
                set.add(rowKey);
                }
            } else if(board[i][j].length > 1) {
                return false;
            } 
        }
    }
    
    return true;
};