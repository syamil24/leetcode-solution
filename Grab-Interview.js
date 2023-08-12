// Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.

// example 1: [1,2,3,4]  => 5
// example 2: [3,1,5,6] => 2

// [2,3,4]
//1,3,5,6

function getDifferentNumber(numbers) {
  let sortedArray = numbers.sort();
  let smallestNumber = 1;
  if (sortedArray[0] >= 2) {
    return sortedArray[0] - 1;
  } else if (sortedArray[0] == 1) {
    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] > smallestNumber) {
        break;
      } else {
        smallestNumber = sortedArray[i] - 1;
      }
    }
  }

  return smallestNumber;
}

// 2) Given an array of integers, write a function that returns true if any integer occurs in the array more than once.

// [0,5,5,3,2,1,2]

function isDuplicate(numOfArrays) {
  let sortedArray = numOfArrays.sort(); // [0,1,2,2,3,5,5]
  let isDuplicate = false;

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] == sortedArray[i + 1]) {
      isDuplicate = true;
      break;
    }
  }
  return isDuplicate;
}

// 3) Given two strings s and t, write a function anagram_substrings that finds how many substrings of s are anagrams of t.
// => abc, => cba => anagram
// => abc, => aab

// abbc = abc

// let a = [1,2,3]
//   a[0] => 1
//   a[5] => ?

function anagram(input1, input2) {
  if (input1.length == 0 || input2.length == 0) return false;

  let input1Arr = input1.split("");
  let input2Arr = input2.split("");
  let result = [new Array()];
  for (let i = 0; i < input1Arr.length; i++) {
    for (let j = 0; j < input2Arr.length; j++) {
      if (input2Arr[j] == input1Arr[i]) {
        result.push(input2Arr[j]);
      }
    }
  }

  if (result.length == input2Arr.length) return true;
  return false;
}
