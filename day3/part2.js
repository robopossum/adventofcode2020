module.exports = function (instructions) {
  var output = 0;
  const paths = [
    {dX: 1, dY: 1},
    {dX: 3, dY: 1},
    {dX: 5, dY: 1},
    {dX: 7, dY: 1},
    {dX: 1, dY: 2}
  ];
  var y, count, index;
  var cols = instructions[0].length;
  paths.forEach(path => {
    count = 0
    y = 0;
    index = 0;
    while (y < instructions.length) {
      if (y === 0) {
        y += path.dY;
        index += 1;
	continue;
      }
      count += instructions[y].charAt((index * path.dX) % cols) === '#';
      y += path.dY;
      index += 1;
    }
    output = output ? output * count : count; 
  });
  return output;
};
