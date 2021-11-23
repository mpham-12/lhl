const sum = function() {
  const listofNumbers = process.argv.slice(2);
  let total = 0;
  for (let number of listofNumbers) {
    const parsedNumber = Number(number);
    total = total + parsedNumber;
  }
  return total;
};

console.log(sum());