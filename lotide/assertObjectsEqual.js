const eqObjects = function (obj1, obj2) {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  console.log(Object.keys(obj1))
  if (arr1.length !== arr2.length)
    return false;
  for (let key of arr1) {
    if (Array.isArray(obj1[key]) || Array.isArray(obj2[key])) {
      return (assertEqual(obj1[key], obj2[key]));
    } else if (obj1[key] !== obj2[key])
      return false
  }
  return true
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (!eqObjects(actual, expected)) return (console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  return (console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
}

//Test Code:
console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }));
console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2" }));
console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1", c: "1" }))