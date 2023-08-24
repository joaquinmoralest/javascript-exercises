const fibonacci = function (n) {
  let a = 1
  let b = 1
  if (n >= 0) {
    for (let i = 3; i <= n; i++) {
      let c = a + b
      a = b
      b = c
    }
    return b
  }
  return 'OOPS'
};

// Do not edit below this line
module.exports = fibonacci;
