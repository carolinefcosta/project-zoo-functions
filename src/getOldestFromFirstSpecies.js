const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const person = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animal = species.find((specie) => specie.id === person).residents;
  const result = animal.sort((animal1, animal2) => animal2.age - animal1.age)[0];
  return Object.values(result);
};

module.exports = getOldestFromFirstSpecies;
