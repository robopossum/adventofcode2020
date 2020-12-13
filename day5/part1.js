module.exports = function (instructions) {
  var output = 0;
  instructions.forEach(instruction => {
    let num = parseInt(instruction.replace(/(B|R)/g, '1').replace(/(F|L)/g, '0'), 2);
    output = num > output ? num : output;
  });
  return output;
};
