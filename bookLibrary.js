// Exercise 12: Book Library
// Create a book library system using a Map where books are stored with their titles as keys and author names as values. 
// Implement functions to add books, search for books by title, and display the entire book library.

class BookLibrary {
  constructor() {
    this.library = new Map();
  }

  addBook(title, author) {
    if (this.library.has(title)) {
      console.log(`Book with title '${title}' already exists.`);
    } else {
      this.library.set(title, author);
      console.log(`Book '${title}' added to the library.`);
    }
  }

  searchBook(title) {
    if (this.library.has(title)) {
      return this.library.get(title);
    } else {
      return "Book not found.";
    }
  }

  displayLibrary() {
    console.log("Book Library:");
    for (const [title, author] of this.library) {
      console.log(`${title} by ${author}`);
    }
  }
}

const myLibrary = new BookLibrary();

myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald");
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee");
myLibrary.addBook("1984", "George Orwell");
myLibrary.addBook("The Great Gatsby", "Another Author"); // This will show an error message

console.log("Author of 'The Great Gatsby':", myLibrary.searchBook("The Great Gatsby"));
console.log("Author of 'Moby Dick':", myLibrary.searchBook("Moby Dick")); // Book not found

myLibrary.displayLibrary();
