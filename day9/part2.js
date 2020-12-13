module.exports = function (instructions) {
  const anom = 36845998;
  const nums = [];
  instructions.some(num => {
    if (parseInt(num) === anom) {
      return true;
    }
    nums.unshift(parseInt(num));
    return false;
  });
  while (nums.length) {
    let j = 0;
    let tot = nums[0];
    while (tot < anom && j < nums.length) {
      j += 1;
      tot += nums[j];
    }
    if (tot === anom) {
      let min = anom;
      let max = 0;
      let i = 0;
      while (i <= j) {
        min = nums[i] < min ? nums[i] : min;
        max = nums[i] > max ? nums[i] : max;
        i += 1;
      }
      return max + min;
    }
    nums.shift();
  }
};
