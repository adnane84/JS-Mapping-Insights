// Exercise 6: User Authentication
// Build a simple user authentication system using a Map to store username-password pairs.
// Implement functions for user registration, login, and password reset.

class UserAuthentication {
  constructor() {
    this.users = new Map();
  }

  registerUser(username, password) {
    if (this.users.has(username)) {
      console.log("Username already exists. Choose a different username.");
      return;
    }
    this.users.set(username, password);
    console.log("User registered successfully.");
  }

  login(username, password) {
    if (!this.users.has(username)) {
      console.log("Username not found. Please register first.");
      return;
    }
    const storedPassword = this.users.get(username);
    if (storedPassword === password) {
      console.log("Login successful.");
    } else {
      console.log("Incorrect password. Please try again.");
    }
  }

  resetPassword(username, newPassword) {
    if (!this.users.has(username)) {
      console.log("Username not found. Please register first.");
      return;
    }
    this.users.set(username, newPassword);
    console.log("Password reset successful.");
  }
}

const userAuth = new UserAuthentication();

userAuth.registerUser("alice", "password123");
userAuth.login("alice", "password123");
userAuth.login("alice", "wrongpassword");
userAuth.resetPassword("alice", "newpassword");
userAuth.login("alice", "newpassword");
