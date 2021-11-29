const eqArrays = require('./eqArrays')

function assertArraysEqual(arrayOne, arrayTwo) {
  console.log(eqArrays(arrayOne, arrayTwo) === true ? `✅ ${arrayOne} === ${arrayTwo}` : `🛑 ${arrayOne} !== ${arrayTwo}`);
};

module.exports = assertArraysEqual;