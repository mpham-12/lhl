const assertEqual = require('../assertEqual');
const tail= require('../tail');

// Test Code:
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); //prints ["Lighthouse", "Labs"]

//assertEqual does not have the ability to compare arrays, 
//thus we must deconstruct the array to use assertEqual().

assertEqual(words.length, 3);
assertEqual(words[1], "Lighthouse");