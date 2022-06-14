export function duplicateCount(text: string): number {
  const duplicates = new Set<string>();
  const textLower = text.toLowerCase();

  for (let i = 0; i < textLower.length; i++) {
    if (textLower.indexOf(textLower[i], i + 1) > -1) {
      duplicates.add(textLower[i]);
    }
  }

  return duplicates.size;
}
