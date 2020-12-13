module.exports = function (instructions) {
  var output = 0;
  var x = 0;
  var cols = 0;
  instructions.forEach(instruction => {
    if (x === 0) {
      cols = instruction.length;
      return x = 1;
    }
    output += instruction.charAt((x * 3) % cols) === '#';
    x += 1;
  });
  return output;
};
