const data = require('../data/zoo_data');

const { species, employees } = data;

const getSpecies = (ids) => {
  const arrayOfSpecies = [];
  ids.forEach((element) => {
    arrayOfSpecies.push(species.find((specie) => specie.id === element));
  });
  return arrayOfSpecies;
};

const getEmployeesById = (ids) => {
  const employee = employees.find((element) => element.id === ids);
  if (!employee) throw new Error('Informações inválidas');
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecies(employee.responsibleFor).map((element) => element.name),
    locations: getSpecies(employee.responsibleFor).map((element) => element.location),
  };
};

const getEmployeesByName = (name) => {
  const employee = employees.find((element) => element.firstName === name
     || element.lastName === name);
  if (!employee) throw new Error('Informações inválidas');
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecies(employee.responsibleFor).map((element) => element.name),
    locations: getSpecies(employee.responsibleFor).map((element) => element.location),
  };
};

function getEmployeesCoverage(object) {
  if (!object) {
    const arrayOfAllInfoEmployees = [];
    employees.forEach((employee) =>
      arrayOfAllInfoEmployees.push(getEmployeesByName(employee.firstName)));
    return arrayOfAllInfoEmployees;
  }
  if (Object.keys(object)[0] === 'id') {
    return getEmployeesById(object.id);
  }
  return getEmployeesByName(object.name);
}

module.exports = getEmployeesCoverage;
