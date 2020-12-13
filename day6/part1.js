module.exports = function (instructions) {
  var output = 0;
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var blob = '';
  instructions.forEach((instruction, index) => {
    if (instruction) {
      blob = blob + ' ' + instruction;
      if (index !== instructions.length - 1) {
        return;
      }
    }
    alphabet.forEach(letter => {
      output += !!(new RegExp(letter)).exec(blob);
    });
    blob = '';
  });
  return output;
};
