function caesar(string, shift) {
  const lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let stringArray = string.split('');

  let caesarString = stringArray.map((character) => {
    let caesarCharacter;
    if (lowercaseArray.includes(character)) {
      caesarIndex = lowercaseArray.indexOf(character) + shift;
      caesarCharacter = lowercaseArray[caesarIndex];
    } else if (uppercaseArray.includes(character)) {
      caesarIndex = uppercaseArray.indexOf(character) + shift;
      caesarCharacter = uppercaseArray[caesarIndex];
    } else {
      caesarCharacter = character;
    }
    return caesarCharacter;
  })
  return caesarString.join('')
}

module.exports = caesar
