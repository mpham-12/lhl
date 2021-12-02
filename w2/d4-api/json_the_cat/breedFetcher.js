const request = require('request');

const input = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + input;

const fetchBreedDescription = function(breedName, callback) {
  request(url, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
      return callback(error);
    }
    if (breedName === null) {
      console.log('requested breed is not found');
    }

    return callback(data[0].description, null);
  });
};

fetchBreedDescription(input, (error, description) => {
  console.log(error, description);
});

module.exports = fetchBreedDescription;
