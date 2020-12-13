module.exports = function (instructions) {
  const index = {};
  instructions.forEach(instruction => index[instruction] = 1);
  for (var num in index) {
    for (var other in index) {
      if (index[2020 - num - other]) {
        return num * other * (2020 - num - other);
      }
    }
  }
};
