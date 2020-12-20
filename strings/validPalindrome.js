//two pointer from outside solution
function validPalindrome(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    if (s[p1] !== s[p2]) return false;
    else {
      p1++;
      p2--;
    }
  }
  return true;
}

//console.log(validPalindrome("A man, a plan, a canal: Panama"));
//console.log(validPalindrome("race a car"));

//two pointers from center solution
function validPalindrome2(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let p1 = Math.floor(s.length / 2),
    p2 = p1;

  if (s.length % 2 === 0) p1--;

  while (p1 >= 0 && p2 < s.length) {
    if (s[p1] !== s[p2]) return false;
    else {
      p1--;
      p2++;
    }
  }
  return true;
}

//console.log(validPalindrome2("A man, a plan, a canal: Panama"));
//console.log(validPalindrome2("race a car"));

function validPalindrome3(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let rev = "";

  // generate a reverse string using a reverse for loop.
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }

  return rev === s;
}

console.log(validPalindrome3("A man, a plan, a canal: Panama"));
console.log(validPalindrome3("race a car"));
