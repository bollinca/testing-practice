function reverseString(string) {
  let stringArray = string.split('');
  let reversedString = stringArray.reverse().join('');
  return reversedString;
}

module.exports = reverseString
