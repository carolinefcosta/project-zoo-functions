const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const person = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animal = species.find((specie) => specie.id === person).residents;
  const resultOder = animal.sort((animal1, animal2) => animal2.age - animal1.age)[0];
  return Object.values(resultOder);
};

module.exports = getOldestFromFirstSpecies;
