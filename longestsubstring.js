let lengthOfLongestSubstring = function (s) {
  let longestStringLength = 0,
    startString = 0,
    currentPosition = 0;

  let setOfString = new Set();

  while (currentPosition < s.length) {
    if (setOfString.has(s[currentPosition])) {
      setOfString.delete(s[startString++]);
    } else {
      setOfString.add(s[currentPosition++]);
      longestStringLength = Math.max(longestStringLength, setOfString.size);
    }
  }

  console.log(longestStringLength);
  return longestStringLength;
};

lengthOfLongestSubstring("abcde");
