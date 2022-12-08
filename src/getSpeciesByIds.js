const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }
  const result = ids.map((id) => species.find((specie) => specie.id === id));
  return result;
};

module.exports = getSpeciesByIds;
