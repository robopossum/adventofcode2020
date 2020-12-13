module.exports = function (instructions) {
  var output = 0;
  const alphabet = [...Array(26)].map((_, index) => new RegExp(String.fromCharCode(index + 97)));
  var blob = [];
  instructions.forEach((instruction, index) => {
    if (instruction) {
      blob.push(instruction);
      if (index !== instructions.length - 1) {
        return;
      }
    }
    alphabet.forEach(letter => {
      let count = 0;
      blob.forEach(answer => {
        count += !!letter.exec(answer);
      });
      output += count === blob.length;
    });
    blob = [];
  });
  return output;
};
