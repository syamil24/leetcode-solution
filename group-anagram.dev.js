"use strict";

// 49. Group Anagrams
var groupAnagrams = function groupAnagrams(strs) {
  var anagrams = [[]],
      sortedArray = []; //declare 2d array

  console.log("length is " + strs.length);
  if (strs.length == 1) return anagrams.push(strs[0]); //   if (strs.length == 0) return anagrams.push([""]);

  anagrams.shift();

  for (var i = 0; i < strs.length; i++) {
    var temp = String(strs[i].split("").sort().join(""));
    var data = exists(sortedArray, temp);

    if (data[0]) {
      var index = data[0]["index"];
      anagrams[index].push(strs[i]);
    } else {
      sortedArray.push(temp);
      anagrams.push([strs[i]]);
    }
  }

  function exists(arr, search) {
    var existData = [];
    arr.some(function (row, i) {
      if (row.includes(search)) {
        existData.push({
          exist: true,
          index: i
        });
      }
    });
    return existData != [] ? existData : existData.push({
      exist: false
    });
  }

  console.log(anagrams);
  return anagrams;
};

var array = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams([""]);