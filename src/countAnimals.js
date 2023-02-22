const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const result = species.find(({ name }) => name === animal.species);
  if (animal.sex) {
    return result.residents.filter(({ sex }) => sex === animal.sex).length;
  }
  return result.residents.length;
};

module.exports = countAnimals;
