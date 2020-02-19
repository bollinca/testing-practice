function caesar(string, shift) {
  const lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let stringArray = string.split('');

  function findNewIndexes(charArray, shift) {
    let arrayByCaesarIndex = [];
    charArray.forEach((character) => {
      let caesarIndex;
      if (lowercaseArray.includes(character)) {
        caesarIndex = lowercaseArray.indexOf(character) + shift;
      } else if (uppercaseArray.includes(character)) {
        caesarIndex = uppercaseArray.indexOf(character) + shift;
      }
      arrayByCaesarIndex.push(caesarIndex);
    })

    return arrayByCaesarIndex;
  }

  function insertNewCharacters(indexArray) {
    let newArray = indexArray.map((newCaesarIndex) => {
      return lowercaseArray[newCaesarIndex];
    });
    return newArray.join('')
  }

  let test = findNewIndexes(stringArray, shift);
  return insertNewCharacters(test);

}

module.exports = caesar
