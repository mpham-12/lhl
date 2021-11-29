const assertArraysEqual = require('./assertArraysEqual');

function middle(array) {
  let middle = Math.floor(array.length / 2);
  let emptyarray = [];

  if (!array.length || array.length < 3) {
    return emptyarray;
  }
  else if (array.length % 2 !== 0) {
    return array[middle];
  } else {
    return [array[middle - 1], array[middle]];
  }
};

module.exports = middle;