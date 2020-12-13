module.exports = function (instructions) {
  var output = 0;
  instructions.forEach(instruction => {
    let matches = /(\d+)-(\d+) ([a-z]): ([a-z]*)/.exec(instruction);
    let count = (matches[4].match(new RegExp(matches[3], 'g')) || []).length;
    output += count >= matches[1] && count <= matches[2] ? 1 : 0;
  });
  return output;
};
