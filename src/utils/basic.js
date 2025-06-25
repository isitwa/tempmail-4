import { firstNames, lastNames } from "./randomName"

export function generateRandomUsername() {
  const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  const allChars = alphanumeric;
  let username = '';

  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    username += allChars.charAt(randomIndex);
  }

  return username;
}

export function generateRandomName() {
  const randomIndex1 = Math.floor(Math.random() * firstNames.length);
  const randomIndex2 = Math.floor(Math.random() * lastNames.length);

  //return `${firstNames[randomIndex1]} ${lastNames[randomIndex2]}`;

  // randomly add _ or . between first and last name
  const randomValue = Math.random();
  const separator = randomValue < 0.33 ? '_' : randomValue < 0.66 ? '.' : '';
  return `${firstNames[randomIndex1]}${separator}${lastNames[randomIndex2]}`;
}

export function generateRandomPassword() {
  const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  const allChars = alphanumeric + specialChars;
  let password = '';

  // Increase password length
  const passwordLength = 12; // Increased length for higher strength

  // Ensure inclusion of at least one character from each category
  password += 'A'; // Uppercase
  password += 'a'; // Lowercase
  password += '0'; // Numeric
  password += '!'; // Special character

  // Fill the rest of the password length with random characters from allChars
  for (let i = password.length; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  // Shuffle the password to avoid predictable patterns
  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  return password;
}

// Convert bytes to MB
export function bytesToMB(bytes) {
  if (isNaN(bytes)) {
    return 0
  }

  return (bytes / 1024 / 1024).toFixed(2);
}