function matchingStrings(S, T) {
  let stack = [];
  for (let char of S) {
    if (char !== "#") stack.push(char);
    else if (char === "#") stack.pop();
  }
  const typedOutStr1 = stack.join("");
  stack = [];
  for (let char of T) {
    if (char !== "#") stack.push(char);
    else if (char === "#") stack.pop();
  }
  const typedOutStr2 = stack.join("");
  if (typedOutStr1 === typedOutStr2) return true;
  else return false;
}

//console.log(matchingStrings("a###b", "a#d#bc"));

function matchingStringsOptimized(S, T) {
  let p1 = S.length - 1;
  let p2 = T.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    let wait1 = 0;
    let wait2 = 0;
    if (S[p1] === "#") {
      wait1 += 2;
      while (wait1 > 0) {
        wait1--;
        p1--;
        if (S[p1] === "#") wait1 += 2;
      }
    }
    if (T[p2] === "#") {
      wait2 += 2;
      while (wait2 > 0) {
        wait2--;
        p2--;
        if (T[p2] === "#") wait2 += 2;
      }
    }
    if (S[p1] !== T[p2]) return false;
    else {
      p1--;
      p2--;
    }
  }
  return true;
}

console.log(matchingStringsOptimized("bbbextm", "bbb#extm"));
