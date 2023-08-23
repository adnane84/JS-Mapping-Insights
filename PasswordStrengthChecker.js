// Exercise 20: Password Strength Checker
// Create a password strength checker using a Map to store common words and their associated scores. 
// Users can input a password, and the program should evaluate its strength based on the presence of common words and other criteria.

class PasswordStrengthChecker {
  constructor() {
    this.commonWords = new Map([
      ["password", 1],
      ["123456", 1],
      ["qwerty", 1],
      ["abc123", 1],
      ["letmein", 2],
      ["admin", 2],
      ["welcome", 2],
    ]);
  }

  checkPasswordStrength(password) {
    let score = 0;

    // Check for common words
    for (const [word, wordScore] of this.commonWords) {
      if (password.includes(word)) {
        score += wordScore;
      }
    }

    // Check length
    if (password.length >= 8) {
      score += 2;
    }

    // Check complexity
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+[\]{};':"\\|,.<>?/-]/.test(password);

    if (hasUpperCase && hasLowerCase) {
      score += 2;
    }

    if (hasDigits) {
      score += 2;
    }

    if (hasSpecialChars) {
      score += 2;
    }

    return score;
  }
}

const passwordChecker = new PasswordStrengthChecker();

const password = "MySecureP@ssw0rd";
const strengthScore = passwordChecker.checkPasswordStrength(password);

console.log(`Password strength score: ${strengthScore}`);
