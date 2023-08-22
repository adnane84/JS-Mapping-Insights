// Exercise 2: Unique Words Counter
// Create a function that takes an array of words and uses a Set to count the number of unique words in the array.
//  Return the count of unique words.

function uniqueWordsCounter(wordsArray) {
  const uniqueWordsSet = new Set(wordsArray);
  return uniqueWordsSet.size;
}

// Example usage
const words = ["apple", "banana", "apple", "orange", "banana", "grape"];
const uniqueWordCount = uniqueWordsCounter(words);
console.log(`Number of unique words: ${uniqueWordCount}`);
