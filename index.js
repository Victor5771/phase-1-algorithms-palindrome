function isPalindrome(word) {
  // Pseudocode:
  // 1. Initialize two pointers, one at the beginning and one at the end of the word.
  // 2. While the left pointer is less than the right pointer:
  //    a. Compare the characters at the left and right pointers.
  //    b. If they are not the same, return false (not a palindrome).
  //    c. Move the left pointer to the right, and the right pointer to the left.
  // 3. If the loop completes without returning false, the word is a palindrome, so return true.

  // Initialize pointers
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    // Compare characters at left and right pointers (case-insensitive)
    if (word[left].toLowerCase() !== word[right].toLowerCase()) {
      return false; // Not a palindrome
    }

    // Move pointers
    left++;
    right--;
  }

  return true; // Palindrome
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Custom test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
