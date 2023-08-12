let multiply = function (num1, num2) {
  let result = Array(num1.length + num2.length).fill(0);
  for (let j = num2.length - 1; j >= 0; j--) {
    for (let i = num1.length - 1; i >= 0; i--) {
      let product = num1[i] * num2[j];
      const index =
        num1.length +
        num2.length -
        1 -
        (num2.length - 1 - j + num1.length - 1 - i);
      result[index] += product;
      if (product >= 10) {
        result[index - 1] += Math.floor(result[index] / 10);
        result[index] %= 10;
      }
    }
  }
  while (result[0] === 0) result.shift();

  console.log(result.join(""));
  return result.length === 0 ? "0" : result.join("");
};

multiply("123", "456");
