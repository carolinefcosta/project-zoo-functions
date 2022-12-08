const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const result = species.every((cadaAnimal) => {
    if (cadaAnimal.age === age) {
      return animal.age;
    }
    return animal.age > age;
  });
  return result;
};
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
