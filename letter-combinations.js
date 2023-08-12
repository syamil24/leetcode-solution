// 17. Letter Combinations of a Phone Number
/* let letterCombinations = function (digits) {
  if (digits.length == 0) return [];
  let numMapping = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let finalResult = [];
  generateCombination(finalResult, digits, 0);
  console.log(finalResult);
  return finalResult;

  function generateCombination(array, digit, index) {
    for (const character of numMapping[digit[index]]) {
      array.push(character);
      generateCombination(array, digit, index + 1);
      array.pop();
    }
  }
}; */

const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

let result = [];

var letterCombinations = function (digits) {
  if (!digits) return [];

  let current = [];

  generateCombination(current, digits, 0);
  console.log(current);

  return result;
};

function generateCombination(current, digits, index) {
  if (index === digits.length) {
    // result.push(current.join(""));
    return;
  }

  for (const char of map[digits[index]]) {
    current.push(char);
    generateCombination(current, digits, index + 1);
    console.log(current);
    console.log(current.pop());
  }
}

letterCombinations("23");
