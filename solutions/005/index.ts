export const encryptThis = (str: string): string => {
  if (!str) return str;
  const splitedWords = str.split(' ');
  const result = splitedWords.map((word) => {
    const asciiCode = word.charCodeAt(0);
    if (word.length == 1) return asciiCode;
    else if (word.length == 2) {
      return `${asciiCode}${word[1]}`;
    } else {
      const secondChar = word[1];
      const lastChar = word[word.length - 1];
      const middle = word.substr(2, word.length - 3);
      return `${asciiCode}${lastChar}${middle}${secondChar}`;
    }
  });
  return result.join(' ');
};
