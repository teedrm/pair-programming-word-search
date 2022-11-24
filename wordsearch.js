const transpose = function (matrix) {
let result = [];

for (let i = 0; i < matrix[0].length; i++) {
    let column = [];

    for (let j = 0; j < matrix.length; j++) {
        column.push(matrix[j][i]);
    }
    result.push(column);
}
return result;
};

const wordHorizontal = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    return false 
};

const wordSearch = (letters, word) => {
    if(wordHorizontal(letters, word) || wordHorizontal(transpose(letters), word)){
        return true;
    }
    return false; 
}


module.exports = wordSearch