const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const { species } = data;
  const every = animal.every((cadaAnimal) => {
    if (cadaAnimal.age === age) {
      return animal.age;
    } else {
      return animal.age > age;
    }
  });
  return every;
};
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
