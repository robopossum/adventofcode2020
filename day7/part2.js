module.exports = function (instructions) {
  var output = 0;
  const bags = {};
  const seen = {};
  const regex = /([a-z]+) ([a-z]+) bag/g;
  const numRegex = /(\d+)/g;
  instructions.forEach(instruction => {
    let matches = instruction.match(regex);
    let numbers = instruction.match(numRegex);
    let dadBag = matches.shift();
    if (matches[0] === 'no other bag') {
      return;
    }
    bags[dadBag] = [];
    matches.forEach((bag, index) => {
      bags[dadBag].push({
        bag,
        count: parseInt(numbers[index])
      });
    });
  });
  const recurse = (bag) => {
    if (seen[bag]) {
      return seen[bag];
    }
    if (!bags[bag]) {
      seen[bag] = 1;
      return 1;
    }
    var sum = 0;
    bags[bag].forEach(info => sum += recurse(info.bag) * info.count);
    seen[bag] = sum + 1;
    return sum + 1;
  };
  recurse('shiny gold bag');
  return seen['shiny gold bag'] - 1;
};
