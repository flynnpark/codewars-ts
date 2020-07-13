export function longestConsec(strarr: string[], k: number): string {
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return '';
  }
  let longStr = '';
  let newStr = [];
  for (let i = 0; i < n; i++) {
    newStr = strarr.slice(i, i + k);
    if (newStr.join('').length > longStr.length) {
      longStr = newStr.join('');
    }
  }
  return longStr;
}
