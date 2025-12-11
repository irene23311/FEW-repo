// Program that uses both arrays (chapter 7) and strings (chapter 8)

// Collect words from the user until they type "stop"
const words = [];

while (true) {
  const input = prompt('Enter a word (type "stop" to finish):');

  // If the user clicks "Cancel", stop asking
  if (input === null) {
    break;
  }

  const trimmed = input.trim();

  // If the user types "stop" (any case), end the loop
  if (trimmed.toLowerCase() === "stop") {
    break;
  }

  // Ignore empty strings but keep valid words
  if (trimmed.length > 0) {
    words.push(trimmed);
  }
}

// Show how many words we collected (array length)
console.log(`You entered ${words.length} words.`);

if (words.length === 0) {
  console.log("No words to analyze.");
} else {
  let longestWord = words[0];

  // Go through each word in the array
  words.forEach(word => {
    console.log("----------");
    console.log(`Word: ${word}`);

    // String length
    console.log(`Length: ${word.length}`);

    // Lowercase / Uppercase versions
    console.log(`Lowercase: ${word.toLowerCase()}`);
    console.log(`Uppercase: ${word.toUpperCase()}`);

    // Count vowels in the word
    const vowels = "aeiou";
    let vowelCount = 0;
    for (const letter of word.toLowerCase()) {
      if (vowels.indexOf(letter) !== -1) {
        vowelCount++;
      }
    }
    console.log(`Vowel count: ${vowelCount}`);

    // Reverse the word using string → array → string
    const reversed = word.split("").reverse().join("");
    console.log(`Reversed: ${reversed}`);

    // Check if it's a palindrome (case-insensitive)
    const isPalindrome = word.toLowerCase() === reversed.toLowerCase();
    console.log(`Is palindrome: ${isPalindrome}`);

    // Track the longest word
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  console.log("==========");
  console.log(`Longest word you entered: ${longestWord}`);
}
