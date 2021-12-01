const transpose = function (matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
  }
  for (let r = 0; r < matrix.length; r++) {

    for (let c = 0; c < matrix[r].length; c++) {
      newMatrix[c][r] = matrix[r][c];

    }
  }
  return newMatrix;

}
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n')
  }
}
printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));