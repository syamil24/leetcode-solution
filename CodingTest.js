// <!-- Given a chat log file and a number k, determine the top k chattiest users
// Chattiest means how many words a user has chatted (typed in)
// A word is simply anything between whitespace.

// The logfile format is like this:
// <user1> this is some chat words
// <user2> the sky is blue
// This line is still attributed to the user above haha
// <user1> more chat from me! 38gad81

// *You can assume that the whole text above is a string in the same format.
// *You can assume the characters “<” and “>” only appear in the file for attributing a username.

// Return a list of the chattiest users, in descending order.

// Sample output:
// [“user2”, “user1”]

// You can use any programming language that you are familiar with.
// You need to share your screen while you are working on it.
// Code on an IDE and then make sure the code can produce the expected output.
// Please paste your code here once done -->

function mostChattiestUsers(logFile, k) {
  let map = new Map(); // (username , count)
  // let temp = new Array();
  let count = 0;
  let array = new Array();

  let splittedLog = logFile.split("\n");
  for (let i = 0; i < splittedLog.length; i++) {
    let words = splittedLog.split(" ");
    for (let j = 0; j < words.length; j++) {
      if (words[0].includes("<")) {
        count = countWords(splittedLog[i]);
        if (splittedLog[i + 1].includes("<")) {
          map.set(returnUsername(words[0], count));
          count = 0;
        }
      }
    }
  }

  const sortedMap = new Map([...map].sort());
  let total = 0;
  let temp = "";

  sortedMap.forEach((values, keys) => {
    let curr = keys;
    if (temp == curr) {
      total = total + values;
    } else {
      total = 0;
      array.push(keys);
    }
  });

  return returnTopK(array, k);
}

function countWords(sentence) {
  let count = sentence.split(" ");
  return count - 1;
}

function returnUsername(word) {
  return word.substring(1, words.length - 1);
}

function returnTopK(userArray, k) {
  let sortedArray = userArray.sort(function (a, b) {
    return a - b;
  });
  let topKusers = new Array();
  for (let i = k - 1; i > 0; i++) {
    //to make it descending
    topKusers.push(sortedArray[i]);
  }
}

mostChattiestUsers(
  "<user1> this is some chat words \n <user2> the sky is blue \n This line is still attributed to the user above haha \n <user1> more chat from me! 38gad81 ",
  0
);
