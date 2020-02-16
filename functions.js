const functions = {

  errorTest: function () {
    throw Error('This is a test');
  },

  // capitalize: function () {

  // },

  // reverseString: function() {

  // },

  // caesarCipher: function () {

  // },

  // arrayAnalysis: function () {

  // },

  calculator: {
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
  },
};
module.exports = functions;