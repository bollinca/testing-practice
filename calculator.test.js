const calculator = require('./calculator.js');

describe('adds', () => {
  test('positive integers', () => {
    expect(calculator.add(1, 2))
      .toBe(3);
  });

  test('negative integers', () => {
    expect(calculator.add(-5, 2))
      .toBe(-3)
  });

  test('decimals', () => {
    expect(calculator.add(.00015, .002))
      .toBe(.00215)
  });

  test('rejects strings', () => {
    function addString() {
      calculator.add('words', 'more words');
    }

    expect(addString)
      .toThrow('Cannot add strings')
  });
})

describe('subtracts', () => {
  test('positive integers', () => {
    expect(calculator.subtract(5, 10))
      .toBe(-5);
  });

  test('two negative numbers', () => {
    expect(calculator.subtract(-200, -25))
      .toBe(-175);
  });

  test('decimals', () => {
    expect(calculator.subtract(0.25, 50))
      .toBe(-49.75);
  })
})

describe('divides', () => {
  test('positive integers', () => {
    expect(calculator.divide(10, 5))
      .toBe(2);
  })
  test('when denominator is a decimal', () => {
    expect(calculator.divide(5, .5))
      .toBe(10);
  })
  test('when denominator is negative', () => {
    expect(calculator.divide(20, -10))
      .toBe(-2);
  })
  test('rejects zero in denominator', () => {
    function zeroDivide() {
      calculator.divide(10, 0)
    }
    expect(zeroDivide)
      .toThrow('Cannot divide by zero');
  })
})

describe('multiplies', () => {
  test('by zero', () => {
    expect(calculator.multiply(1000, 0))
      .toBe(0);
  })
  test('with one negative integer', () => {
    expect(calculator.multiply(-20, 2))
      .toBe(-40);
  })
  test('with two negative integers', () => {
    expect (calculator.multiply(-1, -1))
      .toBe(1);
  })
  test('by decimals', () => {
    expect(calculator.multiply(100, 0.5))
      .toBe(50);
  })
})