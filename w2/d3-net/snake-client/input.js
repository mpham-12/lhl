const { UPKEY, LEFTKEY, DOWNKEY, RIGHTKEY } = require('./constants.js');
const hello = "Hello";

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;
  if (key === '\u0003') {
    stdout.write("Exiting game. Thanks for playing.\n");
    process.exit();
  }
  if (key === 'w') {
    clearInterval(func);
    interval(UPKEY);
  }
  if (key === 'a') {
    clearInterval(func);
    interval(LEFTKEY);
  }
  if (key === 's') {
    clearInterval(func);
    interval(DOWNKEY);
  }
  if (key === 'd') {
    clearInterval(func);
    interval(RIGHTKEY);
  }
  if (key === "h") {
    connection.write(hello);
  }
};

module.exports = setupInput;