const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  if (!animal) {
    const noParam = {};
    species.forEach((element) => {
      noParam[element.name] = element.residents.length;
    });
    return noParam;
  }
  if (!animal.sex) {
    return species.find((element) => element.name === animal.specie).residents.length;
  }
  const specie = species.find((element) => element.name === animal.specie);
  return specie.residents.filter((element) => element.sex === animal.sex).length;
}

module.exports = countAnimals;
