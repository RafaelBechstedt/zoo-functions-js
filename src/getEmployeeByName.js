const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employeeInfos = employees.find((element) => element.firstName === employeeName
    || element.lastName === employeeName);
  return employeeInfos;
}

module.exports = getEmployeeByName;
