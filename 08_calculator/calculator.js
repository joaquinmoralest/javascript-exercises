const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (array) {
  let sum = 0
  if (array.length > 0) {
    array.forEach((el) => {
      sum += el
    })
  }
  return sum
};

const multiply = function (array) {
  let total = 1
  if (array.length > 0) {
    array.forEach((el) => {
      total *= el
    })
  }
  return total
};

const power = function (a, b) {
  return a ** b
};

const factorial = function (max) {
  let numbers = []
  let total = 1
  for (let i = 1; i <= max; i++) {
    numbers.push(i)
  }
  numbers.forEach((el) => {
    total *= el
  })
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
