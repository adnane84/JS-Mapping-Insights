// Exercise 11: Word Frequency Counter
// Write a function that takes a paragraph of text as input and uses a Map to count the frequency of each word in the text. 
// The function should return a Map where the keys are words and the values are their frequencies.

function countWordFrequency(paragraph) {
  const words = paragraph.toLowerCase().split(/\s+/); // Split by whitespace and convert to lowercase
  const wordFrequencyMap = new Map();

  for (const word of words) {
    const cleanedWord = word.replace(/[.,!?]/g, ""); // Remove punctuation
    if (cleanedWord !== "") {
      if (wordFrequencyMap.has(cleanedWord)) {
        wordFrequencyMap.set(cleanedWord, wordFrequencyMap.get(cleanedWord) + 1);
      } else {
        wordFrequencyMap.set(cleanedWord, 1);
      }
    }
  }

  return wordFrequencyMap;
}

const inputParagraph = "This is a test. This test is just a simple test. Simple, right?";
const frequencyMap = countWordFrequency(inputParagraph);

for (const [word, frequency] of frequencyMap) {
  console.log(`${word}: ${frequency}`);
}


