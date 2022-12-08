const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  const result = employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName);
  return result;
};
module.exports = getEmployeeByName;
