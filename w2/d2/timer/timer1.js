const input = process.argv.filter(num => !isNaN(num)).filter(num => num >= 0);

input.forEach((num) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, num * 1000);
});