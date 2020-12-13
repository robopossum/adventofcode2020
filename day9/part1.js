module.exports = function (instructions) {
  const seen = {};
  var i = 0;
  var acc = 0;
  const regex = /(acc|jmp|nop) ([\+\-0-9]+)/;
  while(true) {
    if (seen[i]) {
      return acc;
    }
    seen[i] = 1;
    let [erv, opp, inc] = instructions[i].match(regex);
    acc += opp === 'acc' ? parseInt(inc) : 0;
    i += opp === 'jmp' ? parseInt(inc) : 1;
  }
};
