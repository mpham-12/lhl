// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }


const findWaldo = function (names, found) {
  names.forEach(function (name, index){
    if (name === 'Waldo') {
      found(index);
    }
  });
}

const actionWhenFound = function (index) {
  console.log("Found him at Index", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);