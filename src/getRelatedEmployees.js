const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employee = employees.filter((element) => element.managers.includes(managerId));
  return employee.map((element) => `${element.firstName} ${element.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
