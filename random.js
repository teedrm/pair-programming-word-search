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

  const printMatrix = (matrix) => {
    for (const row of matrix) {
      for (const el of row) {
        process.stdout.write(el + " ");
      }
      process.stdout.write("\n");
    }
  };



  printMatrix(
    transpose([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'R', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'A', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'N', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'K', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ]));