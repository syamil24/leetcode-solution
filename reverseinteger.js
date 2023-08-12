var reverse = function (n) {
  let str = "" + Math.abs(n);
  let reversed = str.split("").reverse().join("");
  let reversedInt = +reversed;
  if (reversedInt > 2147483647) return 0;
  return (n < 0 ? -1 : 1) * reversedInt;
};

console.log(reverse(1534236469));
