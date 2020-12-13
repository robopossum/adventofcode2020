module.exports = function (instructions) {
  var output = 0;
  const bags = {};
  const seen = {};
  const regex = /([a-z]+) ([a-z]+) bag/g;
  instructions.forEach(instruction => {
    let matches = instruction.match(regex);
    let dadBag = matches.shift();
    matches.forEach(bag => {
      if (!bags[bag]) {
        bags[bag] = [];
      }
      bags[bag].push(dadBag);
    });
  });
  const recurse = bag => {
    if (seen[bag]) {
      return;
    }
    output += 1;
    seen[bag] = 1;
    if (!bags[bag]) {
      return;
    }
    bags[bag].forEach(recurse);
  };
  recurse('shiny gold bag');
  return output - 1;
};
