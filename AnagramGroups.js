// Exercise 13: Anagram Groups
// Write a function that takes an array of words and uses a Map to group words that are anagrams of each other. 
// The function should return a Map where the keys are the sorted letters of anagrams and the values are arrays of those anagrams.

function groupAnagrams(words) {
  const anagramGroups = new Map();

  words.forEach(word => {
    const sortedWord = sortLetters(word);
    if (anagramGroups.has(sortedWord)) {
      anagramGroups.get(sortedWord).push(word);
    } else {
      anagramGroups.set(sortedWord, [word]);
    }
  });

  return anagramGroups;
}

function sortLetters(word) {
  return word.split("").sort().join("");
}

const wordArray = ["listen", "silent", "enlist", "heart", "earth", "hello", "world"];
const anagramMap = groupAnagrams(wordArray);

for (const [sortedLetters, anagramList] of anagramMap) {
  console.log(`Anagrams of '${anagramList[0]}': ${anagramList.join(', ')}`);
}
