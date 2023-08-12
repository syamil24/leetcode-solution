"use strict";

//32. Longest Valid Parentheses
var longestValidParentheses = function longestValidParentheses(s) {
  var open = 0;
  var close = 0;
  var max = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(") open++;else close++;
    if (close === open) max = Math.max(max, open + close);else if (close > open) {
      open = 0;
      close = 0;
    }
  }

  open = 0;
  close = 0;

  for (var _i = s.length - 1; _i >= 0; _i--) {
    if (s[_i] === "(") open++;else close++;
    if (close === open) max = Math.max(max, open + close);else if (open > close) {
      open = 0;
      close = 0;
    }
  }

  console.log(max);
  return max;
};

longestValidParentheses("(()");