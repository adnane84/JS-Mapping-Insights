// 1: Counting Character Frequencies:
// Write a function that takes a string as input and uses a Map to count the frequency of each character in the string.
// The function should return a Map where the keys are characters and the values are their frequencies.

function countCharacterFrequencies(str) {
  const frequencyMap = new Map();

  for (const char of str) {
    if (frequencyMap.has(char)) {
      frequencyMap.set(char, frequencyMap.get(char) + 1);
    } else {
      frequencyMap.set(char, 1);
    }
  }

  return frequencyMap;
}

const inputString = "hello";
const result = countCharacterFrequencies(inputString);
console.log(result);
