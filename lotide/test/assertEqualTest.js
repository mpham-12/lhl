const assertEqual = require('../assertEqual');
const head = require('../head');

//Test Code: assertEqual.js
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(3 + 3, 6);

//Test Code: head.js
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));
assertEqual(head([0]), 1);