const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some((employee) => employee.managers.some((manager) =>
  manager === id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const colaboradores = [];
    employees.forEach((employee) => {
      employee.managers.forEach((manager) => {
        if (manager === managerId) {
          colaboradores.push(`${employee.firstName} ${employee.lastName}`);
        }
      });
    });
    return colaboradores;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = { isManager, getRelatedEmployees };
