module.exports = function (instructions) {
  var output = 0;
  const fields = [
    /byr:/,
    /iyr:/,
    /eyr:/,
    /hgt:/,
    /hcl:/,
    /ecl:/,
    /pid:/,
  ];
  var blob = '';
  instructions.forEach((instruction, index) => {
    if (instruction) {
      blob = blob + ' ' + instruction;
      if (index !== instructions.length - 1) {
        return;
      }
    }
    let good = true;
    fields.forEach(regex => {
      if (!regex.exec(blob)) {
        good = false;
      }
    });
    output += good;
    blob = '';
  });
  return output;
};
