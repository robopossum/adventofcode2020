module.exports = function (instructions) {
  var output = 0;
  instructions.forEach(instruction => {
    let matches = /(\d+)-(\d+) ([a-z]): ([a-z]*)/.exec(instruction);
    output += matches[4].charAt(matches[1] - 1) == matches[3] ^ matches[4].charAt(matches[2] - 1) == matches[3] ? 1 : 0;
  });
  return output;
};
