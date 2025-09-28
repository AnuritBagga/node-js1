const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let employees = [];
function addEmployee(callback) {
  rl.question('Enter Employee ID: ', (id) => {
    if (employees.find(emp => emp.id === id.trim())) {
      console.log('Employee ID already exists.');
      return callback();
    }
    rl.question('Enter Employee Name: ', (name) => {
      employees.push({ id: id.trim(), name: name.trim() });
      console.log(`Employee ${name.trim()} added successfully!`);
      callback();
    });
  });
}
function listEmployees(callback) {
  if (employees.length === 0) {
    console.log('No employees found.');
  } else {
    console.log('\n--- Employee List ---');
    employees.forEach(emp => {
      console.log(`ID: ${emp.id} | Name: ${emp.name}`);
    });
  }
  callback();
}
function removeEmployee(callback) {
  rl.question('Enter Employee ID to remove: ', (id) => {
    const index = employees.findIndex(emp => emp.id === id.trim());
    if (index === -1) {
      console.log('Employee not found.');
    } else {
      const removed = employees.splice(index, 1);
      console.log(`Employee ${removed[0].name} removed successfully.`);
    }
    callback();
  });
}
module.exports = {
  rl,
  addEmployee,
  listEmployees,
  removeEmployee
};
