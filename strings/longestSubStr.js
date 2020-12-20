function findLongestSS(str) {
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    let seen = {};
    for (let j = i; j < str.length; j++) {
      const char = str[j];
      if (!seen[char]) {
        seen[char] = true;
        count++;
        maxLength = Math.max(count, maxLength);
      } else if (seen[char]) break;
    }
  }
  return maxLength;
}

//console.log(findLongestSS(" "));

function fndLngstSSOptim(str) {
  let longest = 0;
  let seen = new Map();
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (seen.get(char)) start = Math.max(start, seen.get(char));

    longest = Math.max(longest, i - start + 1);
    seen.set(char, i + 1);
  }
  return longest;
}

console.log(fndLngstSSOptim("pwwkewabcwd"));
/*
p : 1
w: 3
k: 4
e: 5

*/
