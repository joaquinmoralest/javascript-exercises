const findTheOldest = function (array) {
  return array.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath)
    return oldestAge > currentAge ? oldest : current
  })
};

const getAge = (yearOfBirth, yearOfDeath) => {
  if (!yearOfDeath) {
    yearOfDeath = new Date().getFullYear()
  }
  return yearOfDeath - yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;
