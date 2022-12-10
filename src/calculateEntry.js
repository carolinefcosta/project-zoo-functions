const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((entrant) => entrant.age < 18).length;

  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;

  const senior = entrants.filter((entrant) => entrant.age >= 50).length;

  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || entrants.length === {}) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const result = prices.child * child + prices.adult * adult + prices.senior * senior;
  return result.toFixed(2);
};

module.exports = { calculateEntry, countEntrants };
