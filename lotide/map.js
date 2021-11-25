const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results = words.Map;

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
const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["ground", "control", "to", "major", "tom", "john"];


assertArraysEqual(map(words1, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words2, word => word[0]), ['g', 'c', 't', 'm', 't', 'j']);
