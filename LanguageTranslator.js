// Exercise 17: Language Translator
// Develop a basic language translator using a Map to store translation pairs. 
// Users should be able to input a word in one language and receive 
// its translation in another language based on the stored translations.

class LanguageTranslator {
  constructor() {
    this.translations = new Map();
  }

  addTranslation(sourceWord, targetWord) {
    this.translations.set(sourceWord, targetWord);
  }

  translate(sourceWord) {
    if (this.translations.has(sourceWord)) {
      return this.translations.get(sourceWord);
    } else {
      return "Translation not found.";
    }
  }
}

const translator = new LanguageTranslator();

translator.addTranslation("hello", "hola");
translator.addTranslation("goodbye", "adiós");
translator.addTranslation("cat", "gato");
translator.addTranslation("dog", "perro");

const inputWord = "hello";
const translatedWord = translator.translate(inputWord);

console.log(`${inputWord} in Spanish: ${translatedWord}`);
