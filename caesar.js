function caesar(string, shift) {
  const lowAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const capsAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let stringArray = string.split('');

  let caesarString = stringArray.map((char) => {
    let newChar;
    if (lowAlphabet.includes(char)) {
      newIndex = loopProtection(lowAlphabet.indexOf(char) + shift);
      newChar = lowAlphabet[newIndex];
    } else if (capsAlphabet.includes(char)) {
      newIndex = loopProtection(capsAlphabet.indexOf(char) + shift);
      newChar = capsAlphabet[newIndex];
    } else {
      newChar = char;
    }
    return newChar;
  })
  return caesarString.join('')

  function loopProtection(index) {
    while (index >= 26) {
      index = index - 26;
    }
    while (index <= -1) {
      index = index + 26
    }
    return index
  }
}

module.exports = caesar
