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


const letterPositions = function (sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (character !== ' ') {
      if (results[character]) {
        results[character].push(i);
      } else {
        results[character] = [i]
      }
    }
  }
  return results;
}


//Test Code:
console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions("hello").e, [1]);// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }