module.exports = function (instructions) {
  const ids = {};
  [...Array(1024).keys()].forEach(index => ids[index] = 1);
  instructions.forEach(instruction => {
    let num = parseInt(instruction.replace(/(B|R)/g, '1').replace(/(F|L)/g, '0'), 2);
    delete ids[num];
  });
  var last = -1;
  for (const id in ids) {
    if (id - 1 != last) {
      return id;
    }
    last = id;
  }
};
