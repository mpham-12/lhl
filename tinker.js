const titleCase = function (string) {
  if (!string){
    return '';
  }
  return string.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');

};
console.log(titleCase('hi my name is martin'))

