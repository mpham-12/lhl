const transpose = function (matrix) {
  let newMatrix = [];

  for (let i = 0; i < matrix[0].length; i++) { //loops [1,2,3,4] (first nested arr) of matrix
    newMatrix.push([]); //returns 4 empty []. [ [],[],[],[] ]
  }
  for (let row = 0; row < matrix.length; row++) { //loops through each nested array ([1,2,3,4] x4)
    for (let col = 0; col < matrix[row].length; col++) { //loops through each number of each nested array (1, 2, 3, 4)
      newMatrix[col][row] = matrix[row][col]; //
    }
  }
  return newMatrix;
};


// Do not edit this function.
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

//Expected Logs:
// 1 1 1 1 
// 2 2 2 2 
// 3 3 3 3 
// 4 4 4 4
// ----
// 1 3 5 
// 2 4 6
// ----
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7