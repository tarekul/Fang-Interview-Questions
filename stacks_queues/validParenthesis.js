function validParenthesis(str) {
  const parens = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  if (str.length === 0) return true;

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (parens[char]) stack.push(char);
    else {
      const leftBracket = stack.pop();
      const correctBracket = parens[leftBracket];
      if (char !== correctBracket) return false;
    }
  }

  return stack.length === 0;
}

console.log(validParenthesis("[({}}]"));
