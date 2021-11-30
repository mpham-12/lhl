const nameInverter = function (name) {
if (name === ''){
  return '';
}
if (name === name){
  return name.replace(/ /g,'');
}


  if(name===name) {
    return name.split(' ').reverse().join(', ');   
    };
};


module.exports = nameInverter;
