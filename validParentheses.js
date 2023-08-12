/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]); // map acting like key value

  for (let i = 0; i < s.length; i++) {
    console.log(stack);
    if (map.has(s[i])) stack.push(map.get(s[i]));
    else if (s[i] !== stack.pop()) return false;
  }

  console.log(stack.length === 0);
  return stack.length === 0; //will return true or false
};

isValid("(){}[}");
