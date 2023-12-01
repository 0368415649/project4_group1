const NOT_ALLOWED_KEYS = ['-', 'e', '+'];

export function preventSpecialCharacters(e) {
  if (NOT_ALLOWED_KEYS.includes(e.key)) e.preventDefault();
}
