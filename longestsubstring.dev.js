"use strict";

var lengthOfLongestSubstring = function lengthOfLongestSubstring(s) {
  var longestStringLength = 0,
      startString = 0,
      currentPosition = 0;
  var setOfString = new Set();

  while (currentPosition < s.length) {
    if (setOfString.has(s[currentPosition])) {
      setOfString["delete"](s[startString++]);
    } else {
      setOfString.add(s[currentPosition++]);
      longestStringLength = Math.max(longestStringLength, setOfString.size);
    }
  }

  console.log(longestStringLength);
  return longestStringLength;
};

lengthOfLongestSubstring("abcde");