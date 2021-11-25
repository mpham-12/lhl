const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, ab);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd);