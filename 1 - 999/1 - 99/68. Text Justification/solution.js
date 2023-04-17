/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let lineCounter = 0;
    let paragraph = [words[0]];
    let wordsPerLine = [1];
    // Find which words go to each line
    for(let i = 1; i < words.length; i++) {
        if((paragraph[lineCounter] +" "+ words[i]).length <= maxWidth) {
            paragraph[lineCounter] += " "+ words[i];
            wordsPerLine[lineCounter]++;
        } else {
            lineCounter++;
            paragraph.push(words[i]);
            wordsPerLine.push(1);
        }
    }
    let line = "";
    let extraWhitespacesPerWord = 0;
    let extraWhitespacesRest = 0;
    // Fill whitespaces
    for(let i = 0; i < paragraph.length - 1; i++) {
        let extraWhitespaces = maxWidth - paragraph[i].length + wordsPerLine[i] - 1;
        const divisor = wordsPerLine[i] - 1? wordsPerLine[i] - 1: 1;
        extraWhitespacesPerWord = Math.floor(extraWhitespaces/divisor);
        extraWhitespacesRest = extraWhitespaces%divisor
        for(let j = 0; j < wordsPerLine[i]; j++) {
            if(wordsPerLine[i] == 1) {
                const whiteSpace = extraWhitespacesPerWord;
                line += words.shift() + " ".repeat(whiteSpace);
            } else {
                const whiteSpace = j == wordsPerLine[i] - 1?0:extraWhitespacesRest?extraWhitespacesPerWord + 1: extraWhitespacesPerWord;
                extraWhitespacesRest = extraWhitespacesRest? extraWhitespacesRest - 1: 0;
                line += words.shift() + " ".repeat(whiteSpace);
            }
        }
        paragraph[i] = line;
        line = "";
    }
    paragraph[paragraph.length - 1] += " ".repeat(maxWidth - paragraph[paragraph.length - 1].length)

    return paragraph;
};