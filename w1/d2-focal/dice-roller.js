function diceRoller(num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push((Math.floor(Math.random() * 6) + 1));
  }
  return result;
}
let rolledNumber = process.argv.slice(2);
console.log(`Rolled ${rolledNumber} dice: ${diceRoller(rolledNumber).toString().replace(/,/g, ", ")}`);
