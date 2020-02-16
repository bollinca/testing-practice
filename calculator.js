calculator = {
  add: function (a, b) {
    if (typeof a === "string" || typeof b === "string") {
      throw Error('Cannot add strings');
    }
    return a + b;
  },
  // subtract: function (a, b) {

  // },
  // divide: function () {

  // },
  // multiply: function () {

  // }
}

module.exports = calculator;