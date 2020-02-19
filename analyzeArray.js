function analyze(array) {
  return {
    average: array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / (array.length),
    min: array.sort((a, b) => a - b)[0],
    max: array.sort((a, b) => a - b)[array.length - 1],
    length: array.length,
    };
}

module.exports = analyze
