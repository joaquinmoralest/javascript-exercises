const sumAll = function (...numbers) {
  if (numbers.some((number) => number < 0 || typeof number != 'number')) {
    return 'ERROR'
  } else {
    const sortedNumber = numbers.sort()
    let total = 0
    for (let i = sortedNumber[0]; i <= sortedNumber[1]; i++) {
      total += i
    }
    return total
  }
};

// Do not edit below this line
module.exports = sumAll;
