
const joinList = function(array) {
  let text = array.toString().replace(/,/g, ", ");
  return text;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
