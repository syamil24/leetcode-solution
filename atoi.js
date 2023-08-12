let myAtoi = function (s) {
  let regex = new RegExp("[+-]?[0-9]");
  let symbolRegex = new RegExp(["[ +-]"]);
  let lowerLimit = 2147483648;
  let upperimit = 2147483647;

  let array = s.split("");

  if (array.length > 200) return 0;
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    if (regex.test(array[i])) {
      temp.push(array[i]);
      if (!regex.test(array[i + 1])) break;
    } else if (
      !symbolRegex.test(array[i]) &&
      (symbolRegex.test(array[i + 1]) || regex.test(array[i + 1]))
    ) {
      return 0;
    } else if (symbolRegex.test(array[i])) {
      temp.push(array[i]);
    }
  }
  temp = parseInt(temp.join("").trim(), 10);
  if (isNaN(temp)) return 0;
  //   console.log(temp);
  if (Math.abs(temp) >= lowerLimit)
    return temp < 0 ? -1 * lowerLimit : 1 * upperimit;
  return temp;
};

console.log(myAtoi(".1"));
