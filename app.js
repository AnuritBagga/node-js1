const { rl, addEmployee, listEmployees, removeEmployee } = require('./routes/index');

// Show main menu
function showMenu() {
  console.log('\n=== Employee Management System ===');
  console.log('1. Add Employee');
  console.log('2. List Employees');
  console.log('3. Remove Employee');
  console.log('4. Exit');

  rl.question('Choose an option: ', (option) => {
    switch(option.trim()) {
      case '1':
        addEmployee(showMenu);
        break;
      case '2':
        listEmployees(showMenu);
        break;
      case '3':
        removeEmployee(showMenu);
        break;
      case '4':
        console.log('Exiting...');
        rl.close();
        break;
      default:
        console.log('Invalid option, try again.');
        showMenu();
    }
  });
}

// Start CLI
showMenu();
