const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const childs = entrants.filter((entrant) => entrant.age < 18).length;
  const adults = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const seniors = entrants.filter((entrant) => entrant.age >= 50).length;
  return {
    child: childs,
    adult: adults,
    senior: seniors,
  };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || !entrants.length) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const result = prices.child * child + prices.adult * adult + prices.senior * senior;
  return result;
};

module.exports = { calculateEntry, countEntrants };
