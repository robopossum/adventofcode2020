module.exports = function (instructions) {
  const index = {};
  instructions.forEach(instruction => index[instruction] = 1);
  for (var num in index) {
    if (index[2020 - num]) {
      return num * (2020 - num);
    }
  }
};
