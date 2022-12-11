const { species } = require('../data/zoo_data');

const getSchedule = (scheduleTarget) => {
  const diasSemana = species.filter((specie) => {
    return specie.name === scheduleTarget;
  });
  return diasSemana[0].availability;
};

console.log(getSchedule('tigers'));
module.exports = getSchedule;
