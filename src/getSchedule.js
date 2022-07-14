const data = require('../data/zoo_data');

const { species, hours } = data;
const days = Object.keys(hours);
const horas = Object.values(hours);

const schedule = (param) => {
  if (!param) {
    return days.reduce((acc, current, index) => {
      if (current === 'Monday') {
        acc[current] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      } else {
        acc[current] = {
          officeHour: `Open from ${horas[index].open}am until ${horas[index].close}pm`,
          exhibition: species.filter((element) =>
            element.availability.includes(current)).map((element) => element.name),
        };
      }
      return acc;
    }, {});
  }
};

const scheduleDay = (target) => ({ [target]: schedule()[target] });

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return schedule();
  }
  if (!(species.some((element) => element.name === scheduleTarget)
    || days.some((element) => element === scheduleTarget))) {
    return schedule();
  }
  if (days.includes(scheduleTarget)) {
    return scheduleDay(scheduleTarget);
  }
  return species.find((element) => element.name === scheduleTarget).availability;
}

module.exports = getSchedule;
