export function isNotNullString(word?: string): boolean {
  let isBoolean = false;
  if (word !== undefined && word.trim() === '') isBoolean = true;
  return isBoolean;
}
