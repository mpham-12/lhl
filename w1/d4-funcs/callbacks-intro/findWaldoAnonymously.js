const findWaldo = function (names, found) {
  names.forEach(function (name, index) {
    if (name === 'Waldo') {
      found(index);
    }
  });
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log('Waldo is located at:', index)
});