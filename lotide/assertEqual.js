// Checks 2 values (assertion/value and the expected result)
//does not have the ability to compare arrays.
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Simply exporting the VARIABLE. 
//we are not calling the function. e.g. assertEqual().
module.exports = assertEqual;