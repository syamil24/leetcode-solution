// 49. Group Anagrams

let groupAnagrams = function (strs) {
  let anagrams = [[]],
    sortedArray = []; //declare 2d array
  console.log("length is " + strs.length);
  if (strs.length == 1) return anagrams.push(strs[0]);
  //   if (strs.length == 0) return anagrams.push([""]);

  anagrams.shift();
  for (let i = 0; i < strs.length; i++) {
    let temp = String(strs[i].split("").sort().join(""));
    let data = exists(sortedArray, temp);
    if (data[0]) {
      let index = data[0]["index"];
      anagrams[index].push(strs[i]);
    } else {
      sortedArray.push(temp);
      anagrams.push([strs[i]]);
    }
  }

  function exists(arr, search) {
    let existData = [];
    arr.some((row, i) => {
      if (row.includes(search)) {
        existData.push({
          exist: true,
          index: i,
        });
      }
    });
    return existData != []
      ? existData
      : existData.push({
          exist: false,
        });
  }
  console.log(anagrams);
  return anagrams;
};

let array = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams([""]);
