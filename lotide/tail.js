const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (array) {
  let result = array.slice(1);
  return result;
};

// Test Code:
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); //prints ["Lighthouse", "Labs"]

//assertEqual does not have the ability to compare arrays, 
//thus we must deconstruct the array to use assertEqual().

assertEqual(words.length, 3);
assertEqual(words[1], "Lighthouse");