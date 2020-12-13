module.exports = function (instructions) {
  const len = 25;
  var i = len;
  const preamble = {};
  for (var j = 0; j < len; j++) {
    preamble[instructions[j]] = {};
    for (var k = 0; k < len; k++) {
      if (k !== j) {
        preamble[instructions[j]][parseInt(instructions[k]) + parseInt(instructions[j])] = 1;
      }
    }
  }
  const check = num => Object.keys(preamble).find(index => preamble[index][num]);
  while (i < instructions.length) {
    if (!check(instructions[i])) {
      return instructions[i];
    }
    delete preamble[instructions[i - len]];
    preamble[instructions[i]] = {};
    Object.keys(preamble).forEach(index => {
      if (index !== instructions[i]) {
        preamble[instructions[i]][parseInt(instructions[i]) + parseInt(index)] = 1;
      }
    });
    i += 1;
  }
};
