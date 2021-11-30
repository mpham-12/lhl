const sentence = "hello there from lighthouse labsprocess\n";
let delay = 0;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, delay += 100)
};
