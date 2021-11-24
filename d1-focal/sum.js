const listofNumbers = process.argv.slice(2);

const sum = function(listofNumbers) {
  let total = 0;
  for (let number of listofNumbers) {
    const parsedNumber = Number(number);
    const myNumberIsANaN = Number.isNaN(parsedNumber);
    if (!Number.isNaN(parsedNumber)){
      total += parsedNumber;
    }
  }
  return total;
};

console.log(sum());