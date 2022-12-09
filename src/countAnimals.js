const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const { residents } = species.find(({ name }) => name === animal.specie);
  if (animal.sex) {
    return residents.filter(({ sex }) => sex === animal.sex).length;
  }
  return residents.length;
};

console.log(countAnimals({ species: 'giraffes' }));

module.exports = countAnimals;
