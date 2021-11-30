const animation = '| \r/ \r- \r\\ \r| \r/ \r- \r\\ \n'
let delay = 0;
for (let sym of animation) {
  setTimeout(() => {
    process.stdout.write(sym)
  }, delay+=100);
};