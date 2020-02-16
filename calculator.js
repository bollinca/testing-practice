calculator = {
  add: function (a, b) {
    if (typeof a === "string" || typeof b === "string") {
      throw Error('Cannot add strings');
    }
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    if (b === 0) {
      throw Error('Cannot divide by zero')
    }
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  }
}

module.exports = calculator;