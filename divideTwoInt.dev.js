"use strict";

// 29. Divide Two Integers
var divide = function divide(dividend, divisor) {
  var tempDividend = Math.abs(dividend);
  var tempDivisor = Math.abs(divisor);
  var sum = 0,
      max = 2147483647;
  var isNegative = false;

  if (!(dividend > 0 && divisor > 0 || dividend < 0 && divisor < 0)) {
    isNegative = true;
    console.log("Is negative is true");
  }

  while (tempDividend >= 0) {
    tempDividend = tempDividend - tempDivisor;
    if (tempDividend < 0) break;
    sum++;
  }

  if (sum > 2147483647) return isNegative ? -2147483648 : max;
  return isNegative ? -Math.abs(sum) : sum;
};

divide(2147483647, 2);