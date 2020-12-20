function validSubPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

function almostPalindrome(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        validSubPalindrome(s, left + 1, right) ||
        validSubPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
}

console.log(almostPalindrome("abccdba"));
console.log(almostPalindrome("raceacar"));
console.log(almostPalindrome("abcdefdba"));
