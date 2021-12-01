const fs = require('fs');

const breedDetailsFromFile = function(breed, callBack) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) callBack(data);
  });
return 'No Data';
}; 
const printOutCatBreed = function(breed){
console.log('Return value:', breed);
};

breedDetailsFromFile('Bombay', printOutCatBreed)