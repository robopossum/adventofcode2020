module.exports = function (instructions) {
  var output = 0;
  const fields = [
    { regex: /byr:(\d{4}) /, check: num => 1920 <= num && num <= 2002 },
    { regex: /iyr:(\d{4}) /, check: num => 2010 <= num && num <= 2020 },
    { regex: /eyr:(\d{4}) /, check: num => 2020 <= num && num <= 2030 },
    { regex: /hgt:(\d+)(in|cm) /, check: (num, unit) => unit == 'cm' ? 150 <= num && num <= 193 : 59 <= num && num <= 76 },
    { regex: /hcl:#[0-9a-f]{6} /, check: () => true },
    { regex: /ecl:(amb|blu|brn|gry|grn|hzl|oth) /, check: () => true },
    { regex: /pid:[0-9]{9} /, check: () => true }
  ];
  var blob = '';
  instructions.forEach((instruction, index) => {
    if (instruction) {
      blob = blob + ' ' + instruction;
      if (index !== instructions.length - 1) {
        return;
      }
    }
    blob = blob + ' ';
    let good = true;
    fields.forEach(field => {
      let matches = field.regex.exec(blob);
      if (!matches || !field.check.apply(null, matches.slice(1))) {
        good = false;
      }
    });
    output += good;
    blob = '';
  });
  return output;
};
