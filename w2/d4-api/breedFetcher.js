const request = require('request');

const input = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + input;

const findBreedDescription = (breedName, fn) => {
  request(url, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
      return fn(error);
    }
    if (breedName === null) {
      console.log('requested breed is not found');
    }

    return fn(data[0].description, null);
  });
}

findBreedDescription(input, (error, description) => {
  console.log(error, description)
});


