const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {

              rl.close();

              const profileGenerator = () => {
                console.log(`Hey, I'm ${answer1}. An activity I enjoy doing is listening to ${answer3} while I ${answer2}. My favourite meal is ${answer4}, especially when I have ${answer5}. My favourite sport would have to be ${answer6}. These are some of my superpowers: ${answer7}!`)
              };
              profileGenerator();
            });
          });
        });
      });
    });
  });
});




