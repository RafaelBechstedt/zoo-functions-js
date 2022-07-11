const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitor = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      visitor.child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      visitor.adult += 1;
    }
    if (element.age >= 50) {
      visitor.senior += 1;
    }
  });
  return visitor;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { adult } = countEntrants(entrants);
  const { senior } = countEntrants(entrants);
  const { child } = countEntrants(entrants);
  const { prices } = data;
  return (adult * prices.adult) + (senior * prices.senior) + (child * prices.child);
}

module.exports = { calculateEntry, countEntrants };
