function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    if (arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

function assertArraysEqual(arrayOne, arrayTwo) {
  console.log(eqArrays(arrayOne, arrayTwo) === true ? "✅" : "🛑");
};

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

console.log(middle([1])) // => []
console.log(middle([1, 2]))// => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4, 5, 6]))