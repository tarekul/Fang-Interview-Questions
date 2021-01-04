function minimumRemoveToMakeValid(s) {
  const stack = [];
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    else if (s[i] === ")") {
      if (stack.length === 0) s[i] = "";
      else stack.pop();
    }
  }

  let newStr = "";
  while (stack.length) {
    const idx = stack.pop();
    s[idx] = "";
  }

  return s.join("");
}

console.log(minimumRemoveToMakeValid("a)b(c)d)"));
