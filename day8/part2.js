module.exports = function (instructions) {
  const run = (instructions, index) => {
    const seen = {};
    const flips = [];
    var i = 0;
    var acc = 0;
    const regex = /(acc|jmp|nop) ([\+\-0-9]+)/;
    while(true) {
      if (seen[i]) {
        return [0, flips];
      }
      if (i === instructions.length) {
        return [1, acc];
      }
      seen[i] = 1;
      let [erv, opp, inc] = instructions[i].match(regex);
      if (opp !== 'acc') {
        flips.push(i);
      }
      if (i === index) {
        opp = opp === 'nop' ? 'jmp' : 'nop';
      }
      acc += opp === 'acc' ? parseInt(inc) : 0;
      i += opp === 'jmp' ? parseInt(inc) : 1;
    }
  }
  const [res, flips] = run(instructions, -1);
  var output = 0;
  flips.some(index => {
    var out = run(instructions, index);
    output = out[1];
    return out[0];
  });
  return output;
};
