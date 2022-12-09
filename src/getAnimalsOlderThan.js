const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const name = species.find((specieName) => specieName.name === animal);
  const result = name.residents.every((specieAge) => specieAge.age > age);
  return result;
};

module.exports = getAnimalsOlderThan;
