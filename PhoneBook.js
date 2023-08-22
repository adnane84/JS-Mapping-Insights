// Exercise 3: Phone Book
// Build a simple phone book application using a Map.
// The application should allow users to add contacts (name and phone number),
// retrieve phone numbers by providing a name,
// and display all contacts in the phone book.

class PhoneBook {
  constructor() {
    this.contacts = new Map();
  }

  addContact(name, phoneNumber) {
    this.contacts.set(name, phoneNumber);
  }

  getPhoneNumber(name) {
    if (this.contacts.has(name)) {
      return this.contacts.get(name);
    } else {
      return "Contact not found";
    }
  }

  displayContacts() {
    if (this.contacts.size === 0) {
      console.log("Phone book is empty");
    } else {
      for (const [name, phoneNumber] of this.contacts) {
        console.log(`Name: ${name}, Phone Number: ${phoneNumber}`);
      }
    }
  }
}

const phoneBook = new PhoneBook();

phoneBook.addContact("Alice", "123-456-7890");
phoneBook.addContact("Bob", "987-654-3210");

console.log("Phone number for Alice:", phoneBook.getPhoneNumber("Alice"));
console.log("Phone number for Charlie:", phoneBook.getPhoneNumber("Charlie"));

console.log("All contacts:");
phoneBook.displayContacts();
