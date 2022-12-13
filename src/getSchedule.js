const { species, hours } = require('../data/zoo_data');

const dayTrueOrFalse = (parametro) => Object.keys(hours).some((hour) => hour === parametro);

const parametersFalse = (parametro) =>
  (parametro === undefined || (!species.some((specie) => specie.name === parametro)
  && !dayTrueOrFalse(parametro)));

const dayMonday = () => ({
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
});

const returnDays = (dia) => {
  if (dia === 'Monday') {
    return dayMonday();
  }
  return {
    officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes(dia))
      .map(({ name }) => name),
  };
};

const getSchedule = (scheduleTarget) => {
  if (parametersFalse(scheduleTarget)) {
    const keys = Object.keys(hours);
    const objeto = {};
    keys.forEach((day) => {
      objeto[day] = returnDays(day);
    });
    return objeto;
  }
  if (dayTrueOrFalse(scheduleTarget)) {
    return {
      [scheduleTarget]: returnDays(scheduleTarget),
    };
  }
  const daysOfTheWeek = species.filter((specie) => specie.name === scheduleTarget);
  return daysOfTheWeek[0].availability;
};

module.exports = getSchedule;
