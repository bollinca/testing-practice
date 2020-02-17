function capitalize(string) {
  let stringArray = string.split('');
  stringArray[0] = stringArray[0].toUpperCase();
  newString = stringArray.join('')
  return newString;
}

module.exports = capitalize