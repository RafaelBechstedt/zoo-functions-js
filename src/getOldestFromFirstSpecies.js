const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { employees, species } = data;
  const animalId = employees.find((element) =>
    element.id === id).responsibleFor[0];
  const animal = species.find((element) => element.id === animalId);
  const oldestAnimal = animal.residents.sort((a, b) => b.age - a.age)[0];
  const arrayInfosOldestAnimal = Object.values(oldestAnimal);
  return arrayInfosOldestAnimal;
}

module.exports = getOldestFromFirstSpecies;
