//32. Longest Valid Parentheses
let longestValidParentheses = function (s) {
  let open = 0;
  let close = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") open++;
    else close++;

    if (close === open) max = Math.max(max, open + close);
    else if (close > open) {
      open = 0;
      close = 0;
    }
  }

  open = 0;
  close = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "(") open++;
    else close++;

    if (close === open) max = Math.max(max, open + close);
    else if (open > close) {
      open = 0;
      close = 0;
    }
  }
  console.log(max);
  return max;
};

longestValidParentheses("(()");
